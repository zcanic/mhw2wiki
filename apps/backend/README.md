# MHW2Wiki Backend

基于 NestJS + GraphQL + Prisma 构建的《怪物猎人》资料库后端服务。

## 项目结构

```
apps/backend/
├── src/
│   ├── modules/           # 业务模块
│   │   ├── monster/      # 怪物模块
│   │   ├── item/         # 物品模块
│   │   ├── armor/        # 防具模块
│   │   ├── weapon/       # 武器模块
│   │   ├── skill/        # 技能模块
│   │   └── common/       # 公共模块
│   ├── graphql/          # GraphQL 配置
│   ├── database/         # 数据库连接
│   └── main.ts           # 应用入口
├── prisma/               # Prisma 配置（软链接到 packages/database）
└── test/                 # 测试文件
```

## 技术栈

- **框架**: NestJS 10.x
- **API**: GraphQL (Code-First) 
- **ORM**: Prisma 5.x
- **数据库**: PostgreSQL 15+
- **语言**: TypeScript 5.x
- **测试**: Jest + Supertest
- **验证**: class-validator + class-transformer
- **缓存**: Redis (可选)

## 开发计划

### Phase 1: 基础架构 🚧
- [ ] 初始化 NestJS 项目
- [ ] 配置 GraphQL (Code-First)
- [ ] 集成 Prisma ORM
- [ ] 设置环境配置和验证
- [ ] 配置 CORS 和安全中间件

### Phase 2: 核心模块 📋
- [ ] Monster 模块 (怪物查询、筛选、生态分类)
- [ ] Item 模块 (物品信息、分类、材料关系)
- [ ] Armor 模块 (防具数据、技能关联、升级路线)
- [ ] Weapon 模块 (武器系列、升级路线、类型分类)
- [ ] Skill 模块 (技能效果、等级系统)
- [ ] Decoration 模块 (装饰品、护石、魅力饰品)
- [ ] Stage 模块 (地图信息、区域数据、营地位置)
- [ ] Species 模块 (怪物分类、生态特征)

### Phase 3: 专业工具API ⚡
- [ ] HuntingHorn 模块 (音符系统、旋律配置、歌曲效果)
- [ ] Builder 模块 (配装计算、技能优化、套装推荐)
- [ ] Calculator 模块 (升级费用、材料需求、路线规划)
- [ ] Search 模块 (全局搜索、智能筛选、关联推荐)
- [ ] Analytics 模块 (数据统计、使用分析、性能监控)

### Phase 4: 部署优化 🚀
- [ ] 生产环境配置
- [ ] PM2 进程管理
- [ ] 宝塔面板部署脚本
- [ ] 监控和日志系统

## 开发指南

### 安装依赖
```bash
cd apps/backend
npm install
```

### 环境配置
复制并配置环境变量：
```bash
cp .env.example .env
# 编辑 .env 文件，配置数据库连接等
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
npm run start:prod
```

### 测试
```bash
npm run test          # 单元测试
npm run test:e2e      # 端到端测试
npm run test:cov      # 测试覆盖率
```

## API 文档

开发服务器启动后，可访问：
- GraphQL Playground: `http://localhost:4000/graphql`
- API 文档: `http://localhost:4000/docs` (可选)

## 性能考虑

- 使用 DataLoader 避免 N+1 查询问题
- 实现查询复杂度限制
- 配置适当的数据库索引
- 使用 Redis 缓存热点数据
- 启用 GraphQL 查询缓存
