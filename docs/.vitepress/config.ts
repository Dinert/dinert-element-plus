
import path from 'path'
import {defineConfig} from 'vitepress'
import vueJsx from '@vitejs/plugin-vue-jsx' // 添加这一句

function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
  }

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@packages": _resolve("../../packages")
            }
        },
        plugins: [vueJsx()]
    },
    themeConfig: {
      siteTitle: 'dinert-element-plus',
      nav: [
        { text: "指南", link: "/guide/installation"},
        { text: "组件", link: '/examples/Form' },
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
                    text: "Form",
                    link: "/examples/Form"
                }]

            }
        ]
      }
    },
})
