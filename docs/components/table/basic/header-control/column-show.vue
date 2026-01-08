<script lang="ts" setup>
import {ref, shallowRef} from 'vue'

import {TablePageProps} from '../../../../../packages'
import {Plus} from '@element-plus/icons-vue'


interface DataProps {
    date: string;
    name: string;
    address: string;
    state: string;
    city: string;
}


const tablePage = ref<TablePageProps<DataProps>>({
    table: {
        pagination: {
        },
        tableColumns: [
            {
                'prop': 'date',
                'label': '日期'
            },
            {
                'prop': 'name',
                'label': '姓名'
            },
            {
                'prop': 'state',
                'label': '州'
            },
            {
                'prop': 'city',
                'label': '城市'
            },
            {
                'prop': 'address',
                'label': '地址'
            },
            {
                'prop': 'operations',
                'label': '操作',
                setting: true,
            }
        ],
        data: [
            {
                'date': '2016-05-03',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
            {
                'date': '2016-05-02',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
            {
                'date': '2016-05-04',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
            {
                'date': '2016-05-01',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            }
        ],
    },
    header: {

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
