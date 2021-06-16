import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: {title: '自述文件'},
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: {title: '系统首页',permission: true}
                },

                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Reports.vue'),
                    meta: {title: '数据报表',permission: true}
                },
                {
                    path: '/tabs',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/Tabs.vue'),
                    meta: {title: 'tab选项卡',permission: true}
                },
                {
                    path: '/userList',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/user/UserList.vue'),
                    meta: {title: '用户管理',permission: true}
                },
                {
                    path: '/userAdd',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/user/UserAdd.vue'),
                    meta: {title: '添加用户',permission: true}
                },
                {
                    path: '/userInfo',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/user/UserInfo.vue'),
                    meta: {title: '个人信息管理',permission: true}
                },
                {
                    path: '/injectData',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/InjectData.vue'),
                    meta: {title: '接种数据',permission: true}
                },

                {
                    path: '/vaccineManage',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/vaccineManage.vue'),
                    meta: {title: '疫苗库管理',permission: true}
                },



                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: {title: '自定义图标'}
                },
                {
                    // vue-schart组件
                    path: '/g2',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/G2Charts.vue'),
                    meta: {title: 'g2图表',permission: true}
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: {title: '国际化',permission: true}
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: {title: '权限测试', permission: true}
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: {title: '404'}
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: {title: '403'}
                }]
        },
        {
            path: '/login',
            name: 'Login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: {title: '登录'}
        },
        {
            path: '*',
            redirect: '/404'
        }
    ]
});
