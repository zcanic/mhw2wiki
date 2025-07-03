#!/usr/bin/env tsx
/**
 * 数据库验证脚本
 */

import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main(): Promise<void> {
  console.log('🔍 验证数据库连接和数据...');
  
  try {
    // 检查连接
    await prisma.$queryRaw`SELECT 1 as test`;
    console.log('✅ 数据库连接正常');
    
    // 查询各表数据数量
    const itemCount = await prisma.item.count();
    const monsterCount = await prisma.monster.count();
    
    console.log(`📊 数据统计:`);
    console.log(`   物品: ${itemCount} 条`);
    console.log(`   怪物: ${monsterCount} 条`);
    
    // 查询一些样本数据
    const sampleItems = await prisma.item.findMany({ take: 3 });
    console.log('\n📦 样本物品:');
    sampleItems.forEach(item => {
      const names = JSON.parse(item.names);
      console.log(`   - ${names.en || names.ja} (ID: ${item.game_id})`);
    });
    
    const sampleMonsters = await prisma.monster.findMany({ take: 3 });
    console.log('\n🐲 样本怪物:');
    sampleMonsters.forEach(monster => {
      const names = JSON.parse(monster.names);
      console.log(`   - ${names.en || names.ja} (ID: ${monster.game_id})`);
    });
    
  } catch (error) {
    console.error('❌ 验证失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
