---
title: TablePage
lang: en-US
---

# TablePage 表格查询

使用DinertTable和DinertForm组件组合搭建


## 基础用法
```html
<script lang="ts" setup>
import {ref} from 'vue'


const tablePage = ref({
    table: {
        pagination: {
        },
        tableColumns: [
            {
                reserveSelection: true,
                type: 'selection',
                prop: 'selection',
                fixed: true
            },
            {
                prop: 'startTime',
                label: '操作时间',
            },
            {
                prop: 'name',
                label: '名字',
                children: [
                    {
                        prop: 'name1',
                        label: '名字1'
                    },
                    {
                        prop: 'name2',
                        label: '名字2'
                    }
                ]
            },
            {
                prop: 'operations',
                label: '操作结果',
                setting: true,
                functions: {
                    edit: {
                        message: '编辑',
                        value: '22',
                        click: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    operations: {
                        message: '操作1'
                    },
                    operations2: {
                        message: '操作2',
                        click: (scope, column, item) => {
                            console.log(column, item)
                        }
                    },
                    operations3: {
                        message: '转交给他人'
                    }
                }
            }
        ],
        data: [
    {
        'args': '[]',
        'costTime': 39,
        'errorMsg': '',
        'id': '1196471398900342784',
        'ip': '10.10.3.182',
        'operationDescription': '',
        'operationObject': 'Department',
        'operationResult': '成功',
        'operationType': {
            'code': 'Load',
            'name': '查看'
        },
        'overTime': 1705302610861,
        'requestMethod': 'POST',
        'requestUrl': '/api/department/treeAll',
        'securityLevel': 'C2',
        'startTime': '2024-01-15 15:10:10',
        'userId': 'admin',
        'userName': '超级管理员'
    }]
    },
    form: {
        model: {

        },
        formItem: {
            name: {
                label: '名称',
                type: 'input',
                options: {

                },
            },

        }
    }
})

const {table, form} = tablePage.value
</script>

<template>
    <dinert-table-page
        :table="table"
        class="near"
        :form="form"
    >
        <template #header-left>
            <el-button type="primary" icon="Plus">新增</el-button>
        </template>


        <template #column_startTime={scope}>
            {{scope.row.startTime}}
        </template>

        <template #formItem_name>
            测试
        </template>

    </dinert-table-page>
</template>
```
## TablePage API

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

| 插槽名         | 说明                                                             |
| -------------- | ---------------------------------------------------------------- |
| form的插槽   | [请参考](form'./Form.md#form-slots') |
| table的插槽 | [请参考table]('./Torm.md#table-slots')        |



### TablePage Type
```ts
import type {DinertFormProps} from '@dinert/element-plus'
import type {TableInstance} from 'element-plus'
import type {TablePageProps, RewriteTableColumnCtx} from '@dinert/element-plus'

export interface DinertTablePageProps<T = any, D = any> extends DinertFormProps<D>, TablePageProps<T>{
    search?: boolean;
}

export interface TableParams<T = any> {
    data: T[];
    page?: number;
    pageNum?: number;
    pageSize?: number;
    total?: number;
    totalPages?: number;
}

export interface AjaxTableProps {
    name?: 'reset' | 'delete' | 'search' | 'current' | 'size';
    currentPage?: number;
    pageSize?: number;
}


export interface Scope<T = any>{
    $index?: number;
    $cellIndex?: number;
    column?: RewriteTableColumnCtx<T>;
    data?: RewriteTableColumnCtx<T>;
    row?: T;
    store?: TableInstance;
    _self?: any;
}

export type ScopeFn<T> = (scope?: Scope<T>) => void
```