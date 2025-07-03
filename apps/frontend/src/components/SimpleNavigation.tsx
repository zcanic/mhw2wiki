'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navItems = [
  { href: '/', label: '首页', icon: '🏠' },
  { href: '/monsters', label: '怪物', icon: '🐲' },
  { href: '/weapons', label: '武器', icon: '⚔️' },
  { href: '/armor', label: '防具', icon: '🛡️' },
  { href: '/items', label: '物品', icon: '🎒' },
];

export function Navigation() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <nav className={`sticky top-0 z-50 bg-white transition-all duration-300 ${
        isScrolled ? 'shadow-lg backdrop-blur-sm bg-white/95' : 'shadow-sm'
      }`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-600 rounded-lg flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-lg">🏹</span>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900">MHWildsWiki</span>
                <div className="text-xs text-gray-500 hidden sm:block">荒野资料库</div>
              </div>
            </Link>
            
            {/* 桌面端导航 */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-100 text-blue-700 shadow-sm' 
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* 搜索框 */}
            <div className="hidden lg:block w-64">
              <div className="relative">
                <input
                  type="text"
                  placeholder="搜索..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* 移动端菜单按钮 */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <span className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''
                }`} />
                <span className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0' : ''
                }`} />
                <span className={`block h-0.5 bg-gray-600 transition-all duration-300 ${
                  isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''
                }`} />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* 移动端菜单 */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)} />
          <div className="fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] bg-white shadow-2xl">
            <div className="flex items-center justify-between p-6 border-b">
              <span className="text-xl font-bold text-gray-900">导航菜单</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 rounded-lg hover:bg-gray-100"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="p-6 space-y-2">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-4 p-4 rounded-xl transition-all duration-200 ${
                      isActive 
                        ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-500' 
                        : 'text-gray-700 hover:bg-gray-50'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-6 border-t bg-gray-50">
              <div className="text-center text-sm text-gray-500">
                <p>MHWildsWiki © 2024</p>
                <p>《怪物猎人：荒野》资料库</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
