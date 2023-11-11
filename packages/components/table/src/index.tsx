import {defineComponent, ref, computed, nextTick, watch, onMounted} from 'vue'
import type {RewriteTableColumnCtx, RewriteTableProps} from '@/components/table/types/index'
import {getUuid, convertToFlat, columnProp, getTreeNode} from '@/utils/tools'
import {resizeTaleHeight, allowDrop, nodeDragEnd, treeProps, treeNode} from '@/components/table/hooks'

import DinertRecuveTableColumn from './recuve-table-column'
import useWindowResize from '@/hooks/useWindowResize'
import {ArrowDown} from '@element-plus/icons-vue'


import type {ElTable, ElSelect} from 'element-plus'
import type {PropType} from 'vue'
import type Node from 'element-plus/es/components/tree/src/model/node'

import '@/assets/scss/dinert-table.scss'

const popoverValue = ref(false)
const onlyClass = ref('table_' + getUuid())
const selectTable = ref<InstanceType<typeof ElSelect>>()
const isAllData = ref(true)
const tableRef = ref<InstanceType<typeof ElTable>>()
const headerRef = ref<HTMLElement | null>(null)
const bodyRef = ref<HTMLElement | null>(null)
const footerRef = ref<HTMLElement | null>(null)
const headerFooterRef = ref<HTMLElement | null>(null)


export default defineComponent({
    name: 'dinert-table',
    props: {
        table: {
            type: Object as PropType<RewriteTableProps>,
        },
        header: {
            type: Boolean,
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


        const tableColumns = computed<RewriteTableColumnCtx[]>(() => {
            return props.table?.tableColumns || []
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
                await treeNode(selectTable.value, props.table?.tableColumns)

                setTimeout(() => {
                    resizeTaleHeightFn()
                })
            })
        }, {
            immediate: true
        })

        watch(() => tableColumns.value, () => {
            nextTick(() => {
                const tableColumnsData = convertToFlat(tableColumns.value)
                const selectData: any = selectTable.value && (selectTable.value as any).getCheckedKeys()
                isAllData.value = tableColumnsData.length === (selectData && selectData.length)
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
            tableRef
        }
    },
    render() {
        const slots = this.tableSlot ? this.$slots : {default: (scope: any) => this.$slots[scope.prop && columnProp(scope.prop)]?.(scope)}


        return (
            <section class={'dinert-table'}>
                {
                    this.header
            && <header class={'dinert-table-header'} ref={headerRef}>
                {
                    this.$slots['header-left']
                    && <div class="dinert-table-header-left">
                        {this.$slots['header-left']?.()}
                    </div>
                }
                {
                    this.getSetting
                    && <div class={'dinert-table-header-right'}>
                        <el-button-group>
                            <el-button type={isAllData.value ? 'primary' : 'default'}
                            >全部显示
                            </el-button>
                            <el-popover teleported={false}
                                v-slots={
                                    {
                                        default: () => (
                                            <ul class="el-popover-classify">
                                                <el-tree
                                                    ref={selectTable}
                                                    draggable
                                                    data={this.tableColumns}
                                                    default-expand-all
                                                    default-checked-keys={this.defaultCheckedKeys}
                                                    show-checkbox
                                                    node-key={'prop'}
                                                    props={treeProps}
                                                    allow-drop={allowDrop}
                                                    onCheckChange={this.checkTree}
                                                    nodeDragEnd={(e: Node) => nodeDragEnd(e, (selectTable.value as any))}
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
                                            <el-button type={!isAllData.value ? 'primary' : ''}>
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
        && <header class={'dinert-table-headerFooter'} ref={headerFooterRef}>
            {this.$slots['header-footer']?.()}
        </header>
                }

                <div ref={bodyRef} class="dinert-table-body">
                    <el-table
                        height={'100%'}
                        border={true}
                        {...this.table}
                        ref={tableRef}
                        row-key={this.table?.rowKey}
                        on={this.table?.on}
                    >
                        <DinertRecuveTableColumn table={this.table}
                            table-columns={this.tableColumns}
                            only-class={onlyClass.value}
                            v-slots={slots}
                            popover-value={popoverValue.value}
                        >
                        </DinertRecuveTableColumn>

                    </el-table>
                </div>

                <div class="dinert-table-footer" ref={footerRef}>
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
                        on={this.table?.on}
                    >

                    </el-pagination>
                </div>

            </section>
        )
    }
})
