<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    hours: string;
    hours2: string;
    week: string;
    day: string;
    day2: string;
    day3: string;
    month: string;
    month2: string;
    year: string;
    years: string;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {},
    colLayout: {span: 24},
    labelWidth: 'auto',
    formItem: {
        hours: {
            label: '小时',
            type: 'datetime',
        },
        hours2: {
            label: '小时双选',
            type: 'datetimerange',
        },
        day: {
            label: '天',
            type: 'date',
        },
        day2: {
            label: '天双选',
            type: 'daterange',
        },
        day3: {
            label: '多个天',
            type: 'dates',
        },
        week: {
            label: '周',
            type: 'week',
        },
        month: {
            label: '月',
            type: 'month',
        },
        month2: {
            label: '月双选',
            type: 'monthrange',
        },
        year: {
            label: '年',
            type: 'year',
        },
        years: {
            label: '多个年份',
            type: 'years',
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
