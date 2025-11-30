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
                type: 'selection',
            },
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
        ],
        onSelect(selection) {
            selectTableDatas.value = selection

        }
    },
    header: {
        'add': {
            message: '新增',
            type: 'primary',
            click: item => {
                console.log(item, '1321321')
            },
            tooltip: {
                content: () => {
                    return '新增'
                }
            }
        },
        'upload': {
            message: '导入',
            disabled() {
                return selectTableDatas.value.length === 0
            },
        },
        'download': {
            message: '导出',
        },
        'delete': {
            message: '删除',
            tooltip: {
                content: '删除'
            }
        },
        'custom': {
            message: '自定义内容',
        },
    },
    footer: false
})
const selectTableDatas = ref<DataProps[]>([])


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
