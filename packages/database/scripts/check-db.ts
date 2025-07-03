#!/usr/bin/env tsx
/**
 * 检查数据库当前状态
 */

import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function checkDatabase() {
  try {
    console.log('📊 检查数据库状态...\n');
    
    // 检查各表的记录数
    const weaponCount = await prisma.weapon.count();
    const itemCount = await prisma.item.count();
    const monsterCount = await prisma.largeMonster.count();
    
    console.log(`武器数量: ${weaponCount}`);
    console.log(`物品数量: ${itemCount}`);
    console.log(`怪物数量: ${monsterCount}\n`);
    
    // 检查是否有重复的 game_id
    if (weaponCount > 0) {
      console.log('🔍 检查武器数据...');
      const weapons = await prisma.weapon.findMany({
        select: { gameId: true, weaponType: true, nameEn: true },
        take: 10
      });
      
      console.log('前10个武器:');
      weapons.forEach(w => console.log(`  ${w.gameId} - ${w.weaponType} - ${w.nameEn}`));
      
      // 检查重复的 game_id
      const duplicateGameIds = await prisma.$queryRaw`
        SELECT game_id, COUNT(*) as count 
        FROM weapons 
        GROUP BY game_id 
        HAVING COUNT(*) > 1
      `;
      
      console.log('\n重复的 game_id:', duplicateGameIds);
    }
    
  } catch (error) {
    console.error('❌ 数据库检查失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

checkDatabase();
