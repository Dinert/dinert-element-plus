import {PropType, computed, defineComponent, ref} from 'vue'

import type {RewriteTableColumnCtx, RewriteTableProps} from '@packages/components/table/types/index'
import {getTreeNode} from '@packages/utils/tools'
import {allShow} from '@packages/components/table/hooks'
import type Node from 'element-plus/es/components/tree/src/model/node'
import {Setting} from '@element-plus/icons-vue'
import DinertTableColumnControl from './table-column-control'

export default defineComponent({
    name: 'dinert-table-column-control',
    props: {
        table: {
            type: Object as PropType<RewriteTableProps>,
        }
    },
    emits: ['CheckedChange'],
    setup() {

        const selectTableRef = ref<InstanceType<typeof DinertTableColumnControl>>()


        return {
            selectTableRef,


        }
    },
    render() {

        return (
            <el-popover teleported={true}
                v-slots={
                    {
                        default: () => (
                            <ul class="dinert-popover-classify">
                                <li>
                                    <el-button class="allSelect" link
                                        type={'primary'} onClick={async () => allShow(this.selectTableRef?.selectTableRef, this.table?.tableColumns || [])}
                                    >全选</el-button>
                                </li>
                                <DinertTableColumnControl ref={el => (this.selectTableRef = el)}
                                    table={this.table}></DinertTableColumnControl>
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
            </el-popover>
        )
    }
})
