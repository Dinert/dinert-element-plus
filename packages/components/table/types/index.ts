import type {TableProps, TableColumnCtx, ElTable, ElPagination} from 'element-plus'


export interface ScopeProps<T = any> {
    $index: number;
    cellIndex: number;
    column: RewriteTableColumnCtx<T>;
    row: T;
    store: typeof ElTable;
    _self: any;
}

export interface FunctionsProps<T = any>{
    message?: string;
    value?: string;
    click?: (scope: ScopeProps<T>, column: RewriteTableColumnCtx<T>, item: FunctionsProps<T>) => void;
    sort?: number;
    type?: string;
    key?: any;
}

export interface RewriteTableColumnCtx<T=any> extends Omit<Partial<TableColumnCtx<T>>, 'children'>{
    type?: string;
    checked?: boolean;
    show?: boolean;
    setting?: boolean;
    maxOperations?: number;
    functions?: {
        [key: string]: FunctionsProps<T>;
    };
    sort?: number;
    disabled?: boolean;
    key?: any;
    class?: any;
    custom?: boolean;
    prop?: string;
    label?: string;
    width?: string | number;
    align?: string;
    children?: Array<RewriteTableColumnCtx<T>>;
}


export interface RecuveTableColumnProps<T = any>{
    onlyClass?: string;
    popoverValue?: boolean;
    table: RewriteTableProps;
    children?: Array<RewriteTableColumnCtx<T>>;
}

export interface RewriteTableProps<T = any> extends TableProps<T> {
    on?: Partial< InstanceType<typeof ElTable>>;
    tableColumns: Array<RewriteTableColumnCtx<T>>;
    errData?: string;
    tableSlot?: boolean;
    setting?: boolean;
    key?: any;
    class?: string;
    pagination: RewritePaginationProps;

}

export interface RewritePaginationProps {
   on?: Partial<InstanceType<typeof ElPagination>>;
   pageSize?: number;
   pageSizes?: number[];
   defaultPageSize?: number;
   total?: number;
   pageCount?: number;
   pagerCount?: number;
   currentPage?: number;
   defaultCurrentPage?: number;
}


export interface TablePageProps<T = any>{
    header?: boolean;
    table: RewriteTableProps<T>;
    footer?: boolean;
    tableSlot?: boolean;
}


export type SelectTable = {setChecked: (num: any) => void, getCheckedKeys: () => void, setCheckedNodes: () => void} | null

export interface CtxType {
    slots: {
        'header-left'?: () => void;
        'header-footer'?: () => void;
    };

}
