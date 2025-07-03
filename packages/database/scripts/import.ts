#!/usr/bin/env tsx
/**
 * MHWildsWiki 统一数据导入脚本 (最终版)
 * 
 * 基于v5的成功实践，简化并优化用户体验
 * 
 * 使用方法：
 * - 增量导入: npx tsx scripts/import.ts
 * - 完全重置: npx tsx scripts/import.ts --reset
 * - 安全模式: npx tsx scripts/import.ts --safe
 */

import { PrismaClient, Prisma } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';
import { createHash } from 'crypto';

// ==================== 配置和初始化 ====================

const prisma = new PrismaClient({
  log: ['warn', 'error'],
});

const DATA_PATH = resolve(__dirname, '../../../output/merged');

// 命令行参数解析
const args = process.argv.slice(2);
const config = {
  batchSize: 500,
  useHybridStrategy: !args.includes('--safe'),
  resetDatabase: args.includes('--reset') || args.includes('--clear')
};

// ==================== 工具函数 ====================

class Logger {
  private startTime = performance.now();
  
  private elapsed(): string {
    return ((performance.now() - this.startTime) / 1000).toFixed(2);
  }
  
  info(message: string, ...args: any[]) {
    console.log(`[${this.elapsed()}s] ℹ️  ${message}`, ...args);
  }
  
  success(message: string, ...args: any[]) {
    console.log(`[${this.elapsed()}s] ✅ ${message}`, ...args);
  }
  
  error(message: string, ...args: any[]) {
    console.error(`[${this.elapsed()}s] ❌ ${message}`, ...args);
  }
  
  warn(message: string, ...args: any[]) {
    console.warn(`[${this.elapsed()}s] ⚠️  ${message}`, ...args);
  }
}

const logger = new Logger();

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
  if (value === null || value === undefined || value === '') return null;
  try {
    return BigInt(value);
  } catch {
    return null;
  }
}

function stringToGameId(input: string): bigint {
  const hash = createHash('md5').update(input).digest('hex');
  const numericValue = parseInt(hash.substring(0, 8), 16);
  return BigInt(Math.abs(numericValue));
}

function loadJsonFile(filename: string): any[] {
  const filePath = join(DATA_PATH, filename);
  if (!existsSync(filePath)) {
    logger.warn(`${filename} 不存在，跳过`);
    return [];
  }
  const data = JSON.parse(readFileSync(filePath, 'utf-8'));
  logger.info(`加载 ${filename}: ${data.length} 条记录`);
  return data;
}

// ==================== 混合导入策略 ====================

interface ImportStats {
  total: number;
  success: number;
  failed: number;
  updated: number;
  created: number;
}

async function smartBatchProcess<T>(
  tableName: string,
  items: T[],
  batchOperation: (batch: T[]) => Promise<any>,
  fallbackOperation: (item: T) => Promise<any>
): Promise<ImportStats> {
  const stats: ImportStats = {
    total: items.length,
    success: 0,
    failed: 0,
    updated: 0,
    created: 0
  };

  if (!config.useHybridStrategy) {
    // 安全模式：直接使用 upsert
    for (const item of items) {
      try {
        await fallbackOperation(item);
        stats.success++;
        stats.updated++;
      } catch (error) {
        stats.failed++;
      }
    }
    return stats;
  }

  // 混合模式：尝试批量，失败则回退到 upsert
  for (let i = 0; i < items.length; i += config.batchSize) {
    const batch = items.slice(i, i + config.batchSize);
    
    try {
      await batchOperation(batch);
      stats.success += batch.length;
      stats.created += batch.length;
    } catch (error) {
      if (error instanceof Prisma.PrismaClientKnownRequestError && error.code === 'P2002') {
        logger.warn(`${tableName}: 批量操作失败，回退到逐条处理`);
        
        for (const item of batch) {
          try {
            await fallbackOperation(item);
            stats.success++;
            stats.updated++;
          } catch (itemError) {
            stats.failed++;
          }
        }
      } else {
        logger.error(`${tableName}: 批量操作失败`, error);
        stats.failed += batch.length;
      }
    }
  }

  return stats;
}

// ==================== 导入函数 ====================

