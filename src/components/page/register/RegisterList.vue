<template>
    <div>
        <div class="container">
            <el-row style="margin-bottom: 10px;" justify="end">
                <el-col :span="4">
                    <el-input v-model="query.keyword" clearable></el-input>
                </el-col>
                <el-col :span="4" offset="12">
                    <el-button type="primary" style="width: 150px" icon="el-icon-search" @click="handleSearch">搜索
                    </el-button>
                </el-col>
                <el-col :span="4">
                    <el-button type="primary" style="width: 150px" icon="el-icon-search" @click="handleExport">导出
                    </el-button>
                </el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header">
                <el-table-column prop="commitTime" label="报名时间" align="center">
                    <template slot-scope="scope">
                        <span>{{$dateUtils.formatimestamp(scope.row.commitTime,'yyyy-MM-dd')}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="sportName" label="活动名称" align="center"></el-table-column>
                <el-table-column prop="name" label="姓名" align="center"></el-table-column>
                <el-table-column prop="mobile" label="手机号" align="center"></el-table-column>
                <el-table-column prop="communityName" label="小区名称" align="center"></el-table-column>
                <el-table-column prop="building" label="楼号" align="center"></el-table-column>
                <el-table-column prop="unit" label="单元号" align="center"></el-table-column>
                <el-table-column prop="room" label="房间号" align="center"></el-table-column>

                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="handleView(scope.row)">查看</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30]"
                        :page-size="query.pageSize"
                        layout="total, prev, pager, next"
                        :total=pageTotal>
                </el-pagination>
            </div>
        </div>

        <el-dialog
                :title="title"
                center
                :visible.sync="dialogVisible"
                :before-close="handleClose"
        >
            <el-form ref="form" label-suffix=":" :model="form" label-width="80px">
                <el-form-item label="报名时间">
                    <div>{{form.commitTime}}</div>
                </el-form-item>
                <el-form-item label="活动名称">
                    <div>{{form.sportName}}</div>
                </el-form-item>
                <el-form-item label="姓名">
                    <div>{{form.name}}</div>
                </el-form-item>
                <el-form-item label="手机号">
                    <div>{{form.mobile}}</div>
                </el-form-item>
                <el-form-item label="地址信息">
                    <div>{{form.communityName}}-{{form.building}}--{{form.unit}}--{{form.room}}</div>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    import {regionData} from 'element-china-area-data'
    import axios from 'axios';
    import {END_POINT} from "../../../api/paths";

    export default {
        name: "UserList",
        data() {
            return {
                options: regionData,
                dialogVisible: false,
                tableData: [],
                query: {
                    pageNum: 1,
                    pageSize: 20,
                },
                currentPage: 1,
                pageTotal: 0,
                searchForm: {},
                form: {},
                title: '',
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            refresh() {
                this.currentPage = 1;
                this.getData();
            },
            handleClose() {
                this.dialogVisible = false
            },
            async getData() {
                let res = await this.$api.listByPage({...this.query});
                const {code, msg, content} = res.data;
                if (code === 0) {
                    console.log(">>>>>>>>>content", content)
                    this.tableData = content.list;
                    this.pageTotal = content.total;
                } else if (code == 5001) {
                    this.message.error(msg);
                } else {
                    this.message.error(msg);
                }
            },
            // 触发搜索按钮
            handleSearch() {
                this.currentPage = 1;
                this.getData();
            },
            async handleView(form) {
                this.dialogVisible = true;
                this.title = '修改活动'
                this.form = {...form};
            },
            handleExport() {
                axios({
                    method: 'POST',
                    url: END_POINT+'/xh/sport/registerInfo/export',
                    data: {},
                    responseType: 'blob'
                }).then((res) => {
                    const link = document.createElement('a')
                    let blob = new Blob([res.data], {type: 'application/vnd.ms-excel'})
                    link.style.display = 'none'
                    link.href = URL.createObjectURL(blob)
                    // link.download = res.headers['content-disposition'] //下载后文件名
                    link.download = "报名信息列表"//下载的文件名
                    document.body.appendChild(link)
                    link.click()
                    document.body.removeChild(link)
                }).catch(error => {
                    this.$message.error({ title: '错误', desc: '网络连接错误' })
                    console.log(error)
                })
            }
        }
    }
</script>

<style scoped>
    .searchForm {

    }

    .handle-box {
        margin-bottom: 15px;
    }


</style>