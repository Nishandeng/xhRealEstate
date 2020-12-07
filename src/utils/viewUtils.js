export default class viewUtils {
    static sexView (val) {
        return val==1?'男':(val==2?'女':'')
    }
    static sexCategory (val) {
        if(val==22) {return "普通用户"}
        else if(val==21) {return "普通管理员"}
        else if(val==20) {return "超级管理员"}
        else{
            return ''
        }
    }

    static certDataStatus (val) {
        if(val==0) {return "已提交"}
        else if(val==1) {return "已开始"}
        else if(val==2) {return "已结束"}
        else{
            return ''
        }
    }

    static certApplyDataStatus (val) {
        if(val==0) {return "待审查"}
        else if(val==1) {return "待生成"}
        else if(val==2) {return "已完成"}
        else{
            return ''
        }
    }
}

