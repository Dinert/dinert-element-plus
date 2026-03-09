import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import lodash from 'lodash'


export default defineComponent({
    name: 'dinert-input',
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
    emits: ['EnterSearch', 'update:modelValue'],
    setup(props, {emit}) {
        const inputRef = ref(null)


        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['input']>(() => {
            const options = props.formItem.options || {}
            options.type = props.formItem.type === 'textarea' ? props.formItem.type : options.type
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
            inputRef,
            modelValue

        }
    },
    render() {

        return (
            <el-input
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                clearable
                show-word-limit={this.options.showWordLimit ?? true}
                onBlur={e => {
                    const val = e.target.value.trim()
                    this.modelValue = val
                }}
                onKeydown={(event: KeyboardEvent) => {
                    if ((this.form.enterSearch === undefined || this.form.enterSearch) && event.key === 'Enter') {
                        this.$emit('EnterSearch')
                    }
                }}

                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.inputRef = el}}
            >
            </el-input>
        )
    }
})

