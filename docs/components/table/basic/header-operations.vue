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

const disabled = ref(false)


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
        add: {
            message: '新增',
            icon: shallowRef(Plus),
            type: 'primary',
            clickCb: (item, e) => {
                console.log(e, 'header add click')
            }
        },
        edit: {
            message: () => {
                return '编辑'
            },
            disabled() {
                return true
            },
            tooltip: {
                content() {
                    return '我是编辑按钮'
                }
            }
        },
        delete: {
            message: '删除',
            type: 'danger',
            messageBox: {
                title: '提示',
                message: '确定要删除吗？',
            },
            clickCb: (item, e) => {
                console.log(item, 'header delete click')
            },
            disabled() {
                return disabled.value
            },
            tooltip() {
                if (disabled.value) {
                    return {
                        content: '删除按钮已禁用'
                    }
                }
                return null
            }
        },

    },
    footer: false,

})


</script>

<template>
    <div>
        <el-button style="margin-bottom: 16px;" @click="disabled = !disabled">禁用删除按钮</el-button>
        <dinert-table :table="tablePage.table"
            :footer="tablePage.footer"
            :header="tablePage.header"
        />

    </div>

</template>
