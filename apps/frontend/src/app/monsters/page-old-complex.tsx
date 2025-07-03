'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { PageLayout, PageHeader, PageContent, ContentSection } from '../../components/layout/PageLayout';
import { Card, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Badge } from '../../components/ui/Badge';
import { DataFilter, SearchFilter } from '../../components/ui/DataFilter';
import { StaticMonsterList } from '../../components/StaticMonsterList';
import { StaticSearchBar } from '../../components/StaticSearchBar';

// 模拟怪物数据 - 实际项目中会从静态数据API获取
const mockMonsters = [
  {
    id: '1',
    name: 'Rathalos',
    nameZh: '火龙',
    species: 'Flying Wyvern',
    speciesZh: '飞龙种',
    threatLevel: 8,
    habitat: 'Forest',
    habitatZh: '森林',
    description: '森林之王，以其强力的火焰攻击和飞行能力著称',
    rarity: 8,
    weakness: ['水', '龙'],
    imageUrl: '/images/monsters/rathalos.jpg'
  },
  {
    id: '2',
    name: 'Diablos',
    nameZh: '角龙',
    species: 'Flying Wyvern',
    speciesZh: '飞龙种',
    threatLevel: 7,
    habitat: 'Desert',
    habitatZh: '沙漠',
    description: '沙漠霸主，拥有巨大的角和强力的冲撞攻击',
    rarity: 7,
    weakness: ['冰', '水'],
    imageUrl: '/images/monsters/diablos.jpg'
  },
  {
    id: '3',
    name: 'Anjanath',
    nameZh: '蛮颚龙',
    species: 'Brute Wyvern',
    speciesZh: '兽龙种',
    threatLevel: 6,
    habitat: 'Ancient Forest',
    habitatZh: '古代树森林',
    description: '凶猛的肉食龙，以其强力的颚部攻击和火焰喷射著称',
    rarity: 6,
    weakness: ['水', '雷'],
    imageUrl: '/images/monsters/anjanath.jpg'
  }
];

interface Monster {
  id: string;
  name: string;
  nameZh: string;
  species: string;
  speciesZh: string;
  threatLevel: number;
  habitat: string;
  habitatZh: string;
  description: string;
  rarity: number;
  weakness: string[];
  imageUrl: string;
}

