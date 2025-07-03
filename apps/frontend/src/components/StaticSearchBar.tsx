'use client';

import { useState, useCallback, useMemo } from 'react';
import StaticDataAPI, { parseNames } from '../lib/static-data-api';
import { Input } from './ui/Input';
import { Card } from './ui/Card';
import { Badge } from './ui/Badge';
import { cn } from '../lib/utils';

interface SearchBarProps {
  onSearchResults?: (results: any[]) => void;
  placeholder?: string;
  className?: string;
}

export function StaticSearchBar({ 
  onSearchResults, 
  placeholder = "搜索怪物、武器、物品...",
  className = "" 
}: SearchBarProps) {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<any[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  // 实时搜索结果
  const searchResults = useMemo(() => {
    if (!query.trim()) return [];
    return StaticDataAPI.search(query.trim());
  }, [query]);

  // 处理搜索输入
  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
    setIsSearching(true);
    
    if (newQuery.trim()) {
      // 获取搜索建议（前5个结果）
      const results = StaticDataAPI.search(newQuery.trim());
      const topSuggestions = results.slice(0, 5);
      setSuggestions(topSuggestions);
      setShowSuggestions(true);
      
      // 通知父组件搜索结果
      onSearchResults?.(results);
    } else {
      setSuggestions([]);
      setShowSuggestions(false);
      onSearchResults?.([]);
    }
    
    setIsSearching(false);
  }, [onSearchResults]);

  const handleSuggestionClick = (suggestion: any) => {
    const name = parseNames(suggestion.names);
    setQuery(name);
    setShowSuggestions(false);
    const results = StaticDataAPI.search(name);
    onSearchResults?.(results);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false);
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'monster':
        return '🐲';
      case 'weapon':
        return '⚔️';
      case 'item':
        return '🎒';
      default:
        return '📄';
    }
  };

  const getTypeBadgeVariant = (type: string): 'monster' | 'weapon' | 'item' | 'default' => {
    switch (type) {
      case 'monster': return 'monster';
      case 'weapon': return 'weapon';
      case 'item': return 'item';
      default: return 'default';
    }
  };

  return (
    <div className={cn('relative', className)}>
      {/* 搜索输入框 */}
      <Input
        type="text"
        value={query}
        onChange={handleInputChange}
        onFocus={() => query && setShowSuggestions(true)}
        onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
        onKeyDown={handleKeyDown}
        placeholder={placeholder}
        leftIcon={
          isSearching ? (
            <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
          ) : (
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          )
        }
        rightIcon={query && (
          <button
            onClick={() => {
              setQuery('');
              setSuggestions([]);
              setShowSuggestions(false);
              onSearchResults?.([]);
            }}
            className="text-gray-400 hover:text-gray-600 transition-colors"
            aria-label="清除搜索"
          >
            <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        )}
        className="pl-10 pr-10"
      />

      {/* 搜索建议下拉列表 */}
      {showSuggestions && suggestions.length > 0 && (
        <Card className="absolute z-10 w-full mt-2 max-h-80 overflow-y-auto" padding="none">
          <div className="py-2">
            {suggestions.map((suggestion, index) => {
              const name = parseNames(suggestion.names);
              return (
                <button
                  key={`${suggestion.type}-${suggestion.id}`}
                  onClick={() => handleSuggestionClick(suggestion)}
                  className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none transition-colors flex items-center justify-between group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg">{getTypeIcon(suggestion.type)}</span>
                    <div>
                      <div className="font-medium text-gray-900 group-hover:text-primary-600 transition-colors">
                        {name}
                      </div>
                      {suggestion.descriptions && (
                        <div className="text-xs text-gray-500 line-clamp-1">
                          {parseNames(suggestion.descriptions).substring(0, 50)}...
                        </div>
                      )}
                    </div>
                  </div>
                  <Badge variant={getTypeBadgeVariant(suggestion.type)} size="sm">
                    {suggestion.type === 'monster' ? '怪物' : 
                     suggestion.type === 'weapon' ? '武器' : '物品'}
                  </Badge>
                </button>
              );
            })}
          </div>
        </Card>
      )}

      {/* 搜索结果统计 */}
      {query && (
        <div className="mt-3 flex items-center justify-between text-sm">
          <span className="text-gray-600">
            找到 <span className="font-semibold text-primary-600">{searchResults.length}</span> 个结果
          </span>
          {searchResults.length > 0 && (
            <span className="text-xs text-gray-400">
              按回车键查看全部结果
            </span>
          )}
        </div>
      )}
    </div>
  );
}
