import {
    InputProps, ElInput, SelectOptionProxy, ElSelect, cascaderProps, ElCascader, AutocompleteProps,
    ElAutocomplete, ElInputNumber, InputNumberProps, SwitchProps, DatePickerProps, ElDatePicker,
    RadioGroupProps, ElRadioGroup, CheckboxProps, RadioProps, CheckboxGroupProps, ElCheckbox,
    ElTreeSelect,
    RateProps,
    ElRate,
    CascaderProps,
} from 'element-plus'
import {SelectProps} from 'element-plus/es/components/select/src/select'
import {TreeProps} from 'element-plus/es/components/tree-v2/src/types'


type CommonFn = 'onChange' | 'onClear' | 'onBlur' | 'onFocus'

export type RewriteInputProps = Partial<InputProps & Pick<typeof ElInput, 'onInput'| CommonFn>>
export type RewriteTextareaProps = Partial<InputProps & Pick<typeof ElInput, 'onInput'| CommonFn>>
export type RewriteSelectProps<O = any[]> = Partial<Omit<typeof SelectProps, 'options'> &
{options: O | SelectOptionProxy[], label: string, value: string}
& Pick<typeof ElSelect, CommonFn | 'onVisible-change' | 'onRemove-tag'>
>
export type RewriteCascaderProps<O = any[]> = Partial<Omit<typeof cascaderProps, 'options' | 'props'> & {optison: O, props: CascaderProps} & Pick<typeof ElCascader, CommonFn | 'onVisible-change' | 'onRemove-tag'>>
export type RewriteAutocompleteProps = Partial<AutocompleteProps & Pick<typeof ElAutocomplete, 'onSelect' | 'onChange'>>
export type RewriteInputNumberProps = Partial<InputNumberProps & Pick<typeof ElInputNumber, CommonFn>>
export type RewriteSwitchProps = Partial<SwitchProps & Pick<typeof ElInputNumber, 'onChange'>>
export type RewriteDatePickerProps = Partial<DatePickerProps & Pick<typeof ElDatePicker, CommonFn | 'onVisible-change' | 'onCalendar-change' | 'onPanel-change'>>
export type RewriteRadioGroupProps<O = any[]> = Partial<RadioGroupProps & {options: O | RadioProps[], value: string} & Pick<typeof ElRadioGroup, 'onChange'>>
export type RewriteCheckboxGroupProps<O = any[]> = Partial<CheckboxGroupProps & {options: O | CheckboxProps[], value: string} & Pick<typeof ElCheckbox, 'onChange'>>
export type RewriteTreeSelectProps<O = any[]> = Partial<TreeProps & Omit<typeof SelectProps, 'options'> &
{options: O | SelectOptionProxy[], label: string, value: string, data: O | SelectOptionProxy[], nodeKey: string} &
Pick<typeof ElTreeSelect, CommonFn>>

export type RewriteRewriteRateProps = Partial<RateProps & Pick<typeof ElRate, 'onChange'>>

