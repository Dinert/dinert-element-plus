
import {Ref, onMounted, ref} from 'vue'

import type {DinertTablePageProps, AjaxTableProps} from './types'

import TablePageComponent from '@packages/components/table-page/index'
import TableComponent from '@packages/components/table/index'
import FormComponent from '@packages/components/form/index'
import {getUuid} from '@packages/utils/tools'
import lodash from 'lodash'
import {MergeProp} from '@packages/components/form/types/utils'

/**
 * T 表格data数据格式
 * D 表单model的数据格式
 * FI 表单formItem的数据格式
 * P 发起请求的数据格式
 * R 请求回来的数据格式
 */

class TablePage<T, D = any, FI = any, P = object, R = any> {
    showSearch: Ref<DinertTablePageProps['search']>
    table: Ref<DinertTablePageProps<T, D, FI>['table']>
    form: Ref<DinertTablePageProps<T, D, FI>['form']>
    footer: Ref<DinertTablePageProps['footer']>
    header: Ref<DinertTablePageProps['header']>

    selecTableDatas: Ref<T[]> = ref([])
    lastSelectDatas: Ref<T[]> = ref([])

    options: DinertTablePageProps<T, D, FI>

    ids: Ref<string[]> = ref([])

    params: P | any
    oldParams: P | any

    tablePageRef: Ref<InstanceType<typeof TablePageComponent> | null> = ref(null)

    tableRef: Ref<InstanceType<typeof TablePageComponent>['tableRef'] | null> = ref(null) // DinertTable的Dom
    tableOriginRef: Ref<InstanceType<typeof TableComponent>['tableRef'] | null> = ref(null) // elTable的Dom

    formRef: Ref<(InstanceType<typeof TablePageComponent>['formRef']) | null> = ref(null) // DinertForm的Dom
    formOriginRef: Ref<(InstanceType<typeof FormComponent>['formRef']) | null> = ref(null) // elForm的Dom

    private readonly defaultOptions: DinertTablePageProps<T, D, FI> = {
        table: {
            rowKey: 'id',
            className: 'table_page' + getUuid(),
            tableColumns: [],
            data: [],
            key: true,
            border: true,
            pagination: {
                total: 0,
                currentPage: 1,
                pageSize: 10,
                pageSizes: [10, 20, 30, 50, 100],
            },
        },
        form: {
            model: {},
            formItem: {}
        },
        footer: false,
        search: false
    }


    private readonly firstOptions: DinertTablePageProps<T, D, FI> = {
        table: {
            tableColumns: [],
            data: [],
            key: true,
            pagination: {}
        },
        form: {model: {}, formItem: {}}
    }


    constructor(options: DinertTablePageProps<T, D, FI> & {initMounteFlag?: boolean}) {

        this.options = lodash.defaultsDeep(lodash.cloneDeep(options), this.defaultOptions)

        this.firstOptions = lodash.cloneDeep(this.options)

        this.table = ref<DinertTablePageProps<T, D, FI>['table'] | any>(this.options.table)

        this.form = ref<DinertTablePageProps<T, D, FI>['form'] | any>(this.options.form)

        this.footer = ref<DinertTablePageProps<T, D, FI>['footer']>(this.options.footer)

        this.header = ref<DinertTablePageProps<T, D, FI>['header']>(this.options.header)

        this.showSearch = ref<DinertTablePageProps<T, D, FI>['search']>(this.options.search)

        this.params = {}
        this.oldParams = {};

        // 在组件挂载时调用
        ([undefined, true].includes(options.initMounteFlag)) && this.initMonunt()

        // 监听表格选择的方法，方便表格数据回显
        this.tableSelectEvent()
    }

    initMonunt() {
        onMounted(() => {
            this.tableRef.value = this.tablePageRef.value?.tableRef
            this.tableOriginRef.value = this.tablePageRef.value?.tableRef?.tableRef

            this.formRef.value = this.tablePageRef.value?.formRef
            this.formOriginRef.value = this.tablePageRef.value?.formRef?.formRef
        })
    }

    // 获取请求参数
    getTableParams: (params: P) => (Partial<P>) = () => ({} as P)
    ajaxTableDataAfter: (res: R) => void = () => undefined

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

