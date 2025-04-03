# 快速开始

本节将介绍如何在项目中使用主题

```scss
// assets/style/index.scss
@use '@dinert/element-plus/variables' with(
  $namespace: 'busy',
);
@use '@dinert/element-plus/theme';
```


```typescript
// main.ts
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import DinertElementPlus from '@dinert/element-plus'
import './assets/style/index.scss'
import App from './App.vue'

const app = createApp(App)

app.use(ElementPlus)
app.use(DinertElementPlus)
app.mount('#app')
```