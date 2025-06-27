# MHWildsWiki 开发指南

## 🎯 开发环境设置

### 前置要求
- **Node.js** 18.0 或更高版本
- **npm** 9.0 或更高版本  
- **PostgreSQL** 13.0 或更高版本
- **Git** 版本控制

### 快速开始

```bash
# 1. 克隆项目
git clone https://github.com/your-username/mhw2wiki.git
cd mhw2wiki

# 2. 安装依赖
npm install

# 3. 配置环境变量
cp packages/database/.env.example packages/database/.env
# 编辑 .env 文件，设置数据库连接

# 4. 初始化数据库
cd packages/database
npm run db:generate
npm run db:push
npm run db:seed
cd ../..

# 5. 启动开发服务器（当应用创建后）
# npm run dev
```

## 🏗️ 项目架构

### Monorepo 结构
```
mhw2wiki/
├── apps/
│   ├── backend/          # NestJS API 服务
│   └── frontend/         # Next.js 前端应用
├── packages/
│   ├── database/         # Prisma 数据层
│   ├── ui/              # 共享 UI 组件
│   ├── eslint-config/   # ESLint 配置
│   └── typescript-config/ # TypeScript 配置
├── output/
│   └── merged/          # 游戏数据源文件
└── docs/               # 项目文档
```

### 技术栈

#### 后端技术栈
- **框架**：NestJS 10.x
- **语言**：TypeScript 5.x
- **数据库**：PostgreSQL + Prisma ORM
- **API**：GraphQL + REST
- **验证**：class-validator + class-transformer
- **文档**：Swagger/OpenAPI

#### 前端技术栈
- **框架**：Next.js 14.x (App Router)
- **语言**：TypeScript 5.x
- **样式**：Tailwind CSS + shadcn/ui
- **状态管理**：Zustand
- **数据获取**：TanStack Query + GraphQL
- **国际化**：next-intl

## 🔧 开发工作流

### 分支策略

```bash
main            # 生产分支
├── develop     # 开发分支
├── feature/*   # 功能分支
├── bugfix/*    # 修复分支
└── release/*   # 发布分支
```

### 提交规范

```bash
# 格式：<type>(<scope>): <description>
feat(frontend): add weapon comparison page
fix(backend): resolve GraphQL query optimization
docs(readme): update installation guide
style(ui): improve responsive layout
refactor(database): optimize item query performance
test(api): add integration tests for monster endpoints
```

### 代码质量

#### ESLint 配置
```json
{
  "extends": ["@mhwildswiki/eslint-config"],
  "rules": {
    "import/no-unresolved": "error",
    "@typescript-eslint/no-unused-vars": "error",
    "prefer-const": "error"
  }
}
```

#### Prettier 配置
```json
{
  "semi": true,
  "trailingComma": "es5",
  "singleQuote": true,
  "printWidth": 80,
  "tabWidth": 2
}
```

## 📦 包管理与脚本

### 根目录脚本
```json
{
  "scripts": {
    "dev": "turbo run dev",
    "build": "turbo run build",
    "test": "turbo run test",
    "lint": "turbo run lint",
    "type-check": "turbo run type-check",
    "clean": "turbo run clean",
    "db:generate": "cd packages/database && npm run generate",
    "db:push": "cd packages/database && npm run push",
    "db:seed": "cd packages/database && npm run seed",
    "deploy": "./scripts/deploy.sh",
    "backup": "./scripts/backup.sh"
  }
}
```

### Turborepo 配置
```json
{
  "pipeline": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["dist/**", ".next/**", "out/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "lint": {
      "outputs": []
    },
    "type-check": {
      "dependsOn": ["^build"],
      "outputs": []
    }
  }
}
```

## 🗄️ 数据库开发

### Prisma 工作流

```bash
# 1. 修改 schema.prisma
nano packages/database/prisma/schema.prisma

# 2. 生成客户端
npm run db:generate

# 3. 推送到数据库
npm run db:push

# 4. 重新导入数据（如果需要）
npm run db:seed
```

### 数据模型示例

```prisma
model Item {
  gameId      BigInt  @id @map("game_id")
  names       Json    @map("names")
  descriptions Json?  @map("descriptions")
  kind        String? @map("kind")
  rarity      Int?    @map("rarity")
  maxCount    Int?    @map("max_count")
  sellPrice   Int?    @map("sell_price")
  buyPrice    Int?    @map("buy_price")
  iconName    String? @map("icon_name")
  features    Json?   @map("features")
  createdAt   DateTime @default(now()) @map("created_at")
  updatedAt   DateTime @updatedAt @map("updated_at")

  @@map("Item")
  @@index([kind])
  @@index([rarity])
}
```

### 查询优化

