import{c as r,J as n,w as C,m as t,p as c,a as s,a_ as l,G as o,o as u}from"./chunks/framework.OWterPJr.js";const i=t("h1",{id:"输入框",tabindex:"-1"},[s("输入框 "),t("a",{class:"header-anchor",href:"#输入框","aria-label":'Permalink to "输入框"'},"​")],-1),d=t("h2",{id:"基础用法",tabindex:"-1"},[s("基础用法 "),t("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),F=t("p",null,"Form/input/index",-1),D=l('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>search</td><td>是否显示右侧的查询和重置按钮</td><td>Boolean</td><td>true</td></tr><tr><td>class</td><td>值为near时在查询栏中使用，值为dialog在弹窗中使用</td><td>String</td><td>一</td></tr><tr><td>form</td><td><a href="#form-属性">详细请参阅下面form属性</a></td><td>Object</td><td>一</td></tr></tbody></table><h2 id="form-属性" tabindex="-1">form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;form 属性&quot;">​</a></h2>',3),k=t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1),m=t("td",null,"formItem",-1),A=t("td",null,[s("表单组件列表对象，"),t("a",{href:"#formitem-属性"},"详细请参阅下面formItem属性")],-1),h=t("td",null,"{}",-1),_=t("td",null,"colLayout",-1),B=t("td",null,"每个表单组件列表布局",-1),f=t("td",null,"{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24 }",-1),y=t("tr",null,[t("td",null,"row"),t("td",null,"表单组件的row"),t("td",null,"object"),t("td",null,"{}")],-1),b=t("tr",null,[t("td",null,"showLabel"),t("td",null,"是否显示每个表单组件的值，不显示表单组件"),t("td",null,"boolean"),t("td",null,"一")],-1),g=t("tr",null,[t("td",null,"required"),t("td",null,"是否验证每个表单组件是否必填"),t("td",null,"boolean"),t("td",null,"一")],-1),I=t("tr",null,[t("td",null,"......"),t("td",null,[t("a",{href:"https://element-plus.org/zh-CN/component/form.html#form-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),t("td",null,"一"),t("td",null,"一")],-1),P=t("h2",{id:"formitem-属性",tabindex:"-1"},[s("formItem 属性 "),t("a",{class:"header-anchor",href:"#formitem-属性","aria-label":'Permalink to "formItem 属性"'},"​")],-1),x=t("thead",null,[t("tr",null,[t("th",null,"属性名"),t("th",null,"说明"),t("th",null,"类型"),t("th",null,"默认值")])],-1),w=t("td",null,"type",-1),v=t("td",null,"表单组件类型",-1),q=t("td",null,"一",-1),T=t("td",null,"show",-1),N=t("td",null,"是否显示该表单组件",-1),S=t("td",null,"一",-1),j=t("td",null,"vif",-1),L=t("td",null,"是否渲染该表单组件",-1),V=t("td",null,"一",-1),M=t("tr",null,[t("td",null,"label"),t("td",null,"表单组件的名称"),t("td",null,"String"),t("td",null,"一")],-1),R=t("tr",null,[t("td",null,"sort"),t("td",null,"表单组件的列的排序，第一个组件为0，第二个为10，以此类推，数值越小组件越靠前"),t("td",null,"Number"),t("td",null,"一")],-1),O=t("tr",null,[t("td",null,"options"),t("td",null,"组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法"),t("td",null,"Object"),t("td",null,"一")],-1),W=t("tr",null,[t("td",null,"showLabel"),t("td",null,"是否直接显示表单组件的值"),t("td",null,"boolean"),t("td",null,"一")],-1),z=t("td",null,"colLayout",-1),J=t("td",null,"当前表单组件列表布局",-1),G=t("td",null,"{ }",-1),H=t("tr",null,[t("td",null,"required"),t("td",null,"是否必填"),t("td",null,"Boolean"),t("td",null,"一")],-1),K=t("tr",null,[t("td",null,"......"),t("td",null,[t("a",{href:"https://element-plus.org/zh-CN/component/form.html#formitem-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),t("td",null,"一"),t("td",null,"一")],-1),Q=t("h2",{id:"事件",tabindex:"-1"},[s("事件 "),t("a",{class:"header-anchor",href:"#事件","aria-label":'Permalink to "事件"'},"​")],-1),U=t("thead",null,[t("tr",null,[t("th",null,"事件名"),t("th",null,"说明"),t("th",null,"类型")])],-1),X=t("td",null,"search-fn",-1),Y=t("td",null,"点击查询时触发",-1),Z=t("td",null,"reset-fn",-1),$=t("td",null,"点击重置时触发",-1),t2=t("td",null,"un-fold",-1),n2=t("td",null,"点击更多时触发",-1),a2=l('<h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>formItem_[key]</td><td>formItem_是固定的，key里面的值取决于form中的formItem的key，自定义组件</td></tr><tr><td>formItem_after_[key]</td><td>formItem_after_是固定的，key里面的值取决于form中的formItem的key，自定义组件后的内容</td></tr><tr><td>formItem_before_[key]</td><td>formItem_after_是固定的，key里面的值取决于form中的formItem的key，自定义组件前的内容</td></tr><tr><td>form_search</td><td>自定义查询栏</td></tr></tbody></table>',2),E2=JSON.parse('{"title":"输入框","description":"","frontmatter":{},"headers":[],"relativePath":"examples/form/input.md","filePath":"examples/form/input.md"}'),s2={name:"examples/form/input.md"},r2=Object.assign(s2,{setup(e2){const p=["input","select","textarea","input-number","input-autocomplete","switch","datetime","date","week","month","year","datetimerange","daterange","monthrange","custom","radio","tree-select","radio-button","rate","checkbox","cascader"].join(" | "),e="{ xl: 'number', lg: 'number', md: 'number', sm: 'number', xs: 'number' }";return(o2,l2)=>{const E=o("DinertDemo"),a=o("dinert-api-typing");return u(),r("div",null,[i,d,n(E,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..%2F..%2F..%2F..%2Fpackages'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EModelProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EFormItemProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%3Cspan%20class%3D%22token%20punctuation%22%3E%3B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20form%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EModelProps%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20FormItemProps%3Cspan%20class%3D%22token%20operator%22%3E%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emodel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EcolLayout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E24%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ElabelWidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'auto'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EformItem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E5%90%8D%E7%A7%B0'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'input'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename2%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E7%BB%9F%E8%AE%A1%E5%AD%97%E6%95%B0'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'textarea'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EshowWordLimit%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20boolean%22%3Etrue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA%E7%BB%9F%E8%AE%A1%E5%AD%97%E6%95%B0%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eminlength%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E0%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emaxlength%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E30%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EonChange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20%E7%9B%91%E5%90%AC%E5%80%BC%E7%9A%84%E6%94%B9%E5%8F%98%3C%2Fspan%3E%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ehome%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Edinert-form%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aform%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eform%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edialog%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asearch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"Form/input/index","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7Bref%7D%20from%20'vue'%0Aimport%20%7BRewriteFormProps%7D%20from%20'..%2F..%2F..%2F..%2Fpackages'%0A%0A%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%0Ainterface%20ModelProps%20%7B%0A%7D%0A%0A%2F%2F%20formItem%E7%9A%84%E7%B1%BB%E5%9E%8B%EF%BC%8C%E5%A6%82%E6%9E%9CformItem%E7%9A%84%E7%B1%BB%E5%9E%8B%E4%B8%8D%E4%BC%A0%E5%B0%B1%E4%BD%BF%E7%94%A8ModelProps%E7%9A%84%E7%B1%BB%E5%9E%8B%0Ainterface%20FormItemProps%20%7B%0A%20%20%20%20name%3A%20string%3B%0A%20%20%20%20name2%3A%20string%3B%0A%7D%0A%0Aconst%20form%20%3D%20ref%3CRewriteFormProps%3CModelProps%2C%20FormItemProps%3E%3E(%7B%0A%20%20%20%20model%3A%20%7B%7D%2C%0A%20%20%20%20colLayout%3A%20%7Bspan%3A%2024%7D%2C%0A%20%20%20%20labelWidth%3A%20'auto'%2C%0A%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E5%90%8D%E7%A7%B0'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input'%2C%0A%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20name2%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E7%BB%9F%E8%AE%A1%E5%AD%97%E6%95%B0'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'textarea'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20showWordLimit%3A%20true%2C%20%2F%2F%20%E6%98%AF%E5%90%A6%E6%98%BE%E7%A4%BA%E7%BB%9F%E8%AE%A1%E5%AD%97%E6%95%B0%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20minlength%3A%200%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20maxlength%3A%2030%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChange()%20%7B%20%2F%2F%20%E7%9B%91%E5%90%AC%E5%80%BC%E7%9A%84%E6%94%B9%E5%8F%98%0A%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%7D%0A%7D)%0A%0A%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22home%22%3E%0A%20%20%20%20%20%20%20%20%3Cdinert-form%20%3Aform%3D%22form%22%20class%3D%22dialog%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Asearch%3D%22false%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:C(()=>[F]),_:1}),D,t("table",null,[k,t("tbody",null,[t("tr",null,[m,A,t("td",null,[n(a,{type:"object",details:"{[key: string]: FormItemProps}"})]),h]),t("tr",null,[_,B,t("td",null,[n(a,{type:"object",details:e})]),f]),y,b,g,I])]),P,t("table",null,[x,t("tbody",null,[t("tr",null,[w,v,t("td",null,[n(a,{type:"enmu",details:c(p)},null,8,["details"])]),q]),t("tr",null,[T,N,t("td",null,[n(a,{type:"enmu",details:"boolean' | '(model) => boolean"})]),S]),t("tr",null,[j,L,t("td",null,[n(a,{type:"enmu",details:"boolean' | '(model) => boolean"})]),V]),M,R,O,W,t("tr",null,[z,J,t("td",null,[n(a,{type:"object",details:e})]),G]),H,K])]),Q,t("table",null,[U,t("tbody",null,[t("tr",null,[X,Y,t("td",null,[n(a,{type:"Function",details:"(value: number) => void"})])]),t("tr",null,[Z,$,t("td",null,[n(a,{type:"Function",details:"(value: number) => void"})])]),t("tr",null,[t2,n2,t("td",null,[n(a,{type:"Function",details:"() => void"})])])])]),a2])}}});export{E2 as __pageData,r2 as default};
