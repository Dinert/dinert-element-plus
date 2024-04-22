import {watch} from 'vue'

const dialogDrag = () => {
    /**
     * 设置拖拽事件
     * @param container 大容器，比如蒙版。
     * @param dialog 被拖拽的窗口
     * @param dialogTitle 拖拽的标题
     * @param width 宽度比例
     */


    const setDialog = (options: any, binding: any, vnode: any) => {

        const oldCursor = options.dialogTitle.style.cursor

        // 可视窗口的宽度
        const clientWidth = document.documentElement.clientWidth
        // 可视窗口的高度
        const clientHeight = document.documentElement.clientHeight

        // 根据百分数计算宽度
        const tmpWidth = typeof options.width === 'string' ? options.dialog.offsetLeft : clientWidth * (100 - options.width) / 200

        // 默认宽度和高度
        const domset = {
            x: tmpWidth,
            y: clientHeight * 15 / 100 // 根据 15vh 计算
        }

        // 查看dialog 当前的宽度和高低
        if (options.dialog.style.marginLeft === '') {
            options.dialog.style.marginLeft = domset.x + 'px'
        } else {
            domset.x = options.dialog.style.marginLeft.replace('px', '') * 1
        }

        if (options.dialog.style.marginTop === '') {
            options.dialog.style.marginTop = domset.y + 'px'
        } else {
            domset.y = options.dialog.style.marginTop.replace('px', '') * 1
        }

        // 记录拖拽开始的光标坐标，0 表示没有拖拽
        const start = {x: 0, y: 0}
        // 移动中记录偏移量
        const move = {x: 0, y: 0}

        options.dialog.style.transition = 'transform 0.325s'

        // 弹窗移出
        options.dialog.onmouseleave = () => {
            const dClientW = document.documentElement.clientWidth
            if ((dClientW - (domset.x + options.dialog.offsetWidth)) <= 300 && Number(options.dialog.style.marginTop.replace('px', '')) <= 20) {
                options.dialog.style.transform = `translateY(-${options.dialog.offsetHeight + domset.y}px)`
                vnode.ctx.devtoolsRawSetupState.close()
            }
        }

        // 经过时改变鼠标指针形状
        options.dialogTitle.onmouseover = () => {
            options.dialogTitle.style.cursor = 'move' // 改变光标形状
        }

        // 鼠标按下，开始拖拽
        options.dialogTitle.onmousedown = (e: any) => {
            start.x = e.clientX
            start.y = e.clientY
            options.dialogTitle.style.cursor = 'move' // 改变光标形状
        }

        window.addEventListener('mousemove', e => {
            if (e.clientX >= Number(options.dialog.style.marginLeft.replace('px', '')) && e.clientY <= 20 && options.dialog.style.transform.indexOf('-') !== -1) {
                vnode.ctx.devtoolsRawSetupState.open()
                options.dialog.style.transform = 'translateY(0px)'
            }
        }, false)

        // 鼠标移动，实时跟踪 dialog
        options.container.onmousemove = (e: any) => {

            if (start.x === 0) { // 不是拖拽状态
                return
            }

            move.x = e.clientX - start.x

            move.y = e.clientY - start.y

            // 初始位置 + 拖拽距离
            options.dialog.style.marginLeft = (domset.x + move.x) + 'px'
            options.dialog.style.marginTop = (domset.y + move.y) + 'px'
        }

        // 鼠标抬起，结束拖拽
        options.container.onmouseup = (e: any) => {
        // alert(start.x)
            if (start.x === 0) { // 不是拖拽状态
                return
            }

            move.x = e.clientX - start.x
            move.y = e.clientY - start.y

            // 记录新坐标，作为下次拖拽的初始位置
            domset.x += move.x
            domset.y += move.y

            options.dialogTitle.style.cursor = oldCursor
            options.dialog.style.marginLeft = domset.x + 'px'
            options.dialog.style.marginTop = domset.y + 'px'

            // 结束拖拽
            start.x = 0

        }
    }

    const unload = (container: any, dialogTitle: any) => {
        dialogTitle.onmouseover = null
        dialogTitle.onmousedown = null
        // container.onmousemove = null
        container.onmouseup = null
    }

    return {
        setDialog, // 设置
        unload // 卸载，移除事件
    }
}

const _dialogDrag = {
    // mounted
    mounted(el: any, binding: any, vnode: any) {
        if (!binding.value.customDrag) {
            return
        }

        // 监听 dialog 是否显示的状态
        watch(binding.value, () => {

            // dialog 不可见，退出
            if (!binding.value.modelValue) {
                return undefined
            }

            // 寻找 el-dialog 组件
            const container: any = document.querySelector('.' + el.getAttribute('data-class'))


            // 已经设置拖拽事件，退出
            if (container.onmousemove) {
                return undefined
            }

            // 等待 DOM 渲染完毕
            setTimeout(() => {
                // 拖拽的 “句柄”
                const _dialogTitle = container.getElementsByClassName('el-dialog__header')

                if (_dialogTitle.length === 0) {
                    // 还没有渲染完毕，或则其他原因
                    console.warn('没有找到要拖拽的 el-dialog', el)
                } else {
                    const {setDialog} = dialogDrag()
                    const dialogTitle = _dialogTitle[0]
                    // 弹窗
                    const dialog = container.querySelector('.el-dialog')
                    // 通过 css 寻找 el-dialog 设置的宽度
                    const arr = dialog.style.cssText.split(';')
                    const width = arr[0].replace('%', '').replace('--el-dialog-width:', '') //
                    // 设置 el-dialog 组件、弹窗、句柄、宽度
                    setDialog({
                        container,
                        dialog,
                        dialogTitle,
                        width
                    }, binding, vnode)
                }
            }, 300)
        }, {
            immediate: true
        })
    },

    // 移除事件
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    unmounted(el: any, _binding: any) {
        setTimeout(() => {

            const container = document.querySelector('.' + el.getAttribute('data-class'))
            if (!container) {
                return
            }

            // 拖拽的div
            const _dialogTitle = container.getElementsByClassName('el-dialog__header')

            if (_dialogTitle.length === 0) {
                console.warn('没有找到要拖拽的dialog', el)
            } else {

                // el-dialog 组件
                const dialogTitle = _dialogTitle[0]
                const {unload} = dialogDrag()
                // 设置
                unload(container, dialogTitle)
            }
        }, 500)
    }
}

export default _dialogDrag
