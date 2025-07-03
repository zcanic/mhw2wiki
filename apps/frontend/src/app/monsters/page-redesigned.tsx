'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// 简化的怪物数据
const monsters = [
  {
    id: '1',
    name: 'Rathalos',
    nameZh: '火龙',
    species: '飞龙种',
    threatLevel: 8,
    habitat: '森林',
    description: '森林之王，以其强力的火焰攻击和飞行能力著称。是众多猎人的试金石。',
    rarity: 8,
    weaknesses: ['水', '龙'],
    resistances: ['火'],
    icon: '🔥🐲'
  },
  {
    id: '2',
    name: 'Diablos',
    nameZh: '角龙',
    species: '飞龙种',
    threatLevel: 7,
    habitat: '沙漠',
    description: '沙漠霸主，拥有巨大的双角和强力的冲撞攻击。在地下穿行如履平地。',
    rarity: 7,
    weaknesses: ['冰', '水'],
    resistances: ['火', '雷'],
    icon: '💨🦏'
  },
  {
    id: '3',
    name: 'Anjanath',
    nameZh: '蛮颚龙',
    species: '兽龙种',
    threatLevel: 6,
    habitat: '古代树森林',
    description: '凶猛的肉食龙，以其强力的颚部攻击和火焰喷射著称。性格暴躁好斗。',
    rarity: 6,
    weaknesses: ['水', '雷'],
    resistances: ['火'],
    icon: '🔥🦖'
  },
  {
    id: '4',
    name: 'Legiana',
    nameZh: '风漂龙',
    species: '飞龙种',
    threatLevel: 5,
    habitat: '珊瑚台地',
    description: '优雅的冰属性飞龙，能够操控冰雪。翅膀美丽如薄冰。',
    rarity: 5,
    weaknesses: ['火', '雷'],
    resistances: ['冰', '水'],
    icon: '❄️🦅'
  },
  {
    id: '5',
    name: 'Great Jagras',
    nameZh: '大凶豺龙',
    species: '牙龙种',
    threatLevel: 3,
    habitat: '古代树森林',
    description: '群居型怪物的首领，会吞噬其他小型怪物来增强自身。是新手猎人的首个目标。',
    rarity: 3,
    weaknesses: ['火', '雷'],
    resistances: [],
    icon: '🟤🦎'
  },
  {
    id: '6',
    name: 'Zinogre',
    nameZh: '雷狼龙',
    species: '牙龙种',
    threatLevel: 9,
    habitat: '瘴气之谷',
    description: '雷电的化身，能够积蓄并释放强大的雷电攻击。被称为雷狼。',
    rarity: 9,
    weaknesses: ['冰'],
    resistances: ['雷', '龙'],
    icon: '⚡🐺'
  }
];

