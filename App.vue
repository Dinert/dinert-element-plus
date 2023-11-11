<script setup lang="ts">
import {onMounted, ref} from 'vue'


const tablePage = ref({
    table: {
        pagination: {
            total: 200
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

        ],
        data: [
            {
                aaa: 'aaaaa',
                'bbb': {
                    c: '1231'
                },
                aaa1: 'aaaaa1',
                aaa2: 'aaaaa2'
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

// const fn = scope => {
//     console.log(scope)
// }

onMounted(() => {
    console.log(tableRef.value, '1321312312')
})
</script>

<template>
    <div class="home">
        <dinert-table ref="tableRef" :table="tablePage.table">
            <template #header-left>
                <el-button type="primary">新增</el-button>
            </template>
            <!-- <template #column_aaa>
                32132
            </template> -->
            <!-- <template #default="scope">
                {{ fn(scope) }}
                <template v-if="scope.header">
                    {{ scope.column.label }}
                </template>
                <template v-else>
                    {{ scope.row[scope.prop] }}
                </template>
            </template> -->
        </dinert-table>
    </div>
</template>

<style lang="scss" scoped>
.home {
    height: 100%;

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
