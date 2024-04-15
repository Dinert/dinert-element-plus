<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
    status: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name1: string;
    name2: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        name: '值',
        name2: '哈哈哈',
    },
    colLayout: {span: 24},
    showLabel: true,
    labelWidth: 'auto',
    formItem: {
        name: {
            label: '名称',
            type: 'input',
            showLabel: false,
            options: {

            }
        },
        name1: {
            label: '无值的情况',
            type: 'input',
            options: {

            }
        },
        name2: {
            label: '有值的情况',
            type: 'input',
        },

    }
})
</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="dialog"
            :search="false"
        />
    </div>
</template>
