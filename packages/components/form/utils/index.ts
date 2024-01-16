
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

export const getTooltipValue = (value: any, item: any): any => {
    const type = item.type
    const options = item.options
    if (['input'].includes(type)) {
        return value
    } else if (['select'].includes(type)) {
        if (options && options.options && options.options.length) {
            const item = options.options.filter((item: any) => item.value === value)[0]
            return item && item.label
        }

    }
    return null
}

export const valueMouseEnter = (e: MouseEvent, item: any, value: any, _this: any) => {
    if (!value || item.showLabel) {
        _this.form.formItem[item.key].valueDisabled = true
        return
    }
    const el = (e.target as any).parentElement.querySelector('.el-input__inner') as HTMLElement
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
        'radio-button'
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
