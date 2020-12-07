<template>
    <div>
        <div class="crumbs">
            <el-breadcrumb separator="/">
                <el-breadcrumb-item>
                    <i class="el-icon-lx-calendar"></i> 用户管理
                </el-breadcrumb-item>
                <el-breadcrumb-item>添加用户</el-breadcrumb-item>
            </el-breadcrumb>
        </div>
        <div class="container">
            <div class="form-box">
                <el-form ref="form" :model="form" label-width="80px">
                    <el-form-item label="用户类型">
                        <el-select v-model="form.category" placeholder="请选择">
                            <el-option key="bbk" label="步步高" value="bbk"></el-option>
                            <el-option key="xtc" label="小天才" value="xtc"></el-option>
                            <el-option key="imoo" label="imoo" value="imoo"></el-option>
                        </el-select>
                    </el-form-item>

                    <el-form-item label="姓名">
                        <el-input v-model="form.name"></el-input>
                    </el-form-item>
                    <el-form-item label="手机号">
                        <el-input v-model="form.mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="性别">
                        <el-radio-group v-model="form.sex">
                            <el-radio label="男" value="1"></el-radio>
                            <el-radio label="女" value="2"></el-radio>
                        </el-radio-group>
                    </el-form-item>
                    <el-form-item label="出生日期">
                        <el-date-picker
                                type="date"
                                placeholder="选择日期"
                                v-model="form.birthday"
                                value-format="yyyy-MM-dd"
                                style="width: 100%;"
                        ></el-date-picker>
                    </el-form-item>
                    <el-form-item label="地址选择">
                        <el-cascader
                                size="large"
                                :options="options"
                                v-model="form.address"
                                @change="handleAddressChange">
                        </el-cascader>
                    </el-form-item>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
    import {regionData} from 'element-china-area-data'
    export default {
        name: 'userAdd',
        data() {
            return {
                options:regionData,
                form: {
                    name: '',
                    mobile: '',
                    birthday: '',
                    province: '',
                    city: '',
                    district: '',
                    sex: '',
                    address:[]
                }
            };
        },
        methods: {
            handleAddressChange(value){
                console.log(value)
            },
            onSubmit() {
                this.$message.success('提交成功！');
            }
        }
    };
</script>