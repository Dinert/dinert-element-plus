<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

interface ModelProps {
    name: string;
    status: string;
}

interface FormItemProps {
    name: string;
    status: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        name: '11123132131231231211111111111'
    },
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
