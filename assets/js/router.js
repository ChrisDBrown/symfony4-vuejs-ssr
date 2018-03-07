import Vue from 'vue'
import Router from 'vue-router';

import home from './components/Home';
import fetchNumber from './components/FetchNumber';

Vue.use(Router);

const routes = [
    {path: '/', component: home, name: 'home'},
    {path: '/fetch-number', component: fetchNumber, name: 'fetch-number'},
];

export default new Router({
    mode: 'history',
    routes: routes,
});
