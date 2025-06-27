import { PrismaClient } from '../src/generated/client';

async function addSampleData() {
  const prisma = new PrismaClient();
  
  console.log('🏗️ Adding sample data for GraphQL testing...');
  
  try {
    // Add sample monsters
    const rathalos = await prisma.largeMonster.create({
      data: {
        gameId: 'LM001',
        nameEn: 'Rathalos',
        nameJa: 'リオレウス',
        nameZh: '火龙',
        monsterType: 'FLYING_WYVERN',
        threatLevel: 'LEVEL_3',
        elements: 'fire',
        weaknesses: 'dragon,thunder,ice',
        iconUrl: '/icons/rathalos.png'
      }
    });
    
    const kushala = await prisma.largeMonster.create({
      data: {
        gameId: 'LM002',
        nameEn: 'Kushala Daora',
        nameJa: 'クシャルダオラ',
        nameZh: '钢龙',
        monsterType: 'ELDER_DRAGON',
        threatLevel: 'LEVEL_5',
        elements: 'dragon',
        weaknesses: 'thunder,fire',
        iconUrl: '/icons/kushala.png'
      }
    });
    
    // Add sample weapons
    const rathalosGS = await prisma.weapon.create({
      data: {
        gameId: 'WP001',
        nameEn: 'Rathalos Greatsword',
        nameJa: 'リオレウス大剣',
        nameZh: '火龙大剑',
        weaponType: 'GREAT_SWORD',
        rarity: 6,
        attack: 350,
        elementType: 'FIRE',
        elementDamage: 120
      }
    });
    
    // Add sample items
    const rathalosScale = await prisma.item.create({
      data: {
        gameId: 'IT001',
        nameEn: 'Rathalos Scale',
        nameJa: 'リオレウスの鱗',
        nameZh: '火龙鳞',
        category: 'MATERIAL',
        rarity: 4,
        value: 280
      }
    });
    
    console.log('✅ Sample data added successfully!');
    console.log(`   - ${rathalos.nameEn} (${rathalos.monsterType})`);
    console.log(`   - ${kushala.nameEn} (${kushala.monsterType})`);
    console.log(`   - ${rathalosGS.nameEn} (${rathalosGS.weaponType})`);
    console.log(`   - ${rathalosScale.nameEn} (${rathalosScale.category})`);
    console.log('\n🚀 Ready to test GraphQL API at http://localhost:3001/graphql');
    
  } catch (error) {
    console.error('❌ Failed to add sample data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

addSampleData();
