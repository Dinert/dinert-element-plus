import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import lodash from 'lodash'

export default defineComponent({
    name: 'dinert-cascader',
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

        const cascaderRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['cascader']>(() => {
            const options = props.formItem.options || {
                options: [],
                props: {
                    children: 'children',
                    value: 'value',
                    label: 'label',
                    expandTrigger: 'hover'
                }
            }
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
            cascaderRef,
            modelValue
        }
    },
    render() {
        return (
            <div>
                <el-cascader
                    modelValue={this.modelValue}
                    onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                    clearable
                    {...{
                        ...this.options,
                        props: {
                            expandTrigger: 'hover',
                            ...this.options.props
                        }
                    }}
                    v-slots={this.$slots}
                    key={this.formItem.key}
                    ref={el => {this.cascaderRef = el}}
                >
                </el-cascader>
            </div>
        )
    }
})

