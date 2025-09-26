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
        const formRef = ref<InstanceType<typeof ElForm>>()
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


        return {
            formItemMap,
            formClass,
            formTypeRef,
            formRef,
            packUp,
            isArrow,

            setFormTypeRefs,
            unfold,
        }
    },
    render() {
        return (
            <el-form inline={true}
                {...this.form}
                ref={el => {this.formRef = el}}
                class={[this.formClass, this.packUp ? '' : 'packUp', 'dinert-form']}
                onSubmit={withModifiers(() => undefined, ['stop', 'prevent'])}
                key={this.form.key}>

                <el-row {...this.form.row} class="dinert-form-left">
                    {/* eslint-disable-next-line array-callback-return, consistent-return */}
                    { this.formItemMap.map((item: CustomFormItemProps, index: number) => {
                        const style: any = {}
                        let vif = typeof item.vif === 'function' ? item.vif(this.form.model) : item.vif
                        vif = vif === undefined ? typeof this.form.vif === 'function' ? this.form.vif(this.form.model) : vif : vif
                        vif = vif === undefined ? true : vif

                        let show = typeof item.show === 'function' ? item.show(this.form.model) : item.show
                        show = show === undefined ? true : show
                        const isCustomPlaceholder = item.options?.placeholder
                        item.options = {placeholder: customPlaceholder(typeof item.label === 'function' ? item.label(this.form.model) : item.label, item.type), ...item.options}


                        if (!show) {
                            style.display = 'none'
                        }
                        if (vif) {
                            const formShowLabel = typeof this.form.showLabel === 'function' ? this.form.showLabel(this.form.model) : this.form.showLabel
                            let itemShowLabel = typeof item.showLabel === 'function' ? item.showLabel(this.form.model) : item.showLabel
                            item.required = item.required === undefined ? item.required || this.form.required : item.required
                            itemShowLabel = itemShowLabel === undefined ? itemShowLabel || formShowLabel : itemShowLabel
                            item.required = itemShowLabel ? false : item.required

                            const formColLayout = typeof this.form.colLayout === 'function' ? this.form.colLayout(this.form.model, {...item, index}) : this.form.showLabel
                            let colLayout = typeof item.colLayout === 'function' ? item.colLayout(this.form.model, {...item, index}) : item.colLayout
                            colLayout = colLayout === undefined ? colLayout || formColLayout : colLayout as any

                            let rules = item.rules || []
                            rules = item.required ? [{required: true, trigger: ['blur', 'change'], message: isCustomPlaceholder || customPlaceholder(typeof item.label === 'function' ? item.label(this.form.model) : item.label, item.type)}].concat(rules as any) : rules
                            rules = itemShowLabel ? [] : rules
                            const valDisabled = item.itemValueDisabled !== undefined ? item.itemValueDisabled : item.tempValueDisabled

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
                                        class={[item.labelWrap ? 'label-wrap' : '', itemShowLabel ? 'show-label' : '']}
                                        {...{
                                            ...item,
                                            label: typeof item.label === 'function' ? item.label(this.form.model) : item.label,
                                            rules: rules
                                        }}
                                        v-slots={{
                                            label: () => {
                                                if (this.$slots[formItemSlot(item.key, 'formItem_label_')]) {
                                                    return (this.$slots[formItemSlot(item.key, 'formItem_label_')]?.({...item, model: this.form.model}))
                                                }
                                                return (
                                                    <dinert-tooltip
                                                        key={item.key}
                                                        content={typeof item.label === 'function' ? item.label(this.form.model) : item.label}
                                                        disabled={item.labelDisabled}
                                                        onLabelMouseEnter={(e: MouseEvent) => {labelMouseEnter(e, item, this)}}
                                                    >
                                                    </dinert-tooltip>
                                                )
                                            },
                                            default: () => {
                                                return (
                                                    <dinert-tooltip
                                                        key={item.key}
                                                        content={String(getTooltipValue(this.form.model[item.key], item))}
                                                        disabled={valDisabled}
                                                        item={item}
                                                        onLabelMouseEnter={(e: MouseEvent) => valueMouseEnter(e, item, this.form.model[item.key], this, itemShowLabel)}
                                                        v-slots={
                                                            {
                                                                // eslint-disable-next-line max-statements
                                                                default: () => {

                                                                    const slots: any = {}
                                                                    const errData = this.form.errData || '-'
                                                                    const resultVal = dataTransformRod(getSpanValue(this.form.model[item.key], item), errData)
                                                                    let componentResult = <span class={[resultVal === errData ? 'empty-value' : '']}>{resultVal}</span>

                                                                    if (this.$slots[formItemSlot(item.key)]) {
                                                                        componentResult = (this.$slots[formItemSlot(item.key)]?.({...item, model: this.form.model}))
                                                                    } else if (itemShowLabel || (formShowLabel && [true, undefined].includes(itemShowLabel))) {
                                                                        return componentResult
                                                                    } else if (['input', 'textarea'].includes(item.type)) {
                                                                        renderSlot(['prefix', 'suffix', 'prepend', 'append'], this, slots, item)
                                                                        componentResult = (<CustomInput form={this.form} formItem={item} v-slots={slots} onEnterSearch={() => {
                                                                            this.$emit('SearchFn')}}
                                                                        ref={el => this.setFormTypeRefs(item.key, el)}></CustomInput>)
                                                                    } else if (['input-number'].includes(item.type)) {
                                                                        renderSlot(['decrease-icon', 'increase-icon', 'prefix', 'suffix'], this, slots, item)
                                                                        componentResult = (<CustomInputNumber form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomInputNumber>)
                                                                    } else if (['input-autocomplete'].includes(item.type)) {
                                                                        renderSlot(['prefix', 'suffix', 'prepend', 'append', 'loading'], this, slots, item)
                                                                        componentResult = (<CustomInputAutocomplete form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomInputAutocomplete>)
                                                                    } else if (['select'].includes(item.type)) {
                                                                        renderSlot(['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label'], this, slots, item)
                                                                        componentResult = (<CustomSelect form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomSelect>)
                                                                    } else if (['select-v2'].includes(item.type)) {
                                                                        renderSlot(['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label', 'default'], this, slots, item)
                                                                        componentResult = (<CustomSelectV2 form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomSelectV2>)
                                                                    } else if (['switch'].includes(item.type)) {
                                                                        renderSlot(['active-action', 'inactive-action'], this, slots, item)
                                                                        componentResult = (<CustomSwitch form={this.form} formItem={item} v-slots={slots}
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
                                                                        componentResult = (<CustomDate form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomDate>)
                                                                    } else if (['radio', 'radio-button'].includes(item.type)) {
                                                                        componentResult = (<CustomRadio form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomRadio>)
                                                                    } else if (['tree-select'].includes(item.type)) {
                                                                        renderSlot(['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label'], this, slots, item)
                                                                        componentResult = (<CustomSelectTree form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomSelectTree>)
                                                                    } else if (['rate'].includes(item.type)) {
                                                                        componentResult = (<CustomRate form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomRate>)
                                                                    } else if (['checkbox', 'checkbox-button'].includes(item.type)) {
                                                                        componentResult = (<CustomCheckbox form={this.form} formItem={item} v-slots={slots}
                                                                            ref={el => this.setFormTypeRefs(item.key, el)}></CustomCheckbox>)
                                                                    } else if (['cascader'].includes(item.type)) {
                                                                        renderSlot(['empty'], this, slots, item)
                                                                        componentResult = (<CustomCascader ref={el => this.setFormTypeRefs(item.key, el)}
                                                                            form={this.form} formItem={item} v-slots={slots}></CustomCascader>)
                                                                    } else if (['slider'].includes(item.type)) {
                                                                        componentResult = (<CustomSlider ref={el => this.setFormTypeRefs(item.key, el)}
                                                                            form={this.form} formItem={item} v-slots={slots}></CustomSlider>)
                                                                    } else if (['time-picker'].includes(item.type)) {
                                                                        componentResult = (<CustomTimePicker ref={el => this.setFormTypeRefs(item.key, el)}
                                                                            form={this.form} formItem={item} v-slots={slots}></CustomTimePicker>)
                                                                    } else if (['time-select'].includes(item.type)) {
                                                                        componentResult = (<CustomTimeSelect ref={el => this.setFormTypeRefs(item.key, el)}
                                                                            form={this.form} formItem={item} v-slots={slots}></CustomTimeSelect>)
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
