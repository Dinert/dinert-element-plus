import {defineComponent, ref, computed, nextTick, watch, onMounted, toRefs, shallowRef} from 'vue'
import type {HeaderListProps, RewriteTableProps, TablePageProps} from '@packages/components/table/types/index'
import {getUuid, columnProp, getTreeNode, headerProp} from '@packages/utils/tools'
import {resizeTaleHeight, allowDrop, nodeDragEnd, treeProps, treeNode, isAllChecked, allShow} from '@packages/components/table/hooks'

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
        const headerFooterRef = ref<HTMLElement | null>(null)
        const headerTitleRef = ref<HTMLElement | null>(null)

        const {table, header} = toRefs(props)

        const tableColumns = computed(() => {
            const result = table.value?.tableColumns || []

            function sortRecuve(columns) {
                columns.sort((a, b) => (a.sort || Infinity) - (b.sort || Infinity))
                // eslint-disable-next-line @typescript-eslint/prefer-for-of
                for (let i = 0; i < columns.length; i++) {
                    const item = columns[i]
                    if (item.children && item.children.length) {
                        sortRecuve(item.children)
                    }
                }
            }
            sortRecuve(result)
            return result
        })

        const headerList = computed(() => {

            if (typeof header.value === 'boolean') {
                return header.value
            }
            const result: Array<TablePageProps['header']> = []
            // eslint-disable-next-line max-statements
            Object.keys(header.value).forEach(key => {
                const tempObj = header.value[key]
                if (key === 'add') {
                    tempObj.icon = tempObj.icon || shallowRef(Plus)
                    tempObj.type = 'primary'
                    tempObj.message = tempObj.message || '新增'
                } else if (key === 'delete') {
                    tempObj.icon = tempObj.icon || shallowRef(Delete)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.type = tempObj.type === undefined ? 'danger' : tempObj.type
                    tempObj.message = tempObj.message || '删除'
                } else if (key === 'download') {
                    tempObj.icon = tempObj.icon || shallowRef(Download)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.type = 'primary'
                    tempObj.message = tempObj.message || '下载'
                } else if (key === 'upload') {
                    tempObj.icon = tempObj.icon || shallowRef(Upload)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.type = 'primary'
                    tempObj.message = tempObj.message || '上传'
                } else if (key === 'select') {
                    tempObj.icon = tempObj.icon || shallowRef(Check)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.message = tempObj.message || '全选'

                } else if (key === 'close') {
                    tempObj.icon = tempObj.icon || shallowRef(Close)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.message = tempObj.message || '取消全选'

                } else if (key === 'down') {
                    tempObj.icon = tempObj.icon || shallowRef(ArrowDown)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.message = tempObj.message || '展开'

                } else if (key === 'up') {
                    tempObj.icon = tempObj.icon || shallowRef(ArrowUp)
                    tempObj.plain = tempObj.plain === undefined ? 'plain' : tempObj.plain
                    tempObj.message = tempObj.message || '收起'
                }

                result.push({
                    key: key,
                    ...tempObj,
                    type: tempObj.type || 'default',
                })
            })

            result.sort((a: any, b: any) => {
                return (a.sort || Infinity) - (b.sort || Infinity)
            })
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


        const getSetting = computed(() => {
            return getTreeNode(tableColumns.value, 'setting', [true], 'setting').length === 0
            && props.table?.setting !== false
        })

        const defaultCheckedKeys = getTreeNode(tableColumns.value, 'checked', [true, undefined], 'prop')

        const checkTree = (data: Node, checked: boolean, childChecked: boolean) => {
            data.checked = childChecked || checked
            emit('CheckedChange', data, checked, childChecked)
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

        watch(tableColumns, () => {
            nextTick(() => {
                isAllData.value = isAllChecked(tableColumns.value)
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
            headerTitleRef,
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
        const headerList = typeof this.headerList !== 'boolean' ? this.headerList as HeaderListProps[] : []

        const isHeader = (this.header && headerList.length) || (this.getSetting && this.header)

        return (
            <section class={'dinert-table'}>
                {
                    this.$slots['header-title']
        && <header class={'dinert-table-headerTitle'} ref={el => {this.headerTitleRef = el}}>
            {this.$slots['header-title']?.()}
        </header>
                }
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
                                const disabled = typeof item.disabled === 'function' ? item.disabled(item) : item.disabled

                                if ((typeof item.show !== 'function' && [true, undefined].includes(item.show))
                                    || (typeof item.show === 'function' && [true, undefined].includes(item.show(item)))
                                ) {
                                    return <el-button {...{
                                        ...item,
                                        disabled,
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
                                onClick={async () => {
                                    allShow(this.selectTableRef, this.table?.tableColumns || [])}}
                            >全部显示
                            </el-button>
                            <el-popover teleported={false}
                                v-slots={
                                    {
                                        default: () => (
                                            <ul class="dinert-popover-classify">
                                                <el-tree
                                                    ref={el => (this.selectTableRef = el)}
                                                    draggable
                                                    data={this.tableColumns}
                                                    default-expand-all
                                                    default-checked-keys={this.defaultCheckedKeys}
                                                    show-checkbox
                                                    node-key={'prop'}
                                                    props={treeProps}
                                                    allow-drop={allowDrop}
                                                    onCheckChange={(data: Node, checked: boolean, childChecked: boolean) => this.checkTree(data, checked, childChecked)}
                                                    onNodeDragEnd={(currentNode: Node, targetNode: Node) => {
                                                        const currentNodeSort = currentNode.data.sort
                                                        const targetNodeSort = targetNode.data.sort
                                                        currentNode.data.sort = targetNodeSort
                                                        targetNode.data.sort = currentNodeSort
                                                        nodeDragEnd(currentNode, targetNode, this.selectTableRef)
                                                    }
                                                    }
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
                            {
                                this.table?.rowSelection && <el-table-column width="60" align="center" type="selection" {...this.table.rowSelection}></el-table-column>
                            }
                            {
                                this.table?.rowIndex && <el-table-column width="60" align="center" type="index" label="序号" {...this.table.rowIndex}></el-table-column>
                            }

                            <DinertRecuveTableColumn table={this.table}
                                table-columns={this.tableColumns}
                                only-class={this.onlyClass}
                                v-slots={slots}
                                popover-value={this.popoverValue}
                                defaultCheckedKeys={this.defaultCheckedKeys}
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
