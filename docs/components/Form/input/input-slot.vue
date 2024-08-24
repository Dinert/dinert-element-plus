<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: 'input';
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        name: {
            label: '名称',
            type: 'input',
            options: {
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
            <template #formItem_name_prefix>
                <el-icon><Refresh/></el-icon>
            </template>
            <template #formItem_name_suffix>
                <el-icon><Calendar/></el-icon>
            </template>
            <template #formItem_name_prepend>
                <el-icon><Refresh/></el-icon>
            </template>
            <template #formItem_name_append>
                <el-icon><Calendar/></el-icon>
            </template>
        </dinert-form>
    </div>
</template>
