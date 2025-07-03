'use client';

import { SearchResult, parseNames, parseDescriptions } from '../lib/static-data-api';

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
}

export function SearchResults({ results, query }: SearchResultsProps) {
  if (!results.length) {
    return (
      <div className="text-center py-12">
        <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.463-.64-6.324-1.758C3.708 12.146 2 10.272 2 8c0-3.866 6-8 10-8s10 4.134 10 8c0 2.272-1.708 4.146-3.676 5.242C16.463 14.36 14.34 15 12 15z" />
        </svg>
        <h3 className="mt-2 text-sm font-medium text-gray-900">没有找到结果</h3>
        <p className="mt-1 text-sm text-gray-500">尝试其他关键词或检查拼写</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="text-sm text-gray-600 mb-4">
        搜索 "{query}" 找到 {results.length} 个结果
      </div>
      
      <div className="grid gap-4">
        {results.map((result) => {
          const name = parseNames(result.names);
          const description = parseDescriptions(result.descriptions || undefined);
          
          return (
            <div key={`${result.type}-${result.id}`} className="bg-white rounded-lg border border-gray-200 p-4 hover:shadow-md transition-shadow">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-lg font-semibold text-gray-900">{name}</span>
                    <TypeBadge type={result.type} />
                  </div>
                  {description && (
                    <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                  )}
                  <div className="mt-2 text-xs text-gray-400">
                    ID: {result.game_id}
                  </div>
                </div>
                <button className="ml-4 px-3 py-1 text-sm bg-orange-500 text-white rounded hover:bg-orange-600 transition-colors">
                  查看详情
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function TypeBadge({ type }: { type: 'monster' | 'weapon' | 'item' }) {
  const config = {
    monster: { label: '怪物', className: 'bg-red-100 text-red-800' },
    weapon: { label: '武器', className: 'bg-blue-100 text-blue-800' },
    item: { label: '物品', className: 'bg-green-100 text-green-800' },
  };

  const { label, className } = config[type];

  return (
    <span className={`inline-flex items-center px-2 py-0.5 rounded text-xs font-medium ${className}`}>
      {label}
    </span>
  );
}
