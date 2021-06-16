<template>
    <div>
        <div class="container">
            <el-row class="searchForm">
                <el-form ref="form" :inline="true"  :model="query" label-width="120px">
                    <el-form-item label="姓名">
                        <el-input v-model="query.name" clearable></el-input>
                    </el-form-item>
                    <el-form-item label="用户类型">
                        <el-select v-model="query.category" clearable placeholder="请选择">
                            <el-option :key=22 label="普通用户" :value=22></el-option>
                            <el-option :key=21 label="普通管理员" :value=21></el-option>
                            <el-option :key=20 label="超级管理员" :value=20></el-option>
                            <el-option :key=30 label="数据管理员" :value=30></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-select v-model="query.sex" clearable placeholder="请选择">
                            <el-option :key=1 label="男" :value=1></el-option>
                            <el-option :key=2 label="女" :value=2></el-option>
                        </el-select>
                    </el-form-item>
                </el-form>
            </el-row>
            <el-row style="margin-bottom: 10px">
                <el-col :span="4">
                    <el-button type="primary" class="searchBtn" icon="el-icon-plus" @click="handleAddUser">添加
                    </el-button>
                </el-col>
                <el-col :span="4" style="text-align: right" :offset="16">
                    <el-button type="primary" style="width: 150px" icon="el-icon-search" @click="handleSearch">搜索
                    </el-button>
                </el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header"
            >
                <el-table-column type="selection" width="55" align="center"></el-table-column>
                <el-table-column prop="name" label="用户姓名"  align="center"></el-table-column>
                <el-table-column prop="account" label="账号"  align="center"></el-table-column>
                <el-table-column prop="mobile" label="手机号" ></el-table-column>
                <el-table-column prop="category" label="用户类型" >
                    <template slot-scope="scope">
                        <span>{{$viewUtils.sexCategory(scope.row.category)}}</span>
                    </template>
                </el-table-column>
                <el-table-column prop="sex" label="性别" >
                    <template slot-scope="scope">
                        <span>{{$viewUtils.sexView(scope.row.sex)}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="操作">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini"  @click="handleEdit(scope.row)">修改</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
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
            <el-alert v-if="showAlert" style="margin:0 auto 20px auto; width: 70%;"
                    type="warning"
                    description="用户默认密码为用户手机号后6位，登录系统后请及时修改密码！"
                    show-icon :closable="false"
            />
            <el-form ref="form" :model="form" label-width="80px" >
                <el-form-item label="姓名">
                    <el-input  v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="账号">
                    <el-input  v-model="form.account"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                    <el-input v-model="form.mobile"></el-input>
                </el-form-item>
                <el-form-item label="用户类型">
                    <el-select  style="width: 100%" v-model="form.category"  placeholder="请选择">
                        <el-option :key=22 label="普通用户" :value=22></el-option>
                        <el-option :key=21 label="普通管理员" :value=21></el-option>
                        <el-option :key=20 label="超级管理员" :value=20></el-option>
                        <el-option :key=30 label="数据管理员" :value=30></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="性别">
                    <el-radio-group v-model="form.sex" @change="handleRadioChange">
                        <el-radio :label=1>男</el-radio>
                        <el-radio :label=2>女</el-radio>
                    </el-radio-group>
                </el-form-item>



<!--                <el-form-item label="出生日期">-->
<!--                    <el-date-picker-->
<!--                            style="width: 100%"-->
<!--                            type="date"-->
<!--                            placeholder="选择日期"-->
<!--                            v-model="form.birthday"-->
<!--                            value-format="yyyy-MM-dd"-->
<!--                    ></el-date-picker>-->
<!--                </el-form-item>-->
<!--                <el-form-item label="常住地址">-->
<!--                    <el-cascader-->
<!--                            style="width: 100%"-->
<!--                            :options="options"-->
<!--                            v-model="form.address"-->
<!--                            @change="handleAddressChange">-->
<!--                    </el-cascader>-->
<!--                </el-form-item>-->
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
                    category:null,
                    name:null,
                    mobile:null,
                    sex:null,
                    account:null
                },
                currentPage: 1,
                pageTotal: 0,
                searchForm:{
                    name:'',
                    mobile:'',
                    category:'',
                    sex: '',
                },
                form: {
                    category:'',
                    name: '',
                    mobile: '',
                    birthday: '',
                    province: '',
                    city: '',
                    district: '',
                    sex: 1,
                    address:'',
                    account:''
                },
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
            handleAddUser() {
                this.$message.info("添加用户")
                this.dialogVisible = true;
                this.title='添加用户';
                this.form={};
                this.showAlert=true;
            },
            async handleSubmit() {
                //todo 调用接口保存
                let res = await this.$api.savePlatUser({...this.form});
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
                let res = await this.$api.platUserPageList({...this.query});
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
                this.title='修改用户'
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