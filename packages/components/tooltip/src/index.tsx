import {defineComponent} from 'vue'

import type {PropType} from 'vue'
import type {DinertTooltipProps} from '@/components/tooltip/types'

import '@/assets/scss/dinert-tooltip.scss'

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

        return (
            <el-tooltip
                key={this.disabled}
                content={this.content}
                disabled={this.disabled}
                {...this.options}
                v-slots={{
                    default: () => {
                        return (
                            <span>
                                <span class="text-tooltip">{ getValue(this.content, this) }</span>
                                <span class="label-text" onMouseenter={(e: MouseEvent) => this.$emit('LabelMouseEnter', e)}>
                                    {(defaultSlot?.()) || getValue(this.content, this) }
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
