export const formItem: any = {
    showLabel: {
        label: '土木工程',
        type: 'custom',
        showLabel: true
    },
    input: {
        label: '输入框',
        type: 'input',
        options: {

        },
    },
    textarea: {
        label: '文本域',
        type: 'textarea'
    },
    inputNumber: {
        label: '数字输入框',
        type: 'input-number',
        options: {
            on: {
                onChange: (e: any)=> {
                    console.log(e, '3213')
                },
            }
        }
    },
    autoInput: {
        label: '自动补全输入框',
        type: 'input-autocomplete',
        options: {
            on: {
                onChange: (e: any)=> {
                    console.log(e, '3213')
                },
            }
        }
    },
    select: {
        label: '选择框',
        type: 'select',
        sort: 1,
        options: {
            value: 'code',

            options: [
                {label: 'lael1', code: '1'},
                {label: 'label2', code: '2'},

            ],
        }
    },
    switch: {
        label: '开关',
        type: 'switch',
        options: {

        }
    },
    radio: {
        label: '单选',
        type: 'radio',
        options: {
            options: [
                {label: '1', value: '1', disabled: true},
                {label: '2', value: '2'},
            ]
        }
    },
    selectTree: {
        label: '选择树',
        type: 'tree-select',
        options: {
            data: [

            ],
            options: [
                {
                    label: '1', value: '1',
                    children: [
                        {
                            label: '1', value: '3',

                        }
                    ]
                },
                {label: '2', value: '2'},
            ]
        }
    },
    datetime: {
        label: '小时天',
        type: 'datetime',
        options: {

        }
    },
    date: {
        label: '天',
        type: 'date',
        options: {

        }
    },
    week: {
        label: '周',
        type: 'week',
        options: {

        }
    },
    month: {
        label: '月',
        type: 'month',
        options: {

        }
    },
    year: {
        label: '年',
        type: 'year',
        options: {

        }
    },
    datetimerange: {
        label: '小时天双选',
        type: 'datetimerange',
        options: {

        }
    },
    daterange: {
        label: '天双选',
        type: 'daterange',
        options: {

        }
    },
    monthrange: {
        label: '月双选',
        type: 'monthrange',
        options: {

        }
    },
    rate: {
        label: '评分',
        type: 'rate',
        options: {
            on: {
                onChange(a: any) {
                    console.log(a)
                }
            }

        }
    },

    checkbox: {
        label: '多选框',
        type: 'checkbox',
        options: {
            options: [
                {label: '333', value: 'value1'},
                {label: '2', value: 'value2'},
            ]
        }
    },
    cascader: {
        label: '级联',
        type: 'cascader',
        options: {
            props: {
                emitPath: false,
                multiple: true,
            },
            options: [
                {
                    label: '333', value: 'value1',
                },
                {label: '2', value: 'value2'}
            ]
        }
    }

}