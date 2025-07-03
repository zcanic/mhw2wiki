'use client';

import { Monster, parseNames, parseDescriptions } from '../lib/static-data-api';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from './ui/Card';
import { Badge } from './ui/Badge';
import { cn } from '../lib/utils';

interface StaticMonsterCardProps {
  monster: Monster;
  onClick?: (monster: Monster) => void;
  className?: string;
}

export function StaticMonsterCard({ monster, onClick, className = '' }: StaticMonsterCardProps) {
  const handleClick = () => onClick?.(monster);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(monster);
    }
  };
  
  const name = parseNames(monster.names);
  const description = parseDescriptions(monster.descriptions);
  const species = monster.species || '未知种类';

  return (
    <Card 
      className={cn('group cursor-pointer transition-all duration-300', className)}
      hoverable
      padding="none"
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : -1}
      role={onClick ? 'button' : undefined}
      aria-label={onClick ? `查看${name}详情` : undefined}
    >
      {/* 怪物图片区域 */}
      <div className="relative h-48 bg-gradient-to-br from-monster-50 to-monster-100 overflow-hidden">
        {/* 装饰性背景图案 */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <pattern id="monster-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="1" fill="currentColor" />
            </pattern>
            <rect width="100" height="100" fill="url(#monster-pattern)" />
          </svg>
        </div>
        
        {/* 主要图标区域 */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
            <div className="text-6xl mb-2 filter drop-shadow-lg">🐲</div>
            <div className="text-sm text-monster-600 font-medium opacity-75">
              暂无图片
            </div>
          </div>
        </div>
        
        {/* 种类徽章 */}
        <div className="absolute top-4 right-4">
          <Badge variant="monster" size="sm">
            {species}
          </Badge>
        </div>
        
        {/* 悬停效果覆盖 */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
      </div>
      
      {/* 怪物信息区域 */}
      <CardHeader className="p-6 pb-4">
        <div className="flex items-center justify-between">
          <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-monster-600 transition-colors duration-200">
            {name}
          </CardTitle>
          {/* 数据状态指示器 */}
          <div className="w-2 h-2 bg-green-400 rounded-full" title="数据已加载" />
        </div>
      </CardHeader>
      
      <CardContent className="px-6 pb-6">
        <CardDescription className="text-gray-600 text-sm line-clamp-3 mb-4">
          {description || '这是一只神秘的怪物，更多信息有待发现...'}
        </CardDescription>
        
        {/* 快速信息栏 */}
        <div className="flex items-center justify-between text-xs text-gray-400 pt-4 border-t border-gray-100">
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.99 1.99 0 013 12V7a4 4 0 014-4z" />
            </svg>
            ID: {monster.id}
          </span>
          <span className="flex items-center">
            <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            点击查看详情
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
