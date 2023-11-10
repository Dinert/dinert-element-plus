import * as components from './components/index'

export * from './components/index'
import {App} from 'vue'

export default {
    install: (app: App) => {
        for (const c in components) {
            app.use((components as any)[c])
        }
    },
}
