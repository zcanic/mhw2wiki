#!/bin/bash

# MHW2Wiki PostgreSQL Setup Script (No Docker)
# 支持 macOS Homebrew 和云数据库服务

echo "🚀 MHW2Wiki PostgreSQL 设置脚本"
echo "======================================="

# 检测操作系统
if [[ "$OSTYPE" == "darwin"* ]]; then
    echo "📱 检测到 macOS 系统"
    
    # 检查 Homebrew
    if ! command -v brew &> /dev/null; then
        echo "❌ 需要安装 Homebrew"
        echo "请访问: https://brew.sh/"
        exit 1
    fi
    
    # 检查 PostgreSQL
    if ! command -v psql &> /dev/null; then
        echo "📦 安装 PostgreSQL..."
        brew install postgresql@15
        brew services start postgresql@15
    else
        echo "✅ PostgreSQL 已安装"
    fi
    
    # 创建数据库用户和数据库
    echo "🔧 创建数据库..."
    createuser -s mhw2wiki 2>/dev/null || echo "用户 mhw2wiki 已存在"
    createdb -O mhw2wiki mhw2wiki_dev 2>/dev/null || echo "数据库 mhw2wiki_dev 已存在"
    createdb -O mhw2wiki mhw2wiki_test 2>/dev/null || echo "数据库 mhw2wiki_test 已存在"
    createdb -O mhw2wiki mhw2wiki_shadow 2>/dev/null || echo "数据库 mhw2wiki_shadow 已存在"
    
    DATABASE_URL="postgresql://mhw2wiki@localhost:5432/mhw2wiki_dev"
    
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    echo "🐧 检测到 Linux 系统"
    echo "请手动安装 PostgreSQL 或使用云数据库服务"
    DATABASE_URL="postgresql://mhw2wiki:password@localhost:5432/mhw2wiki_dev"
else
    echo "🖥️  检测到其他系统，推荐使用云数据库服务"
    DATABASE_URL="postgresql://mhw2wiki:password@localhost:5432/mhw2wiki_dev"
fi

echo ""
echo "🎯 推荐的云数据库服务："
echo "1. Supabase (免费层) - https://supabase.com/"
echo "2. Railway (简单部署) - https://railway.app/"
echo "3. 阿里云RDS (中国区) - https://www.aliyun.com/product/rds/postgresql"
echo ""

# 生成 .env 文件
echo "📝 创建数据库配置文件..."
cat > packages/database/.env << EOF
# MHW2Wiki Database Configuration - PostgreSQL
DATABASE_URL="$DATABASE_URL"
SHADOW_DATABASE_URL="postgresql://mhw2wiki@localhost:5432/mhw2wiki_shadow"

# 备用云数据库配置 (取消注释使用)
# DATABASE_URL="postgresql://postgres:password@db.supabase.co:5432/postgres"
# DATABASE_URL="postgresql://postgres:password@containers-us-west-123.railway.app:5432/railway"
EOF

echo "✅ 设置完成！"
echo "🔧 下一步运行: npm run db:migrate"
