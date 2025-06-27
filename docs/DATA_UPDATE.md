# 数据更新指南

> 📚 MHWildsWiki 项目的数据更新操作指南，简化数据维护流程。

## 🎯 数据更新流程

### 基本原则

在保证数据结构相同的前提下，**只需要更新 `output/merged/` 文件夹内的 JSON 文件**即可完成数据更新。

### 🔄 更新方式

#### 1. **简单更新** (推荐)

适用于大部分数据更新场景：

```bash
# 1. 更新 JSON 数据文件
# 替换 output/merged/ 目录下的相关 JSON 文件

# 2. 执行数据更新
cd packages/database
npm run db:update
```

#### 2. **完整重新导入**

适用于大规模数据变更或结构调整：

```bash
cd packages/database
npm run db:seed
```

## 📂 数据文件结构

### 核心数据文件

| 文件 | 数据类型 | 描述 |
|------|----------|------|
| `Item.json` | 物品数据 | 游戏内所有物品信息 |
| `Skill.json` | 技能数据 | 技能效果和等级信息 |
| `LargeMonsters.json` | 怪物数据 | 大型怪物信息 |
| `Armor.json` | 防具数据 | 防具套装和属性 |
| `Amulet.json` | 护石数据 | 护石系统数据 |
| `Accessory.json` | 装饰品数据 | 技能珠等装饰品 |
| `Charm.json` | 魅力饰品 | 特殊装饰品数据 |

### 武器数据文件

位于 `weapons/` 子目录：

| 文件 | 武器类型 |
|------|----------|
| `GreatSword.json` | 大剑 |
| `LongSword.json` | 太刀 |
| `SwordShield.json` | 片手剑 |
| `DualBlades.json` | 双刀 |
| `Hammer.json` | 大锤 |
| `HuntingHorn.json` | 狩猎笛 |
| `Lance.json` | 长枪 |
| `Gunlance.json` | 铳枪 |
| `SwitchAxe.json` | 斧枪 |
| `ChargeBlade.json` | 盾斧 |
| `InsectGlaive.json` | 虫棍 |
| `Bow.json` | 弓 |
| `HeavyBowgun.json` | 重弩 |
| `LightBowgun.json` | 轻弩 |

### 辅助数据文件

| 文件 | 描述 |
|------|------|
| `Species.json` | 怪物种族数据 |
| `Stage.json` | 地图区域数据 |
| `PartNames.json` | 部位名称数据 |
| `WeaponSeries.json` | 武器系列数据 |
| `ArmorUpgrade.json` | 防具升级数据 |
| `HuntingHornMelodies.json` | 狩猎笛旋律 |
| `HuntingHornSongs.json` | 狩猎笛歌曲 |

## 🛠 更新脚本特性

### 智能更新模式

新的 `update-data.ts` 脚本提供两种更新模式：

#### 1. **增量更新模式** (Incremental)

- 🔍 **自动检测**: 检查数据结构和表状态
- ⚡ **高效更新**: 使用 `UPSERT` 操作，只更新变化的数据
- 🔗 **保持关联**: 维护现有的数据关联关系
- ⏱️ **快速执行**: 适合日常数据维护

触发条件：
- 数据库表结构完整
- 数据结构未发生变化
- 数据库非空

#### 2. **全量更新模式** (Full)

- 🗑️ **清理重建**: 清空所有表，重新导入
- 📊 **完整验证**: 完整的数据验证和关联检查
- 🔄 **结构同步**: 适合结构变更或大规模数据更新

触发条件：
- 检测到结构变化
- 数据库为空
- 表不完整

### 脚本命令

```bash
# 智能数据更新 (推荐)
npm run db:update

# 完整重新导入
npm run db:seed

# 生成 Prisma 客户端
npm run db:generate

# 同步数据库结构
npm run db:push

# 重置数据库
npm run db:reset
```

## ⚡ 快速更新流程

### 日常数据更新

```bash
# 1. 替换数据文件
cp /path/to/new/Item.json output/merged/Item.json

# 2. 执行更新
cd packages/database && npm run db:update
```

### 批量文件更新

```bash
# 1. 批量替换文件
cp /path/to/new/data/* output/merged/

# 2. 执行更新
cd packages/database && npm run db:update
```

### 验证更新结果

```bash
# 启动 Prisma Studio 查看数据
npm run db:studio
```

## 🔍 故障排除

### 常见问题

1. **数据结构不匹配**
   ```bash
   # 解决方案：检查 JSON 文件格式，确保包含必需字段
   # 或执行完整重新导入
   npm run db:seed
   ```

2. **外键约束错误**
   ```bash
   # 解决方案：确保关联数据的完整性
   # 先更新被引用的表，再更新引用表
   ```

3. **内存不足**
   ```bash
   # 解决方案：调整 Node.js 内存限制
   NODE_OPTIONS="--max-old-space-size=4096" npm run db:update
   ```

### 性能优化

- **批量大小**: 脚本已优化批量插入大小 (1000条/批)
- **并行处理**: 无依赖的表可并行更新
- **索引优化**: 确保关键字段有适当索引

## 📊 监控和日志

### 更新日志

脚本会输出详细的更新日志：

```
[0.12s] ℹ️  检查数据结构是否发生变化...
[0.45s] ✅ 数据结构检查通过
[0.48s] ℹ️  将执行增量更新模式
[1.23s] ℹ️  📝 更新 Items...
[2.67s] ✅ Items 更新完成 (14441 条记录)
[3.89s] ✅ 🎉 数据更新完成! 耗时: 3.89s
```

### 性能指标

- **增量更新**: ~1-5分钟 (取决于变更数量)
- **全量导入**: ~5-15分钟 (取决于数据总量)
- **内存使用**: ~500MB-2GB

## 🔒 安全注意事项

1. **备份重要**: 更新前建议备份数据库
2. **测试环境**: 大规模更新前在测试环境验证
3. **回滚准备**: 保留之前版本的数据文件作为回滚备份

---

**💡 提示**: 对于日常的数据维护，推荐使用 `npm run db:update` 智能更新模式，既安全又高效！
