<script setup lang="ts">
import Dialog from '@/mixins/dialog'
import type {RewriteDialogProps} from '@/components/common/dinert-dialog/type'
import {DepartmentList} from '@/store/form/types'
import {ElTree} from 'element-plus'
import {convertToFlat} from '@/utils'

interface Tree {
    [key: string]: any;
}


const dialogProps = withDefaults(defineProps<Omit<RewriteDialogProps, 'modelValue'> & {
    tree: {
        name: string,
        treeData?: any[],
        nodeKey: string,
        props?:{
            label?: string,
        }, selectData?: any[]
    }
}>(), {
    title: '选择',
    showClose: true,
    fullscreen: false,
    appendToBody: true,
    modal: false,
    closeOnClickModal: false,
    closeOnPressEscape: true,
    customDrag: false,
    boxShadow: false,
    showFull: false,
    draggable: true,
})


const emits = defineEmits<{
    close: [],
    open: [],
    opened: [],
    closed: [],
    'change-full':[boolean],
    'open-auto-focus': [],
    'close-auto-focus': [],
    'save-success': [any]
}>()

const {tree} = toRefs(dialogProps)

const treeDataLeft = ref<DepartmentList[]>([])
const treeDataArrLeft = ref<DepartmentList[]>([])
const treeValueLeft = ref([])
const filterTextLeft = ref('')
const treeLeftRef = ref<InstanceType<typeof ElTree>>()

const treeDataRight = ref<DepartmentList[]>([])
const treeDataArrRight = ref<DepartmentList[]>([])
const treeValueRight = ref([])
const filterTextRight = ref('')
const treeRightRef = ref<InstanceType<typeof ElTree>>()


const close = () => {
    modelValue.value = false
    emits('close')
}
const closed = () => {emits('closed')}
const open = () => {
    treeDataArrRight.value = [...(tree.value.selectData as any)]
    treeRightRef.value?.filter('')
    treeLeftRef.value?.setCheckedKeys((treeDataArrRight.value as any) || [])
    emits('open')
}
const opened = () => {
    emits('opened')
}


const dialog = new Dialog()
const {modelValue} = dialog


dialog.save = () => {
    emits('save-success', treeDataArrRight.value)
    dialog.closeDialog()
}

const filterNodeMethodLeft = (value: string, data: Tree) => {
    if (!value) {return true}
    return data.name.includes(value)
}
// eslint-disable-next-line no-unused-vars
const checkChangeLeft = () => {
    nextTick(() => {
        treeDataArrRight.value = (treeLeftRef.value?.getCheckedKeys() as any[])
        treeRightRef.value?.filter(filterTextRight.value)
    })
}

const filterNodeMethodRight = (value: string, data: Tree) => {
    if (treeDataArrRight.value.length === 0) {
        return false
    }

    return data.name.includes(value) && treeDataArrRight.value.includes(data.id)
}

const removeRightData = (node: any) => {
    treeLeftRef.value?.setChecked(node.data[tree.value.nodeKey || 'id'], false, true)
    checkChangeLeft()
}


watch(filterTextLeft, val => {
    treeLeftRef.value?.filter(val)
})

watch(filterTextRight, val => {
    treeRightRef.value?.filter(val)
})


watch(() => tree.value.treeData, newVal => {
    treeDataArrLeft.value = convertToFlat(newVal || [])
    treeDataLeft.value = newVal || []
    treeDataRight.value = newVal || []
}, {
    immediate: true,
    deep: true
})


defineExpose({
    dialog
})


</script>

<template>
    <dinert-dialog v-model="modelValue"
        v-bind="{
            ...dialogProps,
            title: dialogProps.tree.name ? dialogProps.title + dialogProps.tree.name : dialogProps.title
        }"
        v-on="{
            close,
            open,
            closed,
            opened,
        }"
    >
        <div class="select-wrap">
            <div class="select-wrap-item select-wrap-left">
                <div class="select-wrap-item-title">
                    {{ `${dialogProps.tree.name}清单（${treeDataArrLeft.length}人）` }}
                </div>
                <el-input
                    v-model="filterTextLeft"
                    prefix-icon="Search"
                    placeholder="搜索"
                />
                <el-tree
                    ref="treeLeftRef"
                    v-model="treeValueLeft"
                    :data="treeDataLeft"
                    :filter-node-method="filterNodeMethodLeft"
                    :node-key="tree.nodeKey || 'id'"
                    show-checkbox
                    :props="{label: 'name',...tree.props}"
                    @check="checkChangeLeft"
                />
            </div>
            <div class="select-wrap-item select-wrap-right">
                <div class="select-wrap-item-title">
                    {{ `已选${dialogProps.tree.name}（${treeDataArrRight.length}人）` }}
                </div>
                <el-input
                    v-model="filterTextRight"
                    prefix-icon="Search"
                    placeholder="搜索"
                />
                <el-tree
                    ref="treeRightRef"
                    v-model="treeValueRight"
                    :data="treeDataRight"
                    :filter-node-method="filterNodeMethodRight"
                    node-key="id"
                    :props="{label: 'name', ...tree.props}"
                >
                    <template #default="{node}">
                        <span class="custom-tree-node">
                            <span>{{ node.label }}</span>
                            <span style="margin-right: 6px;">
                                <svg-icon icon-class="el-CircleCloseFilled"
                                    @click="removeRightData(node)"
                                />
                            </span>
                        </span>
                    </template>
                </el-tree>
            </div>

        </div>

        <template #footer>
            <el-button type="primary" @click="dialog.save">保存</el-button>
            <el-button type="primary" plain
                @click="dialog.closeDialog()"
            >取消</el-button>
        </template>
    </dinert-dialog>
</template>
<style lang="scss" scoped>
.custom-tree-node {
    display: flex;
    justify-content: space-between;
}

.select-wrap {
    display: flex;
    border: 1px solid #ccc;

    &-item {
        padding: 16px;
        flex: 0 0 50%;
        width: 50%;
        box-sizing: border-box;

        .el-tree {
            margin-top: 12px;
        }

        &-title {
            margin-bottom: 12px;
            font-size: 14px;
        }
    }

    &-left {
        border-right: 1px solid #ccc;
    }
}
</style>

