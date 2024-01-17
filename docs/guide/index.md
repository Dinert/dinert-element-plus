---
sidebar: false
contributors: true
---

# 快速开始

本节将介绍如何在项目中使用 <el-link type="primary" :underline="false" href="https://github.com/Dinert/element-plus">Dinert Element Plus。</el-link>

## 安装
### 使用包管理器
我们建议您使用包管理器（如 NPM、[Yarn](https://classic.yarnpkg.com/lang/en/) 或 [pnpm](https://pnpm.io/)）安装 Dinert Element Plus.

## 用法
```shell
# 选择一个你喜欢的包管理器

# NPM
$ npm install lodash element-plus @dinert/element-plus

# Yarn
$ yarn add lodash element-plus @dinert/element-plus

# pnpm
$ pnpm install lodash element-plus @dinert/element-plus
```

### 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DinertElementPlus from '@dinert/element-plus'
import '@dinert/element-plus/style'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(DinertElementPlus)
app.mount('#app')
```

### 手动导入

> App.vue
>
```html
<template>
  <dinert-table-page>

  </dinert-table-page>
</template>
<script>
  import { DinertTablePage } from '@dinert/element-plus'
  export default {
    components: { DinertTablePage },
  }
</script>
```