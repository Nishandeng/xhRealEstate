<template>
    <div>
        <div class="container">
            <el-row >
                <el-col span="8">
                    <el-form ref="form" :inline="true"  :model="query" >
                        <el-form-item label="检索条件">
                            <el-input style="width: 260px" v-model="query.keyword" clearable></el-input>
                        </el-form-item>
                    </el-form>
                </el-col>
                <el-col :span="1" style="text-align: right" >
                    <el-button type="primary"  icon="el-icon-search" @click="handleSearch">搜索
                    </el-button>
                </el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header">

                <el-table-column prop="name" fixed label="姓名"  align="center"></el-table-column>
                <el-table-column prop="mobile" label="手机号" ></el-table-column>
                <el-table-column prop="sex" label="性别" >
                    <template slot-scope="scope">
                        <span>{{$viewUtils.sexView(scope.row.sex)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="age" label="年龄" ></el-table-column>
                <el-table-column prop="workOrg" label="工作单位" ></el-table-column>
                <el-table-column prop="injectNo" label="反馈编号" ></el-table-column>
                <el-table-column prop="firstInjectDate" label="完成反馈时间" ></el-table-column>
                <el-table-column prop="firstInjectLocation" label="首次反馈时间" ></el-table-column>
                <el-table-column prop="firstInjectNo" label="首次反馈编号" ></el-table-column>
                <el-table-column prop="secondInjectDate" label="二次反馈日期" ></el-table-column>
                <el-table-column prop="secondInjectLocation" label="二次反馈地点" ></el-table-column>
                <el-table-column prop="secondInjectNo" label="二次反馈编号" ></el-table-column>
                <el-table-column prop="reporter" label="报告员" ></el-table-column>
                <el-table-column prop="checker" label="检查员" ></el-table-column>
                <el-table-column prop="issueDate" label="issueDate" ></el-table-column>
                <el-table-column prop="certPath" label="证书路径" ></el-table-column>
                <el-table-column prop="commitTime" label="提交时间" ></el-table-column>
                <el-table-column prop="startTime" label="开始时间" ></el-table-column>
                <el-table-column prop="finishTime" label="结束时间" ></el-table-column>
                <el-table-column prop="status" label="状态" ></el-table-column>

                <el-table-column label="操作" fixed="right" width="150px">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini"  @click="handleEdit(scope.row)">编辑</el-button>
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
        <!--弹出框-->
        <el-dialog
                title="补全反馈信息"
                width="70%"
                center
                :visible.sync="dialogVisible"
                :before-close="handleClose">
            <el-form :inline="true" label-suffix=":"	 ref="form" :model="form" label-width="120px" >
                <el-form-item label="姓名">
                    <el-input  v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input  v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.sex" @change="handleRadioChange">
                        <el-radio :label=1>男</el-radio>
                        <el-radio :label=2>女</el-radio>
                    </el-radio-group>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input  v-model="form.age"></el-input>
                </el-form-item>
                <el-form-item label="身份证号">
                    <el-input  v-model="form.idNo"></el-input>
                </el-form-item>
                <el-form-item label="工作单位">
                    <el-input  v-model="form.workOrg"></el-input>
                </el-form-item>
                <el-form-item label="反馈编号">
                    <el-input  v-model="form.injectNo"></el-input>
                </el-form-item>
                <el-form-item label="首次反馈日期">
                    <el-input  v-model="form.firstInjectDate"></el-input>
                </el-form-item>
                <el-form-item label="首次反馈地点">
                    <el-input  v-model="form.firstInjectLocation"></el-input>
                </el-form-item>
                <el-form-item label="首次反馈编号">
                    <el-input  v-model="form.firstInjectNo"></el-input>
                </el-form-item>
                <el-form-item label="二次反馈日期">
                    <el-input  v-model="form.firstInjectDate"></el-input>
                </el-form-item>
                <el-form-item label="二次反馈地点">
                    <el-input  v-model="form.firstInjectLocation"></el-input>
                </el-form-item>
                <el-form-item label="二次反馈编号">
                    <el-input  v-model="form.firstInjectNo"></el-input>
                </el-form-item>
                <el-form-item label="reporter">
                    <el-input  v-model="form.reporter"></el-input>
                </el-form-item>
                <el-form-item label="检查员">
                    <el-input  v-model="form.checker"></el-input>
                </el-form-item>
                <el-form-item label="issuedate">
                    <el-input  v-model="form.issuedate"></el-input>
                </el-form-item>
                <el-form-item label="提交时间">
                    <el-input  v-model="form.commitTime"></el-input>
                </el-form-item>
                <el-form-item label="证书路径">
                    <el-input  v-model="form.certPath"></el-input>
                </el-form-item>
                <el-form-item label="开始时间">
                    <el-input  v-model="form.startTime"></el-input>
                </el-form-item>
                <el-form-item label="结束时间">
                    <el-input  v-model="form.finishTime"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button  @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
    import {regionData} from 'element-china-area-data'
    export default {
        name: "UserList",
        data() {
            return {
                options:regionData,
                dialogVisible:false,
                tableData:[],
                query: {
                    pageNum: 1,
                    pageSize: 20,
                },
                currentPage: 1,
                pageTotal: 0,
                searchForm:{},
                form: {},
                title:'',
                showAlert:false
            }
        },
        mounted(){
            this.getData();
        },
        methods: {
            refresh(){
                this.currentPage = 1;
                this.getData();
            },

            async handleSubmit() {
                let res = await this.$api.saveInjectCertData(this.form);
                const {code, msg} = res.data;
                if (code == 0) {
                    this.$message.success("保存成功！");
                    this.dialogVisible = false;
                    this.refresh();
                }else{
                    this.$message.success(msg);
                }
            },
            handleClose() {
                this.dialogVisible = false
            },
            handleAddressChange(value) {
                console.log(value)
            },

            async getData() {
                let res = await this.$api.getInjectDataList(this.query);
                const {code, msg, content} = res.data;
                if (code === 0) {
                    this.tableData = content.list;
                    this.pageTotal = content.total;
                } else {
                    this.message.error(msg);
                }
            },
            // 触发搜索按钮
            handleSearch() {
                this.currentPage = 1;
                this.getData();
            },
            // 删除操作
            handleDelete(user) {
                // 二次确认删除
                this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                })
                    .then(() => {
                        this.doDeleteUser(user.id);
                    })
                    .catch(() => {
                    });
            },
            handleRadioChange(val){
                console.log(val)
            },
            async doDeleteUser(userId){
                let res = await this.$api.deletePlatUser({id:userId});
                const {code, msg, content} = res.data;
                if (code === 0) {
                    console.log(">>>>>>>>>content", content)
                    this.$message.success('删除成功');
                    this.refresh();
                } else if (code == 5001) {
                    this.message.error(msg);
                } else {
                    this.message.error(msg);
                }
            },
            async handleEdit(user){
                this.dialogVisible = true;
                this.form = {...user};
                this.showAlert=false;
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