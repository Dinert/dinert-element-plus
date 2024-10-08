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
            label: '时间选择',
            type: 'time-select',
            options: {

            }
        },
        num2: {
            label: '固定时间点',
            type: 'time-select',
            options: {
                start: '08:30',
                end: '18:30',
                step: '00:15',
            }
        },
        num3: {
            label: '禁用时间',
            type: 'time-select',
            options: {
                start: '08:30',
                end: '18:30',
                step: '00:15',
                maxTime: '12:00'
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
