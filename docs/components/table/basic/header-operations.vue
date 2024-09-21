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
        setting: false,
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
                sort: 1
            },
            {
                prop: 'address',
                label: '地址'
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
    />
</template>
