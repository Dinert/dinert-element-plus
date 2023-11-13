import {defineComponent, ref, computed, nextTick} from 'vue'
import CustomInput from './input'
import CustomInputNumber from './input-number'
import CustomInputAutocomplete from './input-autocomplete'

import useWindowResize from '@/hooks/useWindowResize'
import {labelMouseEnter, valueMouseEnter, getTooltipValue, formItemSlot} from '@/components/form/utils'

import {getUuid} from '@/utils/tools'

import {ElForm} from 'element-plus'
import type {PropType} from 'vue'
import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'

import '@/assets/scss/dinert-form.scss'


const packUp = ref(true)
const isArrow = ref(false)
const formRef = ref<InstanceType<typeof ElForm>>()
const formClass = ref('form_' + getUuid())


const resizeForm = () => {
    const elFormLeft = document.querySelectorAll(`.${formClass.value} .el-form-left > div`)
    if (elFormLeft[0]) {
        nextTick(() => {
            const firstTop = elFormLeft[0].getBoundingClientRect().top
            const lastTop = elFormLeft[elFormLeft.length - 1].getBoundingClientRect().top
            const isHeight = firstTop !== lastTop
            if (isHeight) {
                isArrow.value = true
            } else {
                if (!packUp.value) {
                    packUp.value = true
                }
                isArrow.value = false
            }
        })

    }
}

export default defineComponent({
    name: 'dinert-form',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
        search: {
            type: Boolean,
            default: true
        }
    },
    emits: ['UnFold', 'Search', 'Reset'],
    setup(props) {

        useWindowResize(() => {
            resizeForm()
        }, 10, true)

        const formItemMap = computed(() => {
            const result: any = []
            let index = 0
            Object.keys(props.form.formItem).forEach(key => {
                const value = props.form.formItem[key] as Partial<CustomFormItemProps>
                result.push({
                    key: key,
                    ...value,
                    sort: typeof value.sort === 'undefined' ? index : value.sort,
                })
                index++
            })

            result.sort((a: any, b: any) => {
                return a.sort - b.sort
            })

            return result
        })

        return {
            formItemMap
        }
    },
    render() {


        return (
            <el-form inline={true} {...this.form} ref={formRef} class={[formClass.value, packUp.value ? '' : 'packUp', 'dinert-form']}>
                <el-row {...this.form.row} class="el-form-left">
                    {/* eslint-disable-next-line array-callback-return, consistent-return */}
                    { this.formItemMap.map((item: CustomFormItemProps) => {
                        if ([undefined, true].includes(item.show)) {
                            return (
                                <el-col class={[item.type, item.key]} key={item.key} {
                                    ...{
                                        xl: 3, // ≥1920px
                                        lg: 4, // ≥1200px
                                        md: 8, // ≥992px
                                        sm: 12, // ≥768px
                                        xs: 24, // <768px
                                        ...item.colLayout
                                    }
                                }
                                >
                                    <el-form-item
                                        key={item.key}
                                        prop={item.key}
                                        class={[item.labelWrap ? 'label-wrap' : '']}
                                        {...{
                                            ...item,
                                        }}
                                        v-slots={{
                                            label: () => {
                                                return (
                                                    <dinert-tooltip
                                                        key={item.key}
                                                        content={item.label}
                                                        disabled={item.disabled}
                                                        onLabelMouseEnter={(e: MouseEvent) => labelMouseEnter(e, item)}
                                                    >
                                                    </dinert-tooltip>
                                                )
                                            },
                                            default: () => {

                                                return (
                                                    <dinert-tooltip
                                                        key={item.key}
                                                        disabled={item.disabled}
                                                        content={getTooltipValue(this.form.model[item.key], item)}
                                                        item={item}
                                                        onLabelMouseEnter={(e: MouseEvent) => valueMouseEnter(e, item, this.form.model[item.key])}

                                                        v-slots={{
                                                            default: () => {
                                                                if (this.$slots[formItemSlot(item.key)]) {
                                                                    return (this.$slots[formItemSlot(item.key)]?.())
                                                                }
                                                                const slots: any = {}

                                                                if (['input', 'textarea'].includes(item.type)) {
                                                                    const appendSlot = this.$slots[formItemSlot(item.key + '_append')]?.()
                                                                    const appendSlotValue = appendSlot && appendSlot[0] && appendSlot[0].children

                                                                    const prependSlot = this.$slots[formItemSlot(item.key + '_prepend')]?.()
                                                                    const prependSlotValue = prependSlot && prependSlot[0] && prependSlot[0].children
                                                                    if (appendSlotValue) {
                                                                        slots.append = () => this.$slots[formItemSlot(item.key + '_append')]?.()
                                                                    }
                                                                    if (prependSlotValue) {
                                                                        slots.prepend = () => this.$slots[formItemSlot(item.key + '_prepend')]?.()
                                                                    }

                                                                    return (<CustomInput form={this.form} formItem={item} v-slots={slots}></CustomInput>)
                                                                } else if (['input-number'].includes(item.type)) {
                                                                    return (<CustomInputNumber form={this.form} formItem={item}></CustomInputNumber>)
                                                                } else if (['input-autocomplete'].includes(item.type)) {
                                                                    return (<CustomInputAutocomplete form={this.form} formItem={item}></CustomInputAutocomplete>)
                                                                }

                                                                return ''
                                                            }
                                                        }}
                                                    >
                                                    </dinert-tooltip>
                                                )
                                            }
                                        }}
                                    >
                                    </el-form-item>
                                </el-col>
                            )
                        }

                    })
                    }
                </el-row>
            </el-form>
        )
    }
})
