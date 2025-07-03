export default function Loading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-red-50 flex items-center justify-center">
      <div className="text-center">
        {/* 加载动画 */}
        <div className="mb-8">
          <div className="relative w-20 h-20 mx-auto">
            <div className="absolute inset-0 border-4 border-orange-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-orange-500 rounded-full border-t-transparent animate-spin"></div>
            <div className="absolute inset-2 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-2xl">🏹</span>
            </div>
          </div>
        </div>

        {/* 加载文本 */}
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          正在加载
        </h2>
        <p className="text-gray-600">
          请稍等，正在获取最新数据...
        </p>

        {/* 进度提示 */}
        <div className="mt-8 max-w-xs mx-auto">
          <div className="bg-gray-200 rounded-full h-2 overflow-hidden">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 h-full rounded-full animate-pulse"></div>
          </div>
          <div className="text-sm text-gray-500 mt-2">
            初始化应用中...
          </div>
        </div>
      </div>
    </div>
  );
}
