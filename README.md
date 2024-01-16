# Vue3 components based on ElementPlus secondary encapsulation

## 技术栈
<a href="https://cn.vitejs.dev/">
    <img src="https://img.shields.io/badge/vite-4.5.0-brightgreen" alt="vite">
<a href="https://unpkg.com/vue@3.3.8/dist/vue.global.js">
    <img src="https://img.shields.io/badge/vue-3.3.8-brightgreen" alt="vue">
</a>
</a>
<a href="https://element-plus.org/zh-CN/">
    <img src="https://img.shields.io/badge/ElementPlus-2.3.9-brightgreen" alt="ElementPlus">
</a>
<a href="https://lodash.com/docs/4.17.21">
    <img src="https://img.shields.io/badge/lodash-4.17.21-brightgreen" alt="lodash">
</a>

## Installation

#### Using npm:
```shell
$ npm i lodash element-plus @dinert/element-plus
$ yarn add lodash element-plus @dinert/element-plus
```

#### In a browser：
```html

<script src="https://unpkg.com/vue@3.3.8/dist/vue.global.js"></script>
<script src="https://cdn.jsdelivr.net/npm/lodash@4.17.21/lodash.min.js"></script>

<link rel="stylesheet" href="https://unpkg.com/element-plus/lib/theme-chalk/index.css">
<script src="https://unpkg.com/element-plus/lib/index.js"></script>
<script src="./dist/element-plus.umd.js"></script>
```

#### In a Esm
```js
import Dinert from '@dinert/element-plus'
import '@dinert/element-plus/style'

app.use(Dinert)

```

#### Components
```html
<script scope lang="ts">
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
        data: []
    },
    form: {
        model: {

        },
        formItem: {
            showLabel: {
                label: '土木工程',
                type: 'custom',
                showLabel: true
            },
            input: {
                label: '输入框',
                type: 'input',
                options: {

                },
            },
            textarea: {
                label: '文本域',
                type: 'textarea'
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
                sort: 1,
                options: {
                    value: 'code',

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
</script>

<template>
    <dinert-table-page ref="tablePageRef"
        :table="table"
        class="near"
        :form="form"
    >
        <template #header-left>
            <el-button type="primary" icon="Plus">新增</el-button>
        </template>


        <template #column_startTime>
            32132
        </template>

    </dinert-table-page>

</template>

```