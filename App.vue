<script lang="ts" setup>
import {ref} from 'vue'

import TestTable from './packages/views/test-table/index.vue'
import TestForm from './packages/views/test-form/index.vue'
import TestTablePage from './packages/views/test-table-page/index.vue'
import TestTsxTable from './packages/views/test-tsx-table/index'

const activeName = ref('table-jsx')
</script>

<template>
    <div class="home">
        <el-tabs v-model="activeName">
            <el-tab-pane label="表格表单" name="table-form">
                <test-table-page/>
            </el-tab-pane>
            <el-tab-pane label="表格" name="table">
                <test-table/>
            </el-tab-pane>
            <el-tab-pane label="表单" name="form">
                <test-form/>
            </el-tab-pane>
            <el-tab-pane label="表格jsx" name="table-jsx">
                <test-tsx-table/>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<style lang="scss" scoped>
.home {
    padding: 16px;
    height: 100%;
    box-sizing: border-box;
    background-color: #f5f5f5;

    :deep() {
        .el-tabs {
            display: flex;
            height: 100%;
            flex-direction: column;

            .el-tabs__content {
                flex: 1;
                height: 0;

                .el-tab-pane {
                    height: 100%;

                    .dinert-table-page {
                        height: 100%;
                    }
                }
            }
        }
    }
}
</style>

<style lang="scss">
html,
body,
#app {
    height: 100%;
}

.hide {
    display: none;
}
</style>
