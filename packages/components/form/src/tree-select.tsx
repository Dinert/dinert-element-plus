import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

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

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['tree-select']>(() => {
            const options = props.formItem.options || {options: [], data: []};
            (options as any).data = (options as any).options
            return options
        })

        return {
            options
        }
    },
    render() {
        return (
            <el-tree-select
                v-model={this.form.model[this.formItem.key]}
                clearable
                placeholder={customPlaceholder(this.formItem.label, 'select')}
                filterable={this.options.filterable === undefined ? true : this.options.filterable}
                node-key={this.options.nodeKey}
                {...this.options}
                v-slots={this.$slots}
                key={this.formItem.key}
            >
            </el-tree-select>
        )
    }
})

