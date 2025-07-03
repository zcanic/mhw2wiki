#!/usr/bin/env tsx
/**
 * MHWildsWiki 企业级数据导入框架 v6.0
 * 
 * 🎯 设计原则：
 * - 单一脚本，多种策略
 * - 环境自适应
 * - 完整的审计和监控
 * - 企业级错误处理
 * - 数据完整性保证
 * - 可扩展的插件架构
 */

import { PrismaClient, Prisma } from '../src/generated/client';
import { readFileSync, existsSync, writeFileSync } from 'fs';
import { join, resolve } from 'path';
import { performance } from 'perf_hooks';
import { createHash } from 'crypto';

// ==================== 类型定义 ====================

interface ImportConfig {
  // 执行策略
  strategy: 'safe' | 'fast' | 'hybrid' | 'recovery';
  
  // 环境配置
  environment: 'development' | 'staging' | 'production';
  
  // 性能调优
  batchSize: number;
  maxConcurrency: number;
  retryAttempts: number;
  
  // 数据验证
  validateData: boolean;
  strictMode: boolean;
  
  // 审计和监控
  enableAudit: boolean;
  logLevel: 'error' | 'warn' | 'info' | 'debug';
  
  // 恢复选项
  enableBackup: boolean;
  enableRollback: boolean;
}

interface ImportResult {
  tableName: string;
  total: number;
  success: number;
  failed: number;
  created: number;
  updated: number;
  skipped: number;
  duration: number;
  strategy: string;
  errors: ImportError[];
}

interface ImportError {
  type: 'validation' | 'constraint' | 'network' | 'unknown';
  message: string;
  data?: any;
  stack?: string;
  timestamp: Date;
}

interface AuditLog {
  sessionId: string;
  timestamp: Date;
  config: ImportConfig;
  results: ImportResult[];
  totalDuration: number;
  success: boolean;
  errorSummary?: string;
}

// ==================== 配置管理 ====================

class ConfigManager {
  private static configs: Record<string, Partial<ImportConfig>> = {
    development: {
      strategy: 'hybrid',
      environment: 'development',
      batchSize: 100,
      maxConcurrency: 2,
      retryAttempts: 2,
      validateData: true,
      strictMode: false,
      enableAudit: true,
      logLevel: 'debug',
      enableBackup: false,
      enableRollback: false,
    },
    
    staging: {
      strategy: 'safe',
      environment: 'staging',
      batchSize: 500,
      maxConcurrency: 4,
      retryAttempts: 3,
      validateData: true,
      strictMode: true,
      enableAudit: true,
      logLevel: 'info',
      enableBackup: true,
      enableRollback: true,
    },
    
    production: {
      strategy: 'safe',
      environment: 'production',
      batchSize: 1000,
      maxConcurrency: 8,
      retryAttempts: 5,
      validateData: true,
      strictMode: true,
      enableAudit: true,
      logLevel: 'warn',
      enableBackup: true,
      enableRollback: true,
    },
  };

  static getConfig(env?: string): ImportConfig {
    const environment = env || process.env.NODE_ENV || 'development';
    const baseConfig = this.configs[environment] || this.configs.development;
    
    // 命令行参数覆盖
    const cliOverrides = this.parseCliArgs();
    
    return { ...baseConfig, ...cliOverrides } as ImportConfig;
  }

  private static parseCliArgs(): Partial<ImportConfig> {
    const args = process.argv.slice(2);
    const overrides: Partial<ImportConfig> = {};

    for (let i = 0; i < args.length; i++) {
      const arg = args[i];
      const nextArg = args[i + 1];

      switch (arg) {
        case '--strategy':
          if (nextArg && ['safe', 'fast', 'hybrid', 'recovery'].includes(nextArg)) {
            overrides.strategy = nextArg as any;
            i++;
          }
          break;
        case '--batch-size':
          if (nextArg && !isNaN(Number(nextArg))) {
            overrides.batchSize = Number(nextArg);
            i++;
          }
          break;
        case '--fast':
          overrides.strategy = 'fast';
          overrides.validateData = false;
          break;
        case '--safe':
          overrides.strategy = 'safe';
          overrides.strictMode = true;
          break;
        case '--no-validation':
          overrides.validateData = false;
          break;
        case '--strict':
          overrides.strictMode = true;
          break;
        case '--debug':
          overrides.logLevel = 'debug';
          break;
        case '--quiet':
          overrides.logLevel = 'error';
          break;
      }
    }

    return overrides;
  }
}

