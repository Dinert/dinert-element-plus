<script lang="ts" setup>

import TablePage from '@packages/hooks/TablePage/index'
import {tableData} from './data'
import {tableColumns} from './tableColumns'


const tablePage = new TablePage({
    table: {
        autoHeight: true,
        pagination: {
        },
        tableColumns: tableColumns,
        data: []
    },
    form: {
        model: {},
        formItem: {}
    }
})

const {table, form} = tablePage

setTimeout(() => {
    table.value.data = tableData
}, 2000)

</script>

<template>
    <dinert-table :table="table"
        class="near"
        :form="form"
    >
        <template #header-left>
            <el-button type="primary" icon="Plus">新增</el-button>
        </template>


        <template #column_startTime>
            32132
        </template>

        <template #table-left>
            <div>
                1321
            </div>
        </template>
    </dinert-table>
</template>
