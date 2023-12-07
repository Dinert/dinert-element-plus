
import type {FormProps, FormItemProps, ColProps, RowProps, InputProps, InputNumberProps, ElSelect} from 'element-plus'

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
InstanceType<typeof ElSelect>
>{
    on?: {[key: string]: (...items: any) => void};
    disabled?: boolean;
    options?: any;
}


export interface CustomFormItemProps<D = any> extends Partial<FormItemProps> {
    key?: any;
    type: TypeName;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string;
    sort?: number;
    options?: RewriteFormItemProps;
    showLabel?: true;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    disabled?: boolean;
    colLayout?: RewriteColProps;
    on?: {[key: string]: (...items: any) => void};
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
