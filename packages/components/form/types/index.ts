
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
    RewriteRewriteRateProps
} from './components'
import {MergeProp} from './utils'

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
}


export interface CustomFormItemProps<D = any, O = any[], N extends keyof RewriteFormItemPropsMap = any> extends Partial<Omit<FormItemProps, 'label'>> {
    key?: any;
    type: N extends keyof RewriteFormItemPropsMap ? N : keyof RewriteFormItemPropsMap;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string | ((model: D) => string);
    sort?: number;
    options?: RewriteFormItemPropsMap<O>[N];
    showLabel?: boolean;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    tempValueDisabled?: boolean;
    required?: boolean;
    colLayout?: RewriteColProps;
}

type ToModelItem<D, FI> = D extends FI ? D : FI
type ToString<T> = { [P in keyof T]: T[P] extends keyof RewriteFormItemPropsMap ? string : T[P]; }

// eslint-disable-next-line @typescript-eslint/ban-types

type FormItemMap<D, FI> = {
    [P in keyof ToModelItem<D, FI>]: CustomFormItemProps<D, any[], ToModelItem<D, FI>[P] extends keyof RewriteFormItemPropsMap ? ToModelItem<D, FI>[P] : keyof RewriteFormItemPropsMap>;
}

export interface RewriteFormProps<D = any, FI = any> extends Omit<Partial<FormProps>, 'model'> {
    model: Partial<MergeProp<D, ToString<FI>>>;
    vif?: boolean | ((model: D) => boolean);
    formItem: Partial<FormItemMap<D, FI>>;
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
    showLabel?: boolean;
    required?: boolean;
    packUp?: boolean;
    searchButton?: Partial<ButtonProps & {message?: string}>;
    resetButton?: Partial<ButtonProps & {message?: string}>;
}

export interface DinertFormProps<D = any, FI = any>{
    form: RewriteFormProps<D, FI>;
    search?: boolean;
}


// interface AAA extends BaseProps{
//     type: 'input';
//     name: string;
// }
// interface BBB extends BaseProps{
//     type: 'select';
//     age: string;
// }

// interface BaseProps {
//     type: 'input' | 'select';
// }

// interface AB extends AAA, BBB {

// }
