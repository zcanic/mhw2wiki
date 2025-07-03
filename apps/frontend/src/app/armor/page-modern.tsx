'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';

// 防具套装数据
const armorSets = [
  {
    id: 'rathalos-set',
    name: '火龙套装',
    nameEn: 'Rathalos Set',
    icon: '🔥',
    rarity: 8,
    defense: 520,
    skills: ['攻击', '火属性攻击强化', '弱点特效'],
    setBonus: '火龙之心',
    description: '由火龙材料制作的强力防具套装，提供优秀的攻击力加成',
    type: '攻击型',
    element: '火',
    color: 'from-red-500 to-orange-500'
  },
  {
    id: 'diablos-set',
    name: '角龙套装',
    nameEn: 'Diablos Set',
    icon: '💨',
    rarity: 7,
    defense: 480,
    skills: ['无属性强化', '集中', '攻击'],
    setBonus: '角龙之力',
    description: '沙漠霸主角龙的防具，专为无属性武器设计',
    type: '攻击型',
    element: '无',
    color: 'from-yellow-600 to-orange-600'
  },
  {
    id: 'legiana-set',
    name: '风漂龙套装',
    nameEn: 'Legiana Set',
    icon: '❄️',
    rarity: 6,
    defense: 450,
    skills: ['冰属性攻击强化', '体力增强', '耐寒'],
    setBonus: '风漂龙的恩惠',
    description: '优雅的冰属性防具，提供优秀的生存能力',
    type: '防御型',
    element: '冰',
    color: 'from-blue-400 to-cyan-400'
  },
  {
    id: 'zinogre-set',
    name: '雷狼龙套装',
    nameEn: 'Zinogre Set',
    icon: '⚡',
    rarity: 8,
    defense: 510,
    skills: ['雷属性攻击强化', '跳跃铁人', '回避性能'],
    setBonus: '雷狼龙的加护',
    description: '雷电狼王的防具，提供强大的雷属性支援',
    type: '平衡型',
    element: '雷',
    color: 'from-blue-500 to-purple-500'
  },
  {
    id: 'kushala-set',
    name: '钢龙套装',
    nameEn: 'Kushala Set',
    icon: '💨',
    rarity: 9,
    defense: 580,
    skills: ['回避距离UP', '风压无效', '匠'],
    setBonus: '钢龙的飞翔',
    description: '古龙级别的防具，提供超凡的回避能力',
    type: '技巧型',
    element: '龙',
    color: 'from-gray-400 to-gray-600'
  },
  {
    id: 'kirin-set',
    name: '麒麟套装',
    nameEn: 'Kirin Set',
    icon: '⚡',
    rarity: 9,
    defense: 540,
    skills: ['属性解放', '雷耐性', '精神力'],
    setBonus: '麒麟的加护',
    description: '雷之古龙的神秘防具，释放武器的真正力量',
    type: '支援型',
    element: '雷',
    color: 'from-yellow-400 to-blue-400'
  }
];

const armorTypes = ['全部', '攻击型', '防御型', '平衡型', '技巧型', '支援型'];
const elements = ['全部', '火', '水', '冰', '雷', '龙', '无'];
const rarities = ['全部', '6', '7', '8', '9', '10'];

// 获取稀有度颜色
const getRarityColor = (rarity: number) => {
  if (rarity <= 6) return 'text-green-600 bg-green-100';
  if (rarity <= 7) return 'text-blue-600 bg-blue-100';
  if (rarity <= 8) return 'text-purple-600 bg-purple-100';
  return 'text-orange-600 bg-orange-100';
};

// 获取类型颜色
const getTypeColor = (type: string) => {
  const colors: Record<string, string> = {
    '攻击型': 'text-red-600 bg-red-100',
    '防御型': 'text-blue-600 bg-blue-100',
    '平衡型': 'text-green-600 bg-green-100',
    '技巧型': 'text-purple-600 bg-purple-100',
    '支援型': 'text-yellow-600 bg-yellow-100'
  };
  return colors[type] || 'text-gray-600 bg-gray-100';
};

