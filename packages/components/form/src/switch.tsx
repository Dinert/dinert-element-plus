import {computed, defineComponent} from 'vue'


import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import type {SwitchProps} from 'element-plus'


export default defineComponent({
    name: 'dinert-switch',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<SwitchProps>>>,
            default: () => ({})
        },
    },
    setup(props) {

        const options = computed(() => {
            const options = props.formItem.options || {on: {}};
            (options as any).type = props.formItem.type
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
                {...this.options.on}
                v-slots={this.$slots}
                key={this.options.key}
            >
            </el-switch>
        )
    }
})

