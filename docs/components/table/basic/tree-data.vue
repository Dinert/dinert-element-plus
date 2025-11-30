<script lang="ts" setup>
import {ref} from 'vue'
import {TablePageProps} from '../../../../packages'

interface DataProps {
    date: string;
    name: string;
    address: string;
    id: number
    hasChildren?: boolean
    children?: DataProps[]
}


const tablePage = ref<TablePageProps<DataProps>>({
    table: {
        rowKey: 'id',
        setting: false,
        pagination: {
        },

        defaultExpandAll: true,

        tableColumns: [
            {
                type: 'selection',
            },
            {
                prop: 'date',
                label: '时间',
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
                id: 1,
                date: '2016-05-03',
                name: 'Tom',
                address: '广州市区',
                children: [
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: 'wangxiaohu',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        id: 32,
                        date: '2016-05-01',
                        name: 'wangxiaohu',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                ],
            },
            {
                id: 2,
                date: '2016-05-02',
                name: 'Tom',
                address: '广州市区',
            },
            {
                id: 3,
                date: '2016-05-04',
                name: 'Tom',
                address: '广州市区',
            },
            {
                id: 4,
                date: '2016-05-01',
                name: 'Tom',
                address: '广州市区',
            },
        ]
    },
    footer: false
})

const tablePage2 = ref<TablePageProps<DataProps>>({
    table: {
        rowKey: 'id',
        setting: false,
        pagination: {
        },
        lazy: true,
        load: (
            row: DataProps,
            treeNode: unknown,
            resolve: (data: DataProps[]) => void
        ) => {
            setTimeout(() => {
                resolve([
                    {
                        id: 31,
                        date: '2016-05-01',
                        name: 'wangxiaohu',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                    {
                        id: 32,
                        date: '2016-05-01',
                        name: 'wangxiaohu',
                        address: 'No. 189, Grove St, Los Angeles',
                    },
                ])
            }, 1000)
        },
        treeProps: {
            children: 'children',
            hasChildren: 'hasChildren',
        },

        tableColumns: [
            {
                type: 'selection',
            },
            {
                prop: 'date',
                label: '时间',
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
                id: 1,
                date: '2016-05-03',
                name: 'Tom',
                address: '广州市区',

                hasChildren: true,
            },
            {
                id: 2,
                date: '2016-05-02',
                name: 'Tom',
                address: '广州市区',
            },
            {
                id: 3,
                date: '2016-05-04',
                name: 'Tom',
                address: '广州市区',
            },
            {
                id: 4,
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
    <div>
        <dinert-table :table="tablePage.table"
            :footer="tablePage.footer"
        />

        <dinert-table :table="tablePage2.table"
            :footer="tablePage2.footer"
        />
    </div>

</template>
