# 工作流程标准化文档

## 🔄 日常工作流程 (SOP)

### 1. 任务启动流程

#### 1.1 需求分析 (15-30分钟)
```bash
# 检查清单
□ 明确任务目标和成功标准
□ 评估对数据真实性的影响
□ 估算工作量和时间安排
□ 识别潜在技术风险
□ 检查依赖关系和前置条件
```

#### 1.2 技术方案设计 (30-60分钟)
```typescript
// 设计模板
interface TaskDesign {
  objective: string;           // 目标描述
  approach: string[];          // 技术方案
  dataIntegrityImpact: string; // 数据真实性影响评估
  estimatedEffort: string;     // 工作量评估
  riskMitigation: string[];    // 风险缓解措施
  testPlan: string[];          // 测试计划
}
```

### 2. 开发执行流程

#### 2.1 代码开发标准
```bash
# 开发前检查
□ 创建功能分支: git checkout -b feature/[task-name]
□ 更新依赖: pnpm install
□ 运行测试: pnpm test
□ 检查编译: pnpm build

# 开发中规范
□ 每30分钟commit一次进度
□ 遵循TypeScript严格模式
□ 添加必要的错误处理
□ 编写单元测试用例

# 开发后验证
□ 运行完整测试套件
□ 检查数据真实性合规
□ 性能基准测试
□ 代码质量检查
```

#### 2.2 数据处理规范
```typescript
// 数据转换标准模板
interface DataTransformStandard {
  // ✅ 正确示例
  correctExample: {
    source: "database.field",
    transform: "value || 'Unknown'",
    validation: "typeof value === 'string'",
    fallback: "明确标记为未知"
  };
  
  // ❌ 错误示例
  incorrectExample: {
    avoid: [
      "calculateValue(otherFields)",
      "inferFromPattern(name)",
      "generatePlaceholder(type)"
    ]
  };
}
```

### 3. 质量保证流程

#### 3.1 数据真实性检查
```bash
# 自动检查脚本
./scripts/data-integrity-check.sh

# 手动验证清单
□ 所有数据来源可追溯到原始文件
□ 无任何计算或推断逻辑
□ 缺失数据明确标记
□ API响应与数据库一致
□ 前端展示忠实反映后端数据
```

#### 3.2 功能测试流程
```typescript
// 测试用例模板
interface TestCase {
  description: string;
  setup: string[];
  action: string;
  expectedResult: string;
  dataIntegrityCheck: string;
  performanceTarget: string;
}

// 示例测试用例
const monsterFilterTest: TestCase = {
  description: "怪物筛选功能测试",
  setup: ["加载怪物数据", "打开筛选面板"],
  action: "选择种族='飞龙种'",
  expectedResult: "只显示飞龙种怪物",
  dataIntegrityCheck: "筛选结果中所有怪物的species字段确实为'飞龙种'",
  performanceTarget: "筛选响应时间 < 100ms"
};
```

### 4. 发布部署流程

#### 4.1 预发布检查
```bash
# 自动化检查
□ 所有测试通过
□ 构建成功
□ 安全扫描通过
□ 性能基准达标

# 手动检查
□ 功能完整性验证
□ 数据真实性最终确认
□ 用户体验测试
□ 跨浏览器兼容性
```

#### 4.2 发布后监控
```bash
# 监控指标
□ API响应时间
□ 错误率统计
□ 用户行为分析
□ 数据完整性监控
□ 性能指标追踪
```

## 📋 今日工作计划执行

### 任务1: 后端编译错误修复 🔥🔥🔥

#### 目标
解决所有TypeScript编译错误，确保后端可以正常启动并提供API服务。

#### 具体步骤
```bash
# Step 1: 修复monster.model.ts循环依赖 (30分钟)
- 重新组织类定义顺序
- 解决Stage类的初始化问题
- 验证GraphQL schema正确生成

# Step 2: 统一service层字段映射 (45分钟)  
- 检查所有Prisma查询的字段名
- 更新transformTo*方法的字段映射
- 确保GraphQL返回字段与前端期望一致

# Step 3: 端到端功能验证 (30分钟)
- 启动后端服务
- 测试所有GraphQL查询
- 验证前端数据加载
```

#### 成功标准
- [ ] 后端编译无错误
- [ ] GraphQL Playground可以正常查询
- [ ] 前端可以加载真实数据
- [ ] 筛选功能正常工作

现在开始执行第一个任务。
