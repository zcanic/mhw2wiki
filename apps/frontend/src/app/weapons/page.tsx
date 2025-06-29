'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { useState, useMemo } from 'react';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';

const GET_WEAPONS = gql`
  query GetWeapons {
    weapons {
      id
      name
      type
      attack
      rarity
      description
    }
  }
`;

interface Weapon {
  id: string;
  name: string;
  type: string;
  attack: number;
  rarity: number;
  description?: string;
}

function WeaponCard({ weapon }: { weapon: Weapon }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{weapon.name}</h3>
        <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
          {weapon.type}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <span className="text-sm text-gray-600">攻击力</span>
          <p className="text-lg font-semibold text-red-600">{weapon.attack}</p>
        </div>
        <div>
          <span className="text-sm text-gray-600">稀有度</span>
          <p className="text-lg font-semibold text-yellow-600">★{weapon.rarity}</p>
        </div>
      </div>
      
      {weapon.description && (
        <p className="text-sm text-gray-600">{weapon.description}</p>
      )}
    </div>
  );
}

export default function WeaponsPage() {
  const { loading, error, data } = useQuery(GET_WEAPONS);
  
  // Filter states
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [attackRange, setAttackRange] = useState<[number, number]>([0, 1000]);
  const [rarityRange, setRarityRange] = useState<[number, number]>([1, 10]);

  // Extract unique values and ranges
  const { weaponTypes, maxAttack, maxRarity } = useMemo(() => {
    if (!data?.weapons) return { weaponTypes: [], maxAttack: 1000, maxRarity: 10 };
    
    const typeSet = new Set(data.weapons.map((weapon: Weapon) => weapon.type).filter(Boolean));
    const attacks = data.weapons.map((weapon: Weapon) => weapon.attack);
    const rarities = data.weapons.map((weapon: Weapon) => weapon.rarity);
    
    return {
      weaponTypes: Array.from(typeSet).sort(),
      maxAttack: Math.max(...attacks, 1000),
      maxRarity: Math.max(...rarities, 10)
    };
  }, [data?.weapons]);

  // Apply filters to data
  const filteredWeapons = useMemo(() => {
    if (!data?.weapons) return [];
    
    return data.weapons.filter((weapon: Weapon) => {
      // Search filter
      if (searchTerm) {
        const searchLower = searchTerm.toLowerCase();
        const matchesSearch = 
          weapon.name.toLowerCase().includes(searchLower) ||
          (weapon.description && weapon.description.toLowerCase().includes(searchLower));
        if (!matchesSearch) return false;
      }
      
      // Type filter
      if (selectedType && weapon.type !== selectedType) {
        return false;
      }
      
      // Attack filter
      if (weapon.attack < attackRange[0] || weapon.attack > attackRange[1]) {
        return false;
      }
      
      // Rarity filter
      if (weapon.rarity < rarityRange[0] || weapon.rarity > rarityRange[1]) {
        return false;
      }
      
      return true;
    });
  }, [data?.weapons, searchTerm, selectedType, attackRange, rarityRange]);

  const resetFilters = () => {
    setSearchTerm('');
    setSelectedType('');
    setAttackRange([0, maxAttack]);
    setRarityRange([1, maxRarity]);
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">武器图鉴</h1>
        <p className="text-gray-600">
          浏览所有可用的武器，包括攻击力、稀有度和属性信息
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
              placeholder="搜索武器名称或描述..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Weapon Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              武器类型
            </label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              <option value="">所有类型</option>
              {weaponTypes.map(type => (
                <option key={String(type)} value={String(type)}>{String(type)}</option>
              ))}
            </select>
          </div>

          {/* Attack Range */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              攻击力: {attackRange[0]} - {attackRange[1]}
            </label>
            <div className="flex items-center space-x-2">
              <input
                type="range"
                min={0}
                max={maxAttack}
                step={10}
                value={attackRange[0]}
                onChange={(e) => setAttackRange([parseInt(e.target.value), attackRange[1]])}
                className="flex-1"
              />
              <input
                type="range"
                min={0}
                max={maxAttack}
                step={10}
                value={attackRange[1]}
                onChange={(e) => setAttackRange([attackRange[0], parseInt(e.target.value)])}
                className="flex-1"
              />
            </div>
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
        </div>

        {/* Filter Results Info */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <p className="text-sm text-gray-600">
            显示 {filteredWeapons.length} 件武器
            {data?.weapons && filteredWeapons.length !== data.weapons.length && 
              ` (共 ${data.weapons.length} 件)`
            }
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredWeapons.map((weapon: Weapon) => (
          <WeaponCard key={weapon.id} weapon={weapon} />
        ))}
      </div>

      {filteredWeapons.length === 0 && data?.weapons && data.weapons.length > 0 && (
        <div className="text-center py-12">
          <div className="text-6xl mb-4">🔍</div>
          <h2 className="text-2xl font-bold text-gray-600 mb-2">
            没有找到符合条件的武器
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

      {(!data?.weapons || data.weapons.length === 0) && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无武器数据</p>
        </div>
      )}
    </div>
  );
}
