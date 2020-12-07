import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import Api from './api'
import Cookies from 'js-cookie'


import {messages} from './components/common/i18n';
import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';

let Base64 = require('js-base64').Base64

Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
    size: 'small'
});
Vue.use(Api)
const i18n = new VueI18n({
    locale: 'zh',
    messages
});

// eslint-disable-next-line no-unused-vars
// Emiter.$on('token-expired', _=>router.currentRoute.name !== 'Login' && router.push('/login'));

//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
    const token = Cookies.get("userToken");
    console.log(">>>>>>>>>cookie-token", token)
    if (token && to.path == '/login') {
        let dotIndex = token.indexOf(".");
        let str1 = token.substring(dotIndex + 1);
        let jwtUser = str1.substring(0, str1.indexOf("."))
        console.log(">>>>>jwtUser:", jwtUser)
        let userToken = Base64.decode(jwtUser);
        console.log(">>>>>已解码token:", userToken)
        if (userToken) {
            let currentUser = JSON.parse(userToken);
            console.log(">>>>>>>currentUser--json:", currentUser);
            localStorage.setItem('ms_username', currentUser.userName);
        }
        next("/dashboard")
    } else {
        next()
    }
});


new Vue({
    router,
    i18n,
    render: h => h(App)
}).$mount('#app');
