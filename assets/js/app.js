import App from './components/App.vue';
import Vue from 'vue';
import { createStore } from './store';

export function createApp() {
  const store = createStore();
  const app = new Vue({
    render: h => h(App),
    store
  });

  return { app, store }
}