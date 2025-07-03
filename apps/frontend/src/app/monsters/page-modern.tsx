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
    icon: '🔥🐲',
    image: '/monsters/rathalos.jpg'
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
    icon: '💨🦏',
    image: '/monsters/diablos.jpg'
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
    icon: '🔥🦖',
    image: '/monsters/anjanath.jpg'
  },
  {
    id: '4',
    name: 'Legiana',
    nameZh: '风漂龙',
    species: '飞龙种',
    threatLevel: 6,
    habitat: '珊瑚台地',
    description: '优雅的冰属性飞龙，能够操控冰雪进行攻击。飞行姿态如舞蹈般美丽。',
    rarity: 6,
    weaknesses: ['火', '雷'],
    resistances: ['冰', '水'],
    icon: '❄️🐉',
    image: '/monsters/legiana.jpg'
  },
  {
    id: '5',
    name: 'Zinogre',
    nameZh: '雷狼龙',
    species: '牙龙种',
    threatLevel: 8,
    habitat: '溶岩地带',
    description: '雷电属性的狼型怪物，能够蓄积雷电能量进行强力攻击。速度极快，攻击凶猛。',
    rarity: 8,
    weaknesses: ['冰'],
    resistances: ['雷', '龙'],
    icon: '⚡🐺',
    image: '/monsters/zinogre.jpg'
  },
  {
    id: '6',
    name: 'Tigrex',
    nameZh: '轰龙',
    species: '飞龙种',
    threatLevel: 7,
    habitat: '冰原',
    description: '古老的飞龙，以其震耳欲聋的咆哮和强力的冲锋攻击闻名。极具攻击性。',
    rarity: 7,
    weaknesses: ['雷', '龙'],
    resistances: [''],
    icon: '💥🦖',
    image: '/monsters/tigrex.jpg'
  }
];

const speciesTypes = ['全部', '飞龙种', '兽龙种', '牙龙种', '古龙种'];
const habitatTypes = ['全部', '森林', '沙漠', '珊瑚台地', '溶岩地带', '冰原'];
const threatLevels = ['全部', '1-3', '4-6', '7-8', '9-10'];

// 获取威胁等级颜色
const getThreatColor = (level: number) => {
  if (level <= 3) return 'text-green-600 bg-green-100';
  if (level <= 6) return 'text-yellow-600 bg-yellow-100';
  if (level <= 8) return 'text-orange-600 bg-orange-100';
  return 'text-red-600 bg-red-100';
};

// 获取物种颜色
const getSpeciesColor = (species: string) => {
  const colors: Record<string, string> = {
    '飞龙种': 'text-blue-600 bg-blue-100',
    '兽龙种': 'text-green-600 bg-green-100',
    '牙龙种': 'text-purple-600 bg-purple-100',
    '古龙种': 'text-red-600 bg-red-100'
  };
  return colors[species] || 'text-gray-600 bg-gray-100';
};

