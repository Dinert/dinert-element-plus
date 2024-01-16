<script lang="ts" setup>
import {onMounted} from 'vue'

import TablePage from '@/hooks/useTablePage/index'
import {tableData} from './data'
import {formItem} from './formItem'

import {TableData} from './types'


const tablePage = new TablePage<TableData, TableData, TableData, TableData>({
    table: {
        pagination: {
        },
        tableColumns: [
            {
                reserveSelection: true,
                type: 'selection',
                prop: 'selection',
                fixed: true
            },
            {
                prop: 'startTime',
                label: '操作时间',
            },
            {
                prop: 'userName',
                label: '操作用户',
            },
            {
                prop: 'ip',
                label: '操作ip'
            },
            {
                prop: 'operationType.name',
                label: '日志类型'
            },
            {
                prop: 'operationObject',
                label: '操作对象'
            },
            {
                prop: 'operations',
                label: '操作结果',
                setting: true,
                functions: {
                    edit: {
                        message: '编辑',
                        value: '22',
                        click: (scope, column, item) => {
                            console.log(item, scope.row)
                        }
                    },
                    operations: {
                        message: '操作1'
                    },
                    operations2: {
                        message: '操作2',
                        click: (scope, column, item) => {
                            console.log(column, item)
                        }
                    },
                    operations3: {
                        message: '转交给他人'
                    }
                }
            }
        ],
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