export default function ArmorPage() {
  const [selectedType, setSelectedType] = useState('全部');
  const [selectedElement, setSelectedElement] = useState('全部');
  const [selectedRarity, setSelectedRarity] = useState('全部');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredArmor = useMemo(() => {
    return armorSets.filter(armor => {
      const matchesType = selectedType === '全部' || armor.type === selectedType;
      const matchesElement = selectedElement === '全部' || armor.element === selectedElement;
      const matchesRarity = selectedRarity === '全部' || armor.rarity.toString() === selectedRarity;
      const matchesSearch = armor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           armor.nameEn.toLowerCase().includes(searchQuery.toLowerCase());
      
      return matchesType && matchesElement && matchesRarity && matchesSearch;
    });
  }, [selectedType, selectedElement, selectedRarity, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* 页面头部 */}
      <section className="bg-gradient-to-br from-green-500 via-green-600 to-emerald-600 text-white py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl mb-6">
              <span className="text-4xl">🛡️</span>
            </div>
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">防具集</h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto mb-8">
              探索《怪物猎人：荒野》中的所有防具套装，打造完美的技能搭配
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold">{armorSets.length}</div>
                <div className="text-green-200">防具套装</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{new Set(armorSets.map(a => a.type)).size}</div>
                <div className="text-green-200">套装类型</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{armorSets.reduce((sum, a) => sum + a.skills.length, 0)}</div>
                <div className="text-green-200">技能总数</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">{Math.max(...armorSets.map(a => a.defense))}</div>
                <div className="text-green-200">最高防御</div>
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
                className="block w-full pl-10 pr-3 py-4 border border-gray-300 rounded-xl shadow-sm bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 text-lg"
                placeholder="搜索防具套装..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* 筛选器 */}
          <div className="flex flex-wrap gap-4 items-center justify-center">
            {/* 类型筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">套装类型</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
              >
                {armorTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* 属性筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">属性</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedElement}
                onChange={(e) => setSelectedElement(e.target.value)}
              >
                {elements.map(element => (
                  <option key={element} value={element}>{element}</option>
                ))}
              </select>
            </div>

            {/* 稀有度筛选 */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">稀有度</label>
              <select
                className="block px-4 py-2 border border-gray-300 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                value={selectedRarity}
                onChange={(e) => setSelectedRarity(e.target.value)}
              >
                {rarities.map(rarity => (
                  <option key={rarity} value={rarity}>{rarity === '全部' ? rarity : `${rarity}星`}</option>
                ))}
              </select>
            </div>
          </div>

          {/* 结果统计 */}
          <div className="mt-4 text-center">
            <p className="text-gray-600">
              找到 <span className="font-semibold text-green-600">{filteredArmor.length}</span> 套防具
            </p>
          </div>
        </div>
      </section>

      {/* 防具列表 */}
      <section className="py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {filteredArmor.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-4">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">未找到匹配的防具</h3>
              <p className="text-gray-600">尝试调整筛选条件或搜索关键词</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArmor.map((armor) => (
                <Link
                  key={armor.id}
                  href={`/armor/${armor.id}`}
                  className="group block"
                >
                  <div className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg hover:shadow-2xl border border-gray-200/60 hover:border-gray-300/60 overflow-hidden transform hover:scale-[1.02] transition-all duration-300">
                    {/* 防具图像区域 */}
                    <div className={`relative h-48 bg-gradient-to-br ${armor.color} flex items-center justify-center`}>
                      <div className="text-6xl">{armor.icon}</div>
                      <div className="absolute top-4 right-4">
                        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold ${getRarityColor(armor.rarity)}`}>
                          {armor.rarity}星
                        </span>
                      </div>
                      <div className="absolute top-4 left-4">
                        <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getTypeColor(armor.type)}`}>
                          {armor.type}
                        </span>
                      </div>
                    </div>

                    {/* 防具信息 */}
                    <div className="p-6">
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-green-600 transition-colors">
                          {armor.name}
                        </h3>
                        <p className="text-sm text-gray-500">{armor.nameEn}</p>
                      </div>

                      {/* 防御力 */}
                      <div className="flex items-center mb-4">
                        <svg className="w-4 h-4 mr-2 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                        <span className="text-sm text-gray-600">防御力: <span className="font-semibold text-green-600">{armor.defense}</span></span>
                      </div>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {armor.description}
                      </p>

                      {/* 技能列表 */}
                      <div className="mb-4">
                        <h4 className="text-sm font-medium text-gray-700 mb-2">主要技能:</h4>
                        <div className="flex flex-wrap gap-1">
                          {armor.skills.slice(0, 3).map((skill, index) => (
                            <span key={index} className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-green-100 text-green-800">
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* 套装奖励 */}
                      <div className="mb-4">
                        <div className="flex items-center text-sm text-purple-600">
                          <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                          </svg>
                          {armor.setBonus}
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center text-gray-500 text-sm">
                          <span>属性: {armor.element}</span>
                        </div>
                        <div className="flex items-center text-green-600 font-medium group-hover:text-green-700 transition-colors">
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

      {/* 防具搭配指南 */}
      <section className="py-16 bg-gradient-to-br from-gray-100 to-gray-50">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              防具搭配指南
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              根据不同的狩猎风格选择合适的防具搭配
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-6">⚔️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">攻击型配装</h3>
              <p className="text-gray-600 mb-4">专注于提升攻击力和暴击率的配装思路</p>
              <div className="text-sm text-green-600 font-medium">
                推荐技能：攻击、暴击、弱点特效
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-6">🛡️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">防御型配装</h3>
              <p className="text-gray-600 mb-4">注重生存能力和防护技能的稳健配装</p>
              <div className="text-sm text-green-600 font-medium">
                推荐技能：防御、体力、耐性
              </div>
            </div>

            <div className="text-center p-8 bg-white rounded-3xl shadow-lg">
              <div className="text-5xl mb-6">⚡</div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">技巧型配装</h3>
              <p className="text-gray-600 mb-4">提升操作手感和技能发动率的配装</p>
              <div className="text-sm text-green-600 font-medium">
                推荐技能：回避、集中、匠
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
