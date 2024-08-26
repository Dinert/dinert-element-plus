import {computed, defineComponent, PropType, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'


export default defineComponent({
    name: 'dinert-rate',
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
        const reateRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['rate']>(() => {
            const options = props.formItem.options || {}
            return options
        })


        return {
            options,
            reateRef
        }
    },
    render() {
        return (
            <el-rate
                v-model={this.form.model[this.formItem.key]}
                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.reateRef = el}}
            >
            </el-rate>
        )
    }
})

