---
title: Form
lang: en-US
---
# Form 表单配置

使用ElForm组件和其它表单组件封装

## 基础用法

```html
<script setup lang="ts">
import {ref} from 'vue'

const formRef = ref({
    form: {
        model: {

        },
        formItem: {
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
                        onChange: (e: any) => {
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
                        onChange: (e: any) => {
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
            }
        }
    },
    search: true
})

const {form, search} = formRef.value

</script>

<template>
    <dinert-form
        class="near"
        v-bind="{
            form,
            search
        }"
    />
</template>
```

## Form API

### Form Attributes
| 属性名    | 说明                                                                         | 类型                                                                            | 默认值                                 |
| --------- | ---------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | -------------------------------------- |
| search    | 是否显示查询和重置按钮                                                       | Boolean                                                                         | true                                   |
| form      | 请参考以下配置                                                               | [FormModel](https://element-plus.org/zh-CN/component/form.html#form-attributes) | 一                                     |
| colLayout | 表单的布局方式                                                               | Object                                                                          | { xl: 3, lg: 4, md: 8, sm: 12, xs: 24} |
| showLabel | 是否直接显示值，不显示表单组件                                               | Boolean                                                                         | false                                  |
| formItem  | formItem为一个对象，对象下有多个key，key指向一个对象，对象的配置参考下列表格 | Object                                                                          | 一                                     |

### Form Slots

| 插槽名         | 说明                                                             |
| -------------- | ---------------------------------------------------------------- |
| formItem_[key] | formItem_是固定的，key里面的值取决于form中的formItem的key        |


### FormItem Attributes
| 属性名    | 说明                                                                                                                                       | 类型                        | 默认值                                 |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------- | -------------------------------------- |
| type      | 支持的表单配置项的组件                                                                                                                     | [TypeName](#支持的表单组件) | 一                                     |
| show      | 是否显示组件                                                                                                                               | Boolean                     | Function(model) => void                |
| vif       | 是否渲染组件                                                                                                                               | Boolean                     | Function(model) => void                |
| label     | 组件的名称                                                                                                                                 | String                      | 一                                     |
| sort      | 组件的排序顺序，比如第一个组件是1、以此类推，最后一个组件设置比1小就可以排列第一位                                                         | Number                      | 一                                     |
| label     | 组件的名称                                                                                                                                 | String                      | 一                                     |
| options   | 组件的参数，比如组件的名称是input，那options里面的内容就是Input的属性                                                                      | Object                      | 一                                     |
| showLabel | 组件的名称是否显示                                                                                                                         | Boolean                     | false                                  |
| colLayout | 组件的布局方式                                                                                                                             | Object                      | { xl: 3, lg: 4, md: 8, sm: 12, xs: 24} |
| on        | 组件绑定的方法，比如组件的名称是input，那on里面的内容就是Input的方法，要注意，绑定方法的时候请用on加方法名称，方法名称采用大驼峰的形式书写 | Object                      | 一                                     |




### 支持可配置的表单组件

[input,textarea,input-autocomplete](https://element-plus.org/zh-CN/component/input.html#attributes)


[input-number](https://element-plus.org/zh-CN/component/input-number.html#attributes)

[switch](https://element-plus.org/zh-CN/component/switch.html#attributes)

[select](https://element-plus.org/zh-CN/component/select.html#select-attributes)

[datetime, date, week, month, year, datetimerange, daterange, monthrange, yearrange](https://element-plus.org/zh-CN/component/date-picker.html#attributes)

[radio, tree-select](https://element-plus.org/zh-CN/component/radio.html#radio-attributes)

[tree-select](https://element-plus.org/zh-CN/component/tree-select.html#attributes)

[rate](https://element-plus.org/zh-CN/component/rate.html#attributes)

[checkbox](https://element-plus.org/zh-CN/component/checkbox.html#checkbox-attributes)

[cascader](https://element-plus.org/zh-CN/component/cascader.html#cascader-attributes)


### Form Type
```ts

import {
    type FormProps, type FormItemProps, type ColProps, type RowProps,
    type InputProps, type InputNumberProps, type AutocompleteProps, type ElSelect, type SwitchProps, type DatePickerProps,
    type ElInput,
    type ElInputNumber,
    type ElAutocomplete,
    type ElTreeSelect,
    ElSwitch,
    ElRadio,
    ElDatePicker,
    RateProps,
    CheckboxGroupProps,
    CheckboxProps,
    SelectOptionProxy,
    ElCascader,
    CascaderProps
} from 'element-plus'
import {SelectProps} from 'element-plus/es/components/select-v2/src/defaults'

type RewriteColProps = Partial<ColProps>

type RewriteRowProps = Partial<RowProps>

type TypeName = 'input' |
                'select' |
                'textarea' |
                'input-autocomplete' |
                'input-number' |
                'switch' |
                'datetime' |
                'date' |
                'week' |
                'month' |
                'year' |
                'datetimerange' |
                'daterange' |
                'monthrange' |
                'custom' | 'radio' | 'tree-select' | 'radio-button' |
                'rate'
                | 'checkbox'
                | 'cascader'


export interface RewriteFormItemProps<T = any[]> extends Partial<
InputProps &
InputNumberProps &
Omit<typeof SelectProps, 'options' | 'props'> &
Omit<typeof ElTreeSelect, 'options' | 'data'> &
AutocompleteProps &
SwitchProps &
DatePickerProps &
RateProps &
CheckboxGroupProps
>{
    data?: T | Partial<CheckboxProps[] & SelectOptionProxy[]>;
    options?: T | Partial<CheckboxProps[] & SelectOptionProxy[]>;
    props?: Partial<CascaderProps>;
    on?: Partial< InstanceType<
    typeof ElInput &
    typeof ElInputNumber &
    typeof ElSelect &
    typeof ElAutocomplete &
    typeof ElTreeSelect &
    typeof ElSwitch &
    typeof ElRadio &
    typeof ElDatePicker &
    typeof ElCascader
    >>;
}


export interface CustomFormItemProps<D = any, O = any[]> extends Partial<FormItemProps> {
    key?: any;
    type: TypeName;
    show?: boolean | ((model: D) => boolean);
    vif?: boolean | ((model: D) => boolean);
    label: string;
    sort?: number;
    options?: RewriteFormItemProps<O>;
    showLabel?: true;
    labelDisabled?: boolean;
    labelWrap?: boolean;
    valueDisabled?: boolean;
    disabled?: boolean;
    colLayout?: RewriteColProps;
    on?: Partial< InstanceType<
    typeof ElInput &
    typeof ElInputNumber &
    typeof ElSelect &
    typeof ElAutocomplete &
    typeof ElTreeSelect &
    typeof ElSwitch &
    typeof ElRadio &
    typeof ElDatePicker
    >>;
}

export interface RewriteFormProps<D = any> extends Omit<Partial<FormProps>, 'model'> {
    model: Partial<D>;
    formItem: {
        [key: string]: CustomFormItemProps<D>;
    };
    colLayout?: RewriteColProps;
    row?: RewriteRowProps;
    showLabel?: boolean;
}

export interface DinertFormProps<D = any>{
    form: RewriteFormProps<D>;
    search?: boolean;
}

```