<template>
    <div class="content">
        <div>
            <el-alert style="width: 50%;margin: 0 auto;padding:10px" :closable="false"
                      title="注意：请严格按照数据模板进行填写，以免数据导入错误！)"
                      type="error"
                      show-icon>
            </el-alert>

            <a style="color:#FFF" :href="downloadUrl">
                <el-button type="primary" style="width: 50%;margin: 20px 0;padding: 20px 0" size="big" @click="location.href='downloadUrl'">
                    点击下载疫苗库导入模版
                </el-button>
            </a>
        </div>
        <el-upload class="upload" v-loading="uploadLoading"
                   drag
                   ref="upload"
                   :show-file-list="false"
                   :auto-upload="true"
                   :before-upload="beforeUploadHander"
                   :on-success="fileUploadSuccess"
                   :on-error="fileUploadError"
                   :limit="1"
                   :action="formSubmitFileUrl"
                   :headers="code"
                   name="file">
            <div class="tip">点击选择文件或拖入文件导入</div>
        </el-upload>
    </div>
</template>

<script>
    import {END_POINT} from '../../api/paths'

    export default {
        name: "UserList",
        data() {
            return {
                dialogVisible2: false,
                showAlert: false,
                downloadUrl: END_POINT + "/api/excel/download",
                formSubmitFileUrl: END_POINT + "/api/excel/import",//调用后端解析excel的接口,
                code:{code:localStorage.getItem("userToken")},
                uploadLoading: false
            }
        },
        methods: {
            fileUploadSuccess() {
                this.uploadLoading = false;
                this.$message({
                    type: 'success',
                    message: '数据导入成功'
                })
                this.dialogVisible2 = false;
                this.$refs.upload.clearFiles()
                this.refresh();
            },
            //上传失败
            fileUploadError() {
                this.dialogVisible2 = false;
                this.uploadLoading = false;
                this.$refs.upload.clearFiles()
                this.$message({
                    type: 'error',
                    message: '数据导入失败'
                })
            },
            beforeUploadHander(file) {
                let testmsg = file.name.substring(file.name.lastIndexOf('.') + 1)
                const extension = testmsg === 'xls'
                const extension2 = testmsg === 'xlsx'
                if (!extension && !extension2) {
                    this.$message.error('上传的文件只能是xls 或 xlsx 格式!');
                    return false;
                }
                this.uploadLoading = true;
                return true;
            }
        }
    }
</script>

<style scoped>
    .content {
        text-align: center;
    }

    >>> .el-upload--text {
        width: 50%;
        height: 50%;
    }

    >>> .el-upload-dragger {
        border: none;
        width: 100%;
        height: 350px;
    }

    .tip {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>