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
}

