import {Plugin, App} from 'vue'
import * as components from './components/index'
import TablePage from './hooks/useTablePage/index'

export * from './components/index'
export const UseTablePage: typeof TablePage = TablePage

const myPlugin: Plugin = {
    install: (app: App) => {
        for (const name in components) {
            app.use((components as any)[name])
        }
    }
}

export default myPlugin