// ==================== 日志和审计系统 ====================

class Logger {
  private startTime = performance.now();
  private config: ImportConfig;
  private logs: Array<{ level: string; message: string; timestamp: Date; data?: any }> = [];

  constructor(config: ImportConfig) {
    this.config = config;
  }

  private shouldLog(level: string): boolean {
    const levels = ['error', 'warn', 'info', 'debug'];
    const currentLevel = levels.indexOf(this.config.logLevel);
    const messageLevel = levels.indexOf(level);
    return messageLevel <= currentLevel;
  }

  private log(level: string, message: string, ...args: any[]) {
    if (!this.shouldLog(level)) return;

    const elapsed = ((performance.now() - this.startTime) / 1000).toFixed(2);
    const emoji = { error: '❌', warn: '⚠️', info: 'ℹ️', debug: '🔍' }[level] || 'ℹ️';
    
    const logEntry = {
      level,
      message,
      timestamp: new Date(),
      data: args.length > 0 ? args : undefined
    };
    
    this.logs.push(logEntry);
    
    const logMessage = `[${elapsed}s] ${emoji} ${message}`;
    
    switch (level) {
      case 'error':
        console.error(logMessage, ...args);
        break;
      case 'warn':
        console.warn(logMessage, ...args);
        break;
      case 'debug':
        console.debug(logMessage, ...args);
        break;
      default:
        console.log(logMessage, ...args);
    }
  }

  error(message: string, ...args: any[]) { this.log('error', message, ...args); }
  warn(message: string, ...args: any[]) { this.log('warn', message, ...args); }
  info(message: string, ...args: any[]) { this.log('info', message, ...args); }
  debug(message: string, ...args: any[]) { this.log('debug', message, ...args); }
  success(message: string, ...args: any[]) { this.log('info', `✅ ${message}`, ...args); }

  getLogs() { return this.logs; }
}

class AuditManager {
  private static auditDir = resolve(__dirname, '../../../logs/import');

  static async writeAuditLog(audit: AuditLog): Promise<void> {
    if (!existsSync(this.auditDir)) {
      const { mkdirSync } = await import('fs');
      mkdirSync(this.auditDir, { recursive: true });
    }

    const filename = `import-${audit.sessionId}-${audit.timestamp.toISOString().split('T')[0]}.json`;
    const filepath = join(this.auditDir, filename);
    
    writeFileSync(filepath, JSON.stringify(audit, null, 2));
  }

  static generateSessionId(): string {
    return createHash('md5')
      .update(`${Date.now()}-${Math.random()}`)
      .digest('hex')
      .substring(0, 8);
  }
}

// ==================== 数据验证和转换 ====================

class DataValidator {
  static validateRequiredBigInt(value: any, fieldName: string): bigint {
    if (value === null || value === undefined || value === '') {
      throw new ImportError('validation', `字段 ${fieldName} 是必需的 BigInt，但收到: ${value}`);
    }
    try {
      return BigInt(value);
    } catch (error) {
      throw new ImportError('validation', `字段 ${fieldName} 无法转换为 BigInt: ${value}`);
    }
  }

  static safeBigInt(value: any): bigint | null {
    if (value === null || value === undefined || value === '') {
      return null;
    }
    try {
      return BigInt(value);
    } catch (error) {
      return null;
    }
  }

  static stringToGameId(str: string): bigint {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      const char = str.charCodeAt(i);
      hash = ((hash << 5) - hash) + char;
      hash = hash & hash;
    }
    return BigInt(Math.abs(hash));
  }

  static validateDataStructure<T>(
    data: T[],
    requiredFields: string[],
    tableName: string,
    logger: Logger
  ): { valid: T[]; invalid: T[] } {
    const valid: T[] = [];
    const invalid: T[] = [];

    data.forEach((item: any, index) => {
      let isValid = true;
      
      for (const field of requiredFields) {
        if (!(field in item) || item[field] === null || item[field] === undefined) {
          logger.warn(`${tableName}: 记录 ${index} 缺少必需字段 ${field}`);
          isValid = false;
          break;
        }
      }

      if (isValid) {
        valid.push(item);
      } else {
        invalid.push(item);
      }
    });

    if (invalid.length > 0) {
      logger.warn(`${tableName}: 发现 ${invalid.length} 条无效记录`);
    }

    return { valid, invalid };
  }
}

