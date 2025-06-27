# MHWildsWiki Frontend

基于 Next.js + Tailwind CSS + shadcn/ui 构建的《怪物猎人：荒野》资料库前端应用。

## 🎯 核心功能

- **现代化UI**: 响应式设计，完美支持桌面和移动端
- **数据展示**: 四大核心页面 (怪物、武器、防具、物品)
- **Apollo Client**: GraphQL客户端，类型安全的数据获取
- **组件化**: shadcn/ui + 自定义组件的设计系统

## 🛠️ 技术栈

- **Next.js 14**: App Router + React Server Components
- **Tailwind CSS**: 原子化CSS框架
- **shadcn/ui**: 现代化UI组件库
- **Apollo Client**: GraphQL客户端和状态管理

## 🚀 快速开始

```bash
# 开发模式
pnpm dev

# 构建
pnpm build

# 生产模式
pnpm start
```

## 📱 页面结构

- **首页** (`/`) - 项目介绍和导航
- **怪物图鉴** (`/monsters`) - 怪物列表和详情
- **武器大全** (`/weapons`) - 武器列表和详情
- **防具系统** (`/armor`) - 防具列表和详情
- **物品大全** (`/items`) - 物品列表和详情

## 📁 项目结构

```
src/
├── app/                 # App Router 页面
│   ├── monsters/        # 怪物页面
│   ├── weapons/         # 武器页面
│   ├── armor/           # 防具页面
│   └── items/           # 物品页面
├── components/          # React 组件
│   ├── ui/              # shadcn/ui 组件
│   └── feature/         # 功能组件
└── lib/                 # 工具函数
    ├── graphql/         # GraphQL 客户端
    └── utils/           # 通用工具
```

## 🔗 相关文档

