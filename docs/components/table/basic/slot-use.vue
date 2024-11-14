<script lang="ts" setup>
import {ref} from 'vue'
import {TablePageProps} from '../../../../packages'

interface DataProps {
    date: string;
    name: string;
    address: string;
}


const tablePage = ref<TablePageProps<DataProps>>({
    table: {
        pagination: {
        },
        tableColumns: [
            {
                prop: 'date',
                label: '时间',
                show() {
                    return true
                }
            },
            {
                prop: 'name',
                label: '名称',
            },
            {
                prop: 'name2',
                label: 'format名称',
                // eslint-disable-next-line no-unused-vars
                formatter(row, column, cellValue, index, errData) {
                    return index ? '<span>false</span>' : errData
                },
            },
            {
                prop: 'address',
                label: '地址',
            },
            {
                prop: 'operations',
                label: '操作',
                setting: true,
                operations: {
                    edit: {
                        message: '编辑',
                        click: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    delete: {
                        message: '删除',
                        click: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        },
                    },
                    other1: {
                        message: '操作1',
                        type: 'danger',
                        click: (scope, column, item) => {
                            console.log(scope, column, item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    other2: {
                        message: '操作2',
                        type: 'danger',
                        click: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    other3: {
                        message: '下发',
                        second: 'messageBox',
                        click(scope) {
                            console.log(scope, 'scopeeeeeeee')
                        },
                    }
                }
            },
        ],
        data: [
            {
                date: '2016-05-03',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: '广州市区',
            },
        ]
    },
    footer: false
})

</script>

<template>
    <dinert-table :table="tablePage.table"
        :footer="tablePage.footer"
    >
        <template #column_name>
            自定义的名字
        </template>
        <template #column_header_name>
            自定义的头部名称
        </template>
    </dinert-table>
</template>
