# `@mhwildswiki/eslint-config`

MHWildsWiki 项目的 ESLint 配置包。

## 包含配置

- `base.js` - 基础 JavaScript/TypeScript 配置
- `next.js` - Next.js 项目专用配置  
- `react-internal.js` - React 内部组件库配置

## 使用方法

```js
// 在项目的 .eslintrc.js 或 eslint.config.js 中
module.exports = {
  extends: ["@mhwildswiki/eslint-config/base"],
  // 或其他配置
};
```
