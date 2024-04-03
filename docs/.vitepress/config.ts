
import path from 'path'
import fs from 'fs'
import {defineConfig} from 'vitepress'

import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'

import vueJsx from '@vitejs/plugin-vue-jsx' // 添加这一句


function _resolve(dir: string) {
    return path.resolve(__dirname, dir)
  }

export default defineConfig({
    vite: {
        resolve: {
            alias: {
                "@packages": _resolve("../../packages"),
                "@docs": _resolve("../../docs"),
            }
        },
        plugins: [vueJsx()]
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
                            text: "基本用法",
                            link: "/examples/form/basic",
                        },
                    ]
                }]

            }
        ]
      }
    },
    markdown: {
        lineNumbers: true,
        config: (md) => {
            md.use(mdContainer, 'demo', {
                render(tokens, idx: number) {
                    const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/);
                    if (tokens[idx].nesting === 1 /* means the tag is opening */) {
                      const description = m && m.length > 1 ? m[1] : '';
                      const sourceFileToken = tokens[idx + 2];
                      let source = '';
                      const sourceFile = sourceFileToken.children?.[0].content ?? '';
                      if (sourceFileToken.type === 'inline') {

                        source = fs.readFileSync(
                          path.resolve('components', `${sourceFile}.vue`),
                          'utf-8'
                        );
                      }
                      if (!source) throw new Error(`Incorrect source file: ${sourceFile}`);

                      return `<DinertDemo source="${encodeURIComponent(
                        source
                      )}" path="${sourceFile}" raw-source="${encodeURIComponent(
                        source
                      )}" description="${encodeURIComponent(description)}">`;
                    } else {
                      return '</DinertDemo>';
                    }
                }
            })
        }
    }
})
