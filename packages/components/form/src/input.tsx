import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import type {InputProps} from 'element-plus'


export default defineComponent({
    name: 'dinert-input',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<InputProps>, any>>,
            default: () => ({})
        },
    },
    setup(props) {
        const options = computed(() => {
            const options = props.formItem.options || {};
            (options).type = props.formItem.type
            return options
        })


        return {
            options,
        }
    },
    render() {
        return (
            <el-input
                v-model={this.form.model[this.formItem.key]}
                clearable
                show-word-limit={this.options.showWordLimit ? true : this.options.showWordLimit}
                placeholder={customPlaceholder(this.formItem.label)}
                {...this.options}
                onChange={this.options.on?.onChange}
                onFocus={this.options.on?.onFocus}
                onBlur={this.options.on?.onBlur}
                onClear={this.options.on?.onClear}
                onInput={this.options.on?.onInput}
                v-slots={this.$slots}
            >
            </el-input>
        )
    }
})

