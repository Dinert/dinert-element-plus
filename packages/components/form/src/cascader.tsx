import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'

export default defineComponent({
    name: 'dinert-cascader',
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
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['cascader']>(() => {
            const options = props.formItem.options || {
                options: [],
                props: {
                    children: 'children',
                    value: 'value',
                    label: 'label',
                }
            }
            return options
        })

        return {
            options
        }
    },
    render() {
        return (
            <div>
                <el-cascader
                    v-model={this.form.model[this.formItem.key]}
                    clearable
                    placeholder={customPlaceholder(this.formItem.label, 'select')}
                    {...{
                        ...this.options,
                    }}
                    v-slots={this.$slots}
                    key={this.formItem.key}
                >
                </el-cascader>
            </div>
        )
    }
})

