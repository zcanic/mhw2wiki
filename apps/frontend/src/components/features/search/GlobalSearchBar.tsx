'use client';

import { useState, useRef, useEffect } from 'react';
import { Input } from '../../ui/Input';
import { Card } from '../../ui/Card';
import { Badge } from '../../ui/Badge';
import { LoadingSpinner } from '../../ui/Loading';

interface SearchResult {
  id: string;
  type: 'monster' | 'weapon' | 'armor' | 'item';
  name: string;
  nameZh?: string;
  description?: string;
  rarity?: number;
  href: string;
}

interface GlobalSearchBarProps {
  className?: string;
  placeholder?: string;
  autoFocus?: boolean;
}

export function GlobalSearchBar({ 
  className = '', 
  placeholder = '搜索怪物、武器、装备、物品...',
  autoFocus = false 
}: GlobalSearchBarProps) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(-1);
  
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // 搜索结果类型配置
  const typeConfig = {
    monster: { label: '怪物', color: 'red', icon: '🐲' },
    weapon: { label: '武器', color: 'blue', icon: '⚔️' },
    armor: { label: '防具', color: 'green', icon: '🛡️' },
    item: { label: '物品', color: 'purple', icon: '🎒' }
  };

  // 模拟搜索API调用 - 在真实项目中会调用后端API
  const performSearch = async (searchQuery: string): Promise<SearchResult[]> => {
    if (!searchQuery.trim()) return [];
    
    // 模拟延迟
    await new Promise(resolve => setTimeout(resolve, 200));
    
    // 模拟搜索结果 - 实际实现会调用静态数据API
    const mockResults: SearchResult[] = [
      {
        id: '1',
        type: 'monster' as const,
        name: 'Rathalos',
        nameZh: '火龙',
        description: '森林之王，红色火龙',
        rarity: 5,
        href: '/monsters/1'
      },
      {
        id: '2', 
        type: 'weapon' as const,
        name: 'Rathalos Sword',
        nameZh: '火龙剑',
        description: '由火龙素材制作的大剑',
        rarity: 6,
        href: '/weapons/2'
      },
      {
        id: '3',
        type: 'item' as const,
        name: 'Fire Sac',
        nameZh: '火焰袋',
        description: '火龙的火焰器官',
        rarity: 4,
        href: '/items/3'
      }
    ].filter(item => 
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (item.nameZh && item.nameZh.includes(searchQuery))
    );

    return mockResults;
  };

  // 防抖搜索
  useEffect(() => {
    const timeoutId = setTimeout(async () => {
      if (query.trim()) {
        setIsLoading(true);
        try {
          const searchResults = await performSearch(query);
          setResults(searchResults);
          setIsOpen(true);
          setSelectedIndex(-1);
        } catch (error) {
          console.error('搜索失败:', error);
          setResults([]);
        } finally {
          setIsLoading(false);
        }
      } else {
        setResults([]);
        setIsOpen(false);
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [query]);

  // 点击外部关闭搜索结果
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSelectedIndex(-1);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 键盘导航
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen || results.length === 0) return;

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev < results.length - 1 ? prev + 1 : 0
        );
        break;
      case 'ArrowUp':
        e.preventDefault();
        setSelectedIndex(prev => 
          prev > 0 ? prev - 1 : results.length - 1
        );
        break;
      case 'Enter':
        e.preventDefault();
        if (selectedIndex >= 0 && selectedIndex < results.length) {
          const selectedResult = results[selectedIndex];
          if (selectedResult) {
            window.location.href = selectedResult.href;
          }
        }
        break;
      case 'Escape':
        setIsOpen(false);
        setSelectedIndex(-1);
        inputRef.current?.blur();
        break;
    }
  };

  return (
    <div ref={searchRef} className={`relative ${className}`}>
      <div className="relative">
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (results.length > 0) setIsOpen(true);
          }}
          placeholder={placeholder}
          autoFocus={autoFocus}
          className="w-full pl-10 pr-4"
          aria-label="全局搜索"
          aria-expanded={isOpen}
          aria-haspopup="listbox"
          aria-owns={isOpen ? 'search-results' : undefined}
        />
        
        {/* 搜索图标 */}
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
          {isLoading ? (
            <LoadingSpinner size="sm" />
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )}
        </div>
      </div>

      {/* 搜索结果下拉列表 */}
      {isOpen && (
        <Card className="absolute top-full left-0 right-0 mt-2 max-h-96 overflow-y-auto z-50 shadow-lg">
          {results.length > 0 ? (
            <div id="search-results" role="listbox" aria-label="搜索结果">
              {results.map((result, index) => {
                const config = typeConfig[result.type];
                const isSelected = index === selectedIndex;
                
                return (
                  <div
                    key={result.id}
                    role="option"
                    aria-selected={isSelected}
                    className={`
                      flex items-center space-x-3 p-3 cursor-pointer transition-colors duration-150
                      ${isSelected 
                        ? 'bg-primary-50 border-l-4 border-primary-500' 
                        : 'hover:bg-gray-50 border-l-4 border-transparent'
                      }
                    `}
                    onClick={() => window.location.href = result.href}
                    onMouseEnter={() => setSelectedIndex(index)}
                  >
                    <span className="text-xl flex-shrink-0">{config.icon}</span>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-medium text-gray-900 truncate">
                          {result.nameZh || result.name}
                        </h4>
                        <Badge variant={config.color as any} size="sm">
                          {config.label}
                        </Badge>
                        {result.rarity && (
                          <div className="flex items-center space-x-1">
                            {Array.from({ length: result.rarity }, (_, i) => (
                              <span key={i} className="text-yellow-400 text-xs">★</span>
                            ))}
                          </div>
                        )}
                      </div>
                      {result.description && (
                        <p className="text-sm text-gray-600 truncate mt-1">
                          {result.description}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : query.trim() && !isLoading ? (
            <div className="p-6 text-center text-gray-500">
              <svg className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p>未找到相关结果</p>
              <p className="text-xs mt-1">尝试使用其他关键词搜索</p>
            </div>
          ) : null}
        </Card>
      )}
    </div>
  );
}
