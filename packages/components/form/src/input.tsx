import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {PropType} from 'vue'
import type {InputNumberProps, InputProps} from 'element-plus'


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
            (options).type = props.formItem.type
            return options
        })

        const onFn = computed(() => {
            return props.formItem.on
        })
        return {
            options,
            onFn
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
                // on={this.onFn}
                // onChange={this.onFn?.change}
                on={{
                    onChange: () => {
                        console.log('fdsafdsafs')
                    }
                }}
                v-slots={this.$slots}
            >
            </el-input>
        )
    }
})

