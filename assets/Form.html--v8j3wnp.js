import{_ as p,r as o,o as l,c as r,a as n,b as a,d as t,e}from"./app-UGLTSVyQ.js";const c={},i=e(`<h1 id="form-表单配置" tabindex="-1"><a class="header-anchor" href="#form-表单配置" aria-hidden="true">#</a> Form 表单配置</h1><p>使用ElForm组件和其它表单组件封装</p><h2 id="基础用法" tabindex="-1"><a class="header-anchor" href="#基础用法" aria-hidden="true">#</a> 基础用法</h2><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> <span class="token punctuation">{</span>ref<span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">const</span> formRef <span class="token operator">=</span> <span class="token function">ref</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
    <span class="token literal-property property">form</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token literal-property property">model</span><span class="token operator">:</span> <span class="token punctuation">{</span>

        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token literal-property property">formItem</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token literal-property property">showLabel</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;土木工程&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;custom&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">showLabel</span><span class="token operator">:</span> <span class="token boolean">true</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">input</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;输入框&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>

                <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">textarea</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;文本域&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;textarea&#39;</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">inputNumber</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;数字输入框&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input-number&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&#39;3213&#39;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">autoInput</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;自动补全输入框&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;input-autocomplete&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">on</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                        <span class="token function-variable function">onChange</span><span class="token operator">:</span> <span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">e</span><span class="token operator">:</span> any</span><span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
                            console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>e<span class="token punctuation">,</span> <span class="token string">&#39;3213&#39;</span><span class="token punctuation">)</span>
                        <span class="token punctuation">}</span><span class="token punctuation">,</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span><span class="token punctuation">,</span>
            <span class="token literal-property property">select</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                <span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;选择框&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">type</span><span class="token operator">:</span> <span class="token string">&#39;select&#39;</span><span class="token punctuation">,</span>
                <span class="token literal-property property">sort</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
                <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">{</span>
                    <span class="token literal-property property">value</span><span class="token operator">:</span> <span class="token string">&#39;code&#39;</span><span class="token punctuation">,</span>

                    <span class="token literal-property property">options</span><span class="token operator">:</span> <span class="token punctuation">[</span>
                        <span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;lael1&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
                        <span class="token punctuation">{</span><span class="token literal-property property">label</span><span class="token operator">:</span> <span class="token string">&#39;label2&#39;</span><span class="token punctuation">,</span> <span class="token literal-property property">code</span><span class="token operator">:</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">}</span><span class="token punctuation">,</span>

                    <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token punctuation">}</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token literal-property property">search</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token keyword">const</span> <span class="token punctuation">{</span>form<span class="token punctuation">,</span> search<span class="token punctuation">}</span> <span class="token operator">=</span> formRef<span class="token punctuation">.</span>value

</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dinert-form</span>
        <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>near<span class="token punctuation">&quot;</span></span>
        <span class="token attr-name">v-bind</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>{
            form,
            search
        }<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="form-api" tabindex="-1"><a class="header-anchor" href="#form-api" aria-hidden="true">#</a> Form API</h2><h3 id="form-attributes" tabindex="-1"><a class="header-anchor" href="#form-attributes" aria-hidden="true">#</a> Form Attributes</h3>`,6),u=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),d=n("tr",null,[n("td",null,"search"),n("td",null,"是否显示查询和重置按钮"),n("td",null,"Boolean"),n("td",null,"true")],-1),k=n("td",null,"form",-1),m={href:"https://element-plus.org/zh-CN/component/form.html#form-attributes",target:"_blank",rel:"noopener noreferrer"},v=n("td",null,"Object",-1),h=n("td",null,"一",-1),b=e('<h3 id="form-slots" tabindex="-1"><a class="header-anchor" href="#form-slots" aria-hidden="true">#</a> Form Slots</h3><table><thead><tr><th>插槽名</th><th>说明</th></tr></thead><tbody><tr><td>formItem_[key]</td><td>formItem_是固定的，key里面的值取决于form中的formItem的key</td></tr><tr><td>form_search</td><td>自定义查询栏</td></tr></tbody></table><h3 id="form-form-attributes" tabindex="-1"><a class="header-anchor" href="#form-form-attributes" aria-hidden="true">#</a> Form Form Attributes</h3>',3),y=n("thead",null,[n("tr",null,[n("th",null,"属性名"),n("th",null,"说明"),n("th",null,"类型"),n("th",null,"默认值")])],-1),f=n("td",null,"form",-1),_={href:"https://element-plus.org/zh-CN/component/form.html#form-attributes",target:"_blank",rel:"noopener noreferrer"},g=n("td",null,"Object",-1),x=n("td",null,"一",-1),N=n("tr",null,[n("td",null,"colLayout"),n("td",null,"表单的布局方式"),n("td",null,"Object"),n("td",null,"{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24}")],-1),C=n("tr",null,[n("td",null,"showLabel"),n("td",null,"是否直接显示值，不显示表单组件"),n("td",null,"Boolean"),n("td",null,"false")],-1),F=n("tr",null,[n("td",null,"formItem"),n("td",null,"formItem为一个对象，对象下有多个key，key指向一个对象，对象的配置参考下列表格"),n("td",null,"Object"),n("td",null,"一")],-1),B=e('<h3 id="formitem-attributes" tabindex="-1"><a class="header-anchor" href="#formitem-attributes" aria-hidden="true">#</a> FormItem Attributes</h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认值</th></tr></thead><tbody><tr><td>type</td><td>支持的表单配置项的组件</td><td><a href="#%E6%94%AF%E6%8C%81%E7%9A%84%E8%A1%A8%E5%8D%95%E7%BB%84%E4%BB%B6">TypeName</a></td><td>一</td></tr><tr><td>show</td><td>是否显示组件</td><td>Boolean</td><td>Function(model) =&gt; void</td></tr><tr><td>vif</td><td>是否渲染组件</td><td>Boolean</td><td>Function(model) =&gt; void</td></tr><tr><td>label</td><td>组件的名称</td><td>String</td><td>一</td></tr><tr><td>sort</td><td>组件的排序顺序，比如第一个组件是1、以此类推，最后一个组件设置比1小就可以排列第一位</td><td>Number</td><td>一</td></tr><tr><td>label</td><td>组件的名称</td><td>String</td><td>一</td></tr><tr><td>options</td><td>组件的参数，比如组件的名称是input，那options里面的内容就是Input的属性</td><td>Object</td><td>一</td></tr><tr><td>showLabel</td><td>组件的名称是否显示</td><td>Boolean</td><td>false</td></tr><tr><td>colLayout</td><td>组件的布局方式</td><td>Object</td><td>{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24}</td></tr><tr><td>on</td><td>组件绑定的方法，比如组件的名称是input，那on里面的内容就是Input的方法，要注意，绑定方法的时候请用on加方法名称，方法名称采用大驼峰的形式书写</td><td>Object</td><td>一</td></tr><tr><td>required</td><td>是否必填</td><td>Object</td><td>一</td></tr></tbody></table><h3 id="支持可配置的表单组件" tabindex="-1"><a class="header-anchor" href="#支持可配置的表单组件" aria-hidden="true">#</a> 支持可配置的表单组件</h3>',3),I={href:"https://element-plus.org/zh-CN/component/input.html#attributes",target:"_blank",rel:"noopener noreferrer"},w={href:"https://element-plus.org/zh-CN/component/input-number.html#attributes",target:"_blank",rel:"noopener noreferrer"},z={href:"https://element-plus.org/zh-CN/component/switch.html#attributes",target:"_blank",rel:"noopener noreferrer"},E={href:"https://element-plus.org/zh-CN/component/select.html#select-attributes",target:"_blank",rel:"noopener noreferrer"},q={href:"https://element-plus.org/zh-CN/component/date-picker.html#attributes",target:"_blank",rel:"noopener noreferrer"},j={href:"https://element-plus.org/zh-CN/component/radio.html#radio-attributes",target:"_blank",rel:"noopener noreferrer"},A={href:"https://element-plus.org/zh-CN/component/tree-select.html#attributes",target:"_blank",rel:"noopener noreferrer"},L={href:"https://element-plus.org/zh-CN/component/rate.html#attributes",target:"_blank",rel:"noopener noreferrer"},O={href:"https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes",target:"_blank",rel:"noopener noreferrer"},S={href:"https://element-plus.org/zh-CN/component/cascader.html#cascader-attributes",target:"_blank",rel:"noopener noreferrer"};function V(P,R){const s=o("ExternalLinkIcon");return l(),r("div",null,[i,n("table",null,[u,n("tbody",null,[d,n("tr",null,[k,n("td",null,[n("a",m,[a("Form组件中的所有属性"),t(s)])]),v,h])])]),b,n("table",null,[y,n("tbody",null,[n("tr",null,[f,n("td",null,[n("a",_,[a("继承自ElementPlus的form，扩展参数查看下表"),t(s)])]),g,x]),N,C,F])]),B,n("p",null,[n("a",I,[a("input,textarea,input-autocomplete"),t(s)])]),n("p",null,[n("a",w,[a("input-number"),t(s)])]),n("p",null,[n("a",z,[a("switch"),t(s)])]),n("p",null,[n("a",E,[a("select"),t(s)])]),n("p",null,[n("a",q,[a("datetime, date, week, month, year, datetimerange, daterange, monthrange, yearrange"),t(s)])]),n("p",null,[n("a",j,[a("radio, tree-select"),t(s)])]),n("p",null,[n("a",A,[a("tree-select"),t(s)])]),n("p",null,[n("a",L,[a("rate"),t(s)])]),n("p",null,[n("a",O,[a("checkbox"),t(s)])]),n("p",null,[n("a",S,[a("cascader"),t(s)])])])}const D=p(c,[["render",V],["__file","Form.html.vue"]]);export{D as default};