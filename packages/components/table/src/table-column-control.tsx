import {PropType, computed, defineComponent, ref} from 'vue'

import type {RewriteTableProps} from '@packages/components/table/types/index'
import {getTreeNode} from '@packages/utils/tools'
import {allowDrop, nodeDragEnd, treeProps} from '@packages/components/table/hooks'
import type Node from 'element-plus/es/components/tree/src/model/node'


export default defineComponent({
    name: 'dinert-table-column-control',
    props: {
        table: {
            type: Object as PropType<RewriteTableProps>,
        }
    },
    emits: ['CheckedChange'],
    setup(props, ctx) {
        const selectTableRef = ref(null)

        const defaultCheckedKeys = computed(() => {
            return getTreeNode(props.table?.tableColumns || [], 'checked', [true, undefined], 'prop')
        })

        const uncheckChildren = (node: any) => {
            if (!node.children || node.children.length === 0) {
                return
            }

            node.children.forEach(child => {
                child.checked = false
                uncheckChildren(child) // 递归处理更深层的 children
            })
        }

        const checkTree = (data: any, checked: boolean, childChecked: boolean) => {
            data.checked = childChecked || checked
            if (!data.checked) {
                uncheckChildren(data)
            }
            ctx.emit('CheckedChange', data, checked, childChecked)
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
                data={this.table?.tableColumns}
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
