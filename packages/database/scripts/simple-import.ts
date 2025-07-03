#!/usr/bin/env tsx
/**
 * 简化的数据导入脚本 - 仅导入核心数据
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';

const prisma = new PrismaClient({
  log: ['error'],
});

const DATA_PATH = resolve(__dirname, '../../../output/merged');

// 加载JSON文件
function loadJsonFile(filename: string): any[] {
  try {
    const filePath = join(DATA_PATH, filename);
    const content = readFileSync(filePath, 'utf-8');
    const data = JSON.parse(content);
    console.log(`✅ 加载 ${filename}: ${data.length} 条记录`);
    return data;
  } catch (error) {
    console.error(`❌ 加载失败 ${filename}:`, error);
    return [];
  }
}

// 清理数据库
async function clearTables(): Promise<void> {
  console.log('🧹 清理数据库...');
  
  try {
    await prisma.$executeRawUnsafe(`DELETE FROM items;`);
    await prisma.$executeRawUnsafe(`DELETE FROM monsters;`);
    await prisma.$executeRawUnsafe(`DELETE FROM skills;`);
    console.log('✅ 数据库清理完成');
  } catch (error) {
    console.warn('⚠️  清理数据库失败，继续执行...');
  }
}

// 导入物品数据
async function importItems(): Promise<void> {
  const items = loadJsonFile('Item.json');
  if (items.length === 0) return;
  
  console.log('📦 开始导入物品数据...');
  
  let imported = 0;
  for (const item of items) { // 导入全部数据，不限制数量
    try {
      await prisma.item.create({
        data: {
          game_id: BigInt(item.game_id),
          names: JSON.stringify(item.names),
          descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
          kind: item.kind || 'unknown',
          rarity: item.rarity || 0,
          max_count: item.max_count || 0,
          sell_price: item.sell_price || 0,
          buy_price: item.buy_price || 0,
        }
      });
      imported++;
    } catch (error) {
      console.warn(`跳过物品 ${item.game_id}:`, error.message);
    }
  }
  
  console.log(`✅ 物品导入完成: ${imported} 条`);
}

// 导入怪物数据
async function importMonsters(): Promise<void> {
  const monsters = loadJsonFile('LargeMonsters.json');
  if (monsters.length === 0) return;
  
  console.log('🐲 开始导入怪物数据...');
  
  let imported = 0;
  for (const monster of monsters) { // 导入全部怪物
    try {
      await prisma.monster.create({
        data: {
          game_id: BigInt(monster.game_id),
          names: JSON.stringify(monster.names),
          descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
          features: monster.features ? JSON.stringify(monster.features) : null,
          species: monster.species || null,
          parts: monster.parts ? JSON.stringify(monster.parts) : null,
        }
      });
      imported++;
    } catch (error) {
      console.warn(`跳过怪物 ${monster.game_id}:`, error.message);
    }
  }
  
  console.log(`✅ 怪物导入完成: ${imported} 条`);
}

// 导入技能数据
async function importSkills(): Promise<void> {
  const skills = loadJsonFile('Skill.json');
  if (skills.length === 0) return;
  
  console.log('🎯 开始导入技能数据...');
  
  let imported = 0;
  for (const skill of skills) { // 导入全部技能
    try {
      await prisma.skill.create({
        data: {
          game_id: BigInt(skill.game_id),
          names: JSON.stringify(skill.names),
          descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
          ranks: JSON.stringify(skill.ranks || []),
        }
      });
      imported++;
    } catch (error) {
      console.warn(`跳过技能 ${skill.game_id}:`, error.message);
    }
  }
  
  console.log(`✅ 技能导入完成: ${imported} 条`);
}

// 主函数
async function main(): Promise<void> {
  console.log('🚀 开始简化数据导入...');
  
  try {
    await clearTables();
    await importItems();
    await importMonsters();
    await importSkills();
    
    // 验证导入结果
    const itemCount = await prisma.item.count();
    const monsterCount = await prisma.monster.count();
    const skillCount = await prisma.skill.count();
    
    console.log('\n📊 导入结果:');
    console.log(`   物品: ${itemCount} 条`);
    console.log(`   怪物: ${monsterCount} 条`);
    console.log(`   技能: ${skillCount} 条`);
    console.log('\n🎉 数据导入完成！');
    
  } catch (error) {
    console.error('❌ 导入失败:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

// 运行脚本
if (require.main === module) {
  main();
}