- [UI设计规范](../../docs/DEVELOPMENT.md#前端开发)
- [组件开发指南](../../packages/ui/README.md)
- [部署指南](../../docs/DEPLOYMENT.md)

---

详细开发指南请参考：[项目文档中心](../../docs/README.md)
│   └── styles/          # 样式文件
├── public/              # 静态资源
│   ├── icons/           # 武器、技能图标
│   ├── images/          # 怪物、装备图片
│   └── maps/            # 地图资源
└── next.config.js       # Next.js 配置
```

## 技术栈

- **框架**: Next.js 14.x (App Router)
- **React**: React 18.x + Server Components
- **样式**: Tailwind CSS 3.x
- **组件库**: shadcn/ui
- **状态管理**: Zustand (轻量级)
- **数据获取**: Apollo Client / GraphQL
- **语言**: TypeScript 5.x
- **图标**: Lucide React
- **字体**: Inter (可选中文字体)

## 开发计划

### Phase 1: 基础设施 🏗️
- [ ] 初始化 Next.js 项目 (App Router)
- [ ] 配置 Tailwind CSS + shadcn/ui
- [ ] 设置 GraphQL 客户端
- [ ] 创建基础布局和导航
- [ ] 配置字体和主题系统

### Phase 2: 核心页面 📱
- [ ] 首页 - 项目介绍和快速导航
- [ ] 怪物图鉴 - 怪物列表、详情、生态分类
- [ ] 物品大全 - 物品分类、搜索、详情
- [ ] 防具系统 - 防具套装、技能关联、升级路线
- [ ] 武器大全 - 武器树、对比、升级路线、系列关系
- [ ] 技能百科 - 技能效果、装备关联
- [ ] 地图探索 - 狩猎地点、区域信息、营地位置
- [ ] 装饰品库 - 技能珠、魅力饰品、护石系统

### Phase 3: 专业工具 ⚡
- [ ] 狩猎笛工坊 - 音符系统、旋律配置、歌曲效果
- [ ] 装备配装器 - 技能搭配、属性优化、套装推荐
- [ ] 升级计算器 - 材料需求、费用计算、路线规划
- [ ] 怪物生态图 - 种类分类、栖息地分布、行为特征
- [ ] 收藏和书签功能
- [ ] 暗黑模式支持
- [ ] 响应式设计优化
- [ ] PWA 支持

### Phase 4: 性能优化 🚀
- [ ] 图片懒加载和优化
- [ ] 代码分割和按需加载
- [ ] SEO 优化和 meta 标签
- [ ] 缓存策略实现
- [ ] 性能监控集成

## 开发指南

### 安装依赖
```bash
cd apps/frontend
npm install
```

### 环境配置
复制并配置环境变量：
```bash
cp .env.local.example .env.local
# 编辑 .env.local 文件，配置 API 端点等
```

### 开发模式
```bash
npm run dev
```

### 构建生产版本
```bash
npm run build
npm run start
```

### 代码检查
```bash
npm run lint
npm run type-check
```

## 数据利用策略

### 完整数据源映射 (13万+ 记录)

| 数据文件 | 记录数 | 页面应用 | 核心功能 |
|----------|--------|----------|----------|
| `Item.json` | ~14,441 | 物品大全、配装器 | 材料查询、制作需求 |
| `Armor.json` | ~40,498 | 防具系统、配装器 | 套装浏览、技能搭配 |
| `ArmorUpgrade.json` | ~522 | 升级计算器 | 强化路线、材料计算 |
| `Accessory.json` | ~16,059 | 装饰品库、配装器 | 技能珠优化 |
| `Amulet.json` | ~8,295 | 护石系统、配装器 | 护石属性、等级查询 |
| `Charm.json` | ~1,028 | 装饰品库 | 魅力饰品收集 |
| `LargeMonsters.json` | ~200 | 怪物图鉴 | 生态信息、掉落材料 |
| `Species.json` | ~382 | 怪物生态图 | 生物学分类、特征 |
| `Skill.json` | ~500 | 技能百科、配装器 | 技能效果、等级系统 |
| `Stage.json` | ~1,386 | 地图探索 | 狩猎地点、区域信息 |
| `WeaponSeries.json` | ~724 | 武器系列 | 升级树、系列关系 |
| `weapons/*.json` | ~50,000+ | 武器大全 | 14种武器类型数据 |
| `HuntingHorn*.json` | ~400+ | 狩猎笛工坊 | 音符、旋律、歌曲系统 |
| `PartNames.json` | - | 全局 | 部位名称本地化 |

### 数据关联策略

1. **怪物生态系统**: `LargeMonsters.json` + `Species.json` + `Stage.json`
   - 展示怪物的完整生态信息和栖息地分布

2. **装备配装系统**: `Armor.json` + `Accessory.json` + `Amulet.json` + `Skill.json`
   - 实现智能配装推荐和技能优化

3. **武器升级系统**: `weapons/*.json` + `WeaponSeries.json` + `Item.json`
   - 完整的武器升级路线和材料需求

4. **防具强化系统**: `Armor.json` + `ArmorUpgrade.json` + `Item.json`
   - 精确的强化计算和材料预算

5. **狩猎笛专业系统**: 4个相关JSON文件联合
   - 音符组合、旋律效果、歌曲配置的完整工具链

## 页面路由设计

| 路由 | 页面 | 功能 | 数据源 |
|------|------|------|--------|
| `/` | 首页 | 项目介绍、快速导航 | - |
| `/monsters` | 怪物图鉴 | 怪物列表和生态分类 | LargeMonsters.json, Species.json |
| `/monsters/[id]` | 怪物详情 | 单个怪物详细信息 | LargeMonsters.json |
| `/monsters/ecology` | 怪物生态图 | 种类分类、栖息地分布 | Species.json, Stage.json |
| `/items` | 物品大全 | 物品分类浏览 | Item.json |
| `/items/[id]` | 物品详情 | 单个物品详细信息 | Item.json |
| `/armor` | 防具系统 | 防具列表和套装 | Armor.json |
| `/armor/[id]` | 防具详情 | 单个防具详细信息 | Armor.json |
| `/armor/upgrade` | 防具升级 | 升级路线和材料需求 | ArmorUpgrade.json |
| `/weapons` | 武器大全 | 武器分类和升级树 | weapons/*.json, WeaponSeries.json |
| `/weapons/[type]/[id]` | 武器详情 | 单个武器详细信息 | weapons/*.json |
| `/weapons/series` | 武器系列 | 升级路线和系列关系 | WeaponSeries.json |
| `/skills` | 技能百科 | 技能列表和效果 | Skill.json |
| `/skills/[id]` | 技能详情 | 单个技能详细信息 | Skill.json |
| `/decorations` | 装饰品库 | 技能珠、魅力饰品分类 | Accessory.json, Charm.json |
| `/decorations/[id]` | 装饰品详情 | 单个装饰品详细信息 | Accessory.json, Charm.json |
| `/amulets` | 护石系统 | 护石列表和属性 | Amulet.json |
| `/maps` | 地图探索 | 狩猎地点和区域信息 | Stage.json |
| `/maps/[id]` | 地图详情 | 单个地图详细信息 | Stage.json |
| `/tools/horn` | 狩猎笛工坊 | 音符、旋律、歌曲系统 | HuntingHorn*.json |
| `/tools/builder` | 配装器 | 装备搭配和优化 | 综合数据 |
| `/tools/calculator` | 升级计算器 | 材料和费用计算 | ArmorUpgrade.json, Item.json |

## UI/UX 设计原则

- **简洁明了**: 信息层次清晰，重点突出
- **响应式**: 完美支持桌面端和移动端
- **高性能**: 快速加载，流畅交互
- **可访问性**: 支持键盘导航和屏幕阅读器
- **一致性**: 统一的设计语言和交互模式

## 组件开发规范

- 使用 TypeScript 严格类型检查
- 遵循 React Hooks 最佳实践
- 优先使用 Server Components
- 合理使用 Client Components
- 组件命名采用 PascalCase
- 文件命名采用 kebab-case
