'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// 物品数据
const items = [
  {
    id: 'herb',
    name: '药草',
    nameEn: 'Herb',
    icon: '🌿',
    rarity: 1,
    type: '消耗品',
    category: '回复道具',
    description: '最基础的回复道具，可以恢复少量生命值',
    effect: '回复生命值 +25',
    stackSize: 10,
    sellPrice: 2
  },
  {
    id: 'potion',
    name: '回复药',
    nameEn: 'Potion',
    icon: '🧪',
    rarity: 1,
    type: '消耗品',
    category: '回复道具',
    description: '调和后的回复道具，回复效果比药草更好',
    effect: '回复生命值 +50',
    stackSize: 10,
    sellPrice: 8
  },
  {
    id: 'mega-potion',
    name: '回复药G',
    nameEn: 'Mega Potion',
    icon: '💊',
    rarity: 2,
    type: '消耗品',
    category: '回复道具',
    description: '强化版回复药，可以大幅回复生命值',
    effect: '回复生命值 +150',
    stackSize: 10,
    sellPrice: 36
  },
  {
    id: 'max-potion',
    name: '回复药MAX',
    nameEn: 'Max Potion',
    icon: '🏺',
    rarity: 3,
    type: '消耗品',
    category: '回复道具',
    description: '最强回复药，完全回复生命值并提升上限',
    effect: '生命值完全回复+上限提升',
    stackSize: 5,
    sellPrice: 120
  },
  {
    id: 'antidote',
    name: '解毒草',
    nameEn: 'Antidote',
    icon: '🍀',
    rarity: 1,
    type: '消耗品',
    category: '状态道具',
    description: '能够解除毒状态的自然草药',
    effect: '解除毒状态',
    stackSize: 10,
    sellPrice: 5
  },
  {
    id: 'demon-drug',
    name: '鬼人药',
    nameEn: 'Demon Drug',
    icon: '🔴',
    rarity: 2,
    type: '消耗品',
    category: '强化道具',
    description: '提升攻击力的强化药剂',
    effect: '攻击力 +5（持续到晕厥）',
    stackSize: 10,
    sellPrice: 48
  },
  {
    id: 'armor-skin',
    name: '硬化药',
    nameEn: 'Armor Skin',
    icon: '🔵',
    rarity: 2,
    type: '消耗品',
    category: '强化道具',
    description: '提升防御力的强化药剂',
    effect: '防御力 +20（持续到晕厥）',
    stackSize: 10,
    sellPrice: 48
  },
  {
    id: 'rathalos-scale',
    name: '火龙鳞片',
    nameEn: 'Rathalos Scale',
    icon: '🔥',
    rarity: 4,
    type: '素材',
    category: '怪物素材',
    description: '火龙身上剥取的美丽鳞片，制作装备的重要材料',
    effect: '制作素材',
    stackSize: 99,
    sellPrice: 180
  },
  {
    id: 'rathalos-ruby',
    name: '火龙红玉',
    nameEn: 'Rathalos Ruby',
    icon: '💎',
    rarity: 7,
    type: '素材',
    category: '珍稀素材',
    description: '极其稀有的火龙结晶，拥有神秘的力量',
    effect: '高级制作素材',
    stackSize: 99,
    sellPrice: 8000
  },
  {
    id: 'iron-ore',
    name: '铁矿石',
    nameEn: 'Iron Ore',
    icon: '⚫',
    rarity: 1,
    type: '素材',
    category: '矿物',
    description: '最基础的矿物材料，武器制作的基本材料',
    effect: '制作素材',
    stackSize: 99,
    sellPrice: 8
  },
  {
    id: 'machalite-ore',
    name: '燕雀石',
    nameEn: 'Machalite Ore',
    icon: '🟤',
    rarity: 2,
    type: '素材',
    category: '矿物',
    description: '中级矿物材料，制作更强武器的必需品',
    effect: '制作素材',
    stackSize: 99,
    sellPrice: 32
  },
  {
    id: 'trap-tool',
    name: '陷阱工具',
    nameEn: 'Trap Tool',
    icon: '🪤',
    rarity: 2,
    type: '道具',
    category: '狩猎道具',
    description: '制作各种陷阱的基础工具',
    effect: '制作陷阱用',
    stackSize: 10,
    sellPrice: 200
  },
  {
    id: 'tranq-bomb',
    name: '麻醉投掷刀',
    nameEn: 'Tranq Bomb',
    icon: '💣',
    rarity: 2,
    type: '道具',
    category: '狩猎道具',
    description: '能使怪物麻醉的投掷道具，捕获时必需',
    effect: '麻醉怪物',
    stackSize: 8,
    sellPrice: 75
  }
];

const itemTypes = ['全部', '消耗品', '素材', '道具'];
const categories = ['全部', '回复道具', '状态道具', '强化道具', '怪物素材', '珍稀素材', '矿物', '狩猎道具'];
const rarities = ['全部', '1', '2', '3', '4', '5', '6', '7'];

