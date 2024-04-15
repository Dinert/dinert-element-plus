<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    status: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    status: string;
    status1: string;
    status2: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    labelWidth: 'auto',
    formItem: {
        status: {
            label: '默认',
            type: 'select',
            options: {
                options: [
                    {label: '显示当我的长度过长长长长长长', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        },
        status2: {
            label: '多选搜索',
            type: 'select',
            options: {
                multiple: true,
                value: 'code',
                filterable: true,
                label: 'name',
                options: [
                    {name: '显示当我的长度过长长长长长长长长长长长长长长长长长长', code: true},
                    {name: '隐藏11111111111111111111', code: false},
                ]
            }
        },
        status1: {
            label: '值对象',
            type: 'select',
            options: {
                value: 'object',
                label: 'name',
                valueKey: 'code',
                options: [
                    {name: '显示当我的长度过长长长长长长', code: true},
                    {name: '隐藏', code: false},
                ],
                onChange(value) {
                    console.log(value, 'valueeeeeeeeeee')
                }
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
