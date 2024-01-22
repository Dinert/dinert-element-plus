---
title: Table
lang: en-US
---
# Table 表格
使用ElForm组件和ElPagination组件封装

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
    <dinert-table
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

    </dinert-table>
</template>
```


## Table API

### Table Attributes

| 属性名       | 说明                                                                                                                                | 类型    | 默认值 |
| ------------ | ----------------------------------------------------------------------------------------------------------------------------------- | ------- | ------ |
| header       | 是否显示头部表单                                                                                                                    | Boolean | true   |
| footer       | 是否显示底部分页栏                                                                                                                  | Boolean | true   |
| tableSlot    | 是否开启table的默认插槽                                                                                                             | Boolean | false  |
| table        | [table表格的所有属性，扩展配置看以下属性](https://element-plus.org/en-US/component/table.html#table-attributes)                     | Object  | 一     |
| tableColumns | [表格列，数组中的每一个对象就是一个table-column配置项](https://element-plus.org/en-US/component/table.html#table-column-attributes) | Array   | []     |
| errData      | 表格每一个数据为undefined、null、空字符串时显示的值                                                                                 | String  | -      |
| setting      | 是否显示tableColumn中的设置拖拽按钮                                                                                                 | Boolean | false  |
| key          | 表格的key属性，一般在表格布局错乱时设置为任何值，不要和上一次的相同                                                                 | Boolean | false  |
| class        | 表格的class属性                                                                                                                     | string  | 一     |
| pagination   | [分页组件的所有属性](https://element-plus.org/en-US/component/pagination.html#attributes)                                           | Object  | 一     |

### Table-column Attributes

| 属性名   | 说明                                                                           | 类型    | 默认值 |
| -------- | ------------------------------------------------------------------------------ | ------- | ------ |
| checked  | 是否显示当前表格                                                               | Boolean | true   |
| show     | 是否显示当前表格                                                               | Boolean | true   |
| setting  | 是否拖拽按钮                                                                   | Boolean | true   |
| sort     | 表格列排序顺序，比如第一个组件是1、以此类推，最后一个列设置比1小就可以排列第一 | Number  | 一     |
| disabled | 在setting设置为true时生效，是否可以拖拽排列顺序                                | Number  | 一     |
| class    | 表格列的class                                                                  | Number  | 一     |

### Table Slots

| 插槽名       | 说明                                                                                     |
| ------------ | ---------------------------------------------------------------------------------------- |
| column_[key] | column_是固定的，key里面的值取决于tableColumns数组中对象的prop值，tableSlot为false时有效 |
| default      | 表格内容和表格头的默认内容                                                               |


### Table的类型
```ts
import type {TableProps, TableColumnCtx, ElTable, ElPagination} from 'element-plus'

export interface ScopeProps<T = any> {
    $index: number;
    cellIndex: number;
    column: RewriteTableColumnCtx<T>;
    row: T;
    store: typeof ElTable;
    _self: any;
}

export interface FunctionsProps<T = any>{
    message?: string;
    value?: string;
    click?: (scope: ScopeProps<T>, column: RewriteTableColumnCtx<T>, item: FunctionsProps<T>) => void;
    sort?: number;
    type?: string;
    key?: any;
}

export interface RewriteTableColumnCtx<T=any> extends Omit<Partial<TableColumnCtx<T>>, 'children'>{
    type?: string;
    checked?: boolean;
    show?: boolean;
    setting?: boolean;
    maxOperations?: number;
    functions?: {
        [key: string]: FunctionsProps<T>;
    };
    sort?: number;
    disabled?: boolean;
    key?: any;
    class?: any;
    custom?: boolean;
    prop?: string;
    label?: string;
    width?: string | number;
    align?: string;
    children?: Array<RewriteTableColumnCtx<T>>;
}


export interface RecuveTableColumnProps<T = any>{
    onlyClass?: string;
    popoverValue?: boolean;
    table: RewriteTableProps;
    children?: Array<RewriteTableColumnCtx<T>>;
}

export interface RewriteTableProps<T = any> extends TableProps<T> {
    on?: Partial< InstanceType<typeof ElTable>>;
    tableColumns: Array<RewriteTableColumnCtx<T>>;
    errData?: string;
    tableSlot?: boolean;
    tableHeaderSlot?: boolean;
    setting?: boolean;
    key?: any;
    class?: string;
    pagination: RewritePaginationProps;

}

export interface RewritePaginationProps {
   on?: Partial<InstanceType<typeof ElPagination>>;
   pageSize?: number;
   pageSizes?: number[];
   defaultPageSize?: number;
   total?: number;
   pageCount?: number;
   pagerCount?: number;
   currentPage?: number;
   defaultCurrentPage?: number;
}


export interface TablePageProps<T = any>{
    header?: boolean;
    table: RewriteTableProps<T>;
    footer?: boolean;
    tableSlot?: boolean;
}


export type SelectTable = {setChecked: (num: any) => void, getCheckedKeys: () => void, setCheckedNodes: () => void} | null

export interface CtxType {
    slots: {
        'header-left'?: () => void;
        'header-footer'?: () => void;
    };

}

```