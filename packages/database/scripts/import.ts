#!/usr/bin/env tsx
/**
 * MHWildsWiki 数据导入脚本 v3.1
 * 
 * 重构优化版本：更高效的清理、严格类型、错误恢复
 * 支持并行导入、详细日志、幂等操作
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';

// 类型定义
interface MultiLanguageText {
  ja?: string;
  en?: string;
  fr?: string;
  it?: string;
  de?: string;
  es?: string;
  ru?: string;
  pl?: string;
  'pt-BR'?: string;
  ko?: string;
  'zh-Hant'?: string;
  'zh-Hans'?: string;
  ar?: string;
  'es-419'?: string;
}

interface ImportStats {
  total: number;
  success: number;
  failed: number;
  skipped: number;
}

// 优化的 Prisma 客户端配置
const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
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

// 数据验证和清理工具
function validateAndCleanData<T extends Record<string, any>>(
  data: T[], 
  requiredFields: (keyof T)[],
  tableName: string
): T[] {
  const validData = data.filter((item, index) => {
    // 检查必需字段
    for (const field of requiredFields) {
      if (item[field] === undefined || item[field] === null) {
        logger.warn(`${tableName}: 记录 ${index} 缺少必需字段 ${String(field)}`);
        return false;
      }
    }
    
    // 验证 game_id 类型
    if ('game_id' in item && typeof item.game_id !== 'number') {
      logger.warn(`${tableName}: 记录 ${index} game_id 类型错误`);
      return false;
    }
    
    return true;
  });
  
  if (validData.length !== data.length) {
    logger.warn(`${tableName}: 过滤掉 ${data.length - validData.length} 条无效记录`);
  }
  
  return validData;
}

// 安全的 BigInt 转换
function safeBigInt(value: any): bigint {
  if (typeof value === 'bigint') return value;
  if (typeof value === 'number') return BigInt(value);
  if (typeof value === 'string') return BigInt(parseInt(value, 10));
  throw new Error(`无法转换为 BigInt: ${value}`);
}

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

// 优化的批量插入工具
async function batchInsert<T>(
  tableName: string,
  data: T[],
  insertFn: (batch: T[]) => Promise<any>,
  batchSize = 1000
): Promise<ImportStats> {
  const stats: ImportStats = { total: data.length, success: 0, failed: 0, skipped: 0 };
  
  if (data.length === 0) {
    logger.warn(`${tableName}: 无数据可导入`);
    return stats;
  }
  
  const startTime = performance.now();
  let lastProgress = 0;
  
  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);
    
    try {
      await insertFn(batch);
      stats.success += batch.length;
      
      // 只在进度提升超过 10% 时打印日志
      const progress = Math.floor((i + batch.length) / data.length * 100);
      if (progress >= lastProgress + 10) {
        logger.info(`${tableName}: 进度 ${progress}% (${stats.success}/${data.length})`);
        lastProgress = progress;
      }
    } catch (error) {
      logger.error(`${tableName}: 批量插入失败 (batch ${i}-${i + batch.length})`, error);
      
      // 尝试减小批次大小重试
      if (batch.length > 100) {
        logger.info(`${tableName}: 尝试减小批次大小重试...`);
        const smallerBatchSize = Math.max(100, Math.floor(batch.length / 4));
        
        for (let j = 0; j < batch.length; j += smallerBatchSize) {
          const smallBatch = batch.slice(j, j + smallerBatchSize);
          try {
            await insertFn(smallBatch);
            stats.success += smallBatch.length;
          } catch (smallError) {
            stats.failed += smallBatch.length;
            logger.warn(`${tableName}: 小批次也失败，跳过 ${smallBatch.length} 条记录`);
          }
        }
      } else {
        stats.failed += batch.length;
      }
    }
  }
  
  const duration = ((performance.now() - startTime) / 1000).toFixed(2);
  const successRate = ((stats.success / stats.total) * 100).toFixed(1);
  
  logger.success(`${tableName}: 完成 - 成功:${stats.success}(${successRate}%), 失败:${stats.failed}, 耗时:${duration}s`);
  
  return stats;
}

// 清理数据库 - 使用更高效的方式
async function clearDatabase(): Promise<void> {
  logger.info('开始清理数据库...');
  
  try {
    // 禁用外键检查以加速删除
    await prisma.$executeRaw`SET session_replication_role = replica;`;
    
    // 按依赖顺序删除表，使用单条 SQL 提升性能
    const tables = [
      'Weapon', 'HuntingHornMelody', 'HuntingHornSong', 
      'PartName', 'Stage', 'Species', 'ArmorUpgrade', 
      'Charm', 'Accessory', 'Amulet', 'ArmorSet', 
      'Monster', 'Skill', 'Item', 'WeaponSeries'
    ];
    
    for (const table of tables) {
      await prisma.$executeRawUnsafe(`TRUNCATE TABLE "${table}" RESTART IDENTITY CASCADE;`);
    }
    
    // 重新启用外键检查
    await prisma.$executeRaw`SET session_replication_role = DEFAULT;`;
    
    logger.success('数据库清理完成');
  } catch (error) {
    logger.error('数据库清理失败:', error);
    // 确保外键检查重新启用
    await prisma.$executeRaw`SET session_replication_role = DEFAULT;`;
    throw error;
  }
}

// 导入物品数据
async function importItems(): Promise<ImportStats> {
  const rawData = loadJsonFile(DATA_FILES.items);
  const items = validateAndCleanData(rawData, ['game_id', 'names'], 'Item');
  
  return await batchInsert('Item', items, async (batch) => {
    await prisma.item.createMany({
      data: batch.map((item: any) => ({
        game_id: safeBigInt(item.game_id),
        names: item.names,
        descriptions: item.descriptions || null,
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
async function importSkills(): Promise<ImportStats> {
  const rawData = loadJsonFile(DATA_FILES.skills);
  const skills = validateAndCleanData(rawData, ['game_id', 'names'], 'Skill');
  
  return await batchInsert('Skill', skills, async (batch) => {
    await prisma.skill.createMany({
      data: batch.map((skill: any) => ({
        game_id: safeBigInt(skill.game_id),
        names: skill.names,
        descriptions: skill.descriptions || null,
        ranks: skill.ranks || [],
      })),
      skipDuplicates: true,
    });
  });
}

// 导入怪物数据
async function importMonsters(): Promise<ImportStats> {
  const rawData = loadJsonFile(DATA_FILES.monsters);
  const monsters = validateAndCleanData(rawData, ['game_id', 'names'], 'Monster');
  
  return await batchInsert('Monster', monsters, async (batch) => {
    await prisma.monster.createMany({
      data: batch.map((monster: any) => ({
        game_id: safeBigInt(monster.game_id),
        names: monster.names,
        descriptions: monster.descriptions || null,
        features: monster.features || null,
        species: monster.species || null,
        parts: monster.parts || null,
        rewards: monster.rewards || null,
      })),
      skipDuplicates: true,
    });
  });
}

// 导入防具数据
async function importArmor(): Promise<ImportStats> {
  const rawData = loadJsonFile(DATA_FILES.armor);
  const armorSets = validateAndCleanData(rawData, ['game_id', 'names'], 'ArmorSet');
  
  return await batchInsert('ArmorSet', armorSets, async (batch) => {
    await prisma.armorSet.createMany({
      data: batch.map((armorSet: any) => ({
        game_id: safeBigInt(armorSet.game_id),
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
      data: batch.map((partName: any) => ({
        game_id: BigInt(partName.game_id),
        names: partName.names,
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
  const totalStartTime = performance.now();
  const globalStats: Record<string, ImportStats> = {};
  
  try {
    logger.info('🚀 开始 MHWildsWiki 数据导入...');
    
    // 1. 清理数据库
    await clearDatabase();
    
    // 2. 导入基础数据 (无依赖) - 并行执行
    logger.info('📦 导入基础数据...');
    const basicResults = await Promise.allSettled([
      importItems(),
      importSkills(),
      importSpecies(),
      importPartNames(),
      importWeaponSeries(),
      importArmorUpgrades(),
    ]);
    
    // 收集基础数据统计
    const basicFunctions = ['Items', 'Skills', 'Species', 'PartNames', 'WeaponSeries', 'ArmorUpgrades'];
    basicResults.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        globalStats[basicFunctions[index]] = result.value;
      } else if (result.status === 'rejected') {
        logger.error(`${basicFunctions[index]} 导入失败:`, result.reason);
      }
    });
    
    // 3. 导入复杂实体数据 - 并行执行
    logger.info('🏗️ 导入复杂实体数据...');
    const complexResults = await Promise.allSettled([
      importMonsters(),
      importArmor(),
      importAmulets(),
      importAccessories(),
      importCharms(),
      importStages(),
      importHuntingHornData(),
    ]);
    
    // 收集复杂数据统计
    const complexFunctions = ['Monsters', 'Armor', 'Amulets', 'Accessories', 'Charms', 'Stages', 'HuntingHorn'];
    complexResults.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        globalStats[complexFunctions[index]] = result.value;
      } else if (result.status === 'rejected') {
        logger.error(`${complexFunctions[index]} 导入失败:`, result.reason);
      }
    });
    
    // 4. 导入武器数据 (最后，因为可能依赖其他数据)
    logger.info('⚔️ 导入武器数据...');
    await importWeapons();
    
    // 5. 输出总体统计
    const totalDuration = ((performance.now() - totalStartTime) / 1000).toFixed(2);
    let totalRecords = 0;
    let totalSuccess = 0;
    let totalFailed = 0;
    
    Object.entries(globalStats).forEach(([name, stats]) => {
      totalRecords += stats.total;
      totalSuccess += stats.success;
      totalFailed += stats.failed;
      logger.info(`📊 ${name}: ${stats.success}/${stats.total} (${((stats.success/stats.total)*100).toFixed(1)}%)`);
    });
    
    logger.success(`🎉 数据导入完成! 总计: ${totalSuccess}/${totalRecords} 条记录，耗时: ${totalDuration}s`);
    
    if (totalFailed > 0) {
      logger.warn(`⚠️ 有 ${totalFailed} 条记录导入失败，请检查日志`);
    }
    
  } catch (error) {
    logger.error('💥 数据导入失败:', error);
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
