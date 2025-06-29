'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { ErrorMessage } from '../../../components/ErrorMessage';

const GET_MONSTER_WITH_REWARDS = gql`
  query GetMonsterWithRewards($id: ID!) {
    monsterWithRewards(id: $id) {
      id
      name
      description
      species
      threatLevel
      habitat
      imageUrl
      iconUrl
      elements
      weaknesses
      locations
      rewards {
        itemName
        method
        dropRate
        rank
      }
    }
  }
`;

interface MonsterReward {
  itemName: string;
  method: string;
  dropRate: number;
  rank?: string;
}

interface Monster {
  id: string;
  name: string;
  description: string;
  species: string;
  threatLevel: number;
  habitat: string;
  imageUrl: string;
  iconUrl: string;
  elements: string[];
  weaknesses: string[];
  locations: string[];
  rewards: MonsterReward[];
}

interface MonsterData {
  monsterWithRewards: Monster;
}

export default function MonsterDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { loading, error, data } = useQuery<MonsterData>(GET_MONSTER_WITH_REWARDS, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data?.monsterWithRewards) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">怪物未找到</h1>
          <p className="text-gray-600 mb-6">请检查URL或返回怪物列表</p>
          <Link
            href="/monsters"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回怪物列表
          </Link>
        </div>
      </div>
    );
  }

  const monster = data.monsterWithRewards;

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Link
          href="/monsters"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回怪物列表
        </Link>
      </div>

      {/* Monster Header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          {/* Monster Image */}
          <div className="md:w-1/3">
            {monster.imageUrl ? (
              <img
                src={monster.imageUrl}
                alt={monster.name}
                className="w-full h-64 md:h-full object-cover"
              />
            ) : (
              <div className="w-full h-64 md:h-full bg-gray-200 flex items-center justify-center">
                <svg className="w-16 h-16 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
                </svg>
              </div>
            )}
          </div>

          {/* Monster Info */}
          <div className="md:w-2/3 p-6">
            <div className="flex items-center mb-4">
              {monster.iconUrl && (
                <img
                  src={monster.iconUrl}
                  alt={`${monster.name} icon`}
                  className="w-12 h-12 mr-4"
                />
              )}
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{monster.name}</h1>
                <p className="text-xl text-gray-600">{monster.species}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-sm font-medium text-gray-500">威胁等级</span>
                <div className="flex items-center mt-1">
                  {[...Array(10)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < monster.threatLevel ? 'text-red-500' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {monster.threatLevel}/10
                  </span>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-500">栖息地</span>
                <p className="mt-1 text-sm text-gray-900">{monster.habitat}</p>
              </div>
            </div>

            {monster.description && (
              <div>
                <span className="text-sm font-medium text-gray-500">描述</span>
                <p className="mt-1 text-gray-700 leading-relaxed">{monster.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Monster Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Elements */}
        {monster.elements && monster.elements.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">元素属性</h3>
            <div className="flex flex-wrap gap-2">
              {monster.elements.map((element: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-orange-100 text-orange-800 rounded-full text-sm font-medium"
                >
                  {element}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Weaknesses */}
        {monster.weaknesses && monster.weaknesses.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">弱点属性</h3>
            <div className="flex flex-wrap gap-2">
              {monster.weaknesses.map((weakness: string, index: number) => (
                <span
                  key={index}
                  className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-sm font-medium"
                >
                  {weakness}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Locations */}
        {monster.locations && monster.locations.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">出现地点</h3>
            <div className="space-y-2">
              {monster.locations.map((location: string, index: number) => (
                <div
                  key={index}
                  className="flex items-center p-2 bg-gray-50 rounded text-sm"
                >
                  <svg className="w-4 h-4 text-gray-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  {location}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Rewards */}
        {monster.rewards && monster.rewards.length > 0 && (
          <div className="bg-white rounded-lg shadow p-6 md:col-span-2 lg:col-span-3">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">掉落奖励</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {monster.rewards.map((reward: MonsterReward, index: number) => (
                <div
                  key={index}
                  className="flex flex-col p-3 bg-amber-50 border border-amber-200 rounded-lg"
                >
                  <div className="flex items-center mb-2">
                    <svg className="w-5 h-5 text-amber-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span className="text-sm font-medium text-amber-800">{reward.itemName}</span>
                  </div>
                  <div className="text-xs text-amber-600 space-y-1">
                    <div>获取方式: {reward.method}</div>
                    <div>掉落率: {reward.dropRate}%</div>
                    {reward.rank && <div>等级: {reward.rank}</div>}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-wrap gap-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          返回
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => {
            // TODO: Implement bookmark functionality
            alert('收藏功能将在后续版本实现');
          }}
        >
          收藏此怪物
        </button>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => {
            // TODO: Implement share functionality
            navigator.clipboard.writeText(window.location.href);
            alert('链接已复制到剪贴板');
          }}
        >
          分享
        </button>
      </div>
    </div>
  );
}
