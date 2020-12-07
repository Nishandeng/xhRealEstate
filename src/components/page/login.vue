<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title" style="display: flex;align-items: center;justify-content: center">
                <div class="user-avator">
                    <img src="../../assets/img/logo.png" />
                </div>
                <div >公安测试系统</div>
            </div>

            <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="username">
                    <el-input v-model="param.account" >
                        <el-button slot="prepend" icon="el-icon-user"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                            type="password"
                            v-model="param.password"
                            @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-lock"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()" :loading="loading">登录</el-button>
                </div>
            </el-form>
        </div>
    </div>
</template>

<script>
    // import md5 from "js-md5"
    // import fns from "../../api/fns";

    export default {
        data: function () {
            return {
                loading:false,
                param: {
                    account: '',
                    password: '',
                },
                rules: {
                    account: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    password: [{required: true, message: '请输入密码', trigger: 'blur'}],
                },
            };
        },
        methods: {
            async submitForm() {
                // this.loading=true;
                // let res = await this.$api.login(
                //     {
                //         companyUUid:'123456',
                //         accountNumber: this.param.account,
                //         pwd: this.param.password,
                //     }
                // );
                // const {return_code, return_msg, loginInfo,token} = res.data;
                // console.log(return_code, return_msg, loginInfo,token)
                // if (return_code == 0) {
                //     this.loading=false;
                //     localStorage.setItem('ms_username', loginInfo.userId);
                //     localStorage.setItem('userInfo', JSON.stringify(loginInfo));
                //     localStorage.setItem("sstoken",token)
                //     fns.updateToken(token)
                //     this.$router.replace('/').catch(err=>err);
                // }else{
                //     this.$message.success(return_msg);
                //     this.loading=false;
                // }

                this.$refs.login.validate(valid => {
                    if (valid) {
                        this.$message.success('登录成功');
                        localStorage.setItem('ms_username', this.param.account);
                        this.$router.push('/dashboard');
                    } else {
                        this.$message.error('请输入账号和密码');
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
        },
    };
</script>

<style scoped>
    .login-wrap {
        position: relative;
        width: 100%;
        height: 100%;
        /*background-image: url(../../assets/img/login-bg.png);*/
        background-size: 100%;
    }

    .ms-title {
        width: 100%;
        line-height: 50px;
        text-align: center;
        font-size: 20px;
        /*color: #fff;*/
        color: #324157;
        border-bottom: 1px solid #ddd;
    }

    .ms-login {
        position: absolute;
        left: 50%;
        top: 50%;
        width: 350px;
        margin: -190px 0 0 -175px;
        border-radius: 5px;
        background: rgba(255, 255, 255, 1);
        overflow: hidden;
    }

    .ms-content {
        padding: 30px 30px;
    }

    .login-btn {
        text-align: center;
    }

    .login-btn button {
        width: 100%;
        height: 36px;
        margin-bottom: 10px;
    }
    .user-avator {
        /*margin-left: 20px;*/
    }
    .user-avator img {
        display: block;
        padding-bottom: 5px;
        width: 40px;
        height: 35px;
        border-radius: 50%;
    }
</style>