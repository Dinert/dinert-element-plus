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
    message?: string | ((scope: ScopeProps<T>, column: RewriteTableColumnCtx<T>, item: FunctionsProps<T>) => void);
    value?: string;
    click?: (scope: ScopeProps<T>, column: RewriteTableColumnCtx<T>, item: FunctionsProps<T>) => void;
    sort?: number;
    type?: string;
    key?: any;
}

export interface RewriteTableColumnCtx<T=any> extends Omit<Partial<TableColumnCtx<T>>, 'children'>{
    type?: string;
    checked?: boolean;
    show?: boolean | ((column: RewriteTableColumnCtx<T>) => boolean);
    setting?: boolean;
    maxOperations?: number;
    functions?: Record<string, FunctionsProps<T>>;
    // functions?: {
    //     [key: string]: FunctionsProps<T>;
    // };
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

type TableFnProps = Partial<Pick<InstanceType<typeof ElTable>, 'onSelect' | 'onExpand-change' | 'onCurrent-change' | 'onSelect-all' | 'onSelection-change' | 'onCell-mouse-enter' | 'onCell-mouse-leave' | 'onCell-contextmenu' | 'onCell-click' | 'onCell-dblclick' | 'onRow-click' | 'onRow-contextmenu' | 'onRow-dblclick' | 'onHeader-click' | 'onHeader-contextmenu' | 'onSort-change' | 'onFilter-change' | 'onHeader-dragend'>>

export interface RewriteTableProps<T = any> extends TableProps<T>, TableFnProps {
    tableColumns: Array<RewriteTableColumnCtx<T>>;
    errData?: string;
    tableSlot?: boolean;
    setting?: boolean;
    key?: any;
    class?: string;
    pagination: RewritePaginationProps;
}

   type PaginationPropsFn = Partial<Pick<InstanceType<typeof ElPagination>, 'onChange' | 'onUpdate:current-page' |'onUpdate:page-size' | 'onSize-change' | 'onCurrent-change' | 'onPrev-click' | 'onNext-click'>>
export interface RewritePaginationProps extends PaginationPropsFn {
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
