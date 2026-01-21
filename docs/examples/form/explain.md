
<style>

    .el-form.dinert-form{
        background-color: transparent;
    }
</style>

<script setup>
    let arr  = ['input' ,
                'select' ,
                'textarea' ,
                'input-number' ,
                'input-autocomplete'
                , 'switch'
                , 'datetime'
                , 'date'
                , 'week'
                , 'month'
                , 'year'
                , 'datetimerange'
                , 'daterange'
                , 'monthrange'
                , 'custom' , 'radio' , 'tree-select' , 'radio-button'
                , 'rate'
                , 'checkbox'
                , 'cascader'].join("' | '")
                arr = "'" + arr + "'"
    const colLayout = "RewriteColProps | ((model: D, item: FormItemProps<D>) => (RewriteColProps))"
    const commonEnum = "boolean | ((model: D, item: FormItemProps<D>) => (boolean))"
    const commonEnumString = "string | ((model: D, item: FormItemProps<D>) => (string))"
    const commonEnumNumber = "number | ((model: D, item: FormItemProps<D>) => (number))"
</script>

## 属性

| 属性名 | 说明                                             | 类型    | 默认值 |
| ------ | ------------------------------------------------ | ------- | ------ |
| search | 是否显示右侧的查询和重置按钮                     | Boolean | true   |
| form   | [详细请参阅下面form属性](#form-属性)             | Object  | 一     |

## form 属性

| 属性名       | 说明                                                                                   | 类型                                                                                           | 默认值 |
| ------------ | -------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- | ------ |
| formItem     | 表单组件列表对象，[详细请参阅下面formItem属性](#formitem-属性)                         | <dinert-api-typing type="object" details="{[key: string]: FormItemProps}"></dinert-api-typing> | \{\}   |
| colLayout    | 每个表单组件列表布局                                                                   | <dinert-api-typing type="enum" :details="colLayout"/>                                        | 一     |
| row          | 表单组件的row                                                                          | object                                                                                         | 一     |
| showLabel    | 是否渲染所有表单组件的label，优先formItem下的showLabel                                    | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| showValue    | 是否渲染所有表单组件的value，优先formItem下的showValue                                    | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| showContent    | 是否渲染所有表单组件的content，优先formItem下的showContent                              | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| vif             | 是否渲染所有表单组件，优先formItem下的vif                                              | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| required     | 是否验证每个表单组件是否必填，优先formItem下的required  | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| disabled     | 是否禁用所有表单组件，优先formItem下的disabled  | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| valueFormatter  | 格式化所有表单组件的值，优先formItem下的valueFormatter, showValue为true时生效  | <dinert-api-typing type="enmu" :details="commonEnumString"/> | 一     |
| limitLine     | 打点展示文字，优先formItem下的limitLine, showValue为true时生效  | <dinert-api-typing type="enmu" :details="commonEnumNumber"/> | 一     |
| packUp       | 第一次加载是否默认展开超出的组件                                                       | boolean                                                                                        | true   |
| enterSearch  | 是否开启回车搜索，仅支持input的组件                                                    | boolean                                                                                        | true   |
| searchButton | 自定义搜索按钮的属性继承自button，message为内容                                        | [ButtonProps](https://element-plus.org/en-US/component/button.html#button-attributes)          | 一     |
| resetButton  | 自定义重置按钮的属性继承自button，message为内容                                        | [ButtonProps](https://element-plus.org/en-US/component/button.html#button-attributÏes)         | 一     |
| ......       | [更多配置，请参考](https://element-plus.org/zh-CN/component/form.html#form-attributes) | 一                                                                                             | 一     |

## formItem 属性

| 属性名    | 说明                                                                                       | 类型                                                                                          | 默认值 |
| --------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------- | ------ |
| type      | 表单组件类型                                                                               | <dinert-api-typing type="enmu" :details="arr"></dinert-api-typing>                            | 一     |
| show      | 是否显示该表单组件                                                                      | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| vif       | 是否渲染该表单组件                                                                         | <dinert-api-typing type="enmu" :details="commonEnum"/>  | 一     |
| label     | 表单组件的名称                                                                             | <dinert-api-typing type="enmu" :details="commonEnumString"/>  | 一     |
| showLabel    | 是否渲染所有表单组件的label，优先formItem下的showLabel                                    | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| showValue    | 是否渲染所有表单组件的value，优先formItem下的showValue                                    | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| showContent    | 是否渲染所有表单组件的content，优先formItem下的showContent                              | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| required     | 是否验证每个表单组件是否必填，优先formItem下的required  | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| disabled     | 是否禁用所有表单组件，优先formItem下的disabled  | <dinert-api-typing type="enmu" :details="commonEnum"/> | 一     |
| valueFormatter  | 格式化所有表单组件的值，优先formItem下的valueFormatter, showValue为true时生效  | <dinert-api-typing type="enmu" :details="commonEnumString"/> | 一     |
| limitLine     | 打点展示文字，优先formItem下的limitLine, showValue为true时生效  | <dinert-api-typing type="enmu" :details="commonEnumNumber"/> | 一     |
| colLayout    | 每个表单组件列表布局                                                                   | <dinert-api-typing type="enum" :details="colLayout"/>                                        | 一     |
| sort      | 表单组件的列的排序，数值越小组件越靠前                                                     | Number                                                                                        | 一     |
| options   | 组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法              | Object                                                                                        | 一     |
| required  | 是否必填                                                                                   | Boolean                                                                                       | 一     |
| ......    | [更多配置，请参考](https://element-plus.org/zh-CN/component/form.html#formitem-attributes) | 一                                                                                            | 一     |

## 事件

| 事件名    | 说明           | 类型                                                                   |
| --------- | -------------- | ---------------------------------------------------------------------- |
| search-fn | 点击查询时触发 | <dinert-api-typing type="Function" details="(value: number) => void"/> |
| reset-fn  | 点击重置时触发 | <dinert-api-typing type="Function" details="(value: number) => void"/> |
| un-fold   | 点击更多时触发 | <dinert-api-typing type="Function" details="() => void"/>              |

## 插槽

| 插槽名                 | 说明                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------ |
| formItem_[key]         | key里面的值取决于form中的formItem的key，自定义组件                |
| col_[key]         | key里面的值取决于form中的formItem的key，自定义组件的行               |
| formItem_label_[key]   | key里面的值取决于form中的formItem的key，自定义组件的名称          |
| formItem_label_before_[key] | key里面的值取决于form中的formItem的key，自定义组件的名称的前缀          |
| formItem_label_after_[key] | key里面的值取决于form中的formItem的key，自定义组件的名称的后缀          |
| formItem_after_[key]   | key里面的值取决于form中的formItem的key，自定义组件后的内容  |
| formItem_before_[key]  | key里面的值取决于form中的formItem的key，自定义组件前的内容 |
| form_search            | 自定义查询栏                                                                         |
| form_search_operations | 自定义查询栏后面的信息                                                               |
