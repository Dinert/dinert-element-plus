<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
    status: boolean;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name1: string;
    name2: string;
    status: string;
    status2: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
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

            },
            vif(model) {
                return !!model.status
            }
        },
        status: {
            label: '状态',
            type: 'select',
            options: {
                options: [
                    {label: '显示名称', value: true},
                    {label: '隐藏名称', value: false},
                ]
            }
        },
        name2: {
            label: '名称2',
            type: 'input',
            options: {

            },
            show(model) {
                return !!model.status2
            }
        },
        status2: {
            label: '状态',
            type: 'select',
            options: {
                options: [
                    {label: '显示名称2', value: true},
                    {label: '隐藏名称2', value: false},
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
