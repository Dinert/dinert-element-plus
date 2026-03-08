import {computed, defineComponent, PropType} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import lodash from 'lodash'

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
    emits: ['update:modelValue'],
    setup(props, {emit}) {

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['checkbox']>(() => {
            const options = props.formItem.options || {}
            return options
        })

        const modelValue = computed({
            get: () => lodash.get(props.form.model, props.formItem.key),
            set: val => {
                lodash.set(props.form.model, props.formItem.key, val)
                emit('update:modelValue', val)
            }
        })

        return {
            options,
            modelValue
        }
    },
    render() {
        const options = this.options.options || []
        return (
            <el-checkbox-group
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                onChange={this.options?.onChange} {...{...this.options}}>
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

