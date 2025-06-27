import Link from 'next/link';
import { MonsterList } from '../components/MonsterList';

const features = [
  {
    title: '怪物图鉴',
    description: '探索所有大型怪物的详细信息、弱点和奖励',
    icon: '🐲',
    href: '/monsters',
    color: 'from-red-500 to-orange-500'
  },
  {
    title: '武器库',
    description: '查看所有武器类型的属性、制作材料和强化路线',
    icon: '⚔️',
    href: '/weapons',
    color: 'from-blue-500 to-indigo-500'
  },
  {
    title: '防具集',
    description: '浏览防具套装、技能效果和装饰品搭配',
    icon: '🛡️',
    href: '/armor',
    color: 'from-green-500 to-emerald-500'
  },
  {
    title: '物品库',
    description: '查找制作材料、消耗品和珍稀素材的获取方式',
    icon: '🎒',
    href: '/items',
    color: 'from-purple-500 to-pink-500'
  }
];

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          MHWildsWiki
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          《怪物猎人：荒野》现代化资料库
        </p>
        <div className="bg-gradient-to-r from-orange-500 to-red-600 text-white p-8 rounded-2xl shadow-lg max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">欢迎来到荒野世界！</h2>
          <p className="text-lg opacity-90">
            探索《怪物猎人：荒野》的完整游戏数据，包括怪物、武器、装备等详细信息。
          </p>
        </div>
      </section>

      {/* Features Grid */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-8">
          探索内容
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <Link key={feature.title} href={feature.href}>
              <div className="group cursor-pointer">
                <div className={`bg-gradient-to-br ${feature.color} text-white rounded-xl p-6 transition-transform duration-300 group-hover:scale-105 shadow-lg`}>
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm opacity-90">{feature.description}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Recent Monsters Preview */}
      <section>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-gray-900">
            最新怪物
          </h2>
          <Link 
            href="/monsters"
            className="text-blue-600 hover:text-blue-800 font-medium flex items-center space-x-1"
          >
            <span>查看全部</span>
            <span>→</span>
          </Link>
        </div>
        <MonsterList />
      </section>
    </div>
  );
}
