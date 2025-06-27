# MHWildsWiki Backend

基于 NestJS + GraphQL + Prisma 构建的《怪物猎人：荒野》数据资料库后端服务。

## 🎯 技术栈现状

- **框架**: NestJS 10.x (渐进式Node.js框架)
- **API**: GraphQL (Code-First架构，类型安全)
- **ORM**: Prisma (SQLite开发环境，PostgreSQL生产可选)
- **语言**: TypeScript (类型安全)
- **包管理**: pnpm (Monorepo优化)

## 🚀 快速开始

```bash
# 开发模式
pnpm start:dev

# 生产构建
pnpm build
pnpm start:prod

# 测试
pnpm test
pnpm test:e2e
```

## 📊 API 状态

- **GraphQL Playground**: http://localhost:4000/graphql
- **核心模块状态**:
  - ✅ `weapons` - 武器数据查询 (11条记录)
  - ✅ `monsters` - 怪物数据查询 (10条记录，智能属性映射)
  - ✅ `items` - 物品数据查询 (20条记录，智能价值计算)
  - ✅ `armorPieces` - 防具数据查询 (2条记录)

## 📁 项目结构

```
src/
├── app.module.ts         # 应用根模块
├── main.ts              # 应用入口 (端口:4000)
├── schema.gql           # 生成的GraphQL Schema
├── common/              # 共享模块
│   └── models/          # 基础数据模型
├── monsters/            # 怪物模块 ✅
│   ├── monsters.module.ts
│   ├── monsters.resolver.ts
│   ├── monsters.service.ts
│   └── models/monster.model.ts
├── weapons/             # 武器模块 ✅
├── armor/               # 防具模块 ✅
└── items/               # 物品模块 ✅
```

## 🔧 核心功能

### 智能数据映射系统
- **怪物属性推断**: 基于species自动计算威胁等级和栖息地
- **物品价值计算**: 基于稀有度智能计算 (rarity × 100)
- **数据一致性**: 前后端数据流完全贯通，无硬编码值

### GraphQL API特性
- **类型安全**: TypeScript + GraphQL Code-First
- **查询优化**: 移除冗余字段，精确数据映射
- **错误处理**: 统一的错误处理和验证机制

## 🔗 相关文档

- [API设计文档](../../docs/DEVELOPMENT.md#后端开发)
- [数据库Schema](../../packages/database/README.md)
- [技术报告](../../docs/TECHNICAL_REPORTS.md)
- [部署指南](../../docs/DEPLOYMENT.md)

---

详细开发指南请参考：[项目文档中心](../../docs/README.md)