async function importItems(): Promise<ImportStats> {
  const items = loadJsonFile('Item.json');
  
  return await smartBatchProcess(
    'Item',
    items,
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
    async (item: any) => {
      await prisma.item.upsert({
        where: { game_id: validateRequiredBigInt(item.game_id, 'game_id') },
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
          game_id: validateRequiredBigInt(item.game_id, 'game_id'),
          names: JSON.stringify(item.names || {}),
          descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
          kind: item.kind || 'unknown',
          rarity: item.rarity || 0,
          max_count: item.max_count || 0,
          sell_price: item.sell_price || 0,
          buy_price: item.buy_price || 0,
        },
      });
    }
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
      await prisma.skill.upsert({
        where: { game_id: validateRequiredBigInt(skill.game_id, 'game_id') },
        update: {
          names: JSON.stringify(skill.names || {}),
          descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
          ranks: JSON.stringify(skill.ranks || []),
        },
        create: {
          game_id: validateRequiredBigInt(skill.game_id, 'game_id'),
          names: JSON.stringify(skill.names || {}),
          descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
          ranks: JSON.stringify(skill.ranks || []),
        },
      });
    }
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
      await prisma.monster.upsert({
        where: { game_id: validateRequiredBigInt(monster.game_id, 'game_id') },
        update: {
          names: JSON.stringify(monster.names || {}),
          descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
          features: monster.features ? JSON.stringify(monster.features) : null,
          species: monster.species || null,
          parts: monster.parts ? JSON.stringify(monster.parts) : null,
          rewards: monster.rewards ? JSON.stringify(monster.rewards) : null,
        },
        create: {
          game_id: validateRequiredBigInt(monster.game_id, 'game_id'),
          names: JSON.stringify(monster.names || {}),
          descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
          features: monster.features ? JSON.stringify(monster.features) : null,
          species: monster.species || null,
          parts: monster.parts ? JSON.stringify(monster.parts) : null,
          rewards: monster.rewards ? JSON.stringify(monster.rewards) : null,
        },
      });
    }
  );
}

async function importWeapons(): Promise<ImportStats> {
  const weaponTypes = [
    'GreatSword', 'LongSword', 'SwordShield', 'DualBlades',
    'Hammer', 'HuntingHorn', 'Lance', 'Gunlance', 'SwitchAxe',
    'ChargeBlade', 'InsectGlaive', 'LightBowgun', 'HeavyBowgun', 'Bow'
  ];

  let totalStats: ImportStats = {
    total: 0, success: 0, failed: 0, updated: 0, created: 0
  };

  for (const weaponType of weaponTypes) {
    const weapons = loadJsonFile(`weapons/${weaponType}.json`);
    if (weapons.length === 0) continue;

    const stats = await smartBatchProcess(
      `Weapon-${weaponType}`,
      weapons,
      async (batch) => {
        await prisma.weapon.createMany({
          data: batch.map((weapon: any) => ({
            game_id: validateRequiredBigInt(weapon.game_id, 'game_id'),
            kind: weaponType.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1),
            names: JSON.stringify(weapon.names || {}),
            descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
            rarity: weapon.rarity || null,
            attack_raw: weapon.attack_raw || weapon.raw_damage || null,
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
            series_id: weapon.series_id ? safeBigInt(weapon.series_id) : null,
            previous_id: weapon.previous_id ? safeBigInt(weapon.previous_id) : null,
            next_weapons: weapon.next_weapons ? JSON.stringify(weapon.next_weapons) : null,
          })),
        });
      },
      async (weapon: any) => {
        await prisma.weapon.upsert({
          where: { game_id: validateRequiredBigInt(weapon.game_id, 'game_id') },
          update: {
            kind: weaponType.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1),
            names: JSON.stringify(weapon.names || {}),
            descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
            rarity: weapon.rarity || null,
            attack_raw: weapon.attack_raw || weapon.raw_damage || null,
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
            series_id: weapon.series_id ? safeBigInt(weapon.series_id) : null,
            previous_id: weapon.previous_id ? safeBigInt(weapon.previous_id) : null,
            next_weapons: weapon.next_weapons ? JSON.stringify(weapon.next_weapons) : null,
          },
          create: {
            game_id: validateRequiredBigInt(weapon.game_id, 'game_id'),
            kind: weaponType.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1),
            names: JSON.stringify(weapon.names || {}),
            descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
            rarity: weapon.rarity || null,
            attack_raw: weapon.attack_raw || weapon.raw_damage || null,
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
            series_id: weapon.series_id ? safeBigInt(weapon.series_id) : null,
            previous_id: weapon.previous_id ? safeBigInt(weapon.previous_id) : null,
            next_weapons: weapon.next_weapons ? JSON.stringify(weapon.next_weapons) : null,
          },
        });
      }
    );

    totalStats.total += stats.total;
    totalStats.success += stats.success;
    totalStats.failed += stats.failed;
    totalStats.updated += stats.updated;
    totalStats.created += stats.created;
  }

  return totalStats;
}

