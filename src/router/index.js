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
                    meta: {title: '系统首页', permission: true}
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/Reports.vue'),
                    meta: {title: '数据报表', permission: true}
                },
                //用户
                {
                    path: '/userList',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/user/UserList.vue'),
                    meta: {title: '用户管理', permission: true}
                },
                //项目
                {
                    path: '/projectList',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/project/ProjectList.vue'),
                    meta: {title: '项目管理', permission: true}
                },

                //活动
                {
                    path: '/activityList',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/activity/ActivityList.vue'),
                    meta: {title: '活动管理', permission: true}
                },

                {
                    // vue-schart组件
                    path: '/g2',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/G2Charts.vue'),
                    meta: {title: 'g2图表', permission: true}
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
