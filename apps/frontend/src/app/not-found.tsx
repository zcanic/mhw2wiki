'use client';

import Link from 'next/link';
import { PageLayout, PageHeader, PageContent } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export default function NotFound() {
  return (
    <div id="main-content">
      <PageLayout maxWidth="lg" padding="lg">
        <PageContent>
          <div className="text-center py-12">
            {/* 404 图标 */}
            <div className="mb-8">
              <div className="text-9xl text-gray-300 mb-4">🏹</div>
              <div className="text-6xl font-bold text-gray-400 mb-2">404</div>
            </div>

            {/* 错误信息 */}
            <Card className="max-w-lg mx-auto">
              <CardContent className="p-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4">
                  页面未找到
                </h1>
                <p className="text-lg text-gray-600 mb-6">
                  抱歉，您访问的页面不存在或已被移动。
                </p>
                
                {/* 建议操作 */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Link href="/">
                      <Button size="lg" className="w-full sm:w-auto">
                        返回首页
                      </Button>
                    </Link>
                    <Link href="/monsters">
                      <Button variant="outline" size="lg" className="w-full sm:w-auto">
                        浏览怪物
                      </Button>
                    </Link>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-3">
                      或者您可以尝试：
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      <Link href="/weapons">
                        <Button variant="ghost" size="sm">
                          🗡️ 武器库
                        </Button>
                      </Link>
                      <Link href="/armor">
                        <Button variant="ghost" size="sm">
                          🛡️ 防具集
                        </Button>
                      </Link>
                      <Link href="/items">
                        <Button variant="ghost" size="sm">
                          🎒 物品库
                        </Button>
                      </Link>
                      <Link href="/search">
                        <Button variant="ghost" size="sm">
                          🔍 全局搜索
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>

                {/* 帮助信息 */}
                <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                  <p>
                    如果您认为这是一个错误，请
                    <a 
                      href="mailto:support@mhwildswiki.com" 
                      className="text-primary-600 hover:text-primary-700 ml-1"
                    >
                      联系我们
                    </a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </PageContent>
      </PageLayout>
    </div>
  );
}
