import { Monster } from '../types';

interface MonsterCardProps {
  monster: Monster;
  onClick?: (monster: Monster) => void;
  className?: string;
}

/**
 * MonsterCard Component - 显示大型怪物信息的卡片组件
 * 遵循 Monster Hunter 设计语言和可访问性标准
 */
export function MonsterCard({ monster, onClick, className = '' }: MonsterCardProps) {
  const handleClick = () => onClick?.(monster);
  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      onClick?.(monster);
    }
  };

  // 威胁等级颜色映射
  const getThreatLevelColor = (level: number) => {
    if (level >= 8) return 'bg-red-600 text-white';
    if (level >= 6) return 'bg-orange-500 text-white';
    if (level >= 4) return 'bg-yellow-500 text-black';
    return 'bg-green-500 text-white';
  };

  // 元素类型颜色映射
  const getElementColor = (element: string) => {
    const colorMap: Record<string, string> = {
      'Fire': 'bg-red-100 text-red-800',
      'Water': 'bg-blue-100 text-blue-800', 
      'Thunder': 'bg-yellow-100 text-yellow-800',
      'Ice': 'bg-cyan-100 text-cyan-800',
      'Dragon': 'bg-purple-100 text-purple-800',
      'Non-Elemental': 'bg-gray-100 text-gray-800',
    };
    return colorMap[element] || 'bg-gray-100 text-gray-800';
  };

  return (
    <article
      className={`
        group relative overflow-hidden rounded-xl bg-white shadow-md 
        transition-all duration-300 ease-out
        hover:shadow-xl hover:-translate-y-1
        focus-within:ring-2 focus-within:ring-orange-500 focus-within:ring-offset-2
        ${onClick ? 'cursor-pointer' : ''}
        ${className}
      `}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      tabIndex={onClick ? 0 : undefined}
      role={onClick ? 'button' : 'article'}
      aria-label={onClick ? `查看 ${monster.name} 详情` : undefined}
    >
      {/* 怪物图片区域 */}
      {monster.imageUrl && (
        <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200">
          <img
            src={monster.imageUrl}
            alt={`${monster.name} - ${monster.species}`}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
            loading="lazy"
          />
          
          {/* 威胁等级徽章 */}
          <div className="absolute top-3 right-3">
            <span 
              className={`
                inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold
                ${getThreatLevelColor(monster.threatLevel)}
              `}
              aria-label={`威胁等级 ${monster.threatLevel}`}
            >
              ★{monster.threatLevel}
            </span>
          </div>

          {/* 物种标签 */}
          <div className="absolute bottom-3 left-3">
            <span className="inline-flex items-center rounded-md bg-black/70 px-2 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {monster.species}
            </span>
          </div>
        </div>
      )}

      {/* 内容区域 */}
      <div className="p-6">
        {/* 头部信息 */}
        <header className="mb-4">
          <div className="flex items-start gap-3">
            {monster.iconUrl && (
              <img
                src={monster.iconUrl}
                alt=""
                className="mt-1 h-10 w-10 flex-shrink-0 object-contain"
                aria-hidden="true"
              />
            )}
            <div className="min-w-0 flex-1">
              <h3 className="text-xl font-bold text-slate-900 group-hover:text-orange-600 transition-colors duration-200">
                {monster.name}
              </h3>
              {monster.description && (
                <p className="mt-1 text-sm text-slate-600 line-clamp-2">
                  {monster.description}
                </p>
              )}
            </div>
          </div>
        </header>

        {/* 栖息地信息 */}
        {monster.habitat && (
          <div className="mb-4">
            <dt className="inline text-sm font-medium text-slate-500">栖息地：</dt>
            <dd className="inline ml-1 text-sm text-slate-900">{monster.habitat}</dd>
          </div>
        )}

        {/* 弱点元素 */}
        {monster.weaknesses.length > 0 && (
          <div className="mb-4">
            <dt className="mb-2 text-sm font-medium text-slate-500">弱点元素</dt>
            <dd className="flex flex-wrap gap-1">
              {monster.weaknesses.map((weakness) => (
                <span
                  key={weakness}
                  className={`inline-flex items-center rounded-full px-2 py-1 text-xs font-medium ${getElementColor(weakness)}`}
                >
                  {weakness}
                </span>
              ))}
            </dd>
          </div>
        )}

        {/* 出现地点 */}
        {monster.locations.length > 0 && (
          <div>
            <dt className="mb-2 text-sm font-medium text-slate-500">出现地点</dt>
            <dd className="flex flex-wrap gap-1">
              {monster.locations.slice(0, 3).map((location) => (
                <span
                  key={location}
                  className="inline-flex items-center rounded-md bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700"
                >
                  {location}
                </span>
              ))}
              {monster.locations.length > 3 && (
                <span className="inline-flex items-center rounded-md bg-slate-50 px-2 py-1 text-xs font-medium text-slate-600">
                  +{monster.locations.length - 3} 更多
                </span>
              )}
            </dd>
          </div>
        )}
      </div>
    </article>
  );
}
