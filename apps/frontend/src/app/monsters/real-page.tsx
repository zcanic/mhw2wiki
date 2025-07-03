'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { PageLayout, PageHeader, PageContent } from '../../components/layout/PageLayout';
import { fetchMonsters } from '../../lib/api';

interface Monster {
  id: string;
  name: string;
  species: string;
  threatLevel: number;
  description: string;
  elements: string[];
  weaknesses: string[];
  locations: string[];
  habitat: string;
  iconUrl: string;
  imageUrl: string;
}

export default function RealMonstersPage() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedSpecies, setSelectedSpecies] = useState<string>('all');
  const [selectedThreatLevel, setSelectedThreatLevel] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // 加载怪物数据
  useEffect(() => {
    async function loadMonsters() {
      setLoading(true);
      setError(null);
      
      try {
        const data = await fetchMonsters();
        setMonsters(data);
        console.log('获取到怪物数据:', data);
      } catch (err) {
        setError('加载怪物数据失败，请稍后重试');
        console.error('加载怪物数据失败:', err);
      } finally {
        setLoading(false);
      }
    }

    loadMonsters();
  }, []);

  // 获取所有可用的种族
  const availableSpecies = Array.from(new Set(monsters.map(m => m.species).filter(Boolean)));

  // 筛选怪物
  const filteredMonsters = monsters.filter(monster => {
    const matchesSpecies = selectedSpecies === 'all' || monster.species === selectedSpecies;
    const matchesThreatLevel = selectedThreatLevel === 'all' || monster.threatLevel.toString() === selectedThreatLevel;
    const matchesSearch = searchQuery === '' || 
      monster.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      monster.description.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSpecies && matchesThreatLevel && matchesSearch;
  });

  const getThreatLevelColor = (level: number): string => {
    const colors = {
      1: 'bg-green-100 text-green-800',
      2: 'bg-blue-100 text-blue-800', 
      3: 'bg-yellow-100 text-yellow-800',
      4: 'bg-orange-100 text-orange-800',
      5: 'bg-red-100 text-red-800',
    };
    return colors[level as keyof typeof colors] || 'bg-gray-100 text-gray-800';
  };

  const getSpeciesIcon = (species: string): string => {
    const icons: Record<string, string> = {
      'fanged-wyvern': '🐺',
      'flying-wyvern': '🐉',
      'brute-wyvern': '🦕',
      'elder-dragon': '🐲',
      'construct': '🤖',
      'fanged-beast': '🐻',
      'bird-wyvern': '🦅',
    };
    return icons[species] || '🐉';
  };

  if (loading) {
    return (
      <PageLayout maxWidth="2xl" padding="lg">
        <PageHeader
          title="怪物图鉴"
          subtitle="探索MH Wilds中的所有大型怪物"
        />
        <PageContent>
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto mb-4"></div>
            <p className="text-gray-600">正在加载怪物数据...</p>
          </div>
        </PageContent>
      </PageLayout>
    );
  }

  if (error) {
    return (
      <PageLayout maxWidth="2xl" padding="lg">
        <PageHeader
          title="怪物图鉴"
          subtitle="探索MH Wilds中的所有大型怪物"
        />
        <PageContent>
          <div className="text-center py-12">
            <div className="text-6xl text-red-300 mb-4">⚠️</div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">加载失败</h3>
            <p className="text-gray-600 mb-4">{error}</p>
            <button
              onClick={() => window.location.reload()}
              className="px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
            >
              重试
            </button>
          </div>
        </PageContent>
      </PageLayout>
    );
  }

  return (
    <PageLayout maxWidth="2xl" padding="lg">
      <PageHeader
        title="怪物图鉴"
        subtitle={`发现并分析 ${filteredMonsters.length} 种大型怪物的详细信息`}
      />
      
      <PageContent>
        {/* 搜索和筛选区域 */}
        <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* 搜索框 */}
            <div>
              <label htmlFor="search" className="block text-sm font-medium text-gray-700 mb-2">
                搜索怪物
              </label>
              <input
                id="search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="输入怪物名称..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>

            {/* 种族筛选 */}
            <div>
              <label htmlFor="species" className="block text-sm font-medium text-gray-700 mb-2">
                种族筛选
              </label>
              <select
                id="species"
                value={selectedSpecies}
                onChange={(e) => setSelectedSpecies(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">所有种族</option>
                {availableSpecies.map(species => (
                  <option key={species} value={species}>
                    {getSpeciesIcon(species)} {species}
                  </option>
                ))}
              </select>
            </div>

            {/* 威胁等级筛选 */}
            <div>
              <label htmlFor="threat" className="block text-sm font-medium text-gray-700 mb-2">
                威胁等级
              </label>
              <select
                id="threat"
                value={selectedThreatLevel}
                onChange={(e) => setSelectedThreatLevel(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              >
                <option value="all">所有等级</option>
                <option value="1">⭐ 等级 1</option>
                <option value="2">⭐⭐ 等级 2</option>
                <option value="3">⭐⭐⭐ 等级 3</option>
                <option value="4">⭐⭐⭐⭐ 等级 4</option>
                <option value="5">⭐⭐⭐⭐⭐ 等级 5</option>
              </select>
            </div>
          </div>
        </div>

        {/* 结果统计 */}
        <div className="mb-6">
          <p className="text-gray-600">
            找到 <span className="font-semibold text-orange-600">{filteredMonsters.length}</span> 种怪物
            {searchQuery && (
              <span>
                {' '}匹配 "<span className="font-medium">{searchQuery}</span>"
              </span>
            )}
          </p>
        </div>

        {/* 怪物网格 */}
        {filteredMonsters.length === 0 ? (
          <div className="text-center py-12">
            <div className="text-6xl text-gray-300 mb-4">🔍</div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">未找到匹配的怪物</h3>
            <p className="text-gray-500">尝试调整搜索条件或筛选器</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMonsters.map((monster) => (
              <Link
                key={monster.id}
                href={`/monsters/${monster.id}`}
                className="group bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-lg hover:border-orange-200 transition-all duration-200"
              >
                <div className="flex items-start gap-4">
                  {/* 怪物图标 */}
                  <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                    <span className="text-2xl">{getSpeciesIcon(monster.species)}</span>
                  </div>

                  {/* 怪物信息 */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors truncate">
                        {monster.name}
                      </h3>
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getThreatLevelColor(monster.threatLevel)}`}>
                        ⭐{monster.threatLevel}
                      </span>
                    </div>
                    
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                      {monster.description}
                    </p>

                    <div className="space-y-2">
                      {/* 种族和栖息地 */}
                      <div className="flex items-center gap-4 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <span>🏷️</span>
                          {monster.species}
                        </span>
                        <span className="flex items-center gap-1">
                          <span>🌍</span>
                          {monster.habitat}
                        </span>
                      </div>

                      {/* 元素和弱点 */}
                      <div className="flex items-center gap-2 flex-wrap">
                        {monster.elements.length > 0 && (
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">元素:</span>
                            {monster.elements.map(element => (
                              <span key={element} className="px-1.5 py-0.5 bg-orange-100 text-orange-800 text-xs rounded">
                                {element}
                              </span>
                            ))}
                          </div>
                        )}
                        {monster.weaknesses.length > 0 && (
                          <div className="flex items-center gap-1">
                            <span className="text-xs text-gray-500">弱点:</span>
                            {monster.weaknesses.slice(0, 2).map(weakness => (
                              <span key={weakness} className="px-1.5 py-0.5 bg-blue-100 text-blue-800 text-xs rounded">
                                {weakness}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>

                {/* 查看详情指示器 */}
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">点击查看详情</span>
                    <span className="text-orange-500 group-hover:translate-x-1 transition-transform duration-200">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        )}

        {/* 数据来源说明 */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-50 rounded-full text-sm text-gray-600">
            <span>📊</span>
            <span>数据来源：Monster Hunter Wilds 官方数据库</span>
          </div>
        </div>
      </PageContent>
    </PageLayout>
  );
}
