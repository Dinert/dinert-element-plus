import {computed, defineComponent, ref} from 'vue'


import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'


export default defineComponent({
    name: 'dinert-slider',
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
        const timeSelectRef = ref(null)
        const options = computed(() => {
            const options = props.formItem.options || {}
            return options
        })

        return {
            options,
            timeSelectRef
        }
    },
    render() {
        return (
            <el-time-select
                v-model={this.form.model[this.formItem.key]}
                startPlaceholder={'请选择开始时间'}
                endPlaceholder={'请选择结束时间'}
                {...this.options}
                v-slots={this.$slots}
                ref={el => {this.timeSelectRef = el}}
            >
            </el-time-select>
        )
    }
})

