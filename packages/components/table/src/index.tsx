import {defineComponent, ref, computed, nextTick, watch, onMounted, toRefs, shallowRef} from 'vue'
import type {HeaderListProps, RewriteTableProps, TablePageProps} from '@packages/components/table/types/index'
import {getUuid, columnProp, getTreeNode, headerProp} from '@packages/utils/tools'
import {resizeTaleHeight, allowDrop, nodeDragEnd, treeProps, treeNode, isAllChecked, allShow} from '@packages/components/table/hooks'

import DinertRecuveTableColumn from './recuve-table-column'
import DinertTableHeader from './table-header'
import useWindowResize from '@packages/hooks/useWindowResize'
import {ArrowDown, Plus, Delete, Download, Upload, Check, Close, ArrowUp} from '@element-plus/icons-vue'

import type {PropType} from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

import '@packages/assets/scss/dinert-table.scss'
import lodash from 'lodash'

function processColumn(columns) {

    columns = columns.filter(item => {
        const checked = item.checked === undefined || item.checked === true

        let show = typeof item.show === 'function' ? item.show(item) : item.show
        show = show === undefined || show === true

        return checked && show
    })

    columns.sort((a, b) => (a.sort || Infinity) - (b.sort || Infinity))
    // eslint-disable-next-line @typescript-eslint/prefer-for-of
    for (let i = 0; i < columns.length; i++) {
        const item = columns[i]
        if (item.children && item.children.length) {
            processColumn([...item.children])
        }
    }
    return columns
}

export default defineComponent({
    name: 'dinert-table',
    props: {
        table: {
            type: Object as PropType<RewriteTableProps>,
        },
        header: {
            type: Object as PropType<HeaderListProps>,
            default: () => ({})
        },
        footer: {
            type: Boolean,
            default: true
        },
        tableSlot: {
            type: Boolean,
            default: false
        },
    },
    emits: ['SizeChange', 'CurrentChange', 'CheckedChange'],
    setup(props, {emit, slots}) {
        const tableRef = ref<any>()
        const popoverValue = ref(false)
        const onlyClass = ref('table_' + getUuid())
        const selectTableRef = ref<any>()
        const isAllData = ref(true)
        const headerRef = ref<HTMLElement | null>(null)
        const bodyRef = ref<HTMLElement | null>(null)
        const footerRef = ref<HTMLElement | null>(null)

        const {table, header} = toRefs(props)

        const tableColumns = computed(() => {
            let result = table.value?.tableColumns || []
            result = processColumn([...result])
            return result
        })


        const resizeTaleHeightFn = () => {
            !slots['table-body'] && resizeTaleHeight(
                tableRef.value,
                headerRef.value,
                bodyRef.value,
                footerRef.value,
                (props.table as RewriteTableProps)
            )
        }

        onMounted(() => {
            setTimeout(() => {
                resizeTaleHeightFn()
            })
        })


        useWindowResize(() => {
            resizeTaleHeightFn()
        }, 100)


        // watch(() => props.table?.key, () => {
        //     console.log('aaa')
        //     nextTick(async () => {
        //         await treeNode(selectTableRef.value, tableColumns.value)
        //         setTimeout(() => {
        //             resizeTaleHeightFn()
        //         })
        //     })
        // }, {
        //     immediate: true
        // })

        watch(tableColumns, () => {
            nextTick(() => {
                isAllData.value = isAllChecked(tableColumns.value)
            })

        }, {
            deep: true,
        })


        return {

            tableColumns,

            resizeTaleHeightFn,
            nodeDragEnd,
            popoverValue,
            onlyClass,
            isAllData,
            isFooter: props.footer,

            tableRef,
            headerRef,
            bodyRef,
            footerRef,
            selectTableRef
        }
    },
    render() {
        const slots = this.tableSlot ? this.$slots : {
            ...this.$slots,
            default: (scope: any) => this.$slots[scope.prop && columnProp(scope.prop)]?.(scope),
            header: (scope: any) => this.$slots[scope.prop && headerProp(scope.prop)]?.(scope)
        }
        console.log(slots, 'slots')


        const isHeader = !lodash.isEmpty(this.header)

        return (
            <section class={'dinert-table'}>
                {this.$slots['header-title'] && <header class={'dinert-table-headerTitle'} >{this.$slots['header-title']?.()}</header>}
                {
                    isHeader && <DinertTableHeader table={this.table} header={this.header} tableColumns={this.tableColumns} isAllData={this.isAllData}></DinertTableHeader>
                }

                {
                    this.$slots['header-footer'] && <header class={'dinert-table-headerFooter'}>{this.$slots['header-footer']?.()}</header>
                }

                <div ref={el => {this.bodyRef = el}} class="dinert-table-body">
                    {this.$slots['table-body'] ? this.$slots['table-body']?.(this.table)
                        : <el-table
                            height={'100%'}
                            border={true}
                            {...this.table}
                            ref={el => {this.tableRef = el}}
                            row-key={this.table?.rowKey}
                            v-slots={{
                                empty: this.$slots['table-empty'] ? (() => this.$slots['table-empty']?.()) : null,
                                append: this.$slots['table-append'] ? (() => this.$slots['table-append']?.()) : null
                            }}
                        >
                            {this.table?.rowSelection && <el-table-column align="center" type="selection" {...this.table.rowSelection}></el-table-column>}
                            {this.table?.rowIndex && <el-table-column width="60" align="center" type="index" label="序号" {...this.table.rowIndex}></el-table-column>}
                            {this.table?.rowExpand && <el-table-column align="center" type="expand" {...this.table.rowExpand}></el-table-column>}

                            <DinertRecuveTableColumn table={this.table}
                                table-columns={this.tableColumns}
                                only-class={this.onlyClass}
                                v-slots={slots}
                                popover-value={this.popoverValue}
                                onCheckedChange={(data: Node, checked: boolean, childChecked: boolean) => this.$emit('CheckedChange', data, checked, childChecked)}
                            >
                            </DinertRecuveTableColumn>

                        </el-table>
                    }
                </div>

                {this.isFooter && this.table?.data && this.table?.data.length !== 0 && <div class="dinert-table-footer" ref={el => {this.footerRef = el}} >
                    {this.$slots['table-footer-left'] ? (<div class="dinert-table-footer-left" >{this.$slots['table-footer-left']?.()}</div>) : null}
                    <el-pagination
                        model:current-page={1}
                        model:page-size={15}
                        pageSizes={[15, 30, 50, 70, 100]}
                        default-page-size={15}
                        layout={'total, sizes, prev, pager, next, jumper'}
                        total={100}
                        {...this.table?.pagination}
                        onSizeChange={(val: number) => this.$emit('SizeChange', val)}
                        onCurrentChange={(val: number) => this.$emit('CurrentChange', val)}
                    >
                    </el-pagination>
                    {this.$slots['table-footer-right'] ? (<div class="dinert-table-footer-right" >{this.$slots['table-footer-right']?.()}</div>) : null}

                </div>
                }
            </section>
        )
    }
})
