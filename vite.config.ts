
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from '@vitejs/plugin-vue-jsx' // 添加这一句
import path from 'path'
import dts from "vite-plugin-dts"


export default defineConfig({
build: {
    //打包文件目录
    outDir: "es",
    //压缩
    //minify: false,
    rollupOptions: {
      //忽略打包vue文件
      external: ["vue", "element-plus"],
      input: ['./packages/index.ts'],
      output: [
        {
          //打包格式
          format: "es",
          //打包后文件名
          entryFileNames: "[name].mjs",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./dinert-element-plus/es",
        },
        {
          //打包格式
          format: "cjs",
          //打包后文件名
          entryFileNames: "[name].js",
          //让打包目录和我们目录对应
          preserveModules: true,
          exports: "named",
          //配置打包根目录
          dir: "./dinert-element-plus/lib",
        },
        {
            format: 'umd',
            exports: "named",
            dir: "./dinert-element-plus/dist",
            name: 'dinert-element-plus'
        }
      ],
    },
    lib: {
      entry: "./packages/index.ts",
    },
  },
  plugins: [
    vue(),
    vueJsx(),
    dts({
      entryRoot: "./packages/components",
      outDir: ["./dinert-element-plus/es/components", "./dinert-element-plus/lib/components"],
      //指定使用的tsconfig.json为我们整个项目根目录下,如果不配置,你也可以在components下新建tsconfig.json
      tsconfigPath: "./tsconfig.json",
    }),
],
      resolve: {
        alias: {
          '@': `${path.resolve(__dirname, 'packages')}`,
        },
        extensions: [".js", ".json", ".jsx", ".mjs", ".ts", ".tsx", ".vue"]
      },
  server: {
    port: 8958,
  }
})