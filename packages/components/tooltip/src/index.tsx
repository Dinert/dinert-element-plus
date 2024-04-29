import {defineComponent} from 'vue'

import type {PropType} from 'vue'
import type {DinertTooltipProps} from '@packages/components/tooltip/types'

import '@packages/assets/scss/dinert-tooltip.scss'

const getValue = (content?: string, _this?: any) => {
    if (_this.item && _this.item.options) {
        if (_this.item.type === 'select') {
            const options = _this.item.options.options
            if (options && options.length) {
                const index = options.findIndex((item: any) => item.value === content)
                if (index !== -1) {
                    return (options[index]).label
                }
            }
        }
    }

    return content
}

export default defineComponent({
    name: 'dinert-tooltip',
    props: {
        options: {
            type: Object,
            default: () => ({})
        },
        content: {
            type: String,
            default: ''
        },
        disabled: {
            type: Boolean,
            default: true
        },
        item: {
            type: Object as PropType<DinertTooltipProps['item']>,
            default: () => ({})
        }
    },
    emits: ['LabelMouseEnter'],
    setup() {

        return {}
    },
    render() {
        const defaultSlot = this.$slots.default
        const defaultAfter = this.$slots.defaultAfter
        const defaultBefore = this.$slots.defaultBefore

        return (
            <el-tooltip
                key={this.disabled}
                content={this.content}
                disabled={this.disabled}
                {...this.options}
                v-slots={{
                    default: () => {
                        return (
                            <span class="dinert-tooltip">
                                <span class="text-tooltip">{ getValue(this.content, this) }</span>
                                <span class="label-text" onMouseenter={(e: MouseEvent) => this.$emit('LabelMouseEnter', e)}>
                                    {defaultBefore?.()}
                                    {(defaultSlot?.()) || getValue(this.content, this) }
                                    {defaultAfter?.()}
                                </span>
                                <span>{this.disabled}</span>
                            </span>
                        )
                    }
                }}
            >

            </el-tooltip>
        )
    }
})
