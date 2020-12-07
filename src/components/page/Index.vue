<template>
   <el-row>
<!--       <el-col>-->
<!--           <el-card header="用户基本信息">-->
<!--                <div v-for="(v,k) in userInfo" :key="k">{{k}}：{{v}}</div>-->
<!--           </el-card>-->
<!--       </el-col>-->
       <el-col>
           <el-card header="测试api列表">
               <div class="content">
                   <el-card header="接口1" style="width: 100%;margin-right: 10px">
                       <el-button @click="handleApi1()">点击测试</el-button>
                       <div class="divContent">
                           响应体：{{api1Data}}
                       </div>
                   </el-card>
                   <el-card header="接口2" style="width: 100%;margin-left: 10px">
                       <el-button @click="handleApi2()">点击测试</el-button>
                       <div class="divContent">
                           响应体：{{api2Data}}
                       </div>
                   </el-card>
               </div>
           </el-card>
           <el-card header="流量测试">
               <div class="content">
                   <el-card header="接口3" style="width: 100%;margin-right: 10px">
                       <span>
                           下载数量：
                           <el-input-number v-model="num" @change="handleChange" :min="1" :max="9999999999" ></el-input-number>
                       </span>
                       <el-button @click="handleApi3()" style="margin-left: 30px">点击测试</el-button>
<!--                       <div class="divContent">-->
<!--                           <img :src="filePath">-->
<!--                       </div>-->
                   </el-card>
               </div>
           </el-card>
       </el-col>
   </el-row>
</template>

<script>
    export default {
        name: "Index",
        data(){
          return {
              api1Data:{},
              api2Data:{},
              filePath:'',
              num:1000,
          }
        },
        computed: {
            // userInfo() {
            //     let userInfo = localStorage.getItem('userInfo');
            //     console.log(">>>>>>>>",JSON.parse(userInfo))
            //     return userInfo ? JSON.parse(userInfo) : {};
            // }
        },

        created() {

        }
        ,methods:{
           async handleApi1(){
                let res = await this.$api.api1();
                const {code,content,type}=res.data;
                console.log("返回结果：",code,content)
                if(code===0){
                    this.api1Data=res.data;
                    this.$notify.error({
                        duration:8000,
                        title: "阻断类型",
                        message: "好的时光都是个高大上的"
                    });
                    this.$message.success(content)
                }else{
                    this.$notify.error({
                        duration:8000,
                        title: "阻断类型",
                        message: "好的时光都是个高大上的"
                    });
                    // this.$message.error(content)
                }
            },
            async handleApi2(){
                let res = await this.$api.api2();
                const {code,content,type}=res.data;
                console.log("返回结果：",code,content)
                if(code===0){
                    this.api2Data=res.data;
                    this.$message.success(content)
                }else{
                    this.$notify.error({
                        duration:8000,
                        title: type,
                        message: content
                    });
                    // this.$message.error(content)
                }
            },
            async handleApi3(){
                let res = await this.$api.api3({num:this.num});
                const {code,content,type}=res.data;
                console.log("返回结果：",code,content)
                if(code===0){

                    const blob = new Blob([content]);
                    const a = document.createElement("a");
                    const url = window.URL.createObjectURL(blob);
                    this.filePath = "http://localhost:8808?"+url;
                    const filename = name;
                    a.href = url;
                    a.target = "_blank";
                    a.download = filename;// 从response header里面取
                    a.click();
                    window.URL.revokeObjectURL(url);
                }else{
                    this.$notify.error({
                        duration:8000,
                        title: type,
                        message: content
                    });
                }
            },
            handleChange(){

            }
        }
    }
</script>

<style scoped>
.content{
    display: flex;
    height: 240px;
    width: 100%;
}
    .divContent{
        font-size: 13px;
        color: #666666;
        margin: 10px;
    }
</style>