#!/bin/bash
set -e

echo "🚀 MHW2Wiki 一键部署脚本"
echo "=========================="

# 检查当前目录
if [ ! -f "package.json" ]; then
    echo "❌ 错误: 请在项目根目录执行此脚本"
    exit 1
fi

# 项目目录
PROJECT_DIR=$(pwd)
echo "📁 项目目录: $PROJECT_DIR"

# 拉取最新代码 (如果是 git 仓库)
if [ -d ".git" ]; then
    echo "📥 拉取最新代码..."
    git pull origin main
fi

# 安装依赖
echo "📦 安装项目依赖..."
npm install

# 构建后端
echo "🔨 构建后端应用..."
cd apps/backend
if [ ! -f "package.json" ]; then
    echo "⚠️  后端应用尚未初始化，跳过构建"
else
    npm run build
    echo "✅ 后端构建完成"
fi

# 构建前端
echo "🎨 构建前端应用..."
cd ../frontend
if [ ! -f "package.json" ]; then
    echo "⚠️  前端应用尚未初始化，跳过构建"
else
    npm run build
    npm run export
    echo "✅ 前端构建完成"
fi

# 返回项目根目录
cd "$PROJECT_DIR"

# 数据库初始化 (如果需要)
echo "🗄️  检查数据库状态..."
cd packages/database
if [ ! -f ".env" ]; then
    echo "⚠️  数据库环境变量未配置，请手动配置 packages/database/.env"
else
    # 生成 Prisma Client
    npm run db:generate
    
    # 检查数据库连接
    if npm run db:push --dry-run >/dev/null 2>&1; then
        echo "📊 数据库连接正常"
    else
        echo "❌ 数据库连接失败，请检查配置"
    fi
fi

cd "$PROJECT_DIR"

# PM2 进程管理 (如果安装了)
if command -v pm2 >/dev/null 2>&1; then
    echo "🔄 管理 PM2 进程..."
    
    # 检查是否已有进程运行
    if pm2 describe mhw2wiki-api >/dev/null 2>&1; then
        echo "♻️  重启现有进程..."
        pm2 restart mhw2wiki-api
    else
        echo "🆕 启动新进程..."
        if [ -f "ecosystem.config.js" ]; then
            pm2 start ecosystem.config.js
        else
            echo "⚠️  PM2 配置文件不存在，请手动启动"
        fi
    fi
    
    pm2 save
else
    echo "⚠️  PM2 未安装，请手动管理进程"
fi

# 检查服务状态
echo ""
echo "📊 部署状态检查:"
echo "==================="

# 检查后端端口
if netstat -tln 2>/dev/null | grep -q ':4000'; then
    echo "✅ 后端服务 (端口 4000): 运行中"
else
    echo "❌ 后端服务 (端口 4000): 未运行"
fi

# 检查前端文件
if [ -d "apps/frontend/out" ] && [ "$(ls -A apps/frontend/out)" ]; then
    echo "✅ 前端静态文件: 已生成"
else
    echo "❌ 前端静态文件: 未找到"
fi

# 检查 Nginx (如果运行)
if pgrep nginx >/dev/null 2>&1; then
    echo "✅ Nginx 服务: 运行中"
else
    echo "⚠️  Nginx 服务: 未运行或未检测到"
fi

echo ""
echo "🎉 部署流程完成！"
echo ""
echo "📝 后续步骤:"
echo "1. 配置 Nginx 反向代理指向前端静态文件"
echo "2. 确保数据库连接正常并导入数据"
echo "3. 配置域名和 SSL 证书"
echo "4. 设置监控和日志"

# 显示有用的命令
echo ""
echo "🛠️  常用命令:"
echo "查看 PM2 状态: pm2 status"
echo "查看实时日志: pm2 logs mhw2wiki-api"
echo "重启服务: pm2 restart mhw2wiki-api"
echo "测试 API: curl http://localhost:4000/graphql"
