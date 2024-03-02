import {defineComponent, ref, computed, nextTick, watch, onMounted, toRefs} from 'vue'
import type {RewriteTableProps} from '@packages/components/table/types/index'
import {getUuid, columnProp, getTreeNode} from '@packages/utils/tools'
import {resizeTaleHeight, allowDrop, nodeDragEnd, treeProps, treeNode} from '@packages/components/table/hooks'

import DinertRecuveTableColumn from './recuve-table-column'
import useWindowResize from '@packages/hooks/useWindowResize'
import {ArrowDown} from '@element-plus/icons-vue'


import type {ElTable, ElSelect} from 'element-plus'
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
        const tableRef = ref<InstanceType<typeof ElTable>>()
        const popoverValue = ref(false)
        const onlyClass = ref('table_' + getUuid())
        const selectTableRef = ref<InstanceType<typeof ElSelect>>()
        const isAllData = ref(true)
        const headerRef = ref<HTMLElement | null>(null)
        const bodyRef = ref<HTMLElement | null>(null)
        const footerRef = ref<HTMLElement | null>(null)
        const headerFooterRef = ref<HTMLElement | null>(null)

        onMounted(() => {
            console.log(tableRef.value, 'selectTable.value')
        })


        const {table} = toRefs(props)
        const tableColumns = ref(table.value?.tableColumns || [])

        tableColumns.value.forEach((item, index) => {
            item.sort = typeof item.sort === 'undefined' ? index : item.sort
            return item
        })

        tableColumns.value.sort((a: any, b: any) => {
            return a.sort - b.sort
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

            tableRef,
            headerRef,
            headerFooterRef,
            bodyRef,
            footerRef,
            selectTableRef
        }
    },
    render() {
        const slots = this.tableSlot ? this.$slots : {default: (scope: any) => this.$slots[scope.prop && columnProp(scope.prop)]?.(scope)}


        return (
            <section class={'dinert-table'}>
                {
                    this.header
            && <header class={'dinert-table-header'} ref={el => {this.headerRef = el}}>
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
                            <el-button type={this.isAllData ? 'primary' : 'default'}
                            >全部显示
                            </el-button>
                            <el-popover teleported={false}
                                v-slots={
                                    {
                                        default: () => (
                                            <ul class="el-popover-classify">
                                                <el-tree
                                                    ref={el => {this.selectTableRef = el}}
                                                    draggable
                                                    data={this.tableColumns}
                                                    default-expand-all
                                                    default-checked-keys={this.defaultCheckedKeys}
                                                    show-checkbox
                                                    node-key={'prop'}
                                                    props={treeProps}
                                                    allow-drop={allowDrop}
                                                    onCheckChange={this.checkTree}
                                                    onNodeDragEnd={(node: Node) => nodeDragEnd(node, (this.selectTableRef as any))}
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
                        {...this.table?.on}
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

                <div class="dinert-table-footer" ref={el => {this.footerRef = el}}>
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
                        {...this.table?.pagination.on}
                    >

                    </el-pagination>
                </div>

            </section>
        )
    }
})
