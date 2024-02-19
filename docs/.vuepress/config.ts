import {defaultTheme, defineUserConfig } from 'vuepress'
export default defineUserConfig({
  base: './',

  lang: 'zh-CN',
  locales: {
    '/': {
        lang: 'en-US',
        title: 'DinertElementPlus组件库',
        description: '本项目是基于ElementPlus的UI库，采用Vue3、TypeScript、Tsx的技术二次封装的组件库',
      },
  },

  theme: defaultTheme({
    logo: 'https://vuejs.org/images/logo.png',
    repo: 'https://github.com/Dinert/dinert-element-plus',

    locales: {
        '/': {
            colorModeSwitch: true,
            toggleColorMode: '切换颜色模式',
            editLink: false,
            lastUpdatedText: '最后更新时间',
            contributorsText: '贡献者'
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
            link: '/examples/Form',
            activeMatch: '^/examples/',
        },
    ],
    sidebar: {
        '/examples/': [
            {
                text: 'Form 生成表单',
                link: '/examples/Form',
            },
            {
                text: 'Table 表格',
                link: '/examples/Table',
            },
            {
                text: 'TablePage 表格查询',
                link: '/examples/TablePage',
            },
        ],
    }
  }),
})