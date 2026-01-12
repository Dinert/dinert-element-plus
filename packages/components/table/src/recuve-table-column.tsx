import {defineComponent, ref, PropType} from 'vue'

import {getPropByPath, dataTransformRod} from '@packages/utils/tools'


import {type TableColumnCtx, type ElSelect} from 'element-plus'
import {buildVueDompurifyHTMLDirective} from 'vue-dompurify-html'
import DinertSettingControl from './table-setting-control'
import DinertTableColumnOperations from './table-column-operations'

import type {

    RewriteTableProps,
    RewriteTableColumnCtx,

} from '@packages/components/table/types/index'


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

        // watch(() => props.table?.key, () => {
        //     nextTick(() => {
        //         selectTable.value && treeNode(selectTable.value, props.table?.tableColumns)
        //     })
        // }, {
        //     immediate: true
        // })

        const cellItemClass = (value: any, errData: any) => {
            return ['cell-item', value === errData ? 'empty-value' : '']
        }
        return {
            cellItemClass,
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

                        // 处理对齐方式
                        const align = item.prop === 'operations' && item.align === undefined ? 'center' : item.align

                        // 处理item
                        const {children, ...noChildItem} = item

                        // 处理打点展示
                        const showOverflowTooltip = item.showOverflowTooltip === undefined && item.prop !== 'operations' ? true : item.showOverflowTooltip

                        // 固定操作列在右侧
                        const fixed = item.prop === 'operations' && item.fixed === undefined ? 'right' : item.fixed

                        // 固定宽度
                        const width = item.prop === 'operations' && item.width === undefined ? 200 : item.width

                        return (
                            <el-table-column
                                {...{
                                    ...noChildItem,
                                    fixed,
                                    showOverflowTooltip,
                                    width,
                                    className: `${item.prop || ''} ${item.className || ''} ${item.setting ? 'setting' : ''}`,
                                    align
                                }}
                                key={item.prop}
                                v-slots= {{
                                    default: (scope: any) => {


                                        let result: any = []

                                        const deepValue = getPropByPath(scope.row, item.prop || '')

                                        let value = dataTransformRod(deepValue, this.table?.errData)

                                        const slotValue = defaultSlot?.({...scope, prop: item.prop})

                                        const isSlotValue = slotValue && slotValue[0] && slotValue[0].children

                                        // 处理formatter
                                        const formatter = item.formatter && typeof item.formatter === 'function'
                                        let htmlValue = ''


                                        if (isSlotValue) {
                                            value = slotValue
                                            result = [(
                                                (<div class={this.cellItemClass(value, this.table?.errData)}>
                                                    {value}
                                                </div>
                                                )
                                            )]
                                        } else if (formatter) {
                                            htmlValue = item.formatter && item.formatter(scope, (item as TableColumnCtx<any>), deepValue, scope.$index, this.table?.errData)
                                            value = dataTransformRod(htmlValue, this.table?.errData)

                                            result = [(
                                                (<div class={this.cellItemClass(value, this.table?.errData)} v-dompurify-html={value}></div>
                                                )
                                            )]
                                        } else {


                                            result = [(
                                                (<div class={this.cellItemClass(value, this.table?.errData)}>
                                                    {value}
                                                </div>
                                                )
                                            )]

                                            if (item.prop === 'operations') {
                                                result = (
                                                    <DinertTableColumnOperations
                                                        operations={item.operations}
                                                        column={item}
                                                        scope={scope}
                                                    >
                                                    </DinertTableColumnOperations>
                                                )
                                            }


                                            if (['selection', 'index', 'expand'].includes(item.type || '')) {
                                                result = null
                                            }

                                        }


                                        if (item.children && item.children.length) {
                                            result.push(
                                                (<><dinert-recuve-table-column
                                                    table={this.table}
                                                    key={item.prop}
                                                    tableColumns={item.children}
                                                    popover-value={this.popoverValue}
                                                    only-class={this.onlyClass}
                                                    v-slots={solts}
                                                >
                                                </dinert-recuve-table-column></>)
                                            )
                                        }

                                        return result
                                    },
                                    header: (scope: any) => {
                                        const slotValue = headerSlot?.({...scope, data: item, prop: item.prop})
                                        const isSlotValue = slotValue && slotValue[0] && slotValue[0].children
                                        const setting = item.setting && this.table?.setting !== false
                                        const result: any = []
                                        if (isSlotValue) {
                                            result.push(<span>{isSlotValue ? slotValue : scope.column.label}</span>)
                                        } else {
                                            result.push(<span>{scope.column.label}</span>)
                                        }
                                        if (setting) {
                                            result.push(<DinertSettingControl table={this.table} />)
                                        }
                                        return result
                                    }
                                }}
                            >
                            </el-table-column>
                        )
                    })
                }

            </>
        )
    }
})
