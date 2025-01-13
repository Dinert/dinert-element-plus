import {computed, defineComponent, ref, withModifiers} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import type {PropType} from 'vue'


export default defineComponent({
    name: 'dinert-input',
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
    emits: ['EnterSearch'],
    setup(props) {
        const inputRef = ref(null)

        const options = computed<CustomFormItemProps[keyof CustomFormItemProps]['input']>(() => {
            const options = props.formItem.options || {}
            options.type = props.formItem.type === 'textarea' ? props.formItem.type : options.type
            return options
        })


        return {
            options,
            inputRef
        }
    },
    render() {
        return (
            <el-input
                v-model={this.form.model[this.formItem.key]}
                clearable
                show-word-limit={this.options.showWordLimit === undefined ? true : this.options.showWordLimit}
                onBlur={e => {this.form.model[this.formItem.key] = e.target.value.trim()}}
                onKeyup={withModifiers(() => {
                    if (this.form.enterSearch === undefined || this.form.enterSearch) {
                        this.$emit('enterSearch')
                    }
                }, ['enter'])}
                {...{...this.options}}
                v-slots={this.$slots}
                ref={el => {this.inputRef = el}}
            >
            </el-input>
        )
    }
})

