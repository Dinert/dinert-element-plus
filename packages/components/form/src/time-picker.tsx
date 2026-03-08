import {computed, defineComponent, ref} from 'vue'


import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import lodash from 'lodash'


export default defineComponent({
    name: 'dinert-slider',
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
        const timePickerRef = ref(null)
        const options = computed(() => {
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
            timePickerRef,
            modelValue
        }
    },
    render() {
        return (
            <el-time-picker
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                startPlaceholder={'请选择开始时间'}
                endPlaceholder={'请选择结束时间'}
                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.timePickerRef = el}}
            >
            </el-time-picker>
        )
    }
})

