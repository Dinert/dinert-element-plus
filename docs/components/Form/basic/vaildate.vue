<script setup lang="ts">
import {ref} from 'vue'
import {DinertForm, RewriteFormProps} from '../../../../packages'

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
    status: string;
}

const dinertFormRef = ref<InstanceType<typeof DinertForm>>()


const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
    },
    colLayout: {span: 24},
    labelWidth: 60,
    required: true,
    showLabel: true,
    formItem: {
        name: {
            label: '必填',
            type: 'input',
            required: true,
            showLabel: false,

            options: {

            }
        },
        name2: {
            label: '必填',
            type: 'select',
            required: true,
            showLabel: false,
            options: {
                options: [
                    {label: '显示当我的长度过长长长长长长', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        },
        status: {
            label: '选择',
            type: 'select',
            required: false,
            options: {
                options: [
                    {label: '显示当我的长度过长长长长长长', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        }
    }
})

const save = () => {
    dinertFormRef.value?.formRef?.validate(validate => {
        if (validate) {
            console.log(form.value.model)
        }
    })
}
const reset = () => {
    form.value.model = {}
    dinertFormRef.value?.formRef?.clearValidate()
}


</script>

<template>
    <div class="home">
        <dinert-form ref="dinertFormRef" :form="form"
            class="dialog"
            :search="false"
        />
        <el-col style=" margin-bottom: 12px;text-align: center;">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button plain @click="reset">重置</el-button>
        </el-col>
    </div>
</template>
