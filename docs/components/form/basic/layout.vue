<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
    status: string;
    layout: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name1: string;
    name2: string;
    name3: string;
    name4: string;
    status: string;
    layout: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
    },
    colLayout(model, item) {
        if (item.index < 2) {
            return {
                span: 12
            }
        }
        return {
            span: 24
        }
    },
    labelWidth: 80,
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
            // colLayout: {span: 12},
            options: {

            }
        },
        name2: {
            label: '名称2',
            type: 'input',
            // colLayout: {span: 12},
            options: {

            }
        },
        status: {
            label: '状态',
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
        />
    </div>
</template>
