<!--批量导出为excel-->
<template>
    <el-row style="margin: 0 20px;">
        <el-col>
            <el-row type="flex"  :align="contentAlign" style="padding: 0 20px;text-align: right">
                <el-col>
                    <label class="radio-label" style="padding-left:0;">文件名: </label>
                    <el-input size="mini" style="width: 250px;" v-model="filename" prefix-icon="el-icon-document"/>
                </el-col>
                <el-col>
                    <label class="radio-label">自动调整excel宽度：</label>
                    <el-radio-group v-model="autoWidth">
                        <el-radio size="mini" :label="true" border>是</el-radio>
                        <el-radio size="mini" :label="false" border>否</el-radio>
                    </el-radio-group>
                </el-col>
                <el-col>
                    <el-button :loading="downloadLoading" size="mini"
                               type="primary" icon="document"
                               @click="handleDownload">
                        导出excel
                    </el-button>
                </el-col>
            </el-row>
        </el-col>
        <el-col>
            <!--//表格-->
            <el-table v-loading="listLoading" element-loading-text="拼命加载中"
                      :data="list"  border
                      highlight-current-row>
                <el-table-column type="selection" align="center"/>
                <el-table-column align="center" label="序号" width="60">
                    <template slot-scope="scope">{{ scope.$index }}</template>
                </el-table-column>
                <el-table-column label="客户名称" align="center" prop="name"></el-table-column>
                <el-table-column label="所在城市" align="center" prop="city"></el-table-column>
                <el-table-column label="联系电话" align="center" prop="phone"></el-table-column>
                <el-table-column label="联系人" align="center">
                    <template slot-scope="scope">
                        <el-tag>{{ scope.row.contactName}}</el-tag>
                    </template>
                </el-table-column>
            </el-table>
        </el-col>
    </el-row>
</template>

<script>
    export default {
        name: 'ExportExcel',
        data() {
            return {
                list: null,
                contentAlign: 'middle',
                listLoading: true,
                downloadLoading: false,
                filename: '',
                autoWidth: true
            }
        },
        created() {
            this.fetchData()
        },
        methods: {
            fetchData() {
                this.listLoading = true;

                setTimeout(() => {
                    let list=[];
                    for(let i=0;i<100;i++){
                        list.push(
                            {
                                name:'张三',
                                city:'上海',
                                phone:'15637389289'
                            }
                        )
                    }
                    this.list=list;
                    this.listLoading = false
                }, 100)
                // this.$http.customerApi.getCustomerList({
                //     rootTeamId: this.$sysCons.rootTeamId,
                // }).then(res => {
                //     this.list = res.data.data;
                //     this.listLoading = false
                // })
            },
            handleDownload() {
                this.downloadLoading = true
                import('../../utils/excel/Export2Excel').then(excel => {
                    const tHeader = ['客户Id', '客户名称', '客户所在城市', '联系电话', '联系人']
                    const filterVal = ['id', 'name', 'city', 'phone', 'contactName']
                    const list = this.list
                    const data = this.formatJson(filterVal, list)
                    excel.export_json_to_excel({
                        header: tHeader,
                        data,
                        filename: this.filename,
                        autoWidth: this.autoWidth
                    })
                    this.downloadLoading = false
                })
            },
            formatJson(filterVal, jsonData) {
                return jsonData.map(v => filterVal.map(j => {
                    if (j === 'timestamp') {
                        return this.$dateUtils.formatimestamp(v[j], "yyyy-MM-dd")
                    } else {
                        return v[j]
                    }
                }))
            }
        }
    }
</script>

<style>
    .radio-label {
        font-size: 14px;
        color: #606266;
        line-height: 40px;
        padding: 0 12px 0 30px;
    }
</style>
