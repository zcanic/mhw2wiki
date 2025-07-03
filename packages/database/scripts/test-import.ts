#!/usr/bin/env tsx
/**
 * MHWildsWiki 测试导入脚本 v1.0
 * 
 * 小规模测试导入，验证Schema和数据兼容性
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const prisma = new PrismaClient({
  log: ['warn', 'error']
});

const DATA_PATH = resolve(__dirname, '../../../output/merged');

function loadJsonData<T>(fileName: string, limit = 10): any[] {
  const filePath = join(DATA_PATH, fileName);
  
  if (!existsSync(filePath)) {
    console.log(`⚠️ 文件不存在: ${fileName}`);
    return [];
  }
  
  try {
    const data = JSON.parse(readFileSync(filePath, 'utf-8'));
    const limitedData = Array.isArray(data) ? data.slice(0, limit) : [];
    console.log(`✅ 加载 ${fileName}: ${limitedData.length} 条记录 (限制: ${limit})`);
    return limitedData;
  } catch (error) {
    console.error(`❌ 读取文件失败 ${fileName}:`, error);
    return [];
  }
}

async function testImportItems() {
  console.log('📦 测试导入物品数据...');
  
  const items = loadJsonData('Item.json', 5);
  if (items.length === 0) return;
  
  let success = 0;
  let failed = 0;
  
  for (const item of items) {
    try {
      console.log(`尝试导入物品: ${JSON.stringify(item).substring(0, 100)}...`);
      
      await prisma.item.create({
        data: {
          game_id: BigInt((item as any).game_id),
          names: JSON.stringify((item as any).names || {}),
          descriptions: (item as any).descriptions ? JSON.stringify((item as any).descriptions) : null,
          kind: (item as any).kind || 'unknown',
          rarity: (item as any).rarity || 0,
          max_count: (item as any).max_count || 0,
          sell_price: (item as any).sell_price || 0,
          buy_price: (item as any).buy_price || 0,
        }
      });
      
      success++;
      console.log(`✅ 物品导入成功 (ID: ${(item as any).game_id})`);
    } catch (error) {
      console.error(`❌ 物品导入失败 (ID: ${(item as any).game_id}):`, error);
      failed++;
    }
  }
  
  console.log(`✅ 物品测试完成: ${success} 成功, ${failed} 失败\n`);
}

async function testImportWeapons() {
  console.log('⚔️ 测试导入武器数据...');
  
  const weapons = loadJsonData('weapons/GreatSword.json', 3);
  if (weapons.length === 0) return;
  
  let success = 0;
  let failed = 0;
  
  for (const weapon of weapons) {
    try {
      console.log(`尝试导入武器: ${JSON.stringify(weapon).substring(0, 100)}...`);
      
      await prisma.weapon.create({
        data: {
          game_id: BigInt((weapon as any).game_id),
          kind: (weapon as any).kind || 'great-sword',
          names: JSON.stringify((weapon as any).names || {}),
          descriptions: (weapon as any).descriptions ? JSON.stringify((weapon as any).descriptions) : null,
          rarity: (weapon as any).rarity || null,
          attack_raw: (weapon as any).attack_raw || null,
          affinity: (weapon as any).affinity || null,
          defense: (weapon as any).defense || null,
          slots: (weapon as any).slots ? JSON.stringify((weapon as any).slots) : null,
          sharpness: (weapon as any).sharpness ? JSON.stringify((weapon as any).sharpness) : null,
          handicraft: (weapon as any).handicraft ? JSON.stringify((weapon as any).handicraft) : null,
          element_type: (weapon as any).element_type || null,
          element_damage: (weapon as any).element_damage || null,
          element_hidden: (weapon as any).element_hidden || false,
        }
      });
      
      success++;
      console.log(`✅ 武器导入成功 (ID: ${(weapon as any).game_id})`);
    } catch (error) {
      console.error(`❌ 武器导入失败 (ID: ${(weapon as any).game_id}):`, error);
      failed++;
    }
  }
  
  console.log(`✅ 武器测试完成: ${success} 成功, ${failed} 失败\n`);
}

async function testImportMonsters() {
  console.log('🐲 测试导入怪物数据...');
  
  const monsters = loadJsonData('LargeMonsters.json', 3);
  if (monsters.length === 0) return;
  
  let success = 0;
  let failed = 0;
  
  for (const monster of monsters) {
    try {
      console.log(`尝试导入怪物: ${JSON.stringify(monster).substring(0, 100)}...`);
      
      await prisma.monster.create({
        data: {
          game_id: BigInt((monster as any).game_id),
          names: JSON.stringify((monster as any).names || {}),
          descriptions: (monster as any).descriptions ? JSON.stringify((monster as any).descriptions) : null,
          features: (monster as any).features ? JSON.stringify((monster as any).features) : null,
          species: (monster as any).species || null,
          parts: (monster as any).parts ? JSON.stringify((monster as any).parts) : null,
          rewards: (monster as any).rewards ? JSON.stringify((monster as any).rewards) : null,
        }
      });
      
      success++;
      console.log(`✅ 怪物导入成功 (ID: ${(monster as any).game_id})`);
    } catch (error) {
      console.error(`❌ 怪物导入失败 (ID: ${(monster as any).game_id}):`, error);
      failed++;
    }
  }
  
  console.log(`✅ 怪物测试完成: ${success} 成功, ${failed} 失败\n`);
}

async function main() {
  try {
    console.log('🧪 开始Schema兼容性测试...\n');
    
    // 清理现有数据
    await prisma.weapon.deleteMany({});
    await prisma.item.deleteMany({});
    await prisma.monster.deleteMany({});
    console.log('🗑️ 清理现有测试数据\n');
    
    // 依次测试各个表的导入
    await testImportItems();
    await testImportWeapons();
    await testImportMonsters();
    
    console.log('🎉 Schema兼容性测试完成！');
    
  } catch (error) {
    console.error('💥 测试失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
