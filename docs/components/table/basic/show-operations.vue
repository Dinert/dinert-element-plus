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
                checked: false

            },
            {
                prop: 'address',
                label: '地址',
                children: [
                    {
                        prop: 'address1',
                        label: '地址1',
                        checked: false
                    },
                    {
                        prop: 'address2',
                        label: '地址2',
                    }
                ]
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
                        message: '删除弹窗',
                        second: 'messageBox',
                        click: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    second2: {
                        message: scope => '二次确认',
                        second: true,
                        type: 'warning',
                        click: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        },
                        confirm: {
                            // title: '二次确认框'
                        }
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
