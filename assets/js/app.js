import App from './components/App.vue';
import Vue from 'vue';
import router from './router'
import store from './store';

export default new Vue({
    router,
    store,
    render: h => h(App)
});
