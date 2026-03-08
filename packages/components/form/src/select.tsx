import {computed, defineComponent, PropType} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import lodash from 'lodash'

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
    emits: ['update:modelValue'],
    setup(props, {emit, slots}) {
        const selectRef = (null)

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['select']>(() => {
            const options = props.formItem.options || []
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
            selectRef,
            modelValue
        }
    },
    render() {
        const options = this.options.options || []
        return (
            <el-select
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
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

