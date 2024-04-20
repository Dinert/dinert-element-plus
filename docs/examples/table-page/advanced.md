

# 高级用法

## 首先（必看）
1. 在大部分情况下我们需要使用请求后的数据，而不是静态数据，TablePage能让你更好的查询数据，极大的减少你的代码量，提升你的开发效率，让你拥有丝滑的开发体验。
2. 以下两个方法需要重写
    - ajaxTableData是获取你请求数据的参数
    - changeTableData改变自已的data数据还有分页的参数
```ts
import {TablePage, DinertTablePageProps, AjaxTableProps} from '@dinert/element-plus'
import axios from 'axios'


interface DataProps {
    date: string;
    name: string;
    address: string;
}


interface TableParams<T = any> {
    data: T[];
    page?: number;
    pageNum?: number;
    pageSize?: number;
    total?: number;
    totalPages?: number;
}

/* TablePage的类型参数说明
 * T 表格data数据格式
 * D 表单model的数据格式
 * FI 表单formItem的数据格式
 * P 发起请求的数据格式
 * R 请求回来的数据格式
*/
class RewriteTablePage<T, D, FI> extends TablePage<T, D, FI, Parameters<typeof axios.request>[0], TableParams<T>> {
    constructor(options: DinertTablePageProps<T, D, FI>) {
        super(options)
        this.options = options
    }

    // 注意，这里一定要返回promise
    ajaxTableData(options: AjaxTableProps): Promise<TableParams<T>> {
        return axios.request(this.getAjaxTableDataParams(options))
    }

    changeTableData(res: TableParams<T>) {
        this.table.value.data = res.data
        this.table.value.pagination.total = res.total
    }
}

export default RewriteTablePage
```


## 配合TablePage使用
- 当你调用tablePage.search这个方法后，一个表格查询页面就完成了，无需在分页时自已编写额外的逻辑
:::demo

table-page/advanced/index

:::

<!-- @include: ./explain.md -->
