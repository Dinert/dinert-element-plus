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
    status: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    formItem: {
        name: {
            label: '名称',
            type: 'input',
            options: {
            }
        },
        status: {
            label: '状态',
            type: 'select',
            options: {
                options: [
                    {label: '显示当我的长度过长长长长长长', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        }
    }
})
</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="near"/>
    </div>
</template>
