import { defineComponent, ref } from "vue";

export default defineComponent({
    name: 'dinert-recuve-table-column',

    setup(props, ctx) {
        const tableData = ref([
            {
                date: '2016-05-02',
                // name: '王小虎',
                // address: '上海市普陀区金沙江路 1518 弄'
            },

        ])
        return {
            tableData
        }
    },
    render() {
        return (
            <el-table data={this.tableData} ref="tableDataRef">

                <el-table-column prop="date" label="日期" width="180"  v-slots={{
                    default: ({ row }) => {
                        console.log('ccc')
                        return row.date
                    }
                }}/>
            </el-table>
        )
    }
})