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
            },
            {
                prop: 'address',
                label: '地址',
            },
            {
                prop: 'operations',
                label: '操作',
                setting: true,
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
    footer: true
})

</script>

<template>
    <dinert-table :table="tablePage.table"
        :footer="tablePage.footer"
    >
        <template #table-body>
            <el-card v-for="item in tablePage.table.data" :key="item.name"
                :header="item.name"
            >
                {{ item.address }}
                {{ item.date }}
            </el-card>
        </template>
    </dinert-table>
</template>
<style lang="scss" scoped>
.el-card {
    margin-bottom: 10px;
}
</style>
