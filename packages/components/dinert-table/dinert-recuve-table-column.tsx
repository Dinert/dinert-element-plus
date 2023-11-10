import {defineComponent, watch, ref, nextTick} from 'vue'

import {getPropByPath, dataTransformRod, escapeHTML} from '@/utils/tools'
import {treeNode, allowDrop, checkTree, nodeDragEnd, allShow, treeProps} from './hooks'
import {Setting} from '@element-plus/icons-vue'
import type {TableColumnCtx} from 'element-plus'


import type Node from 'element-plus/es/components/tree/src/model/node'
import type {
    RecuveTableColumnProps,
    RewriteTableProps,
    DTableProps,
    RewriteTableColumnCtx
} from './types/index'

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

const treeBeforeEnter = (props: DTableProps) => {
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

const settingRender = (props: RecuveTableColumnProps) => {
    return (
        <el-popover
            value={props.popoverValue}
            onBeforeEnter={() => treeBeforeEnter((props as DTableProps))}
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
                                onNodeDragEnd={(e: Node) => nodeDragEnd(e, selectTable.value)}
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
    setup(props, ctx) {

        watch(() => props.table?.key, () => {
            nextTick(() => {
                selectTable.value && treeNode(selectTable.value, props.table?.tableColumns)
            })
        }, {
            immediate: true
        })

        const defaultSlot = ctx.slots.default

        const dinertRecuveTableColumn = () => {
            return (
                <>
                    {
                    // eslint-disable-next-line array-callback-return, consistent-return
                        props.tableColumns && props.tableColumns.map(item => {
                            const show = item.show === undefined || item.show === true
                            const checked = item.checked === undefined || item.checked === true
                            const custom = !['index', 'selection', 'expand'].includes((item.type as string)) || item.custom
                            const fixed = item.prop === 'operations' && item.fixed === undefined ? 'right' : item.fixed
                            const showOverflowTooltip = item.showOverflowTooltip === undefined && item.prop !== 'operations' ? true : item.showOverflowTooltip
                            const className = `${item.prop || ''} ${item.className || ''}`
                            const align = item.prop === 'operations' && item.align === undefined ? 'center' : item.align
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
                                        align={align}
                                        v-slots= {{
                                            default: (scope: any) => {
                                                const deepValue = getPropByPath(scope.row, item.prop || '')
                                                const value = dataTransformRod(deepValue, props.table?.errData)

                                                const slotValue = defaultSlot?.({...scope, prop: item.prop}) as any
                                                const isSlotValue = slotValue[0] && slotValue[0].children

                                                if (formatter) {
                                                    const htmlValue = item.formatter && item.formatter(scope, (item as TableColumnCtx<any>), deepValue, scope.$index)
                                                    const escapeValue = escapeHTML(htmlValue)

                                                    return (
                                                        <>
                                                            {isSlotValue
                                                                ? <div class="cell-item">{ defaultSlot?.({...scope, prop: item.prop})}</div>
                                                                : <div class="cell-item" v-html={escapeValue}></div>}

                                                            <dinert-recuve-table-column table={props.table}
                                                                key={item.prop}
                                                                tableColumns={item.children}
                                                                popover-value={props.popoverValue}
                                                                only-class={props.onlyClass}
                                                                v-slots={defaultSlot}
                                                            >

                                                            </dinert-recuve-table-column>
                                                        </>
                                                    )
                                                } else {
                                                    return (
                                                        <>
                                                            <div class="cell-item">
                                                                <div class="cell-item">{ (isSlotValue && slotValue) || value}</div>
                                                            </div>
                                                            <dinert-recuve-table-column table={props.table}
                                                                key={item.prop}
                                                                tableColumns={item.children}
                                                                popover-value={props.popoverValue}
                                                                only-class={props.onlyClass}
                                                                v-slots={defaultSlot}
                                                            >

                                                            </dinert-recuve-table-column>

                                                        </>
                                                    )
                                                }
                                            },
                                            header: (scope: any) => {

                                                const slotValue = defaultSlot?.({header: 'header_' + item.prop, data: item, ...scope}) as any
                                                const isSlotValue = slotValue[0] && slotValue[0].children
                                                if (defaultSlot) {
                                                    return (
                                                        <>  {(isSlotValue && slotValue) || <span>{scope.column.label}</span>}
                                                            {item.setting && props.table?.setting !== false && settingRender((props as RecuveTableColumnProps))}
                                                        </>
                                                    )
                                                } else {
                                                    return (
                                                        <>
                                                            <span>{scope.column.label}</span>
                                                            {item.setting && props.table?.setting !== false && settingRender(props as RecuveTableColumnProps)}
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

        return dinertRecuveTableColumn
    }
})
