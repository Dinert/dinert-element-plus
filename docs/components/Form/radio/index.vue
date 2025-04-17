<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: string;
    name2: string;
    name3: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {

}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        name: {
            label: '单选',
            type: 'radio',
            options: {
                options: [
                    {label: '显示', value: true},
                    {label: '隐藏', value: false},
                    {label: '禁用', value: '', disabled: true},
                ]
            }
        },
        name2: {
            label: '不同样式',
            type: 'radio-button',
            options: {
                onChange: value => {
                    console.log(value)
                },
                options: [
                    {label: '显示', value: true},
                    {label: '隐藏', value: false},
                    {label: '禁用', value: '', disabled: true},
                ]
            }
        },
        name3: {
            label: '不同样式',
            type: 'radio',
            options: {
                options: [
                    {label: '显示', value: true, border: true},
                    {label: '隐藏', value: false, border: true},
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
