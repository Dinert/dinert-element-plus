import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'

import type {PropType} from 'vue'
import {InputProps} from 'element-plus'
import {customPlaceholder} from '../utils'


export default defineComponent({
    name: 'dinert-input',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<InputProps>>>,
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
            <el-input
                v-model={this.form.model[this.formItem.key]}
                clearable
                show-word-limit={this.options.showWordLimit ? true : this.options.showWordLimit}
                placeholder={customPlaceholder(this.formItem.label)}
                {...this.options}
                on={this.options.on}
                v-slots={this.$slots}
            >
            </el-input>
        )
    }
})

