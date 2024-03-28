import {computed, defineComponent, PropType} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'

export default defineComponent({
    name: 'dinert-select',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps>,
            default: () => ({})
        },
    },
    setup(props) {

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['select']>(() => {
            const options = props.formItem.options || []
            return options
        })

        return {
            options,
        }
    },
    render() {
        const options = this.options.options || []
        return (
            <el-select
                v-model={this.form.model[this.formItem.key]}
                clearable
                placeholder={customPlaceholder(this.formItem.label, 'select')}
                {...this.options}
                v-slots={this.$slots}
                key={this.formItem.key}
            >
                {
                    options.map(item => {
                        return (<el-option
                            key={item.value}
                            {...item}
                            label={item[(this.options.label || 'label')]}
                            value={item[(this.options.value || 'value')]}
                        >
                        </el-option>)
                    })
                }
            </el-select>
        )
    }
})

