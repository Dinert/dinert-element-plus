import {PropType, computed, defineComponent, nextTick, ref} from 'vue'

import type {HeaderListProps, RewriteTableColumnCtx, RewriteTableProps} from '@packages/components/table/types/index'
import {getUuid, columnProp, getTreeNode, headerProp} from '@packages/utils/tools'
import {resizeTaleHeight, allowDrop, nodeDragEnd, treeProps, treeNode, isAllChecked, allShow} from '@packages/components/table/hooks'

export default defineComponent({
    name: 'dinert-table-column-control',
    props: {

        tableColumns: {
            type: Array as PropType<RewriteTableColumnCtx[]>,
            default: () => ([])
        }
    },
    emits: ['CheckedChange'],
    setup(props, ctx) {
        const selectTableRef = ref(null)

        const defaultCheckedKeys = computed(() => {
            return getTreeNode(props.tableColumns, 'checked', [true, undefined], 'prop')
        })

        const checkTree = (data: Node, checked: boolean, childChecked: boolean) => {
            data.checked = childChecked || checked
            // ctx.emit('CheckedChange', data, checked, childChecked)
        }

        return {
            selectTableRef,
            defaultCheckedKeys,
            checkTree
        }
    },
    render() {

        return (
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
        )
    }
})
