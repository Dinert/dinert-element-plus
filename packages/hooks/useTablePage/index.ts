
import {Ref, ref} from 'vue'

import type {RewriteFormProps} from '@/components/form/types'
import type {RewriteTableProps} from '@/components/table/types'

import type {DinertTablePageProps, AjaxTableProps, ScopeFn} from '@/hooks/useTablePage/types'

import TablePageCom from '@/components/table-page/index'
import {getUuid} from '@/utils/tools'
import lodash from 'lodash'

/**
 * T 表格data数据格式
 * D 表单model的数据格式
 * P 发起请求的数据格式
 * R 请求回来的数据格式
 */

class TablePage<T = any, D = any, P = any, R = any> {
    showSearch: Ref<DinertTablePageProps['search']>
    table: Ref<RewriteTableProps<T>>
    form: Ref<RewriteFormProps<D>>
    footer: Ref<DinertTablePageProps['footer']>

    selecTableDatas: Ref<T[]> = ref([])
    lastSelectDatas: Ref<T[]> = ref([])

    options: DinertTablePageProps<T, D>

    ids: Ref<string[]> = ref([])

    params: P | any
    oldParams: P | any

    tablePageRef: Ref<InstanceType<typeof TablePageCom> | null> = ref(null)

    private readonly defaultOptions: DinertTablePageProps<T, D> = {
        table: {
            rowKey: 'id',
            className: 'table_page' + getUuid(),
            tableColumns: [],
            data: [],
            key: true,
            border: true,
            tableSlot: true,
            pagination: {
                total: 0,
                currentPage: 1,
                pageSize: 10,
                pageSizes: [10, 20, 30, 50, 100],
            },
            on: {
            }
        },
        form: {
            model: {},
            formItem: {}
        },
        footer: false,
        search: false
    }


    private readonly firstOptions: DinertTablePageProps<T, D> = {
        table: {
            tableColumns: [],
            data: [],
            key: true,
            pagination: {}
        },
        form: {model: {}, formItem: {}}
    }


    constructor(options: DinertTablePageProps<T, D>) {

        this.options = lodash.defaultsDeep(lodash.cloneDeep(options), this.defaultOptions)

        this.firstOptions = lodash.cloneDeep(this.options)

        this.table = ref<DinertTablePageProps['table'] | any>(this.options.table)

        this.form = ref<RewriteFormProps<D | any>>(this.options.form)

        this.footer = ref<DinertTablePageProps['footer']>(this.options.footer)

        this.showSearch = ref<DinertTablePageProps['search']>(this.options.search)

        this.params = {}
        this.oldParams = {}
    }

    getTableParams: (params: P) => (Partial<P>) = () => ({} as any)
    ajaxTableDataAfter: (res: R) => void = () => ({})

    lookOperations: ScopeFn<T> = () => ({}) // 查看
    editOperations: ScopeFn<T> = () => ({}) // 编辑
    addOperations: ScopeFn<T> = () => ({}) // 添加
    deleteOperations: ScopeFn<T> = () => ({}) // 删除
    importOperations: ScopeFn<T> = () => ({}) // 导入

    sizeChange(size: number) {

        const pageSize = this.table.value.pagination.pageSize
        this.table.value.pagination.pageSize = size
        const pagination = this.table.value.pagination
        if ((pageSize as any) > size
            || (pagination.currentPage as any) <= Math.ceil((pagination.total as any) / (pagination.pageSize as any))) {
            this.search({name: 'size', pageSize: size})
        }

    }

    currentChange(currentPage: number) {
        this.table.value.pagination.currentPage = currentPage
        this.search({name: 'current', currentPage})
    }

    async getTableData(options: (P & AjaxTableProps) | any) {
        const res = await this.ajaxTableData(options)
        this.changeTableData(res.data)

        typeof this.ajaxTableDataAfter === 'function' && this.ajaxTableDataAfter(res)

        this.table.value.key = !this.table.value.key
        return res
    }

