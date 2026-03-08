import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import lodash from 'lodash'


export default defineComponent({
    name: 'dinert-input-autocomplete',
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
        const inputAutocompleteRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['input-autocomplete']>(() => {
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
            inputAutocompleteRef,
            modelValue
        }
    },
    render() {

        return (
            <div>
                <el-autocomplete
                    modelValue={this.modelValue}
                    onUpdate:modelValue={(val: any) => {this.modelValue = val}}
                    clearable
                    fetch-suggestions={this.options.fetchSuggestions || (() => ({}))}
                    {...this.options}
                    v-slots={this.$slots}
                    ref={el => {this.inputAutocompleteRef = el}}
                >
                </el-autocomplete>
            </div>
        )
    }
})

