
import {
    type FormProps, type FormItemProps, type ColProps, type RowProps,
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

type RewriteColProps = Partial<ColProps>

type RewriteRowProps = Partial<RowProps>


export interface RewriteFormItemPropsMap<O = any[]>{
    input: RewriteInputProps;
    select: RewriteSelectProps<O>;
    custom: RewriteInputProps;
    textarea: RewriteTextareaProps;
    cascader: RewriteCascaderProps<O>;
    'input-autocomplete': RewriteAutocompleteProps;
    'input-number': RewriteInputNumberProps;
    switch: RewriteSwitchProps;
    datetime: RewriteDatePickerProps;
    date: RewriteDatePickerProps;
    week: RewriteDatePickerProps;
    month: RewriteDatePickerProps;
    year: RewriteDatePickerProps;
    datetimerange: RewriteDatePickerProps;
    daterange: RewriteDatePickerProps;
    monthrange: RewriteDatePickerProps;
    radio: RewriteRadioGroupProps<O>;
    checkbox: RewriteCheckboxGroupProps<O>;
    'tree-select': RewriteTreeSelectProps<O>;
    'radio-button': RewriteRadioGroupProps<O>;
    'rate': RewriteRewriteRateProps<O>;
}


export interface CustomFormItemProps<D = any, O = any[], N extends keyof RewriteFormItemPropsMap = any> extends Partial<FormItemProps> {
    key?: any;
    type: N extends keyof RewriteFormItemPropsMap ? N : keyof RewriteFormItemPropsMap;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string;
    sort?: number;
    options?: RewriteFormItemPropsMap<O>[N];
    showLabel?: boolean;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    required?: boolean;
    disabled?: boolean;
    colLayout?: RewriteColProps;
}

type ToModelItem<D, FI> = D extends FI ? D : FI
type FormItemMap<D, FI> = {
    [P in keyof ToModelItem<D, FI>]: CustomFormItemProps<D, any[], ToModelItem<D, FI>[P] extends keyof RewriteFormItemPropsMap ? ToModelItem<D, FI>[P] : keyof RewriteFormItemPropsMap>;
}

export interface RewriteFormProps<D = any, FI = any> extends Omit<Partial<FormProps>, 'model'> {
    model: Partial<D>;
    formItem: Partial<FormItemMap<D, FI>>;
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
    showLabel?: boolean;
}

export interface DinertFormProps<D = any, FI = any>{
    form: RewriteFormProps<D, FI>;
    search?: boolean;
}
