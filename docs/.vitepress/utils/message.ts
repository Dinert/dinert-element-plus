import {ElMessage} from 'element-plus'

export const $message = {
    success(text) {
        ElMessage({
            message: text,
            type: 'success',
        })
    },
    warning(text) {
        ElMessage({
            message: text,
            type: 'warning',
        })
    },
    error(text) {
        ElMessage({
            message: text,
            type: 'error',
        })
    },
    info(text) {
        ElMessage({
            message: text,
            type: 'info',
        })
    },
}
