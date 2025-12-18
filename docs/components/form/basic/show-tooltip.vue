<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'
import {multiply} from 'lodash'

// form里面的数据类型
interface ModelProps {
    input: string;
    select: number;
    select2: number[];
    inputNumber: number;
    selectV2: number;
    selectV22: number[];
    treeSelect: number[];
    switch: boolean;
    date: string;
    date2: string[];
    radio: number;
    checkbox: number[];
    cascader: string;
    cascader2: string[];

}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    // name: string;
    // name1: string;
    // name2: string;
    // name3: number;
    // name6: number;
}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        input: 'input值1132132131111111111input值1132132131111111111',
        select: 1,
        select2: [1, 2],
        inputNumber: 100000000000,
        selectV2: 1,
        treeSelect: [1, 2],
        switch: true,
        date: '2024-06-01 12:30:45',
        date2: ['2024-06-01 12:30:45', '2024-06-02 12:30:45'],
        radio: 1,
        checkbox: [1, 2],
        cascader: 'controllability',
        cascader2: ['controllability'],

    },
    colLayout: {span: 24},
    showValue() {
        return true
    },
    labelWidth: 'auto',
    formItem: {
        input: {
            label: '输入框',
            type: 'input',
            options: {

            }
        },
        inputNumber: {
            label: '数字输入框',
            type: 'input-number',
            options: {

            },
            colLayout: {span: 16},
        },
        select: {
            label: '下拉框',
            type: 'select',
            options: {
                options: [
                    {label: '启用启用启用启用启用启用启用启用启用启用', value: 1},
                    {label: '禁用', value: 0},
                ]
            }
        },
        select2: {
            label: '下拉框多选',
            type: 'select',
            options: {
                multiple: true,
                options: [
                    {label: '选项111111111111321321312321321321', value: 1},
                    {label: '选项21321312321321321321', value: 2},
                    {label: '选项332132132321321321321321', value: 3},
                ]
            }
        },
        selectV2: {
            label: '虚拟下拉框',
            type: 'select-v2',
            options: {
                options: [
                    {label: '选项11111111111111111111111111111111', value: 1},
                    {label: '选项22222222222222222222222222222222', value: 0},
                ]
            }
        },
        selectV22: {
            label: '虚拟下拉框多选',
            type: 'select-v2',
            options: {
                multiple: true,
                options: [
                    {label: '选项11111111111111111111111111111111', value: 1},
                    {label: '选项22222222222222222222222222222222', value: 0},
                ]
            }
        },
        date: {
            label: '时间',
            type: 'datetime',
            options: {

            },
            colLayout: {span: 18},
        },
        date2: {
            label: '时间双选',
            type: 'datetimerange',
            options: {
            },
            colLayout: {span: 18},
        },
        cascader: {
            label: '级联选择器',
            type: 'cascader',
            options: {
                options: [
                    {
                        value: 'guide',
                        label: 'Guide',
                        children: [
                            {
                                value: 'disciplines',
                                label: 'Disciplines',
                                children: [
                                    {
                                        value: 'consistency',
                                        label: 'Consistency',
                                    },
                                    {
                                        value: 'feedback',
                                        label: 'Feedback',
                                    },
                                    {
                                        value: 'efficiency',
                                        label: 'Efficiency',
                                    },
                                    {
                                        value: 'controllability',
                                        label: 'Controllability',
                                    },
                                ],
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'side nav',
                                        label: 'Side Navigation',
                                    },
                                    {
                                        value: 'top nav',
                                        label: 'Top Navigation',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 'component',
                        label: 'Component',
                        children: [
                            {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                    {
                                        value: 'layout',
                                        label: 'Layout',
                                    },
                                    {
                                        value: 'color',
                                        label: 'Color',
                                    },
                                    {
                                        value: 'typography',
                                        label: 'Typography',
                                    },
                                    {
                                        value: 'icon',
                                        label: 'Icon',
                                    },
                                    {
                                        value: 'button',
                                        label: 'Button',
                                    },
                                ],
                            },
                            {
                                value: 'form',
                                label: 'Form',
                                children: [
                                    {
                                        value: 'radio',
                                        label: 'Radio',
                                    },
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox',
                                    },
                                    {
                                        value: 'input',
                                        label: 'Input',
                                    },
                                    {
                                        value: 'input-number',
                                        label: 'InputNumber',
                                    },
                                    {
                                        value: 'select',
                                        label: 'Select',
                                    },
                                    {
                                        value: 'cascader',
                                        label: 'Cascader',
                                    },
                                    {
                                        value: 'switch',
                                        label: 'Switch',
                                    },
                                    {
                                        value: 'slider',
                                        label: 'Slider',
                                    },
                                    {
                                        value: 'time-picker',
                                        label: 'TimePicker',
                                    },
                                    {
                                        value: 'date-picker',
                                        label: 'DatePicker',
                                    },
                                    {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker',
                                    },
                                    {
                                        value: 'upload',
                                        label: 'Upload',
                                    },
                                    {
                                        value: 'rate',
                                        label: 'Rate',
                                    },
                                    {
                                        value: 'form',
                                        label: 'Form',
                                    },
                                ],
                            },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [
                                    {
                                        value: 'table',
                                        label: 'Table',
                                    },
                                    {
                                        value: 'tag',
                                        label: 'Tag',
                                    },
                                    {
                                        value: 'progress',
                                        label: 'Progress',
                                    },
                                    {
                                        value: 'tree',
                                        label: 'Tree',
                                    },
                                    {
                                        value: 'pagination',
                                        label: 'Pagination',
                                    },
                                    {
                                        value: 'badge',
                                        label: 'Badge',
                                    },
                                ],
                            },
                            {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                    {
                                        value: 'alert',
                                        label: 'Alert',
                                    },
                                    {
                                        value: 'loading',
                                        label: 'Loading',
                                    },
                                    {
                                        value: 'message',
                                        label: 'Message',
                                    },
                                    {
                                        value: 'message-box',
                                        label: 'MessageBox',
                                    },
                                    {
                                        value: 'notification',
                                        label: 'Notification',
                                    },
                                ],
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'menu',
                                        label: 'Menu',
                                    },
                                    {
                                        value: 'tabs',
                                        label: 'Tabs',
                                    },
                                    {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb',
                                    },
                                    {
                                        value: 'dropdown',
                                        label: 'Dropdown',
                                    },
                                    {
                                        value: 'steps',
                                        label: 'Steps',
                                    },
                                ],
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                children: [
                                    {
                                        value: 'dialog',
                                        label: 'Dialog',
                                    },
                                    {
                                        value: 'tooltip',
                                        label: 'Tooltip',
                                    },
                                    {
                                        value: 'popover',
                                        label: 'Popover',
                                    },
                                    {
                                        value: 'card',
                                        label: 'Card',
                                    },
                                    {
                                        value: 'carousel',
                                        label: 'Carousel',
                                    },
                                    {
                                        value: 'collapse',
                                        label: 'Collapse',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 'resource',
                        label: 'Resource',
                        children: [
                            {
                                value: 'axure',
                                label: 'Axure Components',
                            },
                            {
                                value: 'sketch',
                                label: 'Sketch Templates',
                            },
                            {
                                value: 'docs',
                                label: 'Design Documentation',
                            },
                        ],
                    },
                ]
            }
        },
        cascader2: {
            label: '级联选择器多选',
            type: 'cascader',
            options: {
                props: {
                    multiple: true,
                },
                options: [
                    {
                        value: 'guide',
                        label: 'Guide',
                        children: [
                            {
                                value: 'disciplines',
                                label: 'Disciplines',
                                children: [
                                    {
                                        value: 'consistency',
                                        label: 'Consistency',
                                    },
                                    {
                                        value: 'feedback',
                                        label: 'Feedback',
                                    },
                                    {
                                        value: 'efficiency',
                                        label: 'Efficiency',
                                    },
                                    {
                                        value: 'controllability',
                                        label: 'Controllability',
                                    },
                                ],
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'side nav',
                                        label: 'Side Navigation',
                                    },
                                    {
                                        value: 'top nav',
                                        label: 'Top Navigation',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 'component',
                        label: 'Component',
                        children: [
                            {
                                value: 'basic',
                                label: 'Basic',
                                children: [
                                    {
                                        value: 'layout',
                                        label: 'Layout',
                                    },
                                    {
                                        value: 'color',
                                        label: 'Color',
                                    },
                                    {
                                        value: 'typography',
                                        label: 'Typography',
                                    },
                                    {
                                        value: 'icon',
                                        label: 'Icon',
                                    },
                                    {
                                        value: 'button',
                                        label: 'Button',
                                    },
                                ],
                            },
                            {
                                value: 'form',
                                label: 'Form',
                                children: [
                                    {
                                        value: 'radio',
                                        label: 'Radio',
                                    },
                                    {
                                        value: 'checkbox',
                                        label: 'Checkbox',
                                    },
                                    {
                                        value: 'input',
                                        label: 'Input',
                                    },
                                    {
                                        value: 'input-number',
                                        label: 'InputNumber',
                                    },
                                    {
                                        value: 'select',
                                        label: 'Select',
                                    },
                                    {
                                        value: 'cascader',
                                        label: 'Cascader',
                                    },
                                    {
                                        value: 'switch',
                                        label: 'Switch',
                                    },
                                    {
                                        value: 'slider',
                                        label: 'Slider',
                                    },
                                    {
                                        value: 'time-picker',
                                        label: 'TimePicker',
                                    },
                                    {
                                        value: 'date-picker',
                                        label: 'DatePicker',
                                    },
                                    {
                                        value: 'datetime-picker',
                                        label: 'DateTimePicker',
                                    },
                                    {
                                        value: 'upload',
                                        label: 'Upload',
                                    },
                                    {
                                        value: 'rate',
                                        label: 'Rate',
                                    },
                                    {
                                        value: 'form',
                                        label: 'Form',
                                    },
                                ],
                            },
                            {
                                value: 'data',
                                label: 'Data',
                                children: [
                                    {
                                        value: 'table',
                                        label: 'Table',
                                    },
                                    {
                                        value: 'tag',
                                        label: 'Tag',
                                    },
                                    {
                                        value: 'progress',
                                        label: 'Progress',
                                    },
                                    {
                                        value: 'tree',
                                        label: 'Tree',
                                    },
                                    {
                                        value: 'pagination',
                                        label: 'Pagination',
                                    },
                                    {
                                        value: 'badge',
                                        label: 'Badge',
                                    },
                                ],
                            },
                            {
                                value: 'notice',
                                label: 'Notice',
                                children: [
                                    {
                                        value: 'alert',
                                        label: 'Alert',
                                    },
                                    {
                                        value: 'loading',
                                        label: 'Loading',
                                    },
                                    {
                                        value: 'message',
                                        label: 'Message',
                                    },
                                    {
                                        value: 'message-box',
                                        label: 'MessageBox',
                                    },
                                    {
                                        value: 'notification',
                                        label: 'Notification',
                                    },
                                ],
                            },
                            {
                                value: 'navigation',
                                label: 'Navigation',
                                children: [
                                    {
                                        value: 'menu',
                                        label: 'Menu',
                                    },
                                    {
                                        value: 'tabs',
                                        label: 'Tabs',
                                    },
                                    {
                                        value: 'breadcrumb',
                                        label: 'Breadcrumb',
                                    },
                                    {
                                        value: 'dropdown',
                                        label: 'Dropdown',
                                    },
                                    {
                                        value: 'steps',
                                        label: 'Steps',
                                    },
                                ],
                            },
                            {
                                value: 'others',
                                label: 'Others',
                                children: [
                                    {
                                        value: 'dialog',
                                        label: 'Dialog',
                                    },
                                    {
                                        value: 'tooltip',
                                        label: 'Tooltip',
                                    },
                                    {
                                        value: 'popover',
                                        label: 'Popover',
                                    },
                                    {
                                        value: 'card',
                                        label: 'Card',
                                    },
                                    {
                                        value: 'carousel',
                                        label: 'Carousel',
                                    },
                                    {
                                        value: 'collapse',
                                        label: 'Collapse',
                                    },
                                ],
                            },
                        ],
                    },
                    {
                        value: 'resource',
                        label: 'Resource',
                        children: [
                            {
                                value: 'axure',
                                label: 'Axure Components',
                            },
                            {
                                value: 'sketch',
                                label: 'Sketch Templates',
                            },
                            {
                                value: 'docs',
                                label: 'Design Documentation',
                            },
                        ],
                    },
                ]
            }
        },


    }
})
</script>

<template>
    <div class="home">
        <div style="display: flex;">
            <dinert-form :form="{...form, showValue: false}" class="dialog"
                style="flex: 0 0 50%;"
                :search="false"
            />
            <!-- <dinert-form :form="form" class="dialog"
                style="flex: 0 0 50%;"
                :search="false"
            /> -->

        </div>

    </div>
</template>
