#!/usr/bin/env tsx

/**
 * SQLite to PostgreSQL Migration Script
 * 将现有SQLite数据迁移到PostgreSQL
 */

import { PrismaClient as SQLitePrismaClient } from '../src/generated/client';
import { PrismaClient as PostgresPrismaClient } from '../src/generated/client';
import { readFileSync } from 'fs';
import { join } from 'path';

interface MigrationProgress {
  totalRecords: number;
  migratedRecords: number;
  errors: string[];
  startTime: Date;
}

class DatabaseMigrator {
  private sqliteClient: SQLitePrismaClient;
  private postgresClient: PostgresPrismaClient;
  private progress: MigrationProgress;

  constructor() {
    // SQLite客户端 (源数据库)
    this.sqliteClient = new SQLitePrismaClient({
      datasources: {
        db: {
          url: 'file:./prisma/dev.db'
        }
      }
    });

    // PostgreSQL客户端 (目标数据库)
    this.postgresClient = new PostgresPrismaClient({
      datasources: {
        db: {
          url: process.env.DATABASE_URL
        }
      }
    });

    this.progress = {
      totalRecords: 0,
      migratedRecords: 0,
      errors: [],
      startTime: new Date()
    };
  }

  /**
   * 执行完整迁移流程
   */
  async migrate(): Promise<void> {
    console.log('🚀 开始数据库迁移: SQLite → PostgreSQL');
    console.log('⏰ 开始时间:', this.progress.startTime.toISOString());

    try {
      // 1. 验证连接
      await this.validateConnections();

      // 2. 清理目标数据库
      await this.cleanTargetDatabase();

      // 3. 迁移数据
      await this.migrateStages();
      await this.migrateItems();
      await this.migrateSkills();
      await this.migrateLargeMonsters();
      await this.migrateWeapons();
      await this.migrateArmorSets();
      await this.migrateCharms();

      // 4. 验证迁移结果
      await this.validateMigration();

      console.log('✅ 数据库迁移完成!');
      this.printMigrationSummary();

    } catch (error) {
      console.error('❌ 数据库迁移失败:', error);
      throw error;
    } finally {
      await this.cleanup();
    }
  }

  /**
   * 验证数据库连接
   */
  private async validateConnections(): Promise<void> {
    console.log('🔍 验证数据库连接...');
    
    try {
      await this.sqliteClient.$queryRaw`SELECT 1`;
      console.log('✅ SQLite连接正常');
    } catch (error) {
      throw new Error(`SQLite连接失败: ${error}`);
    }

    try {
      await this.postgresClient.$queryRaw`SELECT 1`;
      console.log('✅ PostgreSQL连接正常');
    } catch (error) {
      throw new Error(`PostgreSQL连接失败: ${error}`);
    }
  }

  /**
   * 清理目标数据库
   */
  private async cleanTargetDatabase(): Promise<void> {
    console.log('🧹 清理目标数据库...');
    
    const tables = [
      'charm_skills',
      'charm_levels', 
      'charms',
      'armor_skills',
      'armor_materials',
      'armor_pieces',
      'armor_sets',
      'weapon_skills',
      'weapon_materials',
      'weapons',
      'weapon_series',
      'monster_rewards',
      'monster_body_parts',
      'monster_habitats',
      'large_monsters',
      'item_combinations',
      'items',
      'skills',
      'stages'
    ];

    for (const table of tables) {
      try {
        await this.postgresClient.$executeRawUnsafe(`TRUNCATE TABLE "${table}" RESTART IDENTITY CASCADE`);
        console.log(`  ✅ 清理表: ${table}`);
      } catch (error) {
        console.log(`  ⚠️  表不存在或已为空: ${table}`);
      }
    }
  }

