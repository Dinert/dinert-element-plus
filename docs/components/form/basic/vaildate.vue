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
    name3: string;
    name4: string;
    status: string;
}


const dinertFormRef = ref<InstanceType<typeof DinertForm>>()


const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
    },
    colLayout: {span: 24},
    labelWidth: 60,
    required: true,
    formItem: {
        name: {
            label: '必填1',
            type: 'input',
            required: false,
            options: {

            }
        },
        name2: {
            label: '必填2',
            type: 'input',
            required() {
                return false
            },
            options: {
            }
        },
        name3: {
            label: '必填3',
            type: 'input',
            required: false,
            rules: [{required: true, message: '自定义必填的规则', trigger: 'blur'},
                    {
                        message: '长度必须大于0',
                        validator(
                            rule,
                            value: any,
                            callback: (error?: string | Error) => void
                        ) {
                            if (value.length <= 5) {
                                callback(new Error('请输入大于4个字符'))
                            } else {
                                callback()
                            }
                        }
                    }],
            options: {
            }
        },
        status: {
            label: '选择',
            type: 'select-v2',
            options: {
                placeholder: '当选择显示时名称4必填',
                options: [
                    {label: '显示', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        },
        name4: {
            label: '名称4',
            type: 'input',
            required(model) {
                return !!model.status
            },
            options: {
            }
        },
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
