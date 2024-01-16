<script lang="ts" setup>
import {ref} from 'vue'

import TestTable from './packages/views/test-table/index.vue'
import TestForm from './packages/views/test-form/index.vue'
import TestTablePage from './packages/views/test-table-page/index.vue'

const activeName = ref('table-form')
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
        </el-tabs>
    </div>
</template>

<style lang="scss" scoped>
.home {
    padding: 0 16px;
    height: 100%;
    box-sizing: border-box;

    :deep() {
        .el-tabs {
            display: flex;
            height: 100%;
            flex-direction: column;

            .el-tabs__content {
                flex: 1;
                height: 0;

                #pane-table-form,
                .dinert-table-page {
                    height: 100%;
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
