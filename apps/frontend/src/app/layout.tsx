import './globals.css'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Navigation } from '../components/ModernNavigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MHWildsWiki - 《怪物猎人：荒野》资料库',
  description: '现代化的《怪物猎人：荒野》游戏数据资料库，包含怪物、武器、装备、物品的详细信息和攻略',
  keywords: '怪物猎人,荒野,MHW2,资料库,攻略,武器,怪物,装备',
  authors: [{ name: 'MHWildsWiki Team' }],
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-50 min-h-screen antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        
        {/* 全局无障碍提示 */}
        <div className="sr-only" aria-live="polite" id="announcement" />
        
        {/* 跳转到主内容的链接（无障碍功能） */}
        <a 
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-600 text-white px-4 py-2 rounded-md z-50"
        >
          跳转到主内容
        </a>
      </body>
    </html>
  )
}
