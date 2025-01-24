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
        data: tableData
    },
    form: {
        model: {},
        formItem: {}
    }
})

const {table, form} = tablePage

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

    </dinert-table>
</template>
