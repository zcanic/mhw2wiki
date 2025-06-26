# MHW2Wiki 测试策略

## 🎯 测试概览

本项目采用多层次的测试策略，确保代码质量、功能正确性和用户体验。

### 测试金字塔
```
    E2E Tests (少量)
    ↗     ↖
Integration Tests (中等)
    ↗     ↖
Unit Tests (大量)
```

## 🧪 测试技术栈

### 核心测试工具
- **Vitest**：快速的单元测试框架
- **Playwright**：端到端测试
- **Testing Library**：React 组件测试
- **Supertest**：API 集成测试
- **MSW**：API Mock 服务

### 辅助工具
- **Factory Boy**：测试数据生成
- **Faker.js**：模拟数据生成
- **Istanbul/c8**：代码覆盖率
- **GitHub Actions**：持续集成

## 🔬 单元测试

### 1. 工具函数测试

```typescript
// src/utils/item-helpers.ts
export function formatItemName(
  item: { names: Record<string, string> }, 
  locale: string = 'en'
): string {
  return item.names[locale] || item.names.en || 'Unknown Item';
}

export function calculateItemValue(item: {
  sellPrice?: number;
  buyPrice?: number;
  rarity: number;
}): number {
  const baseValue = item.sellPrice || item.buyPrice || 0;
  const rarityMultiplier = Math.pow(1.5, item.rarity);
  return Math.round(baseValue * rarityMultiplier);
}

export function getItemRarityColor(rarity: number): string {
  const colors: Record<number, string> = {
    1: 'text-gray-600',
    2: 'text-green-600', 
    3: 'text-blue-600',
    4: 'text-purple-600',
    5: 'text-yellow-600',
    6: 'text-orange-600',
    7: 'text-red-600',
    8: 'text-pink-600'
  };
  return colors[rarity] || 'text-gray-400';
}
```

```typescript
// __tests__/utils/item-helpers.test.ts
import { describe, it, expect } from 'vitest';
import { 
  formatItemName, 
  calculateItemValue, 
  getItemRarityColor 
} from '@/utils/item-helpers';

describe('item-helpers', () => {
  describe('formatItemName', () => {
    it('should return correct locale name', () => {
      const item = {
        names: {
          en: 'Iron Ore',
          'zh-Hans': '铁矿石',
          ja: '鉄鉱石'
        }
      };
      
      expect(formatItemName(item, 'en')).toBe('Iron Ore');
      expect(formatItemName(item, 'zh-Hans')).toBe('铁矿石');
      expect(formatItemName(item, 'ja')).toBe('鉄鉱石');
    });

    it('should fallback to English when locale not found', () => {
      const item = {
        names: {
          en: 'Iron Ore'
        }
      };
      
      expect(formatItemName(item, 'fr')).toBe('Iron Ore');
    });

    it('should return Unknown Item when no names available', () => {
      const item = { names: {} };
      expect(formatItemName(item, 'en')).toBe('Unknown Item');
    });
  });

  describe('calculateItemValue', () => {
    it('should calculate value based on sell price and rarity', () => {
      const item = {
        sellPrice: 100,
        rarity: 3
      };
      
      // 100 * (1.5^3) = 100 * 3.375 = 337.5 -> 338
      expect(calculateItemValue(item)).toBe(338);
    });

    it('should use buy price when sell price not available', () => {
      const item = {
        buyPrice: 200,
        rarity: 2
      };
      
      // 200 * (1.5^2) = 200 * 2.25 = 450
      expect(calculateItemValue(item)).toBe(450);
    });

    it('should handle zero values', () => {
      const item = { rarity: 1 };
      expect(calculateItemValue(item)).toBe(0);
    });
  });

  describe('getItemRarityColor', () => {
    it('should return correct color classes', () => {
      expect(getItemRarityColor(1)).toBe('text-gray-600');
      expect(getItemRarityColor(5)).toBe('text-yellow-600');
      expect(getItemRarityColor(8)).toBe('text-pink-600');
    });

    it('should return default color for unknown rarity', () => {
      expect(getItemRarityColor(99)).toBe('text-gray-400');
    });
  });
});
```

