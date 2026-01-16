<script lang="ts" setup>
import {ref, shallowRef} from 'vue'

import {TablePageProps} from '../../../../packages'
import {Plus} from '@element-plus/icons-vue'


interface DataProps {
    date: string;
    name: string;
    address: string;
    state: string;
    city: string;
}


const tablePage = ref<TablePageProps<DataProps>>({
    table: {
        pagination: {},
        tableColumns: [
            {
                'prop': 'date',
                'label': '日期'
            },
            {
                'prop': 'name',
                'label': '姓名'
            },
            {
                'prop': 'state',
                'label': '州'
            },
            {
                'prop': 'city',
                'label': '城市'
            },
            {
                'prop': 'address',
                'label': '地址'
            },
            {
                prop: 'operations',
                label: '操作',
                operations: {
                    add: {
                        message: '',
                        icon: shallowRef(Plus),
                        clickCb(e) {
                            console.log(e, 'eee')
                        },
                    },
                    edit: {
                        message: '编辑',
                        type: 'success',
                        clickCb: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    update: {
                        message() {
                            return '更新'
                        },
                        show(scope, column, item) {
                            return scope.$index === 1
                        },
                        type: 'warning',

                    },

                }
            },
        ],
        data: [
            {
                'date': '2016-05-03',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
            {
                'date': '2016-05-02',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
            {
                'date': '2016-05-04',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
            {
                'date': '2016-05-01',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            }
        ],
    },
    header: {

    },
    footer: false
})

const tablePage2 = ref<TablePageProps<DataProps>>({
    table: {
        pagination: {},
        tableColumns: [
            {
                'prop': 'date',
                'label': '日期'
            },
            {
                'prop': 'name',
                'label': '姓名'
            },
            {
                'prop': 'state',
                'label': '州'
            },
            {
                'prop': 'city',
                'label': '城市'
            },
            {
                'prop': 'address',
                'label': '地址'
            },
            {
                prop: 'operations',
                label: '操作',
                operations: {
                    add: {
                        message: '新增',
                        clickCb(e) {
                            console.log(e, 'eee')
                        },
                        messageBox: {
                            title: '提示',
                            message: '你确定要新增吗？',
                            type: 'info',
                        }
                    },
                    edit: {
                        message: '编辑',
                        type: 'success',
                        clickCb: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    update: {
                        message: '更新',
                        type: 'warning',

                    },
                    delete: {
                        message: '删除',
                        type: 'danger',
                        clickCb(scope, column, item, e) {
                            console.log(e, 'eee')
                        },
                        messageBox: {}
                    },
                }
            },
        ],
        data: [
            {
                'date': '2016-05-03',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
        ],
    },
    header: {

    },
    footer: false
})

const tablePage3 = ref<TablePageProps<DataProps>>({
    table: {
        pagination: {},
        tableColumns: [
            {
                'prop': 'date',
                'label': '日期'
            },
            {
                'prop': 'name',
                'label': '姓名'
            },
            {
                'prop': 'state',
                'label': '州'
            },
            {
                'prop': 'city',
                'label': '城市'
            },
            {
                'prop': 'address',
                'label': '地址'
            },
            {
                prop: 'operations',
                label: '操作',
                operations: {
                    add: {
                        message: '新增',
                        clickCb(e) {
                            console.log(e, 'eee')
                        },
                        popConfirm: {
                            onCancel() {
                                console.log('取消新增')
                            }
                        }
                    },
                    edit: {
                        message: '编辑',
                        type: 'success',
                        clickCb: (scope, column, item) => {
                            console.log(item, 'itemmmmmmmmmmmmmmm')
                        }
                    },
                    update: {
                        message: '更新',
                        type: 'warning',

                    },
                    delete: {
                        message: '删除',
                        type: 'danger',
                        clickCb(scope, column, item, e) {
                            console.log(e, 'eee')
                        },
                        messageBox: {}
                    },
                }
            },
        ],
        data: [
            {
                'date': '2016-05-03',
                'name': 'Tom',
                'state': 'California',
                'city': 'Los Angeles',
                'address': 'No. 189, Grove St, Los Angeles'
            },
        ],
    },
    header: {

    },
    footer: false
})


</script>

<template>
    <div>
        <dinert-table :table="tablePage.table"
            :footer="tablePage.footer"
            :header="tablePage.header"
        />
        <dinert-table :table="tablePage2.table"
            :footer="tablePage2.footer"
            :header="tablePage2.header"
        />
        <dinert-table :table="tablePage3.table"
            :footer="tablePage3.footer"
            :header="tablePage3.header"
        >
            <!-- <template #table-left>
                <div>自定义左侧</div>
            </template> -->
        </dinert-table>
    </div>

</template>
