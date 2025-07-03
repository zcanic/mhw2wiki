#!/usr/bin/env tsx
/**
 * MHWildsWiki 健壮数据导入脚本 v2.0
 * 
 * 使用 upsert 操作，支持重复导入而不会产生冲突
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync, existsSync } from 'fs';
import { join, resolve } from 'path';

const prisma = new PrismaClient({
  log: ['warn', 'error']
});

const DATA_PATH = resolve(__dirname, '../../../output/merged');

interface MultiLanguageText {
  ja?: string;
  en?: string;
  'zh-Hans'?: string;
  'zh-Hant'?: string;
}

interface LargeMonsterData {
  game_id: number;
  species: string;
  names: MultiLanguageText;
  threat_level?: number;
  elements?: string[];
  habitat?: string;
}

interface WeaponData {
  game_id: number;
  weapon_type: string;
  names: MultiLanguageText;
  rarity?: number;
  attack?: number;
  element_type?: string;
  element_damage?: number;
  affinity?: number;
}

interface ItemData {
  game_id: number;
  names: MultiLanguageText;
  category?: string;
  rarity?: number;
  value?: number;
}

function loadJsonData<T>(fileName: string): T[] {
  const filePath = join(DATA_PATH, fileName);
  
  if (!existsSync(filePath)) {
    console.log(`⚠️ 文件不存在: ${fileName}`);
    return [];
  }
  
  try {
    const data = JSON.parse(readFileSync(filePath, 'utf-8'));
    console.log(`✅ 加载 ${fileName}: ${data.length} 条记录`);
    return data;
  } catch (error) {
    console.error(`❌ 读取文件失败 ${fileName}:`, error);
    return [];
  }
}

function getPreferredName(names: MultiLanguageText): { en: string; ja: string; zh: string } {
  return {
    en: names.en || names.ja || 'Unknown',
    ja: names.ja || names.en || 'Unknown', 
    zh: names['zh-Hans'] || names['zh-Hant'] || names.en || names.ja || 'Unknown'
  };
}

async function importMonsters() {
  console.log('🐲 导入大型怪物数据...');
  
  const monstersData: LargeMonsterData[] = loadJsonData('LargeMonsters.json');
  if (monstersData.length === 0) return;
  
  let success = 0;
  let failed = 0;
  
  for (const monster of monstersData) {
    try {
      const names = getPreferredName(monster.names);
      
      await prisma.largeMonster.upsert({
        where: { gameId: monster.game_id.toString() },
        update: {
          nameEn: names.en,
          nameJa: names.ja,
          nameZh: names.zh,
          species: monster.species,
          threatLevel: monster.threat_level?.toString(),
          elements: monster.elements?.join(',') || '',
          habitat: monster.habitat,
        },
        create: {
          gameId: monster.game_id.toString(),
          nameEn: names.en,
          nameJa: names.ja,
          nameZh: names.zh,
          species: monster.species,
          threatLevel: monster.threat_level?.toString(),
          elements: monster.elements?.join(',') || '',
          habitat: monster.habitat,
        }
      });
      
      success++;
    } catch (error) {
      console.error(`❌ 导入怪物失败 (${monster.game_id}):`, error);
      failed++;
    }
  }
  
  console.log(`✅ 大型怪物导入完成: ${success} 成功, ${failed} 失败`);
}

async function importWeapons() {
  console.log('⚔️ 导入武器数据...');
  
  const weaponTypes = [
    'GreatSword', 'LongSword', 'SwordShield', 'DualBlades',
    'Hammer', 'HuntingHorn', 'Lance', 'Gunlance',
    'SwitchAxe', 'ChargeBlade', 'InsectGlaive',
    'LightBowgun', 'HeavyBowgun', 'Bow'
  ];
  
  let totalSuccess = 0;
  let totalFailed = 0;
  
  for (const weaponType of weaponTypes) {
    const filePath = `weapons/${weaponType}.json`;
    const weaponsData: WeaponData[] = loadJsonData(filePath);
    
    if (weaponsData.length === 0) continue;
    
    let success = 0;
    let failed = 0;
    
    for (const weapon of weaponsData) {
      try {
        const names = getPreferredName(weapon.names);
        const uniqueGameId = `${weaponType.toLowerCase()}_${weapon.game_id}`;
        
        await prisma.weapon.upsert({
          where: { gameId: uniqueGameId },
          update: {
            nameEn: names.en,
            nameJa: names.ja,
            nameZh: names.zh,
            weaponType: weaponType,
            rarity: weapon.rarity || 1,
            attack: weapon.attack || 0,
            elementType: weapon.element_type,
            elementDamage: weapon.element_damage,
            affinity: weapon.affinity || 0,
          },
          create: {
            gameId: uniqueGameId,
            nameEn: names.en,
            nameJa: names.ja,
            nameZh: names.zh,
            weaponType: weaponType,
            rarity: weapon.rarity || 1,
            attack: weapon.attack || 0,
            elementType: weapon.element_type,
            elementDamage: weapon.element_damage,
            affinity: weapon.affinity || 0,
          }
        });
        
        success++;
      } catch (error) {
        console.error(`❌ 导入武器失败 (${weapon.game_id}):`, error);
        failed++;
      }
    }
    
    console.log(`  ${weaponType}: ${success} 成功, ${failed} 失败`);
    totalSuccess += success;
    totalFailed += failed;
  }
  
  console.log(`✅ 武器导入完成: ${totalSuccess} 成功, ${totalFailed} 失败`);
}

async function importItems() {
  console.log('📦 导入物品数据...');
  
  const itemsData: ItemData[] = loadJsonData('Item.json');
  if (itemsData.length === 0) return;
  
  let success = 0;
  let failed = 0;
  
  for (const item of itemsData) {
    try {
      const names = getPreferredName(item.names || {});
      
      await prisma.item.upsert({
        where: { gameId: item.game_id.toString() },
        update: {
          nameEn: names.en,
          nameJa: names.ja,
          nameZh: names.zh,
          category: item.category || 'Unknown',
          rarity: item.rarity || 1,
          value: item.value || 0,
        },
        create: {
          gameId: item.game_id.toString(),
          nameEn: names.en,
          nameJa: names.ja,
          nameZh: names.zh,
          category: item.category || 'Unknown',
          rarity: item.rarity || 1,
          value: item.value || 0,
        }
      });
      
      success++;
    } catch (error) {
      console.error(`❌ 导入物品失败 (${item.game_id}):`, error);
      failed++;
    }
  }
  
  console.log(`✅ 物品导入完成: ${success} 成功, ${failed} 失败`);
}

async function main() {
  try {
    console.log('🚀 开始导入MHWildsWiki数据 (健壮模式)...');
    
    await importMonsters();
    await importWeapons();
    await importItems();
    
    console.log('🎉 数据导入完成！');
  } catch (error) {
    console.error('❌ 导入过程中发生错误:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
