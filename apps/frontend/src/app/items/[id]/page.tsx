'use client';

import { gql, useQuery } from '@apollo/client';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { LoadingSpinner } from '../../../components/LoadingSpinner';
import { ErrorMessage } from '../../../components/ErrorMessage';

const GET_ITEM_BY_ID = gql`
  query GetItemById($id: ID!) {
    item(id: $id) {
      id
      name
      description
      category
      rarity
      value
    }
  }
`;

interface Item {
  id: string;
  name: string;
  description?: string;
  category: string;
  rarity: number;
  value: number;
}

interface ItemData {
  item: Item;
}

const CATEGORY_COLORS: { [key: string]: string } = {
  'Consumable': 'from-green-500 to-green-700',
  'Material': 'from-brown-500 to-brown-700',
  'Tool': 'from-blue-500 to-blue-700',
  'Ammo': 'from-orange-500 to-orange-700',
  'Misc': 'from-gray-500 to-gray-700',
};

const CATEGORY_ICONS: { [key: string]: string } = {
  'Consumable': '🧪',
  'Material': '🪨',
  'Tool': '🔧',
  'Ammo': '🏹',
  'Misc': '📦',
};

export default function ItemDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const { loading, error, data } = useQuery<ItemData>(GET_ITEM_BY_ID, {
    variables: { id },
    skip: !id,
  });

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;
  if (!data?.item) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">物品未找到</h1>
          <p className="text-gray-600 mb-6">请检查URL或返回物品列表</p>
          <Link
            href="/items"
            className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            返回物品列表
          </Link>
        </div>
      </div>
    );
  }

  const item = data.item;
  const categoryColorClass = CATEGORY_COLORS[item.category] || 'from-gray-500 to-gray-700';
  const categoryIcon = CATEGORY_ICONS[item.category] || '📦';

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Navigation */}
      <div className="mb-6">
        <Link
          href="/items"
          className="inline-flex items-center text-blue-600 hover:text-blue-800 transition-colors"
        >
          <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          返回物品列表
        </Link>
      </div>

      {/* Item Header */}
      <div className="bg-white rounded-lg shadow-lg overflow-hidden mb-8">
        <div className="md:flex">
          {/* Item Visual */}
          <div className="md:w-1/3">
            <div className={`h-64 md:h-full bg-gradient-to-br ${categoryColorClass} flex items-center justify-center`}>
              <div className="text-white text-center">
                <div className="text-6xl mb-2">{categoryIcon}</div>
                <div className="text-sm font-medium">{item.category}</div>
              </div>
            </div>
          </div>

          {/* Item Info */}
          <div className="md:w-2/3 p-6">
            <div className="flex items-center mb-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">{item.name}</h1>
                <p className="text-xl text-gray-600">{item.category}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mb-6">
              <div>
                <span className="text-sm font-medium text-gray-500">价值</span>
                <div className="flex items-center mt-1">
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full font-bold text-lg">
                    {item.value}z
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
                        i < item.rarity ? 'text-yellow-500' : 'text-gray-300'
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="ml-2 text-sm font-medium text-gray-700">
                    {item.rarity}/10
                  </span>
                </div>
              </div>
            </div>

            {item.description && (
              <div>
                <span className="text-sm font-medium text-gray-500">描述</span>
                <p className="mt-1 text-gray-700 leading-relaxed">{item.description}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Item Details Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        {/* Item Info */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">物品信息</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-600">分类</span>
              <span className="font-medium">{item.category}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">稀有度</span>
              <span className="font-medium">★{item.rarity}</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600">售价</span>
              <span className="font-bold text-yellow-600">{item.value}z</span>
            </div>
          </div>
        </div>

        {/* Usage */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">用途</h3>
          <div className="space-y-2">
            {item.category === 'Consumable' && (
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                可在狩猎中使用
              </div>
            )}
            {item.category === 'Material' && (
              <div className="flex items-center text-sm text-gray-700">
                <svg className="w-4 h-4 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                可用于制作装备
              </div>
            )}
            <div className="flex items-center text-sm text-gray-700">
              <svg className="w-4 h-4 text-yellow-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
              可出售给商人
            </div>
          </div>
        </div>

        {/* Acquisition (placeholder) */}
        <div className="bg-white rounded-lg shadow p-6">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">获取方式</h3>
          <div className="space-y-2">
            <div className="text-sm text-gray-500 italic">
              获取方式信息将在后续版本中提供
            </div>
          </div>
        </div>
      </div>

      {/* Related Items (placeholder) */}
      <div className="bg-white rounded-lg shadow p-6 mb-8">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">相关物品</h3>
        <div className="text-sm text-gray-500 italic">
          相关物品推荐将在后续版本中提供
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
          收藏此物品
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
        {item.category === 'Material' && (
          <button
            className="px-6 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
            onClick={() => {
              alert('制作树功能将在后续版本实现');
            }}
          >
            查看制作树
          </button>
        )}
      </div>
    </div>
  );
}