```typescript
// 使用 select 减少数据传输
const items = await prisma.item.findMany({
  select: {
    gameId: true,
    names: true,
    rarity: true
  },
  where: {
    rarity: {
      gte: 5
    }
  }
});

// 使用 include 处理关联
const monsters = await prisma.monster.findMany({
  include: {
    species: true,
    rewards: {
      include: {
        item: true
      }
    }
  }
});
```

## 🎨 前端开发

### 组件开发模式

#### 页面组件结构
```typescript
// app/items/page.tsx
import { ItemList } from '@/components/items/item-list';
import { ItemFilters } from '@/components/items/item-filters';

export default function ItemsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">物品大全</h1>
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <ItemFilters />
        </aside>
        <main className="lg:col-span-3">
          <ItemList />
        </main>
      </div>
    </div>
  );
}
```

#### 共享组件开发
```typescript
// packages/ui/src/card.tsx
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'secondary' | 'destructive';
}

export function Card({ 
  className, 
  variant = 'default', 
  ...props 
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-lg border bg-card text-card-foreground shadow-sm',
        {
          'border-border': variant === 'default',
          'border-secondary': variant === 'secondary',
          'border-destructive': variant === 'destructive'
        },
        className
      )}
      {...props}
    />
  );
}
```

### 状态管理

```typescript
// stores/item-store.ts
import { create } from 'zustand';
import { Item } from '@/types/item';

interface ItemStore {
  items: Item[];
  filters: {
    rarity: number[];
    kind: string[];
    search: string;
  };
  setItems: (items: Item[]) => void;
  setFilters: (filters: Partial<ItemStore['filters']>) => void;
  filteredItems: () => Item[];
}

export const useItemStore = create<ItemStore>((set, get) => ({
  items: [],
  filters: {
    rarity: [],
    kind: [],
    search: ''
  },
  setItems: (items) => set({ items }),
  setFilters: (newFilters) => 
    set((state) => ({ 
      filters: { ...state.filters, ...newFilters } 
    })),
  filteredItems: () => {
    const { items, filters } = get();
    return items.filter((item) => {
      // 过滤逻辑
      if (filters.rarity.length && !filters.rarity.includes(item.rarity)) {
        return false;
      }
      if (filters.kind.length && !filters.kind.includes(item.kind)) {
        return false;
      }
      if (filters.search && !item.names.en.toLowerCase().includes(filters.search.toLowerCase())) {
        return false;
      }
      return true;
    });
  }
}));
```

### GraphQL 客户端

```typescript
// lib/graphql-client.ts
import { createClient } from '@urql/core';

export const graphqlClient = createClient({
  url: process.env.NEXT_PUBLIC_GRAPHQL_URL || '/graphql',
  fetchOptions: {
    headers: {
      'Content-Type': 'application/json',
    }
  }
});

// hooks/use-items.ts
import { useQuery } from '@tanstack/react-query';
import { graphqlClient } from '@/lib/graphql-client';

const GET_ITEMS = `
  query GetItems($filter: ItemFilter) {
    items(filter: $filter) {
      gameId
      names
      kind
      rarity
      sellPrice
    }
  }
`;

export function useItems(filter?: any) {
  return useQuery({
    queryKey: ['items', filter],
    queryFn: async () => {
      const result = await graphqlClient.query(GET_ITEMS, { filter });
      return result.data.items;
    }
  });
}
```

## 🔍 测试策略

### 单元测试

```typescript
// __tests__/utils/item-helpers.test.ts
import { describe, it, expect } from 'vitest';
import { formatItemName, calculateItemValue } from '@/utils/item-helpers';

describe('item-helpers', () => {
  it('should format item name correctly', () => {
    const item = {
      names: {
        en: 'Iron Ore',
        'zh-Hans': '铁矿石'
      }
    };
    
    expect(formatItemName(item, 'en')).toBe('Iron Ore');
    expect(formatItemName(item, 'zh-Hans')).toBe('铁矿石');
  });

  it('should calculate item value', () => {
    const item = {
      sellPrice: 100,
      buyPrice: 200,
      rarity: 3
    };
    
    expect(calculateItemValue(item)).toBe(150);
  });
});
```

### 集成测试

```typescript
// __tests__/api/items.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { createTestApp } from '@/test-utils/create-test-app';

describe('/api/items', () => {
  let app: any;

  beforeAll(async () => {
    app = await createTestApp();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should return items list', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/items'
    });

    expect(response.statusCode).toBe(200);
    expect(response.json()).toHaveProperty('data');
    expect(Array.isArray(response.json().data)).toBe(true);
  });

  it('should filter items by rarity', async () => {
    const response = await app.inject({
      method: 'GET',
      url: '/api/items?rarity=5'
    });

    const items = response.json().data;
    expect(items.every((item: any) => item.rarity === 5)).toBe(true);
  });
});
```

### E2E 测试

