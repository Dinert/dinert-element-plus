import {computed, defineComponent} from 'vue'
import {customPlaceholder} from '../utils'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'
import type {PropType} from 'vue'
import type {ElTreeSelect} from 'element-plus'

export default defineComponent({
    name: 'dinert-tree-select',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<typeof ElTreeSelect>>>,
            default: () => ({})
        },
    },
    setup(props) {

        const options = computed(() => {
            const options = props.formItem.options || {on: {}, options: [], data: []}
            options.data = options.options
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
                {...this.options.on}
                v-slots={this.$slots}
                key={this.formItem.key}
            >
            </el-tree-select>
        )
    }
})

