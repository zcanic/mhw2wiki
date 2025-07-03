'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// 武器类型数据
const weaponTypes = [
  {
    id: 'great-sword',
    name: '大剑',
    nameEn: 'Great Sword',
    icon: '🗡️',
    description: '攻击力极高的重型武器，能造成巨大伤害',
    category: '近战',
    difficulty: '简单',
    color: 'from-gray-500 to-gray-700',
    count: 12
  },
  {
    id: 'long-sword',
    name: '太刀',
    nameEn: 'Long Sword',
    icon: '⚔️',
    description: '平衡性优秀的剑类武器，具有气刃系统',
    category: '近战',
    difficulty: '中等',
    color: 'from-blue-500 to-blue-700',
    count: 14
  },
  {
    id: 'sword-shield',
    name: '片手剑',
    nameEn: 'Sword & Shield',
    icon: '🛡️',
    description: '攻防平衡，机动性强的武器',
    category: '近战',
    difficulty: '简单',
    color: 'from-green-500 to-green-700',
    count: 11
  },
  {
    id: 'dual-blades',
    name: '双剑',
    nameEn: 'Dual Blades',
    icon: '⚡',
    description: '攻击速度极快的双刀武器',
    category: '近战',
    difficulty: '中等',
    color: 'from-yellow-500 to-orange-500',
    count: 13
  },
  {
    id: 'hammer',
    name: '大锤',
    nameEn: 'Hammer',
    icon: '🔨',
    description: '专门打击头部的钝器武器',
    category: '近战',
    difficulty: '中等',
    color: 'from-orange-500 to-red-500',
    count: 10
  },
  {
    id: 'hunting-horn',
    name: '狩猎笛',
    nameEn: 'Hunting Horn',
    icon: '🎺',
    description: '能提供团队增益的支援武器',
    category: '近战',
    difficulty: '困难',
    color: 'from-purple-500 to-purple-700',
    count: 8
  },
  {
    id: 'lance',
    name: '长枪',
    nameEn: 'Lance',
    icon: '🏹',
    description: '防御力强的突刺武器',
    category: '近战',
    difficulty: '中等',
    color: 'from-indigo-500 to-indigo-700',
    count: 9
  },
  {
    id: 'gunlance',
    name: '铳枪',
    nameEn: 'Gunlance',
    icon: '💥',
    description: '结合枪炮的复合武器',
    category: '近战',
    difficulty: '困难',
    color: 'from-red-500 to-red-700',
    count: 8
  },
  {
    id: 'switch-axe',
    name: '斩击斧',
    nameEn: 'Switch Axe',
    icon: '⚡',
    description: '可变形的斧剑武器',
    category: '近战',
    difficulty: '困难',
    color: 'from-teal-500 to-teal-700',
    count: 7
  },
  {
    id: 'charge-blade',
    name: '盾斧',
    nameEn: 'Charge Blade',
    icon: '⚔️',
    description: '技术性极强的变形武器',
    category: '近战',
    difficulty: '困难',
    color: 'from-cyan-500 to-cyan-700',
    count: 6
  },
  {
    id: 'insect-glaive',
    name: '操虫棍',
    nameEn: 'Insect Glaive',
    icon: '🦗',
    description: '具有空中优势的长棍武器',
    category: '近战',
    difficulty: '困难',
    color: 'from-lime-500 to-green-500',
    count: 9
  },
  {
    id: 'light-bowgun',
    name: '轻弩',
    nameEn: 'Light Bowgun',
    icon: '🏹',
    description: '机动性强的远程武器',
    category: '远程',
    difficulty: '中等',
    color: 'from-emerald-500 to-emerald-700',
    count: 11
  },
  {
    id: 'heavy-bowgun',
    name: '重弩',
    nameEn: 'Heavy Bowgun',
    icon: '🎯',
    description: '火力强大的远程武器',
    category: '远程',
    difficulty: '中等',
    color: 'from-slate-500 to-slate-700',
    count: 10
  },
  {
    id: 'bow',
    name: '弓',
    nameEn: 'Bow',
    icon: '🏹',
    description: '精准灵活的远程武器',
    category: '远程',
    difficulty: '中等',
    color: 'from-amber-500 to-amber-700',
    count: 12
  }
];

