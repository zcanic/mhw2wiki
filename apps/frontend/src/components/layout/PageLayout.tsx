'use client';

import React, { useState } from 'react';
import { cn } from '../../lib/utils';

interface PageLayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  children?: React.ReactNode;
  className?: string;
  icon?: React.ReactNode;
  breadcrumbs?: Array<{ label: string; href?: string }>;
}

interface PageContentProps {
  children: React.ReactNode;
  className?: string;
  sidebar?: React.ReactNode;
  sidebarPosition?: 'left' | 'right';
  sidebarWidth?: 'sm' | 'md' | 'lg';
}

interface PageFooterProps {
  children: React.ReactNode;
  className?: string;
}

// 主布局容器
export function PageLayout({ 
  children, 
  className, 
  maxWidth = 'xl',
  padding = 'md'
}: PageLayoutProps) {
  const maxWidthStyles = {
    sm: 'max-w-screen-sm',
    md: 'max-w-screen-md', 
    lg: 'max-w-screen-lg',
    xl: 'max-w-screen-xl',
    '2xl': 'max-w-screen-2xl',
    full: 'max-w-none'
  };

  const paddingStyles = {
    none: '',
    sm: 'px-4 py-4',
    md: 'px-4 py-8 sm:px-6',
    lg: 'px-4 py-12 sm:px-6 lg:px-8'
  };

  return (
    <div className={cn(
      'min-h-screen bg-gray-50',
      className
    )}>
      <div className={cn(
        'mx-auto',
        maxWidthStyles[maxWidth],
        paddingStyles[padding]
      )}>
        {children}
      </div>
    </div>
  );
}

// 页面头部
export function PageHeader({ 
  title, 
  subtitle, 
  description, 
  children, 
  className,
  icon,
  breadcrumbs 
}: PageHeaderProps) {
  return (
    <header className={cn('mb-8', className)}>
      {/* 面包屑导航 */}
      {breadcrumbs && breadcrumbs.length > 0 && (
        <nav className="mb-4" aria-label="面包屑导航">
          <ol className="flex items-center space-x-2 text-sm text-gray-500">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center">
                {index > 0 && (
                  <svg className="w-4 h-4 mx-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                  </svg>
                )}
                {crumb.href ? (
                  <a 
                    href={crumb.href}
                    className="hover:text-gray-700 transition-colors duration-200"
                  >
                    {crumb.label}
                  </a>
                ) : (
                  <span className="text-gray-900 font-medium">{crumb.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      )}

      {/* 主标题区域 */}
      <div className="flex items-start space-x-4">
        {icon && (
          <div className="flex-shrink-0 mt-1">
            {icon}
          </div>
        )}
        
        <div className="flex-1 min-w-0">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex-1 min-w-0">
              {subtitle && (
                <p className="text-sm font-medium text-primary-600 mb-1">
                  {subtitle}
                </p>
              )}
              
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 tracking-tight">
                {title}
              </h1>
              
              {description && (
                <p className="mt-2 text-lg text-gray-600 max-w-3xl">
                  {description}
                </p>
              )}
            </div>
            
            {children && (
              <div className="mt-4 sm:mt-0 sm:ml-4 flex-shrink-0">
                {children}
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

// 页面内容区域
export function PageContent({ 
  children, 
  className, 
  sidebar,
  sidebarPosition = 'right',
  sidebarWidth = 'md'
}: PageContentProps) {
  const sidebarWidthStyles = {
    sm: 'lg:w-64',
    md: 'lg:w-80', 
    lg: 'lg:w-96'
  };

  if (!sidebar) {
    return (
      <main className={cn('w-full', className)}>
        {children}
      </main>
    );
  }

  return (
    <div className={cn(
      'flex flex-col lg:flex-row gap-8',
      sidebarPosition === 'left' ? 'lg:flex-row-reverse' : '',
      className
    )}>
      {/* 主内容 */}
      <main className="flex-1 min-w-0">
        {children}
      </main>
      
      {/* 侧边栏 */}
      <aside className={cn(
        'flex-shrink-0',
        sidebarWidthStyles[sidebarWidth]
      )}>
        {sidebar}
      </aside>
    </div>
  );
}

// 页面底部
export function PageFooter({ children, className }: PageFooterProps) {
  return (
    <footer className={cn('mt-16 pt-8 border-t border-gray-200', className)}>
      {children}
    </footer>
  );
}

// 常用的内容区块组件
interface ContentSectionProps {
  title?: string;
  description?: string;
  children: React.ReactNode;
  className?: string;
  headerActions?: React.ReactNode;
  collapsible?: boolean;
  defaultCollapsed?: boolean;
}

export function ContentSection({
  title,
  description, 
  children,
  className,
  headerActions,
  collapsible = false,
  defaultCollapsed = false
}: ContentSectionProps) {
  const [isCollapsed, setIsCollapsed] = useState(defaultCollapsed);

  return (
    <section className={cn('mb-8', className)}>
      {(title || description || headerActions) && (
        <div className="flex items-center justify-between mb-6">
          <div className="flex-1 min-w-0">
            {title && (
              <div className="flex items-center space-x-2">
                <h2 className="text-xl font-semibold text-gray-900">
                  {title}
                </h2>
                {collapsible && (
                  <button
                    onClick={() => setIsCollapsed(!isCollapsed)}
                    className="p-1 text-gray-500 hover:text-gray-700 transition-colors duration-200"
                    aria-label={isCollapsed ? '展开' : '收起'}
                  >
                    <svg 
                      className={cn(
                        'w-5 h-5 transition-transform duration-200',
                        isCollapsed ? 'rotate-180' : ''
                      )} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>
                )}
              </div>
            )}
            {description && (
              <p className="mt-1 text-sm text-gray-600">
                {description}
              </p>
            )}
          </div>
          
          {headerActions && (
            <div className="flex-shrink-0 ml-4">
              {headerActions}
            </div>
          )}
        </div>
      )}
      
      {(!collapsible || !isCollapsed) && (
        <div className="transition-all duration-300">
          {children}
        </div>
      )}
    </section>
  );
}

// 响应式网格容器
interface ResponsiveGridProps {
  children: React.ReactNode;
  cols?: {
    default?: number;
    sm?: number;
    md?: number;
    lg?: number;
    xl?: number;
  };
  gap?: 'sm' | 'md' | 'lg';
  className?: string;
}

export function ResponsiveGrid({
  children,
  cols = { default: 1, md: 2, lg: 3 },
  gap = 'md',
  className
}: ResponsiveGridProps) {
  const gapStyles = {
    sm: 'gap-4',
    md: 'gap-6',
    lg: 'gap-8'
  };

  const getGridCols = () => {
    const classes = [];
    if (cols.default) classes.push(`grid-cols-${cols.default}`);
    if (cols.sm) classes.push(`sm:grid-cols-${cols.sm}`);
    if (cols.md) classes.push(`md:grid-cols-${cols.md}`);
    if (cols.lg) classes.push(`lg:grid-cols-${cols.lg}`);
    if (cols.xl) classes.push(`xl:grid-cols-${cols.xl}`);
    return classes.join(' ');
  };

  return (
    <div className={cn(
      'grid',
      getGridCols(),
      gapStyles[gap],
      className
    )}>
      {children}
    </div>
  );
}
