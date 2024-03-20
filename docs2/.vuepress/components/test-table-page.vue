<script lang="ts" setup>
import {ref} from 'vue'

const tablePage = ref({
    table: {
        height: 'auto',
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
                prop: 'operations',
                label: '操作结果',
                setting: true,
                functions: {
                    edit: {
                        message: '编辑',
                        value: '22',
                        click: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
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
        data: [
    {
        'args': '[]',
        'costTime': 39,
        'errorMsg': '',
        'id': '1196471398900342784',
        'ip': '10.10.3.182',
        'operationDescription': '',
        'operationObject': 'Department',
        'operationResult': '成功',
        'operationType': {
            'code': 'Load',
            'name': '查看'
        },
        'overTime': 1705302610861,
        'requestMethod': 'POST',
        'requestUrl': '/api/department/treeAll',
        'securityLevel': 'C2',
        'startTime': '2024-01-15 15:10:10',
        'userId': 'admin',
        'userName': '超级管理员'
    }]
    },
    form: {
        model: {

        },
        formItem: {
            input: {
                label: '输入框',
                type: 'input',
                options: {

                },
            },

        }
    }
})

const {table, form} = tablePage.value
</script>

<template>
    <dinert-table-page
        :table="table"
        class="near"
        :form="form"
    >
        <template #header-left>
            <el-button type="primary" icon="Plus">新增</el-button>
        </template>


        <template #column_startTime>
            32132
        </template>

    </dinert-table-page>
</template>
