import Axios from 'axios';
import Emiter from '../emiter'
import {END_POINT, POST, GET, APIS} from './paths';
import router from '../router';
import {Message} from "element-ui";

const fns = {};

const axios = Axios.create({
    baseURL: END_POINT,
    timeout: 15000 * 10,
    // headers: {
    //     common: {
    //         "Access_token": localStorage.getItem('userToken') //token
    //     }
    // }
});

//请求拦截器
axios.interceptors.request.use(
    config => {
        if (localStorage.getItem("userToken") != null) {
            config.headers["Access_token"] = localStorage.getItem("userToken");
        }

        return config;
    },
    err => Promise.reject(err)
);

async function _fetch(data, options) {
    let [p, m] = this;
    options = Object.assign({}, options || {}, {method: m, url: p});
    if (m === GET) {
        options.params = data;
    } else if (m === POST) {
        options.data = data;
    }
    let r = await axios.request(options);
    if (r.data.code === 10000) {
        Emiter.$emit('token-expired');
    }
    return r;
}

Object.keys(APIS).forEach(k => fns[k] = _fetch.bind(APIS[k]));



//响应拦截器
axios.interceptors.response.use(
    response => {
        console.log(response)
        if (response.data.code == 5007 || response.data.msg == 'Token过期') {
            Message.error("创建会话失败或会话过期,请登录重试！")
            router.replace("/login").catch(err => err);
        }
        return response;
    },
    error => {
        if (error == "Error: Network Error") {
            Message.error("网络错误，请稍后重试！")
            router.replace("/login").catch(err => err);
        } else {
            console.error(Promise.reject(error))
            return Promise.reject(error)
        }
    }
)

export default fns;
