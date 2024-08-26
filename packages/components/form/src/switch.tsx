import {computed, defineComponent, ref} from 'vue'


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
        const switchRef = ref(null)
        const options = computed(() => {
            const options = props.formItem.options || {}
            return options
        })

        return {
            options,
            switchRef
        }
    },
    render() {
        return (
            <el-switch
                v-model={this.form.model[this.formItem.key]}
                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.switchRef = el}}
            >
            </el-switch>
        )
    }
})

