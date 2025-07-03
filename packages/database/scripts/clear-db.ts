#!/usr/bin/env tsx
/**
 * 清空数据库表
 */

import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function clearTables() {
  try {
    console.log('🗑️ 清空数据库表...\n');
    
    await prisma.weapon.deleteMany({});
    console.log('✅ 已清空武器表');
    
    await prisma.item.deleteMany({});
    console.log('✅ 已清空物品表');
    
    await prisma.largeMonster.deleteMany({});
    console.log('✅ 已清空大型怪物表');
    
    console.log('\n🎯 数据库已清空，可以重新导入数据');
    
  } catch (error) {
    console.error('❌ 清空数据库失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

clearTables();
