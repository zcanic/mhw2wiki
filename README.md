# 《怪物猎人》资料库网站 (MHW2Wiki)

现代化的《怪物猎人：世界》游戏数据资| 数据类型 | 数量 | 文件 | 应用场景 |
|---------|------|------|----------|
| 🛡️ 防具数据 | ~40,498 | Armor.json | 防具## 📚 文档导航

| 文档 | 描述 |
|------|------|
| **[docs/README.md](./docs/README.md)** | 完整文档导航中心 |
| **[技术架构](./docs/ARCHITECTURE.md)** | 项目架构和技术选型 |
| **[数据模式](./docs/DATA_SCHEMA.md)** | 数据库设计和优化 |
| **[数据概览](./docs/DATA_OVERVIEW.md)** | 数据分析和业务价值 |
| **[部署指南](./docs/DEPLOYMENT.md)** | 宝塔面板部署流程 |
| **[开发指南](./docs/DEVELOPMENT.md)** | 开发环境和最佳实践 |
| **[测试策略](./docs/TESTING.md)** | 质量保证和测试规范 || ⚔️ 武器数据 | ~50,000+ | weapons/*.json | 武器大全、升级路线 |
| 💎 装饰品 | ~16,059 | Accessory.json | 装饰品库、技能优化 |
| 📦 游戏物品 | ~14,441 | Item.json | 物品大全、材料计算 |
| 🧩 护石数据 | ~8,295 | Amulet.json | 护石系统、属性查询 |
| 🗺️ 地图数据 | ~1,386 | Stage.json | 地图探索、狩猎地点 |
| 🎺 狩猎笛 | ~400+ | HuntingHorn*.json | 狩猎笛工坊、音符系统 |
| 🐉 怪物数据 | ~200 | LargeMonsters.json | 怪物图鉴、生态分析 |
| ⭐ 技能数据 | ~500 | Skill.json | 技能百科、效果查询 |
| 🔮 魅力饰品 | ~1,028 | Charm.json | 特殊装饰品收集 |

**总计约 13万+ 条记录，全数据类型覆盖**rborepo Monorepo** 架构，**无 Docker**，**宝塔面板友好**的部署方案。

## 🎯 项目概述

- **🎮 数据规模**: 13万+ 条游戏数据记录 (怪物、武器、防具、技能、物品等)
- **🏗️ 架构**: Next.js + NestJS + PostgreSQL + Prisma
- **📦 管理**: Turborepo Monorepo
- **🚀 部署**: 宝塔面板 + PM2 + Nginx (无 Docker)
- **🌏 多语言**: 14种语言支持 (中文、英文、日文等)

## 📂 项目结构

```
mhw2wiki/
├── apps/
│   ├── backend/         # NestJS + GraphQL API (待开发)
│   └── frontend/        # Next.js + Tailwind 前端 (待开发)
├── packages/
│   ├── database/        # Prisma ORM + 数据导入脚本 ✅
│   ├── eslint-config/   # 共享 ESLint 配置 ✅
│   ├── typescript-config/# 共享 TypeScript 配置 ✅
│   └── ui/              # 共享 UI 组件库 ✅
├── output/merged/       # 游戏数据 JSON 文件 ✅
├── config/              # Nginx 配置模板 ✅
├── scripts/             # 部署和备份脚本 ✅
└── docs/                # 项目文档 ✅
```

## 🛠 技术栈

| 层级 | 技术选型 | 描述 |
|------|----------|------|
| **前端** | Next.js 14 + Tailwind CSS + shadcn/ui | 静态导出，无服务端依赖 |
| **后端** | NestJS + GraphQL + Prisma | Code-First API，类型安全 |
| **数据库** | PostgreSQL + Prisma ORM | 极简 Schema，JSON 多语言字段 |
| **部署** | 宝塔面板 + PM2 + Nginx | 无 Docker，简化运维 |
| **开发** | Turborepo + TypeScript + ESLint | Monorepo 管理，代码质量保证 |

## 📊 数据概览

基于 `output/merged/` 目录分析：

| 数据类型 | 数量 | 文件 |
|---------|------|------|
| 🛡️ 防具数据 | ~40,498 | Armor.json |
| ⚔️ 武器数据 | ~50,000+ | weapons/*.json |
| 💎 装饰品 | ~16,059 | Accessory.json |
| 📦 游戏物品 | ~14,441 | Item.json |
| 🧩 护石数据 | ~8,295 | Amulet.json |
| 🗺️ 地图数据 | ~1,386 | Stage.json |
| 🐉 怪物数据 | ~200 | LargeMonsters.json |
| ⭐ 技能数据 | ~500 | Skill.json |

**总计约 13万+ 条记录**

## 🚀 开发状态

### ✅ 已完成 (数据层 - 阶段 1)

- **[数据结构分析]** - 深度分析 output/merged/ 所有数据关系
- **[Prisma Schema]** - 极简设计，适配实际数据结构，JSON 多语言字段
- **[数据导入脚本]** - v3.0 高效批量导入，支持所有数据类型并行导入
- **[部署配置]** - 宝塔面板友好的 Nginx、PM2、备份脚本
- **[项目文档]** - 完整的架构设计、部署指南、数据分析报告

### 🎯 进行中 (后端开发 - 阶段 2)

- **配置数据库环境** - PostgreSQL 安装和配置
- **执行数据库迁移** - Prisma migrate 和数据导入
- **NestJS 后端开发** - GraphQL API 和核心模块

### 📋 计划中 (前端开发 - 阶段 3)

**核心页面开发 (8个主要页面)**:
- 🏠 首页 - 项目介绍和快速导航
- 🐉 怪物图鉴 - 怪物列表、详情、生态分类
- 📦 物品大全 - 物品分类、搜索、详情
- 🛡️ 防具系统 - 防具套装、技能关联、升级路线
- ⚔️ 武器大全 - 武器树、对比、升级路线、系列关系
- ⭐ 技能百科 - 技能效果、装备关联
- 🗺️ 地图探索 - 狩猎地点、区域信息、营地位置
- 💎 装饰品库 - 技能珠、魅力饰品、护石系统

**专业工具开发 (3个工具页面)**:
- 🎺 狩猎笛工坊 - 音符系统、旋律配置、歌曲效果
- 🔧 装备配装器 - 技能搭配、属性优化、套装推荐
- 📊 升级计算器 - 材料需求、费用计算、路线规划
- **生产环境部署** - 宝塔面板完整部署

## 🚀 快速开始

### 1. 环境要求

- Node.js >= 18
- PostgreSQL >= 13
- Git

### 2. 安装依赖

```bash
git clone <repository-url>
cd mhw2wiki
npm install
```

### 3. 数据库配置

```bash
# 复制环境变量模板
cp packages/database/.env.example packages/database/.env

# 编辑数据库连接
nano packages/database/.env
```

### 4. 数据库初始化

```bash
cd packages/database

# 生成 Prisma 客户端
npm run db:generate

# 同步数据库结构  
npm run db:push

# 导入游戏数据 (约2-5分钟)
npm run db:seed
```

## � 文档导航

| 文档 | 描述 |
|------|------|
| **[方案.md](./方案.md)** | 完整技术方案和架构设计 (v6.0) |
| **[DEPLOYMENT.md](./DEPLOYMENT.md)** | 宝塔面板部署指南 |
| **[DATA_ANALYSIS.md](./DATA_ANALYSIS.md)** | 数据结构分析报告 |
| **[Backend README](./apps/backend/README.md)** | NestJS 后端开发指南 |
| **[Frontend README](./apps/frontend/README.md)** | Next.js 前端开发指南 |

## 📦 核心特性

### 🗃️ 数据导入系统 v3.0

- ✅ **多类型支持** - 物品、怪物、技能、防具、武器等
- ✅ **并行导入** - 多表同时导入，大幅提升效率
- ✅ **增量导入** - 智能跳过重复数据，支持重复执行
- ✅ **错误恢复** - 详细日志记录，单表失败不影响其他
- ✅ **数据验证** - 自动验证外键引用和数据完整性

### 🎨 前端特性 (计划)

- 📱 **响应式设计** - 完美支持桌面和移动端
- 🔍 **高级搜索** - 多维度筛选和全文搜索
- 🌙 **暗黑模式** - 用户友好的主题切换
- ⚡ **性能优化** - 静态生成，快速加载
- 🌐 **多语言支持** - 14种语言无缝切换

### 🚀 部署特性

- 🔧 **宝塔友好** - 专为宝塔面板环境设计
- 📦 **无 Docker** - 简化部署流程，降低维护成本
- � **自动化脚本** - 一键部署和数据备份
- 📊 **性能监控** - PM2 进程管理和状态监控

## 🤝 贡献指南

1. Fork 本仓库
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

## 📄 许可证

本项目采用 MIT 许可证。详情请查看 [LICENSE](LICENSE) 文件。

---

**🎮 为《怪物猎人》玩家社区贡献力量！**