export default function MonstersPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('name');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc');
  const [filters, setFilters] = useState<Record<string, any>>({});

  // 处理搜索和筛选
  const filteredMonsters = useMemo(() => {
    let filtered = mockMonsters;

    // 搜索过滤
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(monster => 
        monster.name.toLowerCase().includes(query) ||
        monster.nameZh.includes(query) ||
        monster.description.includes(query) ||
        monster.speciesZh.includes(query) ||
        monster.habitatZh.includes(query)
      );
    }

    // 种类筛选
    if (filters.species && filters.species.length > 0) {
      filtered = filtered.filter(monster => 
        filters.species.includes(monster.species)
      );
    }

    // 栖息地筛选
    if (filters.habitat && filters.habitat.length > 0) {
      filtered = filtered.filter(monster => 
        filters.habitat.includes(monster.habitat)
      );
    }

    // 威胁等级筛选
    if (filters.threatLevel) {
      filtered = filtered.filter(monster => 
        monster.threatLevel >= filters.threatLevel
      );
    }

    // 排序
    filtered.sort((a, b) => {
      let comparison = 0;
      switch (sortBy) {
        case 'name':
          comparison = a.nameZh.localeCompare(b.nameZh);
          break;
        case 'threatLevel':
          comparison = a.threatLevel - b.threatLevel;
          break;
        case 'rarity':
          comparison = a.rarity - b.rarity;
          break;
        default:
          comparison = 0;
      }
      return sortOrder === 'desc' ? -comparison : comparison;
    });

    return filtered;
  }, [searchQuery, sortBy, sortOrder, filters]);

  // 获取筛选器配置
  const filterSections = useMemo(() => {
    const speciesCount = mockMonsters.reduce((acc, monster) => {
      acc[monster.species] = (acc[monster.species] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    const habitatCount = mockMonsters.reduce((acc, monster) => {
      acc[monster.habitat] = (acc[monster.habitat] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return [
      {
        id: 'species',
        title: '怪物种类',
        type: 'checkbox' as const,
        options: Object.entries(speciesCount).map(([species, count]) => ({
          id: species,
          label: species === 'Flying Wyvern' ? '飞龙种' : 
                 species === 'Brute Wyvern' ? '兽龙种' : species,
          value: species,
          count
        }))
      },
      {
        id: 'habitat',
        title: '栖息地',
        type: 'checkbox' as const,
        options: Object.entries(habitatCount).map(([habitat, count]) => ({
          id: habitat,
          label: habitat === 'Forest' ? '森林' : 
                 habitat === 'Desert' ? '沙漠' : 
                 habitat === 'Ancient Forest' ? '古代树森林' : habitat,
          value: habitat,
          count
        }))
      },
      {
        id: 'threatLevel',
        title: '威胁等级',
        type: 'range' as const,
        min: 1,
        max: 10,
        step: 1
      }
    ];
  }, []);

  const sortOptions = [
    { value: 'name', label: '名称' },
    { value: 'threatLevel', label: '威胁等级' },
    { value: 'rarity', label: '稀有度' }
  ];

  // 获取统计数据
  const stats = {
    total: mockMonsters.length,
    filtered: filteredMonsters.length,
    avgThreatLevel: Math.round(
      filteredMonsters.reduce((sum, m) => sum + m.threatLevel, 0) / filteredMonsters.length || 0
    )
  };

  return (
    <div id="main-content">
      <PageLayout maxWidth="2xl" padding="lg">
        <PageHeader
          title="怪物图鉴"
          subtitle="大型怪物资料库"
          description="探索《怪物猎人：荒野》中所有大型怪物的详细信息，包括弱点、栖息地和奖励物品。"
          icon={
            <div className="text-5xl">🐲</div>
          }
          breadcrumbs={[
            { label: '首页', href: '/' },
            { label: '怪物图鉴' }
          ]}
        >
          <div className="flex flex-col sm:flex-row gap-3">
            <Button size="lg" className="shadow-lg">
              <Link href="/monsters/compare" className="flex items-center space-x-2">
                <span>怪物对比</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
                </svg>
              </Link>
            </Button>
            <Button variant="outline" size="lg">
              <Link href="/monsters/weakness-chart" className="flex items-center space-x-2">
                <span>弱点图表</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 00-2-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v4" />
                </svg>
              </Link>
            </Button>
          </div>
        </PageHeader>

        <PageContent
          sidebar={
            <div className="space-y-6">
              {/* 数据统计 */}
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">数据统计</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">总数量</span>
                      <Badge variant="monster">{stats.total}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">显示中</span>
                      <Badge variant="success">{stats.filtered}</Badge>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-sm text-gray-600">平均威胁等级</span>
                      <Badge variant="warning">{stats.avgThreatLevel}</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* 筛选器 */}
              <DataFilter
                sections={filterSections}
                onFiltersChange={setFilters}
                defaultCollapsed={false}
              />
            </div>
          }
          sidebarPosition="right"
          sidebarWidth="md"
        >
          {/* 搜索和排序 */}
          <ContentSection className="mb-6">
            <SearchFilter
              onSearch={setSearchQuery}
              onSort={(sortBy, sortOrder) => {
                setSortBy(sortBy);
                setSortOrder(sortOrder);
              }}
              placeholder="搜索怪物名称、种类、栖息地..."
              sortOptions={sortOptions}
            />
          </ContentSection>

          {/* 怪物卡片网格 */}
          <ContentSection
            title={`怪物列表 (${filteredMonsters.length})`}
            description={filteredMonsters.length > 0 ? '点击怪物卡片查看详细信息' : '没有找到符合条件的怪物'}
          >
            {filteredMonsters.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredMonsters.map((monster) => (
                  <Link key={monster.id} href={`/monsters/${monster.id}`} className="group">
                    <Card className="h-full overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:shadow-xl">
                      {/* 怪物图片区域 */}
                      <div className="relative h-48 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                        {/* 威胁等级徽章 */}
                        <div className="absolute top-3 left-3 z-10">
                          <Badge 
                            variant={monster.threatLevel >= 8 ? 'error' : monster.threatLevel >= 6 ? 'warning' : 'success'}
                            size="sm"
                            className="shadow-lg"
                          >
                            威胁 {monster.threatLevel}
                          </Badge>
                        </div>
                        
                        {/* 稀有度星级 */}
                        <div className="absolute top-3 right-3 z-10">
                          <div className="flex items-center space-x-1 bg-black/50 rounded-full px-2 py-1">
                            {Array.from({ length: Math.min(monster.rarity, 5) }, (_, i) => (
                              <span key={i} className="text-yellow-400 text-xs">★</span>
                            ))}
                          </div>
                        </div>

                        {/* 怪物图片占位符 */}
                        <div className="w-full h-full flex items-center justify-center text-6xl text-gray-400 group-hover:scale-110 transition-transform duration-300">
                          🐲
                        </div>

                        {/* 悬停效果遮罩 */}
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                      </div>

                      <CardContent className="p-6">
                        {/* 怪物基本信息 */}
                        <div className="mb-4">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-200">
                              {monster.nameZh}
                            </h3>
                            <span className="text-sm text-gray-500">
                              {monster.name}
                            </span>
                          </div>
                          
                          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
                            <span className="flex items-center space-x-1">
                              <span>🏷️</span>
                              <span>{monster.speciesZh}</span>
                            </span>
                            <span className="flex items-center space-x-1">
                              <span>🌍</span>
                              <span>{monster.habitatZh}</span>
                            </span>
                          </div>

                          <p className="text-sm text-gray-600 line-clamp-2">
                            {monster.description}
                          </p>
                        </div>

                        {/* 弱点属性 */}
                        <div className="mb-4">
                          <p className="text-xs text-gray-500 mb-2">弱点属性</p>
                          <div className="flex flex-wrap gap-1">
                            {monster.weakness.map((weakness) => (
                              <Badge key={weakness} variant="default" size="sm" className="text-xs">
                                {weakness}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        {/* 底部操作区 */}
                        <div className="flex items-center justify-between pt-4 border-t">
                          <span className="text-sm text-gray-500">
                            查看详情
                          </span>
                          <div className="text-gray-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all duration-200">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-6xl text-gray-300 mb-4">🔍</div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">未找到怪物</h3>
                <p className="text-gray-600 mb-4">
                  尝试调整搜索条件或筛选器设置
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    setSearchQuery('');
                    setFilters({});
                  }}
                >
                  清除全部筛选
                </Button>
              </div>
            )}
          </ContentSection>
        </PageContent>
      </PageLayout>
    </div>
  );
}
