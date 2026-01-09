import {PropType, computed, defineComponent} from 'vue'
import type {
    OperationsProps
} from '@packages/components/table/types/index'
import {ElMessageBox} from 'element-plus'
import lodash from 'lodash'

export default defineComponent({
    name: 'TableColumnOperations',
    props: {
        operations: {
            type: Object,
            default: () => ({})
        },
        column: {
            type: Object,
            default: () => ({})
        },
        scope: {
            type: Object as PropType<any>,
            default: () => ({})
        }
    },

    setup(props, ctx) {


        const operations = computed<OperationsProps[]>(() => {
            const result: any = []
            Object.keys((props.operations)).forEach(key => {
                const tempObj = props.operations[key]
                // if ((typeof tempObj.show !== 'function' && [true, undefined].includes(tempObj.show))
                //     || (typeof tempObj.show === 'function' && [true, undefined].includes(tempObj.show(scope, column, tempObj)))
                // ) {
                result.push({
                    key: key,
                    ...tempObj,
                })
                // }
            })

            result.sort((a: any, b: any) => {
                return (a.sort || Infinity) - (b.sort || Infinity)
            })

            return result
        })

        let maxOperations = props.column.maxOperations || 3
        const operationsLen = operations.value.length
        maxOperations = operationsLen > maxOperations ? maxOperations - 1 : maxOperations

        const defaultFunctions = computed(() => {
            const list = operations.value.slice(0, maxOperations)
            return list
        })

        const seniorFunctions = computed(() => {
            const list = operations.value.slice(maxOperations, operations.value.length)
            return list
        })

        const buttonClick = (e: any, item: any) => {

            if (lodash.isObject(item.messageBox)) {
                ElMessageBox({
                    title: '警告',
                    message: `是否${item.message}该条数据？`,
                    type: 'warning',
                    showCancelButton: true,
                    cancelButtonText: '取消',
                    beforeClose(action, instance, done) {
                        done()
                    },
                    ...item.messageBox
                }).then(() => {
                    lodash.isFunction(item.clickCb) && item.clickCb(props.scope, props.column, item)
                }).catch(() => null)
            } else {
                lodash.isFunction(item.clickCb) && item.clickCb(props.scope, props.column, item)

            }
        }

        return {
            defaultFunctions,
            seniorFunctions,
            buttonClick
        }
    },

    render() {
        return (
            <>
                {
                    this.defaultFunctions.map(item => {
                        const message = typeof item.message === 'function' ? item.message(this.scope, this.column, item) : item.message

                        const buttonCom = (<el-button {...{
                            ...item,
                            type: item.key === 'delete' ? 'danger' : item.type || 'primary',
                            link: item.link === undefined ? true : item.link
                        }}

                        onClick={(e: any) => this.buttonClick(e, item)}
                        key={(item).key}>
                            {message}
                        </el-button>)

                        return buttonCom

                    })
                }
            </>
        )
    }
})