### 2. React 组件测试

```typescript
// components/items/item-card.tsx
interface ItemCardProps {
  item: {
    gameId: bigint;
    names: Record<string, string>;
    kind: string;
    rarity: number;
    sellPrice?: number;
  };
  locale?: string;
  onSelect?: (itemId: bigint) => void;
}

export function ItemCard({ item, locale = 'en', onSelect }: ItemCardProps) {
  return (
    <div 
      className="border rounded-lg p-4 hover:shadow-md cursor-pointer"
      onClick={() => onSelect?.(item.gameId)}
      data-testid="item-card"
    >
      <h3 
        className={`font-semibold ${getItemRarityColor(item.rarity)}`}
        data-testid="item-name"
      >
        {formatItemName(item, locale)}
      </h3>
      <p className="text-sm text-gray-600" data-testid="item-kind">
        {item.kind}
      </p>
      <p className="text-sm" data-testid="item-rarity">
        Rarity: {item.rarity}
      </p>
      {item.sellPrice && (
        <p className="text-sm text-green-600" data-testid="item-price">
          {item.sellPrice}z
        </p>
      )}
    </div>
  );
}
```

```typescript
// __tests__/components/item-card.test.tsx
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { ItemCard } from '@/components/items/item-card';

describe('ItemCard', () => {
  const mockItem = {
    gameId: 123n,
    names: {
      en: 'Iron Ore',
      'zh-Hans': '铁矿石'
    },
    kind: 'ore',
    rarity: 3,
    sellPrice: 100
  };

  it('should render item information correctly', () => {
    render(<ItemCard item={mockItem} />);
    
    expect(screen.getByTestId('item-name')).toHaveTextContent('Iron Ore');
    expect(screen.getByTestId('item-kind')).toHaveTextContent('ore');
    expect(screen.getByTestId('item-rarity')).toHaveTextContent('Rarity: 3');
    expect(screen.getByTestId('item-price')).toHaveTextContent('100z');
  });

  it('should display correct locale', () => {
    render(<ItemCard item={mockItem} locale="zh-Hans" />);
    
    expect(screen.getByTestId('item-name')).toHaveTextContent('铁矿石');
  });

  it('should call onSelect when clicked', () => {
    const onSelect = vi.fn();
    render(<ItemCard item={mockItem} onSelect={onSelect} />);
    
    fireEvent.click(screen.getByTestId('item-card'));
    
    expect(onSelect).toHaveBeenCalledWith(123n);
  });

  it('should not display price when not available', () => {
    const itemWithoutPrice = { ...mockItem, sellPrice: undefined };
    render(<ItemCard item={itemWithoutPrice} />);
    
    expect(screen.queryByTestId('item-price')).not.toBeInTheDocument();
  });

  it('should apply correct rarity color', () => {
    render(<ItemCard item={mockItem} />);
    
    const nameElement = screen.getByTestId('item-name');
    expect(nameElement).toHaveClass('text-blue-600'); // rarity 3
  });
});
```

### 3. 自定义 Hook 测试

```typescript
// hooks/use-items.ts
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

interface ItemFilters {
  rarity?: number[];
  kind?: string[];
  search?: string;
}

export function useItems(filters: ItemFilters = {}) {
  const [sortBy, setSortBy] = useState<'name' | 'rarity' | 'price'>('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const query = useQuery({
    queryKey: ['items', filters, sortBy, sortOrder],
    queryFn: async () => {
      const params = new URLSearchParams();
      
      if (filters.rarity?.length) {
        params.append('rarity', filters.rarity.join(','));
      }
      if (filters.kind?.length) {
        params.append('kind', filters.kind.join(','));
      }
      if (filters.search) {
        params.append('search', filters.search);
      }
      
      params.append('sortBy', sortBy);
      params.append('sortOrder', sortOrder);
      
      const response = await fetch(`/api/items?${params}`);
      if (!response.ok) {
        throw new Error('Failed to fetch items');
      }
      
      return response.json();
    }
  });

  return {
    ...query,
    sortBy,
    setSortBy,
    sortOrder,
    setSortOrder
  };
}
```

