import _DinertDemo from './demo/index.vue'
import _DinertApiTyping from './api-typing/index.vue'
import _DinertApiEnmu from './api-enmu/index.vue'

import type {App, Plugin} from 'vue'
type SFCWithInstall<T> = T & Plugin
const withInstall = <T>(comp: T) => {
    (comp as SFCWithInstall<T>).install = (app: App) => {
        const name = (comp as any).name
        // 注册组件
        app.component(name, comp as SFCWithInstall<T>)
    }
    return comp as SFCWithInstall<T>
}
export const DinertApiTyping = withInstall(_DinertApiTyping)
export const DinertApiEnmu = withInstall(_DinertApiEnmu)
export const DinertDemo = withInstall(_DinertDemo)
