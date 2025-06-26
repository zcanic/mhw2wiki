# MHW2Wiki 部署运维指南

## 🎯 部署环境说明

本项目专为 **宝塔面板** 设计，提供无 Docker 的简化部署方案，适合个人开发者和小团队快速部署。

## 📋 服务器要求

### 最低配置
- **操作系统**：CentOS 7+ / Ubuntu 18+ / Debian 9+
- **内存**：≥ 2GB RAM
- **存储**：≥ 10GB 可用空间
- **带宽**：≥ 5Mbps
- **宝塔面板**：7.0 或更高版本

### 推荐配置
- **操作系统**：Ubuntu 20.04 LTS
- **内存**：≥ 4GB RAM  
- **存储**：≥ 20GB SSD
- **带宽**：≥ 10Mbps
- **CPU**：2核心或以上

## 🔧 环境准备

### 1. 宝塔面板软件安装

在宝塔面板 → 软件商店中安装：

#### 必需软件
```bash
✅ Node.js 版本管理器 (安装 Node.js 18+)
✅ PostgreSQL 13+
✅ PM2 管理器 4.0+
✅ Nginx (通常已预装)
```

#### 可选软件
```bash
🔧 phpMyAdmin (可选，方便数据库管理)
🔧 Let's Encrypt (SSL 证书)
🔧 宝塔监控 (服务器性能监控)
```

### 2. 数据库初始化

#### 创建数据库
```sql
-- 在宝塔面板 → 数据库 → PostgreSQL
数据库名: mhw2wiki
用户名: mhw2wiki_user  
密码: [设置复杂密码]
权限: 全部权限
```

#### 数据库配置优化
```sql
-- 连接到数据库后执行性能优化
ALTER SYSTEM SET shared_buffers = '512MB';
ALTER SYSTEM SET effective_cache_size = '1GB';  
ALTER SYSTEM SET work_mem = '16MB';
ALTER SYSTEM SET maintenance_work_mem = '128MB';

-- 重启 PostgreSQL 服务
-- 在宝塔面板 → 软件商店 → PostgreSQL → 重启
```

## 📁 项目部署流程

### 1. 代码部署

```bash
# 进入网站根目录
cd /www/wwwroot/

# 克隆项目代码
git clone https://github.com/your-username/mhw2wiki.git
cd mhw2wiki

# 设置文件权限
chown -R www:www /www/wwwroot/mhw2wiki
chmod -R 755 /www/wwwroot/mhw2wiki
```

### 2. 环境配置

#### 数据库环境配置
```bash
# 复制环境变量模板
cp packages/database/.env.example packages/database/.env

# 编辑数据库配置
nano packages/database/.env
```

```env
# Database
DATABASE_URL="postgresql://mhw2wiki_user:your_password@localhost:5432/mhw2wiki"
DIRECT_URL="postgresql://mhw2wiki_user:your_password@localhost:5432/mhw2wiki"

# 开发环境配置
NODE_ENV=production
```

#### 后端应用配置
```bash
# 复制后端环境配置
cp apps/backend/.env.example apps/backend/.env.production

# 编辑后端配置
nano apps/backend/.env.production
```

```env
# Server Configuration
NODE_ENV=production
PORT=4000
HOST=0.0.0.0

# Database
DATABASE_URL="postgresql://mhw2wiki_user:your_password@localhost:5432/mhw2wiki"

# API Configuration  
GRAPHQL_PLAYGROUND=false
CORS_ORIGIN="https://your-domain.com"

# Security
JWT_SECRET="your-very-secure-jwt-secret"
API_KEY="your-api-key"
```

### 3. 依赖安装与构建

```bash
# 安装项目依赖
npm install

# 安装生产依赖（如果需要）
npm ci --only=production

# 数据库初始化
cd packages/database
npm run db:generate
npm run db:push
npm run db:seed
cd ../..

# 构建应用（当后端和前端完成后）
# npm run build
```

### 4. PM2 服务配置

