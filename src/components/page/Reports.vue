<template>
    <div>
        <div class="container">
            <el-row class="searchForm">
                <el-form ref="form" :inline="true" label-width="100px">
                    <el-form-item label="接种次数">
                        <el-select v-model="query.times" placeholder="接种次数" clearable class="handle-select mr10">
                            <el-option key="1" label="第一次" value=1></el-option>
                            <el-option key="2" label="第二次" value=2></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="不良反应">
                        <el-select v-model="query.haveReaction" placeholder="是否有不良反应" clearable
                                   class="handle-select mr10">
                            <el-option key="1" label="否" value=1></el-option>
                            <el-option key="2" label="是" value=2></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="发生时段">
                        <el-select v-model="query.occurPeriod" clearable class="handle-select mr10">
                            <el-option key="1" label="接种后0-30分钟" value=1></el-option>
                            <el-option key="2" label="接种后30分钟-24小时" value=2></el-option>
                            <el-option key="3" label="接种后24小时-48小时" value=3></el-option>
                            <el-option key="4" label="接种后48小时-72小时" value=4></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="接种地点">
                        <el-select
                                v-model="value"
                                filterable
                                clearable
                                remote
                                reserve-keyword
                                placeholder="请输入关键词"
                                :remote-method="remoteMethod"
                                :loading="loading">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item label="接种时段">
                        <el-row>
                            <el-col :span="8">
                                <el-date-picker
                                        type="date"
                                        placeholder="选择日期"
                                        v-model="query.startTime"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"
                                />
                            </el-col>
                            <el-col :span="1" class="line">-</el-col>
                            <el-col :span="8">
                                <el-date-picker
                                        type="date"
                                        placeholder="选择日期"
                                        v-model="query.endTime"
                                        value-format="yyyy-MM-dd"
                                        style="width: 100%;"
                                />
                            </el-col>
                        </el-row>
                    </el-form-item>
                </el-form>
                <el-row>

                </el-row>
                <el-col span="4" style="text-align: right" offset="16">
                    <el-button type="primary" style="width: 150px" icon="el-icon-search" @click="handleSearch">搜索
                    </el-button>
                </el-col>
                <el-col :span="4">
                    <el-link type="primary" href="report/exportFeedback">主要链接</el-link>
                </el-col>
            </el-row>
            <el-table
                    :data="tableData"
                    border
                    class="table"
                    ref="multipleTable"
                    header-cell-class-name="table-header"
                    @selection-change="handleSelectionChange"
            >
                <!--                <el-table-column type="selection" width="55" align="center"></el-table-column>-->
                <el-table-column prop="userName" label="用户姓名" width="90" align="center"></el-table-column>
                <el-table-column prop="userMobile" label="用户电话" width="120"></el-table-column>
                <el-table-column label="出生日期" width="130">
                    <template slot-scope="scope">
                        <span>{{$dateUtils.dateFormat(scope.row.birthday,'Y-m-d')}}</span>
                    </template>
                </el-table-column>
                <el-table-column label="接种日期" width="130">
                    <template slot-scope="scope">
                        <span>{{$dateUtils.dateFormat(scope.row.injectTime,'Y-m-d')}}</span>
                    </template>
                </el-table-column>
                <!--                <el-table-column prop="vaccineTypeName" label="疫苗名称" width="90"></el-table-column>-->
                <el-table-column prop="times" align="center" label="接种次数" width="80"></el-table-column>
                <el-table-column align="center" label="是否不良反应" width="180">
                    <template slot-scope="scope">
                        <el-tag :type="scope.row.haveReaction==2?'danger':'success'">
                            {{scope.row.haveReaction==2?'有不良反应':'无不良反应'}}
                        </el-tag>
                    </template>
                </el-table-column>

                <el-table-column label="提交时间" width="150">
                    <template slot-scope="scope">
                        <span>{{$dateUtils.dateFormat(scope.row.commitTime)}}</span>
                    </template>
                </el-table-column>

                <el-table-column label="不良反应详情">
                    <template slot-scope="scope">
                        <el-button v-if='scope.row.haveReaction==2'
                                   type="text"
                                   icon="el-icon-info"
                                   @click="handleDrawer(scope.$index, scope.row)"
                        > 点击查看
                        </el-button>
                        <el-tag type="success" v-else>用户无不良反应反馈</el-tag>
                    </template>
                </el-table-column>
            </el-table>
            <div class="pagination">
                <el-pagination
                        @size-change="handleSizeChange"
                        @current-change="handleCurrentChange"
                        :current-page="currentPage"
                        :page-sizes="[10, 20, 30]"
                        :page-size="query.pageSize"
                        layout="total, prev, pager, next"
                        :total=pageTotal>
                </el-pagination>
            </div>
        </div>

        <!-- 编辑弹出框 -->
        <el-dialog title="编辑" :visible.sync="editVisible" width="30%">
            <el-form ref="form" :model="form" label-width="70px">
                <el-form-item label="用户名">
                    <el-input v-model="form.name"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="form.address"></el-input>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="editVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveEdit">确 定</el-button>
            </span>
        </el-dialog>

        <el-drawer
                :visible.sync="drawer"
                size="60%"
                :with-header="false">
            <div>
                <div class="titleDev">用户注射反馈报告单</div>
                <div class="drawerBoday">
                    <div class="spanDev" v-for="(index,item) in activeRow" :key="item">
                        <span class="labelDev">{{$dateUtils.formLabel(item,activeRow[item]).label}}</span>
                        <span class="labelDev1">{{$dateUtils.formLabel(item,activeRow[item]).value}}</span>
                    </div>
                </div>
            </div>
        </el-drawer>
    </div>
