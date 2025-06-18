import type {TableProps, TableColumnCtx, ElTable, ElPagination, PaginationProps, ButtonProps, PopconfirmProps, ElMessageBoxOptions, ElTooltipProps} from 'element-plus'

export type Mutable<T> = {
    -readonly [K in keyof T]: T[K];
}

export interface ScopeProps<T = any> {
    $index: number;
    cellIndex: number;
    column: RewriteTableColumnCtx<T>;
    row: T;
    store: typeof ElTable;
    _self: any;
}

export interface OperationsProps<T = any> extends Partial<ButtonProps>{
    message?: string | ((scope: ScopeProps<T>, column: RewriteTableColumnCtx<T>, item: OperationsProps<T>) => void);
    show?: boolean | ((scope: ScopeProps<T>, column: RewriteTableColumnCtx<T>, item: OperationsProps<T>) => boolean);
    click?: (scope: ScopeProps<T>, column: RewriteTableColumnCtx<T>, item: OperationsProps<T>) => void;
    sort?: number;
    confirm?: Partial<PopconfirmProps>;
    key?: string;
    second?: boolean | 'messageBox';
    messageBox?: Partial<ElMessageBoxOptions>;
}

export interface RewriteTableColumnCtx<T=any> extends Omit<Partial<TableColumnCtx<T>>, 'children' | 'formatter'>{
    type?: 'default' | 'selection' | 'index' | 'expand';
    checked?: boolean;
    show?: boolean | ((column: RewriteTableColumnCtx<T>) => boolean);
    formatter?: (scope: ScopeProps<T>, column: TableColumnCtx<T>, cellValue: any, index: number, errData?: string) => any;
    setting?: boolean;
    maxOperations?: number;
    operations?: Record<string, OperationsProps<T>>;
    sort?: number;
    children?: Array<RewriteTableColumnCtx<T>>;
}


export interface RecuveTableColumnProps<T = any>{
    onlyClass?: string;
    popoverValue?: boolean;
    table: RewriteTableProps;
    children?: Array<RewriteTableColumnCtx<T>>;
    defaultCheckedKeys?: any[];
}

type TableFnProps = Partial<Pick<InstanceType<typeof ElTable>, 'onSelect' | 'onExpand-change' | 'onCurrent-change' | 'onSelect-all' | 'onSelection-change' | 'onCell-mouse-enter' | 'onCell-mouse-leave' | 'onCell-contextmenu' | 'onCell-click' | 'onCell-dblclick' | 'onRow-click' | 'onRow-contextmenu' | 'onRow-dblclick' | 'onHeader-click' | 'onHeader-contextmenu' | 'onSort-change' | 'onFilter-change' | 'onHeader-dragend'>>

export interface RewriteTableProps<T = any> extends TableProps<T>, TableFnProps {
    tableColumns: Array<RewriteTableColumnCtx<T>>;
    errData?: string;
    setting?: boolean;
    key?: any;
    rowIndex?: RewriteTableColumnCtx<T>;
    rowSelection?: RewriteTableColumnCtx<T>;
    class?: string;
    pagination: RewritePaginationProps;
    autoHeight?: boolean;
}

   type PaginationPropsFn = Partial<Pick<InstanceType<typeof ElPagination>, 'onChange' | 'onUpdate:current-page' |'onUpdate:page-size' | 'onSize-change' | 'onCurrent-change' | 'onPrev-click' | 'onNext-click'>>
export interface RewritePaginationProps extends PaginationPropsFn, Partial<Mutable<PaginationProps>> {

}

export interface RewriteElTooltipProps extends Partial<Omit<ElTooltipProps, 'content'>>{
    content?: string | ((scope: ScopeProps) => string);
}

export interface HeaderListProps extends Omit<Partial<ButtonProps>, 'disabled'>{
    tooltip?: RewriteElTooltipProps;
    message?: string;
    click?: (item: HeaderListProps) => void;
    sort?: number;
    show?: boolean | ((item: HeaderListProps) => boolean);
    key?: string;
    disabled?: boolean | ((item: HeaderListProps) => boolean);
}


export interface TablePageProps<T = any>{
    header?: boolean | {[key: string]: HeaderListProps};
    table: RewriteTableProps<T>;
    footer?: boolean;
    tableSlot?: boolean;
}


export type SelectTable = {setChecked: (num: any) => void, getCheckedKeys: () => void, setCheckedNodes: () => void} | null


