
import {
    type FormProps, type FormItemProps, type ColProps, type RowProps,
    type InputProps, type InputNumberProps, type AutocompleteProps, type ElSelect, type SwitchProps, type DatePickerProps,
    type ElInput,
    type ElInputNumber,
    type ElAutocomplete,
    type ElTreeSelect,
    ElSwitch,
    ElRadio,
    ElDatePicker
} from 'element-plus'

type RewriteColProps = Partial<ColProps>

type RewriteRowProps = Partial<RowProps>

type TypeName = 'input' |
                'select' |
                'textarea' |
                'input-autocomplete' |
                'input-number' |
                'switch' |
                'time' |
                'datetime' |
                'date' |
                'week' |
                'month' |
                'year' |
                'datetimerange' |
                'daterange' |
                'monthrange' |
                'yearrange' |
                'custom' | 'radio' | 'select-tree'


export interface RewriteFormItemProps extends Partial<
InputProps &
InputNumberProps &
InstanceType<typeof ElSelect> &
AutocompleteProps &
SwitchProps &
DatePickerProps
>{
    options?: any;
}


export interface CustomFormItemProps<D = any, O = any> extends Partial<FormItemProps> {
    key?: any;
    type: TypeName;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string;
    sort?: number;
    options?: O | RewriteFormItemProps;
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
