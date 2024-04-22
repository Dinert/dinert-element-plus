<script setup lang="ts">
import {ref, watch} from 'vue'

const modelValue = ref(false)
const modelValue2 = ref(false)

const fullscreen = ref(true)

watch(fullscreen, newVal => {
    console.log(newVal)
})
</script>

<template>
    <div class="home">
        <el-button type="primary" @click="modelValue = true">打开弹窗</el-button>
        <el-button type="primary" @click="modelValue2 = true">全屏弹窗</el-button>
        <dinert-dialog v-model="modelValue">
            <!-- 内容 -->

            <template #footer>
                <el-button type="primary">保存</el-button>
                <el-button plain @click="modelValue = false">取消</el-button>
            </template>
        </dinert-dialog>
        <dinert-dialog v-model="modelValue2" v-model:fullscreen="fullscreen"/>
    </div>
</template>

<style lang="scss" scoped>
.home > .el-button {
    margin-bottom: 16px;
}
</style>
