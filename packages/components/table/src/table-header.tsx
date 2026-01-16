import {computed, defineComponent, PropType, ref} from 'vue'
import type {HeaderListProps, OperationsProps, RewriteTableColumnCtx, RewriteTableProps} from '@packages/components/table/types/index'
import {ArrowDown} from '@element-plus/icons-vue'
import DinertTableColumnControl from './table-column-control'
import {allShow} from '@packages/components/table/hooks'
import lodash from 'lodash'
import {ElMessageBox} from 'element-plus'

export default defineComponent({
    name: 'dinert-table-header',
    props: {
        table: {
            type: Object as PropType<RewriteTableProps>,
        },
        header: {
            type: Object as PropType<HeaderListProps>,
            default: () => ({})
        },
        isAllData: {
            type: Boolean,
        },
        tableColumns: {
            type: Array as PropType<RewriteTableColumnCtx[]>,
            default: () => ([])
        }
    },
    emits: ['CheckedChange', 'TooltipMouseEnter', 'TooltipMouseLeave', 'HeaderTooltipMouseEnter'],

    setup(props, ctx) {

        const selectTableRef = ref<InstanceType<typeof DinertTableColumnControl>>()

        const headerList = computed<HeaderListProps[]>(() => {

            const result: HeaderListProps[] = []

            // eslint-disable-next-line max-statements
            Object.keys(props.header).forEach(key => {
                const tempObj = props.header[key]
                result.push({
                    key: key,
                    ...tempObj,
                })
            })

            result.sort((a: any, b: any) => {
                return (a.sort || Infinity) - (b.sort || Infinity)
            })
            return result
        })

        const buttonClick = (item: HeaderListProps, e: any = null) => {

            if (lodash.isObject(item.messageBox)) {
                ElMessageBox({
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
                    lodash.isFunction(item.clickCb) && item.clickCb(item, e)
                }).catch(() => null)
            } else {
                lodash.isFunction(item.clickCb) && item.clickCb(item, e)
            }
        }

        const tooltipMouseEnter = (e: PointerEvent, item: HeaderListProps) => {

            const tooltipProps = lodash.isFunction(item.tooltip) ? item.tooltip(item) : item.tooltip

            if (lodash.isObject(tooltipProps)) {
                const message = lodash.isFunction(tooltipProps.content) ? tooltipProps.content(item as any) : tooltipProps.content
                ctx.emit('HeaderTooltipMouseEnter', e, message)
            }


        }

        const tooltipMouseLeave = (e: PointerEvent, item: HeaderListProps) => {

            ctx.emit('TooltipMouseLeave', e, item)
        }


        return {
            headerList,
            selectTableRef,
            buttonClick,
            tooltipMouseEnter,
            tooltipMouseLeave

        }
    },
    render() {

        // const isHeader = (this.header && headerList.length) || (this.getSetting && this.header)
        return (
            <header class={'dinert-table-header'}>
                {
                    <div class="dinert-table-header-left">
                        {
                            this.headerList.map((item: HeaderListProps) => {
                                if (this.$slots['header_left_' + (item as any).key]) {
                                    return this.$slots['header_left_' + (item as any).key]?.(item)
                                }

                                const itemDisabled = lodash.isFunction(item.disabled) ? item.disabled(item) : item.disabled
                                const itemShow = lodash.isFunction(item.show) ? item.show(item) : item.show
                                const message = lodash.isFunction(item.message) ? item.message(item) : item.message

                                if (itemShow || itemShow === undefined)
                                {
                                    // const tooltip = item.tooltip || {} as any
                                    // const content = typeof tooltip.content === 'function' ? tooltip.content(item) : tooltip.content
                                    return (<el-button
                                        {...{
                                            ...item,
                                            disabled: itemDisabled,
                                        }}
                                        onClick={(e: any) => this.buttonClick(item, e)}
                                        onMouseenter={e => this.tooltipMouseEnter(e, item)}
                                        onMouseleave={e => this.tooltipMouseLeave(e, item)}
                                    >
                                        {message}
                                    </el-button>)
                                }
                                return null
                            })
                        }
                    </div>
                }
                {

                    (this.table?.setting && <div class={'dinert-table-header-right'}>

                        <el-button-group>
                            <el-button type={this.isAllData ? 'primary' : 'default'}
                                onClick={async () => {
                                    allShow(this.selectTableRef?.selectTableRef, this.table?.tableColumns || [])}}
                            >全部显示
                            </el-button>
                            <el-popover teleported={true}
                                v-slots={
                                    {
                                        default: () => (
                                            <ul class="dinert-popover-classify">
                                                <DinertTableColumnControl
                                                    onCheckedChange={(data, checked, childChecked) => this.$emit('CheckedChange', data, checked, childChecked)}
                                                    onTooltipMouseEnter={(e, label) => this.$emit('TooltipMouseEnter', e, label)}
                                                    onTooltipMouseLeave={(e, label) => this.$emit('TooltipMouseLeave', e, label)}
                                                    ref={el => (this.selectTableRef = el)}
                                                    table={this.table}
                                                ></DinertTableColumnControl>
                                            </ul>
                                        ),
                                        reference: () => (
                                            <el-button type={this.isAllData ? 'default' : 'primary'}>
                                                分类显示<el-icon><ArrowDown/></el-icon>
                                            </el-button>
                                        )
                                    }

                                }
                            >
                            </el-popover>
                        </el-button-group>
                    </div>)
                }
            </header>
        )

    }
})
