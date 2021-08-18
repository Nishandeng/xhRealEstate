<template>
    <div>
        <div class="container">
            <el-row class="searchForm">
                <el-form ref="form" :inline="true" :model="query" label-width="120px">
                    <el-form-item label="关键词搜索">
                        <el-input v-model="query.name" clearable></el-input>
                    </el-form-item>
                </el-form>
            </el-row>
            <el-row style="margin-bottom: 10px">
                <el-col :span="4">
                    <el-button type="primary" class="searchBtn" icon="el-icon-plus" @click="handleAddProject">添加
                    </el-button>
                </el-col>
                <el-col :span="4" style="text-align: right" :offset="16">
                    <el-button type="primary" style="width: 150px" icon="el-icon-search" @click="handleSearch">搜索
                    </el-button>
                </el-col>
            </el-row>
            <el-table :data="tableData" border class="table" ref="multipleTable" header-cell-class-name="table-header">
                <el-table-column prop="name" label="名称" align="center"></el-table-column>
                <el-table-column prop="address" label="地址" align="center"></el-table-column>
                <el-table-column prop="sports" label="支持活动" align="center"></el-table-column>
                <el-table-column prop="lon" label="小区经度" align="center"></el-table-column>
                <el-table-column prop="lat" label="小区纬度" align="center"></el-table-column>
                <el-table-column prop="contactsName" label="联系人姓名" align="center"></el-table-column>
                <el-table-column prop="contactsMobile" label="联系人电话" align="center"></el-table-column>
                <el-table-column prop="seq" label="展示序号" align="center"></el-table-column>
                <el-table-column label="操作" width="200px">
                    <template slot-scope="scope">
                        <el-button type="primary" size="mini" @click="handleEdit(scope.row)">修改</el-button>
                        <el-button type="danger" size="mini" @click="handleDelete(scope.row)">删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
<!--            <div class="pagination">-->
<!--                <el-pagination-->
<!--                        :current-page="currentPage"-->
<!--                        :page-sizes="[10, 20, 30]"-->
<!--                        :page-size="query.pageSize"-->
<!--                        layout="total, prev, pager, next"-->
<!--                        :total=pageTotal>-->
<!--                </el-pagination>-->
<!--            </div>-->
        </div>

        <el-dialog
                :title="title"
                center
                :visible.sync="dialogVisible"
                :before-close="handleClose"
        >
            <el-form ref="form" label-suffix=":" :model="form" label-width="120px">
                <el-form-item label="名称">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
                <el-form-item label="小区经度">
                    <el-input v-model="form.lon"></el-input>
                </el-form-item>
                <el-form-item label="小区纬度">
                    <el-input v-model="form.lat"></el-input>
                </el-form-item>
                <el-form-item label="联系人姓名">
                    <el-input v-model="form.contactsName"></el-input>
                </el-form-item>
                <el-form-item label="联系人电话">
                    <el-input v-model="form.contactsMobile"></el-input>
                </el-form-item>
                <el-form-item label="关联运动">
                    <el-select v-model="form.sports" multiple placeholder="请选择">
                        <el-option
                                v-for="item in options"
                                :key="item.id"
                                :label="item.name"
                                :value="item.id">
                        </el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="展示序号">
                    <el-input-number v-model="form.seq"></el-input-number>
                </el-form-item>


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
                <el-button @click="dialogVisible = false">取 消</el-button>
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
                regionOptions: regionData,
                dialogVisible: false,
                tableData: [],
                query: {
                    // pageNum: 1,
                    // pageSize: 20,
                },
                // currentPage: 1,
                // pageTotal: 0,
                searchForm: {},
                form: {},
                title: '',
                showAlert: false,
                options:[]
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
            handleAddProject() {
                this.dialogVisible = true;
                this.title = '添加小区';
                this.form = {};
                this.showAlert = true;
                this.getSportList();
            },
            async handleSubmit() {
                //todo 调用接口保存
                let submitData = this.form;
                submitData.sports = this.form.sports.toString();
                let res = await this.$api.saveProject({...submitData});
                const {code, msg} = res.data;
                if (code == 0) {
                    this.$message.success("保存成功！");
                    this.dialogVisible = false;
                    this.refresh();
                } else {
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
                let res = await this.$api.projectPageList();
                const {code, msg, content} = res.data;
                if (code === 0) {
                    console.log(">>>>>>>>>content", content)
                    this.tableData = content
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
                }).then(() => {
                    this.doDeleteUser(user.id);
                }).catch(() => {
                });
            },
            handleRadioChange(val) {
                console.log(val)
            },
            async doDeleteUser(userId) {
                let res = await this.$api.deleteProject({id: userId});
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
            async handleEdit(user) {
                this.dialogVisible = true;
                this.title = '修改小区'
                this.form = {...user};
                this.showAlert = false;
            },

            async getSportList() {
                let res = await this.$api.activityPageList();
                const {code, msg, content} = res.data;
                if (code === 0) {
                    console.log(">>>>>>>>>content", content)
                    this.options = content;
                } else if (code == 5001) {
                    this.message.error(msg);
                } else {
                    this.message.error(msg);
                }
            },
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