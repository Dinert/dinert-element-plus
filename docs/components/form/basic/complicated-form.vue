<script setup lang="ts">
import {nextTick, ref} from 'vue'
import {RewriteFormProps, DinertForm} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
    list?: ModelProps[]
    select: string;
    custom: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name?: string;
    name1?: string;
    name2?: string;
    col?: string;

}

const dinertFormRef = ref<InstanceType<typeof DinertForm>>()


const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        list: [{}, {}]
    },
    colLayout: {span: 24},
    labelWidth: 'auto',
    required: true,
    formItem: {
        list: {
            type: 'array',
            label: '列表',
            children: {
                custom: {
                    label: '自定义内容',
                    type: 'input',
                },
                name: {
                    label: '名称',
                    type: 'input',
                    required: true,
                    options: {

                    }
                },
                select: {
                    label: '状态',
                    type: 'select',
                    required: true,
                    options: {
                        options: [{
                            label: '选项1',
                            value: '1'
                        }, {
                            label: '选项2',
                            value: '2'
                        }]
                    }
                }

            }
        }

    }
})


const save = () => {
    console.log(dinertFormRef.value?.formRef, 'dinertFormRef.value?.formRef')
    dinertFormRef.value?.formRef?.validate(validate => {
        if (validate) {
            console.log(form.value.model)
        }
    })
}
const reset = () => {
    form.value.model = {
        list: [{}, {}]
    }
    nextTick(() => {
        dinertFormRef.value?.formRef?.clearValidate()
    })
}


</script>

<template>
    <div class="home">
        {{ form.model.list }}
        <dinert-form ref="dinertFormRef" :form="form"
            class="dialog"
            :search="false"
        >
            <template #col_list_custom>
                <div>
                    1
                </div>
            </template>
        </dinert-form>
        <el-col style=" margin-bottom: 12px;text-align: center;">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button plain @click="reset">重置</el-button>
        </el-col>
    </div>
</template>
