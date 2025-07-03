'use client';

import { useState } from 'react';
import { PageLayout, PageHeader, PageContent } from '../../components/layout/PageLayout';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = async (query: string) => {
    if (!query.trim()) {
      setSearchResults([]);
      return;
    }

    setIsSearching(true);
    // 模拟搜索延迟
    setTimeout(() => {
      // 模拟搜索结果
      const mockResults = [
        { id: 1, type: 'monster', name: '炎王龙', description: '强大的古龙种' },
        { id: 2, type: 'weapon', name: '炎王剑', description: '炎王龙素材制作的大剑' },
        { id: 3, type: 'armor', name: '炎王套装', description: '炎王龙素材制作的防具' },
      ].filter(item => item.name.includes(query));
      
      setSearchResults(mockResults);
      setIsSearching(false);
    }, 300);
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    handleSearch(query);
  };

  return (
    <PageLayout maxWidth="2xl" padding="lg">
      <PageHeader
        title="全局搜索"
        subtitle="快速查找怪物、武器、防具、物品等游戏数据"
      />
      
      <PageContent>
        {/* 搜索栏 */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400 text-xl">🔍</span>
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="输入关键词搜索..."
              className="w-full pl-12 pr-4 py-4 text-lg border-2 border-gray-200 rounded-2xl focus:border-orange-500 focus:outline-none transition-colors duration-200 bg-white shadow-lg"
            />
            {isSearching && (
              <div className="absolute inset-y-0 right-0 pr-4 flex items-center">
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-orange-500"></div>
              </div>
            )}
          </div>
        </div>

        {/* 搜索结果 */}
        {searchQuery && (
          <div className="max-w-4xl mx-auto mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              搜索结果 ({searchResults.length})
            </h2>
            
            {searchResults.length === 0 ? (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">🔍</div>
                <h3 className="text-xl font-semibold text-gray-600 mb-2">未找到相关结果</h3>
                <p className="text-gray-500">请尝试其他关键词或检查拼写</p>
              </div>
            ) : (
              <div className="grid gap-4">
                {searchResults.map((result) => (
                  <div key={result.id} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-red-100 rounded-xl flex items-center justify-center">
                        <span className="text-xl">
                          {result.type === 'monster' ? '🐲' : 
                           result.type === 'weapon' ? '⚔️' : 
                           result.type === 'armor' ? '🛡️' : '🎒'}
                        </span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">{result.name}</h3>
                          <span className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                            {result.type === 'monster' ? '怪物' : 
                             result.type === 'weapon' ? '武器' : 
                             result.type === 'armor' ? '防具' : '物品'}
                          </span>
                        </div>
                        <p className="text-gray-600">{result.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}

        {/* 数据库统计 - 当没有搜索时显示 */}
        {!searchQuery && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-orange-50 to-red-50 rounded-2xl p-8 border border-orange-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">数据库概览</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl text-white">🐲</span>
                  </div>
                  <div className="text-3xl font-bold text-red-600 mb-1">30+</div>
                  <div className="text-sm text-gray-600">大型怪物</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl text-white">⚔️</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-1">88+</div>
                  <div className="text-sm text-gray-600">武器装备</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl text-white">🛡️</span>
                  </div>
                  <div className="text-3xl font-bold text-green-600 mb-1">120+</div>
                  <div className="text-sm text-gray-600">防具套装</div>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                    <span className="text-2xl text-white">🎒</span>
                  </div>
                  <div className="text-3xl font-bold text-purple-600 mb-1">685+</div>
                  <div className="text-sm text-gray-600">物品道具</div>
                </div>
              </div>
              
              <div className="text-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                  <span className="text-xl">🚀</span>
                  <span className="text-sm text-gray-600">基于静态化架构，搜索响应时间 &lt; 100ms</span>
                </div>
              </div>
            </div>

            {/* 搜索提示 */}
            <div className="mt-8 text-center">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">搜索技巧</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-lg mb-2">💡</div>
                  <div className="font-medium mb-1">关键词搜索</div>
                  <div>输入怪物名称、武器类型等</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-lg mb-2">🎯</div>
                  <div className="font-medium mb-1">精确匹配</div>
                  <div>使用完整名称获得精确结果</div>
                </div>
                <div className="bg-white rounded-xl p-4 shadow-sm">
                  <div className="text-lg mb-2">⚡</div>
                  <div className="font-medium mb-1">实时搜索</div>
                  <div>输入时即时显示匹配结果</div>
                </div>
              </div>
            </div>
          </div>
        )}
      </PageContent>
    </PageLayout>
  );
}
