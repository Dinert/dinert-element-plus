import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {PropType} from 'vue'
import type {CascaderProps} from 'element-plus'

export default defineComponent({
    name: 'dinert-cascader',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<CascaderProps>>>,
            default: () => ({})
        },
    },
    setup(props) {

        const options = computed(() => {
            const options = props.formItem.options || {
                on: {}, options: [], props: {
                    children: 'children',
                    value: 'value',
                    label: 'label'
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
                    {...this.options}
                    {...this.options.on}
                    v-slots={this.$slots}
                    key={this.formItem.key}
                >
                    321
                </el-cascader>
            </div>
        )
    }
})

