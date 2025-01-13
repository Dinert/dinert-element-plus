
import {
    type FormProps, type FormItemProps, type ColProps, type RowProps,
    ButtonProps,
} from 'element-plus'
import {
    RewriteInputProps, RewriteSelectProps, RewriteTextareaProps,
    RewriteCascaderProps,
    RewriteAutocompleteProps,
    RewriteInputNumberProps,
    RewriteSwitchProps,
    RewriteDatePickerProps,
    RewriteRadioGroupProps,
    RewriteCheckboxGroupProps,
    RewriteTreeSelectProps,
    RewriteRewriteRateProps,
    RewriteSliderProps,
    RewriteTimePickerProps,
    RewriteTimeSelectProps
} from './components'
import {MergeProp} from './utils'
import {TreeProps} from 'element-plus/es/components/tree-v2/src/types'


type RewriteColProps = Partial<ColProps>

type RewriteRowProps = Partial<RowProps>


export interface RewriteFormItemPropsMap<O = any[]>{
    input: RewriteInputProps;
    select: RewriteSelectProps<O>;
    'select-v2': RewriteSelectProps<O>;
    custom: RewriteInputProps;
    textarea: RewriteTextareaProps;
    cascader: RewriteCascaderProps<O>;
    'input-autocomplete': RewriteAutocompleteProps;
    'input-number': RewriteInputNumberProps;
    switch: RewriteSwitchProps;
    datetime: RewriteDatePickerProps;
    date: RewriteDatePickerProps;
    dates: RewriteDatePickerProps;
    week: RewriteDatePickerProps;
    month: RewriteDatePickerProps;
    year: RewriteDatePickerProps;
    years: RewriteDatePickerProps;
    datetimerange: RewriteDatePickerProps;
    daterange: RewriteDatePickerProps;
    monthrange: RewriteDatePickerProps;
    radio: RewriteRadioGroupProps<O>;
    checkbox: RewriteCheckboxGroupProps<O>;
    'checkbox-button': RewriteCheckboxGroupProps<O>;
    'tree-select': RewriteTreeSelectProps<O>;
    'radio-button': RewriteRadioGroupProps<O>;
    'rate': RewriteRewriteRateProps<O>;
    slider: RewriteSliderProps;
    'time-picker': RewriteTimePickerProps;
    'time-select': RewriteTimeSelectProps;
}


export interface CustomFormItemProps<D = any, O = any[], N extends keyof RewriteFormItemPropsMap = any> extends Partial<Omit<FormItemProps, 'label'>> {
    key?: any;
    type: N extends keyof RewriteFormItemPropsMap ? N : keyof RewriteFormItemPropsMap;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string | ((model: D) => string);
    sort?: number;
    options?: RewriteFormItemPropsMap<O>[N];
    showLabel?: boolean | ((model: D) => boolean);
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    tempValueDisabled?: boolean;
    required?: boolean;
    colLayout?: RewriteColProps;
}

type ToModelItem<D, FI> = D extends FI ? D : FI
type ToString<T> = { [P in keyof T]: T[P] extends keyof RewriteFormItemPropsMap ? string : T[P]; }

type FormItemMap<D, FI> = {
    [P in keyof ToModelItem<D, FI>]: FI extends any ? FormItemPropsCommon<D, FI> : CustomFormItemProps<D, any[], ToModelItem<D, FI>[P] extends keyof RewriteFormItemPropsMap ? ToModelItem<D, FI>[P] : keyof RewriteFormItemPropsMap>;
}

export interface RewriteFormProps<D = any, FI = any> extends Omit<Partial<FormProps>, 'model'> {
    model: Partial<MergeProp<D, ToString<FI>>>;
    vif?: boolean | ((model: D) => boolean);
    formItem: Partial<FormItemMap<D, FI>>;
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
    showLabel?: boolean | ((model: D) => boolean);
    required?: boolean;
    key?: any;
    packUp?: boolean;
    searchButton?: Partial<ButtonProps & {message?: string}>;
    resetButton?: Partial<ButtonProps & {message?: string}>;
    enterSearch?: boolean; // 是否开启回车搜索
}

export interface DinertFormProps<D = any, FI = any>{
    form: RewriteFormProps<D, FI>;
    search?: boolean;
}


export interface FormItemPropsInput<D, FI> extends CustomFormItemProps<D, FI>{
    type: 'input';
    options?: RewriteInputProps;
}

export interface FormItemPropsSelect <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'select';
    options?: RewriteSelectProps;
}
export interface FormItemPropsSelectV2 <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'select-v2';
    options?: RewriteSelectProps & {props?: TreeProps['props']};
}

export interface FormItemPropsCustom <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'custom';
    options?: RewriteInputProps;
}

export interface FormItemPropsTextarea <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'textarea';
    options?: RewriteTextareaProps;
}

export interface FormItemPropsCascader <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'cascader';
    options?: RewriteCascaderProps;
}

export interface FormItemPropsInputAutocomplete <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'input-autocomplete';
    options?: RewriteAutocompleteProps;
}

export interface FormItemPropsInputNumber <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'input-number';
    options?: RewriteInputNumberProps;
}

export interface FormItemPropsSwitch <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'switch';
    options?: RewriteSwitchProps;
}

export interface FormItemPropsDate <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'date' | 'datetime' | 'week' |'month' | 'year' | 'years' | 'daterange' | 'datetimerange' |'monthrange';
    options?: RewriteDatePickerProps;
}

export interface FormItemPropsRadio <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'radio' | 'radio-button';
    options?: RewriteRadioGroupProps;
}

export interface FormItemPropsCheckbox <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'checkbox' | 'checkbox-button';
    options?: RewriteCheckboxGroupProps;
}

export interface FormItemPropsTreeSelect <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'tree-select';
    options?: RewriteTreeSelectProps & {nodeKey?: string};
}

export interface FormItemPropsRate <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'rate';
    options?: RewriteRewriteRateProps;
}

export interface FormItemPropsSlider <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'slider';
    options?: RewriteSliderProps;
}

export interface FormItemPropsTimePicker <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'time-picker';
    options?: RewriteTimePickerProps;
}

export interface FormItemPropsTimeSelect <D, FI> extends CustomFormItemProps<D, FI> {
    type: 'time-select';
    options?: RewriteTimeSelectProps;
}

export type FormItemPropsCommon<D, FI> = FormItemPropsInput<D, FI>
| FormItemPropsSelect<D, FI> | FormItemPropsCustom<D, FI> | FormItemPropsTextarea<D, FI>
| FormItemPropsCascader<D, FI> | FormItemPropsInputAutocomplete<D, FI> | FormItemPropsInputNumber<D, FI>
| FormItemPropsSwitch<D, FI> | FormItemPropsDate<D, FI>
 | FormItemPropsRadio<D, FI> | FormItemPropsCheckbox<D, FI> | FormItemPropsTreeSelect<D, FI>
 | FormItemPropsRate<D, FI> | FormItemPropsSelectV2<D, FI> | FormItemPropsSlider<D, FI>
 | FormItemPropsTimePicker<D, FI> | FormItemPropsTimeSelect<D, FI>


// interface AAA extends BaseProps{
//     type: 'input';
//     name: string;
// }
// interface BBB extends BaseProps{
//     type: 'select';
//     name: number;
// }

// interface BaseProps {
//     type: 'input' | 'select';
//     name: any;
// }

// type AB = AAA | BBB
// const a: AB = {
//     type: 'input',
//     name: '111',
// }
// console.log(a, 'aaa')
