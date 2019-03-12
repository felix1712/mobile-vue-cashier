import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
//plugins
import { VueResponsiveComponents } from "vue-responsive-components"

Vue.config.productionTip = false;
Vue.use(VueResponsiveComponents);

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
