import {computed, defineComponent, PropType} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'

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
    setup(props) {

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['select-v2']>(() => {
            const options = props.formItem.options || []
            return options
        })

        return {
            options,
        }
    },
    render() {
        return (
            <el-select-v2
                v-model={this.form.model[this.formItem.key]}
                clearable
                {...this.options}
                v-slots={this.$slots}
                key={this.formItem.key}
            >

            </el-select-v2>
        )
    }
})