class ImportError extends Error {
  constructor(
    public type: ImportError['type'],
    message: string,
    public data?: any
  ) {
    super(message);
    this.name = 'ImportError';
  }
}

// ==================== 导入策略系统 ====================

abstract class ImportStrategy {
  constructor(
    protected config: ImportConfig,
    protected logger: Logger,
    protected prisma: PrismaClient
  ) {}

  abstract execute<T>(
    tableName: string,
    data: T[],
    transformer: (item: T) => any,
    uniqueField: string
  ): Promise<ImportResult>;

  protected createResult(
    tableName: string,
    total: number,
    startTime: number
  ): Omit<ImportResult, 'success' | 'failed' | 'created' | 'updated' | 'skipped' | 'errors'> {
    return {
      tableName,
      total,
      duration: Number(((performance.now() - startTime) / 1000).toFixed(2)),
      strategy: this.config.strategy,
    };
  }

  protected async executeUpsert(tableName: string, data: any, uniqueField: string): Promise<any> {
    const whereClause = { [uniqueField]: data[uniqueField] };
    
    switch (tableName) {
      case 'item':
        return await this.prisma.item.upsert({
          where: whereClause,
          update: data,
          create: data,
        });
      case 'skill':
        return await this.prisma.skill.upsert({
          where: whereClause,
          update: data,
          create: data,
        });
      case 'monster':
        return await this.prisma.monster.upsert({
          where: whereClause,
          update: data,
          create: data,
        });
      case 'weapon':
        return await this.prisma.weapon.upsert({
          where: whereClause,
          update: data,
          create: data,
        });
      case 'armorSet':
        return await this.prisma.armorSet.upsert({
          where: whereClause,
          update: data,
          create: data,
        });
      case 'species':
        return await this.prisma.species.upsert({
          where: whereClause,
          update: data,
          create: data,
        });
      case 'stage':
        return await this.prisma.stage.upsert({
          where: whereClause,
          update: data,
          create: data,
        });
      default:
        throw new Error(`不支持的表名: ${tableName}`);
    }
  }

  protected async executeCreateMany(tableName: string, data: any[]): Promise<any> {
    switch (tableName) {
      case 'item':
        return await this.prisma.item.createMany({ data });
      case 'skill':
        return await this.prisma.skill.createMany({ data });
      case 'monster':
        return await this.prisma.monster.createMany({ data });
      case 'weapon':
        return await this.prisma.weapon.createMany({ data });
      case 'armorSet':
        return await this.prisma.armorSet.createMany({ data });
      case 'species':
        return await this.prisma.species.createMany({ data });
      case 'stage':
        return await this.prisma.stage.createMany({ data });
      default:
        throw new Error(`不支持的表名: ${tableName}`);
    }
  }
}

class SafeStrategy extends ImportStrategy {
  async execute<T>(
    tableName: string,
    data: T[],
    transformer: (item: T) => any,
    uniqueField: string
  ): Promise<ImportResult> {
    const startTime = performance.now();
    const result = {
      ...this.createResult(tableName, data.length, startTime),
      success: 0,
      failed: 0,
      created: 0,
      updated: 0,
      skipped: 0,
      errors: [] as ImportError[]
    };

    this.logger.info(`${tableName}: 开始安全模式导入 (${data.length} 条记录)`);

    for (const [index, item] of data.entries()) {
      try {
        const transformedData = transformer(item);
        const whereClause = { [uniqueField]: transformedData[uniqueField] };

        await this.prisma[tableName.toLowerCase() as keyof PrismaClient].upsert({
          where: whereClause,
          update: transformedData,
          create: transformedData,
        } as any);

        result.success++;
        result.updated++; // 假设大部分是更新操作

        if ((index + 1) % 100 === 0) {
          this.logger.debug(`${tableName}: 已处理 ${index + 1}/${data.length} 条记录`);
        }
      } catch (error) {
        result.failed++;
        const importError = new ImportError(
          error instanceof Prisma.PrismaClientKnownRequestError ? 'constraint' : 'unknown',
          error instanceof Error ? error.message : String(error),
          item
        );
        result.errors.push(importError);
        
        if (this.config.strictMode) {
          this.logger.error(`${tableName}: 严格模式下遇到错误，停止导入`, error);
          throw error;
        }
      }
    }

    this.logger.success(
      `${tableName}: 安全模式完成 - 成功:${result.success}, 失败:${result.failed}, 耗时:${result.duration}s`
    );

    return result;
  }
}

