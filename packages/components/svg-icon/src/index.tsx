import {defineComponent, computed} from 'vue'
import '@packages/assets/scss/dinert-svg-icon.scss'

export default defineComponent({
    name: 'dinert-svg-icon',
    props: {
        iconClass: {
            type: String,
            default: ''
        },
        className: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: ''
        },
    },
    setup(props) {
        const svgClass = computed(() => {
            return `svg-icon ${props.className}`
        })
        const iconName = computed(() => `#icon-${props.iconClass}`)

        return {
            svgClass,
            iconName
        }
    },
    render() {
        if (this.iconClass.startsWith('el-')) {
            return (
                <el-icon color={this.color} class={'el-svg-icon'}>
                    <component is={this.iconClass.replace('el-', '')}/>
                </el-icon>
            )
        }

        return (
            <svg aria-hidden="true" class={this.svgClass}>
                <use xlink:href={this.iconName} fill={this.color}/>
            </svg>
        )

    }
})
