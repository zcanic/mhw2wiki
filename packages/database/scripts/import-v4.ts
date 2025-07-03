#!/usr/bin/env tsx
/**
 * MHWildsWiki 优化导入脚本 v4.0
 * 
 * 基于成功测试，创建完整的生产级导入脚本
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';

const prisma = new PrismaClient({
  log: ['warn', 'error']
});

const DATA_PATH = resolve(__dirname, '../../../output/merged');

interface ImportStats {
  total: number;
  success: number;
  failed: number;
}

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
}

const logger = new Logger();

function loadJsonFile(fileName: string): any[] {
  const filePath = join(DATA_PATH, fileName);
  
  if (!existsSync(filePath)) {
    logger.info(`跳过不存在的文件: ${fileName}`);
    return [];
  }
  
  try {
    const data = JSON.parse(readFileSync(filePath, 'utf-8'));
    const result = Array.isArray(data) ? data : [];
    logger.info(`加载 ${fileName}: ${result.length} 条记录`);
    return result;
  } catch (error) {
    logger.error(`解析文件失败 ${fileName}:`, error);
    return [];
  }
}

// Helper function to safely convert to BigInt
function safeBigInt(value: any): bigint | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  try {
    return BigInt(value);
  } catch (error) {
    logger.error(`无法转换为 BigInt: ${value}`);
    return null;
  }
}

// Helper function to validate required BigInt fields
function validateRequiredBigInt(value: any, fieldName: string): bigint {
  const result = safeBigInt(value);
  if (result === null) {
    throw new Error(`字段 ${fieldName} 是必需的 BigInt，但收到: ${value}`);
  }
  return result;
}

async function batchProcess<T>(
  tableName: string,
  data: T[],
  processFn: (item: T) => Promise<void>,
  batchSize = 100
): Promise<ImportStats> {
  const stats: ImportStats = { total: data.length, success: 0, failed: 0 };
  
  if (data.length === 0) {
    logger.info(`${tableName}: 无数据可导入`);
    return stats;
  }
  
  const startTime = performance.now();
  
  for (let i = 0; i < data.length; i += batchSize) {
    const batch = data.slice(i, i + batchSize);
    
    for (const item of batch) {
      try {
        await processFn(item);
        stats.success++;
      } catch (error) {
        stats.failed++;
        // More detailed error logging
        if (error instanceof Error) {
          logger.error(`${tableName}: 导入失败 - ${error.message}`, { item: JSON.stringify(item).substring(0, 200) });
        } else {
          logger.error(`${tableName}: 导入失败`, error);
        }
      }
    }
    
    // 进度报告
    const progress = Math.floor((i + batch.length) / data.length * 100);
    if (progress % 20 === 0 && progress > 0) {
      logger.info(`${tableName}: 进度 ${progress}% (${stats.success}/${data.length})`);
    }
  }
  
  const duration = ((performance.now() - startTime) / 1000).toFixed(2);
  const successRate = ((stats.success / stats.total) * 100).toFixed(1);
  
  logger.success(`${tableName}: 完成 - 成功:${stats.success}(${successRate}%), 失败:${stats.failed}, 耗时:${duration}s`);
  return stats;
}

async function clearDatabase(): Promise<void> {
  logger.info('清理数据库...');
  
  try {
    // 按依赖顺序清理
    await prisma.weapon.deleteMany({});
    await prisma.huntingHornMelody.deleteMany({});
    await prisma.huntingHornSong.deleteMany({});
    await prisma.partName.deleteMany({});
    await prisma.stage.deleteMany({});
    await prisma.species.deleteMany({});
    await prisma.armorUpgrade.deleteMany({});
    await prisma.charm.deleteMany({});
    await prisma.accessory.deleteMany({});
    await prisma.amulet.deleteMany({});
    await prisma.armorSet.deleteMany({});
    await prisma.monster.deleteMany({});
    await prisma.skill.deleteMany({});
    await prisma.item.deleteMany({});
    await prisma.weaponSeries.deleteMany({});
    
    logger.success('数据库清理完成');
  } catch (error) {
    logger.error('数据库清理失败:', error);
    throw error;
  }
}

// Check if we should clear the database
const shouldClearDatabase = process.argv.includes('--clear') || process.argv.includes('--reset');

async function importItems(): Promise<ImportStats> {
  const items = loadJsonFile('Item.json');
  
  return await batchProcess('Item', items, async (item: any) => {
    const gameId = validateRequiredBigInt(item.game_id, 'game_id');
    
    await prisma.item.upsert({
      where: { game_id: gameId },
      update: {
        names: JSON.stringify(item.names || {}),
        descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
        kind: item.kind || 'unknown',
        rarity: item.rarity || 0,
        max_count: item.max_count || 0,
        sell_price: item.sell_price || 0,
        buy_price: item.buy_price || 0,
      },
      create: {
        game_id: gameId,
        names: JSON.stringify(item.names || {}),
        descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
        kind: item.kind || 'unknown',
        rarity: item.rarity || 0,
        max_count: item.max_count || 0,
        sell_price: item.sell_price || 0,
        buy_price: item.buy_price || 0,
      }
    });
  });
}

async function importSkills(): Promise<ImportStats> {
  const skills = loadJsonFile('Skill.json');
  
  return await batchProcess('Skill', skills, async (skill: any) => {
    const gameId = validateRequiredBigInt(skill.game_id, 'game_id');
    
    await prisma.skill.upsert({
      where: { game_id: gameId },
      update: {
        names: JSON.stringify(skill.names || {}),
        descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
        ranks: JSON.stringify(skill.ranks || []),
      },
      create: {
        game_id: gameId,
        names: JSON.stringify(skill.names || {}),
        descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
        ranks: JSON.stringify(skill.ranks || []),
      }
    });
  });
}

async function importMonsters(): Promise<ImportStats> {
  const monsters = loadJsonFile('LargeMonsters.json');
  
  return await batchProcess('Monster', monsters, async (monster: any) => {
    const gameId = validateRequiredBigInt(monster.game_id, 'game_id');
    
    await prisma.monster.upsert({
      where: { game_id: gameId },
      update: {
        names: JSON.stringify(monster.names || {}),
        descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
        features: monster.features ? JSON.stringify(monster.features) : null,
        species: monster.species || null,
        parts: monster.parts ? JSON.stringify(monster.parts) : null,
        rewards: monster.rewards ? JSON.stringify(monster.rewards) : null,
      },
      create: {
        game_id: gameId,
        names: JSON.stringify(monster.names || {}),
        descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
        features: monster.features ? JSON.stringify(monster.features) : null,
        species: monster.species || null,
        parts: monster.parts ? JSON.stringify(monster.parts) : null,
        rewards: monster.rewards ? JSON.stringify(monster.rewards) : null,
      }
    });
  });
}

async function importWeapons(): Promise<ImportStats> {
  const weaponTypes = [
    'GreatSword', 'LongSword', 'SwordShield', 'DualBlades',
    'Hammer', 'HuntingHorn', 'Lance', 'Gunlance',
    'SwitchAxe', 'ChargeBlade', 'InsectGlaive',
    'LightBowgun', 'HeavyBowgun', 'Bow'
  ];
  
  let totalStats: ImportStats = { total: 0, success: 0, failed: 0 };
  
  for (const weaponType of weaponTypes) {
    const weapons = loadJsonFile(`weapons/${weaponType}.json`);
    
    const stats = await batchProcess(`Weapon-${weaponType}`, weapons, async (weapon: any) => {
      const gameId = validateRequiredBigInt(weapon.game_id, 'game_id');
      
      await prisma.weapon.upsert({
        where: { game_id: gameId },
        update: {
          kind: weapon.kind || weaponType.toLowerCase(),
          names: JSON.stringify(weapon.names || {}),
          descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
          rarity: weapon.rarity || null,
          attack_raw: weapon.attack_raw || null,
          affinity: weapon.affinity || null,
          defense: weapon.defense || null,
          slots: weapon.slots ? JSON.stringify(weapon.slots) : null,
          sharpness: weapon.sharpness ? JSON.stringify(weapon.sharpness) : null,
          handicraft: weapon.handicraft ? JSON.stringify(weapon.handicraft) : null,
          element_type: weapon.element_type || null,
          element_damage: weapon.element_damage || null,
          element_hidden: weapon.element_hidden || false,
          ammo: weapon.ammo ? JSON.stringify(weapon.ammo) : null,
          coatings: weapon.coatings ? JSON.stringify(weapon.coatings) : null,
          charge_levels: weapon.charge_levels ? JSON.stringify(weapon.charge_levels) : null,
          melodies: weapon.melodies ? JSON.stringify(weapon.melodies) : null,
          songs: weapon.songs ? JSON.stringify(weapon.songs) : null,
          kinsect_bonus: weapon.kinsect_bonus ? JSON.stringify(weapon.kinsect_bonus) : null,
          crafting_cost: weapon.crafting_cost || null,
          upgrade_cost: weapon.upgrade_cost || null,
          materials: weapon.materials ? JSON.stringify(weapon.materials) : null,
          series_id: safeBigInt(weapon.series_id),
          previous_id: safeBigInt(weapon.previous_id),
          next_weapons: weapon.next_weapons ? JSON.stringify(weapon.next_weapons) : null,
        },
        create: {
          game_id: gameId,
          kind: weapon.kind || weaponType.toLowerCase(),
          names: JSON.stringify(weapon.names || {}),
          descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
          rarity: weapon.rarity || null,
          attack_raw: weapon.attack_raw || null,
          affinity: weapon.affinity || null,
          defense: weapon.defense || null,
          slots: weapon.slots ? JSON.stringify(weapon.slots) : null,
          sharpness: weapon.sharpness ? JSON.stringify(weapon.sharpness) : null,
          handicraft: weapon.handicraft ? JSON.stringify(weapon.handicraft) : null,
          element_type: weapon.element_type || null,
          element_damage: weapon.element_damage || null,
          element_hidden: weapon.element_hidden || false,
          ammo: weapon.ammo ? JSON.stringify(weapon.ammo) : null,
          coatings: weapon.coatings ? JSON.stringify(weapon.coatings) : null,
          charge_levels: weapon.charge_levels ? JSON.stringify(weapon.charge_levels) : null,
          melodies: weapon.melodies ? JSON.stringify(weapon.melodies) : null,
          songs: weapon.songs ? JSON.stringify(weapon.songs) : null,
          kinsect_bonus: weapon.kinsect_bonus ? JSON.stringify(weapon.kinsect_bonus) : null,
          crafting_cost: weapon.crafting_cost || null,
          upgrade_cost: weapon.upgrade_cost || null,
          materials: weapon.materials ? JSON.stringify(weapon.materials) : null,
          series_id: safeBigInt(weapon.series_id),
          previous_id: safeBigInt(weapon.previous_id),
          next_weapons: weapon.next_weapons ? JSON.stringify(weapon.next_weapons) : null,
        }
      });
    });
    
    totalStats.total += stats.total;
    totalStats.success += stats.success;
    totalStats.failed += stats.failed;
  }
  
  return totalStats;
}

async function importOptionalData(): Promise<void> {
  // 导入其他可选数据
  const optionalImports = [
    { file: 'Armor.json', table: 'ArmorSet', fn: importArmorSets },
    { file: 'Species.json', table: 'Species', fn: importSpecies },
    { file: 'PartNames.json', table: 'PartName', fn: importPartNames },
    { file: 'Stage.json', table: 'Stage', fn: importStages },
    { file: 'WeaponSeries.json', table: 'WeaponSeries', fn: importWeaponSeries },
  ];
  
  for (const importConfig of optionalImports) {
    try {
      await importConfig.fn();
    } catch (error) {
      logger.error(`导入 ${importConfig.table} 失败:`, error);
    }
  }
}

async function importArmorSets(): Promise<ImportStats> {
  const armorSets = loadJsonFile('Armor.json');
  
  return await batchProcess('ArmorSet', armorSets, async (armor: any) => {
    const gameId = validateRequiredBigInt(armor.game_id, 'game_id');
    
    await prisma.armorSet.upsert({
      where: { game_id: gameId },
      update: {
        names: JSON.stringify(armor.names || {}),
        rarity: armor.rarity || 0,
        set_bonus: armor.set_bonus ? JSON.stringify(armor.set_bonus) : null,
        group_bonus: armor.group_bonus ? JSON.stringify(armor.group_bonus) : null,
        pieces: JSON.stringify(armor.pieces || []),
      },
      create: {
        game_id: gameId,
        names: JSON.stringify(armor.names || {}),
        rarity: armor.rarity || 0,
        set_bonus: armor.set_bonus ? JSON.stringify(armor.set_bonus) : null,
        group_bonus: armor.group_bonus ? JSON.stringify(armor.group_bonus) : null,
        pieces: JSON.stringify(armor.pieces || []),
      }
    });
  });
}

async function importSpecies(): Promise<ImportStats> {
  const species = loadJsonFile('Species.json');
  
  return await batchProcess('Species', species, async (specie: any) => {
    if (!specie.kind) {
      throw new Error('种族数据缺少必需的 kind 字段');
    }
    
    await prisma.species.upsert({
      where: { kind: specie.kind },
      update: {
        names: JSON.stringify(specie.names || {}),
      },
      create: {
        kind: specie.kind,
        names: JSON.stringify(specie.names || {}),
      }
    });
  });
}

// Helper function to generate a consistent BigInt ID from a string
function stringToGameId(str: string): bigint {
  // Simple hash function to create a consistent ID from string
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  // Ensure positive number and convert to BigInt
  return BigInt(Math.abs(hash));
}

async function importPartNames(): Promise<ImportStats> {
  const partNames = loadJsonFile('PartNames.json');
  
  return await batchProcess('PartName', partNames, async (partName: any) => {
    if (!partName.part) {
      throw new Error('PartName 数据缺少必需的 part 字段');
    }
    
    // Generate a consistent game_id from the part name
    const gameId = stringToGameId(partName.part);
    
    await prisma.partName.upsert({
      where: { game_id: gameId },
      update: {
        names: JSON.stringify(partName.names || {}),
      },
      create: {
        game_id: gameId,
        names: JSON.stringify(partName.names || {}),
      }
    });
  });
}

async function importStages(): Promise<ImportStats> {
  const stages = loadJsonFile('Stage.json');
  
  return await batchProcess('Stage', stages, async (stage: any) => {
    const gameId = validateRequiredBigInt(stage.game_id, 'game_id');
    
    await prisma.stage.upsert({
      where: { game_id: gameId },
      update: {
        names: JSON.stringify(stage.names || {}),
        areas: stage.areas || 0,
        camps: stage.camps ? JSON.stringify(stage.camps) : null,
      },
      create: {
        game_id: gameId,
        names: JSON.stringify(stage.names || {}),
        areas: stage.areas || 0,
        camps: stage.camps ? JSON.stringify(stage.camps) : null,
      }
    });
  });
}

async function importWeaponSeries(): Promise<ImportStats> {
  const series = loadJsonFile('WeaponSeries.json');
  
  return await batchProcess('WeaponSeries', series, async (s: any) => {
    const gameId = validateRequiredBigInt(s.game_id, 'game_id');
    
    await prisma.weaponSeries.upsert({
      where: { game_id: gameId },
      update: {
        names: JSON.stringify(s.names || {}),
      },
      create: {
        game_id: gameId,
        names: JSON.stringify(s.names || {}),
      }
    });
  });
}

async function main(): Promise<void> {
  const totalStartTime = performance.now();
  const allStats: ImportStats = { total: 0, success: 0, failed: 0 };
  
  try {
    logger.info('🚀 开始 MHWildsWiki 数据导入 v4.0...');
    
    // 1. 可选清理数据库
    if (shouldClearDatabase) {
      await clearDatabase();
    } else {
      logger.info('📋 使用增量导入模式 (使用 --clear 标志可清理数据库)');
    }
    
    // 2. 核心数据导入
    logger.info('📦 导入核心数据...');
    
    const coreImports = [
      { name: 'Items', fn: importItems },
      { name: 'Skills', fn: importSkills },
      { name: 'Monsters', fn: importMonsters },
      { name: 'Weapons', fn: importWeapons },
    ];
    
    for (const importConfig of coreImports) {
      const stats = await importConfig.fn();
      allStats.total += stats.total;
      allStats.success += stats.success;
      allStats.failed += stats.failed;
    }
    
    // 3. 可选数据导入
    logger.info('🏗️ 导入可选数据...');
    await importOptionalData();
    
    // 4. 总结
    const totalDuration = ((performance.now() - totalStartTime) / 1000).toFixed(2);
    const successRate = allStats.total > 0 ? ((allStats.success / allStats.total) * 100).toFixed(1) : '0';
    
    logger.success(`🎉 数据导入完成！总计: ${allStats.success}/${allStats.total} (${successRate}%) 条记录，耗时: ${totalDuration}s`);
    
    if (allStats.failed > 0) {
      logger.error(`⚠️ 有 ${allStats.failed} 条记录导入失败`);
    }
    
  } catch (error) {
    logger.error('💥 数据导入失败:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// 直接执行
if (require.main === module) {
  main().catch((error) => {
    console.error('💥 未处理的错误:', error);
    process.exit(1);
  });
}