    changeTableData(res: R | any) {
        if (res && res.data && res.data.length) {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].index = i + 1 + (res.pageNum as number) * (res.pageSize as number)
            }
        }
        this.table.value.data = res.data
        this.table.value.pagination.total = res.total
    }

    getAjaxTableDataParams(options: (P & AjaxTableProps) | any) {
        this.params = this.getTableParams(options)

        const isSame = lodash.isEqual(this.params, this.oldParams) // 判断当前提交的参数和上一次提交的参数是否相同

        if (options.name === 'search') {
            if (!isSame) {
                this.table.value.pagination.currentPage = 1
                this.params = this.getTableParams(options)
            }

            this.oldParams = lodash.cloneDeep(this.params)
        } else if (options.name === 'reset') {
            this.resetPagination()
            this.params = this.getTableParams(options)

            this.oldParams = lodash.cloneDeep(this.params)
        } else if (options.name === 'delete') {
            if (this.table.value.data && this.table.value.data.length) {
                if (this.table.value.data.length === 1 && (this.table.value as any).pagination.currentPage > 1) {
                    this.table.value.pagination.currentPage = 2

                    this.params = this.getTableParams(options)
                }
            }
        } else if (options.name === 'current') {
            if (this.oldParams.data && this.oldParams.data.pageNum) {
                this.oldParams.data.pageNum = options.currentPage
            } else if (this.oldParams.data && this.oldParams.data.page) {
                this.oldParams.data.page = options.currentPage
            } else if (this.oldParams.params && this.oldParams.params.page) {
                this.oldParams.params.page = options.currentPage
            } else if (this.oldParams.params && this.oldParams.params.pageNum) {
                this.oldParams.params.pageNum = options.currentPage
            }

            if (this.oldParams.data && this.oldParams.data.pageSize) {
                this.oldParams.data.pageSize = this.table.value.pagination.pageSize
            } else if (this.oldParams.params && this.oldParams.params.pageSize) {
                this.oldParams.params.pageSize = this.table.value.pagination.pageSize
            }

            this.params = lodash.cloneDeep(this.oldParams)
        } else if (options.name === 'size') {
            if (this.oldParams.data && this.oldParams.data.pageSize) {
                this.oldParams.data.pageSize = options.pageSize
            } else if (this.oldParams.params && this.oldParams.params.pageSize) {
                this.oldParams.params.pageSize = options.pageSize
            }

            this.params = lodash.cloneDeep(this.oldParams)
        }
        if (!['size', 'current'].includes(options.name || '') || !this.table.value.rowKey) {
            this.selecTableDatas.value = []
        }

        return this.params
    }

    ajaxTableData(options: (P & AjaxTableProps)): Promise<R | any> {
        return new Promise(resolve => {
            resolve(this.getAjaxTableDataParams(options))
        })
    }


    // 查询
    search(options: (P & AjaxTableProps) | any = {name: 'search'}) {

        for (const prop in this.form.value?.model) {
            if ([null, undefined, ''].includes((this.form.value.model as any)[prop])) {
                delete this.form.value?.model[prop]
            }
        }
        return this.getTableData(options)
    }

    // 重置查询
    resetSearch(options: (P & AjaxTableProps) | any = {name: 'reset'}) {
        this.resetParams()
        this.search(options)
    }


    // 重置分页参数
    resetPagination() {
        this.table.value.pagination = this.defaultOptions.table.pagination
    }

    // 重置表格请求参数
    resetParams() {
        if (lodash.isEmpty(this.firstOptions.form?.model)) { // 判断查询的默认参数是否为空
            for (const prop in this.form.value?.model) {
                delete this.form.value?.model[prop]
            }
        } else {
            for (const prop in this.form.value?.model) {
                delete this.form.value?.model[prop]
            }
            for (const prop in this.firstOptions.form?.model) {
                this.form.value.model[prop] = this.firstOptions.form?.model[prop]
            }
        }
    }

    // 清空参数
    clearParams() {
        for (const prop in this.form.value?.model) {
            delete this.form.value.model[prop]
        }
    }

    // 根据key获取表格中的数据
    getTableDataKeys(key: string = 'id') {
        this.ids.value = lodash.map(this.table.value.data || [], key)
    }

}


export default TablePage
