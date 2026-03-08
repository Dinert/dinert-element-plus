import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import lodash from 'lodash'


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
    emits: ['update:modelValue'],
    setup(props, {emit}) {

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['radio']>(() => {
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
            <el-radio-group
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                onChange={this.options?.onChange} {...{...this.options}}>
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

