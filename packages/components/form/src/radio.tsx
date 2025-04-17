import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'


export default defineComponent({
    name: 'dinert-radio',
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

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['radio']>(() => {
            const options = props.formItem.options || {}
            return options
        })

        return {
            options
        }
    },
    render() {
        const options = this.options.options || []

        return (
            <el-radio-group v-model={this.form.model[this.formItem.key]} onChange={this.options?.onChange}>
                {
                    options.map(item => {
                        if (this.formItem.type === 'radio-button') {
                            return (<el-radio-button
                                {...item}
                                v-slots={this.$slots}
                                value={item[this.options.value || 'value']}
                            >
                                {item[this.options.label || 'label']}

                            </el-radio-button>)
                        }
                        return (<el-radio
                            {...item}
                            v-slots={this.$slots}
                            value={item[this.options.value || 'value']}
                        >
                            {item[this.options.label || 'label']}

                        </el-radio>)
                    })
                }

            </el-radio-group>
        )
    }
})

