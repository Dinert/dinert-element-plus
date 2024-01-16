import {computed, defineComponent} from 'vue'
import {Calendar} from '@element-plus/icons-vue'
import {DatePickerProps} from 'element-plus'
import {customPlaceholder} from '../utils'


import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {PropType} from 'vue'


const datePickerPlaceholder = (_label: string, item: any) => {
    const type = item.type
    if (['week'].includes(type)) {
        return '周'
    } else if (['month', 'monthrange'].includes(type)) {
        return '月份'
    } else if (['year', 'yearrange'].includes(type)) {
        return '年份'
    }
    return '时间'
}

const customValuFormat = (options: any): string => {
    if (['datetime', 'datetimerange'].includes(options.type)) {
        return 'YYYY-MM-DD HH:mm:ss'
    } else if (options.type === 'year') {
        return 'YYYY'
    } else if (['month', 'monthrange'].includes(options.type)) {
        return 'YYYY-MM'
    } else if (['date', 'daterange', 'dates'].includes(options.type)) {
        return 'YYYY-MM-DD'
    }
    return ''
}
export default defineComponent({
    name: 'dinert-date',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<DatePickerProps>>>,
            default: () => ({})
        },
    },
    setup(props) {

        const options = computed(() => {
            const options = props.formItem.options || {on: {}};
            (options as any).type = props.formItem.type
            return options
        })

        return {
            options
        }
    },
    render() {

        return (
            <div>
                <el-date-picker
                    v-model={this.form.model[this.formItem.key]}
                    prefixIcon={Calendar}
                    clearable
                    placeholder={customPlaceholder(datePickerPlaceholder(this.options.label || '', this.options), 'select')}
                    startPlaceholder={customPlaceholder(datePickerPlaceholder(this.options.label || '', this.options), 'input', '开始')}
                    endPlaceholder={customPlaceholder(datePickerPlaceholder(this.options.label || '', this.options), 'input', '结束')}
                    unlink-panels={true}
                    valueFormat={customValuFormat(this.options)}
                    format={this.options.type === 'week' ? 'YYYY第ww周' : this.options.format}
                    {...this.options}
                    {...this.options.on}
                    v-slots={this.$slots}
                >
                </el-date-picker>
            </div>

        )
    }
})

