import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {PropType} from 'vue'
import type {CheckboxProps, CheckboxGroupProps} from 'element-plus'

export default defineComponent({
    name: 'dinert-checkbox',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<CheckboxGroupProps>>>,
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
            <el-checkbox-group v-model={this.form.model[this.formItem.key]}>
                {
                    options.map((item: CheckboxProps & {value: any}) => {
                        return (<el-checkbox
                            key={item.label}
                            {...item}
                            label={(item as any)[this.options.value] || item.value}
                        >
                            {(item as any)[this.options.label] || item.label}
                        </el-checkbox>)
                    })
                }
            </el-checkbox-group>

        )
    }
})

