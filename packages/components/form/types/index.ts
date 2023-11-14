
import type {FormProps, FormItemProps, ColProps, RowProps} from 'element-plus'

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
                'custom'


export interface RewriteFormItemProps<O> {
    on?: {[key: string]: (...items: any) => void};
    disabled?: boolean;
    options?: O;
}

export interface CustomFormItemProps<D = any, O = any> extends Partial<FormItemProps> {
    key?: any;
    type: TypeName;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string;
    sort?: number;
    options?: O & RewriteFormItemProps<O>;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    disabled?: boolean;
    colLayout?: RewriteColProps;
    on?: {[key: string]: (...items: any) => void};
}

export interface RewriteFormProps<D = any, O = any> extends Partial<FormProps> {
    model: D & any;
    formItem: {
        [key: string]: CustomFormItemProps<D, O>;
    };
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
}

export interface DinertFormProps<D = any>{
    form: RewriteFormProps<D>;
    search?: boolean;
}
