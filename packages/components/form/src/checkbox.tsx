import {computed, defineComponent, PropType} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'

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
            <el-checkbox-group v-model={this.form.model[this.formItem.key]} onChange={this.options?.onChange} {...{...this.options}}>
                {
                    options.map(item => {
                        if (this.formItem.type === 'checkbox-button') {
                            return (<el-checkbox-button
                                {...item}
                                v-slots={this.$slots}
                                value={item[this.options.value || 'value']}
                            >
                                {item[this.options.label || 'label']}
                            </el-checkbox-button>)
                        }

                        return (<el-checkbox
                            {...item}
                            v-slots={this.$slots}
                            value={item[this.options.value || 'value']}
                        >
                            {item[this.options.label || 'label']}
                        </el-checkbox>)
                    })
                }
            </el-checkbox-group>

        )
    }
})

