
export const tableColumns = [
    {
        prop: 'startTime',
        label: '操作时间',
    },
    {
        prop: 'userName',
        label: '操作用户',
    },
    {
        prop: 'ip',
        label: '操作ip'
    },
    {
        prop: 'operationType.name',
        label: '日志类型'
    },
    {
        prop: 'operationObject',
        label: '操作对象'
    },
    {
        prop: 'operations',
        label: '操作结果',
        setting: true,
        functions: {
            edit: {
                message: '编辑',
                value: '22',
                click: (scope, column, item) => {
                    console.log(item, 'itemmmmmmmmmmm')
                }
            },
            operations: {
                message: '操作1'
            },
            operations2: {
                message: '操作2',
                click: (scope, column, item) => {
                    console.log(scope, column, item, '1111111111111')
                }
            },
            operations3: {
                message: '转交给他人'
            }
        }
    }
]