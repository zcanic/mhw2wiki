# MHWildsWiki

> 现代化的《怪物猎人：荒野》游戏数据资料库，采用 **Turborepo Monorepo** 架构，**Next.js 14** + **GraphQL** 技术栈。

## 📊 项目状态

- **开发阶段**: P1阶段75%完成，准备进入P2阶段
- **功能状态**: 详情页系统完成，全局搜索开发中
- **数据规模**: 13万+条游戏数据记录
- **技术架构**: 现代化Web技术栈，生产就绪

## 📚 文档导航

| 文档类型 | 链接 | 描述 |
|----------|------|------|
| 📖 **文档中心** | [**docs/README.md**](./docs/README.md) | 完整文档导航中心 |
| 🏗️ **系统架构** | [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) | 整体系统架构设计 |
| � **开发指南** | [docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md) | 开发环境配置指南 |
| � **部署流程** | [docs/DEPLOYMENT.md](./docs/DEPLOYMENT.md) | 生产环境部署指南 |

## 🎯 项目概述

**MHWildsWiki** 是一个现代化的《怪物猎人：荒野》游戏数据资料库，包含 **13万+条游戏数据记录**，涵盖怪物、武器、防具、技能、物品等全面游戏内容。

### ✨ 核心功能
- **详情页系统**: 怪物、武器、物品的完整详情展示 ✅
- **数据关联**: 掉落奖励、制作材料、获取方式 🚧 75%完成
- **全局搜索**: 跨类型统一搜索功能 🔄 P2阶段开发中
- **高级筛选**: 多条件筛选和排序 ⏳ 计划中
- **响应式设计**: 完美适配移动端和桌面端 ✅

### 核心技术栈

- **前端**: Next.js 14 + Tailwind CSS + Apollo Client
- **后端**: NestJS + GraphQL + Prisma
- **数据库**: SQLite (开发) / PostgreSQL (生产)
- **部署**: Turborepo + PM2 + Nginx
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
- pnpm >= 8

### 开发环境启动
```bash
# 克隆项目
git clone https://github.com/your-username/mhwildswiki.git
cd mhwildswiki

# 安装依赖
pnpm install

# 启动开发服务器
pnpm dev
```

访问 http://localhost:3000 查看前端，http://localhost:4000/graphql 查看GraphQL Playground。

### 数据库设置
```bash
# 生成Prisma客户端
cd packages/database
pnpm generate

# 运行数据库迁移
pnpm migrate

# 导入游戏数据 (可选)
pnpm import-data
```

## 🎯 开发路线图

### ✅ P1阶段 (75%完成)
- [x] 详情页面系统 (怪物、武器、物品)
- [x] 响应式UI设计和移动端适配
- [x] GraphQL数据关联架构
- [ ] Mock数据到Prisma真实查询切换

### 🚀 P2阶段 (准备中)
- [ ] 全局搜索系统 (实现指南已完成)
- [ ] 高级筛选功能增强
- [ ] 性能优化 (图片优化、代码分割)
- [ ] URL状态同步和分享功能

### 🔮 P3阶段 (未来计划)
- [ ] 用户账户和个性化功能
- [ ] 装备对比和搭配推荐
- [ ] 社区功能和用户贡献
- [ ] PWA优化和离线支持

## 🤝 贡献指南

1. Fork 项目
2. 创建功能分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 创建 Pull Request

详细的开发规范请参考 [docs/DEVELOPMENT.md](./docs/DEVELOPMENT.md)。

## 📄 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情。

## 🙏 致谢

- 《怪物猎人：荒野》游戏数据来源
- 开源社区的技术支持
- 所有贡献者的努力

---

**MHWildsWiki - 为猎人们提供最佳的游戏资料查询体验！** 🏹✨
