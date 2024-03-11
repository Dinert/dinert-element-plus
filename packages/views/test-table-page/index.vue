<script lang="ts" setup>
import {onMounted} from 'vue'

import TablePage from '@packages/hooks/useTablePage/index'
import {tableData} from './data'

import {TableData} from './types'


const tablePage = new TablePage<TableData, TableData, TableData, TableData>({
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
                prop: 'userName',
                label: '操作用户',
            },
            {
                prop: 'ip',
                label: '操作ip'
            },
            {
                prop: 'operationType.name',
                label: '日志类型'
            },
            {
                prop: 'operationObject',
                label: '操作对象'
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
                        message: scope => {
                            return '操作' + scope.$index
                        }
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
        data: tableData
    },
    form: {
        model: {

        },
        formItem: {
            name: {
                label: '名称',
                type: 'custom',
            },
            showLabel: {
                label: '土木工程',
                type: 'custom',
            },
            input: {
                label: '输入框',
                type: 'input',
                options: {

                },
            },
            textarea: {
                label: '文本域',
                type: 'textarea',
                required: true
            },
            inputNumber: {
                label: '数字输入框',
                type: 'input-number',
                options: {
                    on: {
                        onChange: (e: any) => {
                            console.log(e, '3213')
                        },
                    }
                }
            },
            autoInput: {
                label: '自动补全输入框',
                type: 'input-autocomplete',
                options: {
                    on: {
                        onChange: (e: any) => {
                            console.log(e, '3213')
                        },
                    }
                }
            },
            select: {
                label: '选择框',
                type: 'select',
                options: {
                    value: 'code',
                    label: 'label',
                    options: [
                        {label: 'lael1', code: '1'},
                        {label: 'label2', code: '2'},

                    ],
                }
            },
            switch: {
                label: '开关',
                type: 'switch',
                options: {

                }
            },

            selectTree: {
                label: '选择树',
                type: 'tree-select',
                options: {
                    data: [

                    ],
                    options: [
                        {
                            label: '1', value: '1',
                            children: [
                                {
                                    label: '1', value: '3',

                                }
                            ]
                        },
                        {label: '2', value: '2'},
                    ]
                }
            },
            datetime: {
                label: '小时天',
                type: 'datetime',
                options: {

                }
            },
            date: {
                label: '天',
                type: 'date',
                options: {

                }
            },
            week: {
                label: '周',
                type: 'week',
                options: {

                }
            },
            month: {
                label: '月',
                type: 'month',
                options: {

                }
            },
            year: {
                label: '年',
                type: 'year',
                options: {

                }
            },
            datetimerange: {
                label: '小时天双选',
                type: 'datetimerange',
                options: {

                }
            },
            daterange: {
                label: '天双选',
                type: 'daterange',
                options: {

                }
            },
            monthrange: {
                label: '月双选',
                type: 'monthrange',
                options: {

                }
            },
            rate: {
                label: '评分',
                type: 'rate',
                options: {
                    on: {
                        onChange(a: any) {
                            console.log(a)
                        }
                    }

                }
            },

            checkbox: {
                label: '多选框',
                type: 'checkbox',
                options: {
                    options: [
                        {label: '333', value: 'value1'},
                        {label: '2', value: 'value2'},
                    ]
                }
            },
            radio: {
                label: '单选',
                type: 'radio',
                options: {
                    options: [
                        {label: '1', value: '1', disabled: true},
                        {label: '2', value: '2'},
                    ]
                }
            },
            radioButton: {
                label: '单选按钮',
                type: 'radio-button',
                options: {
                    options: [
                        {label: '1', value: '1', disabled: true},
                        {label: '2', value: '2'},
                    ]
                }
            },
            cascader: {
                label: '级联',
                type: 'cascader',
                options: {
                    props: {
                        emitPath: false,
                        multiple: true,
                    },
                    options: [
                        {
                            label: '333', value: 'value1',
                        },
                        {label: '2', value: 'value2'}
                    ]
                }
            }

        }
    }
})

const {table, form, tablePageRef} = tablePage

tablePage.getTableParams = () => {


    return {
    }
}

onMounted(() => {
    console.log(tablePageRef.value, '321312321321312')
})
// tablePage.search()

const search = () => {
    console.log('搜索')
}

</script>

<template>
    <dinert-table-page ref="tablePageRef"
        :table="table"
        class="near"
        :form="form"
        :search="true"
        :table-slot="true"
        @search-fn="search"
    >
        <template #header-left>
            <el-button type="primary" icon="Plus">新增</el-button>
        </template>

        <template #formItem_name>
            111
        </template>
        <template #column_startTime>
            32132
        </template>

    </dinert-table-page>
</template>
