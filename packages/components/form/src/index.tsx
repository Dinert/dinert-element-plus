import {defineComponent, ref, computed, nextTick, toRefs, onBeforeUpdate, withModifiers} from 'vue'
import CustomInput from './input'
import CustomInputNumber from './input-number'
import CustomInputAutocomplete from './input-autocomplete'
import CustomSelect from './select'
import CustomSelectV2 from './select-v2'
import CustomSwitch from './switch'
import CustomDate from './date'
import CustomRadio from './radio'
import CustomSelectTree from './tree-select'
import CustomRate from './rate'
import CustomCheckbox from './checkbox'
import CustomCascader from './cascader'
import CustomSlider from './slider'
import CustomTimePicker from './time-picker'
import CustomTimeSelect from './time-select'

import useWindowResize from '@packages/hooks/useWindowResize'
import {labelMouseEnter, valueMouseEnter, getTooltipValue, getSpanValue, formItemSlot, customPlaceholder, renderSlot} from '@packages/components/form/utils'

import {dataTransformRod, getUuid} from '@packages/utils/tools'
import {ElForm} from 'element-plus'

import {ArrowUp, ArrowDown} from '@element-plus/icons-vue'
import lodash from 'lodash'


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
        const {form} = toRefs(props)
        const packUp = ref(form.value.packUp === undefined)
        const isArrow = ref(false)
        const isTooltip = ref(false)
        const tooltipContent = ref('')
        const formRef = ref<InstanceType<typeof ElForm>>()
        const tempRef = ref<any>(null)

        const formTypeRef = ref<any>({})
        const setFormTypeRefs = (type: string, el: any) => {
            formTypeRef.value[type] = el
        }
        const formClass = ref('form_' + getUuid())

        onBeforeUpdate(() => {
            formTypeRef.value = {}
        })

        const formItemMap = computed(() => {
            const result: any = []
            Object.keys(form.value.formItem).forEach(key => {
                const value = form.value.formItem[key] as Partial<CustomFormItemProps>
                result.push({
                    ...value,
                    key: key,
                })
            })

            result.sort((a: any, b: any) => {
                return (a.sort || Infinity) - (b.sort || Infinity)
            })

            return result
        })

        const resizeForm = () => {
            let elFormLeft = document.querySelectorAll(`.${formClass.value} .dinert-form-left > div`) as any
            if (elFormLeft[0]) {
                isArrow.value = false
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
                    elFormLeft = null
                })

            }
        }

        useWindowResize(() => {
            resizeForm()
        }, 100, true)


        const unfold = () => {
            if (packUp.value) {
                packUp.value = false
            } else {
                packUp.value = true
            }

            emit('UnFold', packUp.value)
        }

        const onFormItemMouseenter = (item: CustomFormItemProps, {resultVal, showValue, showContent}: {resultVal: any, showValue: any, showContent: any}) => {
            tempRef.value = formTypeRef.value[item.key]
            let customRef = tempRef.value
            let coRef = null as any

            let newVal = lodash.isArray(resultVal) ? resultVal.join(',') : resultVal
            newVal = typeof newVal === 'number' ? newVal + '' : newVal

            if(showValue || showContent || showContent === false) {

            }else if(customRef){
                if(['input'].includes(item.type)) {
                    coRef = customRef.inputRef.ref
                }else if(['input-number'].includes(item.type)) {
                    coRef = customRef.$el.querySelector('.el-input__inner')
                }else if(['select'].includes(item.type)) {
                    coRef = customRef.selectRef.$el.querySelector('.el-select__selected-item.el-select__placeholder')
                    if(item.options?.multiple && resultVal?.length) {
                        tooltipContent.value = resultVal
                        isTooltip.value = true
                    }
                }else if(['select-v2'].includes(item.type)) {
                    coRef = customRef.selectV2Ref.$el.querySelector('.el-select__selected-item.el-select__placeholder')
                    if(item.options?.multiple && resultVal?.length) {
                        tooltipContent.value = resultVal
                        isTooltip.value = true
                    }
                }else if(['datetime',
                        'date',
                        'dates',
                        'week',
                        'month',
                        'year',
                        'years',
                        'datetimerange',
                        'daterange',
                        'monthrange',
                        'yearrange'].includes(item.type)) {
                    if(item.type.includes('range')) {
                        coRef = customRef.$el?.querySelector('.el-range-input')
                    }else {
                        coRef = customRef.$el?.querySelector('.el-input__inner')
                    }
                }else if(['cascader'].includes(item.type)) {
                    coRef = customRef.$el?.querySelector('.el-input__inner')
                    const cascaderRef = customRef.cascaderRef
                    const nodes = cascaderRef.cascaderPanelRef.checkedNodes

                    if(nodes?.length) {
                        newVal = nodes[0].text
                        if(item.options?.props?.multiple) {
                            newVal = nodes.map((item: any) => item.text).join(',')
                            tooltipContent.value = newVal
                            isTooltip.value = true
                        }
                    }

                }

                if(coRef?.scrollWidth > coRef?.clientWidth && newVal) {
                    tooltipContent.value = newVal
                    isTooltip.value = true
                }
            }



        }
        const onFormItemMouseleave = (item: CustomFormItemProps) => {
            tempRef.value = null
            isTooltip.value = false
        }



        return {
            formItemMap,
            formClass,
            formTypeRef,
            formRef,
            packUp,
            isArrow,
            isTooltip,
            tempRef,
            tooltipContent,

            setFormTypeRefs,
            unfold,
            onFormItemMouseenter,
            onFormItemMouseleave,
        }
    },
    render() {
        return (
            <el-form inline={true}
                {...{...this.form, disabled: undefined}}
                ref={el => {this.formRef = el}}
                class={[this.formClass, this.packUp ? '' : 'packUp', 'dinert-form']}
                onSubmit={withModifiers(() => undefined, ['stop', 'prevent'])}
                key={this.form.key}>
                <el-tooltip
                    placement='top'
                    content={this.tooltipContent}
                    virtual-triggering
                    virtual-ref={this.tempRef}
                    trigger='contextmenu'
                    v-model:visible={this.isTooltip}
                />
                <el-row {...this.form.row} class="dinert-form-left">
                    {/* eslint-disable-next-line array-callback-return, consistent-return */}
                    { this.formItemMap.map((item: CustomFormItemProps, index: number) => {
                        const style: any = {}

                        // 处理vif
                        const formVif = typeof item.vif === 'function' ? item.vif(this.form.model) : item.vif
                        const itemVif= typeof item?.vif === 'function' ? item?.vif(this.form.model) : item?.vif
                        let vif = itemVif === undefined ? itemVif || formVif : itemVif
                            vif = vif === undefined ? true : vif

                        // 处理show
                        let show = typeof item.show === 'function' ? item.show(this.form.model) : item.show
                        show = show === undefined ? true : show


                        const isCustomPlaceholder = item.options?.placeholder
                        const itemLabel = typeof item.label === 'function' ? item.label(this.form.model) : item.label
                        const placeholder = isCustomPlaceholder || customPlaceholder(itemLabel, item.type)


                        if (!show) {
                            style.display = 'none'
                        }
                        if (vif) {

                            // 处理是否显示直接显示组件的值
                            const formShowValue = typeof this.form.showValue === 'function' ? this.form.showValue(this.form.model, {...item, index}) : this.form.showValue
                            let itemShowValue = typeof item.showValue === 'function' ? item.showValue(this.form.model, {...item, index}) : item.showValue
                            const showValue = itemShowValue === undefined ? itemShowValue || formShowValue : itemShowValue

                            // 处理是否必填
                            const formRequired = typeof this.form.required === 'function' ? this.form.required(this.form.model) : this.form.required
                            const itemRequired = typeof item.required === 'function' ? item.required(this.form.model) : item.required
                            const required = itemRequired === undefined ? itemRequired || formRequired : itemRequired

                            // 处理colLayout
                            const formColLayout = typeof this.form.colLayout === 'function' ? this.form.colLayout(this.form.model, {...item, index}) : this.form.showLabel
                            const itemColLayout = typeof item.colLayout === 'function' ? item.colLayout(this.form.model, {...item, index}) : item.colLayout
                            const colLayout = itemColLayout === undefined ? itemColLayout || formColLayout : itemColLayout as any

                            let rules = item.rules || []
                            rules = required ? [{required: true, trigger: ['blur', 'change'], message: placeholder}].concat(rules as any) : rules
                            rules = showValue ? [] : rules

                            // 处理disabled
                            const formDisabled = typeof this.form.disabled === 'function' ? this.form.disabled(this.form.model) : this.form.disabled
                            const itemDisabled = typeof item?.disabled === 'function' ? item?.disabled(this.form.model) : item?.disabled
                            const disabled = itemDisabled === undefined ? itemDisabled || formDisabled : itemDisabled

                            // 处理是否显示内容
                            const formShowContent = typeof this.form.showContent === 'function' ? this.form.showContent(this.form.model, {...item, index}) : this.form.showContent
                            let itemShowContent = typeof item.showContent === 'function' ? item.showContent(this.form.model, {...item, index}) : item.showContent
                            const showContent = itemShowContent === undefined ? itemShowContent || formShowContent : itemShowContent

                            // 处理显示值
                            const errData = this.form.errData || dataTransformRod(null)
                            let resultVal = getSpanValue(this.form.model[item.key], item)
                            if(showValue) {
                                // 处理格式化内容
                                const formFormatter = typeof this.form.valueFormatter === 'function' ? this.form.valueFormatter(this.form.model[item.key],this.form.model, {...item, index}) : this.form.valueFormatter
                                const itemFormatter = typeof item.valueFormatter === 'function' ? item.valueFormatter(this.form.model[item.key], this.form.model, {...item, index}) : item.valueFormatter
                                const formatter = itemFormatter === undefined ? itemFormatter || formFormatter : itemFormatter
                                if(formatter !== undefined) {
                                    resultVal = formatter
                                }
                            }

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
                                            ...colLayout
                                        }
                                    }
                                >
                                    <el-form-item
                                        key={item.key}
                                        prop={item.key}
                                        class={[item.labelWrap ? 'label-wrap' : '', showValue ? 'show-value' : '']}
                                        {...{
                                            ...item,
                                            rules: rules,
                                            required: undefined,
                                            label: undefined
                                        }}
                                        onMouseenter={() => {
                                            this.onFormItemMouseenter(item, {resultVal, showValue, showContent})
                                        }}
                                        onMouseleave={() => {
                                            this.onFormItemMouseleave(item)
                                        }}
                                        v-slots={{
                                            label: () => {

                                                // 处理是否显示label
                                                const formShowLabel = typeof this.form.showLabel === 'function' ? this.form.showLabel(this.form.model, {...item, index}) : this.form.showLabel
                                                let itemShowLabel = typeof item.showLabel === 'function' ? item.showLabel(this.form.model, {...item, index}) : item.showLabel
                                                const showLabel = itemShowLabel === undefined ? itemShowLabel || formShowLabel : itemShowLabel

                                                if(showLabel === false) {
                                                    return null
                                                }

                                                let labelComponent = null as any
                                                if (this.$slots[formItemSlot(item.key, 'formItem_label_')]) {
                                                    labelComponent = this.$slots[formItemSlot(item.key, 'formItem_label_')]?.({...item, model: this.form.model})
                                                } else {
                                                    labelComponent = itemLabel
                                                }
                                                const formItemLabelBefore = this.$slots[formItemSlot(item.key, 'formItem_label_before_')]?.({...item, model: this.form.model})
                                                const formItemLabelAfter = this.$slots[formItemSlot(item.key, 'formItem_label_after_')]?.({...item, model: this.form.model})

                                                return [formItemLabelBefore,labelComponent,formItemLabelAfter]
                                            },
                                            default: () => {
                                                if(showContent === false) {
                                                    return null
                                                }


                                                const slots: any = {}

                                                const trueResultVal = dataTransformRod(resultVal)

                                                let componentResult = <span class={[trueResultVal === errData ? 'empty-value' : '']}>{trueResultVal}</span>


                                                if (this.$slots[formItemSlot(item.key)]) {
                                                    componentResult = (this.$slots[formItemSlot(item.key)]?.({...item, model: this.form.model}))
                                                } else if (showValue) {
                                                    return componentResult
                                                } else if (['input', 'textarea'].includes(item.type)) {
                                                    renderSlot(['prefix', 'suffix', 'prepend', 'append'], this, slots, item)
                                                    componentResult = (<CustomInput form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }

                                                         }}
                                                    v-slots={slots} onEnterSearch={() => {this.$emit('SearchFn')}}
                                                    ref={el => this.setFormTypeRefs(item.key, el)}></CustomInput>)
                                                } else if (['input-number'].includes(item.type)) {
                                                    renderSlot(['decrease-icon', 'increase-icon', 'prefix', 'suffix'], this, slots, item)
                                                    componentResult = (<CustomInputNumber form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomInputNumber>)
                                                } else if (['input-autocomplete'].includes(item.type)) {
                                                    renderSlot(['prefix', 'suffix', 'prepend', 'append', 'loading'], this, slots, item)
                                                    componentResult = (<CustomInputAutocomplete form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomInputAutocomplete>)
                                                } else if (['select'].includes(item.type)) {
                                                    renderSlot(['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label'], this, slots, item)
                                                    componentResult = (<CustomSelect form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomSelect>)
                                                } else if (['select-v2'].includes(item.type)) {
                                                    renderSlot(['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label', 'default'], this, slots, item)
                                                    componentResult = (<CustomSelectV2 form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomSelectV2>)
                                                } else if (['switch'].includes(item.type)) {
                                                    renderSlot(['active-action', 'inactive-action'], this, slots, item)
                                                    componentResult = (<CustomSwitch form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomSwitch>)
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
                                                    renderSlot(['range-separator', 'prev-month', 'next-month', 'prev-year', 'next-year'], this, slots, item)
                                                    componentResult = (<CustomDate form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomDate>)
                                                } else if (['radio', 'radio-button'].includes(item.type)) {
                                                    componentResult = (<CustomRadio form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomRadio>)
                                                } else if (['tree-select'].includes(item.type)) {
                                                    renderSlot(['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label'], this, slots, item)
                                                    componentResult = (<CustomSelectTree form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomSelectTree>)
                                                } else if (['rate'].includes(item.type)) {
                                                    componentResult = (<CustomRate form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomRate>)
                                                } else if (['checkbox', 'checkbox-button'].includes(item.type)) {
                                                    componentResult = (<CustomCheckbox form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}
                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomCheckbox>)
                                                } else if (['cascader'].includes(item.type)) {
                                                    renderSlot(['empty'], this, slots, item)
                                                    componentResult = (<CustomCascader ref={el => this.setFormTypeRefs(item.key, el)}
                                                        form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}></CustomCascader>)
                                                } else if (['slider'].includes(item.type)) {
                                                    componentResult = (<CustomSlider ref={el => this.setFormTypeRefs(item.key, el)}
                                                        form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}></CustomSlider>)
                                                } else if (['time-picker'].includes(item.type)) {
                                                    componentResult = (<CustomTimePicker ref={el => this.setFormTypeRefs(item.key, el)}
                                                        form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}></CustomTimePicker>)
                                                } else if (['time-select'].includes(item.type)) {
                                                    componentResult = (<CustomTimeSelect ref={el => this.setFormTypeRefs(item.key, el)}
                                                        form={this.form}
                                                        formItem={{
                                                        ...item,
                                                            options: {
                                                                ...item.options,
                                                                disabled,
                                                                placeholder
                                                            }
                                                        }
                                                    } v-slots={slots}></CustomTimeSelect>)
                                                }

                                                const beforeComponent = this.$slots[formItemSlot('before_' + item.key)]?.({...item, model: this.form.model})
                                                const afterComponent = this.$slots[formItemSlot('after_' + item.key)]?.({...item, model: this.form.model})


                                                return [beforeComponent, componentResult, afterComponent]
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
                && <el-row class={['dinert-form-right', this.isArrow ? 'isArrow' : '']}>
                    {this.isArrow
                    && <el-button class="dinert-form-right-operation" text type="primary"
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
                                <el-button type="primary" onClick={() => this.$emit('SearchFn')} {...this.form.searchButton}>{this.form.searchButton?.message || '搜索'}</el-button>
                                <el-button type="primary" plain
                                    onClick={() => this.$emit('ResetFn')}
                                    {...this.form.resetButton}
                                >{this.form.resetButton?.message || '重置'}</el-button>
                            </>
                        )
                    }
                </el-row>
                }
                {
                    this.$slots.form_search_operations
        && <el-row class={'el-form-right-after'}>
            {this.$slots.form_search_operations?.()}
        </el-row>
                }
            </el-form>
        )
    }
})
