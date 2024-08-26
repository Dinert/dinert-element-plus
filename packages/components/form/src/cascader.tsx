import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'

export default defineComponent({
    name: 'dinert-cascader',
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

        const cascaderRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['cascader']>(() => {
            const options = props.formItem.options || {
                options: [],
                props: {
                    children: 'children',
                    value: 'value',
                    label: 'label',
                    expandTrigger: 'hover'
                }
            }
            return options
        })

        return {
            options,
            cascaderRef
        }
    },
    render() {
        return (
            <div>
                <el-cascader
                    v-model={this.form.model[this.formItem.key]}
                    clearable
                    {...{
                        ...this.options,
                        props: {
                            expandTrigger: 'hover',
                            ...this.options.props
                        }
                    }}
                    v-slots={this.$slots}
                    key={this.formItem.key}
                    ref={el => {this.cascaderRef = el}}
                >
                </el-cascader>
            </div>
        )
    }
})

