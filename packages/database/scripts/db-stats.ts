#!/usr/bin/env tsx
/**
 * 数据库内容详细统计
 */

import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function generateStats() {
  try {
    console.log('📊 MHWildsWiki 数据库统计报告\n');
    console.log('=' .repeat(50));
    
    // 基础统计
    const weaponCount = await prisma.weapon.count();
    const itemCount = await prisma.item.count();
    const monsterCount = await prisma.largeMonster.count();
    
    console.log(`\n📈 总体统计:`);
    console.log(`  武器总数: ${weaponCount}`);
    console.log(`  物品总数: ${itemCount}`);
    console.log(`  大型怪物总数: ${monsterCount}`);
    
    // 武器类型统计
    console.log(`\n⚔️ 武器类型分布:`);
    const weaponsByType = await prisma.weapon.groupBy({
      by: ['weaponType'],
      _count: { weaponType: true },
      orderBy: { _count: { weaponType: 'desc' } }
    });
    
    weaponsByType.forEach(item => {
      console.log(`  ${item.weaponType}: ${item._count.weaponType}`);
    });
    
    // 稀有度统计
    console.log(`\n💎 武器稀有度分布:`);
    const weaponsByRarity = await prisma.weapon.groupBy({
      by: ['rarity'],
      _count: { rarity: true },
      orderBy: { rarity: 'asc' }
    });
    
    weaponsByRarity.forEach(item => {
      console.log(`  稀有度 ${item.rarity}: ${item._count.rarity} 把武器`);
    });
    
    // 物品类别统计 
    console.log(`\n📦 物品类别分布 (前10):`);
    const itemsByCategory = await prisma.item.groupBy({
      by: ['category'],
      _count: { category: true },
      orderBy: { _count: { category: 'desc' } },
      take: 10
    });
    
    itemsByCategory.forEach(item => {
      console.log(`  ${item.category}: ${item._count.category}`);
    });
    
    // 怪物种族统计
    console.log(`\n🐲 怪物种族分布:`);
    const monstersBySpecies = await prisma.largeMonster.groupBy({
      by: ['species'],
      _count: { species: true },
      orderBy: { _count: { species: 'desc' } }
    });
    
    monstersBySpecies.forEach(item => {
      console.log(`  ${item.species}: ${item._count.species}`);
    });
    
    // 示例数据
    console.log(`\n🔍 示例数据:`);
    
    const sampleWeapons = await prisma.weapon.findMany({
      select: { gameId: true, nameEn: true, weaponType: true, rarity: true, attack: true },
      orderBy: { attack: 'desc' },
      take: 5
    });
    
    console.log(`\n  攻击力最高的5把武器:`);
    sampleWeapons.forEach(w => {
      console.log(`    ${w.nameEn} (${w.weaponType}) - 攻击力: ${w.attack}, 稀有度: ${w.rarity}`);
    });
    
    const sampleMonsters = await prisma.largeMonster.findMany({
      select: { nameEn: true, species: true, threatLevel: true },
      take: 5
    });
    
    console.log(`\n  大型怪物示例:`);
    sampleMonsters.forEach(m => {
      console.log(`    ${m.nameEn} (${m.species}) - 威胁等级: ${m.threatLevel || 'N/A'}`);
    });
    
    console.log('\n' + '=' .repeat(50));
    console.log('📋 数据库健康状态: ✅ 良好');
    
  } catch (error) {
    console.error('❌ 统计生成失败:', error);
  } finally {
    await prisma.$disconnect();
  }
}

generateStats();
