function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = []
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
import{j as o,b6 as p,b7 as u,b8 as l,b9 as c,ba as f,bb as d,bc as b,bd as m,be as h,bf as g,b2 as A,d as P,u as _,l as v,z as R,bg as w,bh as y,bi as C,aD as E}from"./chunks/framework.frReJlQd.js";import{R as T}from"./chunks/theme.DlNFqwvR.js";function i(e){if(e.extends){const t=i(e.extends);return{...t,...e,async enhanceApp(a){t.enhanceApp&&await t.enhanceApp(a),e.enhanceApp&&await e.enhanceApp(a)}}}return e}const s=i(T),D=P({name:"VitePressApp",setup(){const{site:e,lang:t,dir:a}=_();return v(()=>{R(()=>{document.documentElement.lang=t.value,document.documentElement.dir=a.value})}),e.value.router.prefetchLinks&&w(),y(),C(),s.setup&&s.setup(),()=>E(s.Layout)}});async function S(){globalThis.__VITEPRESS__=!0;const e=L(),t=j();t.provide(u,e);const a=l(e.route);return t.provide(c,a),t.component("Content",f),t.component("ClientOnly",d),Object.defineProperties(t.config.globalProperties,{$frontmatter:{get(){return a.frontmatter.value}},$params:{get(){return a.page.value.params}}}),s.enhanceApp&&await s.enhanceApp({app:t,router:e,siteData:b}),{app:t,router:e,data:a}}function j(){return m(D)}function L(){let e=o,t;return h(a=>{let n=g(a),r=null;return n&&(e&&(t=n),(e||t===n)&&(n=n.replace(/\.js$/,".lean.js")),r=A(()=>import(n),__vite__mapDeps([]))),o&&(e=!1),r},s.NotFound)}o&&S().then(({app:e,router:t,data:a})=>{t.go().then(()=>{p(t.route,a.site),e.mount("#app")})});export{S as createApp};