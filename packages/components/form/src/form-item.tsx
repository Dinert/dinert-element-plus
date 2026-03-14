/* eslint-disable max-statements */
import {PropType, computed, defineComponent, onBeforeUpdate, ref} from 'vue'
import type {RewriteFormProps, CustomFormItemProps} from '@packages/components/form/types'
import lodash from 'lodash'
import {getSpanValue, formItemSlot, customPlaceholder, resolveProp} from '@packages/components/form/utils'
import {dataTransformRod} from '@packages/utils/tools'
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


const COMPONENT_MAP: Record<string, any> = {
    input: CustomInput,
    textarea: CustomInput,
    'input-number': CustomInputNumber,
    'input-autocomplete': CustomInputAutocomplete,
    select: CustomSelect,
    'select-v2': CustomSelectV2,
    switch: CustomSwitch,
    date: CustomDate,
    datetime: CustomDate,
    dates: CustomDate,
    week: CustomDate,
    month: CustomDate,
    year: CustomDate,
    years: CustomDate,
    datetimerange: CustomDate,
    daterange: CustomDate,
    monthrange: CustomDate,
    yearrange: CustomDate,
    radio: CustomRadio,
    'radio-button': CustomRadio,
    'tree-select': CustomSelectTree,
    rate: CustomRate,
    checkbox: CustomCheckbox,
    'checkbox-button': CustomCheckbox,
    cascader: CustomCascader,
    slider: CustomSlider,
    'time-picker': CustomTimePicker,
    'time-select': CustomTimeSelect
}

const SLOT_MAP: Record<string, string[]> = {
    'input': ['prefix', 'suffix', 'prepend', 'append'],
    'input-number': ['decrease-icon', 'increase-icon', 'prefix', 'suffix'],
    'input-autocomplete': ['prefix', 'suffix', 'prepend', 'append', 'loading'],
    'select': ['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label'],
    'select-v2': ['header', 'footer', 'prefix', 'empty', 'tag', 'loading', 'label', 'default'],
    'switch': ['active-action', 'inactive-action'],
    'date': ['range-separator', 'prev-month', 'next-month', 'prev-year', 'next-year'],
    'cascader': ['empty'],
    // 其他组件继续补充
}

function parseSchema(model: any, schema: any, parentPath = '', currentData = {}) {
    const result: any[] = []

    Object.keys(schema).forEach(key => {
        const item = schema[key]
        const path = parentPath ? `${parentPath}.${key}` : key

        // 数组
        if (item.type === 'array') {
            const list = lodash.get(model, path) || []

            list.forEach((row: any, index: number) => {
                const currentPath = `${path}[${index}]`

                result.push({
                    ...item,
                    currentData: {index, ...row},

                    // key 使用 id 保证稳定
                    key: row?.id ? `${path}-${row.id}` : `${path}-${index}`,

                    // prop 必须和 model 一致
                    prop: currentPath,

                    children: item.children
                        ? parseSchema(
                            model,
                            item.children,
                            currentPath,
                            {index, ...row}
                        )
                        : []
                })
            })

            return
        }

        // children
        if (item.children) {
            result.push({
                ...item,
                currentData,
                key: path,
                prop: path,
                children: parseSchema(model, item.children, path, currentData)
            })
            return
        }

        // 普通字段
        result.push({
            ...item,
            currentData,
            key: path,
            prop: path,
            refreshKey: path
        })
    })

    return result
}

