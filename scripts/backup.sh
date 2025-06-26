#!/bin/bash

# MHW2Wiki 数据库备份脚本
# 使用方法: ./scripts/backup.sh

set -e

# 配置变量
BACKUP_DIR="/www/backup/mhw2wiki"
DATE=$(date +%Y%m%d_%H%M%S)
DB_NAME="mhw2wiki"
DB_USER="mhw2wiki_user"

echo "🗄️  开始备份 MHW2Wiki 数据库..."

# 创建备份目录
mkdir -p $BACKUP_DIR

# 备份数据库
echo "📦 导出数据库: $DB_NAME"
PGPASSWORD="$DB_PASSWORD" pg_dump -h localhost -U $DB_USER -d $DB_NAME > $BACKUP_DIR/mhw2wiki_$DATE.sql

# 压缩备份文件
echo "🗜️  压缩备份文件..."
gzip $BACKUP_DIR/mhw2wiki_$DATE.sql

# 文件大小
BACKUP_SIZE=$(du -h $BACKUP_DIR/mhw2wiki_$DATE.sql.gz | cut -f1)
echo "📊 备份文件大小: $BACKUP_SIZE"

# 删除7天前的备份
echo "🧹 清理旧备份文件..."
find $BACKUP_DIR -name "*.sql.gz" -mtime +7 -delete

# 显示备份列表
echo "📋 当前备份文件:"
ls -lh $BACKUP_DIR/*.sql.gz | tail -5

echo "✅ 数据库备份完成: mhw2wiki_$DATE.sql.gz"

# 可选: 上传到云存储
# 如果配置了阿里云 OSS 或腾讯云 COS
if command -v ossutil64 >/dev/null 2>&1; then
    echo "☁️  上传备份到阿里云 OSS..."
    ossutil64 cp $BACKUP_DIR/mhw2wiki_$DATE.sql.gz oss://your-bucket/backups/
fi
