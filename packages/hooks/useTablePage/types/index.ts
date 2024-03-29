import type {DinertFormProps} from '@packages/components/form/types'
import type {TableInstance} from 'element-plus'
import type {TablePageProps, RewriteTableColumnCtx} from '@packages/components/table/types/index'

export interface DinertTablePageProps<T = any, D = any, FI = object> extends DinertFormProps<D, FI>, TablePageProps<T>{
    search?: boolean;
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
