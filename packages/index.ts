import {Plugin, App} from 'vue'
import * as components from './components/index'
import tablePage from './hooks/TablePage/index'
import useDialog from './hooks/UseDialog/index'
import useForm from './hooks/UseForm/index'
export {dataTransformRod} from './utils/tools'

export * from './components/index'
export const TablePage = tablePage
export const UseDialog = useDialog
export const UseForm = useForm
export * from './hooks/TablePage/types/index'

const myPlugin: Plugin = {
    install: (app: App) => {
        for (const name in components) {
            app.use((components as any)[name])
        }
    }
}

export default myPlugin