const categories = ['全部', '近战', '远程'];
const difficulties = ['全部', '简单', '中等', '困难'];

// 获取难度颜色
const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case '简单': return 'text-green-600 bg-green-100';
    case '中等': return 'text-yellow-600 bg-yellow-100';
    case '困难': return 'text-red-600 bg-red-100';
    default: return 'text-gray-600 bg-gray-100';
  }
};

export default function WeaponsPage() {
  const [selectedCategory, setSelectedCategory] = useState('全部');
  const [selectedDifficulty, setSelectedDifficulty] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredWeapons = useMemo(() => {
    return weaponTypes.filter(weapon => {
      const matchesCategory = selectedCategory === '全部' || weapon.category === selectedCategory;
      const matchesDifficulty = selectedDifficulty === '全部' || weapon.difficulty === selectedDifficulty;
      const matchesSearch = weapon.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           weapon.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, selectedDifficulty, searchQuery]);

  const totalWeapons = weaponTypes.reduce((sum, weapon) => sum + weapon.count, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <span className="text-4xl">⚔️</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">武器库</h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              掌握《怪物猎人：荒野》中的所有武器类型，找到最适合你的狩猎方式
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">{weaponTypes.length}</div>
                <div className="text-blue-200">武器类型</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{totalWeapons}</div>
                <div className="text-blue-200">武器总数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{weaponTypes.filter(w => w.category === '近战').length}</div>
                <div className="text-blue-200">近战武器</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{weaponTypes.filter(w => w.category === '远程').length}</div>
                <div className="text-blue-200">远程武器</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 筛选和搜索区域 */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* 搜索框 */}
          <div className="mb-6">
            <div className="relative max-w-2xl mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <svg className="h-5 w-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
                placeholder="搜索武器类型..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 筛选器 */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* 类别筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">武器类别</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* 难度筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">使用难度</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                value={selectedDifficulty}
                onChange={(e) => setSelectedDifficulty(e.target.value)}
              >
                {difficulties.map(difficulty => (
                  <option key={difficulty} value={difficulty}>{difficulty}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 结果统计 */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              找到 <span className="font-semibold text-blue-600">{filteredWeapons.length}</span> 种武器类型
            </p>
          </div>
        </div>
      </section>

      {/* 武器类型网格 */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredWeapons.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">未找到匹配的武器</h3>
              <p className="text-gray-600">尝试调整筛选条件或搜索关键词</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredWeapons.map((weapon) => (
                <Link
                  key={weapon.id}
                  href={`/weapons/${weapon.id}`}
                  className="group block"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/60 hover:border-gray-300/60 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                    {/* 武器图标区域 */}
                    <div className={`relative h-32 bg-gradient-to-br ${weapon.color} flex items-center justify-center`}>
                      <div className="text-5xl">{weapon.icon}</div>
                      <div className="absolute top-3 right-3">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-bold ${getDifficultyColor(weapon.difficulty)}`}>
                          {weapon.difficulty}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-white/20 text-white">
                          {weapon.category}
                        </span>
                      </div>
                    </div>

                    {/* 武器信息 */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">
                          {weapon.name}
                        </h3>
                        <p className="text-sm text-gray-500">{weapon.nameEn}</p>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {weapon.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                          </svg>
                          {weapon.count} 把武器
                        </div>
                        <div className="flex items-center text-blue-600 font-medium group-hover:text-blue-700 transition-colors">
                          <span>查看详情</span>
                          <svg className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 武器使用指南 */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              武器选择指南
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据你的游戏风格选择最适合的武器类型
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-6">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">新手推荐</h3>
              <p className="text-gray-600 mb-4">片手剑、大剑、大锤等简单易上手的武器类型</p>
              <div className="text-sm text-blue-600 font-medium">
                操作简单，容错率高
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">进阶挑战</h3>
              <p className="text-gray-600 mb-4">太刀、双剑、弓等需要一定技巧的武器</p>
              <div className="text-sm text-blue-600 font-medium">
                平衡性好，技巧性强
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-6">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">专家级</h3>
              <p className="text-gray-600 mb-4">盾斧、斩击斧、操虫棍等高难度武器</p>
              <div className="text-sm text-blue-600 font-medium">
                技术要求高，威力巨大
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
