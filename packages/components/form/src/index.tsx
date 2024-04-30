import {defineComponent, ref, computed, nextTick, toRefs} from 'vue'
import CustomInput from './input'
import CustomInputNumber from './input-number'
import CustomInputAutocomplete from './input-autocomplete'
import CustomSelect from './select'
import CustomSwitch from './switch'
import CustomDate from './date'
import CustomRadio from './radio'
import CustomSelectTree from './tree-select'
import CustomRate from './rate'
import CustomCheckbox from './checkbox'
import CustomCascader from './cascader'

import useWindowResize from '@packages/hooks/useWindowResize'
import {labelMouseEnter, valueMouseEnter, getTooltipValue, formItemSlot, customPlaceholder} from '@packages/components/form/utils'

import {dataTransformRod, getUuid} from '@packages/utils/tools'
import {ElForm} from 'element-plus'

import {ArrowUp, ArrowDown} from '@element-plus/icons-vue'


import '@packages/assets/scss/dinert-form.scss'

import type {PropType} from 'vue'
import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'

// 展开还是收起状态
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
    emits: ['UnFold', 'SearchFn', 'ResetFn'],
    setup(props, {emit}) {


        const packUp = ref(true)
        const isArrow = ref(false)
        const formRef = ref<InstanceType<typeof ElForm>>()
        const formClass = ref('form_' + getUuid())
        const {form} = toRefs(props)
        const formItemMap = computed(() => {
            let index = 0
            const result: any = []
            Object.keys(form.value.formItem).forEach(key => {
                const value = form.value.formItem[key] as Partial<CustomFormItemProps>
                result.push({
                    ...value,
                    key: key,
                    sort: typeof value.sort === 'undefined' ? index : value.sort,
                })
                index += 10
            })

            result.sort((a: any, b: any) => {
                return a.sort - b.sort
            })

            return result
        })

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

        useWindowResize(() => {
            resizeForm()
        }, 10, true)


        const unfold = () => {
            if (packUp.value) {
                packUp.value = false
            } else {
                packUp.value = true
            }

            emit('UnFold', packUp.value)
        }


        return {
            formItemMap,
            unfold,
            formClass,

            formRef,
            packUp,
            isArrow
        }
    },
    render() {
        return (
            <el-form inline={true}
                {...this.form}
                ref={el => {this.formRef = el}}
                class={[this.formClass, this.packUp ? '' : 'packUp', 'dinert-form']}>
                <el-row {...this.form.row} class="el-form-left">
                    {/* eslint-disable-next-line array-callback-return, consistent-return */}
                    { this.formItemMap.map((item: CustomFormItemProps) => {
                        const style: any = {}
                        let vif = typeof item.vif === 'function' ? item.vif(this.form.model) : item.vif
                        vif = vif === undefined ? true : vif

                        let show = typeof item.show === 'function' ? item.show(this.form.model) : item.show
                        show = show === undefined ? true : show

                        if (!show) {
                            style.display = 'none'
                        }
                        if (vif) {
                            let rules = item.rules || []
                            rules = item.required ? [{required: true, trigger: 'blur', message: customPlaceholder(item.label, item.type)}].concat(rules as any) : rules
                            rules = (item.showLabel || this.form.showLabel) ? [] : rules

                            return (
                                <el-col
                                    style= {style}
                                    class={[item.type, item.key]}
                                    key={item.key}
                                    {
                                        ...{
                                            // xl: 3, // ≥1920px
                                            // lg: 4, // ≥1200px
                                            // md: 8, // ≥992px
                                            // sm: 12, // ≥768px
                                            // xs: 24, // <768px
                                            ...this.form.colLayout,
                                            ...item.colLayout
                                        }
                                    }
                                >
                                    <el-form-item
                                        key={item.key}
                                        prop={item.key}
                                        class={[item.labelWrap ? 'label-wrap' : '', item.showLabel || this.form.showLabel ? 'show-label' : '']}
                                        {...{
                                            ...item,
                                            rules: rules
                                        }}
                                        v-slots={{
                                            label: () => {
                                                return (
                                                    <dinert-tooltip
                                                        key={item.key}
                                                        content={item.label}
                                                        disabled={item.labelDisabled}
                                                        onLabelMouseEnter={(e: MouseEvent) => labelMouseEnter(e, item, this)}
                                                    >
                                                    </dinert-tooltip>
                                                )
                                            },
                                            default: () => {
                                                return (
                                                    <dinert-tooltip
                                                        key={item.key}
                                                        content={String(getTooltipValue(this.form.model[item.key], item))}
                                                        disabled={item.showLabel || this.form.showLabel ? true : item.valueDisabled === undefined ? item.tempValueDisabled : item.valueDisabled}
                                                        item={item}
                                                        onLabelMouseEnter={(e: MouseEvent) => valueMouseEnter(e, item, this.form.model[item.key], this)}
                                                        v-slots={
                                                            {
                                                                default: () => {


                                                                    const slots: any = {}

                                                                    let componentResult = <span>{dataTransformRod(this.form.model[item.key])}</span>


                                                                    if (this.$slots[formItemSlot(item.key)]) {
                                                                        componentResult = (this.$slots[formItemSlot(item.key)]?.({...item, model: this.form.model}))
                                                                    } else if (item.showLabel || (this.form.showLabel && [true, undefined].includes(item.showLabel))) {
                                                                        return componentResult
                                                                    } else if (['input', 'textarea'].includes(item.type)) {
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
                                                                        componentResult = (<CustomInput form={this.form} formItem={item} v-slots={slots}></CustomInput>)
                                                                    } else if (['input-number'].includes(item.type)) {
                                                                        componentResult = (<CustomInputNumber form={this.form} formItem={item}></CustomInputNumber>)
                                                                    } else if (['input-autocomplete'].includes(item.type)) {
                                                                        componentResult = (<CustomInputAutocomplete form={this.form} formItem={item}></CustomInputAutocomplete>)
                                                                    } else if (['select'].includes(item.type)) {
                                                                        componentResult = (<CustomSelect form={this.form} formItem={item}></CustomSelect>)
                                                                    } else if (['switch'].includes(item.type)) {
                                                                        componentResult = (<CustomSwitch form={this.form} formItem={item}></CustomSwitch>)
                                                                    } else if ([
                                                                        'datetime',
                                                                        'date',
                                                                        'dates',
                                                                        'week',
                                                                        'month',
                                                                        'year',
                                                                        'years',
                                                                        'datetimerange',
                                                                        'daterange',
                                                                        'monthrange',
                                                                        'yearrange',
                                                                    ].includes(item.type)) {
                                                                        componentResult = (<CustomDate form={this.form} formItem={item}></CustomDate>)
                                                                    } else if (['radio', 'radio-button'].includes(item.type)) {
                                                                        componentResult = (<CustomRadio form={this.form} formItem={item}></CustomRadio>)
                                                                    } else if (['tree-select'].includes(item.type)) {
                                                                        componentResult = (<CustomSelectTree form={this.form} formItem={item}></CustomSelectTree>)
                                                                    } else if (['rate'].includes(item.type)) {
                                                                        componentResult = (<CustomRate form={this.form} formItem={item}></CustomRate>)
                                                                    } else if (['checkbox', 'checkbox-button'].includes(item.type)) {
                                                                        componentResult = (<CustomCheckbox form={this.form} formItem={item}></CustomCheckbox>)
                                                                    } else if (['cascader'].includes(item.type)) {
                                                                        componentResult = (<CustomCascader form={this.form} formItem={item}></CustomCascader>)
                                                                    }


                                                                    return componentResult
                                                                },
                                                                defaultAfter: () => this.$slots[formItemSlot('after_' + item.key)]?.({...item, model: this.form.model}),
                                                                defaultBefore: () => this.$slots[formItemSlot('before_' + item.key)]?.({...item, model: this.form.model}),
                                                            }
                                                        }
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
                {
                    this.search
                && <el-row class="el-form-right">
                    {this.isArrow
                    && <el-button class="el-form-right-operation" text type="primary"
                        onClick={this.unfold}
                    >
                        <el-icon>
                            {this.packUp ? <ArrowUp/> : <ArrowDown/>}
                        </el-icon>
                        {this.packUp ? '收起' : '展开'}
                    </el-button>
                    }
                    {this.$slots.form_search?.()
                        || (
                            <>
                                <el-button type="primary" onClick={() => this.$emit('SearchFn')}>搜索</el-button>
                                <el-button type="primary" plain
                                    onClick={() => this.$emit('ResetFn')}
                                >重置</el-button>
                            </>
                        )
                    }
                </el-row>
                }
            </el-form>
        )
    }
})