```typescript
// __tests__/hooks/use-items.test.tsx
import { describe, it, expect, beforeEach, afterEach } from 'vitest';
import { renderHook, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { setupServer } from 'msw/node';
import { rest } from 'msw';
import { useItems } from '@/hooks/use-items';

const server = setupServer(
  rest.get('/api/items', (req, res, ctx) => {
    const rarity = req.url.searchParams.get('rarity');
    const kind = req.url.searchParams.get('kind');
    const search = req.url.searchParams.get('search');
    
    let items = [
      { gameId: 1, names: { en: 'Iron Ore' }, kind: 'ore', rarity: 3 },
      { gameId: 2, names: { en: 'Steel' }, kind: 'metal', rarity: 5 }
    ];
    
    // 简单的过滤逻辑
    if (rarity) {
      const rarities = rarity.split(',').map(Number);
      items = items.filter(item => rarities.includes(item.rarity));
    }
    
    if (kind) {
      const kinds = kind.split(',');
      items = items.filter(item => kinds.includes(item.kind));
    }
    
    if (search) {
      items = items.filter(item => 
        item.names.en.toLowerCase().includes(search.toLowerCase())
      );
    }
    
    return res(ctx.json({ data: items, total: items.length }));
  })
);

beforeEach(() => server.listen());
afterEach(() => server.resetHandlers());

describe('useItems', () => {
  function createWrapper() {
    const queryClient = new QueryClient({
      defaultOptions: {
        queries: { retry: false }
      }
    });
    
    return ({ children }: { children: React.ReactNode }) => (
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    );
  }

  it('should fetch items successfully', async () => {
    const { result } = renderHook(() => useItems(), {
      wrapper: createWrapper()
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data).toEqual({
      data: [
        { gameId: 1, names: { en: 'Iron Ore' }, kind: 'ore', rarity: 3 },
        { gameId: 2, names: { en: 'Steel' }, kind: 'metal', rarity: 5 }
      ],
      total: 2
    });
  });

  it('should filter by rarity', async () => {
    const { result } = renderHook(() => useItems({ rarity: [3] }), {
      wrapper: createWrapper()
    });

    await waitFor(() => {
      expect(result.current.isSuccess).toBe(true);
    });

    expect(result.current.data.data).toHaveLength(1);
    expect(result.current.data.data[0].rarity).toBe(3);
  });
});
```

## 🔗 集成测试

### 1. API 端点测试

```typescript
// __tests__/api/items.test.ts
import { describe, it, expect, beforeAll, afterAll, beforeEach } from 'vitest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import request from 'supertest';
import { AppModule } from '@/app.module';
import { PrismaService } from '@/prisma/prisma.service';

describe('Items API', () => {
  let app: INestApplication;
  let prisma: PrismaService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    prisma = moduleRef.get<PrismaService>(PrismaService);
    
    await app.init();
  });

  afterAll(async () => {
    await prisma.$disconnect();
    await app.close();
  });

  beforeEach(async () => {
    // 清理测试数据
    await prisma.item.deleteMany();
    
    // 插入测试数据
    await prisma.item.createMany({
      data: [
        {
          gameId: 1n,
          names: { en: 'Iron Ore', 'zh-Hans': '铁矿石' },
          kind: 'ore',
          rarity: 3,
          sellPrice: 100
        },
        {
          gameId: 2n,
          names: { en: 'Steel', 'zh-Hans': '钢铁' },
          kind: 'metal',
          rarity: 5,
          sellPrice: 200
        }
      ]
    });
  });

  describe('GET /items', () => {
    it('should return all items', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/items')
        .expect(200);

      expect(response.body).toHaveProperty('data');
      expect(response.body.data).toHaveLength(2);
      expect(response.body).toHaveProperty('total', 2);
    });

    it('should filter items by rarity', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/items?rarity=3')
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].rarity).toBe(3);
      expect(response.body.data[0].names.en).toBe('Iron Ore');
    });

    it('should filter items by kind', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/items?kind=metal')
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].kind).toBe('metal');
    });

    it('should search items by name', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/items?search=iron')
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body.data[0].names.en).toBe('Iron Ore');
    });

    it('should sort items by price', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/items?sortBy=price&sortOrder=desc')
        .expect(200);

      const items = response.body.data;
      expect(items[0].sellPrice).toBe(200);
      expect(items[1].sellPrice).toBe(100);
    });

    it('should paginate results', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/items?page=1&limit=1')
        .expect(200);

      expect(response.body.data).toHaveLength(1);
      expect(response.body).toHaveProperty('total', 2);
      expect(response.body).toHaveProperty('page', 1);
      expect(response.body).toHaveProperty('limit', 1);
    });
  });

  describe('GET /items/:id', () => {
    it('should return specific item', async () => {
      const response = await request(app.getHttpServer())
        .get('/api/items/1')
        .expect(200);

      expect(response.body.gameId).toBe('1');
      expect(response.body.names.en).toBe('Iron Ore');
    });

    it('should return 404 for non-existent item', async () => {
      await request(app.getHttpServer())
        .get('/api/items/999')
        .expect(404);
    });
  });
});
```

