import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

const state = {
    number: null
};

export default new Vuex.Store({
    state,
    actions: {
        fetchNumber({commit}) {
            axios.get('/number').then(number => {
                commit('setNumber', number.data.number);
            });
        }
    },
    mutations: {
        setNumber(state, number) {
            state.number = number;
        }
    },
    getters: {
        number: state => {
            return state.number;
        }
    }
});
