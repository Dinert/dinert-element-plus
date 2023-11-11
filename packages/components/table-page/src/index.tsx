import {defineComponent, ref} from 'vue'

import DinertTable from '@/components/table'

import type {RewriteTableProps} from '@/components/table/types/index'
import type {PropType} from 'vue'

const tablePageRef = ref(null)
const tableRef = ref(null)

export default defineComponent({
    name: 'dinert-table-page',
    props: {
        // form: {
        //     type: Object as PropType<>
        // }
        table: {
            type: Object as PropType<RewriteTableProps>,
            default: () => ({})
        },
        search: {
            type: Boolean,
            default: true
        },
        footer: {
            type: Boolean,
            default: true
        },
        header: {
            type: Boolean,
            default: true
        },
        tableSlot: {
            type: Boolean,
            default: true
        }
    },
    emits: ['SizeChange', 'CurrentChange', 'search', 'reset'],
    setup() {


        return {
            tablePageRef,
            tableRef
        }
    },
    render() {

        const slots = this.tableSlot ? this.$slots : {...this.$slots, default: (scope: any) => this.$slots[(scope.prop)]?.(scope)}

        return (
            <section class="dinert-table-page" ref={tablePageRef}>
                <DinertTable
                    ref={tableRef}
                    table={this.table}
                    header={this.header}
                    footer={this.footer}
                    tableSlot={true}
                    v-slots={slots}
                    onSizeChange={(val: number) => this.$emit('SizeChange', val)}
                    onCurrentChange={(val: number) => this.$emit('CurrentChange', val)}
                >

                </DinertTable>
            </section>
        )
    }
})
