# MHWildsWiki 数据模式与结构设计

## 📊 数据概览

### 核心实体统计
| 实体类型 | 文件 | 记录数 | 主要用途 |
|---------|------|--------|----------|
| 游戏物品 | Item.json | ~14,441 | 材料、道具、消耗品 |
| 技能系统 | Skill.json | ~500 | 技能效果与等级 |
| 大型怪物 | LargeMonsters.json | ~200 | 怪物图鉴与奖励 |
| 防具套装 | Armor.json | ~1,000+ | 防具属性与技能 |
| 装饰品 | Accessory.json | ~16,059 | 技能宝石与装饰品 |
| 护石 | Amulet.json | ~8,295 | 多等级护石系统 |
| 武器系列 | WeaponSeries.json | ~724 | 武器升级关系 |
| 各类武器 | weapons/*.json | ~50,000+ | 14种武器详细数据 |
| 地图区域 | Stage.json | ~1,386 | 地图、营地、采集点 |
| 怪物分类 | Species.json | ~382 | 生物学分类体系 |

## 🏗️ 数据库设计原则

### 1. 统一主键策略
```sql
-- 所有实体使用 BigInt 类型的 game_id 作为主键
-- 支持正数和负数，确保与原始游戏数据一致
game_id BIGINT PRIMARY KEY
```

### 2. 多语言支持架构
```json
{
  "names": {
    "ja": "日本語",
    "en": "English", 
    "zh-Hans": "简体中文",
    "zh-Hant": "繁體中文",
    // 支持 13 种语言
  }
}
```

### 3. 嵌入式 vs 关联式存储策略

**嵌入式存储（JSONB 字段）**：
- ✅ 多语言数据（名称、描述）
- ✅ 防具部件数据（避免过度规范化）
- ✅ 技能等级数据（层级关系）
- ✅ 怪物部位与奖励（复杂嵌套）
- ✅ 护石等级系统（多层级数据）

**关联式存储（外键关系）**：
- 🔗 武器系列关系
- 🔗 怪物种类分类
- 🔗 材料与制作关系

## 📋 核心实体设计

### Item（游戏物品）
```sql
CREATE TABLE Item (
  game_id BIGINT PRIMARY KEY,
  names JSONB NOT NULL,           -- 多语言名称
  descriptions JSONB,             -- 多语言描述
  kind VARCHAR(50),               -- 物品类型: ore, bone, etc.
  rarity INTEGER,                 -- 稀有度 1-12
  max_count INTEGER,              -- 最大持有数量
  sell_price INTEGER,             -- 售价
  buy_price INTEGER,              -- 买价
  icon_name VARCHAR(100),         -- 图标文件名
  features JSONB,                 -- 特殊属性
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- 索引策略
CREATE INDEX idx_item_kind ON Item(kind);
CREATE INDEX idx_item_rarity ON Item(rarity);
CREATE GIN INDEX idx_item_names ON Item USING GIN(names);
```

### Skill（技能系统）
```sql
CREATE TABLE Skill (
  game_id BIGINT PRIMARY KEY,
  names JSONB NOT NULL,
  descriptions JSONB,
  ranks JSONB NOT NULL,           -- 嵌入式等级数据
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Ranks 数据结构
{
  "ranks": [
    {
      "level": 1,
      "descriptions": { "en": "Effect description" },
      "modifiers": { "attack": 3, "defense": 0 }
    }
  ]
}
```

### Monster（大型怪物）
```sql
CREATE TABLE Monster (
  game_id BIGINT PRIMARY KEY,
  names JSONB NOT NULL,
  species VARCHAR(50),            -- 关联 Species.name
  parts JSONB,                    -- 嵌入式部位数据
  rewards JSONB,                  -- 嵌入式奖励数据
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Parts 数据结构示例
{
  "parts": [
    {
      "names": { "en": "Head" },
      "extract": "red",
      "flinch": 80,
      "sever": 65
    }
  ],
  "rewards": [
    {
      "item_id": 123,
      "stack": 1,
      "percentage": 25,
      "conditions": ["hunt", "capture"]
    }
  ]
}
```

### ArmorSet（防具套装）
```sql
CREATE TABLE ArmorSet (
  game_id BIGINT PRIMARY KEY,
  names JSONB NOT NULL,
  rarity INTEGER,
  set_bonus JSONB,               -- 套装技能
  pieces JSONB NOT NULL,         -- 嵌入式部件数据
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Set Bonus 结构
{
  "set_bonus": {
    "names": { "en": "Set Skill Name" },
    "ranks": [
      { "pieces": 2, "skill_id": -123456, "level": 1 },
      { "pieces": 4, "skill_id": -123456, "level": 2 }
    ]
  }
}
```

### Weapon（武器统一表）
```sql
CREATE TABLE Weapon (
  game_id BIGINT PRIMARY KEY,
  kind VARCHAR(20) NOT NULL,      -- great-sword, long-sword, etc.
  names JSONB NOT NULL,
  rarity INTEGER,
  attack_raw INTEGER,
  affinity INTEGER,               -- 会心率
  sharpness JSONB,               -- 锋利度数据
  element_type VARCHAR(20),       -- 属性类型
  element_damage INTEGER,         -- 属性伤害
  element_hidden BOOLEAN,         -- 是否隐藏属性
  slots JSONB,                   -- 装饰品槽位
  series_id BIGINT,              -- 关联武器系列
  materials JSONB,               -- 制作材料
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW(),
  
  FOREIGN KEY (series_id) REFERENCES WeaponSeries(game_id)
);

-- 复合索引
CREATE INDEX idx_weapon_kind_rarity ON Weapon(kind, rarity);
CREATE INDEX idx_weapon_series ON Weapon(series_id);
```

## ⚡ 性能优化策略

### 1. 索引设计
```sql
-- 核心查询索引
CREATE INDEX idx_game_id_all ON each_table(game_id);
CREATE GIN INDEX idx_names_all ON each_table USING GIN(names);
CREATE INDEX idx_rarity_all ON each_table(rarity) WHERE rarity IS NOT NULL;

-- 复合查询索引
CREATE INDEX idx_weapon_kind_attack ON Weapon(kind, attack_raw DESC);
CREATE INDEX idx_armor_rarity_defense ON ArmorSet(rarity, (pieces->0->>'defense')::int DESC);
```

### 2. 查询优化
```sql
-- 多语言查询优化
SELECT * FROM Item 
WHERE names->>'en' ILIKE '%ore%' 
   OR names->>'zh-Hans' ILIKE '%矿%';

-- JSONB 路径查询
SELECT * FROM ArmorSet 
WHERE pieces @> '[{"kind": "head"}]';

-- 聚合查询优化
SELECT kind, COUNT(*), AVG(attack_raw) 
FROM Weapon 
GROUP BY kind 
ORDER BY AVG(attack_raw) DESC;
```

### 3. 缓存策略
- **应用层缓存**：Redis 缓存热门查询结果
- **数据库缓存**：PostgreSQL shared_buffers 优化
- **静态数据**：Next.js ISR 策略，长期缓存静态内容

## 🔄 数据导入流程

### 1. 导入顺序（依赖关系）
```bash
1. 基础数据（无依赖）
   - Item.json
   - Skill.json
   - Species.json
   - WeaponSeries.json

2. 实体数据（有外键依赖）
   - Monster.json
   - ArmorSet.json
   - Amulet.json
   - Accessory.json

3. 武器数据（可并行处理）
   - weapons/GreatSword.json
   - weapons/LongSword.json
   - ... (其他武器类型)
```

### 2. 数据验证规则
```typescript
// 数据完整性检查
interface ValidationRules {
  required_fields: string[];      // 必需字段
  foreign_keys: {                // 外键验证
    field: string;
    reference_table: string;
    reference_field: string;
  }[];
  json_schema: object;           // JSONB 字段结构验证
  range_validation: {            // 数值范围验证
    field: string;
    min: number;
    max: number;
  }[];
}
```

## 📊 数据质量监控

### 1. 数据完整性指标
- 外键引用完整性：> 99%
- 多语言数据覆盖率：> 95%
- 必需字段完整率：100%
- 数据格式规范性：100%

### 2. 性能监控指标
- 查询响应时间：< 100ms (90%)
- 复杂查询响应时间：< 500ms (95%)
- 数据库连接池利用率：< 80%
- 索引命中率：> 95%

## 🛠️ 维护与扩展

### 1. Schema 版本管理
```sql
-- 迁移脚本版本控制
CREATE TABLE schema_migrations (
  version VARCHAR(20) PRIMARY KEY,
  applied_at TIMESTAMP DEFAULT NOW()
);
```

### 2. 数据更新策略
- **增量更新**：基于 updated_at 字段
- **全量重建**：定期完整数据验证
- **热更新**：应用层缓存失效机制

### 3. 扩展预留
- **自定义字段**：JSONB extras 字段预留
- **索引扩展**：部分索引和表达式索引
- **分区准备**：按武器类型或怪物种类分区的可能性

---

*本文档描述了 MHWildsWiki 项目的完整数据模式设计，确保数据完整性、查询性能和未来扩展性。*
