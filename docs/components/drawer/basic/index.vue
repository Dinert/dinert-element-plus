<script setup lang="ts">
import {ref, watch} from 'vue'

const modelValue = ref(false)
const modelValue2 = ref(false)
const modelValue3 = ref(false)

const fullscreen = ref(true)

watch(fullscreen, newVal => {
    console.log(newVal)
})
</script>

<template>
    <div class="home">
        <el-button type="primary"
            @click="modelValue = true"
        >打开抽屉</el-button>
        <el-button type="primary" @click="modelValue2 = true">底部抽屉</el-button>
        <el-button type="primary"
            @click="modelValue3 = true"
        >顶部抽屉</el-button>
        <dinert-drawer v-model="modelValue" is-border
            modal-class="drawer_custom"
        >
            <!-- 内容 -->

            <template #footer>
                <el-button type="primary">保存</el-button>
                <el-button plain @click="modelValue = false">取消</el-button>
            </template>
            <!-- 标题 -->
            <div>

                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>

            </div>

        </dinert-drawer>
        <dinert-drawer v-model="modelValue2" direction="btt"
            title="标题"
        />
        <dinert-drawer v-model="modelValue3" direction="ttb"
            :with-header="false"
            :close-on-click-modal="true"
        >
            <div>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>
                <h1>弹窗标题</h1>

                <h1>弹窗标题</h1>
            </div>
        </dinert-drawer>
    </div>
</template>

<style lang="scss" scoped>
.home > .el-button {
    margin-bottom: 16px;
}
</style>
