import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {PropType} from 'vue'
import type {ElSelect, SelectOptionProxy} from 'element-plus'

export default defineComponent({
    name: 'dinert-select',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<typeof ElSelect>>>,
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
        const options = this.options.options || []
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
                            label={(item as any)[this.options.label] || item.label}
                            value={(item as any)[this.options.value] || item.value}
                        >
                        </el-option>)
                    })
                }
            </el-select>
        )
    }
})

