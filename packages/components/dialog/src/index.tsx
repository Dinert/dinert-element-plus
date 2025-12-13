import {defineComponent, watch, ref} from 'vue'
import {getUuid} from '@packages/utils/tools'
import lodash from 'lodash'
import {Close} from '@element-plus/icons-vue'
import type {RewriteDialogProps, GETWH} from '../types'
import '@packages/assets/scss/dinert-dialog.scss'
import '@packages/assets/fonts/iconfont.js'

const getWH = (options: RewriteDialogProps): GETWH => {
    const result: GETWH = {
        width: '65%',
        height: 'auto'
    }
    if (options.size === 'large') {
        result.width = 940
        result.height = 706
    } else if (options.size === 'small') {
        result.width = 482
        result.height = 362
    } else if (options.size === 'medium') {
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
        fullscreen: {
            type: Boolean,
            default: false
        },
        showClose: {
            type: Boolean,
            default: true
        },
        viewStyle: {
            type: [String, Object],
            default: () => ({})
        }
    },
    emits: ['update:fullscreen', 'update:modelValue', 'ClickClose'],
    setup(props, ctx) {

        const uuid = 'dialog_' + getUuid()
        const defaultAttrs = {
            title: '弹窗标题',
            closeOnClickModal: false,
            closeOnPressEscape: true,
            appendToBody: true,
        }
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
            defaultAttrs,
            fullToggle,
            currentFullScreen,
            clickClose
        }
    },
    render() {
        const slots = this.$slots

        const attrs = lodash.defaultsDeep(lodash.cloneDeep({
            ...this.$attrs,
            class: this.$attrs.modalClass ? 'dialog_' + this.$attrs.modalClass : '',
            modalClass: `${this.uuid} el-overlay dinert-dialog ${this.$attrs.modalClass || ''}`,
            width: getWH(this.$attrs).width,
            style: {
                ...(this.$attrs?.style as any),
                height: this.currentFullScreen ? undefined : getWH(this.$attrs).height,
            },
            showClose: false
        }), this.defaultAttrs)

        return (
            <div>
                <el-dialog el-dialog {...attrs} fullscreen={this.currentFullScreen} modal-class="dinert-overlay">
                    {{
                        default: () => {
                            return (
                                <el-scrollbar class="el-dialog__body-content" height='100%' view-style={{ padding: '24px', ...(this.viewStyle as any) }}>
                                    { slots.default?.() }
                                </el-scrollbar>
                            )
                        },
                        header: () => {
                            return (
                                <>
                                    <div class="el-dialog__header-left">
                                        <span role="heading" class="el-dialog__title">
                                            { slots.header?.() || attrs.title }
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

