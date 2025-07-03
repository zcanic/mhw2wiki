#!/usr/bin/env tsx
/**
 * MHWildsWiki 统一数据导入脚本 v5.0
 * 
 * 统一最佳实践：
 * - 混合策略：批量 upsert + 智能回退
 * - 统一错误处理和数据验证
 * - 性能优化 + 可靠性保证
 * - 完整的数据一致性检查
 */

import { PrismaClient, Prisma } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';

// 类型定义
interface ImportStats {
  total: number;
  success: number;
  failed: number;
  updated: number;
  created: number;
}

interface ImportConfig {
  batchSize: number;
  maxRetries: number;
  useBulkOps: boolean;
  validateData: boolean;
}

// 优化的 Prisma 客户端
const prisma = new PrismaClient({
  log: ['warn', 'error'],
  datasources: {
    db: {
      url: process.env.DATABASE_URL
    }
  }
});

const DATA_PATH = resolve(__dirname, '../../../output/merged');

// 导入配置
const DEFAULT_CONFIG: ImportConfig = {
  batchSize: 500,
  maxRetries: 3,
  useBulkOps: true,
  validateData: true
};

// 命令行参数解析
const shouldClearDatabase = process.argv.includes('--clear') || process.argv.includes('--reset');
const forceSlowMode = process.argv.includes('--safe') || process.argv.includes('--slow');
const skipValidation = process.argv.includes('--skip-validation');

const config: ImportConfig = {
  ...DEFAULT_CONFIG,
  useBulkOps: !forceSlowMode,
  validateData: !skipValidation
};

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

// 数据验证工具
function validateRequiredBigInt(value: any, fieldName: string): bigint {
  if (value === null || value === undefined || value === '') {
    throw new Error(`字段 ${fieldName} 是必需的，但收到: ${value}`);
  }
  try {
    return BigInt(value);
  } catch (error) {
    throw new Error(`字段 ${fieldName} 无法转换为 BigInt: ${value}`);
  }
}

function safeBigInt(value: any): bigint | null {
  if (value === null || value === undefined || value === '') {
    return null;
  }
  try {
    return BigInt(value);
  } catch (error) {
    logger.warn(`无法转换为 BigInt，返回 null: ${value}`);
    return null;
  }
}

// 字符串生成 ID 的一致性哈希函数
function stringToGameId(str: string): bigint {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash;
  }
  return BigInt(Math.abs(hash));
}

// 数据加载工具
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

// 智能批量处理工具
async function smartBatchProcess<T>(
  tableName: string,
  data: T[],
  bulkFn: ((batch: T[]) => Promise<any>) | null,
  individualFn: (item: T) => Promise<any>,
  config: ImportConfig
): Promise<ImportStats> {
  const stats: ImportStats = { 
    total: data.length, 
    success: 0, 
    failed: 0, 
    updated: 0, 
    created: 0 
  };
  
  if (data.length === 0) {
    logger.info(`${tableName}: 无数据可导入`);
    return stats;
  }
  
  const startTime = performance.now();
  
  // 尝试批量操作
  if (config.useBulkOps && bulkFn) {
    for (let i = 0; i < data.length; i += config.batchSize) {
      const batch = data.slice(i, i + config.batchSize);
      
      try {
        await bulkFn(batch);
        stats.success += batch.length;
        stats.created += batch.length; // 假设批量操作都是创建
        
        // 进度报告
        const progress = Math.floor((i + batch.length) / data.length * 100);
        if (progress % 20 === 0 && progress > 0) {
          logger.info(`${tableName}: 批量模式进度 ${progress}% (${stats.success}/${data.length})`);
        }
      } catch (error) {
        // 批量失败，回退到逐条处理
        logger.warn(`${tableName}: 批量操作失败，回退到逐条处理`, error);
        
        for (const item of batch) {
          try {
            await individualFn(item);
            stats.success++;
            stats.updated++; // 假设单条操作是更新
          } catch (itemError) {
            stats.failed++;
            if (config.validateData) {
              logger.error(`${tableName}: 单条记录失败 - ${itemError}`, { 
                item: JSON.stringify(item).substring(0, 200) 
              });
            }
          }
        }
      }
    }
  } else {
    // 直接使用逐条处理
    for (const item of data) {
      try {
        await individualFn(item);
        stats.success++;
        stats.updated++;
      } catch (error) {
        stats.failed++;
        if (config.validateData) {
          logger.error(`${tableName}: 导入失败 - ${error}`, { 
            item: JSON.stringify(item).substring(0, 200) 
          });
        }
      }
    }
  }
  
  const duration = ((performance.now() - startTime) / 1000).toFixed(2);
  const successRate = ((stats.success / stats.total) * 100).toFixed(1);
  
  logger.success(
    `${tableName}: 完成 - 成功:${stats.success}(${successRate}%), ` +
    `失败:${stats.failed}, 新建:${stats.created}, 更新:${stats.updated}, 耗时:${duration}s`
  );
  
  return stats;
}

