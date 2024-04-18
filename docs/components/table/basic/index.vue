<script lang="ts" setup>
import {ref} from 'vue'
import {TablePageProps} from '../../../../packages'

interface DataProps {
    code: string;
    createTime: string;
    createUser: string;
    id: number;
    msg: string;
    type: string;
}


const tablePage = ref<TablePageProps<DataProps>>({
    table: {
        pagination: {
        },
        tableColumns: [
            {
                prop: 'createTime',
                label: '报错时间'
            },
            {
                prop: 'type',
                label: '错误分类',
                sort: 0
            },
            {
                prop: 'code',
                label: '错误类型'
            },
            {
                prop: 'msg',
                label: '错误信息',
            },
        ],
        data: [
            {
                'code': 'business',
                'createTime': '2024-04-18 10:22:50',
                'createUser': '',
                'id': 1116,
                'msg': '访问此资源需要完全身份验证',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:20:57',
                'createUser': '',
                'id': 1116,
                'msg': 'token过期，请重新登录',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:20:57',
                'createUser': '',
                'id': 1114,
                'msg': 'token过期，请重新登录',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:20:57',
                'createUser': '',
                'id': 1115,
                'msg': 'token过期，请重新登录',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:20:45',
                'createUser': '',
                'id': 1113,
                'msg': '访问此资源需要完全身份验证',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:20:45',
                'createUser': '',
                'id': 1112,
                'msg': '访问此资源需要完全身份验证',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:15:15',
                'createUser': '',
                'id': 1111,
                'msg': '访问此资源需要完全身份验证',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:09:47',
                'createUser': '',
                'id': 1110,
                'msg': 'token过期，请重新登录',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:09:47',
                'createUser': '',
                'id': 1109,
                'msg': 'token过期，请重新登录',
                'type': 'business'
            },
            {
                'code': 'business',
                'createTime': '2024-04-18 10:09:47',
                'createUser': '',
                'id': 1108,
                'msg': 'token过期，请重新登录',
                'type': 'business'
            }
        ]
    },
    footer: false
})

</script>

<template>
    <dinert-table :table="tablePage.table"
        :footer="tablePage.footer"
    />
</template>
