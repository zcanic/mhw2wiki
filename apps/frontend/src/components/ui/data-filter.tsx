import React, { useState, useMemo } from 'react';

export interface FilterOption {
  label: string;
  value: string | number;
  count?: number;
}

export interface FilterConfig<T> {
  key: keyof T;
  label: string;
  type: 'search' | 'select' | 'multi-select' | 'range' | 'boolean';
  options?: FilterOption[];
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

export interface FilterState {
  [key: string]: any;
}

interface DataFilterProps<T> {
  data: T[];
  filters: FilterConfig<T>[];
  onFilter: (filteredData: T[], activeFilters: FilterState) => void;
  className?: string;
  showFilterCount?: boolean;
}

export function DataFilter<T extends Record<string, any>>({
  data,
  filters,
  onFilter,
  className = '',
  showFilterCount = true,
}: DataFilterProps<T>) {
  const [filterState, setFilterState] = useState<FilterState>({});
  const [isCollapsed, setIsCollapsed] = useState(false);

  // 计算筛选后的数据
  const filteredData = useMemo(() => {
    let result = [...data];

    filters.forEach((filter) => {
      const filterValue = filterState[filter.key as string];
      
      if (!filterValue) return;

      switch (filter.type) {
        case 'search':
          if (typeof filterValue === 'string' && filterValue.trim()) {
            result = result.filter(item => {
              const value = item[filter.key];
              if (typeof value === 'string') {
                return value.toLowerCase().includes(filterValue.toLowerCase());
              }
              return false;
            });
          }
          break;

        case 'select':
          if (filterValue !== 'all') {
            result = result.filter(item => item[filter.key] === filterValue);
          }
          break;

        case 'multi-select':
          if (Array.isArray(filterValue) && filterValue.length > 0) {
            result = result.filter(item => filterValue.includes(item[filter.key]));
          }
          break;

        case 'range':
          if (Array.isArray(filterValue) && filterValue.length === 2) {
            const [min, max] = filterValue;
            result = result.filter(item => {
              const value = Number(item[filter.key]);
              return !isNaN(value) && value >= min && value <= max;
            });
          }
          break;

        case 'boolean':
          if (typeof filterValue === 'boolean') {
            result = result.filter(item => Boolean(item[filter.key]) === filterValue);
          }
          break;
      }
    });

    return result;
  }, [data, filterState, filters]);

  // 当筛选结果改变时调用回调
  React.useEffect(() => {
    onFilter(filteredData, filterState);
  }, [filteredData, filterState, onFilter]);

  // 更新筛选状态
  const updateFilter = (key: string, value: any) => {
    setFilterState(prev => ({
      ...prev,
      [key]: value
    }));
  };

  // 重置所有筛选
  const resetFilters = () => {
    setFilterState({});
  };

  // 获取活跃筛选数量
  const activeFilterCount = Object.values(filterState).filter(value => {
    if (Array.isArray(value)) return value.length > 0;
    if (typeof value === 'string') return value.trim() !== '';
    return value !== undefined && value !== null && value !== 'all';
  }).length;

  const renderFilterControl = (filter: FilterConfig<T>) => {
    const key = filter.key as string;
    const value = filterState[key];

    switch (filter.type) {
      case 'search':
        return (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700" htmlFor={key}>
              {filter.label}
            </label>
            <div className="relative">
              <input
                id={key}
                type="text"
                placeholder={filter.placeholder || `搜索${filter.label}...`}
                value={value || ''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter(key, e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        );

      case 'select':
        return (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {filter.label}
            </label>
            <select
              value={value || 'all'}
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) => updateFilter(key, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="all">全部</option>
              {filter.options?.map((option) => (
                <option key={option.value} value={String(option.value)}>
                  {option.label}
                  {option.count && ` (${option.count})`}
                </option>
              ))}
            </select>
          </div>
        );

      case 'multi-select':
        return (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {filter.label}
            </label>
            <div className="space-y-2 max-h-32 overflow-y-auto border border-gray-200 rounded p-2">
              {filter.options?.map((option) => (
                <div key={option.value} className="flex items-center space-x-2">
                  <input
                    id={`${key}-${option.value}`}
                    type="checkbox"
                    checked={Array.isArray(value) && value.includes(option.value)}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                      const currentValues = Array.isArray(value) ? value : [];
                      if (e.target.checked) {
                        updateFilter(key, [...currentValues, option.value]);
                      } else {
                        updateFilter(key, currentValues.filter(v => v !== option.value));
                      }
                    }}
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                  />
                  <label 
                    htmlFor={`${key}-${option.value}`}
                    className="text-sm text-gray-700 cursor-pointer"
                  >
                    {option.label}
                    {option.count && ` (${option.count})`}
                  </label>
                </div>
              ))}
            </div>
          </div>
        );

      case 'range':
        const min = filter.min || 0;
        const max = filter.max || 100;
        const currentRange = Array.isArray(value) ? value : [min, max];
        
        return (
          <div key={key} className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              {filter.label}
            </label>
            <div className="px-2">
              <input
                type="range"
                min={min}
                max={max}
                value={currentRange[0]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateFilter(key, [Number(e.target.value), currentRange[1]])
                }
                className="w-full"
              />
              <input
                type="range"
                min={min}
                max={max}
                value={currentRange[1]}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                  updateFilter(key, [currentRange[0], Number(e.target.value)])
                }
                className="w-full"
              />
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{currentRange[0]}</span>
                <span>{currentRange[1]}</span>
              </div>
            </div>
          </div>
        );

      case 'boolean':
        return (
          <div key={key} className="flex items-center space-x-2">
            <input
              id={key}
              type="checkbox"
              checked={Boolean(value)}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => updateFilter(key, e.target.checked)}
              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
            />
            <label htmlFor={key} className="text-sm text-gray-700 cursor-pointer">
              {filter.label}
            </label>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className={`border border-gray-200 rounded-lg p-4 bg-white ${className}`}>
      <div className="flex items-center justify-between mb-4">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.707A1 1 0 013 7V4z" />
          </svg>
          筛选器
          {activeFilterCount > 0 && (
            <span className="bg-blue-500 text-white text-xs px-2 py-0.5 rounded-full">
              {activeFilterCount}
            </span>
          )}
        </button>
        
        {activeFilterCount > 0 && (
          <button
            onClick={resetFilters}
            className="flex items-center gap-1 px-2 py-1 text-sm text-gray-500 hover:text-gray-700"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
            重置
          </button>
        )}
      </div>

      {!isCollapsed && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filters.map(renderFilterControl)}
          </div>
          
          {showFilterCount && (
            <div className="text-sm text-gray-500 pt-2 border-t border-gray-200">
              显示 {filteredData.length} / {data.length} 条结果
            </div>
          )}
        </div>
      )}
    </div>
  );
}
