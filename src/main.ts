// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App.vue';

//初始化样式
import './assets/reset.css';

//ajax
import Http from './http/http';
Vue.prototype.$axios = new Http({
    baseURL:'/page/api',
    timeout:2000
});
Vue.prototype.$axios.addHeader({
    token: '123',
    token2: '456'
});

//log
Vue.prototype.$log = function( str ){
    console.log( str );
};

//使用elementUi
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

//路由和vuex
import router from './vueRouter/index';
import store from './vuex';

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    store,
    components: { App },
    template: '<App/>'
});