export default function MonstersPage() {
  const [selectedSpecies, setSelectedSpecies] = useState('全部');
  const [selectedHabitat, setSelectedHabitat] = useState('全部');
  const [selectedThreatLevel, setSelectedThreatLevel] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  const filteredMonsters = useMemo(() => {
    return monsters.filter(monster => {
      const matchesSpecies = selectedSpecies === '全部' || monster.species === selectedSpecies;
      const matchesHabitat = selectedHabitat === '全部' || monster.habitat === selectedHabitat;
      
      let matchesThreatLevel = true;
      if (selectedThreatLevel !== '全部') {
        const level = monster.threatLevel;
        switch (selectedThreatLevel) {
          case '1-3': matchesThreatLevel = level >= 1 && level <= 3; break;
          case '4-6': matchesThreatLevel = level >= 4 && level <= 6; break;
          case '7-8': matchesThreatLevel = level >= 7 && level <= 8; break;
          case '9-10': matchesThreatLevel = level >= 9 && level <= 10; break;
        }
      }
      
      const matchesSearch = monster.nameZh.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           monster.name.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesSpecies && matchesHabitat && matchesThreatLevel && matchesSearch;
    });
  }, [selectedSpecies, selectedHabitat, selectedThreatLevel, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-red-500 via-red-600 to-orange-500 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <span className="text-4xl">🐲</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">怪物图鉴</h1>
            <p className="text-xl text-red-100 max-w-3xl mx-auto mb-8">
              探索《怪物猎人：荒野》中的所有大型怪物，了解它们的弱点、习性和狩猎策略
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">{monsters.length}</div>
                <div className="text-red-200">大型怪物</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{new Set(monsters.map(m => m.species)).size}</div>
                <div className="text-red-200">物种类型</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{new Set(monsters.map(m => m.habitat)).size}</div>
                <div className="text-red-200">栖息地</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{Math.max(...monsters.map(m => m.threatLevel))}</div>
                <div className="text-red-200">最高威胁</div>
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
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500 text-lg"
                placeholder="搜索怪物名称..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 筛选器 */}
          <div className="flex flex-wrap gap-4 items-center justify-between">
            <div className="flex flex-wrap gap-4">
              {/* 物种筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">物种类型</label>
                <select
                  className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={selectedSpecies}
                  onChange={(e) => setSelectedSpecies(e.target.value)}
                >
                  {speciesTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* 栖息地筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">栖息地</label>
                <select
                  className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={selectedHabitat}
                  onChange={(e) => setSelectedHabitat(e.target.value)}
                >
                  {habitatTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>

              {/* 威胁等级筛选 */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">威胁等级</label>
                <select
                  className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-orange-500"
                  value={selectedThreatLevel}
                  onChange={(e) => setSelectedThreatLevel(e.target.value)}
                >
                  {threatLevels.map(level => (
                    <option key={level} value={level}>{level}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* 视图模式切换 */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'grid' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                </svg>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-lg transition-colors ${viewMode === 'list' ? 'bg-orange-500 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'}`}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>

          {/* 结果统计 */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              找到 <span className="font-semibold text-orange-600">{filteredMonsters.length}</span> 个怪物
            </p>
          </div>
        </div>
      </section>

      {/* 怪物列表 */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredMonsters.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">未找到匹配的怪物</h3>
              <p className="text-gray-600">尝试调整筛选条件或搜索关键词</p>
            </div>
          ) : (
            <div className={viewMode === 'grid' 
              ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-8' 
              : 'space-y-6'
            }>
              {filteredMonsters.map((monster) => (
                <Link
                  key={monster.id}
                  href={`/monsters/${monster.id}`}
                  className="group block"
                >
                  {viewMode === 'grid' ? (
                    <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/60 hover:border-gray-300/60 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                      {/* 怪物图像区域 */}
                      <div className="relative h-48 bg-gradient-to-br from-red-100 to-orange-100 flex items-center justify-center">
                        <div className="text-6xl">{monster.icon}</div>
                        <div className="absolute top-4 right-4">
                          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getThreatColor(monster.threatLevel)}`}>
                            威胁 {monster.threatLevel}
                          </span>
                        </div>
                      </div>

                      {/* 怪物信息 */}
                      <div className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div>
                            <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-orange-600 transition-colors">
                              {monster.nameZh}
                            </h3>
                            <p className="text-sm text-gray-500">{monster.name}</p>
                          </div>
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSpeciesColor(monster.species)}`}>
                            {monster.species}
                          </span>
                        </div>

                        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                          {monster.description}
                        </p>

                        <div className="flex items-center justify-between text-sm">
                          <div className="flex items-center text-gray-500">
                            <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                            {monster.habitat}
                          </div>
                          <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                            <span>查看详情</span>
                            <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-xl border border-gray-200/60 hover:border-gray-300/60 p-6 transform hover:scale-[1.01] transition-all duration-300">
                      <div className="flex items-center space-x-6">
                        {/* 怪物图标 */}
                        <div className="flex-shrink-0">
                          <div className="w-20 h-20 bg-gradient-to-br from-red-100 to-orange-100 rounded-2xl flex items-center justify-center">
                            <span className="text-3xl">{monster.icon}</span>
                          </div>
                        </div>

                        {/* 怪物信息 */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h3 className="text-xl font-bold text-gray-900 group-hover:text-orange-600 transition-colors">
                                {monster.nameZh}
                              </h3>
                              <p className="text-sm text-gray-500">{monster.name}</p>
                            </div>
                            <div className="flex items-center space-x-2">
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getSpeciesColor(monster.species)}`}>
                                {monster.species}
                              </span>
                              <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${getThreatColor(monster.threatLevel)}`}>
                                威胁 {monster.threatLevel}
                              </span>
                            </div>
                          </div>
                          
                          <p className="text-gray-600 text-sm mb-3">
                            {monster.description}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center text-gray-500 text-sm">
                              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                              </svg>
                              {monster.habitat}
                            </div>
                            <div className="flex items-center text-orange-600 font-medium group-hover:text-orange-700 transition-colors">
                              <span>查看详情</span>
                              <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
