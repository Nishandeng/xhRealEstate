<template>
    <div>
        <div class="tag-warg">
            <el-alert style="width: 360px" :closable="false"
                      title="请严格按照excel模板进行填写，以免数据错误！"
                      type="warning"
                      show-icon>
            </el-alert>
            <el-button>
                <i class="el-icon-download"/>
                <a style="color: #999999" :href="downloadUrl">点击下载模版</a>
            </el-button>
        </div>
        <el-upload
                drag
                ref="upload"
                :auto-upload="true"
                :on-success="fileUploadSuccess"
                :on-error="fileUploadError"
                :disabled="importBtnDisabled"
                :limit="1"
                :action="formSubmitFileUrl"
                name="file"
                accept="application/vnd.ms-excel">
            <span>点击选择文件或拖入文件导入</span>
        </el-upload>
    </div>
</template>

<script>
    import {END_POINT} from '../../api/paths'

    export default {
        name: "Upload",
        data() {
            // 这里存放数据
            return {
                importBtnDisabled: false, // 按钮是否禁用,
                loading: true,
                downloadUrl: "/接种数据模板.xls",//excel模板文件，可以放到OSS中，也可以就放到vue项目中的static目录中，提供给用户下载
                formSubmitFileUrl: END_POINT + "/cert/data/import"//调用后端解析excel的接口
            }
        },
        methods: {
            //上传到服务器,这里是vue中提交表单的写法this.$refs.upload.submit()
            submitUpload() {
                this.importBtnDisabled = true
                this.loading = true
                this.$refs.upload.submit()
            },
            //上传成功
            fileUploadSuccess() {
                this.loading = false
                this.$message({
                    type: 'success',
                    message: '添加课程分类成功'
                })
                //导入成功之后跳转到课程列表界面
                // this.$router.push({ path: '/edu/subject/list' })
            },
            //上传失败
            fileUploadError() {
                this.loading = false
                this.$message({
                    type: 'error',
                    message: '导入文件失败'
                })
            }
        }

    }
</script>

<style scoped>
    >>> .el-upload--text {
        width: 100%;
        height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
    }

    >>> .el-upload-dragger {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .tag-warg {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding-bottom: 15px;
    }
</style>