#### 检查 ecosystem.config.js
```javascript
module.exports = {
  apps: [
    {
      name: 'mhw2wiki-api',
      script: './apps/backend/dist/main.js', // 构建后的入口文件
      instances: 1,
      exec_mode: 'cluster',
      env: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
      env_production: {
        NODE_ENV: 'production',
        PORT: 4000,
      },
      log_file: './logs/combined.log',
      out_file: './logs/out.log',
      error_file: './logs/error.log',
      log_date_format: 'YYYY-MM-DD HH:mm:ss',
      max_memory_restart: '1G',
      watch: false,
      autorestart: true,
    }
  ]
};
```

#### 启动 PM2 服务
```bash
# 创建日志目录
mkdir -p logs

# 启动服务
pm2 start ecosystem.config.js --env production

# 保存 PM2 配置
pm2 save

# 设置开机自启
pm2 startup
# 按提示执行生成的命令
```

## 🌐 Nginx 反向代理配置

### 1. 创建网站

在宝塔面板中：
- **网站** → **添加站点**
- **域名**：your-domain.com
- **根目录**：/www/wwwroot/mhw2wiki/apps/frontend/out
- **PHP版本**：纯静态

### 2. Nginx 配置

```nginx
server {
    listen 80;
    listen 443 ssl http2;
    server_name your-domain.com;
    
    # SSL 配置（使用宝塔面板 Let's Encrypt）
    ssl_certificate /www/server/panel/vhost/cert/your-domain.com/fullchain.pem;
    ssl_certificate_key /www/server/panel/vhost/cert/your-domain.com/privkey.pem;
    
    # 前端静态文件
    location / {
        root /www/wwwroot/mhw2wiki/apps/frontend/out;
        try_files $uri $uri.html $uri/ /index.html;
        
        # 静态资源缓存
        location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2)$ {
            expires 1y;
            add_header Cache-Control "public, immutable";
        }
    }
    
    # API 反向代理
    location /api/ {
        proxy_pass http://127.0.0.1:4000/;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_read_timeout 300s;
        proxy_connect_timeout 75s;
    }
    
    # GraphQL 端点
    location /graphql {
        proxy_pass http://127.0.0.1:4000/graphql;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
    
    # Gzip 压缩
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types text/plain text/css text/xml text/javascript 
               application/javascript application/xml+rss 
               application/json;
}
```

## 🔍 部署验证

### 1. 服务状态检查

```bash
# PM2 服务状态
pm2 status
pm2 logs mhw2wiki-api

# 数据库连接测试
psql -h localhost -U mhw2wiki_user -d mhw2wiki -c "SELECT COUNT(*) FROM \"Item\";"

# API 健康检查
curl -f http://localhost:4000/health
curl -f https://your-domain.com/api/health
```

### 2. 网站功能验证

#### 前端访问测试
- **主页**：https://your-domain.com
- **API 接口**：https://your-domain.com/api/health
- **GraphQL Playground**：https://your-domain.com/graphql

#### 数据库查询测试
```bash
# 检查数据导入情况
psql -h localhost -U mhw2wiki_user -d mhw2wiki -c "
SELECT 
  'Item' as table_name, COUNT(*) as count FROM \"Item\"
UNION ALL
SELECT 
  'Monster' as table_name, COUNT(*) as count FROM \"Monster\"
UNION ALL  
SELECT 
  'ArmorSet' as table_name, COUNT(*) as count FROM \"ArmorSet\";
"
```

## 🛠️ 运维管理

### 1. 日志管理

#### 查看实时日志
```bash
# PM2 应用日志
pm2 logs mhw2wiki-api --lines 100

# Nginx 访问日志
tail -f /www/wwwroot/your-domain.com_nginx.log

# 系统错误日志
tail -f /var/log/messages
```

#### 日志轮转配置
```bash
# 创建 logrotate 配置
sudo nano /etc/logrotate.d/mhw2wiki

# 内容如下：
/www/wwwroot/mhw2wiki/logs/*.log {
    daily
    missingok
    rotate 30
    compress
    delaycompress
    notifempty
    copytruncate
}
```

### 2. 备份策略

