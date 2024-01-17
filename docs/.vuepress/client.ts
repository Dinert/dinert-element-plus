import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import TablePage from '../components/aaa.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    // app.use(DinertElementPlus)
    app.component('TablePage', TablePage)
  },
  setup() {},
  rootComponents: [],
})