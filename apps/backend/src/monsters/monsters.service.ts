import { Injectable, Logger, NotFoundException } from '@nestjs/common';
import { PrismaClient } from '@mhwildswiki/database/src/generated/client';
import { LargeMonster, Monster, MonsterType, ThreatLevel, ElementType } from './models/monster.model';

@Injectable()
export class MonstersService {
  private readonly logger = new Logger(MonstersService.name);
  private prisma = new PrismaClient();

  /**
   * 获取所有大型怪物 (新的领域模型)
   */
  async findAllLargeMonsters(): Promise<LargeMonster[]> {
    try {
      this.logger.log('Fetching all large monsters');
      
      const monsters = await this.prisma.largeMonster.findMany({
        orderBy: { threatLevel: 'asc' }
      });
      
      // 转换为GraphQL模型
      return monsters.map(monster => ({
        id: monster.id.toString(),
        gameId: parseInt(monster.gameId) || 0, // 转换为数字，兼容旧接口
        name: monster.nameEn, // 默认使用英文名
        nameEn: monster.nameEn,
        nameJa: monster.nameJa,
        nameZh: monster.nameZh || undefined,
        monsterType: monster.monsterType as MonsterType,
        threatLevel: monster.threatLevel as ThreatLevel,
        elements: monster.elements ? monster.elements.split(',').filter(Boolean).map(e => e.trim() as ElementType) : [],
        weaknesses: monster.weaknesses ? monster.weaknesses.split(',').filter(Boolean).map(e => e.trim() as ElementType) : [],
        resistances: [], // TODO: 实现抗性
        iconUrl: monster.iconUrl || undefined,
        habitats: [], // TODO: 实现栖息地关系
        bodyParts: [], // TODO: 实现身体部位关系
        rewards: [] // TODO: 实现奖励关系
      }));
      
    } catch (error) {
      this.logger.error('Failed to fetch large monsters', error);
      throw error;
    }
  }

  /**
   * 根据ID获取单个大型怪物
   */
  async findLargeMonsterById(id: number): Promise<LargeMonster | null> {
    try {
      this.logger.log(`Fetching large monster with id: ${id}`);
      
      const monster = await this.prisma.largeMonster.findUnique({
        where: { id }
      });
      
      if (!monster) {
        return null;
      }
      
      // 转换为GraphQL模型
      return {
        id: monster.id.toString(),
        gameId: parseInt(monster.gameId) || 0, // 转换为数字，兼容旧接口
        nameEn: monster.nameEn,
        nameJa: monster.nameJa,
        nameZh: monster.nameZh || undefined,
        name: monster.nameEn, // 默认使用英文名
        monsterType: monster.monsterType as MonsterType,
        threatLevel: monster.threatLevel as ThreatLevel,
        elements: monster.elements ? monster.elements.split(',').filter(Boolean).map(e => e.trim() as ElementType) : [],
        weaknesses: monster.weaknesses ? monster.weaknesses.split(',').filter(Boolean).map(e => e.trim() as ElementType) : [],
        resistances: [], // TODO: 实现抗性
        iconUrl: monster.iconUrl || undefined,
        habitats: [], // TODO: 实现栖息地关系
        bodyParts: [], // TODO: 实现身体部位关系
        rewards: [] // TODO: 实现奖励关系
      };
      
    } catch (error) {
      this.logger.error(`Failed to fetch large monster with id ${id}`, error);
      throw error;
    }
  }

  // === 现有的Legacy API (保持兼容) ===

  async findAll(): Promise<Monster[]> {
    const monsters = await this.prisma.monster.findMany({
      orderBy: { game_id: 'asc' },
    });
    
    return monsters.map(monster => this.transformToMonster(monster));
  }

  async findOne(id: string): Promise<Monster | null> {
    const monster = await this.prisma.monster.findUnique({
      where: { id: parseInt(id) },
    });
    
    if (!monster) return null;
    return this.transformToMonster(monster);
  }

  async findBySpecies(species: string): Promise<Monster[]> {
    // Note: Legacy function - species field doesn't exist in current schema
    // Return all monsters for now
    return this.findAll();
  }

  async findByThreatLevel(level: number): Promise<Monster[]> {
    // For now, return all monsters since we don't have threat level in the database yet
    return this.findAll();
  }

  async findByLocation(location: string): Promise<Monster[]> {
    // For now, return all monsters since we don't have location data yet
    return this.findAll();
  }

  private transformToMonster(dbMonster: any): Monster {
    const names = JSON.parse(dbMonster.names);
    const name = names.en || names.ja || 'Unknown';
    const species = dbMonster.species || 'Unknown';
    
    // 根据物种推断威胁等级
    const threatLevelMap: { [key: string]: number } = {
      'construct': 8,
      'flying-wyvern': 6,
      'brute-wyvern': 5,
      'fanged-beast': 4,
      'temnoceran': 5,
      'demi-elder': 7,
      'elder-dragon': 9
    };

    // 根据物种推断栖息地
    const habitatMap: { [key: string]: string } = {
      'construct': 'Ruins',
      'flying-wyvern': 'Sky/Mountains',
      'brute-wyvern': 'Desert/Wasteland',
      'fanged-beast': 'Forest',
      'temnoceran': 'Cave/Underground',
      'demi-elder': 'Forbidden Lands',
      'elder-dragon': 'Elder Recess'
    };

    return {
      id: dbMonster.id.toString(),
      name,
      description: `${name} - ${species}`,
      species,
      elements: species === 'construct' ? ['Non-Elemental'] : ['Unknown'],
      weaknesses: species === 'construct' ? ['Thunder', 'Dragon'] : ['Fire'],
      threatLevel: threatLevelMap[species] || 3,
      habitat: habitatMap[species] || 'Unknown',
      locations: [habitatMap[species] || 'Unknown'],
      rewards: [],
      imageUrl: '/images/monsters/placeholder.jpg',
      iconUrl: '/images/icons/placeholder.png'
    };
  }
}