class FastStrategy extends ImportStrategy {
  async execute<T>(
    tableName: string,
    data: T[],
    transformer: (item: T) => any,
    uniqueField: string
  ): Promise<ImportResult> {
    const startTime = performance.now();
    const result = {
      ...this.createResult(tableName, data.length, startTime),
      success: 0,
      failed: 0,
      created: 0,
      updated: 0,
      skipped: 0,
      errors: [] as ImportError[]
    };

    this.logger.info(`${tableName}: 开始快速模式导入 (${data.length} 条记录)`);

    try {
      const transformedData = data.map(transformer);
      
      const createResult = await this.prisma[tableName.toLowerCase() as keyof PrismaClient].createMany({
        data: transformedData,
      } as any);

      result.success = transformedData.length;
      result.created = transformedData.length;

      this.logger.success(
        `${tableName}: 快速模式完成 - 创建:${result.created}, 耗时:${result.duration}s`
      );
    } catch (error) {
      result.failed = data.length;
      const importError = new ImportError(
        error instanceof Prisma.PrismaClientKnownRequestError ? 'constraint' : 'unknown',
        error instanceof Error ? error.message : String(error)
      );
      result.errors.push(importError);
      
      this.logger.error(`${tableName}: 快速模式失败`, error);
      
      if (this.config.strictMode) {
        throw error;
      }
    }

    return result;
  }
}

class HybridStrategy extends ImportStrategy {
  private safeStrategy: SafeStrategy;
  private fastStrategy: FastStrategy;

  constructor(config: ImportConfig, logger: Logger, prisma: PrismaClient) {
    super(config, logger, prisma);
    this.safeStrategy = new SafeStrategy(config, logger, prisma);
    this.fastStrategy = new FastStrategy(config, logger, prisma);
  }

  async execute<T>(
    tableName: string,
    data: T[],
    transformer: (item: T) => any,
    uniqueField: string
  ): Promise<ImportResult> {
    this.logger.info(`${tableName}: 开始混合模式导入 (${data.length} 条记录)`);

    // 首先尝试快速策略
    try {
      const fastResult = await this.fastStrategy.execute(tableName, data, transformer, uniqueField);
      if (fastResult.failed === 0) {
        this.logger.success(`${tableName}: 快速模式成功完成`);
        return fastResult;
      }
    } catch (error) {
      this.logger.warn(`${tableName}: 快速模式失败，回退到安全模式`, error);
    }

    // 回退到安全策略
    return await this.safeStrategy.execute(tableName, data, transformer, uniqueField);
  }
}

// ==================== 策略工厂 ====================

class StrategyFactory {
  static create(config: ImportConfig, logger: Logger, prisma: PrismaClient): ImportStrategy {
    switch (config.strategy) {
      case 'safe':
        return new SafeStrategy(config, logger, prisma);
      case 'fast':
        return new FastStrategy(config, logger, prisma);
      case 'hybrid':
        return new HybridStrategy(config, logger, prisma);
      default:
        logger.warn(`未知策略 ${config.strategy}，使用默认混合策略`);
        return new HybridStrategy(config, logger, prisma);
    }
  }
}

// ==================== 主导入引擎 ====================

class ImportEngine {
  private config: ImportConfig;
  private logger: Logger;
  private prisma: PrismaClient;
  private strategy: ImportStrategy;
  private sessionId: string;
  private dataPath: string;

  constructor() {
    this.config = ConfigManager.getConfig();
    this.logger = new Logger(this.config);
    this.prisma = new PrismaClient({
      log: this.config.logLevel === 'debug' ? ['query', 'info', 'warn', 'error'] : ['warn', 'error'],
    });
    this.strategy = StrategyFactory.create(this.config, this.logger, this.prisma);
    this.sessionId = AuditManager.generateSessionId();
    this.dataPath = resolve(__dirname, '../../../output/merged');
  }

