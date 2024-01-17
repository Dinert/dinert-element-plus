import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import type {AutocompleteProps} from 'element-plus'


export default defineComponent({
    name: 'dinert-input-autocomplete',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<AutocompleteProps>>>,
            default: () => ({})
        },
    },
    setup(props) {
        const options = computed(() => {
            const options = props.formItem.options || {on: {}}
            return options
        })

        return {
            options
        }
    },
    render() {

        return (
            <div>
                <el-autocomplete
                    v-model={this.form.model[this.formItem.key]}
                    clearable
                    placeholder={customPlaceholder(this.formItem.label)}
                    fetch-suggestions={this.options.fetchSuggestions || (() => ({}))}
                    {...this.options}
                    {...this.options.on}
                    v-slots={this.$slots}
                >
                </el-autocomplete>
            </div>
        )
    }
})

