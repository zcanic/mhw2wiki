#!/usr/bin/env tsx
/**
 * 完整数据导入脚本 - 导入所有剩余的数据文件
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';

const prisma = new PrismaClient({ log: ['warn', 'error'] });
const DATA_PATH = resolve(__dirname, '../../../output/merged');

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

async function importAccessories() {
  console.log('📦 导入饰品数据...');
  const accessories = loadJsonFile('Accessory.json');
  
  const data = accessories.map((item: any) => ({
    game_id: BigInt(item.game_id),
    names: JSON.stringify(item.names || {}),
    descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
    rarity: item.rarity || 0,
    price: item.price || 0,
    level: item.level || 0,
    skills: JSON.stringify(item.skills || []),
    allowed_on: item.allowed_on || 'weapon',
    icon_color: item.icon_color || null,
    icon_color_id: item.icon_color_id ? String(item.icon_color_id) : null,
  }));

  await prisma.accessory.createMany({ data });
  console.log(`✅ 饰品: ${accessories.length} 条记录导入完成`);
}

async function importArmor() {
  console.log('📦 导入防具数据...');
  const armor = loadJsonFile('Armor.json');
  
  const data = armor.map((item: any) => ({
    game_id: BigInt(item.game_id),
    names: JSON.stringify(item.names || {}),
    rarity: item.rarity || 0,
    set_bonus: item.set_bonus ? JSON.stringify(item.set_bonus) : null,
    group_bonus: item.group_bonus ? JSON.stringify(item.group_bonus) : null,
    pieces: JSON.stringify(item.pieces || []),
  }));

  await prisma.armorSet.createMany({ data });
  console.log(`✅ 防具: ${armor.length} 条记录导入完成`);
}

async function importAmulets() {
  console.log('📦 导入护石数据...');
  const amulets = loadJsonFile('Amulet.json');
  
  const data = amulets.map((item: any) => ({
    game_id: BigInt(item.game_id),
    ranks: JSON.stringify(item.ranks || []),
  }));

  await prisma.amulet.createMany({ data });
  console.log(`✅ 护石: ${amulets.length} 条记录导入完成`);
}

async function importCharms() {
  console.log('📦 导入护符数据...');
  const charms = loadJsonFile('Charm.json');
  
  const data = charms.map((item: any) => ({
    game_id: BigInt(item.game_id),
    names: JSON.stringify(item.names || {}),
  }));

  await prisma.charm.createMany({ data });
  console.log(`✅ 护符: ${charms.length} 条记录导入完成`);
}

async function importArmorUpgrades() {
  console.log('📦 导入防具升级数据...');
  const upgrades = loadJsonFile('ArmorUpgrade.json');
  
  const data = upgrades.map((item: any) => ({
    rarity: item.rarity || 0,
    steps: JSON.stringify(item.steps || []),
  }));

  await prisma.armorUpgrade.createMany({ data });
  console.log(`✅ 防具升级: ${upgrades.length} 条记录导入完成`);
}

async function importSpecies() {
  console.log('📦 导入物种数据...');
  const species = loadJsonFile('Species.json');
  
  const data = species.map((item: any) => ({
    kind: item.kind || '',
    names: JSON.stringify(item.names || {}),
  }));

  await prisma.species.createMany({ data });
  console.log(`✅ 物种: ${species.length} 条记录导入完成`);
}

async function importStages() {
  console.log('📦 导入舞台数据...');
  const stages = loadJsonFile('Stage.json');
  
  const data = stages.map((item: any) => ({
    game_id: BigInt(item.game_id),
    names: JSON.stringify(item.names || {}),
    areas: item.areas || 0,
    camps: item.camps ? JSON.stringify(item.camps) : null,
  }));

  await prisma.stage.createMany({ data });
  console.log(`✅ 舞台: ${stages.length} 条记录导入完成`);
}

async function importPartNames() {
  console.log('📦 导入部位名称数据...');
  const partNames = loadJsonFile('PartNames.json');
  
  const data = partNames.map((item: any, index: number) => ({
    game_id: BigInt(index + 1), // 使用索引作为game_id，因为数据中没有game_id字段
    names: JSON.stringify(item.names || {}),
  }));

  await prisma.partName.createMany({ data });
  console.log(`✅ 部位名称: ${partNames.length} 条记录导入完成`);
}

async function importWeaponSeries() {
  console.log('📦 导入武器系列数据...');
  const weaponSeries = loadJsonFile('WeaponSeries.json');
  
  const data = weaponSeries.map((item: any) => ({
    game_id: BigInt(item.game_id),
    names: JSON.stringify(item.names || {}),
  }));

  await prisma.weaponSeries.createMany({ data });
  console.log(`✅ 武器系列: ${weaponSeries.length} 条记录导入完成`);
}

async function importHuntingHornData() {
  console.log('📦 导入狩猎笛数据...');
  
  // 导入旋律数据
  const melodies = loadJsonFile('weapons/HuntingHornMelodies.json');
  if (melodies.length > 0) {
    const melodyData = melodies.map((item: any) => ({
      game_id: item.game_id || 0,
      notes: JSON.stringify(item.notes || []),
      songs: JSON.stringify(item.songs || []),
    }));

    await prisma.huntingHornMelody.createMany({ data: melodyData });
    console.log(`✅ 狩猎笛旋律: ${melodies.length} 条记录导入完成`);
  }

  // 导入歌曲数据
  const songs = loadJsonFile('weapons/HuntingHornSongs.json');
  if (songs.length > 0) {
    const songData = songs.map((item: any) => ({
      effect_id: item.effect_id || '',
      notes: JSON.stringify(item.notes || []),
      names: JSON.stringify(item.names || {}),
    }));

    await prisma.huntingHornSong.createMany({ data: songData });
    console.log(`✅ 狩猎笛歌曲: ${songs.length} 条记录导入完成`);
  }
}

async function main() {
  console.log('🚀 开始导入所有剩余数据...');
  
  try {
    await importAccessories();
    await importArmor();
    await importAmulets();
    await importCharms();
    await importArmorUpgrades();
    await importSpecies();
    await importStages();
    await importPartNames();
    await importWeaponSeries();
    await importHuntingHornData();
    
    console.log('\n🎉 所有数据导入完成！');
    
    // 最终统计
    const counts = await Promise.all([
      prisma.item.count(),
      prisma.monster.count(),
      prisma.weapon.count(),
      prisma.accessory.count(),
      prisma.armorSet.count(),
      prisma.amulet.count(),
      prisma.charm.count(),
      prisma.armorUpgrade.count(),
      prisma.species.count(),
      prisma.stage.count(),
      prisma.partName.count(),
      prisma.weaponSeries.count(),
      prisma.huntingHornMelody.count(),
      prisma.huntingHornSong.count(),
    ]);
    
    console.log('\n📊 最终数据统计:');
    console.log(`  物品: ${counts[0]} 条`);
    console.log(`  怪物: ${counts[1]} 条`);
    console.log(`  武器: ${counts[2]} 条`);
    console.log(`  饰品: ${counts[3]} 条`);
    console.log(`  防具: ${counts[4]} 条`);
    console.log(`  护石: ${counts[5]} 条`);
    console.log(`  护符: ${counts[6]} 条`);
    console.log(`  防具升级: ${counts[7]} 条`);
    console.log(`  物种: ${counts[8]} 条`);
    console.log(`  舞台: ${counts[9]} 条`);
    console.log(`  部位名称: ${counts[10]} 条`);
    console.log(`  武器系列: ${counts[11]} 条`);
    console.log(`  狩猎笛旋律: ${counts[12]} 条`);
    console.log(`  狩猎笛歌曲: ${counts[13]} 条`);
    
    const total = counts.reduce((sum, count) => sum + count, 0);
    console.log(`\n🔢 总计: ${total} 条记录`);
    
  } catch (error) {
    console.error('❌ 导入失败:', error);
    process.exit(1);
  }
}

main().finally(async () => {
  await prisma.$disconnect();
});
