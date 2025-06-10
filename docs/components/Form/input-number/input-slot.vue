<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string
    name2: string
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: 'input-number';
    name2: 'input-number';
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        name2: '值',
    },
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        name: {
            label: '名称',
            type: 'input-number',
            options: {
                controlsPosition: 'right'
            }
        },
        name2: {
            label: '名称2',
            type: 'input-number',
        }
    }
})


</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="dialog"
            :search="false"
        >
            <template #formItem_name2="formItem">
                <span>
                    {{ form.model[formItem.key] }}
                </span>
            </template>
            <template #formItem_name_prefix>
                <el-icon><Refresh/></el-icon>
            </template>
            <template #formItem_name_suffix>
                <el-icon><Calendar/></el-icon>
            </template>
        </dinert-form>
    </div>
</template>
