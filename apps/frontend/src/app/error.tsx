'use client';

import { useEffect } from 'react';
import { PageLayout, PageContent } from '../components/layout/PageLayout';
import { Button } from '../components/ui/Button';
import { Card, CardContent } from '../components/ui/Card';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // 记录错误到监控服务
    console.error('Application error:', error);
  }, [error]);

  return (
    <div id="main-content">
      <PageLayout maxWidth="lg" padding="lg">
        <PageContent>
          <div className="text-center py-12">
            {/* 错误图标 */}
            <div className="mb-8">
              <div className="text-8xl text-red-300 mb-4">⚠️</div>
              <div className="text-2xl font-bold text-red-600 mb-2">应用程序错误</div>
            </div>

            {/* 错误信息 */}
            <Card className="max-w-lg mx-auto">
              <CardContent className="p-8">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">
                  出现了一些问题
                </h1>
                <p className="text-gray-600 mb-6">
                  应用程序遇到了意外错误。我们已经记录了这个问题，正在努力解决。
                </p>
                
                {/* 错误详情（仅在开发环境显示） */}
                {process.env.NODE_ENV === 'development' && (
                  <div className="mb-6 p-4 bg-red-50 rounded-lg text-left">
                    <h3 className="text-sm font-medium text-red-800 mb-2">
                      错误详情 (开发模式)
                    </h3>
                    <pre className="text-xs text-red-700 overflow-auto">
                      {error.message}
                    </pre>
                    {error.digest && (
                      <p className="text-xs text-red-600 mt-2">
                        错误ID: {error.digest}
                      </p>
                    )}
                  </div>
                )}
                
                {/* 操作按钮 */}
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3 justify-center">
                    <Button 
                      onClick={reset}
                      size="lg"
                      className="w-full sm:w-auto"
                    >
                      重试
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg"
                      onClick={() => window.location.href = '/'}
                      className="w-full sm:w-auto"
                    >
                      返回首页
                    </Button>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <p className="text-sm text-gray-500 mb-3">
                      如果问题持续存在，您可以：
                    </p>
                    <div className="flex flex-col sm:flex-row gap-2 justify-center">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => window.location.reload()}
                      >
                        🔄 刷新页面
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => {
                          if (typeof window !== 'undefined') {
                            localStorage.clear();
                            window.location.reload();
                          }
                        }}
                      >
                        🗂️ 清除缓存
                      </Button>
                    </div>
                  </div>
                </div>

                {/* 报告问题 */}
                <div className="mt-8 pt-6 border-t text-sm text-gray-500">
                  <p>
                    遇到持续问题？
                    <a 
                      href="mailto:support@mhwildswiki.com?subject=应用程序错误报告"
                      className="text-primary-600 hover:text-primary-700 ml-1"
                    >
                      报告此问题
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
