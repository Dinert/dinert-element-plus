

import lodash from 'lodash'

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
                if ((lodash.isArray(value) && value.includes(item[key])) || value === item[key]) {
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
                if (lodash.isArray(value) && value.length) {
                    value = value.join('/')

                    return value
                }
            }

            return value
        }
    }
    return null
}

// eslint-disable-next-line max-statements
export const getSpanValue = (value: any, item: any): any => {
    const type = item.type
    const options = item.options || {}
    const optionsOptions = options.options || []

    if (value === null || value === undefined) {
        return null
    }

    if (['switch'].includes(type)) {
        return value ? item.options?.activeText || '启用' : item.options?.inactiveText || '禁用'
    } else if (['select', 'select-v2'].includes(type)) {

        if (optionsOptions && optionsOptions.length) {
            if (item.options?.multiple) {
                const labels = optionsOptions.filter((opt: any) => value.includes(opt[options.value || 'value'])).map((opt: any) => opt[options.label || 'label'])
                return labels.join(',')
            } else {
                const selectItem = optionsOptions.find((opt: any) => opt[options.value || 'value'] === value)
                return selectItem ? selectItem[options.label || 'label'] : value
            }
        }

    } else if (['checkbox', 'checkbox-button'].includes(type)) {
        const labels = optionsOptions.filter((opt: any) => value.includes(opt[options.value || 'value'])).map((opt: any) => opt[options.label || 'label'])
        return labels.join(',')
    } else if (['radio', 'radio-button'].includes(type)) {
        const selectItem = optionsOptions.find((opt: any) => opt[options.value || 'value'] === value)
        return selectItem ? selectItem[options.label || 'label'] : value
    } else {
        return value
    }

    return null
}

export const valueMouseEnter = (e: MouseEvent, item: any, value: any, _this, itemShowLabel: any) => {
    const showCom = ['input', 'input-autocomplete', 'cascader', 'input-number', 'select', 'tree-select', 'select-v2', 'textarea']

    if (!value || (!showCom.includes(item.type) && itemShowLabel !== true)) {
        _this.form.formItem[item.key].tempValueDisabled = true
        return
    }
    let el: HTMLElement | null = null
    if (itemShowLabel) {
        el = e.target as any
    } else if (['input', 'input-autocomplete', 'cascader', 'input-number'].includes(item.type)) {
        el = (e.target as any).parentElement.querySelector('.el-input__inner')
        console.log(_this.form, 'itemm')
        console.log(el, 'eee')
    } else if (['select', 'tree-select', 'select-v2'].includes(item.type)) {
        el = (e.target as any).parentElement.querySelector('.el-select__selected-item.el-select__placeholder')
        el = el || (e.target as any).parentElement.querySelector('.el-select__selection')
    }


    if (el) {
        const inputEl = window.getComputedStyle(el, null)
        const textWidth
                = el.offsetWidth
                    - parseInt(inputEl.getPropertyValue('padding-right'))
                    - parseInt(inputEl.getPropertyValue('padding-left'))
        const tooltipEl = (e.target as any).previousElementSibling
        const tooltipWidth = tooltipEl.offsetWidth

        // console.log(tooltipWidth, textWidth)
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
        'datetimerange', 'date', 'daterange', 'dates', 'week', 'month', 'monthrange', 'year', 'years', 'time-picker', 'radio', 'radio-button'].includes(type) ? '请选择' : name
    return name + ((customName) || '')
}

export const formItemSlot = (customName: any, name: string = 'formItem_') => {
    return name + (customName || '')
}


export const renderSlot = (arr: string[] = [], _this: any, slots, item: any): any => {

    for (const prop in _this.$slots) {
        const slotName = prop.split('_')
        // const slotFn: any = null

        if (arr.includes(slotName[2]) && formItemSlot(item.key) + '_' + slotName[2] === prop) {


            // eslint-disable-next-line consistent-return
            (slots[slotName[2]] = args1 => _this.$slots[prop]?.({...item, args1}))
        }
    }
}
