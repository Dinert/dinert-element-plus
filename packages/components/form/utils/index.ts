import {isSlotsValue} from '@packages/utils/tools'

export const labelMouseEnter = (e: MouseEvent, item: any, _this: any) => {
    const el = (e.target as any).parentElement.parentElement
    const labelEl = window.getComputedStyle(el, null)
    const isRequried = item.rules ? 12 : item.beforeWidth || 0
    const labelWidth
        = parseInt(labelEl.getPropertyValue('max-width')) - isRequried
            - parseInt(labelEl.getPropertyValue('padding-right'))
    const tooltipWidth = (e.target as any).previousElementSibling.offsetWidth
    if (tooltipWidth >= labelWidth) {
        _this.form.formItem[item.key].labelDisabled = false

    } else {
        _this.form.formItem[item.key].labelDisabled = true
    }
}

export const findTreeNode = (treeData: any, key: string, value: string) => {
    const result: any[] = []
    function filterResult(treeData: any) {
        treeData.forEach((item: any) => {
            if (item) {
                if ((Array.isArray(value) && value.includes(item[key])) || value === item[key]) {
                    result.push(item)
                }
                if (item.children && item.children.length) {
                    filterResult(item.children)
                }
            }

        })
    }
    filterResult(treeData)
    return result
}


export const getTooltipValue = (value: any, item: any): any => {
    const type = item.type
    const options = item.options || {}
    const tempArr: string[] = []
    if (['input', 'input-autocomplete', 'input-number'].includes(type)) {
        return value
    } else if (['select', 'tree-select', 'select-v2'].includes(type)) {
        if (options && options.options && options.options.length) {
            let newVal = null

            let optValue = ['select-v2'].includes(type) ? options.props && options.props.value : options.value
            optValue = optValue || 'value'
            let optLabel = ['select-v2'].includes(type) ? options.props && options.props.label : options.label
            optLabel = optLabel || 'label'

            if (options.valueKey) {
                newVal = value && value[options.valueKey]
            }
            const selectItem = findTreeNode(options.options, options.value === 'object' ? options.valueKey : optValue, newVal || value)
            selectItem.forEach(item => {
                tempArr.push(item[optLabel])
            })
            if (tempArr && tempArr.length) {
                return tempArr.join(',')
            }
            return value
        }
    } else if (['cascader'].includes(type)) {
        if (options && options.options && options.options.length) {
            if (options.props?.emitPath === undefined || options.props?.emitPath === true) {
                value = value && value[0]
            }

            const selectItem = findTreeNode(options.options, options.props?.value || 'value', value)[0]
            return selectItem && selectItem[options.props?.label || 'label']
        }
    }
    return null
}

export const getSpanValue = (value: any, item: any): any => {
    const type = item.type
    const options = item.options || {}
    const tempArr: string[] = []


    if (['input', 'input-autocomplete', 'input-number', 'textarea', 'datetime',
        'date',
        'dates',
        'week',
        'month',
        'year',
        'years',
        'datetimerange',
        'daterange',
        'monthrange',
        'yearrange',].includes(type)) {
        return value
    } else if (['select', 'tree-select', 'select-v2', 'radio', 'radio-button', 'checkbox', 'checkbox-button'].includes(type)) {
        if (options && options.options && options.options.length) {
            let newVal = null
            let optValue = ['select-v2'].includes(type) ? options.props && options.props.value : options.value
            optValue = optValue || 'value'
            let optLabel = ['select-v2'].includes(type) ? options.props && options.props.label : options.label
            optLabel = optLabel || 'label'

            if (options.valueKey) {
                newVal = value && value[options.valueKey]
            }
            const selectItem = findTreeNode(options.options, options.value === 'object' ? options.valueKey : optValue, newVal || value)
            selectItem.forEach(item => {
                tempArr.push(item[optLabel])
            })
            if (tempArr && tempArr.length) {
                return tempArr.join(',')
            }
            return value
        }
    } else if (['cascader'].includes(type)) {
        if (options && options.options && options.options.length) {
            if (options.props?.emitPath === undefined || options.props?.emitPath === true) {
                value = value && value[0]
            }

            const selectItem = findTreeNode(options.options, options.props?.value || 'value', value)[0]
            return selectItem && selectItem[options.props?.label || 'label']
        }
    }
    return null
}

export const valueMouseEnter = (e: MouseEvent, item: any, value: any, _this) => {
    const showCom = ['input', 'input-autocomplete', 'cascader', 'input-number', 'select', 'tree-select', 'select-v2']

    if (!value || item.showLabel || !showCom.includes(item.type)) {
        _this.form.formItem[item.key].tempValueDisabled = true

        return
    }
    let el: HTMLElement | null = null
    if (['input', 'input-autocomplete', 'cascader', 'input-number'].includes(item.type)) {
        el = (e.target as any).parentElement.querySelector('.el-input__inner') as HTMLElement
    } else if (['select', 'tree-select', 'select-v2'].includes(item.type)) {
        el = (e.target as any).parentElement.querySelector('.el-select__selected-item.el-select__placeholder') as HTMLElement
        el = el || (e.target as any).parentElement.querySelector('.el-select__selection') as HTMLElement
    }

    if (el) {
        const inputEl = window.getComputedStyle(el, null)
        const textWidth
                = el.offsetWidth
                    - parseInt(inputEl.getPropertyValue('padding-right'))
                    - parseInt(inputEl.getPropertyValue('padding-left'))
        const tooltipEl = (e.target as any).previousElementSibling
        const tooltipWidth = tooltipEl.offsetWidth

        if (tooltipWidth >= textWidth) {
            _this.form.formItem[item.key].tempValueDisabled = false
        } else {
            _this.form.formItem[item.key].tempValueDisabled = true

        }
    } else {
        _this.form.formItem[item.key].tempValueDisabled = true
    }

}

export const customPlaceholder = (customName: any, type: string = 'input', name: string = '请输入') => {
    name = ['select', 'tree-select', 'cascader', 'select-v2', 'datetime',
        'datetimerange', 'date', 'daterange', 'dates', 'week', 'month', 'monthrange', 'year', 'years', 'time-picker'].includes(type) ? '请选择' : name
    return name + ((customName) || '')
}

export const formItemSlot = (customName: any, name: string = 'formItem_') => {
    return name + (customName || '')
}


export const renderSlot = (arr: string[] = [], _this: any, slots, item: any): any => {
    for (const prop in _this.$slots) {
        const slotName = prop.split('formItem_').join('').split('_')[1]

        let slotFn: any = null
        if (!slotName) {
            return
        }

        if (arr.includes(slotName) && formItemSlot(item.key) + '_' + slotName === prop) {

            slotFn = _this.$slots[prop]?.(item)
            // eslint-disable-next-line consistent-return
            isSlotsValue(slotFn) && (slots[slotName] = () => slotFn)
        }
    }
}
