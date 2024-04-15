<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    num: string;
    num2: string;
    num3: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        num3: 2
    },
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        num: {
            label: '数量',
            type: 'input-number',
        },
        num2: {
            label: '按钮位置',
            type: 'input-number',
            options: {
                controlsPosition: 'right',
                onChange() { // 监听值的改变

                },
            },
        },
        num3: {
            label: '精度',
            type: 'input-number',
            options: {
                precision: 2,
                step: 0.1,
                max: 10,
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
