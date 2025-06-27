'use client';

import { useQuery } from '@apollo/client';
import { gql } from '@apollo/client';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { ErrorMessage } from '../../components/ErrorMessage';

const GET_ITEMS = gql`
  query GetItems {
    items {
      id
      name
      category
      description
      rarity
      value
    }
  }
`;

interface Item {
  id: string;
  name: string;
  category: string;
  description: string;
  rarity: number;
  value: number;
}

function ItemCard({ item }: { item: Item }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-bold text-gray-800">{item.name}</h3>
        <span className="text-sm bg-purple-100 text-purple-800 px-2 py-1 rounded">
          {item.category}
        </span>
      </div>
      
      <div className="grid grid-cols-2 gap-4 mb-3">
        <div>
          <span className="text-sm text-gray-600">价值</span>
          <p className="text-lg font-semibold text-green-600">{item.value}z</p>
        </div>
        <div>
          <span className="text-sm text-gray-600">稀有度</span>
          <p className="text-lg font-semibold text-yellow-600">★{item.rarity}</p>
        </div>
      </div>
      
      <p className="text-sm text-gray-600">{item.description}</p>
    </div>
  );
}

export default function ItemsPage() {
  const { loading, error, data } = useQuery(GET_ITEMS);

  if (loading) return <LoadingSpinner />;
  if (error) return <ErrorMessage message={error.message} />;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">物品图鉴</h1>
        <p className="text-gray-600">
          浏览所有可用的物品，包括价值、稀有度和用途信息
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.items?.map((item: Item) => (
          <ItemCard key={item.id} item={item} />
        ))}
      </div>

      {(!data?.items || data.items.length === 0) && (
        <div className="text-center py-12">
          <p className="text-gray-500">暂无物品数据</p>
        </div>
      )}
    </div>
  );
}
