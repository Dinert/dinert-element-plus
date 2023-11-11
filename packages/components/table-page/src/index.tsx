import {defineComponent, ref, computed, nextTick, watch, onMounted} from 'vue'

import DinertTable from '@/components/table'

import type {RewriteTableProps} from '@/components/table/types/index'
import type {PropType} from 'vue'


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
    emits: ['size-change', 'current-change', 'prev-click', 'next-click', 'search', 'reset'],
    setup() {
        return {}
    },
    render() {

        const slots = this.tableSlot ? this.$slots : {default: (scope: any) => this.$slots[(scope.prop)]?.(scope)}

        return (
            <DinertTable
                table={this.table}
                header={this.header}
                footer={this.footer}
                tableSlot={true}
                v-slots={slots}
            >

            </DinertTable>
        )
    }
})
