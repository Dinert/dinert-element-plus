import {computed, defineComponent} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {PropType} from 'vue'
import type {RadioProps} from 'element-plus'


export default defineComponent({
    name: 'dinert-radio',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<RadioProps>>>,
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
        const options = this.options.options || []

        return (
            <el-radio-group v-model={this.form.model[this.formItem.key]}>
                {
                    (options as any[]).map((item: RadioProps & {value: any}) => {
                        return (<el-radio
                            label={item.value}
                            {...this.options.on}
                            v-slots={this.$slots}
                        >
                            {item.label}
                        </el-radio>)
                    })
                }

            </el-radio-group>
        )
    }
})

