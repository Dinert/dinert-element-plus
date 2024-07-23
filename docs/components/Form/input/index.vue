<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name2: string;
    name3: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        name: {
            label: '名称',
            type: 'input',
            options: {
            }
        },
        name3: {
            label: '有限制字数的名称',
            type: 'input',
            options: {
                maxlength: 10,
                showWordLimit: true,
            }
        },
        name2: {
            label: '统计字数',
            type: 'textarea',
            options: {
                showWordLimit: true, // 是否显示统计字数
                minlength: 0,
                maxlength: 30,
                onChange() { // 监听值的改变

                },
            },
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
