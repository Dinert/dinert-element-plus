<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    num: string;
    num2: string;
    num3: string;
    num4: string;
}


const form = ref<RewriteFormProps<ModelProps>>({
    model: {
    },
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        num: {
            label: '时间选择器',
            type: 'time-picker',
            options: {

            }
        },
        num2: {
            label: '箭头选择',
            type: 'time-picker',
            options: {
                arrowControl: true,
            }
        },
        num3: {
            label: '时间范围',
            type: 'time-picker',
            options: {
                isRange: true
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
