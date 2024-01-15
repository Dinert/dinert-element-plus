
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
        prop: 'operationResult',
        label: '操作结果',
        setting: true
    }
]