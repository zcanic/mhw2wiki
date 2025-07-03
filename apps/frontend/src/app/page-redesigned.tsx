import Link from 'next/link';
import { StaticMonsterList } from '../components/StaticMonsterList';

const features = [
  {
    title: '怪物图鉴',
    description: '探索所有大型怪物的详细信息、弱点和奖励材料',
    icon: '🐲',
    href: '/monsters',
    gradient: 'from-red-600 via-red-500 to-orange-500',
    stats: { count: 30, label: '大型怪物' },
    accent: 'border-red-500'
  },
  {
    title: '武器库',
    description: '查看所有武器类型的属性、制作材料和强化路线',
    icon: '⚔️',
    href: '/weapons',
    gradient: 'from-blue-600 via-blue-500 to-indigo-500',
    stats: { count: 88, label: '武器装备' },
    accent: 'border-blue-500'
  },
  {
    title: '防具集',
    description: '浏览防具套装、技能效果和装饰品搭配方案',
    icon: '🛡️',
    href: '/armor',
    gradient: 'from-green-600 via-green-500 to-emerald-500',
    stats: { count: 120, label: '防具套装' },
    accent: 'border-green-500'
  },
  {
    title: '物品库',
    description: '查找制作材料、消耗品和珍稀素材的获取方式',
    icon: '🎒',
    href: '/items',
    gradient: 'from-purple-600 via-purple-500 to-pink-500',
    stats: { count: 685, label: '物品道具' },
    accent: 'border-purple-500'
  }
];

const quickStats = [
  { label: '大型怪物', value: '30', icon: '🐲', bg: 'bg-red-500' },
  { label: '武器装备', value: '88', icon: '⚔️', bg: 'bg-blue-500' },
  { label: '防具套装', value: '120', icon: '🛡️', bg: 'bg-green-500' },
  { label: '物品道具', value: '685', icon: '🎒', bg: 'bg-purple-500' },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100">
      {/* Hero Section */}
      <section className="relative px-4 py-20 sm:py-32 overflow-hidden">
        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-br from-orange-200/30 to-red-200/30 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-blue-200/20 to-purple-200/20 rounded-full blur-3xl" />
        </div>

        <div className="container mx-auto max-w-6xl text-center relative z-10">
          {/* 主标题 */}
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl shadow-2xl mb-6 transform hover:scale-110 transition-transform duration-300">
              <span className="text-3xl">🏹</span>
            </div>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent mb-6">
              MHWildsWiki
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-4 max-w-3xl mx-auto">
              《怪物猎人：荒野》现代化资料库
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              探索完整的游戏数据，掌握狩猎技巧，成为顶级猎人
            </p>
          </div>

          {/* CTA按钮 */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link
              href="/monsters"
              className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">🔥</span>
              开始狩猎之旅
            </Link>
            <Link
              href="/search"
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-2">🔍</span>
              全局搜索
            </Link>
          </div>

          {/* 数据统计 */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto">
            {quickStats.map((stat, index) => (
              <div
                key={stat.label}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-xl mb-3 shadow-lg`}>
                  <span className="text-2xl">{stat.icon}</span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 功能特色区域 */}
      <section className="px-4 py-16 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              探索游戏世界
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              全面的游戏数据库，助您成为传奇猎人
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group relative"
              >
                <div className="relative bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden border border-gray-100 hover:border-gray-200">
                  {/* 渐变背景 */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                  
                  {/* 内容 */}
                  <div className="relative p-8">
                    {/* 顶部信息 */}
                    <div className="flex items-start justify-between mb-6">
                      <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                        <span className="text-3xl">{feature.icon}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{feature.stats.count}+</div>
                        <div className="text-sm text-gray-500">{feature.stats.label}</div>
                      </div>
                    </div>

                    {/* 标题和描述 */}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-gray-900 group-hover:to-gray-700 transition-all duration-300">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>

                    {/* 底部箭头 */}
                    <div className="flex items-center text-gray-400 group-hover:text-gray-600">
                      <span className="text-sm font-medium mr-2">立即探索</span>
                      <svg 
                        className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>

                  {/* 底部装饰线 */}
                  <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${feature.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left`} />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 最新怪物预览 */}
      <section className="px-4 py-16 bg-gray-50">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">
                最新怪物
              </h2>
              <p className="text-gray-600">
                查看最近添加的怪物数据
              </p>
            </div>
            <Link
              href="/monsters"
              className="inline-flex items-center px-6 py-3 bg-white text-gray-700 font-semibold rounded-xl shadow-lg hover:shadow-xl border border-gray-200 hover:border-gray-300 transform hover:scale-105 transition-all duration-300"
            >
              查看全部
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
          <StaticMonsterList />
        </div>
      </section>
    </div>
  );
}