  async execute(): Promise<void> {
    const startTime = performance.now();
    const results: ImportResult[] = [];
    let success = true;

    try {
      this.logger.info(`🚀 开始 MHWildsWiki 企业级数据导入 v6.0`);
      this.logger.info(`📋 会话ID: ${this.sessionId}`);
      this.logger.info(`📋 配置: ${JSON.stringify(this.config, null, 2)}`);

      // 1. 数据库预检查
      await this.performPreCheck();

      // 2. 可选清理
      if (this.shouldClearDatabase()) {
        await this.clearDatabase();
      }

      // 3. 核心数据导入
      this.logger.info('📦 开始核心数据导入...');
      
      const coreImports = [
        { name: 'item', file: 'Item.json', transformer: this.transformItem.bind(this), uniqueField: 'game_id' },
        { name: 'skill', file: 'Skill.json', transformer: this.transformSkill.bind(this), uniqueField: 'game_id' },
        { name: 'monster', file: 'LargeMonsters.json', transformer: this.transformMonster.bind(this), uniqueField: 'game_id' },
      ];

      for (const importDef of coreImports) {
        const data = this.loadJsonFile(importDef.file);
        if (data.length > 0) {
          const result = await this.strategy.execute(
            importDef.name,
            data,
            importDef.transformer,
            importDef.uniqueField
          );
          results.push(result);
        }
      }

      // 4. 武器数据导入
      await this.importWeapons(results);

      // 5. 可选数据导入
      await this.importOptionalData(results);

    } catch (error) {
      success = false;
      this.logger.error('💥 数据导入失败:', error);
      throw error;
    } finally {
      // 6. 审计日志
      if (this.config.enableAudit) {
        const audit: AuditLog = {
          sessionId: this.sessionId,
          timestamp: new Date(),
          config: this.config,
          results,
          totalDuration: Number(((performance.now() - startTime) / 1000).toFixed(2)),
          success,
          errorSummary: success ? undefined : '导入过程中发生错误'
        };
        
        await AuditManager.writeAuditLog(audit);
        this.logger.info(`📋 审计日志已保存: ${this.sessionId}`);
      }

      await this.prisma.$disconnect();
      
      // 7. 总结报告
      this.generateSummaryReport(results, performance.now() - startTime);
    }
  }

  private async performPreCheck(): Promise<void> {
    this.logger.info('🔍 执行数据库预检查...');
    
    try {
      await this.prisma.$queryRaw`SELECT 1`;
      this.logger.success('数据库连接正常');
    } catch (error) {
      throw new Error(`数据库连接失败: ${error}`);
    }

    // 检查数据文件
    const requiredFiles = ['Item.json', 'Skill.json', 'LargeMonsters.json'];
    for (const file of requiredFiles) {
      if (!existsSync(join(this.dataPath, file))) {
        throw new Error(`必需的数据文件不存在: ${file}`);
      }
    }
    
    this.logger.success('预检查完成');
  }

  private shouldClearDatabase(): boolean {
    return process.argv.includes('--clear') || process.argv.includes('--reset');
  }

  private async clearDatabase(): Promise<void> {
    this.logger.info('🗑️ 清理数据库...');
    
    try {
      await this.prisma.$executeRaw`PRAGMA foreign_keys = OFF;`;
      
      const tables = ['weapon', 'monster', 'skill', 'item'];
      for (const table of tables) {
        await this.prisma[table as keyof PrismaClient].deleteMany({} as any);
      }
      
      await this.prisma.$executeRaw`PRAGMA foreign_keys = ON;`;
      this.logger.success('数据库清理完成');
    } catch (error) {
      await this.prisma.$executeRaw`PRAGMA foreign_keys = ON;`;
      throw error;
    }
  }

  private loadJsonFile(fileName: string): any[] {
    const filePath = join(this.dataPath, fileName);
    
    if (!existsSync(filePath)) {
      this.logger.warn(`跳过不存在的文件: ${fileName}`);
      return [];
    }
    
    try {
      const data = JSON.parse(readFileSync(filePath, 'utf-8'));
      const result = Array.isArray(data) ? data : [];
      this.logger.debug(`加载 ${fileName}: ${result.length} 条记录`);
      return result;
    } catch (error) {
      this.logger.error(`解析文件失败 ${fileName}:`, error);
      return [];
    }
  }

