import {defineComponent, ref, computed, nextTick, watch} from 'vue'
import type {RewriteTableColumnCtx, RewriteTableProps, DTableProps, CtxType} from './types/index'
import {getUuid, convertToFlat} from '@/utils/tools'
import {resizeTaleHeight} from './hooks'
import DinertRecuveTableColumn from './dinert-recuve-table-column'


import type {ElTable} from 'element-plus'
import type {PropType} from 'vue'
import type {ElSelect} from 'element-plus'

import renderHeader from './dinert-table-header'

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

const resizeTaleHeightFn = (props: DTableProps) => {
    resizeTaleHeight(
        tableRef.value,
        headerRef.value,
        bodyRef.value,
        footerRef.value,
        headerFooterRef.value,
        props.table
    )
}


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
            default: true
        },
    },

    setup(props, ctx) {

        const tableColumns = computed<RewriteTableColumnCtx[]>(() => {
            return props.table?.tableColumns || []
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


        return () => (
            <section class={'dinert-table'}>
                {renderHeader((props as DTableProps), (ctx as CtxType), {tableColumns, isAllData, resizeTaleHeightFn, selectTable: (selectTable as any)})}

                <div ref={bodyRef} class="dinert-table-body">
                    <el-table
                        height={'100%'}
                        border={true}
                        {...props.table}
                        ref={tableRef}
                        row-key={props.table?.rowKey}
                        on={props.table?.on}
                    >

                        <DinertRecuveTableColumn table={props.table}
                            table-columns={tableColumns.value}
                            only-class={onlyClass.value}
                            v-slots={ctx.slots}
                            popover-value={popoverValue.value}
                        >

                        </DinertRecuveTableColumn>
                    </el-table>
                </div>

            </section>
        )
    },
})
