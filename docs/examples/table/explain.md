

<style>
    .dinert-table{
        width: 100%;
        padding: 0 0 16px 0;
    }
    .vp-doc li + li{
        margin-top: 0;
    }
</style>

<script setup>
    const paginationData = `{
        currentPage: 1,
        pageSize: 15,
        pageSizes:[15, 30, 50, 70, 100],
        defaultPageSize:15,
        layout: 'total, sizes, prev, pager, next, jumper',
        total: 100
    }`;

    let showOperations = `'boolean' | '(scope: ScopeProps, column: RewriteTableColumnCtx, item: OperationsProps) => void'`
    let headerList = `'boolean' | {[key: string]: HeaderListProps}`
</script>


### 属性
| 属性名    | 说明                                                                           | 类型                                                   | 默认值 |
| --------- | ------------------------------------------------------------------------------ | ------------------------------------------------------ | ------ |
| header    | 是否显示头部的操作栏                                                           | <dinert-api-typing type="enmu" :details="headerList"/> | 一     |
| footer    | 是否显示底部分页栏                                                             | Boolean                                                | true   |
| tableSlot | 表格的插槽为true时，表格中所有的插槽名称都为default，为false时可以正常使用插槽 | Boolean                                                | false  |
| table     | [详细请参阅下面table属性](#table-属性)                                         | Object                                                 | 一     |


### Table 属性

| 属性名       | 说明                                                                                           | 类型    | 默认值                                                       |
| ------------ | ---------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------ |
| tableColumns | 表格头的数据配置项                                                                             | Array   | 一                                                           |
| errData      | 表格中无数据时显示的数据                                                                       | String  | -                                                            |
| setting      | 是否显示表格右上的操作栏                                                                       | Boolean | true                                                         |
| class        | 表格的类名                                                                                     | String  | 一                                                           |
| pagination   | [详细请参阅element-plus的pagination](https://element-plus.org/en-US/component/pagination.html) | Object  | <dinert-api-typing type="object" :details="paginationData"/> |
| ......       | [更多配置，请参考](https://element-plus.org/en-US/component/table.html#table-attributes)       |


### TableColumns 属性
| 属性名        | 说明                                                                                            | 类型                                                                      | 默认值 |
| ------------- | ----------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------- | ------ |
| show          | 当前列是否显示                                                                                  | <dinert-api-typing type="enmu" details="boolean \| (column) => boolean"/> | 一     |
| checked       | 当前列是否是选中状态和右上角的操作栏有联动效果，选中时显示，反之不显示                          | Boolean                                                                   | true   |
| setting       | 操作栏是否显示在当前列，当值为true时表格右上的操作栏会消失                                      | Boolean                                                                   | 一     |
| maxOperations | 表格最大显示的操作按钮数，超出这个数显示更多，设置operations有效                                | Number                                                                    | 3      |
| operations    | [表格操作按钮列表，详情请参阅下表](#operations-属性)                                            | Object                                                                    | 一     |
| sort          | 列的排序，数值越小列越靠前                                                                      | Number                                                                    | 一     |
| children      | 表格头下的数据配置项，多级表头                                                                  | Array                                                                     | 一     |
| ......        | [更多配置，请参考](https://element-plus.org/en-US/component/table.html#table-column-attributes) | 一                                                                        | 一     |

### Operations 属性
| 属性名  | 说明                                                                              | 类型                                                       | 默认值 |
| ------- | --------------------------------------------------------------------------------- | ---------------------------------------------------------- | ------ |
| message | 名称                                                                              | String                                                     | 一     |
| click   | 点击事件                                                                          | Function                                                   | 一     |
| show    | 是否显示                                                                          | <dinert-api-typing type="enmu" :details="showOperations"/> |        | 一 |
| sort    | 操作的排序，数据越小越靠前                                                        | Number                                                     | 一     |
| ......  | [更多配置，请参考](https://element-plus.org/zh-CN/component/link.html#attributes) | 一                                                         | 一     |


### 插槽

| 插槽名               | 说明                                                                                 |
| -------------------- | ------------------------------------------------------------------------------------ |
| column_[prop]        | column_是固定的，prop里面的值取决于tableColumns中的prop，自定义表格中的内容          |
| column_header_[prop] | column_header_是固定的，prop里面的值取决于tableColumns中的prop，自定义表格头部的内容 |
| header_left          | 自定义表格头部操作栏的左侧                                                           |


