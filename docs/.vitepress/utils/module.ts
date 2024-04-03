export const getModule = (path: string) => {
    const moduleObj = (import.meta as any).glob('../../components/**/*.vue')
    const initializePath = `../../components/${path}.vue`
    if (moduleObj[initializePath]) {
        return moduleObj[initializePath];
    } else {
        throw Error('当前路由引入错误')
    }
};