  // 数据转换器
  private transformItem(item: any) {
    return {
      game_id: DataValidator.validateRequiredBigInt(item.game_id, 'game_id'),
      names: JSON.stringify(item.names || {}),
      descriptions: item.descriptions ? JSON.stringify(item.descriptions) : null,
      kind: item.kind || 'unknown',
      rarity: item.rarity || 0,
      max_count: item.max_count || 0,
      sell_price: item.sell_price || 0,
      buy_price: item.buy_price || 0,
    };
  }

  private transformSkill(skill: any) {
    return {
      game_id: DataValidator.validateRequiredBigInt(skill.game_id, 'game_id'),
      names: JSON.stringify(skill.names || {}),
      descriptions: skill.descriptions ? JSON.stringify(skill.descriptions) : null,
      ranks: JSON.stringify(skill.ranks || []),
    };
  }

  private transformMonster(monster: any) {
    return {
      game_id: DataValidator.validateRequiredBigInt(monster.game_id, 'game_id'),
      names: JSON.stringify(monster.names || {}),
      descriptions: monster.descriptions ? JSON.stringify(monster.descriptions) : null,
      features: monster.features ? JSON.stringify(monster.features) : null,
      species: monster.species || null,
      parts: monster.parts ? JSON.stringify(monster.parts) : null,
      rewards: monster.rewards ? JSON.stringify(monster.rewards) : null,
    };
  }

  private async importWeapons(results: ImportResult[]): Promise<void> {
    this.logger.info('⚔️ 开始武器数据导入...');
    
    const weaponTypes = [
      'GreatSword', 'LongSword', 'SwordShield', 'DualBlades',
      'Hammer', 'HuntingHorn', 'Lance', 'Gunlance',
      'SwitchAxe', 'ChargeBlade', 'InsectGlaive',
      'LightBowgun', 'HeavyBowgun', 'Bow'
    ];

    for (const weaponType of weaponTypes) {
      const data = this.loadJsonFile(`weapons/${weaponType}.json`);
      if (data.length > 0) {
        const result = await this.strategy.execute(
          'weapon',
          data,
          (weapon: any) => this.transformWeapon(weapon, weaponType),
          'game_id'
        );
        results.push(result);
      }
    }
  }

  private transformWeapon(weapon: any, weaponType: string) {
    return {
      game_id: DataValidator.validateRequiredBigInt(weapon.game_id, 'game_id'),
      kind: weapon.kind || weaponType.toLowerCase(),
      names: JSON.stringify(weapon.names || {}),
      descriptions: weapon.descriptions ? JSON.stringify(weapon.descriptions) : null,
      rarity: weapon.rarity || null,
      attack_raw: weapon.attack_raw || null,
      affinity: weapon.affinity || null,
      defense: weapon.defense || null,
      slots: weapon.slots ? JSON.stringify(weapon.slots) : null,
      sharpness: weapon.sharpness ? JSON.stringify(weapon.sharpness) : null,
      handicraft: weapon.handicraft ? JSON.stringify(weapon.handicraft) : null,
      element_type: weapon.element_type || null,
      element_damage: weapon.element_damage || null,
      element_hidden: weapon.element_hidden || false,
      ammo: weapon.ammo ? JSON.stringify(weapon.ammo) : null,
      coatings: weapon.coatings ? JSON.stringify(weapon.coatings) : null,
      charge_levels: weapon.charge_levels ? JSON.stringify(weapon.charge_levels) : null,
      melodies: weapon.melodies ? JSON.stringify(weapon.melodies) : null,
      songs: weapon.songs ? JSON.stringify(weapon.songs) : null,
      kinsect_bonus: weapon.kinsect_bonus ? JSON.stringify(weapon.kinsect_bonus) : null,
      crafting_cost: weapon.crafting_cost || null,
      upgrade_cost: weapon.upgrade_cost || null,
      materials: weapon.materials ? JSON.stringify(weapon.materials) : null,
      series_id: DataValidator.safeBigInt(weapon.series_id),
      previous_id: DataValidator.safeBigInt(weapon.previous_id),
      next_weapons: weapon.next_weapons ? JSON.stringify(weapon.next_weapons) : null,
    };
  }

