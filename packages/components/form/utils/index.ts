
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
            if (value === item[key]) {
                result.push(item)
            }
            if (item.children && item.children.length) {
                filterResult(item.children)
            }
        })
    }
    filterResult(treeData)
    return result
}


export const getTooltipValue = (value: any, item: any): any => {
    const type = item.type
    const options = item.options || {}
    if (['input', 'input-autocomplete', 'input-number'].includes(type)) {
        return value
    } else if (['select', 'tree-select'].includes(type)) {
        if (options && options.options && options.options.length) {
            const selectItem = findTreeNode(options.options, options.value || 'value', value)[0]
            return selectItem && selectItem[options.label || 'label']
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

export const valueMouseEnter = (e: MouseEvent, item: any, value: any, _this: any) => {
    if (!value || item.showLabel) {
        _this.form.formItem[item.key].valueDisabled = true
        return
    }
    let el: HTMLElement | null = null
    if (['input', 'input-autocomplete', 'cascader', 'input-number'].includes(item.type)) {
        el = (e.target as any).parentElement.querySelector('.el-input__inner') as HTMLElement
    } else if (['select', 'tree-select'].includes(item.type)) {
        el = (e.target as any).parentElement.querySelector('.el-select__selected-item.el-select__placeholder') as HTMLElement
    }
    const timer = [
        'datetime',
        'date',
        'week',
        'month',
        'year',
        'datetimerange',
        'daterange',
        'monthrange',
        'yearrange',
        'radio-button',
        'checkbox',
        'rate',
        'textarea'
    ]
    if (timer.includes(item.type)) {
        _this.form.formItem[item.key].valueDisabled = true
        return
    }

    if (['switch', 'radio'].includes(item.type)) {
        _this.form.formItem[item.key].valueDisabled = true
    } else if (el) {
        const inputEl = window.getComputedStyle(el, null)
        const textWidth
            = el.offsetWidth
                - parseInt(inputEl.getPropertyValue('padding-right'))
                - parseInt(inputEl.getPropertyValue('padding-left'))
        const tooltipWidth = (e.target as any).previousElementSibling.offsetWidth

        if (tooltipWidth >= textWidth) {
            _this.form.formItem[item.key].valueDisabled = false
        } else {
            _this.form.formItem[item.key].valueDisabled = true

        }
    } else {
        _this.form.formItem[item.key].valueDisabled = false
    }
}

export const customPlaceholder = (customName: any, type: string = 'input', name: string = '请输入') => {
    name = type === 'select' ? '请选择' : name
    return name + (customName || '')
}

export const formItemSlot = (customName: any, name: string = 'formItem_') => {
    return name + (customName || '')
}
