# MHWildsWiki

> 现代化的《怪物猎人：荒野》游戏数据资料库，采用 **Turborepo Monorepo** 架构，**无 Docker**，**宝塔面板友好** 的部署方案。

## 📚 文档导航

| 文档类型 | 链接 | 描述 |
|----------|------|------|
| 📖 **完整文档中心** | [**docs/README.md**](./docs/README.md) | 完整文档导航中心 |
| 🏗️ **技术架构** | [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) | 项目架构和技术选型 |
| 📊 **数据模式** | [docs/DATA_SCHEMA.md](./docs/DATA_SCHEMA.md) | 数据库设计和优化 |
|  **部署指南** | [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) | 宝塔面板部署流程 |
| 💻 **开发指南** | [docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md) | 开发环境和最佳实践 |
| 📋 **技术报告** | [docs/TECHNICAL_REPORTS.md](./docs/TECHNICAL_REPORTS.md) | 数据修复和项目进展报告 |

## 🎯 项目概述

**13万+ 条游戏数据记录** 的《怪物猎人：荒野》资料库，涵盖怪物、武器、防具、技能、物品等全面数据。

### 核心技术栈

- **前端**: Next.js 14 + Tailwind CSS + shadcn/ui
- **后端**: NestJS + GraphQL + Prisma
- **数据库**: SQLite (开发) / PostgreSQL (生产可选)
- **部署**: 宝塔面板 + PM2 + Nginx (无 Docker)
- **包管理**: pnpm (Monorepo优化)

### 项目结构

```
mhwildswiki/
├── apps/
│   ├── backend/         # NestJS + GraphQL API
│   └── frontend/        # Next.js + Tailwind 前端
├── packages/
│   ├── database/        # Prisma ORM + 数据导入脚本
│   ├── eslint-config/   # 共享 ESLint 配置
│   ├── typescript-config/# 共享 TypeScript 配置
│   └── ui/              # 共享 UI 组件库
├── output/merged/       # 游戏数据 JSON 文件
├── config/              # Nginx 配置模板
├── scripts/             # 部署和备份脚本
└── docs/                # 项目文档
```

## 🚀 快速开始

### 环境要求
- Node.js >= 18
- PostgreSQL >= 13
- Git

### 安装和运行

```bash
# 1. 克隆项目
git clone https://github.com/zcanic/mhw2wiki.git
cd mhw2wiki

# 2. 安装依赖 (使用pnpm)
pnpm install

# 3. 配置数据库
cp packages/database/.env.example packages/database/.env
# 编辑 .env 文件设置数据库连接

# 4. 初始化数据库
cd packages/database
pnpm db:generate
pnpm db:push
pnpm db:seed
cd ../..

# 5. 启动开发服务器
pnpm dev
```

## 📊 当前状态

✅ **基础架构完成** - Monorepo + TypeScript + Prisma
✅ **数据层完成** - 13万+ 数据记录导入验证
✅ **后端API完成** - NestJS + GraphQL + 四大核心模块
✅ **前端界面完成** - Next.js + 现代化UI + 数据展示
✅ **数据一致性修复** - 前后端数据流完全贯通

**下一阶段**: 搜索筛选功能、性能优化、用户体验增强

## ⚠️ 数据真实性声明 (2025-06-28)

本项目严格遵守数据真实性原则：
- ✅ **绝不生成虚假数据**: 所有数据必须来源于原始游戏数据库文件
- ✅ **不进行主观推断**: 移除了所有"智能映射"逻辑，不根据物种等特征推断数据
- ✅ **保持数据完整性**: 缺失的数据标记为空值或"Unknown"，绝不填充假想内容
- ✅ **尊重原始数据**: 以 output/merged/ 目录中的JSON文件为唯一数据来源

技术栈澄清:
- ✅ **删除Docker配置**: 移除 `docker-compose.dev.yml` (与"无Docker"声明冲突)
- ✅ **统一包管理器**: 删除 `package-lock.json`，使用pnpm
- ✅ **澄清数据库技术**: SQLite(开发) + PostgreSQL(生产可选)
- ✅ **清理冗余脚本**: 移除Docker相关初始化脚本

---

**详细信息请查看 [完整文档](./docs/README.md)**
