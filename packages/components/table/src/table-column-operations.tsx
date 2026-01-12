import {PropType, computed, defineComponent} from 'vue'
import type {
    OperationsProps
} from '@packages/components/table/types/index'
import {ElMessageBox} from 'element-plus'
import lodash from 'lodash'
import {ArrowDown} from '@element-plus/icons-vue'

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
                const show = lodash.isFunction(tempObj.show) ? tempObj.show(props.scope, props.column, tempObj) : tempObj.show === undefined ? true : tempObj.show
                const message = lodash.isFunction(tempObj.message) ? tempObj.message(props.scope, props.column, tempObj) : tempObj.message
                const type = tempObj.key === 'delete' ? 'danger' : tempObj.type || 'primary'
                const link = tempObj.link === undefined ? true : tempObj.link

                if (show) {
                    result.push({
                        key: key,
                        ...tempObj,
                        message,
                        type,
                        link
                    })

                }

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

        const isShowDropdown = computed(() => {
            return seniorFunctions.value.length && operations.value.length > maxOperations
        })

        const buttonClick = (item: OperationsProps, e: any = null) => {

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
                    lodash.isFunction(item.clickCb) && item.clickCb(props.scope, props.column, item, e)
                }).catch(() => null)
            } else {
                lodash.isFunction(item.clickCb) && item.clickCb(props.scope, props.column, item, e)
            }
        }

        let popButtonEl = null as any

        const popConfirmClick = (e: any = null) => {
            popButtonEl = e
        }

        const popConConfirmClick = (item: any) => {
            item.clickCb && item.clickCb(props.scope, props.column, item, popButtonEl)
        }

        const renderButton = (item: any) => (
            <el-button {...item} key={item.key} onClick={(e: any) => (lodash.isObject(item.popConfirm) ? popConfirmClick(e) : buttonClick(item, e))}>
                {item.message}
            </el-button>
        )

        return {
            defaultFunctions,
            seniorFunctions,
            isShowDropdown,
            renderButton,

            buttonClick,
            popConConfirmClick
        }
    },

    render() {
        return (
            <>
                {
                    this.defaultFunctions.map(item => {
                        if (lodash.isObject(item.popConfirm)) {
                            const popConfirm = {
                                title: `是否${item.message}该条数据？`,
                                ...item.popConfirm
                            }

                            return (<el-popconfirm {...{...popConfirm}}
                                onConfirm={ () => this.popConConfirmClick(item)}>
                                {{
                                    reference: () => {
                                        return this.renderButton(item)
                                    }
                                }}
                            </el-popconfirm>)
                        }

                        return this.renderButton(item)
                    })
                }

                {this.isShowDropdown
                    ? <el-dropdown teleported={true}
                        v-slots= {{
                            default: () => {
                                return (
                                    <el-button type="primary" link text>
                                            更多<el-icon><ArrowDown /></el-icon>
                                    </el-button>
                                )
                            },
                            dropdown: () => {
                                return (
                                    <el-dropdown-menu>
                                        {this.seniorFunctions.map(item => {return (<el-dropdown-item command={item}>
                                            <el-button
                                                onClick={(e: any) => this.buttonClick(item, e)}
                                                {...{
                                                    text: true,
                                                    ...item
                                                }}
                                            >{item.message}</el-button>
                                        </el-dropdown-item>)})}
                                    </el-dropdown-menu>
                                )
                            }
                        }}>

                    </el-dropdown> : null
                }
            </>
        )
    }
})
