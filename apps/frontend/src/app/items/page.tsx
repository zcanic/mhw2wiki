'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useState, useMemo } from 'react';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      category
      description
      rarity
      value
    }
  }
`;

interface Item {
  id: string;
  name: string;
  category: string;
  description: string;
  rarity: number;
  value: number;
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
          {item.category}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <span className="text-sm text-gray-600">价值</span>
          <p className="text-lg font-semibold text-green-600">{item.value}z</p>
        </div>
        <div>
          <span className="text-sm text-gray-600">稀有度</span>
          <p className="text-lg font-semibold text-yellow-600">★{item.rarity}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );
}

export default function ItemsPage() {
  const { loading, error, data } = useQuery(GET_ITEMS);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [rarityRange, setRarityRange] = useState<[number, number]>([1, 10]);
  const [valueRange, setValueRange] = useState<[number, number]>([0, 10000]);

  // Extract unique values and ranges
  const { categories, maxValue, maxRarity } = useMemo(() => {
    if (!data?.items) return { categories: [], maxValue: 10000, maxRarity: 10 };
    
    const categorySet = new Set(data.items.map((item: Item) => item.category).filter(Boolean));
    const values = data.items.map((item: Item) => item.value);
    const rarities = data.items.map((item: Item) => item.rarity);
    
    return {
      categories: Array.from(categorySet).sort(),
      maxValue: Math.max(...values, 10000),
      maxRarity: Math.max(...rarities, 10)
    };
  }, [data?.items]);

  // Apply filters to data
  const filteredItems = useMemo(() => {
    if (!data?.items) return [];
    
    return data.items.filter((item: Item) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          item.name.toLowerCase().includes(searchLower) ||
          item.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      
      // Category filter
      if (selectedCategory && item.category !== selectedCategory) {
        return false;
      }
      
      // Rarity filter
      if (item.rarity < rarityRange[0] || item.rarity > rarityRange[1]) {
        return false;
      }
      
      // Value filter
      if (item.value < valueRange[0] || item.value > valueRange[1]) {
        return false;
      }
      
      return true;
    });
  }, [data?.items, searchTerm, selectedCategory, rarityRange, valueRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedCategory('');
    setRarityRange([1, maxRarity]);
    setValueRange([0, maxValue]);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">物品图鉴</h1>
        <p className="text-gray-600">
          浏览所有可用的物品，包括价值、稀有度和用途信息
        </p>
      </div>

      {/* Filter Section */}
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">筛选条件</h2>
          <button
            onClick={resetFilters}
            className="text-sm text-blue-600 hover:text-blue-800 font-medium"
          >
            重置筛选
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {/* Search */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              搜索
            </label>
            <input
              type="text"
              placeholder="搜索物品名称或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Category */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              类别
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">所有类别</option>
              {categories.map(c => (
                <option key={String(c)} value={String(c)}>{String(c)}</option>
              ))}
            </select>
          </div>

          {/* Rarity Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              稀有度: ★{rarityRange[0]} - ★{rarityRange[1]}
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min={1}
                max={maxRarity}
                value={rarityRange[0]}
                onChange={(e) => setRarityRange([parseInt(e.target.value), rarityRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min={1}
                max={maxRarity}
                value={rarityRange[1]}
                onChange={(e) => setRarityRange([rarityRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>

          {/* Value Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              价值: {valueRange[0]}z - {valueRange[1]}z
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min={0}
                max={maxValue}
                step={10}
                value={valueRange[0]}
                onChange={(e) => setValueRange([parseInt(e.target.value), valueRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min={0}
                max={maxValue}
                step={10}
                value={valueRange[1]}
                onChange={(e) => setValueRange([valueRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Filter Results Info */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            显示 {filteredItems.length} 个物品
            {data?.items && filteredItems.length !== data.items.length && 
              ` (共 ${data.items.length} 个)`
            }
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredItems.map((item: Item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {filteredItems.length === 0 && data?.items && data.items.length > 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            没有找到符合条件的物品
          </h2>
          <p className="text-gray-500 mb-4">
            请尝试调整筛选条件或重置筛选
          </p>
          <button
            onClick={resetFilters}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            重置筛选
          </button>
        </div>
      )}

      {(!data?.items || data.items.length === 0) && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无物品数据</p>
        </div>
      )}
    </div>
  );
}
