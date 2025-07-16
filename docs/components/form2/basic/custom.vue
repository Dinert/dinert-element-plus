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
    name2: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        name: '1321312',
        name1: '1321312',
    },
    colLayout: {span: 24},
    labelWidth: 'auto',
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
        },
        name2: {
            label: '名称2',
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
                    style="margin: 0 22px;width: 50%;"
                    clearable
                />
            </template>
            <template #formItem_after_name1="formItem">
                <el-button type="primary">{{ formItem.label }}</el-button>
            </template>
            <template #formItem_before_name1="formItem">
                <el-button type="primary">{{ formItem.label }}</el-button>
            </template>
            <template #formItem_label_name2>
                插槽label
            </template>
        </dinert-form>
    </div>
</template>
