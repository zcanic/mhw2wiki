#!/usr/bin/env tsx
/**
 * MHW2Wiki 数据更新脚本 v1.0
 * 
 * 专门用于数据更新场景，只需更新 output/merged/ 目录下的 JSON 文件
 * 支持增量更新和全量更新两种模式
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';

// 重用现有的类型定义和工具函数
interface ImportStats {
  total: number;
  success: number;
  failed: number;
  skipped: number;
}

const prisma = new PrismaClient({
  log: process.env.NODE_ENV === 'development' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
});

const DATA_PATH = resolve(__dirname, '../../../output/merged');

// 简化的日志工具
class UpdateLogger {
  private startTime = performance.now();
  
  info(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.log(`[${elapsed}s] ℹ️  ${message}`, ...args);
  }
  
  success(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.log(`[${elapsed}s] ✅ ${message}`, ...args);
  }
  
  warn(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.log(`[${elapsed}s] ⚠️  ${message}`, ...args);
  }
  
  error(message: string, ...args: any[]) {
    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    console.error(`[${elapsed}s] ❌ ${message}`, ...args);
  }
}

const logger = new UpdateLogger();

// 数据文件映射（与原导入脚本保持一致）
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
    
    return data;
  } catch (error) {
    logger.error(`解析数据文件失败: ${filePath}`, error);
    return [];
  }
}

// 检查数据结构是否发生变化
async function checkDataStructure(): Promise<boolean> {
  logger.info('检查数据结构是否发生变化...');
  
  try {
    // 检查表是否存在
    const tableCount = await prisma.$queryRaw<Array<{count: bigint}>>`
      SELECT COUNT(*) as count 
      FROM information_schema.tables 
      WHERE table_schema = 'public' 
      AND table_name IN ('Item', 'Skill', 'Monster', 'ArmorSet', 'Weapon');
    `;
    
    if (Number(tableCount[0].count) < 5) {
      logger.warn('数据库表不完整，建议执行全量导入');
      return false;
    }
    
    // 简单检查数据文件的基本结构
    const itemSample = loadJsonFile(DATA_FILES.items).slice(0, 1);
    if (itemSample.length > 0) {
      const requiredFields = ['game_id', 'names'];
      const hasRequiredFields = requiredFields.every(field => field in itemSample[0]);
      if (!hasRequiredFields) {
        logger.warn('数据文件结构发生变化，建议检查 Schema');
        return false;
      }
    }
    
    logger.success('数据结构检查通过');
    return true;
  } catch (error) {
    logger.error('数据结构检查失败:', error);
    return false;
  }
}

// 更新模式选择
async function selectUpdateMode(): Promise<'incremental' | 'full'> {
  const structureValid = await checkDataStructure();
  
  if (!structureValid) {
    logger.warn('检测到结构问题，将执行全量更新');
    return 'full';
  }
  
  // 检查数据库是否为空
  const itemCount = await prisma.item.count();
  if (itemCount === 0) {
    logger.info('数据库为空，将执行全量导入');
    return 'full';
  }
  
  // 可以在这里添加更多的智能判断逻辑
  // 比如检查 updated_at 字段，或者比较文件修改时间等
  
  logger.info('将执行增量更新模式');
  return 'incremental';
}

// 增量更新函数
async function incrementalUpdate(): Promise<void> {
  logger.info('🔄 开始增量更新...');
  
  // 增量更新的核心思路：
  // 1. 使用 upsert 操作 (INSERT ... ON CONFLICT UPDATE)
  // 2. 只更新变化的数据，跳过未修改的记录
  // 3. 保持现有的关联关系
  
  const updateOperations = [
    { name: 'Items', file: DATA_FILES.items, updateFn: updateItems },
    { name: 'Skills', file: DATA_FILES.skills, updateFn: updateSkills },
    { name: 'Monsters', file: DATA_FILES.monsters, updateFn: updateMonsters },
    // 可以根据需要添加更多表
  ];
  
  for (const { name, file, updateFn } of updateOperations) {
    try {
      logger.info(`📝 更新 ${name}...`);
      const data = loadJsonFile(file);
      if (data.length > 0) {
        await updateFn(data);
        logger.success(`${name} 更新完成 (${data.length} 条记录)`);
      }
    } catch (error) {
      logger.error(`${name} 更新失败:`, error);
    }
  }
}

// 具体的更新函数
async function updateItems(items: any[]): Promise<void> {
  for (const item of items) {
    await prisma.item.upsert({
      where: { game_id: BigInt(item.game_id) },
      update: {
        names: item.names,
        descriptions: item.descriptions || null,
        kind: item.kind,
        rarity: item.rarity || 0,
        max_count: item.max_count || 1,
        sell_price: item.sell_price || 0,
        buy_price: item.buy_price || 0,
        updated_at: new Date(),
      },
      create: {
        game_id: BigInt(item.game_id),
        names: item.names,
        descriptions: item.descriptions || null,
        kind: item.kind,
        rarity: item.rarity || 0,
        max_count: item.max_count || 1,
        sell_price: item.sell_price || 0,
        buy_price: item.buy_price || 0,
      },
    });
  }
}

async function updateSkills(skills: any[]): Promise<void> {
  for (const skill of skills) {
    await prisma.skill.upsert({
      where: { game_id: BigInt(skill.game_id) },
      update: {
        names: skill.names,
        descriptions: skill.descriptions || null,
        ranks: skill.ranks || [],
        updated_at: new Date(),
      },
      create: {
        game_id: BigInt(skill.game_id),
        names: skill.names,
        descriptions: skill.descriptions || null,
        ranks: skill.ranks || [],
      },
    });
  }
}

async function updateMonsters(monsters: any[]): Promise<void> {
  for (const monster of monsters) {
    await prisma.monster.upsert({
      where: { game_id: BigInt(monster.game_id) },
      update: {
        names: monster.names,
        descriptions: monster.descriptions || null,
        features: monster.features || null,
        species: monster.species || null,
        parts: monster.parts || null,
        rewards: monster.rewards || null,
        updated_at: new Date(),
      },
      create: {
        game_id: BigInt(monster.game_id),
        names: monster.names,
        descriptions: monster.descriptions || null,
        features: monster.features || null,
        species: monster.species || null,
        parts: monster.parts || null,
        rewards: monster.rewards || null,
      },
    });
  }
}

// 全量更新函数（调用原有的完整导入脚本）
async function fullUpdate(): Promise<void> {
  logger.info('🔄 开始全量更新...');
  logger.info('将调用完整的数据导入脚本...');
  
  // 这里可以调用原有的 import.ts 脚本
  // 或者重新实现清理+导入的逻辑
  try {
    const { execSync } = require('child_process');
    execSync('npm run db:seed', { 
      cwd: resolve(__dirname, '..'),
      stdio: 'inherit' 
    });
    logger.success('全量更新完成');
  } catch (error) {
    logger.error('全量更新失败:', error);
    throw error;
  }
}

// 主更新函数
async function main(): Promise<void> {
  const totalStartTime = performance.now();
  
  try {
    logger.info('🚀 开始 MHW2Wiki 数据更新...');
    
    // 1. 检查 output/merged/ 目录
    if (!existsSync(DATA_PATH)) {
      throw new Error(`数据目录不存在: ${DATA_PATH}`);
    }
    
    // 2. 选择更新模式
    const updateMode = await selectUpdateMode();
    
    // 3. 执行相应的更新操作
    if (updateMode === 'incremental') {
      await incrementalUpdate();
    } else {
      await fullUpdate();
    }
    
    const totalDuration = ((performance.now() - totalStartTime) / 1000).toFixed(2);
    logger.success(`🎉 数据更新完成! 耗时: ${totalDuration}s`);
    
  } catch (error) {
    logger.error('💥 数据更新失败:', error);
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

export { main as updateData };
