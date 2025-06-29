'use client';

import { gql, useQuery } from '@apollo/client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';

const GET_MONSTERS = gql`
  query GetMonsters {
    monsters {
      id
      name
      description
      species
      threatLevel
      habitat
      imageUrl
      iconUrl
    }
  }
`;

interface Monster {
  id: string;
  name: string;
  description: string;
  species: string;
  threatLevel: number;
  habitat: string;
  imageUrl: string;
  iconUrl: string;
}

interface MonstersData {
  monsters: Monster[];
}

export default function MonstersPage() {
  const { loading, error, data } = useQuery<MonstersData>(GET_MONSTERS);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecies, setSelectedSpecies] = useState('');
  const [selectedHabitat, setSelectedHabitat] = useState('');
  const [threatLevelRange, setThreatLevelRange] = useState<[number, number]>([1, 10]);

  // Extract unique values for dropdowns
  const { species, habitats } = useMemo(() => {
    if (!data?.monsters) return { species: [], habitats: [] };
    
    const speciesSet = new Set(data.monsters.map(m => m.species).filter(Boolean));
    const habitatsSet = new Set(data.monsters.map(m => m.habitat).filter(Boolean));
    
    return {
      species: Array.from(speciesSet).sort(),
      habitats: Array.from(habitatsSet).sort()
    };
  }, [data?.monsters]);

  // Apply filters to data
  const filteredMonsters = useMemo(() => {
    if (!data?.monsters) return [];
    
    return data.monsters.filter(monster => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          monster.name.toLowerCase().includes(searchLower) ||
          monster.description.toLowerCase().includes(searchLower);
        if (!matchesSearch) return false;
      }
      
      // Species filter
      if (selectedSpecies && monster.species !== selectedSpecies) {
        return false;
      }
      
      // Habitat filter
      if (selectedHabitat && monster.habitat !== selectedHabitat) {
        return false;
      }
      
      // Threat level filter
      if (monster.threatLevel < threatLevelRange[0] || monster.threatLevel > threatLevelRange[1]) {
        return false;
      }
      
      return true;
    });
  }, [data?.monsters, searchTerm, selectedSpecies, selectedHabitat, threatLevelRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedSpecies('');
    setSelectedHabitat('');
    setThreatLevelRange([1, 10]);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          怪物图鉴
        </h1>
        <p className="text-lg text-gray-600">
          探索 Monster Hunter Wilds 中的所有大型怪物
        </p>
      </header>

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
              placeholder="搜索怪物名称或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Species */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              种族
            </label>
            <select
              value={selectedSpecies}
              onChange={(e) => setSelectedSpecies(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">所有种族</option>
              {species.map(s => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          {/* Habitat */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              栖息地
            </label>
            <select
              value={selectedHabitat}
              onChange={(e) => setSelectedHabitat(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">所有栖息地</option>
              {habitats.map(h => (
                <option key={h} value={h}>{h}</option>
              ))}
            </select>
          </div>

          {/* Threat Level */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              威胁等级: {threatLevelRange[0]} - {threatLevelRange[1]}
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min={1}
                max={10}
                value={threatLevelRange[0]}
                onChange={(e) => setThreatLevelRange([parseInt(e.target.value), threatLevelRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min={1}
                max={10}
                value={threatLevelRange[1]}
                onChange={(e) => setThreatLevelRange([threatLevelRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
          </div>
        </div>

        {/* Filter Results Info */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            显示 {filteredMonsters.length} 个怪物
            {data?.monsters && filteredMonsters.length !== data.monsters.length && 
              ` (共 ${data.monsters.length} 个)`
            }
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {filteredMonsters.map((monster) => (
          <Link
            key={monster.id}
            href={`/monsters/${monster.id}`}
            className="block group"
          >
            <div className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden group-hover:shadow-xl group-hover:scale-105 transition-transform">
              <div className="relative h-48 bg-gradient-to-br from-blue-500 to-purple-600">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="text-6xl mb-2">🐲</div>
                    <div className="text-sm font-medium">{monster.species}</div>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="bg-black bg-opacity-50 text-white px-2 py-1 rounded text-sm">
                    LV {monster.threatLevel}
                  </span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {monster.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {monster.description}
                </p>
                <div className="flex justify-between items-center text-sm text-gray-500">
                  <span>栖息地: {monster.habitat}</span>
                  <span className="bg-gray-100 px-2 py-1 rounded">
                    {monster.species}
                  </span>
                </div>
                <div className="mt-3 flex items-center text-blue-600 group-hover:text-blue-800 transition-colors">
                  <span className="text-sm font-medium">查看详情</span>
                  <svg className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {filteredMonsters.length === 0 && data?.monsters && data.monsters.length > 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            没有找到符合条件的怪物
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

      {(!data?.monsters || data.monsters.length === 0) && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            暂无怪物数据
          </h2>
          <p className="text-gray-500">
            请稍后再试，或检查数据库连接。
          </p>
        </div>
      )}
    </div>
  );
}