  /**
   * 迁移舞台/地图数据
   */
  private async migrateStages(): Promise<void> {
    console.log('📍 迁移舞台数据...');
    
    try {
      const stages = await this.sqliteClient.stage.findMany();
      
      for (const stage of stages) {
        const names = JSON.parse(stage.names || '{}');
        
        await this.postgresClient.stage.create({
          data: {
            gameId: stage.game_id,
            nameEn: names.en || `Stage ${stage.game_id}`,
            nameJa: names.ja || names.en || `ステージ ${stage.game_id}`,
            nameZh: names.zh,
            areas: stage.areas || 0,
            basecamp: stage.camps,
          }
        });
        
        this.progress.migratedRecords++;
      }
      
      console.log(`  ✅ 迁移完成: ${stages.length} 个舞台`);
    } catch (error) {
      const errorMsg = `舞台数据迁移失败: ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      this.progress.errors.push(errorMsg);
    }
  }

  /**
   * 迁移物品数据
   */
  private async migrateItems(): Promise<void> {
    console.log('📦 迁移物品数据...');
    
    try {
      const items = await this.sqliteClient.item.findMany();
      
      for (const item of items) {
        const names = JSON.parse(item.names || '{}');
        const descriptions = JSON.parse(item.descriptions || '{}');
        
        await this.postgresClient.item.create({
          data: {
            gameId: item.game_id,
            nameEn: names.en || `Item ${item.game_id}`,
            nameJa: names.ja || names.en || `アイテム ${item.game_id}`,
            nameZh: names.zh,
            descriptionEn: descriptions.en,
            descriptionJa: descriptions.ja,
            descriptionZh: descriptions.zh,
            category: 'MATERIAL', // 默认分类，需要根据实际数据调整
            rarity: item.rarity || 1,
            value: item.price || 0,
            carryLimit: item.carry_limit,
          }
        });
        
        this.progress.migratedRecords++;
      }
      
      console.log(`  ✅ 迁移完成: ${items.length} 个物品`);
    } catch (error) {
      const errorMsg = `物品数据迁移失败: ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      this.progress.errors.push(errorMsg);
    }
  }

  /**
   * 迁移技能数据
   */
  private async migrateSkills(): Promise<void> {
    console.log('🎯 迁移技能数据...');
    
    try {
      const skills = await this.sqliteClient.skill.findMany();
      
      for (const skill of skills) {
        const names = JSON.parse(skill.names || '{}');
        const descriptions = JSON.parse(skill.descriptions || '{}');
        
        await this.postgresClient.skill.create({
          data: {
            gameId: skill.game_id,
            nameEn: names.en || `Skill ${skill.game_id}`,
            nameJa: names.ja || names.en || `スキル ${skill.game_id}`,
            nameZh: names.zh,
            descriptionEn: descriptions.en,
            descriptionJa: descriptions.ja,
            descriptionZh: descriptions.zh,
            maxLevel: skill.max_level || 1,
            category: skill.category,
          }
        });
        
        this.progress.migratedRecords++;
      }
      
      console.log(`  ✅ 迁移完成: ${skills.length} 个技能`);
    } catch (error) {
      const errorMsg = `技能数据迁移失败: ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      this.progress.errors.push(errorMsg);
    }
  }

  /**
   * 迁移大型怪物数据
   */
  private async migrateLargeMonsters(): Promise<void> {
    console.log('🐲 迁移大型怪物数据...');
    
    try {
      const monsters = await this.sqliteClient.monster.findMany();
      
      for (const monster of monsters) {
        const names = JSON.parse(monster.names || '{}');
        const descriptions = JSON.parse(monster.descriptions || '{}');
        
        // 从species字符串推断MonsterType枚举
        const getMonsterType = (species: string) => {
          const speciesMap: Record<string, string> = {
            'flying-wyvern': 'FLYING_WYVERN',
            'brute-wyvern': 'BRUTE_WYVERN',
            'fanged-wyvern': 'FANGED_WYVERN',
            'fanged-beast': 'FANGED_BEAST',
            'elder-dragon': 'ELDER_DRAGON',
            'construct': 'CONSTRUCT'
          };
          return speciesMap[species] || 'UNKNOWN';
        };
        
        await this.postgresClient.largeMonster.create({
          data: {
            gameId: monster.game_id,
            nameEn: names.en || `Monster ${monster.game_id}`,
            nameJa: names.ja || names.en || `モンスター ${monster.game_id}`,
            nameZh: names.zh,
            descriptionEn: descriptions.en,
            descriptionJa: descriptions.ja,
            descriptionZh: descriptions.zh,
            monsterType: getMonsterType(monster.species || ''),
            threatLevel: 'THREE', // 默认威胁等级，需要根据实际数据调整
            elements: [],
            weaknesses: [],
            resistances: [],
          }
        });
        
        this.progress.migratedRecords++;
      }
      
      console.log(`  ✅ 迁移完成: ${monsters.length} 个大型怪物`);
    } catch (error) {
      const errorMsg = `大型怪物数据迁移失败: ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      this.progress.errors.push(errorMsg);
    }
  }

