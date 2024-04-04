import DefaultTheme from "vitepress/theme";
import elementplus from "element-plus"
import "element-plus/dist/index.css";
import 'prismjs/themes/prism.css'

import DinertElementPlus from '../../../packages/index'
import globals from '../globals';

export default {
  ...DefaultTheme,

  enhanceApp: async ({ app, router, siteData }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
      app.use(elementplus);
      app.use(DinertElementPlus);
      app.use(globals);
  },
}