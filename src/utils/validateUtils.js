// 数字
const numberReg = /^\d+$|^\d+[.]?\d+$/
// 中文
const cnReg = /^[\u4e00-\u9fa5]+$/
// 邮箱
const emailReg = /^[A-Za-z\d]+([-_.][A-Za-z\d]+)*@([A-Za-z\d]+[-.])+[A-Za-z\d]{2,4}$/
// 手机号
const phoneReg = /^1[3456789]\d{9}$/
//身份证
const idNoReg= /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/


export default class validateUtils{
    // 数字验证
    static validateNumber (rule, value, callback) {
        if (!numberReg.test(value)) {
            callback(new Error('请输入数字'))
        } else {
            callback()
        }
    }
    // 中文验证
    static validateCn(rule, value, callback) {
        if (!cnReg.test(value)) {
            callback(new Error("请输入中文"));
        }else {
            callback()
        }
    }
    // 邮箱验证
    static validateEmail(rule, value, callback) {
        if (!emailReg.test(value)) {
            callback(new Error('请输入正确的邮箱'))
        } else {
            callback()
        }
    }
    // 电话验证
    static validatePhone(rule, value, callback) {
        if (!phoneReg.test(value)) {
            callback(new Error('请输入正确的手机号码'))
        } else {
            callback()
        }
    }
    // n*70 70取余
    static validateDivide70(rule, value, callback) {
        if (value%70 != 0) {
            callback(new Error('请输入70的倍数'))
        } else {
            callback()
        }
    }

    static validateIdCard(rule, value, callback) {
        if (!idNoReg.test(value)) {
            callback(new Error('请输入正确的身份证号码'))
        } else {
            callback()
        }
    }

}