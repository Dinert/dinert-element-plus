<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    input: string;
    select: number;
    select2: number[];
    inputNumber: number;
    selectV2: number;
    treeSelect: number[];
    switch: boolean;
    date: string;
    radio: number;
    checkbox: number[];
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    // name: string;
    // name1: string;
    // name2: string;
    // name3: number;
    // name6: number;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        input: 'input值',
        select: 1,
        select2: [1, 2],
        inputNumber: 100,
        selectV2: 1,
        treeSelect: [1, 2],
        switch: true,
        date: '2024-06-01 12:30:45',
        radio: 1,
        checkbox: [1, 2],

    },
    colLayout: {span: 24},
    showValue(model) {
        return true
    },
    labelWidth: 'auto',
    formItem: {
        input: {
            label: '输入框',
            type: 'input',
            showValue(model) {
                return false
            },
            options: {

            }
        },
        inputNumber: {
            label: '数字输入框',
            type: 'input-number',
            options: {

            }
        },
        select: {
            label: '下拉框',
            type: 'select',
            options: {
                options: [
                    {label: '启用', value: 1},
                    {label: '禁用', value: 0},
                ]
            }
        },
        select2: {
            label: '下拉框多选',
            type: 'select',
            options: {
                multiple: true,
                options: [
                    {label: '选项1', value: 1},
                    {label: '选项2', value: 2},
                    {label: '选项3', value: 3},
                ]
            }
        },
        selectV2: {
            label: '虚拟下拉框',
            type: 'select',
            options: {
                options: [
                    {label: '启用', value: 1},
                    {label: '禁用', value: 0},
                ]
            }
        },
        switch: {
            label: '开关',
            type: 'switch',
            options: {
                inactiveText: '关',
                activeText: '开',
            }
        },
        date: {
            label: '时间',
            type: 'date',
            options: {

            }
        },
        radio: {
            label: '单选框',
            type: 'radio',
            options: {
                options: [
                    {label: '启用', value: 1},
                    {label: '禁用', value: 0},
                ]
            }
        },
        checkbox: {
            label: '多选框',
            type: 'checkbox',
            options: {
                options: [
                    {label: '选项1', value: 1},
                    {label: '选项2', value: 2},
                    {label: '选项3', value: 3},
                ]
            }
        },


    }
})
</script>

<template>
    <div class="home">
        <div style="display: flex;">
            <dinert-form :form="form" class="dialog"
                style="flex: 0 0 50%;"
                :search="false"
            />
            <dinert-form :form="{...form, showValue: false}" class="dialog"
                style="flex: 0 0 50%;"
                :search="false"
            />
        </div>

    </div>
</template>
