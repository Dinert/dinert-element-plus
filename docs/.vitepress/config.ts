
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
                    target: '/examples/form/basic',
                    collapsed: true,
                    base: '/examples/form/',
                    items: [
                        {
                            text: "基础用法",
                            link: "basic",
                        },
                        {
                            text: "input 输入框",
                            link: "input",
                        },
                        {
                            text: "input-number 数字输入框",
                            link: "input-number",
                        },
                        {
                            text: "select 选择框",
                            link: "select",
                        },
                        {
                            text: "tree-select 树形选择",
                            link: "tree-select",
                        },
                        {
                            text: "input-autocomplete 自动补全输入框",
                            link: "autocomplete",
                        },
                        {
                            text: "switch 开关",
                            link: "switch",
                        },
                        {
                            text: "date 时间选择器（时、日、周、月、年）",
                            link: "date",
                        },
                        {
                            text: "radio 单选按钮",
                            link: "radio",
                        },
                        {
                            text: "checkbox 多选框",
                            link: "checkbox",
                        },
                        {
                            text: "rate 评分",
                            link: "rate",
                        },
                        {
                            text: "cascader 级联选择器",
                            link: "cascader",
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
