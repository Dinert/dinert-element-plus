import {defineComponent, ref} from 'vue'

import DinertTable from '@packages/components/table'
import DinertForm from '@packages/components/form'

import type {RewriteTableProps, HeaderListProps} from '@packages/components/table/types/index'
import type {PropType} from 'vue'
import type {RewriteFormProps} from '@packages/components/form/types'

import '@packages/assets/scss/dinert-table-page.scss'


export default defineComponent({
    name: 'dinert-table-page',
    props: {
        form: {
            type: Object as PropType<RewriteFormProps>,
            default: () => ({})
        },
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
            type: [Object, Boolean] as PropType<HeaderListProps | boolean>,
            default: true
        },
        tableSlot: {
            type: Boolean,
            default: false
        }
    },
    emits: ['SizeChange', 'CurrentChange', 'SearchFn', 'ResetFn', 'CheckedChange'],
    setup() {

        const tablePageDom = ref<HTMLElement>()
        const tableRef = ref<InstanceType<typeof DinertTable>>()
        const formRef = ref<InstanceType<typeof DinertForm>>()

        const onUnFold = () => {
            const timer = setTimeout(() => {
                tableRef.value?.resizeTaleHeightFn()
                clearTimeout(timer)
            }, 300)
        }

        return {
            tablePageDom,
            tableRef,
            formRef,
            onUnFold
        }
    },
    render() {
        const slots = this.tableSlot ? this.$slots : {
            ...this.$slots,
            default: (scope: any) => this.$slots[(scope.prop)]?.(scope)
        }

        return (
            <section class={['dinert-table-page', this.search ? 'search' : '']} ref={el => {this.tablePageDom = el}}>
                {this.search
                && <DinertForm form={this.form}
                    class="near"
                    v-slots={this.$slots}
                    onSearchFn={() => this.$emit('SearchFn')}
                    onResetFn={() => this.$emit('ResetFn')}
                    onUnFold={this.onUnFold}
                    ref={el => {this.formRef = el}}></DinertForm>
                }
                <DinertTable
                    ref={el => {this.tableRef = el}}
                    table={this.table}
                    header={this.header}
                    footer={this.footer}
                    tableSlot={this.tableSlot}
                    v-slots={slots}
                    onSizeChange={(val: number) => this.$emit('SizeChange', val)}
                    onCurrentChange={(val: number) => this.$emit('CurrentChange', val)}
                    onCheckedChange={(data: Node, checked: boolean, childChecked: boolean) => this.$emit('CheckedChange', data, checked, childChecked)}
                >
                </DinertTable>
            </section>
        )
    }
})
