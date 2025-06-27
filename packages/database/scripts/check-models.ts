#!/usr/bin/env tsx

/**
 * 检查当前Prisma客户端的可用模型
 */

import { PrismaClient } from '../src/generated/client';

const prisma = new PrismaClient();

async function main() {
  console.log('🔍 检查当前Prisma客户端可用的模型...');

  try {
    await prisma.$connect();
    console.log('✅ 数据库连接成功');

    // 检查当前可用的模型
    console.log('\n📋 可用的数据模型:');
    const models = Object.keys(prisma).filter(key => 
      !key.startsWith('$') && 
      typeof (prisma as any)[key] === 'object' &&
      (prisma as any)[key].findMany
    );
    
    console.log('模型列表:', models);

    // 测试现有模型
    for (const modelName of models) {
      try {
        const count = await (prisma as any)[modelName].count();
        console.log(`  ${modelName}: ${count} 条记录`);
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : String(error);
        console.log(`  ${modelName}: 无法访问 (${errorMessage})`);
      }
    }

    console.log('\n✅ 模型检查完成');

  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : String(error);
    console.error('❌ 检查失败:', errorMessage);
  } finally {
    await prisma.$disconnect();
  }
}

main();
