import { Injectable } from '@nestjs/common';
import { Monster } from './models/monster.model';
import { DatabaseService } from '../common/database.service';

@Injectable()
export class MonstersEnhancedService {
  constructor(private readonly databaseService: DatabaseService) {}

  private mockMonsters: Monster[] = [
    {
      id: '1',
      name: 'Great Jagras',
      species: 'Fanged Wyvern',
      threatLevel: 1,
      description: 'A glutton that devours anything and everything.',
      elements: [],
      weaknesses: ['Fire', 'Thunder'],
      locations: ['Ancient Forest'],
      habitat: 'Forest',
      iconUrl: '/monsters/great-jagras-icon.png',
      imageUrl: '/monsters/great-jagras.png',
      rewards: [
        {
          itemName: 'Great Jagras Hide',
          method: 'Carve',
          dropRate: 50,
          rank: 'Low'
        },
        {
          itemName: 'Great Jagras Scale',
          method: 'Carve',
          dropRate: 30,
          rank: 'Low'
        }
      ]
    },
    {
      id: '2', 
      name: 'Anjanath',
      species: 'Brute Wyvern',
      threatLevel: 3,
      description: 'A fierce predator with powerful fire attacks.',
      elements: ['Fire'],
      weaknesses: ['Water', 'Ice'],
      locations: ['Ancient Forest', 'Wildspire Waste'],
      habitat: 'Forest',
      iconUrl: '/monsters/anjanath-icon.png',
      imageUrl: '/monsters/anjanath.png',
      rewards: [
        {
          itemName: 'Anjanath Scale',
          method: 'Carve',
          dropRate: 40,
          rank: 'Low'
        },
        {
          itemName: 'Anjanath Fang',
          method: 'Break Head',
          dropRate: 25,
          rank: 'Low'
        },
        {
          itemName: 'Flame Sac',
          method: 'Carve',
          dropRate: 15,
          rank: 'Low'
        }
      ]
    },
    {
      id: '3',
      name: 'Rathalos',
      species: 'Flying Wyvern',
      threatLevel: 5,
      description: 'The king of the skies, master of aerial combat.',
      elements: ['Fire'],
      weaknesses: ['Dragon', 'Thunder'],
      locations: ['Ancient Forest', 'Coral Highlands'],
      habitat: 'Sky',
      iconUrl: '/monsters/rathalos-icon.png',
      imageUrl: '/monsters/rathalos.png',
      rewards: [
        {
          itemName: 'Rathalos Scale',
          method: 'Carve',
          dropRate: 35,
          rank: 'High'
        },
        {
          itemName: 'Rathalos Shell',
          method: 'Carve',
          dropRate: 30,
          rank: 'High'
        },
        {
          itemName: 'Rathalos Wing',
          method: 'Break Wings',
          dropRate: 20,
          rank: 'High'
        },
        {
          itemName: 'Rathalos Ruby',
          method: 'Carve',
          dropRate: 3,
          rank: 'High'
        }
      ]
    },
    {
      id: '4',
      name: 'Kulu-Ya-Ku',
      species: 'Bird Wyvern',
      threatLevel: 2,
      description: 'A curious bird wyvern that collects rocks.',
      elements: [],
      weaknesses: ['Water', 'Thunder'],
      locations: ['Ancient Forest', 'Wildspire Waste'],
      habitat: 'Desert',
      iconUrl: '/monsters/kulu-ya-ku-icon.png',
      imageUrl: '/monsters/kulu-ya-ku.png',
      rewards: [
        {
          itemName: 'Kulu-Ya-Ku Hide',
          method: 'Carve',
          dropRate: 45,
          rank: 'Low'
        },
        {
          itemName: 'Kulu-Ya-Ku Beak',
          method: 'Break Head',
          dropRate: 30,
          rank: 'Low'
        }
      ]
    }
  ];

  async findAll(): Promise<Monster[]> {
    // 暂时返回Mock数据，后续会切换到Prisma
    return this.mockMonsters;
  }

  async findOne(id: string): Promise<Monster | null> {
    return this.mockMonsters.find(monster => monster.id === id) || null;
  }

  async findBySpecies(species: string): Promise<Monster[]> {
    return this.mockMonsters.filter(monster => 
      monster.species.toLowerCase().includes(species.toLowerCase())
    );
  }

  async findByThreatLevel(level: number): Promise<Monster[]> {
    return this.mockMonsters.filter(monster => monster.threatLevel === level);
  }

  async findByLocation(location: string): Promise<Monster[]> {
    return this.mockMonsters.filter(monster =>
      monster.locations.some(loc => 
        loc.toLowerCase().includes(location.toLowerCase())
      )
    );
  }

  // 新增：获取怪物的详细奖励信息（包含物品关联）
  async findOneWithRewards(id: string): Promise<Monster | null> {
    const monster = await this.findOne(id);
    if (!monster) return null;

    // TODO: 后续会从数据库查询真实的奖励关联
    // 现在返回丰富的Mock数据
    return {
      ...monster,
      rewards: monster.rewards || []
    };
  }

  // 新增：根据掉落物品查找怪物
  async findByDroppedItem(itemName: string): Promise<Monster[]> {
    return this.mockMonsters.filter(monster =>
      monster.rewards?.some(reward => 
        reward.itemName.toLowerCase().includes(itemName.toLowerCase())
      )
    );
  }

  // 新增：获取怪物的栖息地信息
  async findHabitatsForMonster(monsterId: string): Promise<string[]> {
    const monster = await this.findOne(monsterId);
    return monster?.locations || [];
  }
}
