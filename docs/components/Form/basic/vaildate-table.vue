<script setup lang="ts">
import {ref} from 'vue'
import {DinertForm, RewriteFormProps, DinertTable, TablePageProps} from '../../../../packages'
import {ElForm} from 'element-plus'

// form里面的数据类型
interface ModelProps {
    name: string;
    status: string;
}

// formItem的类型，如果formItem的类型不传就使用ModelProps的类型
interface FormItemProps {
    name: string;
    name1: string;
    name2: string;
    status: string;
}

const dinertFormRef = ref<InstanceType<typeof ElForm>>()


const form = ref<RewriteFormProps<ModelProps, FormItemProps>>({
    model: {
        name: {}
    },
    colLayout: {span: 24},
    labelWidth: 60,
    required: true,
    showLabel(model) {
        return true
    },
    formItem: {
        name: {
            label: '必填',
            type: 'input',
            required: true,
            showLabel: false,

            options: {

            }
        },
        name2: {
            label: '必填',
            type: 'select',
            required: true,
            showLabel: false,
            options: {
                options: [
                    {label: '显示当我的长度过长长长长长长', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        },
        status: {
            label: '选择',
            type: 'select-v2',
            showLabel(model) {
                return model.name2
            },
            options: {
                options: [
                    {label: '显示当我的长度过长长长长长长', value: true},
                    {label: '隐藏', value: false},
                ]
            }
        }
    }
})


interface DataProps {
    date: string;
    name: string;
    address: string;
}


const tablePage = ref<TablePageProps<DataProps>>({
    table: {
        pagination: {
        },
        tableColumns: [
            {
                type: 'selection',
            },
            {
                prop: 'date',
                label: '时间'
            },
            {
                prop: 'name',
                label: '名称',
            },
            {
                prop: 'address',
                label: '地址'
            },
        ],
        data: [
            {
                date: '2016-05-03',
                address: '广州市区',
            },
            {
                date: '2016-05-02',
                address: '广州市区',
            },
            {
                date: '2016-05-04',
                name: 'Tom',
                address: '广州市区',
            },
            {
                date: '2016-05-01',
                name: 'Tom',
                address: '广州市区',
            },
        ]
    },
    footer: false
})

const save = () => {
    dinertFormRef.value?.validate(validate => {
        console.log(validate, 'validate')
        console.log(form.value.model, 'form.value.model')
        if (validate) {
            console.log(form.value.model)
        }
    })
}
const reset = () => {
    form.value.model = {}
    dinertFormRef.value?.clearValidate()
}


</script>

<template>
    <div class="home">
        <el-form ref="dinertFormRef" :model="form.model">
            <dinert-table :table="tablePage.table"
                :footer="tablePage.footer"
            >
                <template #column_name="scope">
                    <el-form-item :prop="'name.'+scope.$index" :rules="{
                        required: true,
                        message: '名称不能为空',
                    }"
                    >
                        <el-input v-model="form.model.name[scope.$index]"/>
                    </el-form-item>
                </template>
            </dinert-table>
        </el-form>

        <el-col style=" margin-bottom: 12px;text-align: center;">
            <el-button type="primary" @click="save">保存</el-button>
            <el-button plain @click="reset">重置</el-button>
        </el-col>
    </div>
</template>