### 2. GraphQL 查询测试

```typescript
// __tests__/graphql/items.test.ts
import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import { Test } from '@nestjs/testing';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import request from 'supertest';
import { AppModule } from '@/app.module';

describe('Items GraphQL', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  it('should query items', async () => {
    const query = `
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

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({
        query,
        variables: {
          filter: {
            rarity: 3
          }
        }
      })
      .expect(200);

    expect(response.body.data.items).toBeDefined();
    expect(response.body.data.items.length).toBeGreaterThan(0);
    expect(response.body.data.items[0]).toHaveProperty('gameId');
    expect(response.body.data.items[0]).toHaveProperty('names');
  });

  it('should handle complex nested queries', async () => {
    const query = `
      query GetItemsWithRelations {
        items(filter: { rarity: 5 }) {
          gameId
          names
          usedInWeapons {
            gameId
            names
            kind
          }
          usedInArmor {
            gameId
            names
            rarity
          }
        }
      }
    `;

    const response = await request(app.getHttpServer())
      .post('/graphql')
      .send({ query })
      .expect(200);

    expect(response.body.data.items).toBeDefined();
    // 验证关联数据被正确加载
    const itemWithRelations = response.body.data.items.find(
      (item: any) => item.usedInWeapons.length > 0
    );
    
    if (itemWithRelations) {
      expect(itemWithRelations.usedInWeapons[0]).toHaveProperty('gameId');
      expect(itemWithRelations.usedInWeapons[0]).toHaveProperty('names');
      expect(itemWithRelations.usedInWeapons[0]).toHaveProperty('kind');
    }
  });
});
```

## 🎭 端到端测试

### 1. 页面功能测试

```typescript
// e2e/items.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Items Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/items');
    await page.waitForLoadState('networkidle');
  });

  test('should display items list', async ({ page }) => {
    // 验证页面标题
    await expect(page.locator('h1')).toContainText('物品大全');
    
    // 验证有物品卡片显示
    const itemCards = page.locator('[data-testid=item-card]');
    await expect(itemCards).toHaveCount.greaterThan(0);
    
    // 验证第一个物品卡片的结构
    const firstCard = itemCards.first();
    await expect(firstCard.locator('[data-testid=item-name]')).toBeVisible();
    await expect(firstCard.locator('[data-testid=item-kind]')).toBeVisible();
    await expect(firstCard.locator('[data-testid=item-rarity]')).toBeVisible();
  });

  test('should filter items by rarity', async ({ page }) => {
    // 打开稀有度过滤器
    await page.click('[data-testid=rarity-filter-toggle]');
    
    // 选择稀有度 5
    await page.check('[data-testid=rarity-filter-5]');
    
    // 等待过滤结果
    await page.waitForTimeout(500);
    
    // 验证所有显示的物品都是稀有度 5
    const itemCards = page.locator('[data-testid=item-card]');
    const count = await itemCards.count();
    
    for (let i = 0; i < Math.min(count, 5); i++) {
      const rarity = await itemCards.nth(i)
        .locator('[data-testid=item-rarity]')
        .textContent();
      expect(rarity).toContain('5');
    }
  });

  test('should search items by name', async ({ page }) => {
    // 在搜索框中输入
    await page.fill('[data-testid=search-input]', 'iron');
    
    // 等待搜索结果
    await page.waitForTimeout(500);
    
    // 验证搜索结果
    const itemCards = page.locator('[data-testid=item-card]');
    const count = await itemCards.count();
    
    for (let i = 0; i < count; i++) {
      const name = await itemCards.nth(i)
        .locator('[data-testid=item-name]')
        .textContent();
      expect(name?.toLowerCase()).toContain('iron');
    }
  });

  test('should navigate to item detail page', async ({ page }) => {
    // 点击第一个物品卡片
    const firstCard = page.locator('[data-testid=item-card]').first();
    await firstCard.click();
    
    // 验证跳转到详情页
    await expect(page).toHaveURL(/\/items\/\d+/);
    
    // 验证详情页内容
    await expect(page.locator('[data-testid=item-detail-name]')).toBeVisible();
    await expect(page.locator('[data-testid=item-detail-description]')).toBeVisible();
  });

  test('should sort items correctly', async ({ page }) => {
    // 选择按价格排序
    await page.selectOption('[data-testid=sort-select]', 'price');
    
    // 等待排序完成
    await page.waitForTimeout(500);
    
    // 获取前几个物品的价格并验证排序
    const itemCards = page.locator('[data-testid=item-card]');
    const prices: number[] = [];
    
    const count = Math.min(await itemCards.count(), 5);
    for (let i = 0; i < count; i++) {
      const priceText = await itemCards.nth(i)
        .locator('[data-testid=item-price]')
        .textContent();
      
      if (priceText) {
        const price = parseInt(priceText.replace(/[^\d]/g, ''));
        prices.push(price);
      }
    }
    
    // 验证价格是升序排列
    for (let i = 1; i < prices.length; i++) {
      expect(prices[i]).toBeGreaterThanOrEqual(prices[i - 1]);
    }
  });
});
```

### 2. 性能测试

```typescript
// e2e/performance.spec.ts
import { test, expect } from '@playwright/test';

