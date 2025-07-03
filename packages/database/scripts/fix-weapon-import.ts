#!/usr/bin/env tsx
/**
 * 修复武器导入 - 为每种武器类型的game_id添加偏移量以避免唯一约束冲突
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';

const prisma = new PrismaClient({ log: ['warn', 'error'] });
const DATA_PATH = resolve(__dirname, '../../../output/merged');

// 为每种武器类型定义偏移量，确保game_id全局唯一
const WEAPON_TYPE_OFFSETS = {
  'GreatSword': 0,        // 1-100
  'LongSword': 1000,      // 1001-1100
  'SwordShield': 2000,    // 2001-2100
  'DualBlades': 3000,     // 3001-3100
  'Hammer': 4000,         // 4001-4100
  'HuntingHorn': 5000,    // 5001-5100
  'Lance': 6000,          // 6001-6100
  'Gunlance': 7000,       // 7001-7100
  'SwitchAxe': 8000,      // 8001-8100
  'ChargeBlade': 9000,    // 9001-9100
  'InsectGlaive': 10000,  // 10001-10100
  'LightBowgun': 11000,   // 11001-11100
  'HeavyBowgun': 12000,   // 12001-12100
  'Bow': 13000,          // 13001-13100
};

function loadJsonFile(filename: string): any[] {
  const filePath = join(DATA_PATH, filename);
  try {
    const content = readFileSync(filePath, 'utf-8');
    return JSON.parse(content);
  } catch (error) {
    console.error(`Error loading ${filename}:`, error);
    return [];
  }
}

function convertKindName(weaponType: string): string {
  // 将武器类型名称转换为数据库中的格式
  return weaponType.toLowerCase().replace(/([A-Z])/g, '-$1').substring(1);
}

async function main() {
  console.log('🚀 开始修复武器导入...');
  
  // 先清空现有武器数据
  console.log('🗑️ 清空现有武器数据...');
  await prisma.weapon.deleteMany({});
  
  let totalImported = 0;
  
  for (const [weaponType, offset] of Object.entries(WEAPON_TYPE_OFFSETS)) {
    const weapons = loadJsonFile(`weapons/${weaponType}.json`);
    if (weapons.length === 0) {
      console.log(`⚠️ ${weaponType}: 没有找到数据文件`);
      continue;
    }
    
    console.log(`📦 导入 ${weaponType}: ${weapons.length} 条记录 (偏移量: ${offset})`);
    
    const weaponsToImport = weapons.map((weapon: any) => ({
      game_id: BigInt(weapon.game_id + offset), // 添加偏移量
      kind: convertKindName(weaponType),
      names: JSON.stringify(weapon.names || {}),
      descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
      rarity: weapon.rarity || 0,
      attack_raw: weapon.attack_raw || weapon.raw_damage || 0,
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
      series_id: weapon.series_id ? BigInt(weapon.series_id) : null,
      previous_id: weapon.previous_id ? BigInt(weapon.previous_id + offset) : null,
      next_weapons: weapon.next_weapons ? JSON.stringify(weapon.next_weapons.map((id: number) => id + offset)) : null,
    }));
    
    // 批量插入
    await prisma.weapon.createMany({
      data: weaponsToImport,
    });
    
    totalImported += weapons.length;
    console.log(`✅ ${weaponType}: 导入完成`);
  }
  
  console.log(`🎉 武器导入完成！总计: ${totalImported} 条记录`);
  
  // 验证导入结果
  const finalCounts = await prisma.weapon.groupBy({
    by: ['kind'],
    _count: {
      id: true,
    },
  });
  
  console.log('\n📊 最终统计:');
  finalCounts.forEach(({ kind, _count }) => {
    console.log(`  ${kind}: ${_count.id} 条`);
  });
  
  const total = await prisma.weapon.count();
  console.log(`\n🔢 总计: ${total} 条武器记录`);
}

main()
  .catch((error) => {
    console.error('❌ 导入失败:', error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
