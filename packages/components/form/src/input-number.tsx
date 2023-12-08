import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'


import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {InputNumberProps} from 'element-plus'
import type {PropType} from 'vue'


export default defineComponent({
    name: 'dinert-input-number',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<InputNumberProps>>>,
            default: () => ({})
        },
    },
    setup(props) {

        const options = computed(() => {
            const options = props.formItem.options || {on: {}}
            return options
        })

        return {
            options,
        }
    },
    render() {

        return (
            <el-input-number
                v-model={this.form.model[this.formItem.key]}
                clearable
                placeholder={customPlaceholder(this.formItem.label)}
                {...this.options}
                onChange={this.options.on?.onChange}
                onFocus={this.options.on?.onFocus}
                onBlur={this.options.on?.onBlur}
                v-slots={this.$slots}
            >
            </el-input-number>
        )
    }
})

