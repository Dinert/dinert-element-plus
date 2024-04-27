<script lang="ts" setup>
import {ref} from 'vue'
import {DinertTablePageProps} from '../../../../packages'

interface DataProps {
    date: string;
    name: string;
    address: string;
}


const tablePage = ref<DinertTablePageProps<DataProps, DataProps, DataProps>>({
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
    form: {
        model: {},
        formItem: {
            name: {
                type: 'input',
                label: '名称',
                options: {}
            },
            address: {
                type: 'input',
                label: '地址',
                options: {}
            },
            date: {
                type: 'date',
                label: '时间',
                options: {}
            },
        }
    },
    footer: true
})

const search = () => {
    console.log('查询')
}

const reset = () => {
    console.log('重置')
}

const checkedChange = () => {
    console.log('fdsafa')
}
</script>

<template>
    <dinert-table-page :table="tablePage.table" :form="tablePage.form"
        class="near"
        :footer="tablePage.footer"
        @search-fn="search"
        @reset-fn="reset"
        @checked-change="checkedChange"
    />
</template>
