import{c as r,J as t,w as C,m as n,p as E,a,b5 as l,G as p,o as u}from"./chunks/framework.frReJlQd.js";const i=n("h1",{id:"自动补全输入框",tabindex:"-1"},[a("自动补全输入框 "),n("a",{class:"header-anchor",href:"#自动补全输入框","aria-label":'Permalink to "自动补全输入框"'},"​")],-1),F=n("h2",{id:"基础用法",tabindex:"-1"},[a("基础用法 "),n("a",{class:"header-anchor",href:"#基础用法","aria-label":'Permalink to "基础用法"'},"​")],-1),d=n("p",null,"Form/autocomplete/index",-1),D=l('<h2 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h2><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>search</td><td>是否显示右侧的查询和重置按钮</td><td>Boolean</td><td>true</td></tr><tr><td>class</td><td>值为near时在查询栏中使用，值为dialog在弹窗中使用</td><td>String</td><td>一</td></tr><tr><td>form</td><td><a href="#form-属性">详细请参阅下面form属性</a></td><td>Object</td><td>一</td></tr></tbody></table><h2 id="form-属性" tabindex="-1">form 属性 <a class="header-anchor" href="#form-属性" aria-label="Permalink to &quot;form 属性&quot;">​</a></h2>',3),k=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),m=n("td",null,"formItem",-1),A=n("td",null,[a("表单组件列表对象，"),n("a",{href:"#formitem-属性"},"详细请参阅下面formItem属性")],-1),h=n("td",null,"{}",-1),_=n("td",null,"colLayout",-1),b=n("td",null,"每个表单组件列表布局",-1),f=n("td",null,"一",-1),g=n("tr",null,[n("td",null,"row"),n("td",null,"表单组件的row"),n("td",null,"object"),n("td",null,"一")],-1),y=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否显示所有表单组件的值，优先formItem下的showLabel"),n("td",null,"boolean"),n("td",null,"一")],-1),B=n("td",null,"vif",-1),v=n("td",null,"是否渲染所有表单组件，优先formItem下的vif",-1),x=n("td",null,"一",-1),P=n("tr",null,[n("td",null,"required"),n("td",null,"是否验证每个表单组件是否必填"),n("td",null,"boolean"),n("td",null,"一")],-1),I=n("tr",null,[n("td",null,"packUp"),n("td",null,"第一次加载是否默认展开超出的组件"),n("td",null,"boolean"),n("td",null,"true")],-1),w=n("tr",null,[n("td",null,"searchButton"),n("td",null,"自定义搜索按钮的属性继承自button，message为内容"),n("td",null,[n("a",{href:"https://element-plus.org/en-US/component/button.html#button-attributes",target:"_blank",rel:"noreferrer"},"ButtonProps")]),n("td",null,"一")],-1),S=n("tr",null,[n("td",null,"resetButton"),n("td",null,"自定义重置按钮的属性继承自button，message为内容"),n("td",null,[n("a",{href:"https://element-plus.org/en-US/component/button.html#button-attributes",target:"_blank",rel:"noreferrer"},"ButtonProps")]),n("td",null,"一")],-1),j=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#form-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),q=n("h2",{id:"formitem-属性",tabindex:"-1"},[a("formItem 属性 "),n("a",{class:"header-anchor",href:"#formitem-属性","aria-label":'Permalink to "formItem 属性"'},"​")],-1),T=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),N=n("td",null,"type",-1),L=n("td",null,"表单组件类型",-1),V=n("td",null,"一",-1),R=n("td",null,"show",-1),M=n("td",null,"是否显示该表单组件",-1),O=n("td",null,"一",-1),U=n("td",null,"vif",-1),z=n("td",null,"是否渲染该表单组件",-1),J=n("td",null,"一",-1),W=n("td",null,"label",-1),G=n("td",null,"表单组件的名称",-1),H=n("td",null,"一",-1),K=n("tr",null,[n("td",null,"sort"),n("td",null,"表单组件的列的排序，数值越小组件越靠前"),n("td",null,"Number"),n("td",null,"一")],-1),Q=n("tr",null,[n("td",null,"options"),n("td",null,"组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法"),n("td",null,"Object"),n("td",null,"一")],-1),X=n("td",null,"showLabel",-1),Y=n("td",null,"是否直接显示当前表单组件的值",-1),Z=n("td",null,"一",-1),$=n("td",null,"colLayout",-1),n2=n("td",null,"当前表单组件列表布局",-1),t2=n("td",null,"{ }",-1),s2=n("tr",null,[n("td",null,"required"),n("td",null,"是否必填"),n("td",null,"Boolean"),n("td",null,"一")],-1),a2=n("tr",null,[n("td",null,"......"),n("td",null,[n("a",{href:"https://element-plus.org/zh-CN/component/form.html#formitem-attributes",target:"_blank",rel:"noreferrer"},"更多配置，请参考")]),n("td",null,"一"),n("td",null,"一")],-1),e2=n("h2",{id:"事件",tabindex:"-1"},[a("事件 "),n("a",{class:"header-anchor",href:"#事件","aria-label":'Permalink to "事件"'},"​")],-1),o2=n("thead",null,[n("tr",null,[n("th",null,"事件名"),n("th",null,"说明"),n("th",null,"类型")])],-1),p2=n("td",null,"search-fn",-1),l2=n("td",null,"点击查询时触发",-1),c2=n("td",null,"reset-fn",-1),r2=n("td",null,"点击重置时触发",-1),C2=n("td",null,"un-fold",-1),E2=n("td",null,"点击更多时触发",-1),u2=l('<h2 id="插槽" tabindex="-1">插槽 <a class="header-anchor" href="#插槽" aria-label="Permalink to &quot;插槽&quot;">​</a></h2><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>formItem_[key]</td><td>formItem_是固定的，key里面的值取决于form中的formItem的key，自定义组件</td></tr><tr><td>formItem_after_[key]</td><td>formItem_after_是固定的，key里面的值取决于form中的formItem的key，自定义组件后的内容</td></tr><tr><td>formItem_before_[key]</td><td>formItem_before_是固定的，key里面的值取决于form中的formItem的key，自定义组件前的内容</td></tr><tr><td>form_search</td><td>自定义查询栏</td></tr><tr><td>form_search_operations</td><td>自定义查询栏后面的信息</td></tr></tbody></table>',2),m2=JSON.parse('{"title":"自动补全输入框","description":"","frontmatter":{},"headers":[],"relativePath":"examples/form/autocomplete.md","filePath":"examples/form/autocomplete.md"}'),i2={name:"examples/form/autocomplete.md"},A2=Object.assign(i2,{setup(F2){let e=["input","select","textarea","input-number","input-autocomplete","switch","datetime","date","week","month","year","datetimerange","daterange","monthrange","custom","radio","tree-select","radio-button","rate","checkbox","cascader"].join("' | '");e="'"+e+"'";const o="{ xl: 'number', lg: 'number', md: 'number', sm: 'number', xs: 'number' }";return(d2,D2)=>{const c=p("DinertDemo"),s=p("dinert-api-typing");return u(),r("div",null,[i,F,t(c,{source:"%3Cpre%20v-pre%3E%3Ccode%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Escript%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Esetup%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Elang%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ets%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20script%22%3E%3Cspan%20class%3D%22token%20language-javascript%22%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3Eref%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Eimport%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20keyword%22%3Efrom%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'..%2F..%2F..%2F..%2Fpackages'%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20comment%22%3E%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84model%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20keyword%22%3Einterface%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20class-name%22%3EModelProps%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20string%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20keyword%22%3Econst%3C%2Fspan%3E%20form%20%3Cspan%20class%3D%22token%20operator%22%3E%3D%3C%2Fspan%3E%20ref%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3ERewriteFormProps%3Cspan%20class%3D%22token%20operator%22%3E%26lt%3B%3C%2Fspan%3EModelProps%3Cspan%20class%3D%22token%20operator%22%3E%3E%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Emodel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EcolLayout%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Espan%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20number%22%3E24%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3ElabelWidth%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'auto'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3EformItem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Ename%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elabel%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Etype%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'input-autocomplete'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Eoptions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EfetchSuggestions%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Estr%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20cb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3Ecb%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%5B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elink%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'element'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elink%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fgithub.com%2FElemeFE%2Felement'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'cooking'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elink%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fgithub.com%2FElemeFE%2Fcooking'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'mint-ui'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elink%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fgithub.com%2FElemeFE%2Fmint-ui'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vuex'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elink%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuex'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'vue-router'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elink%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-router'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%3Cspan%20class%3D%22token%20literal-property%20property%22%3Evalue%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'babel'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20literal-property%20property%22%3Elink%3C%2Fspan%3E%3Cspan%20class%3D%22token%20operator%22%3E%3A%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%5D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EonChange%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eitem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'onChange'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20function%22%3EonSelect%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3E%3Cspan%20class%3D%22token%20parameter%22%3Eitem%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7B%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console%3Cspan%20class%3D%22token%20punctuation%22%3E.%3C%2Fspan%3E%3Cspan%20class%3D%22token%20function%22%3Elog%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E(%3C%2Fspan%3Eitem%3Cspan%20class%3D%22token%20punctuation%22%3E%2C%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20string%22%3E'onSelect'%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%0A%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20punctuation%22%3E%7D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E)%3C%2Fspan%3E%0A%0A%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Escript%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Ediv%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Ehome%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%3C%2Fspan%3Edinert-form%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Aform%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Eform%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%20%3Cspan%20class%3D%22token%20attr-name%22%3Eclass%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Edialog%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20attr-name%22%3E%3Asearch%3C%2Fspan%3E%3Cspan%20class%3D%22token%20attr-value%22%3E%3Cspan%20class%3D%22token%20punctuation%20attr-equals%22%3E%3D%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3Efalse%3Cspan%20class%3D%22token%20punctuation%22%3E%22%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%20%20%20%20%3Cspan%20class%3D%22token%20punctuation%22%3E%2F%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%20%20%20%20%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Ediv%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20tag%22%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%26lt%3B%2F%3C%2Fspan%3Etemplate%3C%2Fspan%3E%3Cspan%20class%3D%22token%20punctuation%22%3E%3E%3C%2Fspan%3E%3C%2Fspan%3E%0A%3C%2Fcode%3E%3C%2Fpre%3E",path:"Form/autocomplete/index","raw-source":"%3Cscript%20setup%20lang%3D%22ts%22%3E%0Aimport%20%7Bref%7D%20from%20'vue'%0Aimport%20%7BRewriteFormProps%7D%20from%20'..%2F..%2F..%2F..%2Fpackages'%0A%0A%2F%2F%20form%E9%87%8C%E9%9D%A2%E7%9A%84model%E6%95%B0%E6%8D%AE%E7%B1%BB%E5%9E%8B%0Ainterface%20ModelProps%20%7B%0A%20%20%20%20name%3A%20string%0A%7D%0A%0Aconst%20form%20%3D%20ref%3CRewriteFormProps%3CModelProps%3E%3E(%7B%0A%20%20%20%20model%3A%20%7B%7D%2C%0A%20%20%20%20colLayout%3A%20%7Bspan%3A%2024%7D%2C%0A%20%20%20%20labelWidth%3A%20'auto'%2C%0A%20%20%20%20formItem%3A%20%7B%0A%20%20%20%20%20%20%20%20name%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20label%3A%20'%E8%87%AA%E5%8A%A8%E8%A1%A5%E5%85%A8'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20type%3A%20'input-autocomplete'%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20options%3A%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20fetchSuggestions(str%2C%20cb)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20cb(%5B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%3A%20'vue'%2C%20link%3A%20'https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%3A%20'element'%2C%20link%3A%20'https%3A%2F%2Fgithub.com%2FElemeFE%2Felement'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%3A%20'cooking'%2C%20link%3A%20'https%3A%2F%2Fgithub.com%2FElemeFE%2Fcooking'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%3A%20'mint-ui'%2C%20link%3A%20'https%3A%2F%2Fgithub.com%2FElemeFE%2Fmint-ui'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%3A%20'vuex'%2C%20link%3A%20'https%3A%2F%2Fgithub.com%2Fvuejs%2Fvuex'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%3A%20'vue-router'%2C%20link%3A%20'https%3A%2F%2Fgithub.com%2Fvuejs%2Fvue-router'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7Bvalue%3A%20'babel'%2C%20link%3A%20'https%3A%2F%2Fgithub.com%2Fbabel%2Fbabel'%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%5D)%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onChange(item)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(item%2C%20'onChange')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%2C%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20onSelect(item)%20%7B%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20console.log(item%2C%20'onSelect')%0A%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%20%20%20%20%7D%0A%20%20%20%20%20%20%20%20%7D%0A%0A%20%20%20%20%7D%0A%7D)%0A%0A%3C%2Fscript%3E%0A%0A%3Ctemplate%3E%0A%20%20%20%20%3Cdiv%20class%3D%22home%22%3E%0A%20%20%20%20%20%20%20%20%3Cdinert-form%20%3Aform%3D%22form%22%20class%3D%22dialog%22%0A%20%20%20%20%20%20%20%20%20%20%20%20%3Asearch%3D%22false%22%0A%20%20%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2Fdiv%3E%0A%3C%2Ftemplate%3E%0A",description:""},{default:C(()=>[d]),_:1}),D,n("table",null,[k,n("tbody",null,[n("tr",null,[m,A,n("td",null,[t(s,{type:"object",details:"{[key: string]: FormItemProps}"})]),h]),n("tr",null,[_,b,n("td",null,[t(s,{type:"object",details:o})]),f]),g,y,n("tr",null,[B,v,n("td",null,[t(s,{type:"enmu",details:"'boolean' | (model) => boolean"})]),x]),P,I,w,S,j])]),q,n("table",null,[T,n("tbody",null,[n("tr",null,[N,L,n("td",null,[t(s,{type:"enmu",details:E(e)},null,8,["details"])]),V]),n("tr",null,[R,M,n("td",null,[t(s,{type:"enmu",details:"'boolean' | (model) => boolean"})]),O]),n("tr",null,[U,z,n("td",null,[t(s,{type:"enmu",details:"'boolean' | (model) => boolean"})]),J]),n("tr",null,[W,G,n("td",null,[t(s,{type:"enmu",details:"'string' | (model) => boolean"})]),H]),K,Q,n("tr",null,[X,Y,n("td",null,[t(s,{type:"enmu",details:"'boolean' | (model) => boolean"})]),Z]),n("tr",null,[$,n2,n("td",null,[t(s,{type:"object",details:o})]),t2]),s2,a2])]),e2,n("table",null,[o2,n("tbody",null,[n("tr",null,[p2,l2,n("td",null,[t(s,{type:"Function",details:"(value: number) => void"})])]),n("tr",null,[c2,r2,n("td",null,[t(s,{type:"Function",details:"(value: number) => void"})])]),n("tr",null,[C2,E2,n("td",null,[t(s,{type:"Function",details:"() => void"})])])])]),u2])}}});export{m2 as __pageData,A2 as default};
