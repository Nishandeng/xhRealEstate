import Axios from 'axios';
import Emiter from '../emiter'
import {END_POINT, POST, GET, APIS} from './paths';

const fns = {};

const TOKEN_NAME = 'Fy-Access-Token';

const axios = Axios.create({
    baseURL: END_POINT,
    timeout: 15000 * 10,
    //headers:
});

//axios.defaults.baseURL = 'https://api.example.com';
//axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
//axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

//更新token
fns.updateToken = function (token) {
    if (!token) {
        delete axios.defaults.headers.common[TOKEN_NAME];
    } else {
        axios.defaults.headers.common[TOKEN_NAME] = token;
    }
};

fns.updateToken(localStorage.getItem('sstoken'));


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

export default fns;
