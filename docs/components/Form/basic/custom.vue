<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name1: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        name1: '1321312'
    },
    colLayout: {span: 24},
    labelWidth: 60,
    formItem: {
        name: {
            label: '名称',
            type: 'input',
            options: {

            }
        },
        name1: {
            label: '名称1',
            type: 'input',
            options: {

            }
        }
    }
})

const formItemFn = formItem => {
    console.log(formItem, 'formItemformItemformItem')
}

</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="dialog"
            :search="false"
        >
            <template #formItem_name="formItem">
                <el-button type="primary">{{ formItem.label }}</el-button>
                {{ formItemFn(formItem) }}
            </template>

            <template #formItem_name1="formItem">
                <el-input v-model="formItem.model[formItem.key]" v-bind="formItem.options"
                    style="margin-right: 22px;width: 80%;"
                    clearable
                />
            </template>
            <template #formItem_name1_after="formItem">
                <el-button type="primary">{{ formItem.label }}</el-button>
            </template>
        </dinert-form>
    </div>
</template>