#### 数据库备份脚本
```bash
#!/bin/bash
# scripts/backup.sh

BACKUP_DIR="/www/backup/mhw2wiki"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="mhw2wiki"
DB_USER="mhw2wiki_user"

# 创建备份目录
mkdir -p $BACKUP_DIR

# 数据库备份
pg_dump -h localhost -U $DB_USER -d $DB_NAME > $BACKUP_DIR/db_backup_$DATE.sql

# 压缩备份文件
gzip $BACKUP_DIR/db_backup_$DATE.sql

# 删除7天前的备份
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete

echo "数据库备份完成: $BACKUP_DIR/db_backup_$DATE.sql.gz"
```

#### 设置定时备份
在宝塔面板 → 计划任务：
- **任务类型**：Shell脚本
- **任务名称**：MHW2Wiki数据库备份
- **执行周期**：每天凌晨2点
- **脚本内容**：`/www/wwwroot/mhw2wiki/scripts/backup.sh`

### 3. 性能监控

#### 系统资源监控
```bash
# CPU 和内存使用率
top -p $(pgrep -f "mhw2wiki-api")

# 磁盘使用情况
df -h

# 网络连接状态
netstat -tulpn | grep :4000
```

#### 数据库性能监控
```sql
-- 查询活跃连接
SELECT * FROM pg_stat_activity WHERE state = 'active';

-- 查询慢查询
SELECT query, mean_time, calls 
FROM pg_stat_statements 
ORDER BY mean_time DESC 
LIMIT 10;

-- 数据库大小
SELECT pg_size_pretty(pg_database_size('mhw2wiki'));
```

### 4. 更新部署

#### 代码更新流程
```bash
# 拉取最新代码
cd /www/wwwroot/mhw2wiki
git pull origin main

# 安装新依赖
npm install

# 重新构建（如有必要）
npm run build

# 重启服务
pm2 restart mhw2wiki-api

# 验证更新
pm2 logs mhw2wiki-api --lines 50
```

#### 回滚操作
```bash
# 查看最近提交
git log --oneline -10

# 回滚到特定版本
git checkout <commit-hash>

# 重新部署
./scripts/deploy.sh
```

## ⚠️ 故障排除

### 常见问题及解决方案

#### 1. PM2 服务启动失败
```bash
# 检查 Node.js 版本
node --version
# 确保版本 >= 18

# 检查文件权限
ls -la apps/backend/dist/
# 确保 www 用户有执行权限

# 查看详细错误
pm2 logs mhw2wiki-api --err --lines 100
```

#### 2. 数据库连接失败
```bash
# 测试数据库连接
psql -h localhost -U mhw2wiki_user -d mhw2wiki

# 检查防火墙设置
sudo ufw status
# 确保 5432 端口在内网开放

# 验证环境变量
cat packages/database/.env
```

#### 3. Nginx 502 错误
```bash
# 检查 PM2 服务状态
pm2 status

# 检查端口占用
netstat -tulpn | grep :4000

# 测试 API 服务
curl http://localhost:4000/health

# 检查 Nginx 配置语法
nginx -t
```

#### 4. 内存不足问题
```bash
# 检查内存使用
free -h

# 重启 PM2 服务释放内存
pm2 restart mhw2wiki-api

# 调整 PM2 内存限制
pm2 start ecosystem.config.js --max-memory-restart 512M
```

## 🚀 一键部署脚本

```bash
#!/bin/bash
# scripts/deploy.sh

echo "🚀 开始部署 MHW2Wiki..."

# 检查 Node.js 版本
NODE_VERSION=$(node --version | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Node.js 版本过低，请升级到 18+"
    exit 1
fi

# 安装依赖
echo "📦 安装依赖..."
npm install

# 数据库迁移
echo "🗄️ 初始化数据库..."
cd packages/database
npm run db:generate
npm run db:push
npm run db:seed
cd ../..

# 构建应用
echo "🔨 构建应用..."
npm run build

# 启动 PM2 服务
echo "🚀 启动服务..."
pm2 start ecosystem.config.js --env production
pm2 save

echo "✅ 部署完成！"
echo "🌐 网站地址：https://your-domain.com"
echo "📊 API 地址：https://your-domain.com/api"
echo "🔍 GraphQL：https://your-domain.com/graphql"
```

---

*本指南提供了完整的宝塔面板部署流程，确保 MHW2Wiki 项目能够稳定、高效地在生产环境中运行。*
