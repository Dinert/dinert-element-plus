import{c as r,J as t,w as C,m as n,p as c,a,aZ as o,G as p,o as u}from"./chunks/framework.C4keA9Vn.js";const i=n("h1",{id:"dinertform-表单",tabindex:"-1"},[a("DinertForm 表单 "),n("a",{class:"header-anchor",href:"#dinertform-表单","aria-label":'Permalink to "DinertForm 表单"'},"​")],-1),D=n("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),F=n("p",null,"Form/input-number/index",-1),k=o('<h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>search</td><td>是否显示右侧的查询和重置按钮</td><td>Boolean</td><td>true</td></tr><tr><td>form</td><td><a href="#form-属性">详细请参阅下面form属性</a></td><td>Object</td><td>一</td></tr><tr><td>class</td><td>值为near时在查询栏中使用，值为dialog在弹窗中使用</td><td>String</td><td>一</td></tr></tbody></table><h3 id="form-属性" tabindex="-1">form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;form 属性&quot;">​</a></h3>',3),d=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),A=n("tr",null,[n("td",null,"formItem"),n("td",null,[a("表单组件列表对象，"),n("a",{href:"#formitem-属性"},"详细请参阅下面formItem属性")]),n("td",null,"object"),n("td",null,"{}")],-1),m=n("td",null,"colLayout",-1),B=n("td",null,"每个表单组件列表布局",-1),h=n("td",null,"{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24 }",-1),_=n("tr",null,[n("td",null,"row"),n("td",null,"表单组件的row"),n("td",null,"object"),n("td",null,"{}")],-1),y=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否显示每个表单组件的值，不显示表单组件"),n("td",null,"boolean"),n("td",null,"一")],-1),f=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#form-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),b=n("h3",{id:"formitem-属性",tabindex:"-1"},[a("formItem 属性 "),n("a",{class:"header-anchor",href:"#formitem-属性","aria-label":'Permalink to "formItem 属性"'},"​")],-1),g=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),P=n("td",null,"type",-1),x=n("td",null,"表单组件类型",-1),I=n("td",null,"一",-1),w=n("td",null,"show",-1),v=n("td",null,"是否显示该表单组件",-1),T=n("td",null,"一",-1),q=n("td",null,"vif",-1),N=n("td",null,"是否渲染该表单组件",-1),S=n("td",null,"一",-1),j=n("tr",null,[n("td",null,"label"),n("td",null,"表单组件的名称"),n("td",null,"String"),n("td",null,"一")],-1),V=n("tr",null,[n("td",null,"sort"),n("td",null,"表单组件的排序顺序"),n("td",null,"Number"),n("td",null,"一")],-1),L=n("tr",null,[n("td",null,"options"),n("td",null,"组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法"),n("td",null,"Object"),n("td",null,"一")],-1),M=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否直接显示表单组件的值"),n("td",null,"boolean"),n("td",null,"一")],-1),R=n("tr",null,[n("td",null,"colLayout"),n("td",null,"表单组件的布局方式"),n("td",null,"Object"),n("td",null,"{ }")],-1),O=n("tr",null,[n("td",null,"required"),n("td",null,"是否必填"),n("td",null,"Boolean"),n("td",null,"一")],-1),z=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#formitem-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),J=o('<h3 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>formItem_[key]</td><td>formItem_是固定的，key里面的值取决于form中的formItem的key</td></tr><tr><td>form_search</td><td>自定义查询栏</td></tr></tbody></table>',2),Q=JSON.parse('{"title":"DinertForm 表单","description":"","frontmatter":{},"headers":[],"relativePath":"examples/form/input-number.md","filePath":"examples/form/input-number.md"}'),W={name:"examples/form/input-number.md"},U=Object.assign(W,{setup(G){const e=["input","select","textarea","input-number","input-autocomplete","switch","datetime","date","week","month","year","datetimerange","daterange","monthrange","custom","radio","tree-select","radio-button","rate","checkbox","cascader"].join(" | "),l="{ xl: 'number', lg: 'number', md: 'number', sm: 'number', xs: 'number' }";return(Z,H)=>{const E=p("DinertDemo"),s=p("dinert-api-typing");return u(),r("div",null,[i,D,t(E,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..%2F..%2F..%2F..%2Fpackages'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EModelProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EFormItemProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Enum%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Enum2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Enum3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20form%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EModelProps%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20FormItemProps%3Cspan%20class%3D%22token%20operator%22%3E%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emodel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Enum3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EcolLayout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E24%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ElabelWidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'auto'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EformItem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Enum%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E6%95%B0%E9%87%8F'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'input-number'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Enum2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E6%8C%89%E9%92%AE%E4%BD%8D%E7%BD%AE'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'input-number'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EcontrolsPosition%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'right'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EonChange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E7%9B%91%E5%90%AC%E5%80%BC%E7%9A%84%E6%94%B9%E5%8F%98%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Enum3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E7%B2%BE%E5%BA%A6'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'input-number'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eprecision%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Estep%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0.1%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emax%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E10%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EonChange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E7%9B%91%E5%90%AC%E5%80%BC%E7%9A%84%E6%94%B9%E5%8F%98%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ehome%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Edinert-form%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aform%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eform%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edialog%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asearch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"Form/input-number/index","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7Bref%7D%20from%20'vue'%0Aimport%20%7BRewriteFormProps%7D%20from%20'..%2F..%2F..%2F..%2Fpackages'%0A%0A%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%0Ainterface%20ModelProps%20%7B%0A%7D%0A%0A%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%0Ainterface%20FormItemProps%20%7B%0A%20%20%20%20num%3A%20string%3B%0A%20%20%20%20num2%3A%20string%3B%0A%20%20%20%20num3%3A%20string%3B%0A%7D%0A%0Aconst%20form%20%3D%20ref%3CRewriteFormProps%3CModelProps%2C%20FormItemProps%3E%3E(%7B%0A%20%20%20%20model%3A%20%7B%0A%20%20%20%20%20%20%20%20num3%3A%202%0A%20%20%20%20%7D%2C%0A%20%20%20%20colLayout%3A%20%7Bspan%3A%2024%7D%2C%0A%20%20%20%20labelWidth%3A%20'auto'%2C%0A%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20num%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%95%B0%E9%87%8F'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input-number'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20num2%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E6%8C%89%E9%92%AE%E4%BD%8D%E7%BD%AE'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input-number'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20controlsPosition%3A%20'right'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChange()%20%7B%20%2F%2F%20%E7%9B%91%E5%90%AC%E5%80%BC%E7%9A%84%E6%94%B9%E5%8F%98%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20num3%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%B2%BE%E5%BA%A6'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input-number'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20precision%3A%202%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20step%3A%200.1%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20max%3A%2010%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChange()%20%7B%20%2F%2F%20%E7%9B%91%E5%90%AC%E5%80%BC%E7%9A%84%E6%94%B9%E5%8F%98%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%0A%0A%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22home%22%3E%0A%20%20%20%20%20%20%20%20%3Cdinert-form%20%3Aform%3D%22form%22%20class%3D%22dialog%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Asearch%3D%22false%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:C(()=>[F]),_:1}),k,n("table",null,[d,n("tbody",null,[A,n("tr",null,[m,B,n("td",null,[t(s,{type:"enmu",details:l})]),h]),_,y,f])]),b,n("table",null,[g,n("tbody",null,[n("tr",null,[P,x,n("td",null,[t(s,{type:"enmu",details:c(e)},null,8,["details"])]),I]),n("tr",null,[w,v,n("td",null,[t(s,{type:"enmu",details:"boolean' | '(model) => boolean"})]),T]),n("tr",null,[q,N,n("td",null,[t(s,{type:"enmu",details:"boolean' | '(model) => boolean"})]),S]),j,V,L,M,R,O,z])]),J])}}});export{Q as __pageData,U as default};
