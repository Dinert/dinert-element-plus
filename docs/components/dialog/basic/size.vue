<script setup lang="ts">
import {ref} from 'vue'

const modelValue = ref(false)
const modelValue2 = ref(false)
const modelValue3 = ref(false)

</script>

<template>
    <div class="home">
        <el-button type="primary" @click="modelValue = true">large</el-button>
        <el-button type="primary" @click="modelValue2 = true">medium</el-button>
        <el-button type="primary" @click="modelValue3 = true">small</el-button>

        <dinert-dialog v-model="modelValue" size="large"/>
        <dinert-dialog v-model="modelValue2" size="medium"/>
        <dinert-dialog v-model="modelValue3" size="small"/>
    </div>
</template>

<style lang="scss" scoped>
.home > .el-button {
    margin-bottom: 16px;
}
</style>
