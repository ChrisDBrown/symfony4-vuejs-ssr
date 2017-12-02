import { createApp } from './app'

const { app, store } = createApp();

store.dispatch('fetchNumber');
print('<script>window.__INITIAL_STATE__ = ' + JSON.stringify(store.state) + ';</script>\n');

renderVueComponentToString(app, (err, res) => {
  print(res);
});

