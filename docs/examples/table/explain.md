

<style>
    .dinert-table{
        width: 100%;
        padding: 0 0 16px 0;
    }
</style>


### 属性
| 属性名    | 说明                 | 类型    | 默认值 |
| --------- | -------------------- | ------- | ------ |
| header    | 是否显示头部的操作栏 | Boolean | true   |
| footer    | 是否显示底部分页栏   | Boolean | true   |
| tableSlot | 表格的插槽为true时，表格中所有的插槽名称都为default，反之   | Boolean | false  |

| table   | [详细请参阅下面table属性](#form-属性)            | Object  | 一     |


### TablePage Attributes

| 属性名    | 说明                              | 类型                            | 默认值 |
| --------- | --------------------------------- | ------------------------------- | ------ |
| table     | [table表格的所有属性](./Table.md) | [RewriteTableProps](./Table.md) | 一     |
| form      | [form表单的所有属性](./Form.md)   | [RewriteFormProps](./Form.md)   | 一     |
| search    | 是否显示头部查询表单              | Boolean                         | true   |
| header    | 是否显示头部表单                  | Boolean                         | true   |
| footer    | 是否显示底部分页栏                | Boolean                         | true   |
| tableSlot | 是否开启table的默认插槽           | Boolean                         | true   |

### TablePage Events
| 事件          | 说明                                     | 类型                    |
| ------------- | ---------------------------------------- | ----------------------- |
| SizeChange    | table下的pagination的page-size改变时触发 | (value: number) => void |
| CurrentChange | table下的pagination的page-size改变时触发 | (value: number) => void |
| SearchFn      | 查询时触发                               | () => void              |
| ResetFn       | 重置时触发                               | () => void              |


### TablePage Slots

| 插槽名      | 说明                                   |
| ----------- | -------------------------------------- |
| form的插槽  | [请参考](form'./Form.md#form-slots')   |
| table的插槽 | [请参考table]('./Torm.md#table-slots') |