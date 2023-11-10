import {computed, nextTick} from 'vue'
import {ArrowDown} from '@element-plus/icons-vue'
import type {RewriteTableColumnCtx, DTableProps, CtxType} from './types/index'
import {getTreeNode} from '@/utils/tools'
import {allowDrop, nodeDragEnd, treeProps} from './hooks'

import type Node from 'element-plus/es/components/tree/src/model/node'
import type {ComputedRef, Ref} from 'vue'
import type {ElSelect} from 'element-plus'

interface ParamsType {
    tableColumns: ComputedRef<RewriteTableColumnCtx[]>;
     isAllData: Ref<boolean>;
     resizeTaleHeightFn: (props: DTableProps) => void;
     selectTable: Ref<InstanceType<typeof ElSelect>>;
}

const renderHeader = (
    props: DTableProps,
    ctx: CtxType,
    {tableColumns, isAllData, resizeTaleHeightFn, selectTable}: ParamsType
) => {
    const getSetting = computed(() => {
        return getTreeNode(tableColumns.value, 'setting', [true], 'setting').length === 0
        && props.table?.setting !== false
    })
    const defaultCheckedKeys = getTreeNode(tableColumns.value, 'checked', [true, undefined], 'prop')


    const checkTree = (data: Node, checked: boolean, childChecked: boolean) => {
        data.checked = childChecked || checked
        nextTick(() => {
            resizeTaleHeightFn(props)
        })
    }

    return (
        <>
            {
                props.header
                && <header class={'dinert-table-header'}>
                    {
                        ctx.slots['header-left']
                        && <div class="dinert-table-header-left">
                            {ctx.slots['header-left']?.()}
                        </div>
                    }
                    {
                        getSetting.value
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
                                                        data={tableColumns.value}
                                                        default-expand-all
                                                        default-checked-keys={defaultCheckedKeys}
                                                        show-checkbox
                                                        node-key={'prop'}
                                                        props={treeProps}
                                                        allow-drop={allowDrop}
                                                        onCheckChange={checkTree}
                                                        nodeDragEnd={(e: Node) => nodeDragEnd(e, selectTable.value)}
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
                ctx.slots['header-footer']
                && <header class={'dinert-table-headerFooter'}>
                    {ctx.slots['header-footer']?.()}
                </header>
            }
        </>
    )

}

export default renderHeader