test.describe('Performance Tests', () => {
  test('should load pages within acceptable time', async ({ page }) => {
    // 测试首页加载时间
    const startTime = Date.now();
    await page.goto('/');
    await page.waitForLoadState('networkidle');
    const homeLoadTime = Date.now() - startTime;
    
    expect(homeLoadTime).toBeLessThan(3000); // 3秒内
    
    // 测试物品页面加载时间
    const itemsStartTime = Date.now();
    await page.goto('/items');
    await page.waitForLoadState('networkidle');
    const itemsLoadTime = Date.now() - itemsStartTime;
    
    expect(itemsLoadTime).toBeLessThan(5000); // 5秒内
  });

  test('should handle large datasets efficiently', async ({ page }) => {
    await page.goto('/items');
    
    // 等待初始加载完成
    await page.waitForLoadState('networkidle');
    
    // 滚动到页面底部触发分页加载
    let previousCount = 0;
    let currentCount = await page.locator('[data-testid=item-card]').count();
    
    while (currentCount > previousCount && currentCount < 100) {
      previousCount = currentCount;
      
      await page.keyboard.press('End'); // 滚动到底部
      await page.waitForTimeout(1000); // 等待加载
      
      currentCount = await page.locator('[data-testid=item-card]').count();
    }
    
    // 验证分页加载功能正常
    expect(currentCount).toBeGreaterThan(20);
  });

  test('should maintain good Core Web Vitals', async ({ page }) => {
    await page.goto('/items');
    
    // 等待页面完全加载
    await page.waitForLoadState('networkidle');
    
    // 获取性能指标
    const metrics = await page.evaluate(() => {
      return new Promise((resolve) => {
        new PerformanceObserver((list) => {
          const entries = list.getEntries();
          const vitals: Record<string, number> = {};
          
          entries.forEach((entry) => {
            if (entry.entryType === 'navigation') {
              const navEntry = entry as PerformanceNavigationTiming;
              vitals.FCP = navEntry.loadEventEnd - navEntry.fetchStart;
            }
          });
          
          resolve(vitals);
        }).observe({ entryTypes: ['navigation'] });
      });
    });
    
    // 验证性能指标（实际项目中需要根据具体情况调整阈值）
    expect((metrics as any).FCP).toBeLessThan(2500); // First Contentful Paint < 2.5s
  });
});
```

## 📊 测试覆盖率与质量

### 1. 覆盖率配置

```typescript
// vitest.config.ts
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: ['./test-setup.ts'],
    coverage: {
      provider: 'c8',
      reporter: ['text', 'json', 'html'],
      exclude: [
        'node_modules/',
        'test/',
        '**/*.d.ts',
        '**/*.config.{js,ts}',
        '**/generated/**',
        '**/dist/**'
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80
        }
      }
    }
  }
});
```

### 2. 质量门禁

```yaml
# .github/workflows/test.yml
name: Test

