import type {DinertFormProps} from '../../../components/form/types'
import type {TableInstance} from 'element-plus'
import type {TablePageProps, RewriteTableColumnCtx, ScopeProps} from '../../../components/table/types/index'

export interface DinertTablePageProps<T = any, D = any, FI = any> extends DinertFormProps<D, FI>, TablePageProps<T>{
}

export interface TableParams<T = any> {
    data: T[];
    page?: number;
    pageNum?: number;
    pageSize?: number;
    total?: number;
    totalPages?: number;
}

export interface AjaxTableProps {
    name?: 'reset' | 'delete' | 'search' | 'current' | 'size';
    currentPage?: number;
    pageSize?: number;
}


export interface Scope<T = any>{
    $index?: number;
    $cellIndex?: number;
    column?: RewriteTableColumnCtx<T>;
    data?: RewriteTableColumnCtx<T>;
    row?: T;
    store?: TableInstance;
    _self?: any;
}

export type ScopeFn<T> = (scope?: Scope<T>) => void
