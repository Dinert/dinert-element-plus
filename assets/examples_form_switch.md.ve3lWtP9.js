import{c as E,J as t,w as C,m as n,p as c,a,a_ as p,G as o,o as u}from"./chunks/framework.OWterPJr.js";const i=n("h1",{id:"开关",tabindex:"-1"},[a("开关 "),n("a",{class:"header-anchor",href:"#开关","aria-label":'Permalink to "开关"'},"​")],-1),d=n("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),D=n("p",null,"Form/switch/index",-1),F=p('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>search</td><td>是否显示右侧的查询和重置按钮</td><td>Boolean</td><td>true</td></tr><tr><td>class</td><td>值为near时在查询栏中使用，值为dialog在弹窗中使用</td><td>String</td><td>一</td></tr><tr><td>form</td><td><a href="#form-属性">详细请参阅下面form属性</a></td><td>Object</td><td>一</td></tr></tbody></table><h2 id="form-属性" tabindex="-1">form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;form 属性&quot;">​</a></h2>',3),k=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),m=n("td",null,"formItem",-1),A=n("td",null,[a("表单组件列表对象，"),n("a",{href:"#formitem-属性"},"详细请参阅下面formItem属性")],-1),h=n("td",null,"{}",-1),_=n("td",null,"colLayout",-1),B=n("td",null,"每个表单组件列表布局",-1),f=n("td",null,"{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24 }",-1),y=n("tr",null,[n("td",null,"row"),n("td",null,"表单组件的row"),n("td",null,"object"),n("td",null,"{}")],-1),b=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否显示每个表单组件的值，不显示表单组件"),n("td",null,"boolean"),n("td",null,"一")],-1),g=n("tr",null,[n("td",null,"required"),n("td",null,"是否验证每个表单组件是否必填"),n("td",null,"boolean"),n("td",null,"一")],-1),w=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#form-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),I=n("h2",{id:"formitem-属性",tabindex:"-1"},[a("formItem 属性 "),n("a",{class:"header-anchor",href:"#formitem-属性","aria-label":'Permalink to "formItem 属性"'},"​")],-1),P=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),v=n("td",null,"type",-1),x=n("td",null,"表单组件类型",-1),q=n("td",null,"一",-1),T=n("td",null,"show",-1),R=n("td",null,"是否显示该表单组件",-1),N=n("td",null,"一",-1),S=n("td",null,"vif",-1),j=n("td",null,"是否渲染该表单组件",-1),V=n("td",null,"一",-1),L=n("tr",null,[n("td",null,"label"),n("td",null,"表单组件的名称"),n("td",null,"String"),n("td",null,"一")],-1),M=n("tr",null,[n("td",null,"sort"),n("td",null,"表单组件的列的排序，第一个组件为0，第二个为10，以此类推，数值越小组件越靠前"),n("td",null,"Number"),n("td",null,"一")],-1),O=n("tr",null,[n("td",null,"options"),n("td",null,"组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法"),n("td",null,"Object"),n("td",null,"一")],-1),z=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否直接显示表单组件的值"),n("td",null,"boolean"),n("td",null,"一")],-1),J=n("td",null,"colLayout",-1),W=n("td",null,"当前表单组件列表布局",-1),G=n("td",null,"{ }",-1),H=n("tr",null,[n("td",null,"required"),n("td",null,"是否必填"),n("td",null,"Boolean"),n("td",null,"一")],-1),K=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#formitem-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),Q=n("h2",{id:"事件",tabindex:"-1"},[a("事件 "),n("a",{class:"header-anchor",href:"#事件","aria-label":'Permalink to "事件"'},"​")],-1),U=n("thead",null,[n("tr",null,[n("th",null,"事件名"),n("th",null,"说明"),n("th",null,"类型")])],-1),X=n("td",null,"search-fn",-1),Y=n("td",null,"点击查询时触发",-1),Z=n("td",null,"reset-fn",-1),$=n("td",null,"点击重置时触发",-1),n2=n("td",null,"un-fold",-1),t2=n("td",null,"点击更多时触发",-1),s2=p('<h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>formItem_[key]</td><td>formItem_是固定的，key里面的值取决于form中的formItem的key，自定义组件</td></tr><tr><td>formItem_after_[key]</td><td>formItem_after_是固定的，key里面的值取决于form中的formItem的key，自定义组件后的内容</td></tr><tr><td>formItem_before_[key]</td><td>formItem_after_是固定的，key里面的值取决于form中的formItem的key，自定义组件前的内容</td></tr><tr><td>form_search</td><td>自定义查询栏</td></tr></tbody></table>',2),r2=JSON.parse('{"title":"开关","description":"","frontmatter":{},"headers":[],"relativePath":"examples/form/switch.md","filePath":"examples/form/switch.md"}'),a2={name:"examples/form/switch.md"},E2=Object.assign(a2,{setup(e2){const l=["input","select","textarea","input-number","input-autocomplete","switch","datetime","date","week","month","year","datetimerange","daterange","monthrange","custom","radio","tree-select","radio-button","rate","checkbox","cascader"].join(" | "),e="{ xl: 'number', lg: 'number', md: 'number', sm: 'number', xs: 'number' }";return(o2,p2)=>{const r=o("DinertDemo"),s=o("dinert-api-typing");return u(),E("div",null,[i,d,t(r,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20shallowRef%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..%2F..%2F..%2F..%2Fpackages'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3ECheck%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20Close%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40element-plus%2Ficons-vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EModelProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EFormItemProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20form%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EModelProps%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20FormItemProps%3Cspan%20class%3D%22token%20operator%22%3E%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emodel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EcolLayout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E24%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ElabelWidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'auto'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EformItem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E5%BC%80%E5%85%B3'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'switch'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E5%8A%A0%E8%BD%BD%E4%B8%AD'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'switch'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eloading%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E5%BC%80%E5%85%B32'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'switch'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EinlinePrompt%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EactiveIcon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EshallowRef%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3ECheck%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EinactiveIcon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EshallowRef%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EClose%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ehome%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Edinert-form%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aform%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eform%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edialog%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asearch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"Form/switch/index","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7Bref%2C%20shallowRef%7D%20from%20'vue'%0Aimport%20%7BRewriteFormProps%7D%20from%20'..%2F..%2F..%2F..%2Fpackages'%0Aimport%20%7BCheck%2C%20Close%7D%20from%20'%40element-plus%2Ficons-vue'%0A%0A%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%0Ainterface%20ModelProps%20%7B%0A%7D%0A%0A%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%0Ainterface%20FormItemProps%20%7B%0A%20%20%20%20name%3A%20string%3B%0A%20%20%20%20name2%3A%20string%3B%0A%20%20%20%20name3%3A%20string%3B%0A%7D%0A%0Aconst%20form%20%3D%20ref%3CRewriteFormProps%3CModelProps%2C%20FormItemProps%3E%3E(%7B%0A%20%20%20%20model%3A%20%7B%7D%2C%0A%20%20%20%20colLayout%3A%20%7Bspan%3A%2024%7D%2C%0A%20%20%20%20labelWidth%3A%20'auto'%2C%0A%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%BC%80%E5%85%B3'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'switch'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name2%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%8A%A0%E8%BD%BD%E4%B8%AD'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'switch'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20loading%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name3%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%BC%80%E5%85%B32'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'switch'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inlinePrompt%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20activeIcon%3A%20shallowRef(Check)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20inactiveIcon%3A%20shallowRef(Close)%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%0A%0A%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22home%22%3E%0A%20%20%20%20%20%20%20%20%3Cdinert-form%20%3Aform%3D%22form%22%20class%3D%22dialog%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Asearch%3D%22false%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:C(()=>[D]),_:1}),F,n("table",null,[k,n("tbody",null,[n("tr",null,[m,A,n("td",null,[t(s,{type:"object",details:"{[key: string]: FormItemProps}"})]),h]),n("tr",null,[_,B,n("td",null,[t(s,{type:"object",details:e})]),f]),y,b,g,w])]),I,n("table",null,[P,n("tbody",null,[n("tr",null,[v,x,n("td",null,[t(s,{type:"enmu",details:c(l)},null,8,["details"])]),q]),n("tr",null,[T,R,n("td",null,[t(s,{type:"enmu",details:"boolean' | '(model) => boolean"})]),N]),n("tr",null,[S,j,n("td",null,[t(s,{type:"enmu",details:"boolean' | '(model) => boolean"})]),V]),L,M,O,z,n("tr",null,[J,W,n("td",null,[t(s,{type:"object",details:e})]),G]),H,K])]),Q,n("table",null,[U,n("tbody",null,[n("tr",null,[X,Y,n("td",null,[t(s,{type:"Function",details:"(value: number) => void"})])]),n("tr",null,[Z,$,n("td",null,[t(s,{type:"Function",details:"(value: number) => void"})])]),n("tr",null,[n2,t2,n("td",null,[t(s,{type:"Function",details:"() => void"})])])])]),s2])}}});export{r2 as __pageData,E2 as default};
