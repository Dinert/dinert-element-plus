import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'

export default defineComponent({
    name: 'dinert-checkbox',
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

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['checkbox']>(() => {
            const options = props.formItem.options || {}
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
                    options.map(item => {
                        return (<el-checkbox
                            key={item.label}
                            {...item}
                            label={item[this.options.value || 'value']}
                        >
                            {item[this.options.label || 'label']}
                        </el-checkbox>)
                    })
                }
            </el-checkbox-group>

        )
    }
})

