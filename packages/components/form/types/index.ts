
import type {FormProps, FormItemProps, ColProps, RowProps, InputProps} from 'element-plus'

type RewriteColProps = Partial<ColProps>

type RewriteRowProps = Partial<RowProps>

export interface RewriteFormItemProps extends Partial<FormItemProps>, Partial<InputProps> {
    [key: string]: any;
    on?: {[key: string]: (...items: any) => void};
    disabled?: boolean;
    options?: {
        [key: string]: any;
    };
}

export interface CustomFormItemProps extends Partial<FormItemProps> {
    key?: any;
    type?: string;
    show?: boolean;
    label: string;
    sort?: number;
    options?: RewriteFormItemProps;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    disabled?: boolean;
    colLayout?: RewriteColProps;
    on?: {[key: string]: (...items: any) => void};
}

export interface RewriteFormProps extends Partial<FormProps> {
    model: any;
    formItem: {
        [key: string]: CustomFormItemProps;
    };
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
}

export interface DinertFormProps{
    form: RewriteFormProps;
    search?: boolean;
}

export type HTMLElementEvent<T extends HTMLElement> = Event & {
    target: T;
    currentTarget: T;
}
