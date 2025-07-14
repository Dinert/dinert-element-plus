import {createApp} from 'vue'
import App from './App.vue'

import Dinert from './packages'

import ElementPlus from 'element-plus'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
// import 'element-plus/theme-chalk/src/index.scss'
import 'element-plus/dist/index.css'
// import VueDOMPurifyHTML from 'vue-dompurify-html'

const app = createApp(App)
// app.use(VueDOMPurifyHTML)
app.use(Dinert)
app.use(ElementPlus, {
    locale: zhCn,
})
app.mount('#app')


