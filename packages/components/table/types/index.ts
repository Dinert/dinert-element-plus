import type {TableProps, TableColumnCtx} from 'element-plus'

export interface RewriteTableColumnCtx<T=any> extends Omit<Partial<TableColumnCtx<T>>, 'children'>{
    type?: string;
    checked?: boolean;
    show?: boolean;
    setting?: boolean;
    disabled?: boolean;
    key?: any;
    class?: any;
    custom?: boolean;
    prop?: string;
    label?: string;
    width?: string | number;
    align?: string;
    children?: RewriteTableColumnCtx[];
}


export interface RecuveTableColumnProps{
    onlyClass?: string;
    popoverValue?: boolean;
    table: RewriteTableProps;
    children?: RewriteTableColumnCtx[];
}

export interface RewriteTableProps<T = any> extends TableProps<T> {
    on?: {[key: string]: any};
    tableColumns: RewriteTableColumnCtx[];
    errData?: string;
    tableSlot?: boolean;
    tableHeaderSlot?: boolean;
    setting?: boolean;
    key?: any;
    class?: string;
    pagination: RewritePaginationProps;

}

export interface RewritePaginationProps {
   on?: object;
   pageSize?: number;
   pageSizes?: number[];
   defaultPageSize?: number;
   total?: number;
   pageCount?: number;
   pagerCount?: number;
   currentPage?: number;
   defaultCurrentPage?: number;
}


export interface DTableProps<T = any>{
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
