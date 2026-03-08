import {computed, defineComponent, ref} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'
import lodash from 'lodash'

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
    emits: ['update:modelValue'],
    setup(props, {emit}) {
        const treeSelectRef = ref(null)
        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['tree-select']>(() => {
            const options = props.formItem.options || {options: [], data: []}
            options.data = options.options
            return options
        })

        const modelValue = computed({
            get: () => lodash.get(props.form.model, props.formItem.key),
            set: val => {
                lodash.set(props.form.model, props.formItem.key, val)
                emit('update:modelValue', val)
            }
        })


        return {
            options,
            treeSelectRef,
            modelValue
        }
    },
    render() {
        return (
            <el-tree-select
                modelValue={this.modelValue}
                onUpdate:modelValue={(val: any) => {this.modelValue = val}}
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

