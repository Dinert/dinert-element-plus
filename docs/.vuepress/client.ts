import { defineClientConfig } from '@vuepress/client'
import ElementPlus from 'element-plus'
import 'element-plus/theme-chalk/src/index.scss'
import DinertElementPlus from '@dinert/element-plus'
import '@dinert/element-plus/style'
import TestTablePage from './components/test-table-page.vue'
import TestForm from './components/test-form.vue'

export default defineClientConfig({
  enhance({ app, router, siteData }) {
    app.use(ElementPlus)
    app.use(DinertElementPlus)
    app.component('TestTablePage', TestTablePage)
    app.component('TestForm', TestForm)
  },
  setup() {

  },
  rootComponents: [],
})