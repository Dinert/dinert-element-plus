import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

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
            const options = props.formItem.options || {};
            (options as any).type = props.formItem.type
            return options
        })

        return {
            options,
        }
    },
    render() {
        console.log(this.options.showWordLimit, 'this.options.showWordLimit')
        return (
            <el-input
                v-model={this.form.model[this.formItem.key]}
                clearable
                show-word-limit={this.options.showWordLimit ? true : this.options.showWordLimit}
                placeholder={customPlaceholder(this.formItem.label)}
                {...this.options}
                v-slots={this.$slots}
            >
            </el-input>
        )
    }
})

