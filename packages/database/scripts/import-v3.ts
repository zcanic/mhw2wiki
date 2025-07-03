#!/usr/bin/env tsx
/**
 * MHW2Wiki 数据导入脚本 v3.0
 * 
 * 完全重写以适配 output/merged/ 数据结构
 * 支持并行导入、详细日志、幂等操作、错误恢复
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';

// 初始化 Prisma 客户端
const prisma = new PrismaClient({
  log: ['query', 'info', 'warn', 'error'],
});

// 数据文件路径配置
const DATA_PATH = resolve(__dirname, '../../../output/merged');

// 数据文件映射
const DATA_FILES = {
  // 核心数据
  items: 'Item.json',
  skills: 'Skill.json',
  monsters: 'LargeMonsters.json',
  armor: 'Armor.json',
  amulets: 'Amulet.json',
  accessories: 'Accessory.json',
  charms: 'Charm.json',
  armorUpgrades: 'ArmorUpgrade.json',
  species: 'Species.json',
  stages: 'Stage.json',
  partNames: 'PartNames.json',
  weaponSeries: 'WeaponSeries.json',
  
  // 狩猎笛专用数据
  huntingHornMelodies: 'weapons/HuntingHornMelodies.json',
  huntingHornSongs: 'weapons/HuntingHornSongs.json',
  
  // 各种武器
  weapons: {
    'great-sword': 'weapons/GreatSword.json',
    'long-sword': 'weapons/LongSword.json',
    'sword-shield': 'weapons/SwordShield.json',
    'dual-blades': 'weapons/DualBlades.json',
    'hammer': 'weapons/Hammer.json',
    'hunting-horn': 'weapons/HuntingHorn.json',
    'lance': 'weapons/Lance.json',
    'gunlance': 'weapons/Gunlance.json',
    'switch-axe': 'weapons/SwitchAxe.json',
    'charge-blade': 'weapons/ChargeBlade.json',
    'insect-glaive': 'weapons/InsectGlaive.json',
    'bow': 'weapons/Bow.json',
    'heavy-bowgun': 'weapons/HeavyBowgun.json',
    'light-bowgun': 'weapons/LightBowgun.json',
  }
} as const;

// 日志工具
class Logger {
  private startTime = performance.now();
  
  info(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.log(`[${elapsed}s] ℹ️  ${message}`, ...args);
  }
  
  success(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.log(`[${elapsed}s] ✅ ${message}`, ...args);
  }
  
  error(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.error(`[${elapsed}s] ❌ ${message}`, ...args);
  }
  
  warn(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.warn(`[${elapsed}s] ⚠️  ${message}`, ...args);
  }
}

const logger = new Logger();

// 数据加载工具
function loadJsonFile<T = any>(filePath: string): T[] {
  const fullPath = join(DATA_PATH, filePath);
  
  if (!existsSync(fullPath)) {
    logger.warn(`数据文件不存在: ${filePath}`);
    return [];
  }
  
  try {
    const content = readFileSync(fullPath, 'utf-8');
    const data = JSON.parse(content);
    
    if (!Array.isArray(data)) {
      logger.error(`数据文件格式错误 (非数组): ${filePath}`);
      return [];
    }
    
    logger.info(`加载数据文件: ${filePath} (${data.length} 条记录)`);
    return data;
  } catch (error) {
    logger.error(`解析数据文件失败: ${filePath}`, error);
    return [];
  }
}

// 批量插入工具
async function batchInsert<T>(
  tableName: string,
  data: T[],
  insertFn: (batch: T[]) => Promise<any>,
  batchSize = 1000
): Promise<number> {
  if (data.length === 0) {
    logger.warn(`${tableName}: 无数据可导入`);
    return 0;
  }
  
  let totalInserted = 0;
  
  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);
    
    try {
      await insertFn(batch);
      totalInserted += batch.length;
      
      if (data.length > batchSize) {
        logger.info(`${tableName}: 已导入 ${totalInserted}/${data.length} 条记录`);
      }
    } catch (error) {
      logger.error(`${tableName}: 批量插入失败`, error);
      throw error;
    }
  }
  
  logger.success(`${tableName}: 成功导入 ${totalInserted} 条记录`);
  return totalInserted;
}

// 清理数据库
async function clearDatabase(): Promise<void> {
  logger.info('开始清理数据库...');
  
  const tables = [
    'PartName', 'HuntingHornSong', 'HuntingHornMelody', 'Stage', 'Species',
    'ArmorUpgrade', 'Weapon', 'WeaponSeries', 'Charm', 'Accessory', 'Amulet',
    'ArmorSet', 'Monster', 'Skill', 'Item'
  ];
  
  for (const table of tables) {
    try {
      // SQLite不支持TRUNCATE，使用DELETE代替
      await prisma.$executeRawUnsafe(`DELETE FROM "${table}";`);
      await prisma.$executeRawUnsafe(`DELETE FROM sqlite_sequence WHERE name='${table}';`);
      logger.info(`清理表: ${table}`);
    } catch (error) {
      logger.warn(`清理表失败: ${table}`, error);
    }
  }
  
  logger.success('数据库清理完成');
}

// 导入物品数据
async function importItems(): Promise<void> {
  const items = loadJsonFile(DATA_FILES.items);
  
  await batchInsert('Item', items, async (batch) => {
    await prisma.item.createMany({
      data: batch.map((item: any) => ({
        game_id: BigInt(item.game_id),
        names: JSON.stringify(item.names),
        descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
        kind: item.kind || 'unknown',
        rarity: item.rarity || 0,
        max_count: item.max_count || 0,
        sell_price: item.sell_price || 0,
        buy_price: item.buy_price || 0,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入技能数据
async function importSkills(): Promise<void> {
  const skills = loadJsonFile(DATA_FILES.skills);
  
  await batchInsert('Skill', skills, async (batch) => {
    await prisma.skill.createMany({
      data: batch.map((skill: any) => ({
        game_id: BigInt(skill.game_id),
        names: JSON.stringify(skill.names),
        descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
        ranks: JSON.stringify(skill.ranks || []),
      })),
      skipDuplicates: true,
    });
  });
}

// 导入怪物数据
async function importMonsters(): Promise<void> {
  const monsters = loadJsonFile(DATA_FILES.monsters);
  
  await batchInsert('Monster', monsters, async (batch) => {
    await prisma.monster.createMany({
      data: batch.map((monster: any) => ({
        game_id: BigInt(monster.game_id),
        names: JSON.stringify(monster.names),
        descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
        features: monster.features ? JSON.stringify(monster.features) : null,
        species: monster.species || null,
        parts: monster.parts ? JSON.stringify(monster.parts) : null,
        rewards: monster.rewards || null,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入防具数据
async function importArmor(): Promise<void> {
  const armorSets = loadJsonFile(DATA_FILES.armor);
  
  await batchInsert('ArmorSet', armorSets, async (batch) => {
    await prisma.armorSet.createMany({
      data: batch.map((armorSet: any) => ({
        game_id: BigInt(armorSet.game_id),
        names: armorSet.names,
        rarity: armorSet.rarity || 0,
        set_bonus: armorSet.set_bonus || null,
        group_bonus: armorSet.group_bonus || null,
        pieces: armorSet.pieces || [],
      })),
      skipDuplicates: true,
    });
  });
}

// 导入护石数据
async function importAmulets(): Promise<void> {
  const amulets = loadJsonFile(DATA_FILES.amulets);
  
  await batchInsert('Amulet', amulets, async (batch) => {
    await prisma.amulet.createMany({
      data: batch.map((amulet: any) => ({
        game_id: BigInt(amulet.game_id),
        ranks: amulet.ranks || [],
      })),
      skipDuplicates: true,
    });
  });
}

// 导入饰品数据
async function importAccessories(): Promise<void> {
  const accessories = loadJsonFile(DATA_FILES.accessories);
  
  await batchInsert('Accessory', accessories, async (batch) => {
    await prisma.accessory.createMany({
      data: batch.map((accessory: any) => ({
        game_id: BigInt(accessory.game_id),
        names: accessory.names,
        descriptions: accessory.descriptions || null,
        rarity: accessory.rarity || 0,
        price: accessory.price || 0,
        level: accessory.level || 0,
        skills: accessory.skills || {},
        allowed_on: accessory.allowed_on || 'weapon',
        icon_color: accessory.icon_color || null,
        icon_color_id: accessory.icon_color_id || null,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入魅力数据
async function importCharms(): Promise<void> {
  const charms = loadJsonFile(DATA_FILES.charms);
  
  await batchInsert('Charm', charms, async (batch) => {
    await prisma.charm.createMany({
      data: batch.map((charm: any) => ({
        game_id: BigInt(charm.game_id),
        names: charm.names,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入防具升级数据
async function importArmorUpgrades(): Promise<void> {
  const upgrades = loadJsonFile(DATA_FILES.armorUpgrades);
  
  await batchInsert('ArmorUpgrade', upgrades, async (batch) => {
    await prisma.armorUpgrade.createMany({
      data: batch.map((upgrade: any) => ({
        rarity: upgrade.rarity,
        steps: upgrade.steps || [],
      })),
      skipDuplicates: true,
    });
  });
}

// 导入物种数据
async function importSpecies(): Promise<void> {
  const species = loadJsonFile(DATA_FILES.species);
  
  await batchInsert('Species', species, async (batch) => {
    await prisma.species.createMany({
      data: batch.map((specie: any) => ({
        kind: specie.kind,
        names: specie.names,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入舞台数据
async function importStages(): Promise<void> {
  const stages = loadJsonFile(DATA_FILES.stages);
  
  await batchInsert('Stage', stages, async (batch) => {
    await prisma.stage.createMany({
      data: batch.map((stage: any) => ({
        game_id: BigInt(stage.game_id),
        names: stage.names,
        areas: stage.areas || 0,
        camps: stage.camps || null,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入部位名称数据
async function importPartNames(): Promise<void> {
  const partNames = loadJsonFile(DATA_FILES.partNames);
  
  await batchInsert('PartName', partNames, async (batch) => {
    await prisma.partName.createMany({
      data: batch.map((partName: any, index: number) => ({
        game_id: BigInt(index + 1), // 使用索引作为game_id，因为原始数据没有game_id
        names: JSON.stringify(partName.names),
      })),
      skipDuplicates: true,
    });
  });
}

// 导入武器系列数据
async function importWeaponSeries(): Promise<void> {
  const series = loadJsonFile(DATA_FILES.weaponSeries);
  
  await batchInsert('WeaponSeries', series, async (batch) => {
    await prisma.weaponSeries.createMany({
      data: batch.map((s: any) => ({
        game_id: BigInt(s.game_id),
        names: s.names,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入狩猎笛旋律数据
async function importHuntingHornData(): Promise<void> {
  // 旋律数据
  const melodies = loadJsonFile(DATA_FILES.huntingHornMelodies);
  await batchInsert('HuntingHornMelody', melodies, async (batch) => {
    await prisma.huntingHornMelody.createMany({
      data: batch.map((melody: any) => ({
        game_id: melody.game_id,
        notes: melody.notes || [],
        songs: melody.songs || [],
      })),
      skipDuplicates: true,
    });
  });
  
  // 歌曲数据
  const songs = loadJsonFile(DATA_FILES.huntingHornSongs);
  await batchInsert('HuntingHornSong', songs, async (batch) => {
    await prisma.huntingHornSong.createMany({
      data: batch.map((song: any) => ({
        effect_id: song.effect_id,
        notes: song.notes || [],
        names: song.names,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入武器数据
async function importWeapons(): Promise<void> {
  for (const [weaponType, fileName] of Object.entries(DATA_FILES.weapons)) {
    const weapons = loadJsonFile(fileName);
    
    await batchInsert(`Weapon (${weaponType})`, weapons, async (batch) => {
      await prisma.weapon.createMany({
        data: batch.map((weapon: any) => ({
          game_id: BigInt(weapon.game_id),
          kind: weaponType,
          names: weapon.names,
          descriptions: weapon.descriptions || null,
          rarity: weapon.rarity || null,
          attack_raw: weapon.attack_raw || null,
          affinity: weapon.affinity || null,
          defense: weapon.defense || null,
          slots: weapon.slots || null,
          sharpness: weapon.sharpness || null,
          handicraft: weapon.handicraft || null,
          element_type: weapon.element_type || null,
          element_damage: weapon.element_damage || null,
          element_hidden: weapon.element_hidden || false,
          ammo: weapon.ammo || null,
          coatings: weapon.coatings || null,
          charge_levels: weapon.charge_levels || null,
          melodies: weapon.melodies || null,
          songs: weapon.songs || null,
          kinsect_bonus: weapon.kinsect_bonus || null,
          crafting_cost: weapon.crafting_cost || null,
          upgrade_cost: weapon.upgrade_cost || null,
          materials: weapon.materials || null,
          series_id: weapon.series_id || null,
          previous_id: weapon.previous_id || null,
          next_weapons: weapon.next_weapons || null,
        })),
        skipDuplicates: true,
      });
    });
  }
}

// 主导入函数
async function main(): Promise<void> {
  try {
    logger.info('开始 MHW2Wiki 数据导入...');
    
    // 1. 清理数据库
    await clearDatabase();
    
    // 2. 导入基础数据 (无依赖)
    await Promise.all([
      importItems(),
      importSkills(),
      importSpecies(),
      importPartNames(),
      importWeaponSeries(),
      importArmorUpgrades(),
    ]);
    
    // 3. 导入复杂实体数据
    await Promise.all([
      importMonsters(),
      importArmor(),
      importAmulets(),
      importAccessories(),
      importCharms(),
      importStages(),
      importHuntingHornData(),
    ]);
    
    // 4. 导入武器数据 (最后，因为可能依赖其他数据)
    await importWeapons();
    
    logger.success('🎉 数据导入完成!');
    
  } catch (error) {
    logger.error('数据导入失败:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// 脚本直接执行时运行
if (require.main === module) {
  main().catch((error) => {
    console.error('💥 未处理的错误:', error);
    process.exit(1);
  });
}
