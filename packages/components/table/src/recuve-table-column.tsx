import {defineComponent, watch, ref, nextTick, computed} from 'vue'

import {getPropByPath, dataTransformRod, escapeHTML} from '@/utils/tools'
import {treeNode, allowDrop, checkTree, nodeDragEnd, allShow, treeProps} from '@/components/table/hooks'
import {Setting, ArrowDown} from '@element-plus/icons-vue'
import type {TableColumnCtx} from 'element-plus'


import type Node from 'element-plus/es/components/tree/src/model/node'
import type {
    RecuveTableColumnProps,
    RewriteTableProps,
    TablePageProps,
    RewriteTableColumnCtx
} from '@/components/table/types/index'

import type {PropType} from 'vue'

import type {ElSelect} from 'element-plus'

const selectTable = ref<InstanceType<typeof ElSelect>>()

const popoverIndex = ref(0)

const filterColumn = (column: any) => {
    const obj: any = {}
    for (const prop in column) {
        if (prop !== 'children') {
            obj[prop] = column[prop]
        }
    }
    return obj
}

const treeBeforeEnter = (props: TablePageProps) => {
    popoverIndex.value++
    if (popoverIndex.value === 1 && selectTable.value) {
        treeNode(selectTable.value, props.table.tableColumns)
    }
}

const mapWidth: Record<string, any> = {
    index: 60,
    selection: 40,
    expand: 40
}


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
        }
    },
    setup(props) {

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
                    onBeforeEnter={() => treeBeforeEnter((props as TablePageProps))}
                    v-slots={
                        {
                            default: () => (
                                <ul class="el-popover-classify">
                                    <li>
                                        <el-link class="allSelect" underline={false}
                                            type={'primary'} onClick={() => allShow(selectTable.value, props.table?.tableColumns || [])}
                                        >全选</el-link>
                                    </li>
                                    <el-tree
                                        ref={selectTable}
                                        draggable
                                        data={props.table?.tableColumns}
                                        default-expand-all
                                        show-checkbox
                                        node-key={'prop'}
                                        props={treeProps}
                                        allowDrop={allowDrop}
                                        onCheckChange={checkTree}
                                        onNodeDragEnd={(e: Node) => nodeDragEnd(e, (selectTable.value as any))}
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
            const itemFunc = column.functions || {}
            const functions = computed(() => {
                const result: any = []
                let index = 0
                Object.keys((itemFunc)).forEach(key => {
                    const value = itemFunc[key]
                    result.push({
                        key: key,
                        ...value,
                        sort: typeof value.sort === 'undefined' ? index : value.sort,
                    })
                    index++
                })

                result.sort((a: any, b: any) => {
                    return a.sort - b.sort
                })
                return result
            })

            const defaultFunctions = computed(() => {
                const list = functions.value.slice(0, column.operationsSplit)
                return list
            })

            const seniorFunctions = computed(() => {
                const list = functions.value.slice(column.operationsSplit, functions.value.length)
                const arr2 = Object.fromEntries(list)
                return arr2
            })


            if (functions.value && functions.value.length) {
                return (
                    <>
                        {defaultFunctions.value.map((item2: any) => {
                            return (
                                <el-link type={item2.type || 'primary'} onClick={() => item2.click && item2.click(scope, column)} key={item2.key}>{item2.message}</el-link>
                            )
                        })}
                        {seniorFunctions.value.length
                        && <el-link type="primary">更多
                            <el-icon><ArrowDown /></el-icon>
                        </el-link>

                        }
                    </>
                )
            }

            return <div class="cell-item">{ (isSlotValue && slotValue) || value}</div>
        }

        return {
            settingRender,
            moreRender
        }
    },
    render() {
        const defaultSlot = this.$slots.default

        return (
            <>
                {
                    // eslint-disable-next-line array-callback-return, consistent-return
                    this.tableColumns && this.tableColumns.map(item => {
                        const show = item.show === undefined || item.show === true
                        const checked = item.checked === undefined || item.checked === true
                        const custom = !['index', 'selection', 'expand'].includes((item.type as string)) || item.custom
                        const fixed = item.prop === 'operations' && item.fixed === undefined ? 'right' : item.fixed
                        const showOverflowTooltip = item.showOverflowTooltip === undefined && item.prop !== 'operations' ? true : item.showOverflowTooltip
                        const className = `${item.prop || ''} ${item.className || ''}`
                        const align = item.prop === 'operations' && item.align === undefined ? 'center' : item.align
                        const width = item.prop === 'operations' && item.width === undefined ? 200 : item.width
                        const formatter = item.formatter && typeof item.formatter === 'function'
                        const noChildItem = filterColumn(item)


                        if (show && checked && custom) {
                            return (
                                <el-table-column
                                    {...noChildItem}
                                    key={item.prop}
                                    fixed={fixed}
                                    show-overflow-tooltip={showOverflowTooltip}
                                    className={className}
                                    width={width}
                                    align={align}
                                    v-slots= {{
                                        default: (scope: any) => {
                                            const deepValue = getPropByPath(scope.row, item.prop || '')
                                            const value = dataTransformRod(deepValue, this.table?.errData)

                                            const slotValue = defaultSlot?.({...scope, prop: item.prop})
                                            const isSlotValue = slotValue && slotValue[0] && slotValue[0].children

                                            if (formatter) {
                                                const htmlValue = item.formatter && item.formatter(scope, (item as TableColumnCtx<any>), deepValue, scope.$index)
                                                const escapeValue = escapeHTML(htmlValue)

                                                return (
                                                    <>
                                                        {isSlotValue
                                                            ? <div class="cell-item">{ defaultSlot?.({...scope, prop: item.prop})}</div>
                                                            : <div class="cell-item" v-html={escapeValue}></div>}

                                                        <dinert-recuve-table-column table={this.table}
                                                            key={item.prop}
                                                            tableColumns={item.children}
                                                            popover-value={this.popoverValue}
                                                            only-class={this.onlyClass}
                                                            v-slots={defaultSlot}
                                                        >
                                                        </dinert-recuve-table-column>
                                                    </>
                                                )
                                            } else {

                                                return (
                                                    <>
                                                        <div class="cell-item">
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
                                                            v-slots={defaultSlot}
                                                        >
                                                        </dinert-recuve-table-column>
                                                    </>
                                                )
                                            }
                                        },
                                        header: (scope: any) => {

                                            const slotValue = defaultSlot?.({header: 'header_' + item.prop, data: item, ...scope})
                                            const isSlotValue = slotValue && slotValue[0] && slotValue[0].children
                                            if (defaultSlot) {
                                                return (
                                                    <>  {(isSlotValue && slotValue) || <span>{scope.column.label}</span>}
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
                            >
                            </el-table-column>)
                        }

                    })
                }

            </>
        )
    }
})
