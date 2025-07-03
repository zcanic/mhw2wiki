import { Injectable, OnModuleInit } from '@nestjs/common';
import { PrismaClient } from '@mhwildswiki/database';
import { Monster } from './models/monster.model';

@Injectable()
export class MonstersService implements OnModuleInit {
  private prisma: PrismaClient;

  constructor() {
    this.prisma = new PrismaClient();
  }

  async onModuleInit() {
    await this.prisma.$connect();
  }

  async onModuleDestroy() {
    await this.prisma.$disconnect();
  }

  // 将数据库monster数据转换为GraphQL Monster模型
  private transformMonster(dbMonster: any): Monster {
    const names = JSON.parse(dbMonster.names);
    const descriptions = dbMonster.descriptions ? JSON.parse(dbMonster.descriptions) : {};
    const features = dbMonster.features ? JSON.parse(dbMonster.features) : {};
    
    return {
      id: dbMonster.game_id.toString(),
      name: names.en || names.ja || 'Unknown Monster',
      species: dbMonster.species || 'Unknown',
      threatLevel: this.calculateThreatLevel(dbMonster.species),
      description: descriptions.en || descriptions.ja || features.en || features.ja || 'No description available',
      elements: this.extractElements(dbMonster.species),
      weaknesses: this.getWeaknesses(dbMonster.species),
      locations: ['Unknown Location'], // TODO: 从stages数据中获取
      habitat: this.getHabitat(dbMonster.species),
      iconUrl: `/monsters/${this.generateIconName(names.en || names.ja)}-icon.png`,
      imageUrl: `/monsters/${this.generateIconName(names.en || names.ja)}.png`,
      rewards: [] // TODO: 从items数据中获取奖励信息
    };
  }

  // 根据种族计算威胁等级
  private calculateThreatLevel(species: string): number {
    const threatMap: Record<string, number> = {
      'elder-dragon': 5,
      'fanged-wyvern': 2,
      'brute-wyvern': 3,
      'flying-wyvern': 3,
      'bird-wyvern': 1,
      'fish': 1,
      'construct': 5, // 护龙等特殊存在
    };
    
    return threatMap[species] || 2;
  }

  // 根据种族推断元素
  private extractElements(species: string): string[] {
    const elementMap: Record<string, string[]> = {
      'elder-dragon': ['Dragon'],
      'construct': ['Dragon', 'Lightning'],
    };
    
    return elementMap[species] || [];
  }

  // 根据种族获取弱点
  private getWeaknesses(species: string): string[] {
    const weaknessMap: Record<string, string[]> = {
      'elder-dragon': ['Dragon'],
      'construct': ['Ice', 'Water'],
      'fanged-wyvern': ['Fire', 'Thunder'],
      'brute-wyvern': ['Water', 'Ice'],
    };
    
    return weaknessMap[species] || ['Physical'];
  }

  // 根据种族获取栖息地
  private getHabitat(species: string): string {
    const habitatMap: Record<string, string> = {
      'elder-dragon': 'Elder\'s Recess',
      'construct': 'Wyveria',
      'fanged-wyvern': 'Forest',
      'brute-wyvern': 'Desert',
    };
    
    return habitatMap[species] || 'Unknown';
  }

  // 生成图标文件名
  private generateIconName(name: string): string {
    return name.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '');
  }

  async findAll(): Promise<Monster[]> {
    try {
      const dbMonsters = await this.prisma.monster.findMany({
        orderBy: { names: 'asc' }
      });
      
      return dbMonsters.map(monster => this.transformMonster(monster));
    } catch (error) {
      console.error('获取怪物数据失败:', error);
      return this.getFallbackMonsters();
    }
  }

  async findOne(id: string): Promise<Monster | null> {
    try {
      const dbMonster = await this.prisma.monster.findFirst({
        where: { game_id: BigInt(id) }
      });
      
      if (!dbMonster) {
        return null;
      }
      
      return this.transformMonster(dbMonster);
    } catch (error) {
      console.error(`获取怪物 ${id} 失败:`, error);
      return null;
    }
  }

  async findBySpecies(species: string): Promise<Monster[]> {
    try {
      const dbMonsters = await this.prisma.monster.findMany({
        where: { species },
        orderBy: { names: 'asc' }
      });
      
      return dbMonsters.map(monster => this.transformMonster(monster));
    } catch (error) {
      console.error(`获取种族 ${species} 的怪物失败:`, error);
      return [];
    }
  }

  // 降级方案：如果数据库查询失败，返回少量mock数据
  private getFallbackMonsters(): Monster[] {
    return [
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
        }
      ]
    }
  ];

  async findAll(): Promise<Monster[]> {
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
}
