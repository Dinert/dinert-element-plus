declare module '*.vue' {
    import type { DefineComponent } from "vue";
    const component: DefineComponent<{}, {}, any>
}

declare module 'element-plus/dist/locale/zh-cn.mjs'