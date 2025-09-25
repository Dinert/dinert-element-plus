import {defineComponent, watch, ref, nextTick, computed} from 'vue'

import {getPropByPath, dataTransformRod} from '@packages/utils/tools'
import {treeNode, allowDrop, checkTree, nodeDragEnd, allShow, treeProps} from '@packages/components/table/hooks'
import {Setting, ArrowDown} from '@element-plus/icons-vue'
import {ElMessageBox, type TableColumnCtx} from 'element-plus'
import {buildVueDompurifyHTMLDirective} from 'vue-dompurify-html'


import type Node from 'element-plus/es/components/tree/src/model/node'
import type {
    RecuveTableColumnProps,
    RewriteTableProps,
    RewriteTableColumnCtx,
    OperationsProps
} from '@packages/components/table/types/index'

import type {PropType} from 'vue'

import type {ElSelect} from 'element-plus'


const filterColumn = (column: any) => {
    const obj: any = {}
    for (const prop in column) {
        if (prop !== 'children') {
            obj[prop] = column[prop]
        }
    }
    return obj
}

const mapWidth: Record<string, any> = {
    index: 60,
    selection: 40,
    expand: 40
}

const DompurifyHtml = buildVueDompurifyHTMLDirective({})


export default defineComponent({
    name: 'dinert-recuve-table-column',
    props: {
        onlyClass: {
            type: String,
            default: ''
        },
        popoverValue: {
            type: Boolean,
            default: false
        },
        table: {
            type: Object as PropType<RewriteTableProps>,
        },
        tableColumns: {
            type: Array as PropType<RewriteTableColumnCtx[]>,
            default: () => ([])
        },
        defaultCheckedKeys: {
            type: Array,
            default: () => ([])
        }
    },
    directives: {
        DompurifyHtml: DompurifyHtml
    },
    emits: ['CheckedChange'],
    setup(props, {emit}) {
        const selectTable = ref<InstanceType<typeof ElSelect>>()

        watch(() => props.table?.key, () => {
            nextTick(() => {
                selectTable.value && treeNode(selectTable.value, props.table?.tableColumns)
            })
        }, {
            immediate: true
        })
        const settingRender = (props: RecuveTableColumnProps) => {
            return (
                <el-popover
                    value={props.popoverValue}
                    v-slots={
                        {
                            default: () => (
                                <ul class="dinert-popover-classify">
                                    <li>
                                        <el-button class="allSelect" link
                                            type={'primary'} onClick={async () => allShow(selectTable.value, props.table?.tableColumns || [])}
                                        >全选</el-button>
                                    </li>
                                    <el-tree
                                        ref={selectTable}
                                        draggable
                                        data={props.table?.tableColumns}
                                        default-expand-all
                                        defaultCheckedKeys={props.defaultCheckedKeys}
                                        show-checkbox
                                        node-key={'prop'}
                                        props={treeProps}
                                        allowDrop={allowDrop}
                                        onCheckChange={async (data: Node, checked: boolean, childChecked: boolean) => {
                                            // eslint-disable-next-line @typescript-eslint/await-thenable
                                            await checkTree(data, checked, childChecked)
                                            emit('CheckedChange', data, checked, childChecked)
                                        }}
                                        onNodeDragEnd={(currentNode: Node, targetNode: Node) => nodeDragEnd(currentNode, targetNode, (selectTable.value as any))}
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
                                <el-icon class="setting-icon">
                                    <Setting/>
                                </el-icon>
                            )

                        }
                    }
                >
                </el-popover>)
        }

        const moreRender = (column: RewriteTableColumnCtx, _this: any, {
            value,
            scope,
            isSlotValue,
            slotValue
        }: any) => {
            const itemOperations = column.operations || {}
            const operations = computed<OperationsProps[]>(() => {
                const result: any = []
                Object.keys((itemOperations)).forEach(key => {
                    const tempObj = itemOperations[key]
                    if ((typeof tempObj.show !== 'function' && [true, undefined].includes(tempObj.show))
                        || (typeof tempObj.show === 'function' && [true, undefined].includes(tempObj.show(scope, column, tempObj)))
                    ) {
                        result.push({
                            key: key,
                            ...tempObj,
                        })
                    }
                })

                result.sort((a: any, b: any) => {
                    return (a.sort || Infinity) - (b.sort || Infinity)
                })
                return result
            })
            let maxOperations = column.maxOperations || 3
            const operationsLen = operations.value.length
            maxOperations = operationsLen > maxOperations ? maxOperations - 1 : maxOperations

            const defaultFunctions = computed(() => {
                const list = operations.value.slice(0, maxOperations)
                return list
            })

            const seniorFunctions = computed(() => {
                const list = operations.value.slice(maxOperations, operations.value.length)
                return list
            })


            if (operations.value && operations.value.length) {
                return (
                    <>
                        {defaultFunctions.value.map(item2 => {
                            const message = typeof item2.message === 'function' ? item2.message(scope, column, item2) : item2.message

                            const buttonCom = (<el-button {...{
                                ...item2,
                                type: item2.key === 'delete' ? 'danger' : item2.type || 'primary',
                                link: item2.link === undefined ? true : item2.link
                            }}

                            onClick={() => {
                                if (item2.second === 'messageBox' || item2.key === 'delete') {
                                    return ElMessageBox({
                                        title: '警告',
                                        message: `是否${message}该条数据？`,
                                        type: 'warning',
                                        showCancelButton: true,
                                        cancelButtonText: '取消',
                                        beforeClose(action, instance, done) {
                                            done()
                                        },
                                        ...item2.messageBox
                                    }).then(() => {
                                        return item2.click && item2.click(scope, column, item2)
                                    }).catch(() => null)
                                }
                                return item2.click && item2.click(scope, column, item2)
                            }}
                            key={(item2 as any).key}>
                                {message}
                            </el-button>)

                            if (item2.second === 'messageBox') {
                                return buttonCom
                            }

                            if (item2.key === 'delete' || item2.second) {
                                return (
                                    <el-popconfirm title={`是否${message}该数据？`} {...{...item2.confirm}}
                                        onConfirm={() => item2.click && item2.click(scope, column, item2)}>
                                        {{
                                            reference: () => {
                                                return (<el-button {...{
                                                    ...item2,
                                                    type: item2.key === 'delete' ? 'danger' : item2.type || 'primary',
                                                    link: item2.link === undefined ? true : item2.link
                                                }}
                                                key={(item2 as any).key}>
                                                    {message}
                                                </el-button>)
                                            }
                                        }}
                                    </el-popconfirm>

                                )
                            }
                            return buttonCom

                        })}

                        {(seniorFunctions.value.length && operations.value.length > maxOperations
                        && <el-dropdown teleported={true}
                            onCommand={item => {
                                if (item.key === 'delete' || item.second) {
                                    return ElMessageBox({
                                        title: '警告',
                                        message: `是否${item.message}该条数据？`,
                                        type: 'warning',
                                        showCancelButton: true,
                                        cancelButtonText: '取消',
                                        beforeClose(action, instance, done) {
                                            done()
                                        },
                                        ...item.messageBox
                                    }).then(() => {
                                        return item.click && item.click(scope, column, item)
                                    }).catch(() => null)
                                }
                                return item.click && item.click(scope, column, item)
                            }}
                            v-slots= {{
                                default: () => {
                                    return (
                                        <el-button type="primary" link text>
                                            更多<el-icon><ArrowDown /></el-icon>
                                        </el-button>
                                    )
                                },
                                dropdown: () => {

                                    return (
                                        <el-dropdown-menu>
                                            {
                                                seniorFunctions.value.map(item => {
                                                    const message = typeof item.message === 'function' ? item.message(scope, column, item) : item.message
                                                    return (
                                                        <el-dropdown-item command={item}>{message}</el-dropdown-item>
                                                    )
                                                })
                                            }
                                        </el-dropdown-menu>
                                    )
                                }
                            }}>

                        </el-dropdown>) || null

                        }
                    </>
                )
            }
            return <div class={['cell-item-text']}>{ (isSlotValue && slotValue) || value}</div>
        }

        return {
            settingRender,
            moreRender
        }
    },
    render() {
        const solts = this.$slots
        const defaultSlot = solts.default
        const headerSlot = solts.header
        return (
            <>
                {
                    // eslint-disable-next-line array-callback-return, consistent-return
                    this.tableColumns && this.tableColumns.map(item => {
                        let show = typeof item.show === 'function' ? item.show(item) : item.show
                        show = show === undefined || show === true
                        const checked = item.checked === undefined || item.checked === true
                        const custom = !['index', 'selection', 'expand'].includes((item.type as string))
                        const fixed = item.prop === 'operations' && item.fixed === undefined ? 'right' : item.fixed
                        const showOverflowTooltip = item.showOverflowTooltip === undefined && item.prop !== 'operations' ? true : item.showOverflowTooltip
                        const className = `${item.prop || ''} ${item.className || ''} ${item.setting ? 'setting' : ''}`
                        let align = item.prop === 'operations' && item.align === undefined ? 'center' : item.align
                        let width = item.prop === 'operations' && item.width === undefined ? 200 : item.width
                        const formatter = item.formatter && typeof item.formatter === 'function'
                        const noChildItem = filterColumn(item)
                        const propLowerCase = item.prop?.toLocaleLowerCase()
                        if (propLowerCase?.includes('time') || propLowerCase?.includes('date')) {
                            width = width ? width : 170
                        }

                        if (show && checked && custom) {
                            return (
                                <el-table-column
                                    {...noChildItem}
                                    key={item.prop}
                                    fixed={fixed}
                                    show-overflow-tooltip={showOverflowTooltip}
                                    className={className}
                                    width={width}
                                    minWidth={item.minWidth}
                                    align={align}
                                    v-slots= {{
                                        default: (scope: any) => {
                                            const deepValue = getPropByPath(scope.row, item.prop || '')
                                            const value = dataTransformRod(deepValue, this.table?.errData)

                                            const slotValue = defaultSlot?.({...scope, prop: item.prop})
                                            const isSlotValue = slotValue && slotValue[0] && slotValue[0].children

                                            if (formatter) {

                                                let htmlValue = item.formatter && item.formatter(scope, (item as TableColumnCtx<any>), deepValue, scope.$index, this.table?.errData)
                                                htmlValue = dataTransformRod(htmlValue, this.table?.errData)
                                                return (
                                                    <>
                                                        {isSlotValue
                                                            ? <div class={['cell-item']}>{ slotValue }</div>
                                                            : <div class={['cell-item', htmlValue === this.table?.errData ? 'empty-value' : '']} v-dompurify-html={htmlValue}></div>}

                                                        <dinert-recuve-table-column table={this.table}
                                                            key={item.prop}
                                                            tableColumns={item.children}
                                                            popover-value={this.popoverValue}
                                                            only-class={this.onlyClass}
                                                            v-slots={solts}
                                                        >
                                                        </dinert-recuve-table-column>
                                                    </>
                                                )
                                            } else {

                                                return (
                                                    <>
                                                        <div class={['cell-item', value === this.table?.errData || isSlotValue === this.table?.errData ? 'empty-value' : '']}>
                                                            {this.moreRender(item, this, {
                                                                value,
                                                                scope,
                                                                isSlotValue,
                                                                slotValue
                                                            })}
                                                        </div>
                                                        <dinert-recuve-table-column table={this.table}
                                                            key={item.prop}
                                                            tableColumns={item.children}
                                                            popover-value={this.popoverValue}
                                                            only-class={this.onlyClass}
                                                            v-slots={solts}
                                                        >
                                                        </dinert-recuve-table-column>
                                                    </>
                                                )
                                            }
                                        },
                                        header: (scope: any) => {
                                            const slotValue = headerSlot?.({...scope, data: item, prop: item.prop})
                                            const isSlotValue = slotValue && slotValue[0] && slotValue[0].children
                                            if (headerSlot) {
                                                return (
                                                    <>  {<span>{isSlotValue ? slotValue : scope.column.label}</span>}
                                                        {item.setting && this.table?.setting !== false && this.settingRender((this as RecuveTableColumnProps))}
                                                    </>
                                                )
                                            } else {
                                                return (
                                                    <>
                                                        <span>{scope.column.label}</span>
                                                        {item.setting && this.table?.setting !== false && this.settingRender(this as RecuveTableColumnProps)}
                                                    </>
                                                )
                                            }
                                        }
                                    }}
                                >


                                </el-table-column>
                            )
                        } else if (show && checked) {
                            const align = item.align === undefined ? 'center' : 'left'
                            const width = item.width === undefined ? mapWidth[item.type || ''] || 60 : item.width

                            return (<el-table-column
                                {...item}
                                key={item.prop}
                                fixed={fixed}
                                align={align}
                                reserve-selection={item.reserveSelection}
                                width={width}
                                v-slots={this.$slots}
                            >
                            </el-table-column>)
                        }

                    })
                }

            </>
        )
    }
})
