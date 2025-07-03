import React, { useState } from 'react';
import { cn } from '../../lib/utils';
import { Button } from './Button';
import { Input } from './Input';
import { Badge } from './Badge';

interface FilterOption {
  id: string;
  label: string;
  value: any;
  count?: number;
}

interface FilterSection {
  id: string;
  title: string;
  type: 'checkbox' | 'radio' | 'range' | 'select';
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
}

interface DataFilterProps {
  sections: FilterSection[];
  onFiltersChange: (filters: Record<string, any>) => void;
  className?: string;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export function DataFilter({
  sections,
  onFiltersChange,
  className,
  collapsible = true,
  defaultCollapsed = false
}: DataFilterProps) {
  const [filters, setFilters] = useState<Record<string, any>>({});
  const [collapsedSections, setCollapsedSections] = useState<Set<string>>(
    new Set(defaultCollapsed ? sections.map(s => s.id) : [])
  );

  const updateFilter = (sectionId: string, value: any) => {
    const newFilters = { ...filters, [sectionId]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    setFilters({});
    onFiltersChange({});
  };

  const toggleSection = (sectionId: string) => {
    const newCollapsed = new Set(collapsedSections);
    if (newCollapsed.has(sectionId)) {
      newCollapsed.delete(sectionId);
    } else {
      newCollapsed.add(sectionId);
    }
    setCollapsedSections(newCollapsed);
  };

  const hasActiveFilters = Object.keys(filters).some(key => {
    const value = filters[key];
    return value !== undefined && value !== null && value !== '' && 
           (Array.isArray(value) ? value.length > 0 : true);
  });

  return (
    <div className={cn('bg-white rounded-lg border p-6', className)}>
      {/* 筛选器头部 */}
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900">筛选条件</h3>
        {hasActiveFilters && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-red-600 hover:text-red-700"
          >
            清除全部
          </Button>
        )}
      </div>

      {/* 活跃筛选器显示 */}
      {hasActiveFilters && (
        <div className="mb-4 p-3 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800 mb-2">当前筛选：</p>
          <div className="flex flex-wrap gap-2">
            {Object.entries(filters).map(([sectionId, value]) => {
              const section = sections.find(s => s.id === sectionId);
              if (!section || !value) return null;

              if (Array.isArray(value) && value.length > 0) {
                return value.map(v => (
                  <Badge
                    key={`${sectionId}-${v}`}
                    variant="default"
                    size="sm"
                    className="bg-blue-100 text-blue-800"
                  >
                    {section.options?.find(opt => opt.value === v)?.label || v}
                  </Badge>
                ));
              } else if (value) {
                return (
                  <Badge
                    key={sectionId}
                    variant="default"
                    size="sm"
                    className="bg-blue-100 text-blue-800"
                  >
                    {section.title}: {value}
                  </Badge>
                );
              }
              return null;
            })}
          </div>
        </div>
      )}

      {/* 筛选器部分 */}
      <div className="space-y-6">
        {sections.map((section) => {
          const isCollapsed = collapsedSections.has(section.id);
          
          return (
            <div key={section.id} className="border-b border-gray-200 pb-6 last:border-b-0">
              {/* 部分标题 */}
              <button
                onClick={() => collapsible && toggleSection(section.id)}
                className={cn(
                  'flex items-center justify-between w-full text-left mb-3',
                  collapsible ? 'cursor-pointer hover:text-gray-600' : 'cursor-default'
                )}
                aria-expanded={!isCollapsed}
              >
                <h4 className="font-medium text-gray-900">{section.title}</h4>
                {collapsible && (
                  <svg
                    className={cn(
                      'w-5 h-5 text-gray-400 transition-transform duration-200',
                      isCollapsed ? 'rotate-180' : ''
                    )}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                )}
              </button>

              {/* 部分内容 */}
              {(!collapsible || !isCollapsed) && (
                <div className="space-y-3">
                  {section.type === 'checkbox' && section.options && (
                    <div className="space-y-2">
                      {section.options.map((option) => {
                        const currentValues = filters[section.id] || [];
                        const isChecked = currentValues.includes(option.value);
                        
                        return (
                          <label
                            key={option.id}
                            className="flex items-center space-x-3 cursor-pointer group"
                          >
                            <input
                              type="checkbox"
                              checked={isChecked}
                              onChange={(e) => {
                                const newValues = e.target.checked
                                  ? [...currentValues, option.value]
                                  : currentValues.filter((v: any) => v !== option.value);
                                updateFilter(section.id, newValues);
                              }}
                              className="w-4 h-4 text-primary-600 border-gray-300 rounded focus:ring-primary-500"
                            />
                            <span className="text-sm text-gray-700 group-hover:text-gray-900">
                              {option.label}
                            </span>
                            {option.count !== undefined && (
                              <span className="text-xs text-gray-500">
                                ({option.count})
                              </span>
                            )}
                          </label>
                        );
                      })}
                    </div>
                  )}

                  {section.type === 'radio' && section.options && (
                    <div className="space-y-2">
                      {section.options.map((option) => (
                        <label
                          key={option.id}
                          className="flex items-center space-x-3 cursor-pointer group"
                        >
                          <input
                            type="radio"
                            name={section.id}
                            value={option.value}
                            checked={filters[section.id] === option.value}
                            onChange={() => updateFilter(section.id, option.value)}
                            className="w-4 h-4 text-primary-600 border-gray-300 focus:ring-primary-500"
                          />
                          <span className="text-sm text-gray-700 group-hover:text-gray-900">
                            {option.label}
                          </span>
                          {option.count !== undefined && (
                            <span className="text-xs text-gray-500">
                              ({option.count})
                            </span>
                          )}
                        </label>
                      ))}
                    </div>
                  )}

                  {section.type === 'range' && (
                    <div className="space-y-3">
                      <input
                        type="range"
                        min={section.min || 0}
                        max={section.max || 100}
                        step={section.step || 1}
                        value={filters[section.id] || section.min || 0}
                        onChange={(e) => updateFilter(section.id, parseInt(e.target.value))}
                        className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      />
                      <div className="flex justify-between text-xs text-gray-500">
                        <span>{section.min || 0}</span>
                        <span className="font-medium text-gray-700">
                          {filters[section.id] || section.min || 0}
                        </span>
                        <span>{section.max || 100}</span>
                      </div>
                    </div>
                  )}

                  {section.type === 'select' && section.options && (
                    <select
                      value={filters[section.id] || ''}
                      onChange={(e) => updateFilter(section.id, e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-primary-500 focus:border-primary-500"
                    >
                      <option value="">选择 {section.title}</option>
                      {section.options.map((option) => (
                        <option key={option.id} value={option.value}>
                          {option.label}
                          {option.count !== undefined && ` (${option.count})`}
                        </option>
                      ))}
                    </select>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

// 简化的搜索筛选器组件
interface SearchFilterProps {
  onSearch: (query: string) => void;
  onSort: (sortBy: string, sortOrder: 'asc' | 'desc') => void;
  placeholder?: string;
  sortOptions?: Array<{ value: string; label: string }>;
  className?: string;
}

export function SearchFilter({
  onSearch,
  onSort,
  placeholder = '搜索...',
  sortOptions = [
    { value: 'name', label: '名称' },
    { value: 'rarity', label: '稀有度' },
    { value: 'updated', label: '更新时间' }
  ],
  className
}: SearchFilterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    onSearch(query);
  };

  const handleSort = (newSortBy: string) => {
    const newSortOrder = sortBy === newSortBy && sortOrder === 'asc' ? 'desc' : 'asc';
    setSortBy(newSortBy);
    setSortOrder(newSortOrder);
    onSort(newSortBy, newSortOrder);
  };

  return (
    <div className={cn('flex flex-col sm:flex-row gap-4 items-center', className)}>
      {/* 搜索框 */}
      <div className="flex-1 w-full">
        <Input
          type="text"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder={placeholder}
          className="w-full"
        />
      </div>

      {/* 排序选项 */}
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600 whitespace-nowrap">排序：</span>
        <div className="flex space-x-1">
          {sortOptions.map((option) => (
            <Button
              key={option.value}
              variant={sortBy === option.value ? 'primary' : 'ghost'}
              size="sm"
              onClick={() => handleSort(option.value)}
              className="relative"
            >
              {option.label}
              {sortBy === option.value && (
                <span className="ml-1">
                  {sortOrder === 'asc' ? '↑' : '↓'}
                </span>
              )}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