  private async importOptionalData(results: ImportResult[]): Promise<void> {
    this.logger.info('🏗️ 开始可选数据导入...');
    
    const optionalImports = [
      { name: 'armorSet', file: 'Armor.json', transformer: this.transformArmorSet.bind(this), uniqueField: 'game_id' },
      { name: 'species', file: 'Species.json', transformer: this.transformSpecies.bind(this), uniqueField: 'kind' },
      { name: 'stage', file: 'Stage.json', transformer: this.transformStage.bind(this), uniqueField: 'game_id' },
    ];

    for (const importDef of optionalImports) {
      const data = this.loadJsonFile(importDef.file);
      if (data.length > 0) {
        try {
          const result = await this.strategy.execute(
            importDef.name,
            data,
            importDef.transformer,
            importDef.uniqueField
          );
          results.push(result);
        } catch (error) {
          this.logger.error(`可选数据导入失败 ${importDef.name}:`, error);
          if (this.config.strictMode) {
            throw error;
          }
        }
      }
    }
  }

  private transformArmorSet(armor: any) {
    return {
      game_id: DataValidator.validateRequiredBigInt(armor.game_id, 'game_id'),
      names: JSON.stringify(armor.names || {}),
      rarity: armor.rarity || 0,
      set_bonus: armor.set_bonus ? JSON.stringify(armor.set_bonus) : null,
      group_bonus: armor.group_bonus ? JSON.stringify(armor.group_bonus) : null,
      pieces: JSON.stringify(armor.pieces || []),
    };
  }

  private transformSpecies(species: any) {
    if (!species.kind) {
      throw new ImportError('validation', '种族数据缺少必需的 kind 字段');
    }
    return {
      kind: species.kind,
      names: JSON.stringify(species.names || {}),
    };
  }

  private transformStage(stage: any) {
    return {
      game_id: DataValidator.validateRequiredBigInt(stage.game_id, 'game_id'),
      names: JSON.stringify(stage.names || {}),
      areas: stage.areas || 0,
      camps: stage.camps ? JSON.stringify(stage.camps) : null,
    };
  }

  private generateSummaryReport(results: ImportResult[], totalDuration: number): void {
    const totalRecords = results.reduce((sum, r) => sum + r.total, 0);
    const totalSuccess = results.reduce((sum, r) => sum + r.success, 0);
    const totalFailed = results.reduce((sum, r) => sum + r.failed, 0);
    const totalCreated = results.reduce((sum, r) => sum + r.created, 0);
    const totalUpdated = results.reduce((sum, r) => sum + r.updated, 0);
    
    const duration = (totalDuration / 1000).toFixed(2);
    const successRate = totalRecords > 0 ? ((totalSuccess / totalRecords) * 100).toFixed(1) : '0';

    this.logger.success('🎉 数据导入完成！');
    this.logger.info(`📊 总体统计:`);
    this.logger.info(`   记录总数: ${totalRecords}`);
    this.logger.info(`   成功: ${totalSuccess} (${successRate}%)`);
    this.logger.info(`   失败: ${totalFailed}`);
    this.logger.info(`   新建: ${totalCreated}`);
    this.logger.info(`   更新: ${totalUpdated}`);
    this.logger.info(`   总耗时: ${duration}s`);
    this.logger.info(`   平均速度: ${(totalRecords / Number(duration)).toFixed(0)} 记录/秒`);

    // 详细表格报告
    if (this.config.logLevel === 'debug' || this.config.logLevel === 'info') {
      this.logger.info('\n📋 详细报告:');
      results.forEach(result => {
        this.logger.info(
          `   ${result.tableName.padEnd(12)}: ${result.success.toString().padStart(4)}/${result.total.toString().padStart(4)} ` +
          `(${((result.success / result.total) * 100).toFixed(1).padStart(5)}%) ` +
          `${result.duration.toString().padStart(6)}s [${result.strategy}]`
        );
      });
    }

    if (totalFailed > 0) {
      this.logger.error(`⚠️ 有 ${totalFailed} 条记录导入失败，详情请查看审计日志`);
    }
  }
}

// ==================== 程序入口 ====================

async function main(): Promise<void> {
  const engine = new ImportEngine();
  await engine.execute();
}

// 直接执行
if (require.main === module) {
  main().catch((error) => {
    console.error('💥 未处理的错误:', error);
    process.exit(1);
  });
}

export { ImportEngine, ConfigManager, StrategyFactory };