    async getTableData(options: (MergeProp<P, AjaxTableProps>)) {
        const res = await this.ajaxTableData(options)
        this.changeTableData(res)

        typeof this.ajaxTableDataAfter === 'function' && this.ajaxTableDataAfter(res)

        this.table.value.key = !this.table.value.key
        return res
    }

    // 获取请求的所有参数
    getAjaxTableDataParams(options: MergeProp<P, AjaxTableProps> | any): MergeProp<P, AjaxTableProps> {
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
                    this.table.value.pagination.currentPage = (this.table.value.pagination as any).currentPage - 1

                    this.params = this.getTableParams(options)
                }
            }
        } else if (['current', 'size', 'reset'].includes(options.name || '')) {
            this.oldParams = lodash.cloneDeep(this.params)
        }

        if (!['size', 'current'].includes(options.name || '') || !this.table.value.rowKey) {
            this.selecTableDatas.value = []
        }

        return this.params
    }

    // 请求
    ajaxTableData(options: (MergeProp<P, AjaxTableProps>)): Promise<R> {
        return new Promise(resolve => {
            resolve(this.getAjaxTableDataParams(options) as any)
        })
    }

    changeTableData(res: R | any) {
        if (res && res.data && res.data.length) {
            for (let i = 0; i < res.data.length; i++) {
                res.data[i].index = i + 1 + (res.pageNum as number) * (res.pageSize as number)
            }
            this.table.value.data = res.data
            this.table.value.pagination.total = res.total
        }
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
        this.table.value.pagination = {...this.defaultOptions.table.pagination}
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
        return this.ids.value
    }

    // 回显选中
    echoOperations() {
        const rowKey = this.table.value.rowKey as any
        const keys = (this.selecTableDatas.value || []).map((item: any) => item[rowKey])
        if (this.tablePageRef.value) {
            (this.table.value.data || []).forEach((item: any) => {
                if (keys.includes(item[rowKey])) {
                    this.tablePageRef.value?.tableRef?.tableRef?.toggleRowSelection(item, true)
                } else {
                    this.tablePageRef.value?.tableRef?.tableRef?.toggleRowSelection(item, false)
                }
            })
        }

    }

    // 懒加载使用
    lazyAddKey<T = any>(arr: any = [], children: string = 'children'): T {
        return arr.map((item: any) => {
            if (item[children]) {
                item.children2 = [...item[children]]
                item.hasChildren = true
                delete item[children]
            }
            return {
                ...item,
                children2: item.children2 ? this.lazyAddKey(item.children2) : []
            }
        })
    }

    // 监听表格选择事件，包括全选和单选
    tableSelectEvent() {
        const rowKey: any = this.table.value.rowKey
        if (this.table.value) {
            if (!this.table.value.onSelect) {
                this.table.value.onSelect = (selection: T[]) => {
                    if (rowKey) {
                        this.table.value.data.forEach((item: any) => {
                            for (let i = 0; i < this.selecTableDatas.value.length; i++) {
                                if (item[rowKey] === (this.selecTableDatas.value[i]as any)[rowKey]) {
                                    this.selecTableDatas.value.splice(i, 1)
                                }
                            }
                        })
                        this.selecTableDatas.value = lodash.uniqBy(selection.concat(this.selecTableDatas.value), rowKey)
                    } else {
                        this.selecTableDatas.value = selection
                    }
                }
            }
            if (!this.table.value['onSelect-all']) {
                this.table.value['onSelect-all'] = (selection: T[]) => {
                    if (rowKey) {
                        if (selection.length === 0) {
                            this.table.value.data.forEach((item: any) => {
                                for (let i = 0; i < this.selecTableDatas.value.length; i++) {
                                    if (item[rowKey] === (this.selecTableDatas.value[i] as any)[rowKey]) {
                                        this.selecTableDatas.value.splice(i, 1)
                                    }
                                }
                            })
                        } else {
                            this.selecTableDatas.value = lodash.uniqBy(selection.concat(this.selecTableDatas.value), rowKey)
                        }

                    } else {
                        this.selecTableDatas.value = selection
                    }
                }
            }
        }
    }
}


export default TablePage
