<template>
    <el-form inline label-width="80px">
        <el-form-item v-for="(index,item) in data" :key="index" :label="renderItemLable.bind(this,item)">{{renderItemValue.bind(this,item)}}
        </el-form-item>
    </el-form>
</template>

<script>
    export default {
        name: "FormItem",
        props: {
            data: {}
        },
        computed:{
            renderItemLable:function(item){
                return item.data
            },
            renderItemValue:function(item){
                return item.data
            }
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
