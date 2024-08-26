import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'

export default defineComponent({
    name: 'dinert-tree-select',
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
        const treeSelectRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['tree-select']>(() => {
            const options = props.formItem.options || {options: [], data: []}
            options.data = options.options
            return options
        })

        return {
            options,
            treeSelectRef
        }
    },
    render() {
        return (
            <el-tree-select
                v-model={this.form.model[this.formItem.key]}
                clearable
                filterable={this.options.filterable === undefined ? true : this.options.filterable}
                node-key={this.options.nodeKey}
                {...this.options}
                v-slots={this.$slots}
                key={this.formItem.key}
                ref={el => {this.treeSelectRef = el}}
            >
            </el-tree-select>
        )
    }
})

