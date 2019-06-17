import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

//登录
import loginPage from '@/web/login';
//活动管理
import activityPage from '@/web/activity';
//404
import Not404 from '@/web/404';

export default new VueRouter({
    routes: [
        ...loginPage,
        ...activityPage,


        ...Not404,
        {
            path: '*', // 页面不存在的情况下会跳到404页面
            redirect: '/404',
        }
    ]
});
