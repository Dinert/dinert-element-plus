<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    num: number;
    num2: number;
    num3: number;
    num4: number;
}


const form = ref<RewriteFormProps<ModelProps>>({
    model: {
    },
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        num: {
            label: '滑块',
            type: 'slider',
            options: {

            }
        },
        num2: {
            label: '离散值',
            type: 'slider',
            options: {
                showStops: true,
                step: 10
            }
        },
        num3: {
            label: '输入框滑块',
            type: 'slider',
            options: {
                showInput: true,
            }
        },
        num4: {
            label: '显示标记',
            type: 'slider',
            options: {
                marks: {
                    0: '0°C',
                    8: '8°C',
                    37: '37°C',
                    50: {
                        style: {
                            color: '#1989FA',
                        },
                        label: '50%',
                    },
                }
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
    </div>
</template>