// 获取稀有度颜色
const getRarityColor = (rarity: number) => {
  if (rarity <= 2) return 'text-gray-600 bg-gray-100';
  if (rarity <= 4) return 'text-green-600 bg-green-100';
  if (rarity <= 6) return 'text-blue-600 bg-blue-100';
  return 'text-purple-600 bg-purple-100';
};

// 获取类型颜色
const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    '消耗品': 'text-green-600 bg-green-100',
    '素材': 'text-blue-600 bg-blue-100',
    '道具': 'text-purple-600 bg-purple-100'
  };
  return colors[type] || 'text-gray-600 bg-gray-100';
};

export default function ItemsPage() {
  const [selectedType, setSelectedType] = useState('全部');
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedRarity, setSelectedRarity] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredItems = useMemo(() => {
    return items.filter(item => {
      const matchesType = selectedType === '全部' || item.type === selectedType;
      const matchesCategory = selectedCategory === '全部' || item.category === selectedCategory;
      const matchesRarity = selectedRarity === '全部' || item.rarity.toString() === selectedRarity;
      const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           item.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesType && matchesCategory && matchesRarity && matchesSearch;
    });
  }, [selectedType, selectedCategory, selectedRarity, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <span className="text-4xl">🎒</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">物品库</h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto mb-8">
              查找《怪物猎人：荒野》中的所有物品、材料和道具的详细信息
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">{items.length}</div>
                <div className="text-purple-200">物品总数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{new Set(items.map(i => i.type)).size}</div>
                <div className="text-purple-200">物品类型</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{new Set(items.map(i => i.category)).size}</div>
                <div className="text-purple-200">分类数量</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{Math.max(...items.map(i => i.rarity))}</div>
                <div className="text-purple-200">最高稀有</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 筛选和搜索区域 */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* 搜索框 */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-lg"
                placeholder="搜索物品名称..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 筛选器 */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* 类型筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">物品类型</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {itemTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* 分类筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">物品分类</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* 稀有度筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">稀有度</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
              >
                {rarities.map(rarity => (
                  <option key={rarity} value={rarity}>{rarity === '全部' ? rarity : `${rarity}星`}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 结果统计 */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              找到 <span className="font-semibold text-purple-600">{filteredItems.length}</span> 个物品
            </p>
          </div>
        </div>
      </section>

      {/* 物品列表 */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredItems.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">未找到匹配的物品</h3>
              <p className="text-gray-600">尝试调整筛选条件或搜索关键词</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredItems.map((item) => (
                <Link
                  key={item.id}
                  href={`/items/${item.id}`}
                  className="group block"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-gray-200/60 hover:border-gray-300/60 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                    {/* 物品图标区域 */}
                    <div className="relative h-24 bg-gradient-to-br from-purple-100 to-indigo-100 flex items-center justify-center">
                      <div className="text-4xl">{item.icon}</div>
                      <div className="absolute top-2 right-2">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${getRarityColor(item.rarity)}`}>
                          {item.rarity}★
                        </span>
                      </div>
                    </div>

                    {/* 物品信息 */}
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors truncate">
                            {item.name}
                          </h3>
                          <p className="text-xs text-gray-500 truncate">{item.nameEn}</p>
                        </div>
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(item.type)} ml-2`}>
                          {item.type}
                        </span>
                      </div>

                      <p className="text-gray-600 text-sm mb-3 leading-relaxed line-clamp-2">
                        {item.description}
                      </p>

                      {/* 效果 */}
                      <div className="mb-3">
                        <div className="text-xs text-purple-600 font-medium bg-purple-50 px-2 py-1 rounded">
                          {item.effect}
                        </div>
                      </div>

                      {/* 堆叠数量和价格 */}
                      <div className="flex items-center justify-between text-sm">
                        <div className="flex items-center text-gray-500">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                          </svg>
                          ×{item.stackSize}
                        </div>
                        <div className="flex items-center text-yellow-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                          </svg>
                          {item.sellPrice}z
                        </div>
                      </div>

                      <div className="mt-3 flex items-center justify-between">
                        <div className="text-xs text-gray-500">
                          {item.category}
                        </div>
                        <div className="flex items-center text-purple-600 font-medium group-hover:text-purple-700 transition-colors">
                          <span className="text-xs">详情</span>
                          <svg className="w-3 h-3 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 物品获取指南 */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              物品获取指南
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              了解不同类型物品的主要获取方式
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🌿</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">采集获得</h3>
              <p className="text-gray-600 text-sm">在野外采集点获取各种植物和矿物材料</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">狩猎奖励</h3>
              <p className="text-gray-600 text-sm">击败怪物后获得珍贵的怪物素材</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">🛒</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">商店购买</h3>
              <p className="text-gray-600 text-sm">从各个商店购买基础消耗品和道具</p>
            </div>

            <div className="text-center p-6 bg-white rounded-2xl shadow-lg">
              <div className="text-4xl mb-4">⚗️</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">调合制作</h3>
              <p className="text-gray-600 text-sm">通过调合系统制作更强力的道具</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
