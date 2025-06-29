#!/usr/bin/env tsx
/**
 * 导入狩猎笛歌曲数据
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
    await importHuntingHornSongs();
    console.log('🎉 狩猎笛歌曲数据导入完成！');
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
