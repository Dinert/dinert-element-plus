<script lang="ts" setup>

import {UseTablePage} from '../../../packages'


const tablePage = new UseTablePage({
    table: {
        pagination: {
        },
        tableColumns: [
            {
                prop: 'startTime',
                label: '时间',
            },
            {
                prop: 'startTime2',
                label: '时间',
            },
            {
                prop: 'startTime3',
                label: '时间',
            },
        ],
        data: [
            {
                'startTime': '2024-01-15 15:10:10',
            },
            {
                'startTime': '2024-01-15 15:10:10',
            },
            {
                'startTime': '2024-01-15 15:10:10',
            },
            {
                'startTime': '2024-01-15 15:10:09',
            },
            {
                'startTime': '2024-01-15 15:10:07',
            },
            {
                'startTime': '2024-01-15 15:10:04',
            },
            {
                'startTime': '2024-01-15 15:09:52',
            },
            {
                'startTime': '2024-01-15 15:09:52',
            },
            {
                'startTime': '2024-01-15 15:09:23',
            },
            {
                'startTime': '2024-01-15 15:09:23',
            },

        ]
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
    />
</template>
