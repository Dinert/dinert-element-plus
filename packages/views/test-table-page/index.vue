<script lang="ts" setup>
import {onMounted, ref, watchEffect} from 'vue'

import TablePage from '@/hooks/useTablePage/index'
import {tableData} from './data'
import {tableColumns} from './tableColumns'
import {formItem} from './formItem'

import {TableData} from './types'


const tablePage = new TablePage<TableData, TableData, TableData, TableData>({
    table: {
        pagination: {
        },
        tableColumns: tableColumns,
        data: tableData
    },
    form: {
        model: {

        },
        formItem
    }
})

const {table, form, tablePageRef} = tablePage

tablePage.getTableParams = () => {


    return {
    }
}

onMounted(() => {
    console.log(tablePageRef.value, '321312321321312')
})

</script>

<template>
        <dinert-table-page ref="tablePageRef"
            :table="table"
            class="near"
            :form="form"
            :table-slot="true"

        >
            <template #header-left>
                <el-button type="primary" icon="Plus">新增</el-button>
            </template>


            <template #column_aaa>
                32132
            </template>

        </dinert-table-page>
</template>