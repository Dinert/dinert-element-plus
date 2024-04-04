

<style>
    .el-select__placeholder{
        transform: unset;

    }
    .el-select__suffix{
        position: absolute;
        top: 20%;
        right: 5%;
    }
</style>

<script setup>
    const arr  = ['input' ,
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
                , 'cascader'].join(' | ')
    const colLayout = "{ xl: 'number', lg: 'number', md: 'number', sm: 'number', xs: 'number' }"
</script>


### 属性
| 属性名 | 说明                                 | 类型    | 默认值 |
| ------ | ------------------------------------ | ------- | ------ |
| search | 是否显示右侧的查询和重置按钮         | Boolean | true   |
| form   | [详细请参阅下面form属性](#form-属性) | Object  | 一     |

### form 属性
| 属性名    | 说明                                                                                   | 类型    | 默认值                                    |
| --------- | -------------------------------------------------------------------------------------- | ------- | ----------------------------------------- |
| formItem  | 表单组件列表对象，[详细请参阅下面formItem属性](#formitem-属性)                         | object  | \{\}                                      |
| colLayout | 每个表单组件列表布局                                                                   | <dinert-api-typing type="enmu" :details="colLayout"></dinert-api-typing>  | \{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24 \} |
| row       | 表单组件的row                                                                          | object  | \{\}                                      |
| showLabel | 是否显示每个表单组件的值，不显示表单组件                                               | boolean | 一                                        |
| ......    | [更多配置，请参考](https://element-plus.org/zh-CN/component/form.html#form-attributes) | 一      | 一                                        |

### formItem 属性
| 属性名    | 说明                                                                                       | 类型                                                               | 默认值                                    |
| --------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------ | ----------------------------------------- |
| type      | 表单组件类型                                                                               | <dinert-api-typing type="enmu" :details="arr"></dinert-api-typing> | 一                                        |
| show      | 是否显示该表单组件                                                                         |<dinert-api-typing type="enmu" details="boolean' \| '(model) => boolean"></dinert-api-typing>                               | 一                                        |
| vif       | 是否渲染该表单组件                                                                         | <dinert-api-typing type="enmu" details="boolean' \| '(model) => boolean"></dinert-api-typing>                                | 一                                        |
| label     | 表单组件的名称                                                                             | String                                                             | 一                                        |
| sort      | 表单组件的排序顺序                                                                         | Number                                                             | 一                                        |
| options   | 组件的参数，比如组件类型type是input，那options里面的内容就是Input的属性和方法              | Object                                                             | 一                                        |
| showLabel | 是否直接显示表单组件的值                                                                   | boolean                                                            | 一                                        |
| colLayout | 表单组件的布局方式                                                                         | Object                                                             | \{ xl: 3, lg: 4, md: 8, sm: 12, xs: 24 \} |
| required  | 是否必填                                                                                   | Boolean                                                            | 一                                        |
| ......    | [更多配置，请参考](https://element-plus.org/zh-CN/component/form.html#formitem-attributes) | 一                                                                 | 一                                        |



### 插槽

| 插槽名         | 说明                                                      |
| -------------- | --------------------------------------------------------- |
| formItem_[key] | formItem_是固定的，key里面的值取决于form中的formItem的key |
| form_search    | 自定义查询栏                                              |

