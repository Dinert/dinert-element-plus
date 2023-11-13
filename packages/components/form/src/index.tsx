import {defineComponent, ref, computed} from 'vue'

import type {RewriteFormProps, CustomFormItemProps} from '@/components/form/types'

import useWindowResize from '@/hooks/useWindowResize'

import {getUuid} from '@/utils/tools'

import {ElForm, ElTreeSelect} from 'element-plus'
import type {PropType} from 'vue'

const packUp = ref(true)
const isArrow = ref(false)
const formRef = ref<InstanceType<typeof ElForm>>()
const formTreeSelectRef = ref<InstanceType<typeof ElTreeSelect>>()
const formClass = ref('form_' + getUuid())

import '@/assets/scss/dinert-form.scss'


const labelMouseEnter = (e: MouseEvent, item: any) => {
    const el = (e.target as any).parentElement.parentElement
    const labelEl = window.getComputedStyle(el, null)
    const isRequried = item.rules ? 12 : item.beforeWidth || 0
    const labelWidth
        = parseInt(labelEl.getPropertyValue('max-width')) - isRequried
            - parseInt(labelEl.getPropertyValue('padding-right'))
    const tooltipWidth = (e.target as any).previousElementSibling.offsetWidth
    if (tooltipWidth >= labelWidth) {
        item.labelDisabled = false
    } else {
        item.labelDisabled = true
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
                    { this.formItemMap.map((item: CustomFormItemProps, index) => {
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
