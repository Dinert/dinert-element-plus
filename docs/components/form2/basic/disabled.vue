<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: boolean;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name1: string;
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
                disabled: true
            }
        },
        name1: {
            label: '名称1',
            type: 'input',
            colLayout: {span: 12},
            options: {

            }
        },

    }
})
const form2 = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
    },
    colLayout: {span: 24},
    labelWidth: 60,
    disabled: true,
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
            colLayout: {span: 12},
            options: {

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
        <dinert-form :form="form2" class="dialog"
            :search="false"
        />
    </div>
</template>
