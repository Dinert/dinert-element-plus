<script lang="ts" setup>
import {ref} from 'vue'
import {TablePageProps} from '../../../../packages'

interface DataProps {
    date: string;
    name: string;
    state: string;
    city: string;
    address: string;
    zip: string;
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
                label: '信息',
                children: [
                    {
                        prop: 'name',
                        label: '名字'
                    },
                    {
                        label: '地址信息',
                        children: [
                            {
                                prop: 'state',
                                label: '状态'
                            },
                            {
                                prop: 'city',
                                label: '城市'
                            },
                            {
                                prop: 'address',
                                label: '住址'
                            },
                            {
                                prop: 'zip',
                                label: 'Zip'
                            },
                        ]
                    }
                ]
            },

        ],
        data: [
            {
                date: '2016-05-03',
                name: 'Tom',
                state: '好极了',
                city: '广州',
                address: '广州市区',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-02',
                name: 'Tom',
                state: '好极了',
                city: '广州',
                address: '广州市区',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                state: '好极了',
                city: '广州',
                address: '广州市区',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                state: '好极了',
                city: '广州',
                address: '广州市区',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-08',
                name: 'Tom',
                state: '好极了',
                city: '广州',
                address: '广州市区',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-06',
                name: 'Tom',
                state: '好极了',
                city: '广州',
                address: '广州市区',
                zip: 'CA 90036',
            },
            {
                date: '2016-05-07',
                name: 'Tom',
                state: '好极了',
                city: '广州',
                address: '广州市区',
                zip: 'CA 90036',
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
