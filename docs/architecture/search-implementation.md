# 全局搜索功能实现指南

## 🎯 **实现目标**
基于当前项目架构，实现统一的全局搜索功能，支持跨怪物、武器、物品的智能搜索。

---

## 🏗️ **后端实现 (GraphQL + Prisma)**

### 1. 搜索解析器实现

```typescript
// apps/backend/src/search/search.resolver.ts
import { Resolver, Query, Args } from '@nestjs/graphql';
import { SearchService } from './search.service';
import { SearchResults, SearchInput } from './search.types';

@Resolver()
export class SearchResolver {
  constructor(private readonly searchService: SearchService) {}

  @Query(() => SearchResults)
  async globalSearch(@Args('input') input: SearchInput): Promise<SearchResults> {
    return this.searchService.globalSearch(input);
  }
}
```

### 2. 搜索服务实现

```typescript
// apps/backend/src/search/search.service.ts
import { Injectable } from '@nestjs/common';
import { DatabaseService } from '../common/database.service';
import { SearchInput, SearchResults } from './search.types';

@Injectable()
export class SearchService {
  constructor(private readonly db: DatabaseService) {}

  async globalSearch(input: SearchInput): Promise<SearchResults> {
    const { query, limit = 20 } = input;
    const searchTerm = `%${query.toLowerCase()}%`;

    const [monsters, weapons, items] = await Promise.all([
      this.searchMonsters(searchTerm, Math.floor(limit / 3)),
      this.searchWeapons(searchTerm, Math.floor(limit / 3)),
      this.searchItems(searchTerm, Math.floor(limit / 3))
    ]);

    return {
      monsters: monsters.slice(0, 5), // 限制每类最多5个结果
      weapons: weapons.slice(0, 5),
      items: items.slice(0, 5),
      total: monsters.length + weapons.length + items.length
    };
  }

  private async searchMonsters(searchTerm: string, limit: number) {
    return this.db.monster.findMany({
      where: {
        OR: [
          { name: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } },
          { species: { contains: searchTerm, mode: 'insensitive' } }
        ]
      },
      take: limit,
      orderBy: { name: 'asc' }
    });
  }

  private async searchWeapons(searchTerm: string, limit: number) {
    return this.db.weapon.findMany({
      where: {
        OR: [
          { name: { contains: searchTerm, mode: 'insensitive' } },
          { type: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } }
        ]
      },
      take: limit,
      orderBy: { name: 'asc' }
    });
  }

  private async searchItems(searchTerm: string, limit: number) {
    return this.db.item.findMany({
      where: {
        OR: [
          { name: { contains: searchTerm, mode: 'insensitive' } },
          { description: { contains: searchTerm, mode: 'insensitive' } },
          { category: { contains: searchTerm, mode: 'insensitive' } }
        ]
      },
      take: limit,
      orderBy: { name: 'asc' }
    });
  }
}
```

### 3. GraphQL Schema定义

```typescript
// apps/backend/src/search/search.types.ts
import { ObjectType, Field, InputType, Int } from '@nestjs/graphql';
import { Monster } from '../monsters/entities/monster.entity';
import { Weapon } from '../weapons/entities/weapon.entity';
import { Item } from '../items/entities/item.entity';

@InputType()
export class SearchInput {
  @Field()
  query: string;

  @Field(() => Int, { nullable: true, defaultValue: 20 })
  limit?: number;
}

@ObjectType()
export class SearchResults {
  @Field(() => [Monster])
  monsters: Monster[];

  @Field(() => [Weapon])
  weapons: Weapon[];

  @Field(() => [Item])
  items: Item[];

  @Field(() => Int)
  total: number;
}
```

---

## 🎨 **前端实现 (Next.js + Apollo Client)**

### 1. 全局搜索组件

```tsx
// apps/frontend/src/components/search/GlobalSearchBar.tsx
'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { useLazyQuery } from '@apollo/client';
import { Search, X } from 'lucide-react';
import { GLOBAL_SEARCH } from '@/lib/queries/search';
import { useDebounce } from '@/hooks/useDebounce';
import { SearchSuggestions } from './SearchSuggestions';

interface GlobalSearchBarProps {
  placeholder?: string;
  className?: string;
}

export function GlobalSearchBar({ 
  placeholder = "搜索怪物、武器、物品...", 
  className = "" 
}: GlobalSearchBarProps) {
  const [query, setQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const debouncedQuery = useDebounce(query, 300);

  const [searchGlobal, { data, loading }] = useLazyQuery(GLOBAL_SEARCH, {
    variables: { input: { query: debouncedQuery, limit: 15 } },
    skip: debouncedQuery.length < 2
  });

  const suggestions = useMemo(() => {
    if (!data?.globalSearch) return null;
    return data.globalSearch;
  }, [data]);

  const handleSearch = (searchQuery: string) => {
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setIsOpen(false);
      setQuery('');
    }
  };

  const handleInputChange = (value: string) => {
    setQuery(value);
    setIsOpen(value.length > 0);
    
    if (value.length >= 2) {
      searchGlobal();
    }
  };

  return (
    <div className={`relative ${className}`}>
      {/* 搜索输入框 */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
        <input
          type="text"
          value={query}
          onChange={(e) => handleInputChange(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch(query)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        {query && (
          <button
            onClick={() => {
              setQuery('');
              setIsOpen(false);
            }}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 搜索建议下拉 */}
      {isOpen && (
        <SearchSuggestions
          suggestions={suggestions}
          loading={loading}
          onSelect={(item, type) => {
            router.push(`/${type}s/${item.id}`);
            setIsOpen(false);
            setQuery('');
          }}
          onSearchAll={() => handleSearch(query)}
          query={query}
        />
      )}
    </div>
  );
}
```

### 2. 搜索建议组件

