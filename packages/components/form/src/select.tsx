import {computed, defineComponent, PropType} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {ElSelect, SelectOptionProxy} from 'element-plus'

type FormItem = CustomFormItemProps<Partial<typeof ElSelect>, SelectOptionProxy[]>

export default defineComponent({
    name: 'dinert-select',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<FormItem>,
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
        const options = (this.options.options as SelectOptionProxy[]) || []
        return (
            <el-select
                v-model={this.form.model[this.formItem.key]}
                clearable
                placeholder={customPlaceholder(this.formItem.label, 'select')}

                {...this.options}
                {...this.options.on}
                v-slots={this.$slots}
                key={this.formItem.key}
            >
                {
                    options.map((item: SelectOptionProxy) => {
                        return (<el-option
                            key={item.value}
                            {...item}
                            label={item[(this.options.label || 'label')]}
                            value={item[((this.options.value as any) || 'value')]}
                        >
                        </el-option>)
                    })
                }
            </el-select>
        )
    }
})

