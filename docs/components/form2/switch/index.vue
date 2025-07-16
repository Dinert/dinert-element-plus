<script setup lang="ts">
import {ref, shallowRef} from 'vue'
import {RewriteFormProps} from '../../../../packages'
import {Check, Close} from '@element-plus/icons-vue'

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
            label: '开关',
            type: 'switch',
        },
        name2: {
            label: '加载中',
            type: 'switch',
            options: {
                loading: true
            }
        },
        name3: {
            label: '开关2',
            type: 'switch',
            options: {
                inlinePrompt: true,
                activeIcon: shallowRef(Check),
                inactiveIcon: shallowRef(Close)
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
