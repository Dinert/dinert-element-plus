import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'


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
    setup(props) {
        const inputAutocompleteRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['input-autocomplete']>(() => {
            const options = props.formItem.options || {}
            return options
        })

        return {
            options,
            inputAutocompleteRef
        }
    },
    render() {

        return (
            <div>
                <el-autocomplete
                    v-model={this.form.model[this.formItem.key]}
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

