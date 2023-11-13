import {defineComponent, ref, computed} from 'vue'

import type {ElTooltipContentProps} from 'element-plus'
import type {PropType} from 'vue'

interface DinertTooltipProps {
    options?: Partial<ElTooltipContentProps>;
    item?: {
        type?: string;
        options?: {
            options?: any[];
        };
    };
}

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
    setup(props) {

        return {}
    },
    render() {
        return (
            <el-tooltip
                content={this.content}
                disabled={this.disabled}
                {...this.options}
            >
                <span>
                    <span class="text-tooltip">{ getValue(this.content, this) }</span>
                    <span class="label-text" onMouseenter={(e: MouseEvent) => this.$emit('LabelMouseEnter', e)}>
                        <slot>{ this.content }</slot>
                    </span>
                </span>
            </el-tooltip>
        )
    }
})
