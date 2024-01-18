import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import DinertElementPlus from '@dinert/element-plus'
import '@dinert/element-plus/style'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(DinertElementPlus)
  },
  setup() {

  },
  rootComponents: [],
})