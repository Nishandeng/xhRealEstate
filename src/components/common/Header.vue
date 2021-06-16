<template>
    <div>
        <div class="header">
            <!-- 折叠按钮 -->
            <div class="collapse-btn" @click="collapseChage">
                <i v-if="!collapse" class="el-icon-s-fold"></i>
                <i v-else class="el-icon-s-unfold"></i>
            </div>
            <div class="logo">益苗荟后台管理系统</div>
            <div class="header-right">
                <div class="header-user-con">
                    <!-- 全屏显示 -->
                    <div class="btn-fullscreen" @click="handleFullScreen">
                        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
                            <i class="el-icon-rank"></i>
                        </el-tooltip>
                    </div>
                    <!-- 消息中心 -->
                    <div class="btn-bell">
                        <el-tooltip
                                effect="dark"
                                :content="message?`有${message}条未读消息`:`消息中心`"
                                placement="bottom"
                        >
                            <router-link to="/tabs">
                                <i class="el-icon-bell"></i>
                            </router-link>
                        </el-tooltip>
                        <span class="btn-bell-badge" v-if="message"></span>
                    </div>
                    <!-- 用户头像 -->
                    <div class="user-avator">
                        <img src="../../assets/img/head.jpg" />
                    </div>
                    <!-- 用户名下拉菜单 -->
                    <el-dropdown class="user-name" trigger="click" @command="handleCommand">
                    <span class="el-dropdown-link">
                        {{username}}
                        <i class="el-icon-caret-bottom"></i>
                    </span>
                        <el-dropdown-menu slot="dropdown">
                            <el-dropdown-item divided command="infomanage">修改密码</el-dropdown-item>
                            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
                        </el-dropdown-menu>
                    </el-dropdown>
                </div>
            </div>
        </div>
        <el-dialog
                title="修改密码"
                center
                :visible.sync="dialogVisible"
                width="40%"
        >
            <el-form ref="form" :model="form" label-width="80px" >
                <el-form-item  required label="原密码">
                    <el-input
                            type="password"
                            placeholder="password"
                            v-model="form.oldPassword"
                    />
                </el-form-item>
                <el-form-item required label="新密码">
                    <el-input
                            type="password"
                            placeholder="password"
                            v-model="form.newPassword"
                    />
                </el-form-item>
                <el-form-item required label="确认密码">
                    <el-input
                            type="password"
                            placeholder="password"
                            v-model="surePassword"
                    />
                </el-form-item>

            </el-form>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="handleSubmit">保 存</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<script>
import bus from '../common/bus';
import {regionData} from 'element-china-area-data'
import md5 from "js-md5"
export default {
    data() {
        return {
            collapse: true,
            fullscreen: false,
            name: 'admin',
            message: 2,
            dialogVisible:false,
            options:regionData,
            form:{
                oldPassword:'',
                newPassword:""
            },
            surePassword:''
        };
    },
    computed: {
        username() {
            let username = localStorage.getItem('ms_username');
            return username ? username : this.name;
        }
    },
    methods: {
        // 用户名下拉菜单选择事件
        handleCommand(command) {
            if (command == 'loginout') {
                localStorage.removeItem('ms_username');
                localStorage.removeItem('sstoken');
                localStorage.removeItem('userToken');
                localStorage.removeItem('user_cate');
                this.$router.push('/login');
            }else if(command == 'infomanage'){
                this.dialogVisible=true
            }
        },
        // 侧边栏折叠
        collapseChage() {
            this.collapse = !this.collapse;
            bus.$emit('collapse', this.collapse);
        },
        // 全屏事件
        handleFullScreen() {
            let element = document.documentElement;
            if (this.fullscreen) {
                if (document.exitFullscreen) {
                    document.exitFullscreen();
                } else if (document.webkitCancelFullScreen) {
                    document.webkitCancelFullScreen();
                } else if (document.mozCancelFullScreen) {
                    document.mozCancelFullScreen();
                } else if (document.msExitFullscreen) {
                    document.msExitFullscreen();
                }
            } else {
                if (element.requestFullscreen) {
                    element.requestFullscreen();
                } else if (element.webkitRequestFullScreen) {
                    element.webkitRequestFullScreen();
                } else if (element.mozRequestFullScreen) {
                    element.mozRequestFullScreen();
                } else if (element.msRequestFullscreen) {
                    // IE11
                    element.msRequestFullscreen();
                }
            }
            this.fullscreen = !this.fullscreen;
        },

        async handleSubmit() {
            if(!this.form.oldPassword){
                this.$message.error('原密码不能为空！')
                return;
            }
            if(!this.form.newPassword){
                this.$message.error('新密码不能为空！')
                return;
            }
            if(!this.surePassword){
                this.$message.error('确认密码不能为空！')
                return;
            }
            if(this.surePassword !=this.form.newPassword ){
                this.$message.error('确认密码与新密码不一致！')
                return;
            }


            let oldPwd = String(md5(this.form.oldPassword)).toLocaleUpperCase();
            let newPwd = String(md5(this.form.newPassword)).toLocaleUpperCase();

            let res = await this.$api.changePassword({
                oldPassword:oldPwd,
                newPassword:newPwd
            });
            const {code, msg} = res.data;
            console.log(">>>>>>>",res)
            if (code == 0) {
                this.$message.success("密码修改成功，请重新登录！");
                this.dialogVisible = false;
                localStorage.removeItem('ms_username');
                localStorage.removeItem('sstoken');
                this.$router.replace('/login').catch(err=>err);
            }else{
                this.dialogVisible = false;
                this.$message.error(msg);
            }
        },
        handleClose() {
            this.dialogVisible = false
        },

    },
    mounted() {
        if (document.body.clientWidth < 1500) {
            this.collapseChage();
        }
    }
};
</script>
<style scoped>
.header {
    position: relative;
    box-sizing: border-box;
    width: 100%;
    height: 70px;
    font-size: 22px;
    color: #fff;
}
.collapse-btn {
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 70px;
}
.header .logo {
    float: left;
    width: 250px;
    line-height: 70px;
}
.header-right {
    float: right;
    padding-right: 50px;
}
.header-user-con {
    display: flex;
    height: 70px;
    align-items: center;
}
.btn-fullscreen {
    transform: rotate(45deg);
    margin-right: 5px;
    font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
    position: relative;
    width: 30px;
    height: 30px;
    text-align: center;
    border-radius: 15px;
    cursor: pointer;
}
.btn-bell-badge {
    position: absolute;
    right: 0;
    top: -2px;
    width: 8px;
    height: 8px;
    border-radius: 4px;
    background: #f56c6c;
    color: #fff;
}
.btn-bell .el-icon-bell {
    color: #fff;
}
.user-name {
    margin-left: 10px;
}
.user-avator {
    margin-left: 20px;
}
.user-avator img {
    display: block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
}
.el-dropdown-link {
    color: #fff;
    cursor: pointer;
}
.el-dropdown-menu__item {
    text-align: center;
}
</style>