// 展开还是收起状态
export default defineComponent({
    name: 'dinert-form-item',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },

    },
    setup(props, {emit, slots}) {

        const tempRef = ref<any>(null)
        const isTooltip = ref(false)
        const tooltipContent = ref('')
        const formTypeRef = ref<any>({})
        const setFormTypeRefs = (type: string, el: any) => {
            formTypeRef.value[type] = el
        }

        onBeforeUpdate(() => {
            formTypeRef.value = {}
        })

        // eslint-disable-next-line max-statements
        const onFormItemMouseenter = (item: CustomFormItemProps, {resultVal, showValue, showContent}: {resultVal: any, showValue: any, showContent: any}) => {

            tempRef.value = formTypeRef.value[item.key]
            const customRef = tempRef.value
            let coRef = null as any

            let newVal = lodash.isArray(resultVal) ? resultVal.join(',') : resultVal
            newVal = typeof newVal === 'number' ? newVal + '' : newVal

            const slot = slots[formItemSlot(item.key)]


            const slotTooltipDom = lodash.isFunction(tempRef.value?.querySelector) && tempRef.value?.querySelector('.slot-tooltip')

            if (slot && slotTooltipDom) {
                coRef = slotTooltipDom

                if (coRef?.scrollHeight > coRef?.clientHeight && newVal) {
                    tooltipContent.value = slotTooltipDom.innerText
                    isTooltip.value = true
                }

            } else if (showValue || showContent || showContent === false) {
                coRef = tempRef.value

                if (coRef?.scrollHeight > coRef?.clientHeight && newVal) {
                    tooltipContent.value = newVal
                    isTooltip.value = true
                }

            } else if (customRef && !slot) {
                if (['input'].includes(item.type)) {
                    coRef = customRef.inputRef.ref
                } else if (['input-number'].includes(item.type)) {
                    coRef = customRef.$el.querySelector('.el-input__inner')
                } else if (['select'].includes(item.type)) {
                    coRef = customRef.selectRef.$el.querySelector('.el-select__selected-item.el-select__placeholder')
                    if (item.options?.multiple && newVal) {
                        tooltipContent.value = newVal
                        isTooltip.value = true
                    }
                } else if (['select-v2'].includes(item.type)) {
                    coRef = customRef.selectV2Ref.$el.querySelector('.el-select__selected-item.el-select__placeholder')
                    if (item.options?.multiple && newVal) {
                        tooltipContent.value = newVal
                        isTooltip.value = true
                    }
                } else if (['datetime',
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

                    if (item.type.includes('range')) {
                        coRef = customRef.$el?.querySelector('.el-range-input')
                    } else {
                        coRef = customRef.$el?.querySelector('.el-input__inner')
                    }
                } else if (['cascader'].includes(item.type)) {
                    coRef = customRef.$el?.querySelector('.el-input__inner')
                    const cascaderRef = customRef.cascaderRef
                    const nodes = cascaderRef.cascaderPanelRef.checkedNodes

                    if (nodes?.length) {
                        newVal = nodes[0].text
                        if (item.options?.props?.multiple) {
                            newVal = nodes.map((item: any) => item.text).join(',')
                            tooltipContent.value = newVal
                            isTooltip.value = true
                        }
                    }

                }

                if (coRef?.scrollWidth > coRef?.clientWidth && newVal) {
                    tooltipContent.value = newVal
                    isTooltip.value = true
                }

            }


        }
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const onFormItemMouseleave = (_item: CustomFormItemProps) => {
            tempRef.value = null
            isTooltip.value = false
        }

        const schemaTree = computed(() => {
            const tree = parseSchema(props.form.model, props.form.formItem)

            const walk = (list: any[]) => {
                const result: any[] = []

                for (let i = 0; i < list.length; i++) {
                    const item = list[i]

                    const ctx = {...item, index: i}

                    const formVif = lodash.isFunction(props.form.vif)
                        ? props.form.vif(props.form.model, ctx)
                        : props.form.vif

                    const itemVif = lodash.isFunction(item.vif)
                        ? item.vif(props.form.model, ctx)
                        : item.vif

                    if ((itemVif ?? formVif ?? true) === false) {continue}

                    const node = {...item}

                    if (item.children?.length) {
                        node.children = walk(item.children)
                    }

                    result.push(node)
                }

                // 最后统一排序
                result.sort((a, b) => (a.sort ?? Infinity) - (b.sort ?? Infinity))

                return result
            }

            return walk(tree)
        })


        return {
            schemaTree,
            formTypeRef,
            tempRef,
            setFormTypeRefs,
            tooltipContent,
            isTooltip,

            onFormItemMouseenter,
            onFormItemMouseleave,
        }
    },
    methods: {
        renderNode(item: any, index: number) {
            if (item.children?.length) {
                return (<el-col key={item.key}><el-row {...item.row}>{item.children.map((child: any, i: number) => this.renderNode(child, i))}</el-row></el-col>)
            }
            return this.renderField(item, index)
        },

        renderField(item: CustomFormItemProps, index: number) {
            const style: any = {}

            const ctx = {...item, index}


            // 处理show
            const show = resolveProp(item.show, this.form.model, ctx) ?? true


            const isCustomPlaceholder = item.options?.placeholder
            const itemLabel = resolveProp(item.label, this.form.model, ctx)
            const placeholder = isCustomPlaceholder || customPlaceholder(itemLabel, item.type)


            if (!show) {
                style.display = 'none'
            }

            // 处理是否显示直接显示组件的值
            const formShowValue = resolveProp(this.form.showValue, this.form.model, ctx)
            const itemShowValue = resolveProp(item.showValue, this.form.model, ctx)
            const showValue = itemShowValue === undefined ? itemShowValue || formShowValue : itemShowValue

            // 处理是否必填
            const formRequired = resolveProp(this.form.required, this.form.model, ctx)
            const itemRequired = resolveProp(item.required, this.form.model, ctx)
            const required = itemRequired === undefined ? itemRequired || formRequired : itemRequired

            // 处理colLayout
            const formColLayout = resolveProp(this.form.colLayout, this.form.model, ctx)
            const itemColLayout = resolveProp(item.colLayout, this.form.model, ctx)
            const colLayout = itemColLayout === undefined ? itemColLayout || formColLayout : itemColLayout

            let rules = item.rules || []
            rules = required ? [{required: true, trigger: ['blur', 'change'], message: placeholder}].concat(rules) : rules
            rules = showValue ? [] : rules

            // 处理disabled
            const formDisabled = resolveProp(this.form.disabled, this.form.model, ctx)
            const itemDisabled = resolveProp(item?.disabled, this.form.model, ctx)
            const disabled = itemDisabled === undefined ? itemDisabled || formDisabled : itemDisabled

            // 处理是否显示内容
            const formShowContent = resolveProp(this.form.showContent, this.form.model, ctx)
            const itemShowContent = resolveProp(item.showContent, this.form.model, ctx)
            const showContent = itemShowContent === undefined ? itemShowContent || formShowContent : itemShowContent

            // 处理是否显示直接显示组件的值
            const formIsTooltip = resolveProp(this.form.isTooltip, this.form.model, ctx)
            const itemIsTooltip = resolveProp(item.isTooltip, this.form.model, ctx)
            let isTooltip = itemIsTooltip === undefined ? itemIsTooltip || formIsTooltip : itemIsTooltip
            isTooltip = isTooltip === undefined ? true : isTooltip

            // 处理显示值
            const errData = this.form.errData || dataTransformRod(null)
            const getValue = lodash.get(this.form.model, item.key)
            let resultVal = getSpanValue(getValue, item)
            if (showValue) {
            // 处理格式化内容
                const formFormatter = lodash.isFunction(this.form.valueFormatter) ? this.form.valueFormatter(getValue, this.form.model, {...item, index}) : this.form.valueFormatter
                const itemFormatter = lodash.isFunction(item.valueFormatter) ? item.valueFormatter(getValue, this.form.model, {...item, index}) : item.valueFormatter
                const formatter = itemFormatter === undefined ? itemFormatter || formFormatter : itemFormatter
                if (formatter !== undefined) {
                    resultVal = formatter
                }

            }

            return (
                <el-col
                    style= {style}
                    class={[item.type, item.key]}
                    key={item.refreshKey}
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
                >{
                        this.$slots[formItemSlot(item.key, 'col_')] ? this.$slots[formItemSlot(item.key, 'col_')]?.({...item, model: this.form.model})
                            : <el-form-item
                                key={item.refreshKey}
                                prop={item.prop}
                                class={[item.labelWrap ? 'label-wrap' : '', showValue ? 'show-value' : '']}
                                {...{
                                    ...item,
                                    rules: rules,
                                    required: undefined,
                                    label: undefined
                                }}
                                onMouseenter={() => {
                                    isTooltip && this.onFormItemMouseenter(item, {resultVal, showValue, showContent})
                                }}
                                onMouseleave={() => {
                                    isTooltip && this.onFormItemMouseleave(item)
                                }}
                                v-slots={{
                                    label: () => {

                                        // 处理是否显示label
                                        const formShowLabel = resolveProp(this.form.showLabel, this.form.model, ctx)
                                        const itemShowLabel = resolveProp(item.showLabel, this.form.model, ctx)
                                        const showLabel = itemShowLabel === undefined ? itemShowLabel || formShowLabel : itemShowLabel

                                        if (showLabel === false) {
                                            return null
                                        }

                                        let labelComponent = null as any
                                        if (this.$slots[formItemSlot(item.key, 'formItem_label_')]) {
                                            labelComponent = this.$slots[formItemSlot(item.key, 'formItem_label_')]?.({...ctx, model: this.form.model})
                                        } else {
                                            labelComponent = itemLabel
                                        }
                                        const formItemLabelBefore = this.$slots[formItemSlot(item.key, 'formItem_label_before_')]?.({...ctx, model: this.form.model})
                                        const formItemLabelAfter = this.$slots[formItemSlot(item.key, 'formItem_label_after_')]?.({...ctx, model: this.form.model})

                                        return [formItemLabelBefore, labelComponent, formItemLabelAfter]
                                    },
                                    // eslint-disable-next-line max-statements
                                    default: () => {
                                        if (showContent === false) {
                                            return null
                                        }

                                        let limitLine = 3 as any
                                        let componentResultStyle = {} as any
                                        if (showValue) {
                                        // 处理显示值的行数
                                            const formLimitLine = lodash.isFunction(this.form.limitLine) ? this.form.limitLine(getValue, this.form.model, ctx) : this.form.limitLine
                                            const itemLimitLine = lodash.isFunction(item.limitLine) ? item.limitLine(getValue, this.form.model, ctx) : item.limitLine
                                            limitLine = itemLimitLine === undefined ? itemLimitLine || formLimitLine : itemLimitLine
                                            componentResultStyle = {'--limit-line': limitLine}
                                        }


                                        const trueResultVal = dataTransformRod(resultVal)
                                        const Comp = COMPONENT_MAP[item.type]
                                        let componentResult = <div
                                            ref={el => this.setFormTypeRefs(item.key, el)} style={componentResultStyle}
                                            class={['el-form-item__content-text', trueResultVal === errData ? 'empty-value' : '']}>{trueResultVal}</div>

                                        if (this.$slots[formItemSlot(item.key)]) {
                                            componentResult = (<div ref={el => this.setFormTypeRefs(item.key, el)}
                                                style={componentResultStyle}
                                                class={['el-form-item__content-slot', trueResultVal === errData ? 'empty-value' : '']}>
                                                {this.$slots[formItemSlot(item.key)]?.({...item, model: this.form.model})}</div>)
                                        } else if (showValue) {
                                            return componentResult
                                        } else {
                                            const slots: Record<string, any> = {}
                                            const slotKeys = SLOT_MAP[item.type] || []
                                            slotKeys.forEach(key => {
                                                const fullSlotName = formItemSlot(item.key) + '_' + key
                                                if (this.$slots[fullSlotName]) {
                                                    slots[key] = (args: any) => this.$slots[fullSlotName]?.({...item, ...args})
                                                }
                                            })
                                            componentResult = Comp ? <Comp
                                                form={this.form}
                                                formItem={{
                                                    ...item,
                                                    options: {
                                                        ...item.options,
                                                        disabled,
                                                        placeholder
                                                    }

                                                }}
                                                v-slots={slots}
                                                onEnterSearch={() => {
                                                    this.$emit('SearchFn')
                                                }}
                                                ref={el => this.setFormTypeRefs(item.key, el)}
                                            /> : <div>{resultVal}</div>
                                        }

                                        const beforeComponent = this.$slots[formItemSlot('before_' + item.key)]?.({...item, model: this.form.model})
                                        const afterComponent = this.$slots[formItemSlot('after_' + item.key)]?.({...item, model: this.form.model})

                                        return [beforeComponent, componentResult, afterComponent]
                                    }
                                }}
                            >
                            </el-form-item>
                    }
                </el-col>
            )
        },
    },

    render() {
        return (
            <el-row {...this.form.row} class="dinert-form-left">
                <el-tooltip
                    placement="top"
                    content={this.tooltipContent}
                    virtual-triggering
                    virtual-ref={this.tempRef}
                    trigger="contextmenu"
                    visible={this.isTooltip}
                />
                {
                    this.schemaTree.map((item: CustomFormItemProps, index: number) => {
                        return (this.renderNode(item, index))
                    })
                }
            </el-row>
        )
    }
})
