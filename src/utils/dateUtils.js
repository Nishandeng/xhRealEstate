/**时间转换工具类**/
import {questions} from './dataJson'
export default class dateUtils {
    /**
     * 日期格式化
     * @param Number time 时间戳
     * @param String format 格式
     */
    static dateFormat (time, format) {
        let date = time;
        if(time.length == 10){
            date = new Date(parseInt(time) * 1000);
        }else if(time.length == 13){
            date = new Date(parseInt(time));
        }
        const t = new Date(date)
        // 日期格式
        format = format || 'Y-m-d h:i:s'
        let year = t.getFullYear()
        // 由于 getMonth 返回值会比正常月份小 1
        let month = t.getMonth() + 1
        let day = t.getDate()
        let hours = t.getHours()
        let minutes = t.getMinutes()
        let seconds = t.getSeconds()

        const hash = {
            'y': year,
            'm': month,
            'd': day,
            'h': hours,
            'i': minutes,
            's': seconds
        }
        // 是否补 0
        const isAddZero = (o) => {
            return /M|D|H|I|S/.test(o)
        }
        return format.replace(/\w/g, o => {
            let rt = hash[o.toLocaleLowerCase()]
            return rt > 10 || !isAddZero(o) ? rt : `0${rt}`
        })
    }

    /**
     * 中国标准时间转YYYY-MM-DD
     * @param value
     */
    static format2Date(value) {
        let y = value.getFullYear();
        let m = value.getMonth() + 1;
        m = m < 10 ? '0' + m : m;
        let d = value.getDate();
        d = d < 10 ? ('0' + d) : d;
        return y + '-' + m + '-' + d;
    }

    /**
     *
     * @param fk
     * @param res
     * @returns {{label: *, value: *}}
     */
    static formLabel(fk, res) {
        let om = questions.filter(item => {
            return item.fk == fk;
        });
        if (!om || om.length == 0) return {};
        let currentQuestion = om[0];
        let questionTitle = currentQuestion.question;
        console.log(">>>>>>",currentQuestion,questionTitle)
        let optionLabel = '';
        if (currentQuestion.type === 'radio') {
            let option = currentQuestion.options.filter(o => {
                return o.value == res;
            });
            if (!option || option.length == 0) return{};
            optionLabel = option[0].label
        } else if (currentQuestion.type === 'input' || currentQuestion.type === 'text') {
            optionLabel = res;
        }

        return {
            label: questionTitle,
            value: optionLabel
        }
    }
}
