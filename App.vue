<script setup lang="ts">
import {onMounted, ref, watchEffect} from 'vue'

import {RewriteFormProps} from './packages/components/form/types'
import {TablePageProps} from './packages/components/table/types'

const tablePage = ref < TablePageProps > ({
    table: {
        setting: false,
        key: true,
        pagination: {
        },
        tableColumns: [
            {
                label: '哈哈1',
                prop: 'aaa',
                formatter: scope => {
                    return `<span>${scope.row.aaa}</span>`
                },
            },
            {
                label: '哈哈2',
                prop: 'ccc'
            },
            {
                label: '哈哈3',
                prop: 'bbb.c',
            },
            {
                label: '操作',
                prop: 'operations',
                setting: true,
                operationsSplit: 3,
                functions: {
                    edit: {
                        message: '编辑',
                        value: '22',
                        click: item => {
                            console.log(item, 'itemmmmmmmmmmm')
                        }
                    },
                    operations: {
                        message: '操作'
                    },
                    operations2: {
                        message: '操作'
                    },
                    operations3: {
                        message: '操作'
                    }
                }


            }

        ],
        data: [
            {
                aaa: 'aaaaa',
                'bbb': {
                    c: '1231'
                },
                aaa1: 'aaaaa1',
                aaa2: 'aaaaa2'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // }
        ]
    }
})

const tableRef = ref(null)

// const fn = scope => {
//     console.log(scope)
// }

// setTimeout(() => {
//     tablePage.value.table.data = [
//         {
//             aaa: '1321312'
//         },
//         {
//             aaa: '1321312'
//         },
//         {
//             aaa: '1321312'
//         },
//         {
//             aaa: '1321312'
//         }
//     ]
//     tablePage.value.table.key = !tablePage.value.table.key
// }, 3000)

onMounted(() => {
    // console.log(tableRef.value, '1321312312')
})

const sizeChange = val => {
    console.log(val, '1321')
}

const form = ref < RewriteFormProps > ({
    model: {
    },
    formItem: {
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
                    onChange: e => {
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
                    onChange: e => {
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
                    onChange(a) {
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
        },

    }
})

watchEffect(() => {
    console.log(form.value.model.cascader, 'newVal')
})
</script>

<template>
    <div class="home">
        <dinert-table-page ref="tableRef" :table="tablePage.table"
            class="near"
            :form="form"
            :table-slot="true"
            @size-change="sizeChange"
            @current-change="sizeChange"
            @prev-click="sizeChange"
            @next-click="sizeChange"
        >
            <template #header-left>
                <el-button type="primary" icon="Plus">新增</el-button>
            </template>

            <!-- <template #formItem_name_append>
                321312
            </template> -->
            <!-- <template #column_aaa>
                32132
            </template> -->
            <!-- <template #default="scope">
                {{ fn(scope) }}
                <template v-if="scope.header">
                    {{ scope.column.label }}
                </template>
                <template v-else>
                    {{ scope.row[scope.prop] }}
                </template>
            </template> -->
        </dinert-table-page>
    </div>
</template>

<style lang="scss" scoped>
.home {
    height: 100%;

    .dinert-table {
        display: flex;
        flex-direction: column;
    }
}
</style>

<style lang="scss">
html,
body,
#app {
    height: 100%;
}
</style>
