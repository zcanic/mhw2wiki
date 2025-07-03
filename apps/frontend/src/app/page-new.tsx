import Link from 'next/link';
import Image from 'next/image';

const features = [
  {
    title: '怪物图鉴',
    description: '探索所有大型怪物的详细信息、弱点分析和狩猎策略',
    icon: '🐲',
    href: '/monsters',
    gradient: 'from-red-500 via-red-600 to-orange-500',
    stats: { count: 30, label: '大型怪物' },
    accent: 'border-red-400',
    bgAccent: 'bg-red-50'
  },
  {
    title: '武器库',
    description: '查看所有武器类型的属性、制作材料和强化路线',
    icon: '⚔️',
    href: '/weapons',
    gradient: 'from-blue-500 via-blue-600 to-indigo-500',
    stats: { count: 88, label: '武器装备' },
    accent: 'border-blue-400',
    bgAccent: 'bg-blue-50'
  },
  {
    title: '防具集',
    description: '浏览防具套装、技能效果和装饰品搭配方案',
    icon: '🛡️',
    href: '/armor',
    gradient: 'from-green-500 via-green-600 to-emerald-500',
    stats: { count: 120, label: '防具套装' },
    accent: 'border-green-400',
    bgAccent: 'bg-green-50'
  },
  {
    title: '物品库',
    description: '查找制作材料、消耗品和珍稀素材的获取方式',
    icon: '🎒',
    href: '/items',
    gradient: 'from-purple-500 via-purple-600 to-pink-500',
    stats: { count: 685, label: '物品道具' },
    accent: 'border-purple-400',
    bgAccent: 'bg-purple-50'
  }
];

const quickStats = [
  { label: '大型怪物', value: '30', icon: '🐲', color: 'text-red-600', bg: 'bg-red-100' },
  { label: '武器装备', value: '88', icon: '⚔️', color: 'text-blue-600', bg: 'bg-blue-100' },
  { label: '防具套装', value: '120', icon: '🛡️', color: 'text-green-600', bg: 'bg-green-100' },
  { label: '物品道具', value: '685', icon: '🎒', color: 'text-purple-600', bg: 'bg-purple-100' },
];

const highlights = [
  {
    title: '实时数据更新',
    description: '游戏数据实时同步，确保信息准确性',
    icon: '🔄'
  },
  {
    title: '智能搜索',
    description: '快速找到你需要的怪物、武器和装备信息',
    icon: '🔍'
  },
  {
    title: '移动优化',
    description: '完美适配手机和平板，随时随地查阅资料',
    icon: '📱'
  }
];

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section - 重新设计 */}
      <section className="relative px-4 py-20 sm:py-32 overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-50">
        {/* 背景装饰 */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-1/4 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-red-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="text-center mb-16">
            {/* 主标题 */}
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-orange-500 to-red-600 rounded-3xl shadow-2xl mb-8 transform hover:scale-110 transition-transform duration-300">
                <span className="text-4xl">🏹</span>
              </div>
              <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-gray-900 via-orange-800 to-gray-900 bg-clip-text text-transparent mb-6 leading-tight">
                MHWildsWiki
              </h1>
              <p className="text-2xl sm:text-3xl text-gray-700 mb-6 font-medium">
                《怪物猎人：荒野》现代化资料库
              </p>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                探索完整的游戏数据，掌握狩猎技巧，成为顶级猎人。现代化设计，极致用户体验。
              </p>
            </div>

            {/* CTA按钮 */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-20">
              <Link
                href="/monsters"
                className="group inline-flex items-center justify-center px-10 py-4 bg-gradient-to-r from-orange-500 to-red-600 text-white font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-3 text-xl group-hover:animate-bounce">🔥</span>
                开始狩猎之旅
              </Link>
              <Link
                href="/search"
                className="group inline-flex items-center justify-center px-10 py-4 bg-white text-gray-700 font-bold text-lg rounded-2xl shadow-lg hover:shadow-2xl border-2 border-gray-200 hover:border-orange-300 transform hover:scale-105 transition-all duration-300"
              >
                <span className="mr-3 text-xl group-hover:scale-110 transition-transform">🔍</span>
                全局搜索
              </Link>
            </div>

            {/* 数据统计 */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {quickStats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl border border-gray-200/50 hover:border-gray-300/50 transform hover:scale-105 transition-all duration-300"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 ${stat.bg} rounded-xl mb-3`}>
                    <span className="text-2xl">{stat.icon}</span>
                  </div>
                  <div className={`text-3xl font-bold ${stat.color} mb-1`}>{stat.value}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 功能特色区域 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              探索游戏世界
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              全面的游戏资料库，帮助你在《怪物猎人：荒野》的世界中成为顶级猎人
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {features.map((feature, index) => (
              <Link
                key={feature.title}
                href={feature.href}
                className="group block"
              >
                <div className={`relative overflow-hidden rounded-3xl bg-gradient-to-br ${feature.gradient} p-1 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-[1.02]`}>
                  <div className={`bg-white rounded-3xl p-8 h-full ${feature.bgAccent}/30`}>
                    <div className="flex items-start justify-between mb-6">
                      <div className="text-5xl mb-4">{feature.icon}</div>
                      <div className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-bold border-2 ${feature.accent} bg-white/80`}>
                        {feature.stats.count} {feature.stats.label}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-gray-700 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {feature.description}
                    </p>
                    <div className="flex items-center text-orange-600 font-semibold group-hover:text-orange-700 transition-colors">
                      <span>了解更多</span>
                      <svg className="w-5 h-5 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 特色亮点 */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              为什么选择我们
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              现代化的设计理念，极致的用户体验，让你的狩猎之旅更加精彩
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.title}
                className="text-center p-8 bg-white rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-5xl mb-6">{highlight.icon}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{highlight.title}</h3>
                <p className="text-gray-600 leading-relaxed">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-red-600">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            准备好开始你的冒险了吗？
          </h2>
          <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
            立即开始探索《怪物猎人：荒野》的精彩世界，成为传奇猎人
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link
              href="/monsters"
              className="inline-flex items-center justify-center px-10 py-4 bg-white text-orange-600 font-bold text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-3 text-xl">🎯</span>
              探索怪物
            </Link>
            <Link
              href="/weapons"
              className="inline-flex items-center justify-center px-10 py-4 bg-transparent border-2 border-white text-white font-bold text-lg rounded-2xl hover:bg-white hover:text-orange-600 transform hover:scale-105 transition-all duration-300"
            >
              <span className="mr-3 text-xl">⚔️</span>
              查看武器
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