// 数据库清理
async function clearDatabase(): Promise<void> {
  logger.info('清理数据库...');
  
  try {
    // 禁用外键检查以加速删除（SQLite）
    await prisma.$executeRaw`PRAGMA foreign_keys = OFF;`;
    
    const deleteOperations = [
      () => prisma.weapon.deleteMany({}),
      () => prisma.huntingHornMelody.deleteMany({}),
      () => prisma.huntingHornSong.deleteMany({}),
      () => prisma.partName.deleteMany({}),
      () => prisma.stage.deleteMany({}),
      () => prisma.species.deleteMany({}),
      () => prisma.armorUpgrade.deleteMany({}),
      () => prisma.charm.deleteMany({}),
      () => prisma.accessory.deleteMany({}),
      () => prisma.amulet.deleteMany({}),
      () => prisma.armorSet.deleteMany({}),
      () => prisma.monster.deleteMany({}),
      () => prisma.skill.deleteMany({}),
      () => prisma.item.deleteMany({}),
      () => prisma.weaponSeries.deleteMany({}),
    ];
    
    for (const operation of deleteOperations) {
      try {
        await operation();
      } catch (err) {
        // 忽略表不存在等错误
      }
    }
    
    // 重新启用外键检查
    await prisma.$executeRaw`PRAGMA foreign_keys = ON;`;
    
    logger.success('数据库清理完成');
  } catch (error) {
    logger.error('数据库清理失败:', error);
    await prisma.$executeRaw`PRAGMA foreign_keys = ON;`;
    throw error;
  }
}

// 导入函数
async function importItems(): Promise<ImportStats> {
  const items = loadJsonFile('Item.json');
  
  return await smartBatchProcess(
    'Item',
    items,
    // 批量操作
    async (batch) => {
      await prisma.item.createMany({
        data: batch.map((item: any) => ({
          game_id: validateRequiredBigInt(item.game_id, 'game_id'),
          names: JSON.stringify(item.names || {}),
          descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
          kind: item.kind || 'unknown',
          rarity: item.rarity || 0,
          max_count: item.max_count || 0,
          sell_price: item.sell_price || 0,
          buy_price: item.buy_price || 0,
        })),
      });
    },
    // 单条操作
    async (item: any) => {
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
    },
    config
  );
}

async function importSkills(): Promise<ImportStats> {
  const skills = loadJsonFile('Skill.json');
  
  return await smartBatchProcess(
    'Skill',
    skills,
    async (batch) => {
      await prisma.skill.createMany({
        data: batch.map((skill: any) => ({
          game_id: validateRequiredBigInt(skill.game_id, 'game_id'),
          names: JSON.stringify(skill.names || {}),
          descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
          ranks: JSON.stringify(skill.ranks || []),
        })),
      });
    },
    async (skill: any) => {
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
    },
    config
  );
}

async function importMonsters(): Promise<ImportStats> {
  const monsters = loadJsonFile('LargeMonsters.json');
  
  return await smartBatchProcess(
    'Monster',
    monsters,
    async (batch) => {
      await prisma.monster.createMany({
        data: batch.map((monster: any) => ({
          game_id: validateRequiredBigInt(monster.game_id, 'game_id'),
          names: JSON.stringify(monster.names || {}),
          descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
          features: monster.features ? JSON.stringify(monster.features) : null,
          species: monster.species || null,
          parts: monster.parts ? JSON.stringify(monster.parts) : null,
          rewards: monster.rewards ? JSON.stringify(monster.rewards) : null,
        })),
        
      });
    },
    async (monster: any) => {
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
    },
    config
  );
}

async function importWeapons(): Promise<ImportStats> {
  const weaponTypes = [
    'GreatSword', 'LongSword', 'SwordShield', 'DualBlades',
    'Hammer', 'HuntingHorn', 'Lance', 'Gunlance',
    'SwitchAxe', 'ChargeBlade', 'InsectGlaive',
    'LightBowgun', 'HeavyBowgun', 'Bow'
  ];
  
  let totalStats: ImportStats = { total: 0, success: 0, failed: 0, updated: 0, created: 0 };
  
  for (const weaponType of weaponTypes) {
    const weapons = loadJsonFile(`weapons/${weaponType}.json`);
    
    const stats = await smartBatchProcess(
      `Weapon-${weaponType}`,
      weapons,
      async (batch) => {
        await prisma.weapon.createMany({
          data: batch.map((weapon: any) => ({
            game_id: validateRequiredBigInt(weapon.game_id, 'game_id'),
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
          })),
          
        });
      },
      async (weapon: any) => {
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
      },
      config
    );
    
    // 累计统计
    totalStats.total += stats.total;
    totalStats.success += stats.success;
    totalStats.failed += stats.failed;
    totalStats.updated += stats.updated;
    totalStats.created += stats.created;
  }
  
  return totalStats;
}

