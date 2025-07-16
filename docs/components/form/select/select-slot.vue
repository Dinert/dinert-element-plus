<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    status: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    status: string;
    status1: string;
    status2: string;
    status3: string;
}


const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    labelWidth: 'auto',
    formItem: {
        status: {
            label: '默认',
            type: 'select',
            options: {
                options: [
                    {label: '显示当我的长度过长长长长长长', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        },
    }
})
</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="dialog"
            :search="false"
        >
            <template #formItem_status_footer>
                尾部插槽
            </template>
            <template #formItem_status_header>
                头部插槽
            </template>
            <template #formItem_status_prefix>
                头部内容
            </template>
        </dinert-form>
    </div>
</template>
