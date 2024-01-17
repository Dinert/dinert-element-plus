import {defaultTheme, defineUserConfig } from 'vuepress'

export default defineUserConfig({
  lang: 'zh-CN',
  locales: {
    '/': {
        lang: 'en-US',
        title: 'DinertElementPlus组件库',
        description: '这是基于Vue3、ElementPlus、TypeScript二次封装的组件库',
      },
  },
  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/Dinert/element-plus',
    locales: {
        '/': {
            colorModeSwitch: true,
            toggleColorMode: '切换颜色模式',
            editLink: false
        },
    },
    // 默认主题配置
    navbar: [
        {
            text: '首页',
            link: '/'
        },
        {
            text: '指南',
            link: '/guide/'
        },
        {
            text: '组件',
            link: '/components/TablePage'
        }
    ],
    sidebar: {
        '/components/': [
            {
                text: 'TablePage 表格查询',
                link: '/components/TablePage.md',
            },
        ],
    }
  }),
})