// 其他导入函数 (简化版本)
async function importOptionalData(): Promise<void> {
  const imports = [
    { file: 'Armor.json', fn: importArmorSets },
    { file: 'Species.json', fn: importSpecies },
    { file: 'PartNames.json', fn: importPartNames },
    { file: 'Stage.json', fn: importStages },
    { file: 'WeaponSeries.json', fn: importWeaponSeries },
  ];
  
  for (const importConfig of imports) {
    try {
      await importConfig.fn();
    } catch (error) {
      logger.error(`导入 ${importConfig.file} 失败:`, error);
    }
  }
}

async function importArmorSets(): Promise<ImportStats> {
  const armorSets = loadJsonFile('Armor.json');
  
  return await smartBatchProcess(
    'ArmorSet',
    armorSets,
    async (batch) => {
      await prisma.armorSet.createMany({
        data: batch.map((armor: any) => ({
          game_id: validateRequiredBigInt(armor.game_id, 'game_id'),
          names: JSON.stringify(armor.names || {}),
          rarity: armor.rarity || 0,
          set_bonus: armor.set_bonus ? JSON.stringify(armor.set_bonus) : null,
          group_bonus: armor.group_bonus ? JSON.stringify(armor.group_bonus) : null,
          pieces: JSON.stringify(armor.pieces || []),
        })),
        
      });
    },
    async (armor: any) => {
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
    },
    config
  );
}

async function importSpecies(): Promise<ImportStats> {
  const species = loadJsonFile('Species.json');
  
  return await smartBatchProcess(
    'Species',
    species,
    async (batch) => {
      await prisma.species.createMany({
        data: batch.map((specie: any) => ({
          kind: specie.kind,
          names: JSON.stringify(specie.names || {}),
        })),
        
      });
    },
    async (specie: any) => {
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
    },
    config
  );
}

async function importPartNames(): Promise<ImportStats> {
  const partNames = loadJsonFile('PartNames.json');
  
  return await smartBatchProcess(
    'PartName',
    partNames,
    null, // 无批量操作，因为需要生成 ID
    async (partName: any) => {
      if (!partName.part) {
        throw new Error('PartName 数据缺少必需的 part 字段');
      }
      
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
    },
    config
  );
}

async function importStages(): Promise<ImportStats> {
  const stages = loadJsonFile('Stage.json');
  
  return await smartBatchProcess(
    'Stage',
    stages,
    async (batch) => {
      await prisma.stage.createMany({
        data: batch.map((stage: any) => ({
          game_id: validateRequiredBigInt(stage.game_id, 'game_id'),
          names: JSON.stringify(stage.names || {}),
          areas: stage.areas || 0,
          camps: stage.camps ? JSON.stringify(stage.camps) : null,
        })),
        
      });
    },
    async (stage: any) => {
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
    },
    config
  );
}

async function importWeaponSeries(): Promise<ImportStats> {
  const series = loadJsonFile('WeaponSeries.json');
  
  return await smartBatchProcess(
    'WeaponSeries',
    series,
    async (batch) => {
      await prisma.weaponSeries.createMany({
        data: batch.map((s: any) => ({
          game_id: validateRequiredBigInt(s.game_id, 'game_id'),
          names: JSON.stringify(s.names || {}),
        })),
        
      });
    },
    async (s: any) => {
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
    },
    config
  );
}

// 主函数
async function main(): Promise<void> {
  const totalStartTime = performance.now();
  const allStats: ImportStats = { total: 0, success: 0, failed: 0, updated: 0, created: 0 };
  
  try {
    logger.info('🚀 开始 MHWildsWiki 数据导入 v5.0...');
    logger.info(`📋 配置: 批量模式=${config.useBulkOps}, 批次大小=${config.batchSize}, 验证=${config.validateData}`);
    
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
      allStats.updated += stats.updated;
      allStats.created += stats.created;
    }
    
    // 3. 可选数据导入
    logger.info('🏗️ 导入可选数据...');
    await importOptionalData();
    
    // 4. 总结
    const totalDuration = ((performance.now() - totalStartTime) / 1000).toFixed(2);
    const successRate = allStats.total > 0 ? ((allStats.success / allStats.total) * 100).toFixed(1) : '0';
    
    logger.success(`🎉 数据导入完成！`);
    logger.info(`📊 统计: 总计:${allStats.total}, 成功:${allStats.success}(${successRate}%)`);
    logger.info(`📊 详细: 新建:${allStats.created}, 更新:${allStats.updated}, 失败:${allStats.failed}`);
    logger.info(`⏱️ 耗时: ${totalDuration}s`);
    
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
