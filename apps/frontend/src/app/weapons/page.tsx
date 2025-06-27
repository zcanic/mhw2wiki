'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.weapons?.map((weapon: Weapon) => (
          <WeaponCard key={weapon.id} weapon={weapon} />
        ))}
      </div>

      {(!data?.weapons || data.weapons.length === 0) && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无武器数据</p>
        </div>
      )}
    </div>
  );
}
