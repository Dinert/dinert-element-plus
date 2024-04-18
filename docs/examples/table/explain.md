

<style>
    .dinert-table{
        width: 100%;
        padding: 0 0 16px 0;
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
    }`
</script>


### 属性
| 属性名    | 说明                                                                           | 类型    | 默认值 |
| --------- | ------------------------------------------------------------------------------ | ------- | ------ |
| header    | 是否显示头部的操作栏                                                           | Boolean | true   |
| footer    | 是否显示底部分页栏                                                             | Boolean | true   |
| tableSlot | 表格的插槽为true时，表格中所有的插槽名称都为default，为false，可以正常使用插槽 | Boolean | false  |
| table     | [详细请参阅下面table属性](#table-属性)                                         | Object  | 一     |


### Table 属性

| 属性名       | 说明                                                                                                              | 类型    | 默认值                                                                          |
| ------------ | ----------------------------------------------------------------------------------------------------------------- | ------- | ------------------------------------------------------------------------------- |
| tableColumns | 表格列的数据配置项                                                                                                | Array   | 一                                                                              |
| errData      | 表格中无数据时显示的符号                                                                                          | String  | -                                                                               |
| setting      | 是否显示表格右上的操作栏                                                                                          | Boolean | true                                                                            |
| class        | 表格的类名                                                                                                        | String  | 一                                                                              |
| pagination   | [详细请参阅element-plus的pagination](https://element-plus.org/zh-CN/component/pagination.html#%E5%B1%9E%E6%80%A7) | Object  | <dinert-api-typing type="object" :details="paginationData"></dinert-api-typing> |


### TableColumns 属性
| 属性名        | 说明                                                            | 类型                                                                                          | 默认值 |
| ------------- | --------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | ------ |
| show          | 当前列是否显示                                                  | <dinert-api-typing type="enmu" details="boolean' \| '(model) => boolean"></dinert-api-typing> | 一     |
| setting       | 操作栏是否显示在当前列，当值为true时表格右上的操作栏会消失      | boolean                                                                                       | 一     |
| maxOperations | 表格最大显示的操作按钮数，超出这个数显示更多，设置functions有效 | Number                                                                                        | 3      |


### TablePage Slots

| 插槽名      | 说明                                   |
| ----------- | -------------------------------------- |
| form的插槽  | [请参考](form'./Form.md#form-slots')   |
| table的插槽 | [请参考table]('./Torm.md#table-slots') |