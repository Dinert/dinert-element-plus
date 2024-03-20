
# 快速开始

本节将介绍如何在项目中使用 <el-link type="primary" :underline="false" href="https://github.com/Dinert/dinert-element-plus">Dinert Element Plus。</el-link>

## 完整引入

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

## 手动导入

> App.vue
>
```html
<template>
  <dinert-table-page>

  </dinert-table-page>
</template>
<script setup lang="ts">
  import { DinertTablePage } from '@dinert/element-plus'
  import '@dinert/element-plus/style'

  export default {
    components: { DinertTablePage },
  }
</script>
```