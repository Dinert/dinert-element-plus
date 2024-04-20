import {defineComponent} from 'vue'
import {getUuid} from '@packages/utils/tools'
import lodash from 'lodash'
import type {RewriteDialogProps, GETWH} from '../types'

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
    setup() {

        const uuid = 'dialog_' + getUuid()
        const defaultAttrs = {
            title: '弹窗标题',
            closeOnClickModal: false,
            closeOnPressEscape: true,
            appendToBody: true
        }

        return {
            uuid,
            defaultAttrs
        }
    },
    render() {
        const slots = this.$slots
        const attrs = lodash.defaultsDeep(lodash.cloneDeep({
            ...this.$attrs,
            class: this.$attrs.modalClass ? 'dialog_' + this.$attrs.modalClass : '',
            modalClass: `${this.uuid} el-overlay ${this.$attrs.modalClass || ''}`,
            width: getWH(this.$attrs).width,
            style: {
                ...(this.$attrs?.style as any),
                height: getWH(this.$attrs).height,
            }
        }), this.defaultAttrs)
        return (
            <div>
                <el-dialog {...attrs}>
                    {{
                        default: () => slots.default?.(),
                        header: () => {
                            return (
                                <>
                                    <span role="heading" class="el-dialog__title">
                                        { slots.header?.() || attrs.title }
                                    </span>
                                    <dinert-svg-icon class="el-dialog__full" icon-class={'全屏'}></dinert-svg-icon>
                                </>
                            )
                        },
                        footer: () => slots.footer?.(),
                    }}
                </el-dialog>
            </div>
        )
    }
}) as RewriteDialogProps

