
import {ExtractPropTypes} from 'vue'
import {MergeProp} from './utils'
import {
    InputProps, ElInput, SelectOptionProxy, ElSelect, cascaderProps, ElCascader, AutocompleteProps,
    ElAutocomplete, ElInputNumber, InputNumberProps, SwitchProps, DatePickerProps, ElDatePicker,
    RadioGroupProps, ElRadioGroup, CheckboxProps, RadioProps, CheckboxGroupProps, ElCheckbox,
    ElTreeSelect,
    RateProps,
    ElRate,
    CascaderProps,
    ElTree,
} from 'element-plus'
import {TreeOptionProps} from 'element-plus/es/components/tree-v2/src/types'

// import {EpPropFinalized, EpProp} from 'element-plus/es/utils'

import type {SelectProps} from 'element-plus/es/components/select/src/select'
import {TreeProps} from 'element-plus/es/components/tree-v2/src/types'


type CommonFn = 'onChange' | 'onClear' | 'onBlur' | 'onFocus'


export type RewriteInputProps = Partial<InputProps & Pick<typeof ElInput, 'onInput'| CommonFn>>

export type RewriteTextareaProps = Partial<InputProps & Pick<typeof ElInput, 'onInput'| CommonFn>>

export type RewriteSelectProps<O = any[]> = Partial<Omit<ExtractPropTypes<typeof SelectProps>, 'options'> &
{options: O | SelectOptionProxy[], label: string, value: string }
& Pick<typeof ElSelect, CommonFn | 'onVisible-change' | 'onRemove-tag'>
>
export type RewriteCascaderProps<O = any[]> = Partial<Omit<ExtractPropTypes<typeof cascaderProps>, 'options' | 'props'> & {optison: O, props: Partial<MergeProp<CascaderProps, TreeOptionProps>>} & Pick<typeof ElCascader, CommonFn | 'onVisible-change' | 'onRemove-tag'>>

export type RewriteAutocompleteProps = Partial<AutocompleteProps & Pick<typeof ElAutocomplete, 'onSelect' | 'onChange'>>

export type RewriteInputNumberProps = Partial<InputNumberProps & Pick<typeof ElInputNumber, CommonFn>>

export type RewriteSwitchProps = Partial<SwitchProps & Pick<typeof ElInputNumber, 'onChange'>>

export type RewriteDatePickerProps = Partial<DatePickerProps & Pick<typeof ElDatePicker, CommonFn | 'onVisible-change' | 'onCalendar-change' | 'onPanel-change'>>

export type RewriteRadioGroupProps<O = any[]> = Partial<RadioGroupProps & {options: O | RadioProps[], value: string} & Pick<typeof ElRadioGroup, 'onChange'>>

export type RewriteCheckboxGroupProps<O = any[]> = Partial<CheckboxGroupProps & {options: O | CheckboxProps[], value: string} & Pick<typeof ElCheckbox, 'onChange'>>

export type RewriteTreeSelectProps<O = any[]> = Partial<Omit<TreeProps, 'props'> & Omit<ExtractPropTypes<typeof SelectProps>, 'options'> &
{options: O | SelectOptionProxy[], label: string, value: string, data: O | SelectOptionProxy[]} &
Pick<typeof ElTreeSelect, CommonFn> & Pick<typeof ElTree,
'onCurrent-change'| 'onCheck' | 'onNode-click' | 'onCurrent-change' | 'onNode-expand' |'onCheck-change' | 'onNode-click' | 'onNode-contextmenu' | 'onNode-collapse' | 'onNode-drag-start'
| 'onNode-drag-end' | 'onNode-drop'|'onNode-drag-leave' | 'onNode-drag-enter' | 'onNode-drag-over'>>


export type RewriteRewriteRateProps<O = any[]> = Partial<Omit<RateProps, 'options'> & {options: O} & Pick<typeof ElRate, 'onChange'>>


// type UnionToIntersection<U> = (U extends any ? (a: (k: U) => void) => void : never) extends (a: infer I) => void ? I : never
// type UnionLast<U> = UnionToIntersection<U> extends (a: infer I) => void ? I : never
// type UnionToTuple<U> = [U] extends [never] ? [] : [...UnionToTuple<Exclude<U, UnionLast<U>>>, UnionLast<U>]
// type ReturnNewType<T extends (new (...args: any) => any) | any> = T extends new (...args: any) => infer R ? R : any

// type PickType<T> = {
//     [P in keyof T]?: T[P] extends BooleanConstructor ? boolean :
//     T[P] extends StringConstructor ? string :
//     T[P] extends NumberConstructor ? number :
//     T[P] extends EpPropFinalized<any, any, any, any, any> ? EpProp<any, any, T[P]>['default'] :
//     T[P] extends {type: any} ? ReturnNewType<UnionToTuple<T[P]['type']>[0]> :
//     T[P];
// }

// type TestPickType = ReturnNewType<UnionToTuple<typeof SelectProps['size']['type']>[0]>
