import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import type {CheckboxGroupProps} from 'element-plus'

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
        const options = (this.options.options || []) as CheckboxGroupProps[]
        return (
            <el-checkbox-group v-model={this.form.model[this.formItem.key]}>
                {
                    options.map((item: CheckboxGroupProps) => {
                        return (<el-checkbox
                            key={item.label}
                            {...item}
                            label={item[(this.options.value as any) || 'value']}
                        >
                            {item[this.options.label || 'label']}
                        </el-checkbox>)
                    })
                }
            </el-checkbox-group>

        )
    }
})

