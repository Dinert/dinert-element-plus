import {computed, defineComponent, PropType, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import lodash from 'lodash'


export default defineComponent({
    name: 'dinert-rate',
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
        const reateRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['rate']>(() => {
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
            reateRef,
            modelValue
        }
    },
    render() {
        return (
            <el-rate
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.reateRef = el}}
            >
            </el-rate>
        )
    }
})