```tsx
// apps/frontend/src/components/search/SearchSuggestions.tsx
'use client';

import { SearchResults } from '@/types/search';
import { Monster, Weapon, Item } from '@/types';
import { Loader2 } from 'lucide-react';

interface SearchSuggestionsProps {
  suggestions: SearchResults | null;
  loading: boolean;
  onSelect: (item: Monster | Weapon | Item, type: 'monster' | 'weapon' | 'item') => void;
  onSearchAll: () => void;
  query: string;
}

export function SearchSuggestions({
  suggestions,
  loading,
  onSelect,
  onSearchAll,
  query
}: SearchSuggestionsProps) {
  if (loading) {
    return (
      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
        <div className="flex items-center justify-center">
          <Loader2 className="w-4 h-4 animate-spin mr-2" />
          <span className="text-gray-500">搜索中...</span>
        </div>
      </div>
    );
  }

  if (!suggestions || suggestions.total === 0) {
    return (
      <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4">
        <p className="text-gray-500 text-center">没有找到相关结果</p>
      </div>
    );
  }

  return (
    <div className="absolute top-full left-0 right-0 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto">
      {/* 怪物结果 */}
      {suggestions.monsters.length > 0 && (
        <div className="p-2">
          <h4 className="text-sm font-medium text-gray-700 px-2 py-1">怪物</h4>
          {suggestions.monsters.map((monster) => (
            <button
              key={monster.id}
              onClick={() => onSelect(monster, 'monster')}
              className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded flex items-center"
            >
              <span className="text-red-500 mr-2">🐲</span>
              <div>
                <div className="font-medium">{monster.name}</div>
                <div className="text-sm text-gray-500">{monster.species}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 武器结果 */}
      {suggestions.weapons.length > 0 && (
        <div className="p-2 border-t">
          <h4 className="text-sm font-medium text-gray-700 px-2 py-1">武器</h4>
          {suggestions.weapons.map((weapon) => (
            <button
              key={weapon.id}
              onClick={() => onSelect(weapon, 'weapon')}
              className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded flex items-center"
            >
              <span className="text-blue-500 mr-2">⚔️</span>
              <div>
                <div className="font-medium">{weapon.name}</div>
                <div className="text-sm text-gray-500">{weapon.type}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 物品结果 */}
      {suggestions.items.length > 0 && (
        <div className="p-2 border-t">
          <h4 className="text-sm font-medium text-gray-700 px-2 py-1">物品</h4>
          {suggestions.items.map((item) => (
            <button
              key={item.id}
              onClick={() => onSelect(item, 'item')}
              className="w-full text-left px-2 py-2 hover:bg-gray-100 rounded flex items-center"
            >
              <span className="text-green-500 mr-2">🎒</span>
              <div>
                <div className="font-medium">{item.name}</div>
                <div className="text-sm text-gray-500">{item.category}</div>
              </div>
            </button>
          ))}
        </div>
      )}

      {/* 查看所有结果 */}
      <div className="p-2 border-t">
        <button
          onClick={onSearchAll}
          className="w-full text-center py-2 text-blue-600 hover:bg-blue-50 rounded font-medium"
        >
          查看所有 "{query}" 的搜索结果 ({suggestions.total})
        </button>
      </div>
    </div>
  );
}
```

### 3. GraphQL查询定义

```typescript
// apps/frontend/src/lib/queries/search.ts
import { gql } from '@apollo/client';

export const GLOBAL_SEARCH = gql`
  query GlobalSearch($input: SearchInput!) {
    globalSearch(input: $input) {
      monsters {
        id
        name
        species
        description
      }
      weapons {
        id
        name
        type
        attack
        rarity
      }
      items {
        id
        name
        category
        description
      }
      total
    }
  }
`;
```

### 4. 防抖Hook

```typescript
// apps/frontend/src/hooks/useDebounce.ts
import { useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
```

---

## 🔧 **集成到现有导航**

### 更新Navigation组件

```tsx
// apps/frontend/src/components/Navigation.tsx
import { GlobalSearchBar } from './search/GlobalSearchBar';

export function Navigation() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-gray-800">
            MHWildsWiki
          </Link>

          {/* 搜索框 */}
          <div className="flex-1 max-w-md mx-8">
            <GlobalSearchBar />
          </div>

          {/* 导航链接 */}
          <div className="flex space-x-6">
            {/* 现有导航项 */}
          </div>
        </div>
      </div>
    </nav>
  );
}
```

---

## 📱 **移动端优化**

```tsx
// 响应式搜索组件
export function ResponsiveSearchBar() {
  const [isMobileSearchOpen, setIsMobileSearchOpen] = useState(false);

  return (
    <>
      {/* 桌面端搜索框 */}
      <div className="hidden md:block flex-1 max-w-md mx-8">
        <GlobalSearchBar />
      </div>

      {/* 移动端搜索按钮 */}
      <button
        onClick={() => setIsMobileSearchOpen(true)}
        className="md:hidden p-2 rounded-lg hover:bg-gray-100"
      >
        <Search className="w-5 h-5" />
      </button>

      {/* 移动端搜索模态框 */}
      {isMobileSearchOpen && (
        <div className="fixed inset-0 bg-white z-50 md:hidden">
          <div className="p-4">
            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => setIsMobileSearchOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex-1">
                <GlobalSearchBar placeholder="搜索..." />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
```

---

## ⚡ **性能优化建议**

1. **数据库索引**: 为搜索字段添加全文索引
2. **搜索缓存**: 使用Redis缓存热门搜索结果
3. **分页加载**: 搜索结果支持无限滚动
4. **搜索统计**: 记录搜索热词用于优化

这个实现指南基于当前项目的技术栈，可以直接集成到现有架构中，提供流畅的全局搜索体验。
