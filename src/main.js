import Vue from 'vue';
// plugins
import { VueResponsiveComponents } from 'vue-responsive-components';
import router from './router';
import store from './store';
import './registerServiceWorker';
import App from './App.vue';
import customJs from '@/mixins/custom';

Vue.config.productionTip = false;
Vue.use(VueResponsiveComponents);

new Vue({
	mixins: [customJs],
	router,
	store,
	render: h => h(App),
}).$mount('#app');
