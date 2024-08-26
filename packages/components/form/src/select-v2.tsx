import {computed, defineComponent, PropType, ref} from 'vue'

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

        const selectV2Ref = ref(null)

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['select-v2']>(() => {
            const options = props.formItem.options || []
            return options
        })

        return {
            options,
            selectV2Ref
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
                ref={el => {this.selectV2Ref = el}}
            >

            </el-select-v2>
        )
    }
})

