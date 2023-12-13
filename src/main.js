import Vue from 'vue';
import App from './App.vue';
import VueRouter from 'vue-router';

import HomePage from './pages/home-page.vue';
import NewsPage from './pages/news-page.vue';

Vue.use(VueRouter);

const routes = [
  { path: '/', component: HomePage },
  { path: '/news', component: NewsPage }
  // Add more routes for additional pages as needed
];

const router = new VueRouter({
  mode: 'history', // Use 'history' mode or 'hash' mode for routing
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
