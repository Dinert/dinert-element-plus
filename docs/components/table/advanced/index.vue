<script lang="ts" setup>
import {TablePage} from '../../../../packages'

interface DataProps {
    date: string;
    name: string;
    address: string;
}

// 这里的TablePage可以用上面的RewriteTablePage代替
const tablePage = new TablePage<DataProps>({
    header: {
        add: {
            message: '新增'
        }
    },
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
    footer: true,
    form: {
        model: {},
        formItem: {}
    }
})

const {table, footer, header} = tablePage

// 获取请求的参数，必需
tablePage.getTableParams = () => {
    return {
        url: '',
        method: 'post',
        data: {}
    }
}

// 调用查询
tablePage.search()

</script>

<template>
    <dinert-table :table="table"
        :footer="footer"
        :header="header"
    />
</template>
