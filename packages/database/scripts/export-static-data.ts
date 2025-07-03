import { PrismaClient } from '../src/generated/client';
import { writeFile, mkdir } from 'fs/promises';
import { join } from 'path';

const prisma = new PrismaClient();

interface StaticData {
  monsters: any[];
  weapons: any[];
  items: any[];
  stats: {
    totalMonsters: number;
    totalWeapons: number;
    totalItems: number;
    lastUpdated: string;
  };
}

async function exportStaticData() {
  console.log('🚀 开始导出静态数据...');

  try {
    // 获取所有数据
    const [monsters, weapons, items] = await Promise.all([
      prisma.monster.findMany({
        select: {
          id: true,
          game_id: true,
          names: true,
          descriptions: true,
          species: true,
          features: true,
          parts: true,
          rewards: true,
        },
      }),
      prisma.weapon.findMany({
        select: {
          id: true,
          game_id: true,
          kind: true,
          names: true,
          descriptions: true,
          rarity: true,
          attack_raw: true,
          affinity: true,
          defense: true,
          element_type: true,
          element_damage: true,
          materials: true,
          crafting_cost: true,
        },
      }),
      prisma.item.findMany({
        select: {
          id: true,
          game_id: true,
          names: true,
          descriptions: true,
          kind: true,
          rarity: true,
          sell_price: true,
          buy_price: true,
          max_count: true,
        },
      }),
    ]);

    // 处理BigInt序列化问题
    const serializeData = (data: any) => JSON.parse(JSON.stringify(data, (key, value) =>
      typeof value === 'bigint' ? value.toString() : value
    ));

    // 构建静态数据对象
    const staticData: StaticData = {
      monsters: serializeData(monsters),
      weapons: serializeData(weapons),
      items: serializeData(items),
      stats: {
        totalMonsters: monsters.length,
        totalWeapons: weapons.length,
        totalItems: items.length,
        lastUpdated: new Date().toISOString(),
      },
    };

    // 创建输出目录
    const outputDir = join(__dirname, '../../../apps/frontend/src/data');
    await mkdir(outputDir, { recursive: true });

    // 导出完整数据
    await writeFile(
      join(outputDir, 'static-data.json'),
      JSON.stringify(staticData, null, 2)
    );

    // 导出分类数据（便于按需加载）
    await writeFile(
      join(outputDir, 'monsters.json'),
      JSON.stringify(serializeData(monsters), null, 2)
    );

    await writeFile(
      join(outputDir, 'weapons.json'),
      JSON.stringify(serializeData(weapons), null, 2)
    );

    await writeFile(
      join(outputDir, 'items.json'),
      JSON.stringify(serializeData(items), null, 2)
    );

    // 创建搜索索引
    const searchIndex = [
      ...monsters.map(m => ({ ...serializeData(m), type: 'monster' })),
      ...weapons.map(w => ({ ...serializeData(w), type: 'weapon' })),
      ...items.map(i => ({ ...serializeData(i), type: 'item' })),
    ];

    await writeFile(
      join(outputDir, 'search-index.json'),
      JSON.stringify(searchIndex, null, 2)
    );

    console.log('✅ 静态数据导出完成！');
    console.log(`📊 统计信息:`);
    console.log(`   - 怪物: ${monsters.length} 条`);
    console.log(`   - 武器: ${weapons.length} 条`);
    console.log(`   - 物品: ${items.length} 条`);
    console.log(`   - 搜索索引: ${searchIndex.length} 条`);
    console.log(`📁 导出位置: ${outputDir}`);

  } catch (error) {
    console.error('❌ 导出失败:', error);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
}

exportStaticData();
