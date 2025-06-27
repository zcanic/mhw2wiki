'use client';

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

  return (
    <nav className="bg-white shadow-lg border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl">🏹</span>
            <span className="text-xl font-bold text-gray-900">
              MHW2Wiki
            </span>
          </Link>
          
          <div className="hidden md:flex space-x-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`
                    flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200
                    ${isActive 
                      ? 'bg-blue-100 text-blue-700 font-medium' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                    }
                  `}
                >
                  <span>{item.icon}</span>
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </div>
          
          <div className="md:hidden">
            <button className="text-gray-600 hover:text-gray-900 p-2">
              <span className="text-xl">☰</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
