<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
    status: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    formItem: {
        name: {
            label: '名称',
            type: 'input',
            options: {
                showWordLimit: true, // 是否显示统计字数
                minlength: 0,
                maxlength: 30,
                onChange() { // 监听值的改变

                },
            },
        },
    }
})


</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="near"/>
    </div>
</template>
