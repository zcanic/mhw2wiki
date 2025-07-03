import Link from 'next/link';
import { StaticMonsterList } from '../components/StaticMonsterList';
import { PageLayout, PageHeader, PageContent, ContentSection, ResponsiveGrid } from '../components/layout/PageLayout';
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

const features = [
  {
    title: '怪物图鉴',
    description: '探索所有大型怪物的详细信息、弱点和奖励',
    icon: '🐲',
    href: '/monsters',
    color: 'from-red-500 to-orange-500',
    stats: { count: 30, label: '大型怪物' }
  },
  {
    title: '武器库',
    description: '查看所有武器类型的属性、制作材料和强化路线',
    icon: '⚔️',
    href: '/weapons',
    color: 'from-blue-500 to-indigo-500',
    stats: { count: 88, label: '武器装备' }
  },
  {
    title: '防具集',
    description: '浏览防具套装、技能效果和装饰品搭配',
    icon: '🛡️',
    href: '/armor',
    color: 'from-green-500 to-emerald-500',
    stats: { count: 120, label: '防具套装' }
  },
  {
    title: '物品库',
    description: '查找制作材料、消耗品和珍稀素材的获取方式',
    icon: '🎒',
    href: '/items',
    color: 'from-purple-500 to-pink-500',
    stats: { count: 685, label: '物品道具' }
  }
];

const quickStats = [
  { label: '大型怪物', value: '30', icon: '🐲', color: 'text-red-600' },
  { label: '武器装备', value: '88', icon: '⚔️', color: 'text-blue-600' },
  { label: '防具套装', value: '120', icon: '🛡️', color: 'text-green-600' },
  { label: '物品道具', value: '685', icon: '🎒', color: 'text-purple-600' },
];

export default function Home() {
  return (
    <div id="main-content">
      <PageLayout maxWidth="xl" padding="lg">
        {/* Hero Section */}
        <PageHeader
          title="MHWildsWiki"
          subtitle="欢迎来到荒野世界"
          description="《怪物猎人：荒野》现代化资料库，探索完整的游戏数据，包括怪物、武器、装备等详细信息。"
          icon={
            <div className="text-6xl">🏹</div>
          }
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/monsters">
              <Button size="lg" className="shadow-lg w-full sm:w-auto">
                开始探索
              </Button>
            </Link>
            <Link href="/search">
              <Button variant="outline" size="lg" className="w-full sm:w-auto">
                全局搜索
              </Button>
            </Link>
          </div>
        </PageHeader>

        <PageContent>
          {/* 数据统计卡片 */}
          <ContentSection
            title="数据概览"
            description="当前收录的游戏数据统计"
            className="mb-12"
          >
            <ResponsiveGrid cols={{ default: 2, lg: 4 }} gap="md">
              {quickStats.map((stat) => (
                <Card key={stat.label} className="text-center hover:shadow-md transition-shadow duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-center mb-3">
                      <span className="text-3xl mr-2">{stat.icon}</span>
                      <div className={`text-3xl font-bold ${stat.color}`}>
                        {stat.value}
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </ResponsiveGrid>
          </ContentSection>

          {/* 功能特色区域 */}
          <ContentSection
            title="探索内容"
            description="选择您感兴趣的内容分类开始探索"
            headerActions={
              <Badge variant="success" size="sm">
                持续更新
              </Badge>
            }
          >
            <ResponsiveGrid cols={{ default: 1, md: 2 }} gap="lg">
              {features.map((feature) => (
                <Link key={feature.title} href={feature.href} className="group">
                  <Card className="h-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                    <div className={`bg-gradient-to-br ${feature.color} p-6 text-white relative overflow-hidden`}>
                      {/* 背景装饰 */}
                      <div className="absolute top-0 right-0 -mr-10 -mt-10 w-32 h-32 rounded-full bg-white/10" />
                      <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-24 h-24 rounded-full bg-black/10" />
                      
                      <div className="relative z-10">
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-4xl">{feature.icon}</span>
                          <Badge variant="default" size="sm" className="opacity-90 bg-white/20 text-white border-white/30">
                            {feature.stats.count}+ {feature.stats.label}
                          </Badge>
                        </div>
                        <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                        <p className="text-white/90 leading-relaxed">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                    
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">
                          点击进入 {feature.title}
                        </span>
                        <div className="text-gray-400 group-hover:text-gray-600 group-hover:translate-x-1 transition-all duration-200">
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </ResponsiveGrid>
          </ContentSection>

          {/* 最新怪物预览 */}
          <ContentSection
            title="最新怪物"
            description="查看最近添加的怪物数据"
            headerActions={
              <Link href="/monsters">
                <Button variant="outline" size="sm">
                  查看全部 →
                </Button>
              </Link>
            }
          >
            <StaticMonsterList />
          </ContentSection>
        </PageContent>
      </PageLayout>
    </div>
  );
}
