
import path from 'path'
import {defineConfig} from 'vitepress'

import vueJsx from '@vitejs/plugin-vue-jsx' // 添加这一句
import {mdPlugin} from './plugins/markdown-config'


function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
  }
export default defineConfig({
    // base:  process.env.NODE_ENV === 'production' ? '/dinert-element-plus/' : '/',
    vite: {
        resolve: {
            alias: {
                "@packages": _resolve("../../packages"),
                "@docs": _resolve("../../docs"),
            }
        },
        plugins: [vueJsx()],

    },
    themeConfig: {
      siteTitle: 'dinert-element-plus',
      nav: [
        { text: "指南", link: "/guide/installation"},
        { text: "组件", link: '/examples/form/basic' },
      ],
      socialLinks: [
        { icon: "github", link: "https://github.com/Dinert/dinert-element-plus" },
      ],
      sidebar: {
        "/guide/": [
            {
                text: "基础",
                items: [
                    {
                        text: "安装",
                        link: "/guide/installation"
                    },
                    {
                        text: "快速开始",
                        link: "/guide/quickstart"
                    },
                ]
            },
        ],
        "/examples/": [
            {
                text: '组件',
                items: [{
                    text: "Form（表单）",
                    link: "/examples/form",
                    target: '/examples/form/basic',
                    collapsed: true,
                    items: [
                        {
                            text: "基础用法",
                            link: "/examples/form/basic",
                        },
                        {
                            text: "input 输入框",
                            link: "/examples/form/input",
                        },
                        {
                            text: "input-number 数字输入框",
                            link: "/examples/form/input-number",
                        },
                        {
                            text: "select 选择框",
                            link: "/examples/form/select",
                        },
                        {
                            text: "tree-select 树形选择",
                            link: "/examples/form/tree-select",
                        },
                        {
                            text: "input-autocomplete 自动补全输入框",
                            link: "/examples/form/autocomplete",
                        },
                        {
                            text: "switch 开关",
                            link: "/examples/form/switch",
                        },
                        {
                            text: "date 时间选择器（时、日、周、月、年）",
                            link: "/examples/form/date",
                        },
                        {
                            text: "radio 单选按钮",
                            link: "/examples/form/radio",
                        },
                        {
                            text: "checkbox 多选框",
                            link: "/examples/form/checkbox",
                        },
                        {
                            text: "rate 评分",
                            link: "/examples/form/rate",
                        },
                        {
                            text: "cascader 级联选择器",
                            link: "/examples/form/cascader",
                        },

                    ]
                }]

            }
        ]
      }
    },
    markdown: {
        lineNumbers: true,
        config: (md) => mdPlugin(md)
    }
})
