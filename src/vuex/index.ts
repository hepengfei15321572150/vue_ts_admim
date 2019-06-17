import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state: any = {
    a: '我是a',
    b: '我是b',
    type: {
        typeA: '我是typeA=>666'
    }
}

const getters: any = {}
const mutations: any = {}
const actions: any = {}

export default new Vuex.Store({
    state,
    getters,
    mutations,
    actions
});