import{c as E,J as t,w as C,m as n,p as c,a as s,a_ as p,G as e,o as u}from"./chunks/framework.OWterPJr.js";const i=n("h1",{id:"评分",tabindex:"-1"},[s("评分 "),n("a",{class:"header-anchor",href:"#评分","aria-label":'Permalink to "评分"'},"​")],-1),d=n("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),D=n("p",null,"Form/rate/index",-1),F=p('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>search</td><td>是否显示右侧的查询和重置按钮</td><td>Boolean</td><td>true</td></tr><tr><td>class</td><td>值为near时在查询栏中使用，值为dialog在弹窗中使用</td><td>String</td><td>一</td></tr><tr><td>form</td><td><a href="#form-属性">详细请参阅下面form属性</a></td><td>Object</td><td>一</td></tr></tbody></table><h2 id="form-属性" tabindex="-1">form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;form 属性&quot;">​</a></h2>',3),k=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),m=n("td",null,"formItem",-1),A=n("td",null,[s("表单组件列表对象，"),n("a",{href:"#formitem-属性"},"详细请参阅下面formItem属性")],-1),h=n("td",null,"{}",-1),_=n("td",null,"colLayout",-1),B=n("td",null,"每个表单组件列表布局",-1),f=n("td",null,"{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24 }",-1),y=n("tr",null,[n("td",null,"row"),n("td",null,"表单组件的row"),n("td",null,"object"),n("td",null,"{}")],-1),b=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否显示每个表单组件的值，不显示表单组件"),n("td",null,"boolean"),n("td",null,"一")],-1),g=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#form-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),w=n("h2",{id:"formitem-属性",tabindex:"-1"},[s("formItem 属性 "),n("a",{class:"header-anchor",href:"#formitem-属性","aria-label":'Permalink to "formItem 属性"'},"​")],-1),I=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),R=n("td",null,"type",-1),P=n("td",null,"表单组件类型",-1),v=n("td",null,"一",-1),x=n("td",null,"show",-1),T=n("td",null,"是否显示该表单组件",-1),q=n("td",null,"一",-1),S=n("td",null,"vif",-1),L=n("td",null,"是否渲染该表单组件",-1),N=n("td",null,"一",-1),j=n("tr",null,[n("td",null,"label"),n("td",null,"表单组件的名称"),n("td",null,"String"),n("td",null,"一")],-1),V=n("tr",null,[n("td",null,"sort"),n("td",null,"表单组件的列的排序，第一个组件为0，第二个为10，以此类推，数值越小组件越靠前"),n("td",null,"Number"),n("td",null,"一")],-1),M=n("tr",null,[n("td",null,"options"),n("td",null,"组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法"),n("td",null,"Object"),n("td",null,"一")],-1),O=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否直接显示表单组件的值"),n("td",null,"boolean"),n("td",null,"一")],-1),z=n("td",null,"colLayout",-1),H=n("td",null,"当前表单组件列表布局",-1),J=n("td",null,"{ }",-1),W=n("tr",null,[n("td",null,"required"),n("td",null,"是否必填"),n("td",null,"Boolean"),n("td",null,"一")],-1),G=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#formitem-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),K=n("h2",{id:"事件",tabindex:"-1"},[s("事件 "),n("a",{class:"header-anchor",href:"#事件","aria-label":'Permalink to "事件"'},"​")],-1),Q=n("thead",null,[n("tr",null,[n("th",null,"事件名"),n("th",null,"说明"),n("th",null,"类型")])],-1),U=n("td",null,"search-fn",-1),X=n("td",null,"点击查询时触发",-1),Y=n("td",null,"reset-fn",-1),Z=n("td",null,"点击重置时触发",-1),$=n("td",null,"un-fold",-1),n2=n("td",null,"点击更多时触发",-1),t2=p('<h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>formItem_[key]</td><td>formItem_是固定的，key里面的值取决于form中的formItem的key，自定义组件</td></tr><tr><td>formItem_after_[key]</td><td>formItem_after_是固定的，key里面的值取决于form中的formItem的key，自定义组件后的内容</td></tr><tr><td>formItem_before_[key]</td><td>formItem_after_是固定的，key里面的值取决于form中的formItem的key，自定义组件前的内容</td></tr><tr><td>form_search</td><td>自定义查询栏</td></tr></tbody></table>',2),l2=JSON.parse('{"title":"评分","description":"","frontmatter":{},"headers":[],"relativePath":"examples/form/rate.md","filePath":"examples/form/rate.md"}'),a2={name:"examples/form/rate.md"},r2=Object.assign(a2,{setup(s2){const l=["input","select","textarea","input-number","input-autocomplete","switch","datetime","date","week","month","year","datetimerange","daterange","monthrange","custom","radio","tree-select","radio-button","rate","checkbox","cascader"].join(" | "),o="{ xl: 'number', lg: 'number', md: 'number', sm: 'number', xs: 'number' }";return(o2,e2)=>{const r=e("DinertDemo"),a=e("dinert-api-typing");return u(),E("div",null,[i,d,t(r,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20markRaw%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..%2F..%2F..%2F..%2Fpackages'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3EChatRound%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ChatLineRound%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20ChatDotRound%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%40element-plus%2Ficons-vue'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EModelProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EFormItemProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20form%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EModelProps%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20FormItemProps%3Cspan%20class%3D%22token%20operator%22%3E%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emodel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EcolLayout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E24%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ElabelWidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'auto'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EformItem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E8%AF%84%E5%88%86'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'rate'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E5%8D%8A%E9%80%89'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'rate'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EallowHalf%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename3%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E5%85%B6%E5%AE%83%E5%9B%BE%E6%A0%87'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'rate'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EvoidIcon%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EmarkRaw%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EChatRound%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eicons%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3EmarkRaw%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EChatRound%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EmarkRaw%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EChatLineRound%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20function%22%3EmarkRaw%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3EChatDotRound%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EshowScore%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ehome%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Edinert-form%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aform%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eform%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edialog%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asearch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"Form/rate/index","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7Bref%2C%20markRaw%7D%20from%20'vue'%0Aimport%20%7BRewriteFormProps%7D%20from%20'..%2F..%2F..%2F..%2Fpackages'%0Aimport%20%7BChatRound%2C%20ChatLineRound%2C%20ChatDotRound%7D%20from%20'%40element-plus%2Ficons-vue'%0A%0A%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%0Ainterface%20ModelProps%20%7B%0A%7D%0A%0A%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%0Ainterface%20FormItemProps%20%7B%0A%20%20%20%20name%3A%20string%3B%0A%20%20%20%20name2%3A%20string%3B%0A%20%20%20%20name3%3A%20string%3B%0A%7D%0A%0Aconst%20form%20%3D%20ref%3CRewriteFormProps%3CModelProps%2C%20FormItemProps%3E%3E(%7B%0A%20%20%20%20model%3A%20%7B%7D%2C%0A%20%20%20%20colLayout%3A%20%7Bspan%3A%2024%7D%2C%0A%20%20%20%20labelWidth%3A%20'auto'%2C%0A%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%AF%84%E5%88%86'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'rate'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name2%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%8D%8A%E9%80%89'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'rate'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20allowHalf%3A%20true%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name3%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%85%B6%E5%AE%83%E5%9B%BE%E6%A0%87'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'rate'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20voidIcon%3A%20markRaw(ChatRound)%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20icons%3A%20%5BmarkRaw(ChatRound)%2C%20markRaw(ChatLineRound)%2C%20markRaw(ChatDotRound)%5D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20showScore%3A%20true%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%0A%0A%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22home%22%3E%0A%20%20%20%20%20%20%20%20%3Cdinert-form%20%3Aform%3D%22form%22%20class%3D%22dialog%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Asearch%3D%22false%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:C(()=>[D]),_:1}),F,n("table",null,[k,n("tbody",null,[n("tr",null,[m,A,n("td",null,[t(a,{type:"object",details:"{[key: string]: FormItemProps}"})]),h]),n("tr",null,[_,B,n("td",null,[t(a,{type:"object",details:o})]),f]),y,b,g])]),w,n("table",null,[I,n("tbody",null,[n("tr",null,[R,P,n("td",null,[t(a,{type:"enmu",details:c(l)},null,8,["details"])]),v]),n("tr",null,[x,T,n("td",null,[t(a,{type:"enmu",details:"boolean' | '(model) => boolean"})]),q]),n("tr",null,[S,L,n("td",null,[t(a,{type:"enmu",details:"boolean' | '(model) => boolean"})]),N]),j,V,M,O,n("tr",null,[z,H,n("td",null,[t(a,{type:"object",details:o})]),J]),W,G])]),K,n("table",null,[Q,n("tbody",null,[n("tr",null,[U,X,n("td",null,[t(a,{type:"Function",details:"(value: number) => void"})])]),n("tr",null,[Y,Z,n("td",null,[t(a,{type:"Function",details:"(value: number) => void"})])]),n("tr",null,[$,n2,n("td",null,[t(a,{type:"Function",details:"() => void"})])])])]),t2])}}});export{l2 as __pageData,r2 as default};
