import {defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  title: '基于ElementPlus二次封装的组件',
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/Dinert/element-plus',
    locales: {
        'en-US': {
            colorMode: 'dark',
            home: '/'
        }
    },
    // 默认主题配置
    navbar: [
        {
            text: '首页',
            link: '/'
        }
    ],
    sidebar: [
        {
            text: 'TablePage',
            link: '/guide/TablePage.md',
        }
    ],
  }),
})