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
                if (show) {
                    result.push({
                        key: key,
                        ...tempObj,
                        message
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

        return {
            defaultFunctions,
            seniorFunctions,
            isShowDropdown,

            buttonClick
        }
    },

    render() {
        return (
            <>
                {
                    this.defaultFunctions.map(item => {

                        const buttonCom = (<el-button {...{
                            ...item,
                            type: item.key === 'delete' ? 'danger' : item.type || 'primary',
                            link: item.link === undefined ? true : item.link
                        }}

                        onClick={(e: any) => this.buttonClick(e, item)}
                        key={(item).key}>
                            {item.message}
                        </el-button>)

                        return buttonCom

                    })
                }

                {this.isShowDropdown
                    ? <el-dropdown teleported={true}
                        onCommand={item => this.buttonClick(item)}
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
                                        {this.seniorFunctions.map(item => {return (<el-dropdown-item command={item}>{item.message}</el-dropdown-item>)})}
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
