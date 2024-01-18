---
title: Form
lang: en-US
---
# Form 表单配置

使用ElForm组件和其它表单组件封装

## 基础用法

```html
<script setup lang="ts">
import {ref} from 'vue'

const formRef = ref({
    form: {
        model: {

        },
        formItem: {
            showLabel: {
                label: '土木工程',
                type: 'custom',
                showLabel: true
            },
            input: {
                label: '输入框',
                type: 'input',
                options: {

                },
            },
            textarea: {
                label: '文本域',
                type: 'textarea'
            },
            inputNumber: {
                label: '数字输入框',
                type: 'input-number',
                options: {
                    on: {
                        onChange: (e: any) => {
                            console.log(e, '3213')
                        },
                    }
                }
            },
            autoInput: {
                label: '自动补全输入框',
                type: 'input-autocomplete',
                options: {
                    on: {
                        onChange: (e: any) => {
                            console.log(e, '3213')
                        },
                    }
                }
            },
            select: {
                label: '选择框',
                type: 'select',
                sort: 1,
                options: {
                    value: 'code',

                    options: [
                        {label: 'lael1', code: '1'},
                        {label: 'label2', code: '2'},

                    ],
                }
            }
        }
    },
    search: true
})

const {form, search} = formRef.value

</script>

<template>
    <dinert-form
        class="near"
        v-bind="{
            form,
            search
        }"
    />
</template>
```