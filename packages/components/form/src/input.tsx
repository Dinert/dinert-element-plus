import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'


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
    setup(props) {
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['input']>(() => {
            const options = props.formItem.options || {}
            return options
        })

        return {
            options,
        }
    },
    render() {
        return (
            <el-input
                v-model={this.form.model[this.formItem.key]}
                clearable
                show-word-limit={this.options.showWordLimit === undefined ? true : this.options.showWordLimit}
                onBlur={e => {this.form.model[this.formItem.key] = e.target.value.trim()}}
                {...{...this.options}}
                v-slots={this.$slots}
            >
            </el-input>
        )
    }
})

