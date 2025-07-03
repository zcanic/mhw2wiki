'use client';

import { useState, useEffect } from 'react';
import StaticDataAPI, { Monster, parseNames } from '../lib/static-data-api';
import { MonsterCard } from './MonsterCard';
import { StaticMonsterCard } from './StaticMonsterCard';
import { LoadingSpinner } from './LoadingSpinner';

export function StaticMonsterList() {
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 模拟加载状态，实际上是即时的
    const loadData = () => {
      try {
        const data = StaticDataAPI.getMonsters();
        console.log('加载怪物数据:', data.length, '条记录');
        console.log('第一个怪物:', data[0] ? parseNames(data[0].names) : '无数据');
        setMonsters(data);
        setLoading(false);
      } catch (error) {
        console.error('加载怪物数据失败:', error);
        setLoading(false);
      }
    };
    
    setTimeout(loadData, 100);
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {monsters.map((monster) => (
        <StaticMonsterCard 
          key={monster.id} 
          monster={monster}
          onClick={(monster) => console.log('点击怪物:', parseNames(monster.names))}
        />
      ))}
    </div>
  );
}
