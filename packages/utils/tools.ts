
import type {RewriteAxiosResponse} from '@/service/types'
// 浏览器的各种存储
export const storage = (name: 'localStorage' | 'sessionStorage', key: string, value?: any) => {
    if (key === 'remove') {
        return (window as any)[name].removeItem(`dinert-zhdd-${value}`)
    } else if (key === 'clear') {
        return (window as any)[name].clear()
    } else if (value) {
        return (window as any)[name].setItem(`dinert-zhdd-${key}`, JSON.stringify(value))
    } else {
        return JSON.parse((window as any)[name].getItem(`dinert-zhdd-${key}`))
    }
}

// 首字母大写
export const firstUpperCase = (str: string) => {
    str = String(str)
    return str.replace(/^\S/, s => s.toUpperCase())
}

// 重写判断类型
export const type = (type: any) => {
    return Object.prototype.toString
        .call(type)
        .split(' ')[1]
        .split(']')[0]
        .toLocaleLowerCase()
}

// 生成唯一ID
export const getUuid = (): string => {
    const s = []
    const hexDigits = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (let i = 0; i < 36; i++) {
        s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1)
    }
    s[14] = '4'
    s[19] = hexDigits.substr((+s[19] & 0x3) | 0x8, 1)
    s[8] = s[13] = s[18] = s[23] = '-'
    const uuid = s.join('')
    return uuid
}


/**
 *
 * @param {Object} obj
 * @param {String} path
 * @returns
 */
export const getPropByPath = (obj: any, path: string) => {
    let tempObj = obj
    path = path.replace(/\[(\w+)\]/g, '.$1')
    path = path.replace(/^\./, '')

    const keyArr = path.split('.')
    let i = 0
    for (let len = keyArr.length; i < len - 1; ++i) {
        // eslint-disable-next-line max-statements-per-line
        if (!tempObj) {break}
        const key = keyArr[i]
        if (key in tempObj) {
            tempObj = tempObj[key]
        } else {
            return null
            // break;
        }
    }
    return tempObj ? tempObj[keyArr[i]] : null
}

export const dataTransformRod = (data: any, errData: any = '-') => {
    return [null, undefined, ''].includes(data) ? errData : data
}

// 获取树指定的所有节点
export const getTreeNode = <T = any>(treeData: any, name: string, value: any, key: string): T[] => {
    const result: T[] = []
    // eslint-disable-next-line consistent-return
    const treeNode = (treeData2: any) => {
        // eslint-disable-next-line @typescript-eslint/prefer-for-of
        for (let i = 0; i < treeData2.length; i++) {
            if (value.includes(treeData2[i][name])) {
                result.push(treeData2[i][key])
            }
            if (treeData2[i].children && treeData2[i].children.length) {
                treeNode(treeData2[i].children)
            }
        }

    }
    treeNode(treeData)
    return result
}

// 树转扁平
export function convertToFlat<T = any>(data: T[], children: string = 'children', parentId: any = null): T[] {
    return data.reduce((acc: any, curr: any) => {
        acc.push({...curr, parentId})
        if (curr[children] && curr[children].length) {
            acc = acc.concat(convertToFlat(curr[children], children, curr.id))
        }
        return acc
    }, [])
}

// 格式化手机号
export function formatPhone(value: string): string {
    if (!/^1[3|4|5|7|8|9][0-9]\d{4,8}$/.test(value)
  || value.length !== 11) {
        return value
    } else {
        const mobile = value.replace(/^(.{3})(.*)(.{4})/, '$1-$2-$3')
        return mobile
    }
}

// 下载文件
export const downFile = (response: RewriteAxiosResponse): any => {
    const content = response.data
    // blob内容是json，不下载
    if (response.headers['content-type'] === 'application/json;charset=UTF-8') {
        return response
    }
    const data = new Blob([content], {
        type: response.headers['content-type']
    })
    const downloadUrl = window.URL.createObjectURL(data)

    if (response.config.headers.prohibitDownload) {
        return downloadUrl
    }
    const anchor = document.createElement('a')
    anchor.href = downloadUrl
    let filename = response.headers['content-disposition'].split('=')[1]
    filename = filename.split(';')[0]
    anchor.download = decodeURIComponent(filename)
    anchor.target = '_blank'
    anchor.click()
    window.URL.revokeObjectURL((data as any))
    return true
}

// 转化数组为字符串
export const formatterArray = (cellValue: any) => {
    if (cellValue instanceof Array) {
        const joinValue = cellValue.join(',')
        return joinValue || '-'
    } else if (cellValue) {
        return cellValue
    } else {
        return '-'
    }
}


// 预防xss攻击
export const escapeHTML = (str: any) => {
    // eslint-disable-next-line consistent-return
    return String(str).replace(/[<>& "]/g, (match: any) => {
        switch (match) {
            case '<':
                return '&lt;'
            case '>':
                return '&gt;'
            case '&':
                return '&amp;'
            case ' ':
                return '&nbsp;'
            case '"':
                return '&quot;'
            default:
                return ''
        }
    })
}

export const parseHTML = (html: string) => {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    console.log(doc.body.innerHTML, 'doc.body.innerHTML')
    return doc.body.innerHTML
}

// 转化数组为分行的字符串
export const formatterWrapArray = (cellValue: any, splitString: string = '<br/>', isHtml: boolean = true) => {
    if (cellValue instanceof Array) {
        const joinValue = cellValue.map(item => {
            return isHtml ? escapeHTML(item) : item
        }).join(splitString)
        return joinValue || '-'
    } else if (cellValue) {
        return cellValue
    } else {
        return '-'
    }
}

/**
 *
 * @returns 获取浏览器的名称和版本
 */
export function getBrowserInfo(): string[] {
    const agent = navigator.userAgent.toLowerCase()

    const regStr_ie = /msie [\d.]+;/gi
    const regStr_ff = /firefox\/[\d.]+/gi
    const regStr_chrome = /chrome\/[\d.]+/gi
    const regStr_saf = /safari\/[\d.]+/gi
    // IE
    if (agent.indexOf('msie') > 0)
    {
        return agent.match(regStr_ie) || []
    }

    // firefox
    if (agent.indexOf('firefox') > 0)
    {
        return agent.match(regStr_ff) || []
    }

    // Safari
    if (agent.indexOf('safari') > 0 && !agent.includes('chrome'))
    {
        return agent.match(regStr_saf) || []
    }

    // Chrome
    if (agent.indexOf('chrome') > 0)
    {
        return agent.match(regStr_chrome) || []
    }
    return []
}
