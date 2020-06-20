<template>
    <el-row :gutter="10">
      <el-col :span="12" >
          <el-row>
              <el-col id="c1"></el-col>
              <el-col class="titleDev">系统数据统计图</el-col>
          </el-row>
      </el-col>
        <el-col :span="12" >
            <el-row>
                <el-col >
                    <el-row >
                        <el-col :span="6" offset="3">
                            <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="query.startTime"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"
                            />
                        </el-col>
                        <el-col :span="1" class="line">-</el-col>
                        <el-col :span="6">
                            <el-date-picker
                                    type="date"
                                    placeholder="选择日期"
                                    v-model="query.endTime"
                                    value-format="yyyy-MM-dd"
                                    style="width: 100%;"
                            />
                        </el-col>
                        <el-col :span="5" offset="3">
                            <el-button type="primary"  icon="el-icon-search" @click="handleSearch">搜索</el-button>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col id="mountNode"></el-col>
                <el-col class="titleDev">最近一周用户操作次数统计图</el-col>
            </el-row>
        </el-col>
    </el-row>
</template>

<script>
    import G2 from '@antv/g2';
    export default {
        name: "spectaculars",
        props:{
            summaryData:{}
        },
        data() {
            return {
                query:{
                   times:1,
                   startTime:this.$dateUtils.format2Date(new Date(new Date()-7*24*3600*1000)) ,
                   endTime:this.$dateUtils.format2Date(new Date())
                },
                basicColumnChartProp: {
                    data:[],
                    container: 'c1',
                    forceFit:true,
                    height: 400
                },
                basicBarChartProp: {
                    container: 'mountNode',
                    forceFit:true,
                    size: { 'height': 400},
                    data:[],
                },
                chart:{},
            }
        },
        methods: {
            test: function () {
                const data = this.basicColumnChartProp.data;
                // Step 1: 创建 Chart 对象
                const chart = new G2.Chart({
                    container: this.basicColumnChartProp.container, // 指定图表容器 ID
                    width: this.basicColumnChartProp.width, // 指定图表宽度
                    height: this.basicColumnChartProp.height // 指定图表高度
                });
                // Step 2: 载入数据源
                chart.source(data);
                // Step 3：创建图形语法，绘制柱状图，由 genre 和 sold 两个属性决定图形位置，genre 映射至 x 轴，sold 映射至 y 轴
                chart.interval().position('genre*sold').color('genre')
                // Step 4: 渲染图表
                chart.render();
            },
            initChart () {
                let data = this.basicBarChartProp.data;
                let chart = new G2.Chart({
                    container: this.basicBarChartProp.container,
                    width: this.basicBarChartProp.size.width,
                    height: this.basicBarChartProp.size.height
                });

                chart.source(data);
                chart.axis('type', {
                    label: {
                        offset: 12
                    }
                });
                chart.coord().transpose();
                chart.interval().position('type*times');
                this.chart = chart;
                chart.render();

            },
            async getReport() {
                let res = await this.$api.getSummaryInfo();
                const {code, msg, content} = res.data;
                if (code === 0) {
                    this.basicColumnChartProp.data=[
                        {genre:"关注人数" , sold: content.joinTotal},
                        {genre:"个人信息填报人数" , sold: content.commitTotal},
                        {genre:"问询人数", sold: content.inquiryTotal},
                        {genre:"补登人数" , sold: content.injectTotal},
                        {genre:"反馈人数" , sold: content.feedbackTotal}
                    ]
                    this.test();
                }else if(code == 5001){
                    this.message.error(msg);
                    this.$router.replace("/login").catch(err=>err);
                }else {
                    this.message.error(msg);
                }
            },
            async getTimesInfo() {
                let res = await this.$api.getTimesInfo({...this.query});
                const {code, msg, content} = res.data;
                if (code === 0) {
                    console.log(">>>>>>>>>cc",content)
                    this.basicBarChartProp.data= [{
                        type: '问询次数',
                        times: content.inquiryTimes
                    }, {
                        type: '补登次数',
                        times: content.injectTimes
                    }, {
                        type: '反馈次数',
                        times:content.feedbackTimes
                    }];
                    this.chart.changeData(this.basicBarChartProp.data);
                }else if(code == 5001){
                    this.message.error(msg);
                    this.$router.replace("/login").catch(err=>err);
                }else {
                    this.message.error(msg);
                }
            },
            // 触发搜索按钮
            handleSearch() {
                this.getTimesInfo();
            },
        },
        created() {
            this.getReport();
            this.getTimesInfo();
        },
        mounted() {
           this.initChart();
        },

        beforeCreate() {
            document.querySelector('body').setAttribute('style', 'background:#000000')
        },
        beforeDestroy() {
            document.querySelector('body').removeAttribute('style')
        }
    }
</script>

<style scoped>
    .g2-guide-html {
        width: 100px;
        height: 80px;
        vertical-align: middle;
        text-align: center;
        line-height: 0.2;
    }

    .g2-guide-html .title {
        font-size: 12px;
        color: #8c8c8c;
        font-weight: 300;
    }

    .g2-guide-html .value {
        font-size: 32px;
        color: #000;
        font-weight: bold;
    }
    .titleDev{
        text-align: center;
        color:#999;
        font-size: 16px;
    }
    .line{
        text-align: center;
    }
</style>