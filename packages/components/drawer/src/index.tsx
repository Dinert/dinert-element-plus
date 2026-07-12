import {defineComponent, PropType} from 'vue'
import {getUuid} from '@packages/utils/tools'
import '@packages/assets/scss/dinert-drawer.scss'
import '@packages/assets/fonts/iconfont.js'
import {ScrollbarProps} from 'element-plus'

const getSize = (size: string | number): any => {

    if (size === 'large') {
        return 1200
    } else if (size === 'small') {
        return 600
    } else if (size === 'medium') {
        return 800
    }
    return size || '35%'
}


export default defineComponent({
    name: 'dinert-drawer',
    props: {
        modelValue: {
            type: Boolean,
            default: false
        },
        scrollbar: {
            type: Object as PropType<ScrollbarProps>,
            default: () => ({})
        },
        isBorder: {
            type: Boolean,
        },
        closeOnClickModal: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: '抽屉标题'
        },
        modalClass: {
            type: String,
            default: ''
        },
        size: {
            type: [String, Number],
            default: ''
        },
    },
    emits: ['update:modelValue', 'ClickClose'],
    setup() {

        const uuid = 'drawer_' + getUuid()

        return {
            uuid,
        }
    },
    render() {
        const slots = this.$slots

        return (
            <div>
                <el-drawer
                    modelValue={this.modelValue}
                    title={this.title}
                    size={getSize(this.size)}
                    closeOnClickModal={this.closeOnClickModal}
                    {...this.$attrs}
                    modalClass={`${this.uuid}  dinert-drawer-overlay ${this.modalClass} ${this.isBorder ? 'is-border' : ''}`}
                    onUpdate:modelValue={(val: boolean) => this.$emit('update:modelValue', val)}
                >
                    {{
                        default: () => {
                            return (
                                <el-scrollbar class="el-drawer__body-content"
                                    height="100%"
                                    view-style={{padding: '24px'}} {...this.scrollbar}>
                                    { slots.default?.() }
                                </el-scrollbar>
                            )
                        },
                        header: slots.header?.() ? () => slots.header?.() : () => {
                            return (
                                <>
                                    <div class="el-drawer__header-left">
                                        <span role="heading" class="el-drawer__title">
                                            { slots.title?.() || this.title }
                                        </span>
                                    </div>

                                </>
                            )
                        },
                        footer: slots.footer?.() ? () => slots.footer?.() : null,
                    }}
                </el-drawer>
            </div>
        )
    }
})

