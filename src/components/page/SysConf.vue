<template>
    <div class="content">
        <el-form ref="form" style="width: 60%;margin: 0 auto" :model="form" label-width="120px">
            <el-form-item label="根路径">
                <el-input class="in" v-model="form.rootUrl"></el-input>
            </el-form-item>
            <el-form-item label="主页URI">
                <el-input class="in" v-model="form.homeUri"></el-input>
            </el-form-item>
            <el-form-item label="主页背景图">
<!--                <el-upload-->
<!--                        class="avatar-uploader"-->
<!--                        action="https://jsonplaceholder.typicode.com/posts/"-->
<!--                        :show-file-list="false"-->
<!--                        :on-success="handleAvatarSuccess"-->
<!--                        :before-upload="beforeAvatarUpload">-->
<!--                    <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--                </el-upload>-->

                <el-input class="in" v-model="form.homeBgImgPath"></el-input>
            </el-form-item>
            <el-form-item label="主页海报URI">
                <el-input class="in" v-model="form.homePosterUri"></el-input>
            </el-form-item>
            <el-form-item label="报名页URI">
                <el-input class="in" v-model="form.signUpUri"></el-input>
            </el-form-item>
            <el-form-item label="报名页背景图">
                                <el-input v-model="form.signUpBgImg"></el-input>
<!--                <el-upload-->
<!--                        class="avatar-uploader"-->
<!--                        action="https://jsonplaceholder.typicode.com/posts/"-->
<!--                        :show-file-list="false"-->
<!--                        :on-success="handleAvatarSuccess"-->
<!--                        :before-upload="beforeAvatarUpload">-->
<!--                    <img v-if="imageUrl" :src="imageUrl" class="avatar">-->
<!--                    <i v-else class="el-icon-plus avatar-uploader-icon"></i>-->
<!--                </el-upload>-->
<!--                <el-input class="in" v-model="form.signUpUri"></el-input>-->
            </el-form-item>
        </el-form>
        <div class="footer">
            <el-button class="btn" type="primary" @click="handleSubmit">保 存</el-button>
        </div>
    </div>

</template>

<script>
    export default {
        name: "sysConf",
        data() {
            return {
                form: {},
                imageUrl: '',
                sysConf: {}
            }
        },
        mounted() {
            this.getData();
        },
        methods: {
            async getData() {
                let res = await this.$api.getSysConf();
                const {code, msg, content} = res.data;
                console.log(">>>>>>>>>", code, msg, content)
                if (code === 0) {
                    this.form = content ? content : {};
                } else if (code == 5001) {
                    this.message.error(msg);
                } else {
                    this.message.error(msg);
                }
            },
            async handleSubmit() {
                let res = await this.$api.saveSysConf({...this.form});
                const {code, msg, content} = res.data;
                if (code === 0) {
                    this.message.success(content);
                } else {
                    this.message.error(msg);
                }
                this.getData();
            },
            handleAvatarSuccess(res, file) {
                this.imageUrl = URL.createObjectURL(file.raw);
            },
            beforeAvatarUpload(file) {
                const isJPG = file.type === 'image/jpeg';
                const isLt2M = file.size / 1024 / 1024 < 2;

                if (!isJPG) {
                    this.$message.error('上传头像图片只能是 JPG 格式!');
                }
                if (!isLt2M) {
                    this.$message.error('上传头像图片大小不能超过 2MB!');
                }
                return isJPG && isLt2M;
            }
        }
    }
</script>

<style scoped>
    .content {
        margin: 0 auto;
    }

    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }

    .avatar-uploader .el-upload:hover {
        border-color: #409EFF;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        line-height: 178px;
        text-align: center;
    }

    .avatar {
        width: 178px;
        height: 178px;
        display: block;
    }

    .in {
        width: 360px;
    }

    .footer {
        display: flex;
        justify-content: center;
    }

    .btn {
        width: 120px;
    }
</style>