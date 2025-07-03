'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from './ui/Button';
import { GlobalSearchBar } from './features/search/GlobalSearchBar';

interface NavItem {
  href: string;
  label: string;
  icon: string;
  description?: string;
}

const navItems: NavItem[] = [
  { href: '/', label: '首页', icon: '🏠', description: '返回主页' },
  { href: '/monsters', label: '怪物', icon: '🐲', description: '大型怪物图鉴' },
  { href: '/weapons', label: '武器', icon: '⚔️', description: '武器装备库' },
  { href: '/armor', label: '防具', icon: '🛡️', description: '防具套装' },
  { href: '/items', label: '物品', icon: '🎒', description: '道具材料' },
];

export function EnhancedNavigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  // 处理滚动效果
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 点击外部关闭移动端菜单
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    }

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      // 防止页面滚动
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // ESC键关闭移动端菜单
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => document.removeEventListener('keydown', handleEscape);
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav 
        className={`
          sticky top-0 z-40 bg-white transition-all duration-300
          ${isScrolled 
            ? 'shadow-lg border-b backdrop-blur-sm bg-white/95' 
            : 'shadow-sm border-b border-gray-100'
          }
        `}
        role="navigation"
        aria-label="主导航"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex items-center space-x-3 group transition-transform duration-200 hover:scale-105"
              aria-label="MHW2Wiki 主页"
            >
              <span className="text-2xl group-hover:rotate-12 transition-transform duration-300">🏹</span>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-gray-900 leading-tight">
                  MHW2Wiki
                </span>
                <span className="text-xs text-gray-500 leading-tight hidden sm:block">
                  荒野资料库
                </span>
              </div>
            </Link>
            
            {/* 桌面端导航 */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200
                      ${isActive 
                        ? 'bg-primary-100 text-primary-700 font-medium shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                    title={item.description}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* 搜索栏 - 桌面端 */}
            <div className="hidden md:block flex-1 max-w-md mx-6">
              <GlobalSearchBar className="w-full" />
            </div>
            
            {/* 移动端菜单按钮 */}
            <Button
              variant="ghost"
              size="sm"
              className="lg:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label={isMobileMenuOpen ? '关闭菜单' : '打开菜单'}
              aria-expanded={isMobileMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span 
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span 
                  className={`block h-0.5 bg-current transition-all duration-300 ${
                    isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </Button>
          </div>

          {/* 移动端搜索栏 */}
          <div className="md:hidden pb-4">
            <GlobalSearchBar />
          </div>
        </div>
      </nav>

      {/* 移动端菜单覆盖层 */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 z-50 lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="移动端导航菜单"
        >
          {/* 背景遮罩 */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />
          
          {/* 菜单内容 */}
          <div 
            ref={mobileMenuRef}
            id="mobile-menu"
            className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-white shadow-2xl transform transition-transform duration-300 ease-out"
          >
            {/* 菜单头部 */}
            <div className="flex items-center justify-between p-6 border-b">
              <div className="flex items-center space-x-3">
                <span className="text-2xl">🏹</span>
                <span className="text-xl font-bold text-gray-900">导航菜单</span>
              </div>
              <Button
                variant="ghost"
                size="sm"
                onClick={closeMobileMenu}
                aria-label="关闭菜单"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </Button>
            </div>

            {/* 菜单项 */}
            <nav className="flex-1 px-6 py-4 space-y-2" role="navigation">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMobileMenu}
                    className={`
                      flex items-center space-x-4 p-4 rounded-xl transition-all duration-200
                      ${isActive 
                        ? 'bg-primary-50 text-primary-700 border-l-4 border-primary-500' 
                        : 'text-gray-700 hover:bg-gray-50 border-l-4 border-transparent'
                      }
                    `}
                    aria-current={isActive ? 'page' : undefined}
                  >
                    <span className="text-2xl flex-shrink-0">{item.icon}</span>
                    <div className="flex-1">
                      <div className="font-medium">{item.label}</div>
                      {item.description && (
                        <div className="text-sm text-gray-500 mt-1">
                          {item.description}
                        </div>
                      )}
                    </div>
                    {isActive && (
                      <div className="w-2 h-2 bg-primary-500 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* 菜单底部 */}
            <div className="p-6 border-t bg-gray-50">
              <div className="text-center text-sm text-gray-500">
                <p>MHW2Wiki © 2024</p>
                <p className="mt-1">《怪物猎人：荒野》资料库</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
