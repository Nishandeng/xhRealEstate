<template>
    <div>
        <div class="container">
            <el-row class="searchForm">
                <el-form ref="form" :inline="true" :model="query" label-width="120px">
                    <el-form-item label="关键词搜索">
                        <el-input v-model="query.keyword" clearable></el-input>
                    </el-form-item>
                </el-form>
            </el-row>
            <el-row style="margin-bottom: 10px">
                <el-col :span="4" style="text-align: right" :offset="16">
                    <el-button type="primary" style="width: 150px" icon="el-icon-search" @click="handleSearch">搜索
                    </el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="commitTime" label="留言时间" align="center">
                    <template slot-scope="scope">
                        <span>{{$dateUtils.dateFormat(scope.row.commitTime,'Y-m-d')}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="content" label="留言内容" align="center"></el-table-column>
                <el-table-column label="操作" width="180px" align="center">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="handleEdit(scope.row)">查看</el-button>
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
                <el-form-item label="留言时间">
                    <span>{{$dateUtils.dateFormat(form.commitTime,'Y-m-d')}}</span>
                </el-form-item>
                <el-form-item label="留言内容">
                    <span>{{form.content}}</span>
                </el-form-item>
            </el-form>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "UserList",
        data() {
            return {
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
                showAlert: false
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
                let res = await this.$api.feedbackList({...this.query});
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

            async handleEdit(user) {
                this.dialogVisible = true;
                this.title = '留言详情'
                this.form = {...user};
                this.showAlert = false;
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