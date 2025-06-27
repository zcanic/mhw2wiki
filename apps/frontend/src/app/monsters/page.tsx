'use client';

import { gql, useQuery } from '@apollo/client';
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {data?.monsters.map((monster) => (
          <div
            key={monster.id}
            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
          >
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
              <h3 className="text-xl font-bold text-gray-900 mb-2">
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
            </div>
          </div>
        ))}
      </div>

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
