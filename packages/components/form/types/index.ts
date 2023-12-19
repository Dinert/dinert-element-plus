
import {
    type FormProps, type FormItemProps, type ColProps, type RowProps,
    type InputProps, type InputNumberProps, type AutocompleteProps, type ElSelect, type SwitchProps, type DatePickerProps,
    type ElInput,
    type ElInputNumber,
    type ElAutocomplete,
    type ElTreeSelect,
    ElSwitch,
    ElRadio,
    ElDatePicker,
    RateProps,
    CheckboxGroupProps,
    CheckboxProps,
    SelectOptionProxy,
    ElCascader,
    CascaderProps
} from 'element-plus'
import {SelectProps} from 'element-plus/es/components/select-v2/src/defaults'

type RewriteColProps = Partial<ColProps>

type RewriteRowProps = Partial<RowProps>

type TypeName = 'input' |
                'select' |
                'textarea' |
                'input-autocomplete' |
                'input-number' |
                'switch' |
                'datetime' |
                'date' |
                'week' |
                'month' |
                'year' |
                'datetimerange' |
                'daterange' |
                'monthrange' |
                'custom' | 'radio' | 'tree-select' |
                'rate' |
                'checkbox' |
                'cascader'


export interface RewriteFormItemProps<T = any[]> extends Partial<
InputProps &
InputNumberProps &
Omit<typeof SelectProps, 'options' | 'props'> &
Omit<typeof ElTreeSelect, 'options' | 'data'> &
AutocompleteProps &
SwitchProps &
DatePickerProps &
RateProps &
CheckboxGroupProps
>{
    data?: T | Partial<CheckboxProps[] & SelectOptionProxy[]>;
    options?: T | Partial<CheckboxProps[] & SelectOptionProxy[]>;
    props?: Partial<CascaderProps>;
    on?: Partial< InstanceType<
    typeof ElInput &
    typeof ElInputNumber &
    typeof ElSelect &
    typeof ElAutocomplete &
    typeof ElTreeSelect &
    typeof ElSwitch &
    typeof ElRadio &
    typeof ElDatePicker &
    typeof ElCascader
    >>;
}


export interface CustomFormItemProps<D = any, O = any[]> extends Partial<FormItemProps> {
    key?: any;
    type: TypeName;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string;
    sort?: number;
    options?: RewriteFormItemProps<O>;
    showLabel?: true;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    disabled?: boolean;
    colLayout?: RewriteColProps;
    on?: Partial< InstanceType<
    typeof ElInput &
    typeof ElInputNumber &
    typeof ElSelect &
    typeof ElAutocomplete &
    typeof ElTreeSelect &
    typeof ElSwitch &
    typeof ElRadio &
    typeof ElDatePicker
    >>;
}

export interface RewriteFormProps<D = any> extends Partial<FormProps> {
    model: D & any;
    formItem: {
        [key: string]: CustomFormItemProps;
    };
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
    showLabel?: boolean;
}

export interface DinertFormProps<D = any>{
    form: RewriteFormProps<D>;
    search?: boolean;
}
