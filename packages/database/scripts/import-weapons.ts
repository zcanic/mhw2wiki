#!/usr/bin/env tsx
/**
 * 武器数据导入脚本
 */

import { PrismaClient } from '../src/generated/client';
import { readFileSync } from 'fs';
import { join, resolve } from 'path';

const prisma = new PrismaClient();
const DATA_PATH = resolve(__dirname, '../../../output/merged/weapons');

// 武器类型映射
const weaponTypeMap: Record<string, string> = {
  'GreatSword': 'great-sword',
  'LongSword': 'long-sword',
  'SwordShield': 'sword-shield',
  'DualBlades': 'dual-blades',
  'Hammer': 'hammer',
  'HuntingHorn': 'hunting-horn',
  'Lance': 'lance',
  'Gunlance': 'gunlance',
  'SwitchAxe': 'switch-axe',
  'ChargeBlade': 'charge-blade',
  'InsectGlaive': 'insect-glaive',
  'LightBowgun': 'light-bowgun',
  'HeavyBowgun': 'heavy-bowgun',
  'Bow': 'bow',
};

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

// 导入武器数据
async function importWeapons(): Promise<void> {
  console.log('⚔️ 开始导入武器数据...');
  
  let totalImported = 0;
  
  for (const [fileName, weaponType] of Object.entries(weaponTypeMap)) {
    console.log(`\n📂 处理 ${fileName} (${weaponType})...`);
    
    const weapons = loadJsonFile(`${fileName}.json`);
    if (weapons.length === 0) continue;
    
    let imported = 0;
    for (const weapon of weapons) {
      try {
        await prisma.weapon.create({
          data: {
            game_id: BigInt(weapon.game_id),
            names: JSON.stringify(weapon.names),
            descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
            kind: weaponType,
            rarity: weapon.rarity || 0,
            attack_raw: weapon.attack || 0,
            affinity: weapon.critical || 0,
            defense: weapon.defense || 0,
            element_type: weapon.element_type || null,
            element_damage: weapon.element_damage || 0,
            element_hidden: weapon.element_hidden || false,
            slots: weapon.slots ? JSON.stringify(weapon.slots) : null,
            sharpness: weapon.sharpness ? JSON.stringify(weapon.sharpness) : null,
            materials: weapon.crafting_materials ? JSON.stringify(weapon.crafting_materials) : null,
          }
        });
        imported++;
        totalImported++;
      } catch (error) {
        console.warn(`  跳过武器 ${weapon.game_id}:`, (error as any).message);
      }
    }
    
    console.log(`  ✅ ${fileName}: ${imported}/${weapons.length} 条`);
  }
  
  console.log(`\n🎉 武器导入完成! 总计: ${totalImported} 条`);
}

// 主函数
async function main(): Promise<void> {
  try {
    await importWeapons();
    
    // 验证导入结果
    const weaponCount = await prisma.weapon.count();
    console.log(`\n📊 验证结果: 数据库中有 ${weaponCount} 条武器数据`);
    
    // 按类型统计
    const weaponTypes = await prisma.weapon.groupBy({
      by: ['kind'],
      _count: true,
    });
    
    console.log('\n📈 按类型统计:');
    weaponTypes.forEach(type => {
      console.log(`  ${type.kind}: ${type._count} 条`);
    });
    
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
