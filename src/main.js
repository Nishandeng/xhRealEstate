import Vue from 'vue';
import App from './App.vue';
import router from './router';
import ElementUI from 'element-ui';
import VueI18n from 'vue-i18n';
import Api from './api'
import dateUtils from "@/utils/dateUtils"
import viewUtils from "./utils/viewUtils"
import validateUtils from "./utils/validateUtils"


import 'element-ui/lib/theme-chalk/index.css'; // 默认主题
// import './assets/css/theme-green/index.css'; // 浅绿色主题
import './assets/css/icon.css';
import './components/common/directives';
import 'babel-polyfill';
Vue.prototype.$dateUtils = dateUtils
Vue.prototype.$viewUtils = viewUtils
Vue.prototype.$validator = validateUtils


Vue.config.productionTip = false;
Vue.use(VueI18n);
Vue.use(ElementUI, {
  size: 'small'
});
Vue.use(Api)


//使用钩子函数对路由进行权限跳转
router.beforeEach((to, from, next) => {
  // document.title = `${to.meta.title} | vue-manage-system`;
  const role = localStorage.getItem('token');
  if (!role && to.path !== '/login') {
    next('/login');
  } else if (to.meta.permission) {
    next()
  } else {
    // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
    if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
      Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
        confirmButtonText: '确定'
      });
    } else {
      next();
    }
  }
});


// router.beforeEach((to, from, next) => {
//   // document.title = `${to.meta.title} | vue-manage-system`;
//   const role = localStorage.getItem('userToken');
//   if (!role && to.path !== '/login') {
//     next('/login');
//   } else if (to.meta.permission) {
//     next()
//   } else {
//     // 简单的判断IE10及以下不进入富文本编辑器，该组件不兼容
//     if (navigator.userAgent.indexOf('MSIE') > -1 && to.path === '/editor') {
//       Vue.prototype.$alert('vue-quill-editor组件不兼容IE10及以下浏览器，请使用更高版本的浏览器查看', '浏览器不兼容通知', {
//         confirmButtonText: '确定'
//       });
//     } else {
//       next();
//     }
//   }
// });

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
