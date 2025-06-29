'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { ErrorMessage } from '../../../components/ErrorMessage';

const GET_WEAPON_BY_ID = gql`
  query GetWeaponById($id: ID!) {
    weapon(id: $id) {
      id
      name
      description
      type
      attack
      rarity
      element
    }
  }
`;

interface Weapon {
  id: string;
  name: string;
  description?: string;
  type: string;
  attack: number;
  rarity: number;
  element?: string;
}

interface WeaponData {
  weapon: Weapon;
}

const WEAPON_TYPE_COLORS: { [key: string]: string } = {
  'Great Sword': 'from-red-500 to-red-700',
  'Long Sword': 'from-blue-500 to-blue-700',
  'Sword & Shield': 'from-green-500 to-green-700',
  'Dual Blades': 'from-purple-500 to-purple-700',
  'Hammer': 'from-orange-500 to-orange-700',
  'Hunting Horn': 'from-yellow-500 to-yellow-700',
  'Lance': 'from-indigo-500 to-indigo-700',
  'Gunlance': 'from-pink-500 to-pink-700',
  'Switch Axe': 'from-teal-500 to-teal-700',
  'Charge Blade': 'from-cyan-500 to-cyan-700',
  'Insect Glaive': 'from-lime-500 to-lime-700',
  'Bow': 'from-emerald-500 to-emerald-700',
  'Light Bowgun': 'from-violet-500 to-violet-700',
  'Heavy Bowgun': 'from-slate-500 to-slate-700',
};

const ELEMENT_COLORS: { [key: string]: string } = {
  'Fire': 'bg-red-100 text-red-800',
  'Water': 'bg-blue-100 text-blue-800',
  'Thunder': 'bg-yellow-100 text-yellow-800',
  'Ice': 'bg-cyan-100 text-cyan-800',
  'Dragon': 'bg-purple-100 text-purple-800',
};

export default function WeaponDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { loading, error, data } = useQuery<WeaponData>(GET_WEAPON_BY_ID, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data?.weapon) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">武器未找到</h1>
          <p className="text-gray-600 mb-6">请检查URL或返回武器列表</p>
          <Link
            href="/weapons"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回武器列表
          </Link>
        </div>
      </div>
    );
  }

  const weapon = data.weapon;
  const typeColorClass = WEAPON_TYPE_COLORS[weapon.type] || 'from-gray-500 to-gray-700';
  const elementColorClass = weapon.element ? ELEMENT_COLORS[weapon.element] || 'bg-gray-100 text-gray-800' : '';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Link
          href="/weapons"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回武器列表
        </Link>
      </div>

      {/* Weapon Header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          {/* Weapon Visual */}
          <div className="md:w-1/3">
            <div className={`h-64 md:h-full bg-gradient-to-br ${typeColorClass} flex items-center justify-center`}>
              <div className="text-white text-center">
                <div className="text-6xl mb-2">⚔️</div>
                <div className="text-sm font-medium">{weapon.type}</div>
              </div>
            </div>
          </div>

          {/* Weapon Info */}
          <div className="md:w-2/3 p-6">
            <div className="flex items-center mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{weapon.name}</h1>
                <p className="text-xl text-gray-600">{weapon.type}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-sm font-medium text-gray-500">攻击力</span>
                <div className="flex items-center mt-1">
                  <div className="bg-red-100 text-red-800 px-3 py-1 rounded-full font-bold text-lg">
                    {weapon.attack}
                  </div>
                </div>
              </div>

              <div>
                <span className="text-sm font-medium text-gray-500">稀有度</span>
                <div className="flex items-center mt-1">
                  {[...Array(10)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < weapon.rarity ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {weapon.rarity}/10
                  </span>
                </div>
              </div>
            </div>

            {weapon.element && (
              <div className="mb-4">
                <span className="text-sm font-medium text-gray-500">元素属性</span>
                <div className="mt-1">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${elementColorClass}`}>
                    {weapon.element}
                  </span>
                </div>
              </div>
            )}

            {weapon.description && (
              <div>
                <span className="text-sm font-medium text-gray-500">描述</span>
                <p className="mt-1 text-gray-700 leading-relaxed">{weapon.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Weapon Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Attack Stats */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">攻击属性</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">基础攻击</span>
              <span className="font-bold text-lg text-red-600">{weapon.attack}</span>
            </div>
            {weapon.element && (
              <div className="flex justify-between items-center">
                <span className="text-gray-600">{weapon.element}属性</span>
                <span className={`px-2 py-1 rounded text-sm font-medium ${elementColorClass}`}>
                  {Math.floor(weapon.attack * 0.2)}
                </span>
              </div>
            )}
          </div>
        </div>

        {/* Weapon Type Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">武器类型特性</h3>
          <div className="space-y-2">
            <div className="flex items-center">
              <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              <span className="text-sm text-gray-700">
                {weapon.type === 'Great Sword' && '强力斩击，需要时机'}
                {weapon.type === 'Long Sword' && '连击流畅，范围适中'}
                {weapon.type === 'Hammer' && '钝击伤害，可击晕'}
                {weapon.type === 'Bow' && '远程攻击，机动性强'}
                {!['Great Sword', 'Long Sword', 'Hammer', 'Bow'].includes(weapon.type) && '独特的战斗风格'}
              </span>
            </div>
          </div>
        </div>

        {/* Upgrade Materials (placeholder) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">强化材料</h3>
          <div className="space-y-2">
            <div className="text-sm text-gray-500 italic">
              强化材料信息将在后续版本中提供
            </div>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => router.back()}
          className="px-6 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
        >
          返回
        </button>
        <button
          className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          onClick={() => {
            alert('收藏功能将在后续版本实现');
          }}
        >
          收藏此武器
        </button>
        <button
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          onClick={() => {
            navigator.clipboard.writeText(window.location.href);
            alert('链接已复制到剪贴板');
          }}
        >
          分享
        </button>
        <button
          className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
          onClick={() => {
            alert('对比功能将在后续版本实现');
          }}
        >
          添加到对比
        </button>
      </div>
    </div>
  );
}
