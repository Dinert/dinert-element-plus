import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'


export default defineComponent({
    name: 'dinert-input-number',
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
        const inputNumber = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['input-number']>(() => {
            const options = props.formItem.options || {}
            return options
        })

        return {
            options,
            inputNumber
        }
    },
    render() {

        return (
            <el-input-number
                v-model={this.form.model[this.formItem.key]}
                clearable
                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.inputNumber = el}}
            >
            </el-input-number>
        )
    }
})

