<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
    status: string;
    name3: number;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name1: string;
    name2: string;
    name3: number;
    name6: number;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        name: '值',
        name2: '哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈',
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
            type: 'select',
            options: {
                options: [
                    {label: '启用', value: 1},
                    {label: '禁用', value: 0},
                ]
            }
        },
        name6: {
            label: model => (model.name3 === 1 ? '动态label' : '动态label2'),
            showLabel: false,
            type: 'input',
        },
        name3: {
            type: 'select',
            label: '切换',
            showLabel: false,
            options: {
                options: [
                    {label: '启用', value: 1},
                    {label: '禁用', value: 0},
                ]
            }
        }

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
