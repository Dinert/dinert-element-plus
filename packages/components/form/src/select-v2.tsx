import {computed, defineComponent, PropType, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import lodash from 'lodash'

export default defineComponent({
    name: 'dinert-select-v2',
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

        const selectV2Ref = ref(null)

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['select-v2']>(() => {
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
            selectV2Ref,
            modelValue
        }
    },
    render() {
        return (
            <el-select-v2

                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                clearable
                {...this.options}
                v-slots={this.$slots}
                key={this.formItem.key}
                ref={el => {this.selectV2Ref = el}}
            >

            </el-select-v2>
        )
    }
})

