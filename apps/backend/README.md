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
  - ✅ `weapons` - 武器数据查询 (数据库实际记录数)
  - ✅ `monsters` - 怪物数据查询 (数据库实际记录数，无虚假数据)
  - ✅ `items` - 物品数据查询 (数据库实际记录数，无虚假计算)
  - ✅ `armorPieces` - 防具数据查询 (数据库实际记录数)

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

### 数据真实性保证
- **原始数据优先**: 所有数据严格来源于原始游戏数据库
- **无虚假生成**: 绝不生成、推断或计算任何不存在于数据库中的数据
- **数据完整性**: 缺失数据标记为空值，保持数据真实性
- **一致性检查**: 前后端数据流严格匹配，无额外加工

### GraphQL API特性
- **类型安全**: TypeScript + GraphQL Code-First
- **查询优化**: 精确数据映射，无冗余字段
- **错误处理**: 统一的错误处理和验证机制

## 🔗 相关文档

- [API设计文档](../../docs/DEVELOPMENT.md#后端开发)
- [数据库Schema](../../packages/database/README.md)
- [技术报告](../../docs/TECHNICAL_REPORTS.md)
- [部署指南](../../docs/DEPLOYMENT.md)

---

详细开发指南请参考：[项目文档中心](../../docs/README.md)
