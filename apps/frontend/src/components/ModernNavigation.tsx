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
      setIsScrolled(window.scrollY > 20);
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
      <nav className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200' 
          : 'bg-white/90 backdrop-blur-sm shadow-md'
      }`}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <span className="text-white text-xl">🏹</span>
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                  MHWildsWiki
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-orange-600'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>

            {/* Search Button (Desktop) */}
            <div className="hidden md:flex items-center space-x-3">
              <Link
                href="/search"
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-xl transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span className="text-sm">搜索</span>
              </Link>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              <svg
                className={`w-5 h-5 text-gray-700 transform transition-transform duration-300 ${
                  isMobileMenuOpen ? 'rotate-90' : ''
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'}
                />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          
          {/* Menu Panel */}
          <div className="fixed top-16 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-xl">
            <div className="px-4 py-6 space-y-3">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-to-r from-orange-500 to-red-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Search */}
              <Link
                href="/search"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center space-x-3 px-4 py-3 text-gray-700 hover:bg-gray-100 rounded-xl transition-colors duration-200"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
                <span>搜索</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
