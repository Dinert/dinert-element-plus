
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

type TypeName = 'input' |
                'select' |
                'textarea' |
                'input-number' |
                'input-autocomplete'
                | 'switch'
                | 'datetime'
                | 'date'
                | 'week'
                | 'month'
                | 'year'
                | 'datetimerange'
                | 'daterange'
                | 'monthrange'
                | 'custom' | 'radio' | 'tree-select' | 'radio-button'
                | 'rate'
                | 'checkbox'
                | 'cascader'

export interface RewriteFormItemPropsMapCommon{
    on?: object;
}

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


export interface CustomFormItemProps<D = any, O = any[]> extends Partial<FormItemProps> {
    key?: any;
    type: TypeName;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string;
    sort?: number;
    options?: RewriteFormItemPropsMap<O>[TypeName];
    showLabel?: boolean;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    required?: boolean;
    disabled?: boolean;
    colLayout?: RewriteColProps;
}

export interface RewriteFormProps<D = any> extends Omit<Partial<FormProps>, 'model'> {
    model: Partial<D>;
    formItem: {
        [key: string]: CustomFormItemProps<D>;
    };
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
    showLabel?: boolean;
}

export interface DinertFormProps<D = any>{
    form: RewriteFormProps<D>;
    search?: boolean;
}
