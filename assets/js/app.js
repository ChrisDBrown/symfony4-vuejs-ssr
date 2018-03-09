import App from './components/App.vue';
import Vue from 'vue';
import router from './router'
import store from './store';

Vue.mixin({
    beforeMount() {
        const {asyncData} = this.$options;
        if (asyncData) {
            this.dataPromise = asyncData({
                store: this.$store,
                route: this.$route
            })
        }
    }
});

export default new Vue({
    router,
    store,
    render: h => h(App)
});
