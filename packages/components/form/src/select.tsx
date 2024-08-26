import {computed, defineComponent, PropType} from 'vue'

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
        const selectRef = (null)

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['select']>(() => {
            const options = props.formItem.options || []
            return options
        })

        return {
            options,
            selectRef
        }
    },
    render() {
        const options = this.options.options || []
        return (
            <el-select
                v-model={this.form.model[this.formItem.key]}
                clearable
                {...this.options}
                v-slots={this.$slots}
                key={this.formItem.key}
                ref={el => {this.selectRef = el}}
            >
                {
                    options.map(item => {
                        return (<el-option
                            key={item.value}
                            {...{
                                ...item,
                                label: item[(this.options.label || 'label')],
                                value: this.options.value === 'object' ? item : item[(this.options.value || 'value')]
                            }}

                        >
                        </el-option>)
                    })
                }
            </el-select>
        )
    }
})

