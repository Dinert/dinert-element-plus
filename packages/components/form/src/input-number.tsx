import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'

import type {PropType} from 'vue'
import {InputNumberProps} from 'element-plus'
import {customPlaceholder} from '../utils'


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
            <el-input-number
                v-model={this.form.model[this.formItem.key]}
                clearable
                placeholder={customPlaceholder(this.formItem.label)}
                show-word-limit={this.options.showWordLimit ? true : this.options.showWordLimit}
                {...this.options}
                on={this.options.on}
                v-slots={this.$slots}
            >
            </el-input-number>
        )
    }
})

