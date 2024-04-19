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
                label: '时间'
            },
            {
                prop: 'name',
                label: '名称',
            },
            {
                prop: 'address',
                label: '地址',
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
    header: {
        'add': {
            message: '新增',
            click: item => {
                console.log(item, '1321321')
            }
        },
        'upload': {
            message: '导入',
        },
        'download': {
            message: '导出',
        },
        'delete': {
            message: '删除',
        },
        'custom': {
            message: '自定义内容',
        },
    },
    footer: false
})

</script>

<template>
    <dinert-table :table="tablePage.table"
        :footer="tablePage.footer"
        :header="tablePage.header"
    >
        <template #header_left_custom="item">
            {{ item.message }}
        </template>
    </dinert-table>
</template>
