<script setup lang="ts">
import {ref} from 'vue'


const labelDisabled = ref<boolean>(true)
const content = ref('当我超出动态宽度后就打点展示当我超出动态宽度后就打点展示浏览器缩放可以看出效果')

const LabelMouseEnter = e => {
    const el = e.target
    const labelEl = window.getComputedStyle((el as HTMLElement), null)
    const labelWidth = parseInt(labelEl.getPropertyValue('width'))
    const tooltipWidth = (e.target.previousElementSibling as any).offsetWidth

    if (tooltipWidth >= labelWidth) {
        labelDisabled.value = false
    } else {
        labelDisabled.value = true
    }
}
</script>

<template>
    <div>
        <dinert-tooltip :disabled="labelDisabled" :content="content"
            @label-mouse-enter="LabelMouseEnter"
        />
        <el-input v-model="content" style="margin-top: 20px;width: 100%;"/>
    </div>
</template>
