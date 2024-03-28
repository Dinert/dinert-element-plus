import {computed, defineComponent} from 'vue'


import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'


export default defineComponent({
    name: 'dinert-switch',
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

        const options = computed(() => {
            const options = props.formItem.options || {}
            return options
        })

        return {
            options
        }
    },
    render() {
        return (
            <el-switch
                v-model={this.form.model[this.formItem.key]}
                {...this.options}
                v-slots={this.$slots}
            >
            </el-switch>
        )
    }
})

