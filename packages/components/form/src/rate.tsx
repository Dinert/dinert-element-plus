import {computed, defineComponent, PropType} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {RateProps} from 'element-plus'


export default defineComponent({
    name: 'dinert-rate',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        formItem: {
            type: Object as PropType<CustomFormItemProps<Partial<RateProps>, any>>,
            default: () => ({})
        },
    },
    setup(props) {
        const options = computed(() => {
            const options = props.formItem.options || {};
            (options).type = props.formItem.type
            return options
        })


        return {
            options,
        }
    },
    render() {
        return (
            <el-rate
                v-model={this.form.model[this.formItem.key]}
                {...this.options}
                onChange={this.options.on?.onChange}
                v-slots={this.$slots}
            >
            </el-rate>
        )
    }
})

