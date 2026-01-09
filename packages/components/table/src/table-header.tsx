import {computed, defineComponent, PropType, ref} from 'vue'
import type {HeaderListProps, RewriteTableColumnCtx, RewriteTableProps} from '@packages/components/table/types/index'
import {ArrowDown} from '@element-plus/icons-vue'
import DinertTableColumnControl from './table-column-control'
import {allShow} from '@packages/components/table/hooks'


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
    emits: ['CheckedChange', 'TooltipMouseEnter', 'TooltipMouseLeave'],

    setup(props) {

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

        return {
            headerList,
            selectTableRef,

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

                                const itemDisabled = typeof item.disabled === 'function' ? item.disabled(item) : item.disabled
                                const itemShow = typeof item.show === 'function' ? item.show(item) : item.show

                                if (itemShow || itemShow === undefined)
                                {
                                    // const tooltip = item.tooltip || {} as any
                                    // const content = typeof tooltip.content === 'function' ? tooltip.content(item) : tooltip.content
                                    return (<el-button {...{
                                        ...item,
                                        disabled: itemDisabled,
                                    }} onClick={() => typeof item.click === 'function' && item.click(item)}>{item.message}</el-button>)
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