  /**
   * 迁移武器数据 (简化版本)
   */
  private async migrateWeapons(): Promise<void> {
    console.log('⚔️  迁移武器数据...');
    
    try {
      // 由于旧schema的武器数据结构复杂，这里只做基础迁移
      // 实际项目中需要根据具体数据结构进行详细处理
      console.log('  ⚠️  武器数据迁移需要手动处理 - 数据结构差异较大');
      console.log('  📝 建议使用专门的武器数据导入脚本');
    } catch (error) {
      const errorMsg = `武器数据迁移失败: ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      this.progress.errors.push(errorMsg);
    }
  }

  /**
   * 迁移防具数据 (简化版本)
   */
  private async migrateArmorSets(): Promise<void> {
    console.log('🛡️  迁移防具数据...');
    
    try {
      console.log('  ⚠️  防具数据迁移需要手动处理 - 数据结构差异较大');
      console.log('  📝 建议使用专门的防具数据导入脚本');
    } catch (error) {
      const errorMsg = `防具数据迁移失败: ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      this.progress.errors.push(errorMsg);
    }
  }

  /**
   * 迁移护石数据 (简化版本)
   */
  private async migrateCharms(): Promise<void> {
    console.log('💎 迁移护石数据...');
    
    try {
      console.log('  ⚠️  护石数据迁移需要手动处理 - 数据结构差异较大');
      console.log('  📝 建议使用专门的护石数据导入脚本');
    } catch (error) {
      const errorMsg = `护石数据迁移失败: ${error}`;
      console.error(`  ❌ ${errorMsg}`);
      this.progress.errors.push(errorMsg);
    }
  }

  /**
   * 验证迁移结果
   */
  private async validateMigration(): Promise<void> {
    console.log('🔍 验证迁移结果...');
    
    const counts = {
      stages: await this.postgresClient.stage.count(),
      items: await this.postgresClient.item.count(),
      skills: await this.postgresClient.skill.count(),
      monsters: await this.postgresClient.largeMonster.count(),
    };
    
    console.log('📊 迁移统计:');
    console.log(`  舞台: ${counts.stages}`);
    console.log(`  物品: ${counts.items}`);
    console.log(`  技能: ${counts.skills}`);
    console.log(`  怪物: ${counts.monsters}`);
  }

  /**
   * 打印迁移摘要
   */
  private printMigrationSummary(): void {
    const endTime = new Date();
    const duration = endTime.getTime() - this.progress.startTime.getTime();
    
    console.log('\n📋 迁移摘要:');
    console.log(`⏱️  用时: ${Math.round(duration / 1000)}秒`);
    console.log(`📈 迁移记录: ${this.progress.migratedRecords}`);
    console.log(`❌ 错误数: ${this.progress.errors.length}`);
    
    if (this.progress.errors.length > 0) {
      console.log('\n❌ 错误详情:');
      this.progress.errors.forEach((error, index) => {
        console.log(`  ${index + 1}. ${error}`);
      });
    }
  }

  /**
   * 清理资源
   */
  private async cleanup(): Promise<void> {
    await this.sqliteClient.$disconnect();
    await this.postgresClient.$disconnect();
  }
}

// 执行迁移
async function main() {
  const migrator = new DatabaseMigrator();
  await migrator.migrate();
}

if (require.main === module) {
  main().catch((error) => {
    console.error('Migration failed:', error);
    process.exit(1);
  });
}

export { DatabaseMigrator };
