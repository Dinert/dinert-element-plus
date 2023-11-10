<script setup lang="ts">
import {ref} from 'vue'


const tablePage = ref({
    table: {
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
            }
        ]
    }
})

// const fn = scope => {
//     console.log(scope)
// }
</script>

<template>
    <div class="home">
        <dinert-table :table="tablePage.table">
            <template #header-left>
                <el-button type="primary">新增</el-button>
            </template>
            <template #column_aaa>
                32132
            </template>
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
    height: 200px;
}
</style>
