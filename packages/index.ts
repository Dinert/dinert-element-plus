import {Plugin, App} from 'vue'
import * as components from './components/index'
import TablePage2 from './hooks/TablePage/index'

export * from './components/index'
export const TablePage = TablePage2
export * from './hooks/TablePage/types/index'


const myPlugin: Plugin = {
    install: (app: App) => {
        for (const name in components) {
            app.use((components as any)[name])
        }
    }
}

export default myPlugin
