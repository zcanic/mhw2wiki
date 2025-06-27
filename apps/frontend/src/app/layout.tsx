import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ApolloWrapper } from '../lib/apollo'
import { Navigation } from '../components/Navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MHWildsWiki - 《怪物猎人：荒野》资料库',
  description: '现代化的《怪物猎人：荒野》游戏数据资料库',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.className} bg-gray-50 min-h-screen`}>
        <ApolloWrapper>
          <Navigation />
          <main className="min-h-screen">{children}</main>
        </ApolloWrapper>
      </body>
    </html>
  )
}
