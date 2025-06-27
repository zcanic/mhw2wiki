# MHWildsWiki 数据真实性保证

## 🎯 核心原则

本项目严格遵循**数据真实性第一**的原则，绝不生成任何虚构或推断的数据。

## ✅ 我们保证

### 1. 数据来源透明
- 所有数据直接来源于原始游戏数据库文件
- 数据存储在 `output/merged/` 目录的JSON文件中
- 不对原始数据进行任何修改、增强或"智能化"处理

### 2. API真实性
- 后端API只返回数据库中真实存在的字段
- 缺失数据使用空值、空数组或"Unknown"标记
- 不基于其他字段进行任何推断或计算

### 3. 前端展示诚实
- UI界面明确区分真实数据和缺失数据
- 不使用占位符内容误导用户
- 所有数据标注清晰的来源和状态

## ❌ 我们绝不

### 1. 生成虚假数据
- 不创建任何不存在于原始数据中的内容
- 不基于"常识"或"推测"填充数据
- 不使用算法生成模拟数据

### 2. 主观映射
- 不基于怪物种类推断威胁等级
- 不基于稀有度计算物品价值
- 不基于名称推断栖息地或属性

### 3. 数据美化
- 不为了"用户体验"而填充假数据
- 不隐藏数据缺失的真实情况
- 不过度解释或扩展原始数据含义

## 🔍 验证方式

用户可以通过以下方式验证数据真实性：

1. **源文件对比**: 直接查看 `output/merged/*.json` 文件
2. **API查询**: 使用GraphQL Playground验证API返回内容
3. **数据库检查**: 直接查询SQLite数据库文件
4. **代码审查**: 检查service层代码的数据转换逻辑

## 📝 数据缺失处理

当遇到数据缺失时，我们的处理方式：

```typescript
// ✅ 正确做法
{
  name: monster.nameEn || "Unknown",
  threatLevel: monster.threatLevel || null,
  elements: monster.elements ? monster.elements.split(',') : [],
  habitat: "Unknown" // 明确标记为未知
}

// ❌ 错误做法 
{
  name: monster.nameEn || "Unknown",
  threatLevel: calculateThreatLevel(monster.species), // 主观推断
  elements: inferElements(monster.type), // 算法生成
  habitat: getHabitatByType(monster.type) // 映射关系
}
```

---

**此声明于2025年6月28日发布，对所有项目贡献者和用户具有约束力。**

任何违背数据真实性原则的代码变更都将被拒绝。
