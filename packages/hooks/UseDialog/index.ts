
import type {RewriteDialogProps, DinertTablePageProps, DinertForm} from '@packages/index'
import type {DialogEmits} from 'element-plus'
import lodash from 'lodash'
import {ref, Ref} from 'vue'

class UseDialog<T, R = any> {
    dialogForm: Ref<DinertTablePageProps<T, any, any>['form']> = ref({formItem: {}, model: {}})
    dialogFormRef: Ref<R | {formRef: InstanceType<typeof DinertForm>} | null> = ref(null)

    modelValue: Ref<RewriteDialogProps['modelValue']>
    modalClass: Ref<string>
    width: Ref<RewriteDialogProps['width']>
    title: Ref<RewriteDialogProps['title']>
    fullscreen: Ref<RewriteDialogProps['fullscreen']>

    opened?: DialogEmits['opened']
    open?: DialogEmits['open']
    openAutoFocus?: DialogEmits['openAutoFocus']
    closeAutoFocus?: DialogEmits['closeAutoFocus']
    close?: DialogEmits['close']
    closed?: DialogEmits['closed']
    save?: () => void

    defaultOptions: RewriteDialogProps = {
        modelValue: false,
        modalClass: ''
    }

    options: RewriteDialogProps = {}
    constructor(options: RewriteDialogProps = {}) {

        this.options = lodash.defaultsDeep(lodash.cloneDeep(options), this.defaultOptions)
        this.fullscreen = ref(this.options.fullscreen)
        this.modelValue = ref(this.options.modelValue)
        this.modalClass = ref((this.options.modalClass as string))
        this.width = ref(this.options.width)
        this.title = ref(this.options.title)
    }

    // 打开弹窗
    openDialog() {

        this.title.value = this.modalClass.value === 'add' ? '新增' : this.modalClass.value === 'edit' ? '编辑' : this.title.value
        this.modelValue.value = true
    }

    // 关闭弹窗
    closeDialog() {
        this.modelValue.value = false
    }

    // 取消
    cancel() {
        this.closeDialog()
    }
}

export default UseDialog