```typescript
// e2e/items.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Items Page', () => {
  test('should display items list', async ({ page }) => {
    await page.goto('/items');
    
    await expect(page.locator('h1')).toContainText('物品大全');
    await expect(page.locator('[data-testid=item-card]')).toHaveCount.greaterThan(0);
  });

  test('should filter items by rarity', async ({ page }) => {
    await page.goto('/items');
    
    // 选择稀有度过滤器
    await page.check('[data-testid=rarity-filter-5]');
    
    // 验证过滤结果
    const items = page.locator('[data-testid=item-card]');
    const count = await items.count();
    
    for (let i = 0; i < count; i++) {
      const rarity = await items.nth(i).locator('[data-testid=item-rarity]').textContent();
      expect(rarity).toBe('5');
    }
  });
});
```

## 🚀 性能优化

### 前端优化

#### 代码分割
```typescript
// 动态导入大型组件
import dynamic from 'next/dynamic';

const WeaponComparison = dynamic(
  () => import('@/components/weapons/weapon-comparison'),
  {
    loading: () => <div>Loading...</div>,
    ssr: false
  }
);
```

#### 图片优化
```typescript
import Image from 'next/image';

export function ItemImage({ item }: { item: Item }) {
  return (
    <Image
      src={`/images/items/${item.iconName}.png`}
      alt={item.names.en}
      width={64}
      height={64}
      placeholder="blur"
      blurDataURL="data:image/jpeg;base64,..."
    />
  );
}
```

#### 缓存策略
```typescript
// next.config.js
module.exports = {
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 's-maxage=300, stale-while-revalidate=3600'
          }
        ]
      }
    ];
  }
};
```

### 后端优化

#### 数据库查询优化
```typescript
// 批量查询优化
async function getItemsWithMaterials(itemIds: number[]) {
  const items = await prisma.item.findMany({
    where: {
      gameId: {
        in: itemIds
      }
    },
    include: {
      usedInWeapons: {
        select: {
          gameId: true,
          names: true,
          kind: true
        }
      },
      usedInArmor: {
        select: {
          gameId: true,
          names: true,
          rarity: true
        }
      }
    }
  });
  
  return items;
}
```

#### GraphQL 优化
```typescript
// DataLoader 避免 N+1 查询
import DataLoader from 'dataloader';

export const itemLoader = new DataLoader(async (itemIds: number[]) => {
  const items = await prisma.item.findMany({
    where: {
      gameId: {
        in: itemIds
      }
    }
  });
  
  return itemIds.map(id => items.find(item => item.gameId === id));
});
```

## 🎯 开发最佳实践

### 1. 类型安全
```typescript
// 严格的类型定义
interface Item {
  gameId: bigint;
  names: Record<string, string>;
  kind: ItemKind;
  rarity: number;
}

// 使用泛型提高复用性
interface ApiResponse<T> {
  data: T;
  total: number;
  page: number;
  limit: number;
}

// 工具类型
type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>;
```

### 2. 错误处理
```typescript
// 统一错误处理
export class AppError extends Error {
  constructor(
    message: string,
    public statusCode: number = 500,
    public code?: string
  ) {
    super(message);
    this.name = 'AppError';
  }
}

// 错误中间件
export function errorHandler(error: Error, req: Request, res: Response) {
  if (error instanceof AppError) {
    return res.status(error.statusCode).json({
      error: error.message,
      code: error.code
    });
  }
  
  // 记录未知错误
  console.error('Unexpected error:', error);
  
  return res.status(500).json({
    error: 'Internal server error'
  });
}
```

### 3. 日志管理
```typescript
// 结构化日志
import pino from 'pino';

export const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: {
    target: 'pino-pretty',
    options: {
      colorize: true
    }
  }
});

// 使用示例
logger.info({ userId: 123, action: 'get_items' }, 'User fetched items');
logger.error({ error: error.message, stack: error.stack }, 'Database connection failed');
```

### 4. 环境配置
```typescript
// config/index.ts
import { z } from 'zod';

const configSchema = z.object({
  NODE_ENV: z.enum(['development', 'production', 'test']),
  DATABASE_URL: z.string().url(),
  PORT: z.string().transform(Number).default('3000'),
  JWT_SECRET: z.string().min(32),
  CORS_ORIGIN: z.string().url().optional()
});

export const config = configSchema.parse(process.env);
```

## 📚 文档维护

### 1. API 文档
- 使用 Swagger/OpenAPI 自动生成 REST API 文档
- GraphQL 内置 Schema 文档和 Playground
- 及时更新接口变更说明

### 2. 组件文档
- 使用 Storybook 展示 UI 组件
- 提供使用示例和参数说明
- 保持组件 Props 类型定义最新

### 3. 变更日志
- 记录重要功能变更
- 标注破坏性变更
- 提供迁移指南

---

*本开发指南涵盖了 MHWildsWiki 项目的完整开发流程，确保代码质量、性能和可维护性。*
