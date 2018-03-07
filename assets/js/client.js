import app from './app';
import router from './router';
import store from './store';

if (window.__INITIAL_STATE__) {
    store.replaceState(window.__INITIAL_STATE__);
}

router.onReady(() => {
    app.$mount('#app');
});
