import {computed, defineComponent, ref} from 'vue'


import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import lodash from 'lodash'


export default defineComponent({
    name: 'dinert-switch',
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
        const switchRef = ref(null)
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
            switchRef,
            modelValue
        }
    },
    render() {
        return (
            <el-switch
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.switchRef = el}}
            >
            </el-switch>
        )
    }
})

