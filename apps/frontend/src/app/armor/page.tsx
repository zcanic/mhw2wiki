'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';

const GET_ARMOR_PIECES = gql`
  query GetArmorPieces {
    armorPieces {
      id
      name
      type
      defense
      armorSet
      rarity
      description
    }
  }
`;

interface ArmorPiece {
  id: string;
  name: string;
  type: string;
  defense: number;
  armorSet: string;
  rarity: number;
  description?: string;
}

function ArmorCard({ armor }: { armor: ArmorPiece }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{armor.name}</h3>
        <span className="text-sm bg-green-100 text-green-800 px-2 py-1 rounded">
          {armor.type}
        </span>
      </div>
      
      <div className="mb-3">
        <span className="text-sm text-gray-600">套装</span>
        <p className="text-lg font-semibold text-blue-600">{armor.armorSet}</p>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <span className="text-sm text-gray-600">防御力</span>
          <p className="text-lg font-semibold text-green-600">{armor.defense}</p>
        </div>
        <div>
          <span className="text-sm text-gray-600">稀有度</span>
          <p className="text-lg font-semibold text-yellow-600">★{armor.rarity}</p>
        </div>
      </div>
      
      {armor.description && (
        <p className="text-sm text-gray-600">{armor.description}</p>
      )}
    </div>
  );
}

export default function ArmorPage() {
  const { loading, error, data } = useQuery(GET_ARMOR_PIECES);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">防具图鉴</h1>
        <p className="text-gray-600">
          浏览所有可用的防具，包括防御力、套装和稀有度信息
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.armorPieces?.map((armor: ArmorPiece) => (
          <ArmorCard key={armor.id} armor={armor} />
        ))}
      </div>

      {(!data?.armorPieces || data.armorPieces.length === 0) && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无防具数据</p>
        </div>
      )}
    </div>
  );
}
