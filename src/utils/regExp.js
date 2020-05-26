module.exports = {
    NULL: {
        regex: "^S{3,}$",
        msg: "问卷答案不能为空！"
    },
    NUM: {
        regex: "^[0-9]*$",
        msg: "请填入正确的数字！"
    },
    ZH: {
        regex: '^[\u4e00-\u9fa5]{0,}$',
        msg: '必须为汉字！'
    },
    MOBILE: {
        regex: '^1[3456789]\\d{9}$',
        msg: '请输入正确的手机号码！'
    },
    EMAIL: {
        regex: '^(\\w-*\\.*)+@(\\w-?)+(\\.\\w{2,})+$',
        msg: '邮箱格式不正确！'
    },

    TEMPERATURE:{
        regex:'^(3\\d|4[0-5])(\\.\\d)?$',
        msg: '请填写正确的体温！'
    }

}