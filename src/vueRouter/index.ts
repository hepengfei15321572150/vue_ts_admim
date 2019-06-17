import Vue from "vue";
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import loginPage from '@/web/login';

export default new VueRouter({
    routes:[
        ...loginPage
    ]
});
