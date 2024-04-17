<script setup lang="ts">
import {ref, markRaw} from 'vue'
import {RewriteFormProps} from '../../../../packages'
import {ChatRound, ChatLineRound, ChatDotRound} from '@element-plus/icons-vue'

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
            label: '评分',
            type: 'rate',
        },
        name2: {
            label: '半选',
            type: 'rate',
            options: {
                allowHalf: true
            }
        },
        name3: {
            label: '其它图标',
            type: 'rate',
            options: {
                voidIcon: markRaw(ChatRound),
                icons: [markRaw(ChatRound), markRaw(ChatLineRound), markRaw(ChatDotRound)],
                showScore: true,
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
