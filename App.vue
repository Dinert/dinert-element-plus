<script setup lang="ts">
import {onMounted, ref} from 'vue'

const tablePage = ref({
    table: {
        key: true,
        pagination: {
        },
        tableColumns: [
            {
                label: '哈哈1',
                prop: 'aaa',
                formatter: scope => {
                    return `<span>${scope.row.aaa}</span>`
                }
            },
            {
                label: '哈哈2',
                prop: 'ccc'
            },
            {
                label: '哈哈3',
                prop: 'bbb.c',
                // setting: true
            },
            {
                label: '操作',
                prop: 'operations',
                setting: true
            }

        ],
        data: [
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            {
                aaa: 'aaaaa'
            },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // },
            // {
            //     aaa: 'aaaaa'
            // }
        ]
    }
})

const tableRef = ref(null)

const fn = scope => {
    console.log(scope)
}

// setTimeout(() => {
//     tablePage.value.table.data = [
//         {
//             aaa: '1321312'
//         },
//         {
//             aaa: '1321312'
//         },
//         {
//             aaa: '1321312'
//         },
//         {
//             aaa: '1321312'
//         }
//     ]
//     tablePage.value.table.key = !tablePage.value.table.key
// }, 3000)

onMounted(() => {
    console.log(tableRef.value, '1321312312')
})

const sizeChange = val => {
    console.log(val, '1321')
}
</script>

<template>
    <div class="home">
        <dinert-table-page ref="tableRef" :table="tablePage.table"
            @size-change="sizeChange"
            @current-change="sizeChange"
            @prev-click="sizeChange"
            @next-click="sizeChange"
        >
            <template #header-left>
                <el-button type="primary">新增</el-button>
                3213
            </template>

            <!-- <template #column_aaa>
                32132
            </template> -->
            <template #default="scope">
                {{ fn(scope) }}
                <template v-if="scope.header">
                    {{ scope.column.label }}
                </template>
                <template v-else>
                    {{ scope.row[scope.prop] }}
                </template>
            </template>
        </dinert-table-page>
    </div>
</template>

<style lang="scss" scoped>
.home {
    .dinert-table {
        display: flex;
        flex-direction: column;
        height: 100%;
    }
}
</style>

<style lang="scss">
html,
body,
#app {
    height: 100%;
}
</style>