const speciesColors = {
  '飞龙种': { bg: 'bg-blue-100', text: 'text-blue-800', border: 'border-blue-200' },
  '兽龙种': { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' },
  '牙龙种': { bg: 'bg-purple-100', text: 'text-purple-800', border: 'border-purple-200' },
};

const getThreatColor = (level: number) => {
  if (level >= 8) return { bg: 'bg-red-100', text: 'text-red-800', border: 'border-red-200' };
  if (level >= 6) return { bg: 'bg-orange-100', text: 'text-orange-800', border: 'border-orange-200' };
  if (level >= 4) return { bg: 'bg-yellow-100', text: 'text-yellow-800', border: 'border-yellow-200' };
  return { bg: 'bg-green-100', text: 'text-green-800', border: 'border-green-200' };
};

export default function MonstersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [sortBy, setSortBy] = useState('threatLevel');

  const filteredMonsters = useMemo(() => {
    let filtered = monsters;

    // 搜索过滤
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(monster => 
        monster.nameZh.includes(query) ||
        monster.name.toLowerCase().includes(query) ||
        monster.habitat.includes(query) ||
        monster.species.includes(query)
      );
    }

    // 种族过滤
    if (selectedSpecies) {
      filtered = filtered.filter(monster => monster.species === selectedSpecies);
    }

    // 排序
    filtered.sort((a, b) => {
      if (sortBy === 'threatLevel') return b.threatLevel - a.threatLevel;
      if (sortBy === 'name') return a.nameZh.localeCompare(b.nameZh);
      if (sortBy === 'rarity') return b.rarity - a.rarity;
      return 0;
    });

    return filtered;
  }, [searchQuery, selectedSpecies, sortBy]);

  const uniqueSpecies = [...new Set(monsters.map(m => m.species))];
  const stats = {
    total: monsters.length,
    filtered: filteredMonsters.length,
    avgThreat: Math.round(filteredMonsters.reduce((sum, m) => sum + m.threatLevel, 0) / filteredMonsters.length || 0)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* 页面头部 */}
      <div className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-8 max-w-6xl">
          <div className="flex items-center justify-between">
            <div>
              <nav className="text-sm text-gray-500 mb-2">
                <Link href="/" className="hover:text-gray-700">首页</Link>
                <span className="mx-2">/</span>
                <span className="text-gray-900">怪物图鉴</span>
              </nav>
              <h1 className="text-4xl font-bold text-gray-900 mb-2">🐲 怪物图鉴</h1>
              <p className="text-lg text-gray-600">探索《怪物猎人：荒野》中的强大生物</p>
            </div>
            <div className="hidden md:flex items-center space-x-4">
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-blue-600">{stats.total}</div>
                <div className="text-sm text-gray-500">总数量</div>
              </div>
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-green-600">{stats.filtered}</div>
                <div className="text-sm text-gray-500">显示中</div>
              </div>
              <div className="text-center px-4">
                <div className="text-2xl font-bold text-orange-600">{stats.avgThreat}</div>
                <div className="text-sm text-gray-500">平均威胁</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* 搜索和筛选 */}
        <div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            {/* 搜索框 */}
            <div className="flex-1">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="搜索怪物名称、栖息地、种族..."
                  className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>

            {/* 种族筛选 */}
            <div className="lg:w-48">
              <select
                value={selectedSpecies}
                onChange={(e) => setSelectedSpecies(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">所有种族</option>
                {uniqueSpecies.map(species => (
                  <option key={species} value={species}>{species}</option>
                ))}
              </select>
            </div>

            {/* 排序 */}
            <div className="lg:w-48">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="threatLevel">威胁等级</option>
                <option value="name">名称</option>
                <option value="rarity">稀有度</option>
              </select>
            </div>
          </div>
        </div>

        {/* 怪物列表 */}
        {filteredMonsters.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMonsters.map((monster) => {
              const speciesStyle = speciesColors[monster.species as keyof typeof speciesColors] || speciesColors['飞龙种'];
              const threatStyle = getThreatColor(monster.threatLevel);
              
              return (
                <Link
                  key={monster.id}
                  href={`/monsters/${monster.id}`}
                  className="group"
                >
                  <div className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100 hover:border-gray-200 overflow-hidden">
                    {/* 怪物图标和威胁等级 */}
                    <div className="relative p-6 bg-gradient-to-br from-gray-50 to-gray-100 group-hover:from-blue-50 group-hover:to-purple-50 transition-all duration-300">
                      <div className="flex items-start justify-between mb-4">
                        <div className="text-4xl">{monster.icon}</div>
                        <div className={`px-3 py-1 rounded-full text-sm font-medium ${threatStyle.bg} ${threatStyle.text} ${threatStyle.border} border`}>
                          威胁 {monster.threatLevel}
                        </div>
                      </div>
                      
                      {/* 稀有度星级 */}
                      <div className="flex items-center space-x-1 mb-2">
                        {Array.from({ length: Math.min(monster.rarity, 5) }, (_, i) => (
                          <span key={i} className="text-yellow-400 text-lg">★</span>
                        ))}
                        <span className="text-sm text-gray-500 ml-2">稀有度 {monster.rarity}</span>
                      </div>
                    </div>

                    {/* 怪物信息 */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-200">
                          {monster.nameZh}
                        </h3>
                        <span className="text-sm text-gray-500">{monster.name}</span>
                      </div>

                      {/* 种族和栖息地 */}
                      <div className="flex items-center space-x-3 mb-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-medium ${speciesStyle.bg} ${speciesStyle.text} ${speciesStyle.border} border`}>
                          {monster.species}
                        </span>
                        <span className="text-sm text-gray-600 flex items-center">
                          <span className="mr-1">🌍</span>
                          {monster.habitat}
                        </span>
                      </div>

                      <p className="text-sm text-gray-600 leading-relaxed mb-4 line-clamp-3">
                        {monster.description}
                      </p>

                      {/* 弱点和抗性 */}
                      <div className="space-y-2 mb-4">
                        {monster.weaknesses.length > 0 && (
                          <div className="flex items-center text-sm">
                            <span className="text-gray-500 mr-2 min-w-0 shrink-0">弱点:</span>
                            <div className="flex flex-wrap gap-1">
                              {monster.weaknesses.map(weakness => (
                                <span key={weakness} className="px-2 py-1 bg-red-100 text-red-700 rounded text-xs">
                                  {weakness}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                        
                        {monster.resistances.length > 0 && (
                          <div className="flex items-center text-sm">
                            <span className="text-gray-500 mr-2 min-w-0 shrink-0">抗性:</span>
                            <div className="flex flex-wrap gap-1">
                              {monster.resistances.map(resistance => (
                                <span key={resistance} className="px-2 py-1 bg-green-100 text-green-700 rounded text-xs">
                                  {resistance}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>

                      {/* 底部操作 */}
                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <span className="text-sm text-gray-500">查看详情</span>
                        <div className="text-gray-400 group-hover:text-blue-600 group-hover:translate-x-1 transition-all duration-200">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-lg">
            <div className="text-6xl text-gray-300 mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">未找到匹配的怪物</h3>
            <p className="text-gray-600 mb-6">尝试调整搜索条件或筛选设置</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSpecies('');
              }}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:bg-blue-700 transition-all duration-300"
            >
              清除筛选条件
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
