import {defineComponent, watch, ref, PropType} from 'vue'
import {getUuid} from '@packages/utils/tools'
import {Close} from '@element-plus/icons-vue'
import type {RewriteDialogProps, GETWH} from '../types'
import '@packages/assets/scss/dinert-dialog.scss'
import '@packages/assets/fonts/iconfont.js'
import {ScrollbarProps} from 'element-plus'

const getWH = (size: string): GETWH => {
    const result: GETWH = {
        width: '65%',
        height: 'auto'
    }
    const options = {} as any
    if (size === 'large') {
        result.width = 940
        result.height = 706
    } else if (size === 'small') {
        result.width = 482
        result.height = 362
    } else if (size === 'medium') {
        result.width = 720
        result.height = 440
    }

    result.width = options.width ? options.width : result.width
    result.height = options.height ? options.height : result.height
    result.height = String(result.height).replace('px', '') + 'px'

    return result
}


export default defineComponent({
    name: 'dinert-dialog',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        fullscreen: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: true
        },
        scrollbar: {
            type: Object as PropType<ScrollbarProps>,
            default: () => ({})
        },
        fixedHeight: {
            type: Boolean,
            default: false
        },
        autoHeight: {
            type: Boolean,
            default: false
        },
        closeOnClickModal: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '弹窗标题'
        },
        modalClass: {
            type: String,
            default: ''
        },
        closeOnPressEscape: {
            type: Boolean,
            default: true
        },
        appendToBody: {
            type: Boolean,
            default: true
        },
        size: {
            type: String,
            default: ''
        },
        style: {
            type: Object as PropType<any>,
            default: () => ({})
        },
    },
    emits: ['update:fullscreen', 'update:modelValue', 'ClickClose'],
    setup(props, ctx) {

        const uuid = 'dialog_' + getUuid()

        const currentFullScreen = ref(false)

        const fullToggle = () => {
            currentFullScreen.value = !currentFullScreen.value
            ctx.emit('update:fullscreen', currentFullScreen.value)
        }

        const clickClose = () => {
            ctx.emit('update:modelValue', false)
            ctx.emit('ClickClose')
        }

        watch(() => props.fullscreen, newVal => {
            currentFullScreen.value = newVal
        }, {
            deep: true,
            immediate: true
        })

        return {
            uuid,

            fullToggle,
            currentFullScreen,
            clickClose
        }
    },
    render() {
        const slots = this.$slots


        return (
            <div>
                <el-dialog
                    modelValue={this.modelValue}
                    width={getWH(this.size).width}
                    style={{
                        ...(this.style),
                        height: this.currentFullScreen ? undefined : getWH(this.size).height,
                    }}
                    {...this.$attrs}
                    showClose={false}
                    modalClass={`${this.uuid}  dinert-overlay ${this.modalClass || ''} ${this.fixedHeight ? 'fixed-height' : ''} ${this.autoHeight ? 'auto-height' : ''}`}
                    fullscreen={this.currentFullScreen}
                    onUpdate:modelValue={(val: boolean) => this.$emit('update:modelValue', val)}
                >
                    {{
                        default: () => {
                            return (
                                <el-scrollbar class="el-dialog__body-content"
                                    height="100%"
                                    view-style={{padding: '24px'}} {...this.scrollbar}>
                                    { slots.default?.() }
                                </el-scrollbar>
                            )
                        },
                        header: slots.header?.() ? () => slots.header?.() : () => {
                            return (
                                <>
                                    <div class="el-dialog__header-left">
                                        <span role="heading" class="el-dialog__title">
                                            { slots.title?.() || this.title }
                                        </span>
                                    </div>

                                    <div class="el-dialog__header-right">
                                        <span class="el-dialog__header-right-full" onClick={this.fullToggle}>
                                            <svg class="icon" aria-hidden="true">
                                                <use xlink:href={this.currentFullScreen ? '#icon-tuichuquanping' : '#icon-quanping'}></use>
                                            </svg>
                                        </span>
                                        {
                                            this.showClose ? <el-icon class="el-dialog__header-right-close" onClick={this.clickClose}><Close /></el-icon> : null
                                        }
                                    </div>
                                </>
                            )
                        },
                        footer: slots.footer?.() ? () => slots.footer?.() : null,
                    }}
                </el-dialog>
            </div>
        )
    }
}) as RewriteDialogProps

