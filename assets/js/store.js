import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
    actions: {
        fetchNumber({commit}) {
            if (typeof window === 'undefined') {
                commit('setNumber', 1234567890);
            } else {
                axios.get('/number').then(number => {
                    commit('setNumber', number.data.number);
                });
            }
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
