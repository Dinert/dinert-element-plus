import {defineComponent, ref, computed, nextTick, watch, onMounted, toRefs, shallowRef} from 'vue'
import type {HeaderListProps, RewriteTableProps, TablePageProps} from '@packages/components/table/types/index'
import {getUuid, columnProp, getTreeNode, headerProp} from '@packages/utils/tools'
import {resizeTaleHeight, allowDrop, nodeDragEnd, treeProps, treeNode} from '@packages/components/table/hooks'

import DinertRecuveTableColumn from './recuve-table-column'
import useWindowResize from '@packages/hooks/useWindowResize'
import {ArrowDown, Plus, Delete, Download, Upload, Check, Close, ArrowUp} from '@element-plus/icons-vue'

import type {PropType} from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

import '@packages/assets/scss/dinert-table.scss'


export default defineComponent({
    name: 'dinert-table',
    props: {
        table: {
            type: Object as PropType<RewriteTableProps>,
        },
        header: {
            type: [Object, Boolean] as PropType<HeaderListProps | boolean>,
            default: true
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
    emits: ['SizeChange', 'CurrentChange'],
    setup(props) {
        const tableRef = ref<any>()
        const popoverValue = ref(false)
        const onlyClass = ref('table_' + getUuid())
        const selectTableRef = ref<any>()
        const isAllData = ref(true)
        const headerRef = ref<HTMLElement | null>(null)
        const bodyRef = ref<HTMLElement | null>(null)
        const footerRef = ref<HTMLElement | null>(null)
        const headerFooterRef = ref<HTMLElement | null>(null)

        const {table, header} = toRefs(props)
        const tableColumns = ref(table.value?.tableColumns || [])

        let index = 1
        tableColumns.value.forEach(item => {
            item.sort = typeof item.sort === 'undefined' ? index : item.sort
            index++
            return item
        })

        tableColumns.value.sort((a: any, b: any) => {
            return a.sort - b.sort
        })
        let index2 = 1

        const headerList = computed(() => {
            if (typeof header.value === 'boolean') {
                return header.value
            }
            const result: Array<TablePageProps['header']> = []
            Object.keys(header.value).forEach(key => {
                const tempObj = header.value[key]
                if (key === 'add') {
                    tempObj.icon = tempObj.icon || shallowRef(Plus)
                    tempObj.type = 'primary'
                } else if (key === 'delete') {
                    tempObj.icon = tempObj.icon || shallowRef(Delete)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.type = tempObj.type === undefined ? 'danger' : tempObj.type
                } else if (key === 'download') {
                    tempObj.icon = tempObj.icon || shallowRef(Download)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.type = 'primary'
                } else if (key === 'upload') {
                    tempObj.icon = tempObj.icon || shallowRef(Upload)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.type = 'primary'
                } else if (key === 'select') {
                    tempObj.icon = tempObj.icon || shallowRef(Check)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                } else if (key === 'close') {
                    tempObj.icon = tempObj.icon || shallowRef(Close)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                } else if (key === 'down') {
                    tempObj.icon = tempObj.icon || shallowRef(ArrowDown)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                } else if (key === 'up') {
                    tempObj.icon = tempObj.icon || shallowRef(ArrowUp)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                }

                result.push({
                    key: key,
                    ...tempObj,
                    type: tempObj.type || 'default',
                    sort: typeof tempObj.sort === 'undefined' ? index2 : tempObj.sort,
                })
                index2++
            })

            result.sort((a: any, b: any) => {
                return a.sort - b.sort
            })
            return result
        })

        const resizeTaleHeightFn = () => {
            resizeTaleHeight(
                tableRef.value,
                headerRef.value,
                bodyRef.value,
                footerRef.value,
                headerFooterRef.value,
                (props.table as RewriteTableProps)
            )
        }

        onMounted(() => {
            setTimeout(() => {
                resizeTaleHeightFn()
            })
        })


        const getSetting = computed(() => {
            return getTreeNode(tableColumns.value, 'setting', [true], 'setting').length === 0
            && props.table?.setting !== false
        })

        const defaultCheckedKeys = getTreeNode(tableColumns.value, 'checked', [true, undefined], 'prop')

        const checkTree = (data: Node, checked: boolean, childChecked: boolean) => {
            data.checked = childChecked || checked
            nextTick(() => {
                resizeTaleHeightFn()
            })
        }

        useWindowResize(() => {
            resizeTaleHeightFn()
        }, 100)


        watch(() => props.table?.key, () => {
            nextTick(async () => {
                await treeNode(selectTableRef.value, tableColumns.value)

                setTimeout(() => {
                    resizeTaleHeightFn()
                })
            })
        }, {
            immediate: true
        })

        watch(() => tableColumns.value, () => {
            nextTick(() => {
                isAllData.value = tableColumns.value.every(item => item.checked === true)
            })

        }, {
            deep: true,
        })


        return {
            getSetting,
            tableColumns,
            checkTree,
            defaultCheckedKeys,
            resizeTaleHeightFn,
            nodeDragEnd,
            popoverValue,
            onlyClass,
            isAllData,
            isFooter: props.footer,
            headerList,

            tableRef,
            headerRef,
            headerFooterRef,
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
        const isHeader = this.header || (this.getSetting && this.header)

        const headerList = typeof this.headerList !== 'boolean' ? this.headerList as HeaderListProps[] : []
        return (
            <section class={'dinert-table'}>
                {
                    isHeader
            && <header class={'dinert-table-header'} ref={el => {this.headerRef = el}}>
                {
                    <div class="dinert-table-header-left">
                        {
                            headerList.map((item: HeaderListProps) => {
                                if (this.$slots['header_left_' + (item as any).key]) {
                                    return this.$slots['header_left_' + (item as any).key]?.(item)
                                }


                                if ((typeof item.show !== 'function' && [true, undefined].includes(item.show))
                                    || (typeof item.show === 'function' && [true, undefined].includes(item.show(item)))
                                ) {
                                    return <el-button {...{
                                        ...item,
                                        type: item.type || 'primary',
                                    }} onClick={() => item.click && item.click(item)}>{item.message}</el-button>
                                }
                                return null
                            })
                        }
                    </div>
                }
                {
                    this.getSetting
                    && <div class={'dinert-table-header-right'}>
                        <el-button-group>
                            <el-button type={this.isAllData ? 'primary' : 'default'}
                            >全部显示
                            </el-button>
                            <el-popover teleported={false}
                                v-slots={
                                    {
                                        default: () => (
                                            <ul class="el-popover-classify">
                                                <el-tree
                                                    ref={this.selectTableRef}
                                                    draggable
                                                    data={this.tableColumns}
                                                    default-expand-all
                                                    default-checked-keys={this.defaultCheckedKeys}
                                                    show-checkbox
                                                    node-key={'prop'}
                                                    props={treeProps}
                                                    allow-drop={allowDrop}
                                                    onCheckChange={(data: Node, checked: boolean, childChecked: boolean) => this.checkTree(data, checked, childChecked)}
                                                    onNodeDragEnd={(node: Node) => nodeDragEnd(node, (this.selectTableRef))}
                                                    v-slots={
                                                        {
                                                            default: ({data}: {data: Node}) => (
                                                                <div class="text-dot tree-item">
                                                                    <el-tooltip content={data.label}
                                                                        placement={'top'}
                                                                        disabled={data.label && data.label.length < 8}
                                                                        v-slots={
                                                                            {
                                                                                default: () => (<span>{ data.label }</span>)
                                                                            }
                                                                        }
                                                                    >
                                                                    </el-tooltip>
                                                                </div>
                                                            )
                                                        }
                                                    }
                                                >
                                                </el-tree>
                                            </ul>
                                        ),
                                        reference: () => (
                                            <el-button type={!this.isAllData ? 'primary' : ''}>
                                                分类显示<el-icon><ArrowDown/></el-icon>
                                            </el-button>
                                        )
                                    }

                                }
                            >
                            </el-popover>
                        </el-button-group>
                    </div>
                }
            </header>
                }

                {
                    this.$slots['header-footer']
        && <header class={'dinert-table-headerFooter'} ref={el => {this.headerFooterRef = el}}>
            {this.$slots['header-footer']?.()}
        </header>
                }

                <div ref={el => {this.bodyRef = el}} class="dinert-table-body">
                    <el-table
                        height={'100%'}
                        border={true}
                        {...this.table}
                        ref={el => {this.tableRef = el}}
                        row-key={this.table?.rowKey}
                    >
                        <DinertRecuveTableColumn table={this.table}
                            table-columns={this.tableColumns}
                            only-class={this.onlyClass}
                            v-slots={slots}
                            popover-value={this.popoverValue}
                        >
                        </DinertRecuveTableColumn>

                    </el-table>
                </div>

                {this.isFooter && <div class="dinert-table-footer" ref={el => {this.footerRef = el}} >
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
                </div>
                }
            </section>
        )
    }
})