</template>

<script>
    export default {
        name: 'basetable',
        data() {
            return {
                query: {
                    times: '',
                    startTime: '',
                    endTime: '',
                    occurPeriod: '',
                    haveReaction: '',
                    injectLocation:'', //接种地点
                    pageNum: 1,
                    pageSize: 10,
                },
                drawer: false,
                activeRow: {},
                tableData: [],
                multipleSelection: [],
                delList: [],
                editVisible: false,
                currentPage: 1,
                pageTotal: 0,
                form: {},
                idx: -1,
                id: -1,

                options: [],
                value: [],
                list: [],
                loading: false,
                states: ["Alabama", "Alaska", "Arizona",
                    "Arkansas", "California", "Colorado"],
            }
        },
        mounted() {
            this.getData();
            this.list = this.states.map(item => {
                return { value: `value:${item}`, label: `label:${item}` };
            });
        },
        methods: {
            // 获取 easy-mock 的模拟数据
            async getData() {
                let res = await this.$api.getFeedbackList({...this.query});
                const {code, msg, content} = res.data;
                if (code === 0) {
                    console.log(">>>>>>>>>content", content)
                    this.tableData = content.list;
                    this.pageTotal = content.total;
                } else if (code == 5001) {
                    this.message.error(msg);
                    this.$router.replace("/login").catch(err => err);
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
            handleDelete(index) {
                // 二次确认删除
                this.$confirm('确定要删除吗？', '提示', {
                    type: 'warning'
                })
                    .then(() => {
                        this.$message.success('删除成功');
                        this.tableData.splice(index, 1);
                    })
                    .catch(() => {
                    });
            },
            // 多选操作
            handleSelectionChange(val) {
                this.multipleSelection = val;
            },
            // 编辑操作
            handleEdit(index, row) {
                this.idx = index;
                this.form = row;
                this.editVisible = true;
            },
            // 保存编辑
            saveEdit() {
                this.editVisible = false;
                this.$message.success(`修改第 ${this.idx + 1} 行成功`);
                this.$set(this.tableData, this.idx, this.form);
            },
            handleSizeChange(val) {
                this.query.pageSize = val;
                this.getData();
            },
            handleCurrentChange(val) {
                this.query.pageNum = val;
                this.currentPage = val;
                this.getData();
            },
            handleDrawer(index, scope) {
                this.drawer = true;
                this.activeRow = scope;
            },
            async remoteMethod(query) {
                if (query !== '') {
                    this.loading = true;
                    let res = await this.$api.getInjectLocation(query);
                    const {code, msg, content} = res.data;
                    if (code === 0) {
                        this.loading = true;
                        this.options = content;
                    } else if (code == 5001) {
                        this.loading = true;
                        this.message.error(msg);
                    } else {
                        this.message.error(msg);
                    }
                } else {
                    this.options = [];
                }
            },
            async handleExport(){
                // window.open("", '_blank');
                await this.$api.exportFeedback({...this.query});
            }
        }
    };
</script>

<style scoped>
    .searchForm {
        margin-bottom: 15px;
    }

    .handle-select {
        width: 180px;
    }

    .handle-input {
        width: 300px;
        display: inline-block;
    }

    .table {
        width: 100%;
        font-size: 14px;
    }

    .red {
        color: #ff0000;
    }

    .mr10 {
        margin-right: 10px;
    }

    .table-td-thumb {
        display: block;
        margin: auto;
        width: 40px;
        height: 40px;
    }

    .line {
        text-align: center;
    }

    .searchBtn {
        width: 150px;
        float: right;
        margin-bottom: 20px;
    }

    .drawerBoday {
        padding: 20px 0 30px 0;
        height: 620px;
        overflow-y: scroll;
    }

    .spanDev {
        margin: 15px 30px;
    }

    .titleDev {
        display: flex;
        align-items: center;
        justify-content: center;
        border-bottom: #dddddd dashed;
        padding: 20px 0;
        font-size: 16px;
        font-weight: 600;
    }

    .labelDev {
        font-size: 14px;
    }

    .labelDev1 {
        font-size: 14px;
        color: #999;
    }
</style>