on:
  push:
    branches: [main, develop]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    
    services:
      postgres:
        image: postgres:13
        env:
          POSTGRES_PASSWORD: postgres
          POSTGRES_DB: test_db
        options: >-
          --health-cmd pg_isready
          --health-interval 10s
          --health-timeout 5s
          --health-retries 5

    steps:
      - uses: actions/checkout@v3
      
      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'
          cache: 'npm'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Run unit tests
        run: npm run test:unit
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
      
      - name: Run integration tests
        run: npm run test:integration
        env:
          DATABASE_URL: postgresql://postgres:postgres@localhost:5432/test_db
      
      - name: Run E2E tests
        run: npm run test:e2e
      
      - name: Upload coverage reports
        uses: codecov/codecov-action@v3
        with:
          file: ./coverage/coverage-final.json
```

### 3. 测试脚本

```json
{
  "scripts": {
    "test": "vitest",
    "test:unit": "vitest run src/",
    "test:integration": "vitest run __tests__/integration/",
    "test:e2e": "playwright test",
    "test:coverage": "vitest run --coverage",
    "test:watch": "vitest --watch",
    "test:ui": "vitest --ui"
  }
}
```

## 🚀 持续集成策略

### 1. 预提交钩子

```bash
# .husky/pre-commit
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

npm run lint
npm run type-check
npm run test:unit
```

### 2. 自动化测试流程

```mermaid
graph LR
    A[代码提交] --> B[Pre-commit Hook]
    B --> C[单元测试]
    C --> D[类型检查]
    D --> E[代码格式化]
    E --> F[提交成功]
    
    G[Pull Request] --> H[CI 流水线]
    H --> I[单元测试]
    I --> J[集成测试]
    J --> K[E2E 测试]
    K --> L[覆盖率检查]
    L --> M[部署预览]
```

### 3. 测试环境管理

```typescript
// test-utils/setup.ts
import { beforeAll, afterAll, beforeEach } from 'vitest';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient({
  datasources: {
    db: {
      url: process.env.TEST_DATABASE_URL
    }
  }
});

beforeAll(async () => {
  // 创建测试数据库结构
  await prisma.$executeRaw`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
});

afterAll(async () => {
  await prisma.$disconnect();
});

beforeEach(async () => {
  // 清理测试数据
  await prisma.item.deleteMany();
  await prisma.monster.deleteMany();
  await prisma.armorSet.deleteMany();
});

export { prisma };
```

---

*本测试策略确保 MHW2Wiki 项目的代码质量、功能正确性和用户体验，通过多层次的测试覆盖和持续集成流程，保障项目的稳定性和可维护性。*
