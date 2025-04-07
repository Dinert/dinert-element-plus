import {defineComponent, watch, ref} from 'vue'
import {getUuid} from '@packages/utils/tools'
import lodash from 'lodash'
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
        }
    },
    emits: ['update:fullscreen'],
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
            currentFullScreen
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
            }
        }), this.defaultAttrs)

        return (
            <div>
                <el-dialog el-dialog {...attrs} fullscreen={this.currentFullScreen} modal-class="dinert-overlay">
                    {{
                        default: () => slots.default?.(),
                        header: () => {
                            return (
                                <>
                                    <span role="heading" class="el-dialog__title">
                                        { slots.header?.() || attrs.title }
                                    </span>

                                    <span class="full" onClick={this.fullToggle}>
                                        <svg class="icon" aria-hidden="true">
                                            <use xlink:href={this.currentFullScreen ? '#icon-tuichuquanping' : '#icon-quanping'}></use>
                                        </svg>
                                    </span>
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

