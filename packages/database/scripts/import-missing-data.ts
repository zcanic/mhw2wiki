#!/usr/bin/env tsx
/**
 * 导入缺失的数据文件
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

async function importHuntingHornMelodies() {
  console.log('📦 导入狩猎笛旋律数据...');
  const melodies = loadJsonFile('weapons/HuntingHornMelodies.json');
  
  const data = melodies.map((item: any) => ({
    game_id: item.game_id,
    notes: JSON.stringify(item.notes || []),
    songs: JSON.stringify(item.songs || []),
  }));

  await prisma.huntingHornMelody.createMany({ data });
  console.log(`✅ 狩猎笛旋律: ${melodies.length} 条记录导入完成`);
}

async function importHuntingHornSongs() {
  console.log('📦 导入狩猎笛歌曲数据...');
  const songs = loadJsonFile('weapons/HuntingHornSongs.json');
  
  const data = songs.map((item: any, index: number) => ({
    effect_id: `${item.effect_id}_${index}`, // 为重复的effect_id添加索引来确保唯一性
    notes: JSON.stringify(item.notes || []),
    names: JSON.stringify(item.names || {}),
  }));

  await prisma.huntingHornSong.createMany({ data });
  console.log(`✅ 狩猎笛歌曲: ${songs.length} 条记录导入完成`);
}

async function main() {
  try {
    console.log('🚀 开始导入缺失的数据...');

    await importPartNames();
    await importWeaponSeries();
    await importHuntingHornMelodies();
    await importHuntingHornSongs();

    console.log('🎉 所有缺失数据导入完成！');
  } catch (error) {
    console.error('❌ 导入失败:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  main();
}
