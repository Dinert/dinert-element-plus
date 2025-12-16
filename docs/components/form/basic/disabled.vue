<script setup lang="ts">
import {ref} from 'vue'
import {RewriteFormProps} from '../../../../packages'

// form里面的数据类型
interface ModelProps {
    name: boolean;
    disabledSelect: number;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    disabledSelect: number;
    name: string;
    name1: string;
    name2: string;
    name3: string;

}

const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
    },
    colLayout: {span: 12},
    labelWidth: 60,
    disabled() {
        return true
    },
    formItem: {
        disabledSelect: {
            label: '禁用',
            type: 'select',
            disabled: false,
            options: {
                placeholder: '当我的选择是选项1时，右输入框会被禁用',
                options: [
                    {label: '选项1', value: 1},
                    {label: '选项2', value: 2},
                ],
            }
        },
        name: {
            label: '名称',
            type: 'input',
            disabled(model) {
                return model.disabledSelect === 1
            },
            options: {

            }
        },
        name1: {
            label: '名称1',
            type: 'input',
            options: {

            }
        },
        name2: {
            label: '名称2',
            type: 'input',

            options: {

            }
        },
        name3: {
            label: '名称3',
            type: 'input',
            colLayout(model, item) {
                return {
                    span: 24
                }
            },
            options: {

            }
        },

    }
})

</script>

<template>
    <div class="home">
        <dinert-form :form="form" class="dialog"
            :search="false"
        />
    </div>
</template>