// ==================== 数据库清理 ====================

async function clearDatabase() {
  logger.info('🗑️ 清理数据库...');
  
  try {
    await prisma.$executeRaw`PRAGMA foreign_keys = OFF;`;
    
    const tables = ['partName', 'weaponSeries', 'stage', 'species', 'armorSet', 'weapon', 'monster', 'skill', 'item'];
    
    for (const table of tables) {
      try {
        await prisma.$executeRawUnsafe(`DELETE FROM ${table};`);
      } catch (error) {
        // 忽略表不存在等错误
      }
    }
    
    await prisma.$executeRaw`PRAGMA foreign_keys = ON;`;
    logger.success('数据库清理完成');
  } catch (error) {
    logger.warn('数据库清理失败:', error);
    await prisma.$executeRaw`PRAGMA foreign_keys = ON;`;
  }
}

// ==================== 主函数 ====================

async function main() {
  try {
    logger.info('🚀 开始 MHWildsWiki 数据导入...');
    logger.info(`📋 配置: 混合模式=${config.useHybridStrategy}, 批次大小=${config.batchSize}`);
    
    if (config.resetDatabase) {
      logger.info('📋 使用完全重置模式');
      await clearDatabase();
    } else {
      logger.info('📋 使用增量导入模式 (使用 --reset 标志可清理数据库)');
    }

    const startTime = performance.now();
    let totalStats: ImportStats = {
      total: 0, success: 0, failed: 0, updated: 0, created: 0
    };

    // 核心数据导入
    logger.info('📦 导入核心数据...');
    
    const imports = [
      ['Item', importItems],
      ['Skill', importSkills],
      ['Monster', importMonsters],
      ['Weapon', importWeapons],
    ] as const;

    for (const [name, importFn] of imports) {
      const stats = await importFn();
      totalStats.total += stats.total;
      totalStats.success += stats.success;
      totalStats.failed += stats.failed;
      totalStats.updated += stats.updated;
      totalStats.created += stats.created;
      
      const successRate = stats.total > 0 ? (stats.success / stats.total * 100).toFixed(1) : '0.0';
      const duration = ((performance.now() - startTime) / 1000).toFixed(2);
      logger.success(`${name}: 完成 - 成功:${stats.success}(${successRate}%), 失败:${stats.failed}, 新建:${stats.created}, 更新:${stats.updated}, 耗时:${duration}s`);
    }

    // 最终统计
    const totalDuration = ((performance.now() - startTime) / 1000).toFixed(2);
    const overallSuccessRate = totalStats.total > 0 ? (totalStats.success / totalStats.total * 100).toFixed(1) : '0.0';
    
    logger.success('🎉 数据导入完成！');
    logger.info(`📊 统计: 总计:${totalStats.total}, 成功:${totalStats.success}(${overallSuccessRate}%)`);
    logger.info(`📊 详细: 新建:${totalStats.created}, 更新:${totalStats.updated}, 失败:${totalStats.failed}`);
    logger.info(`⏱️ 耗时: ${totalDuration}s`);

    if (totalStats.failed > 0) {
      logger.warn(`⚠️ 有 ${totalStats.failed} 条记录导入失败，请检查日志`);
      process.exit(1);
    }

  } catch (error) {
    logger.error('❌ 导入过程中发生致命错误:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// 运行主函数
if (require.main === module) {
  main().catch((error) => {
    console.error('❌ 未捕获的错误:', error);
    process.exit(1);
  });
}

export { main as importData };
