import Vue from 'vue';
import Router from 'vue-router';
import PageCashier from './views/PageCashier.vue';
import PagePayment from './views/PagePayment.vue';

Vue.use(Router);

export default new Router({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: [
		{
			path: '/',
			name: 'indexPageCashier',
			component: PageCashier,
		},
		{
			path: '/h5',
			name: 'PageCashier',
			component: PageCashier,
		},
		{
			path: '/h5/:payment_method',
			name: 'PaymentContainer',
			component: PagePayment,
		},
	],
});
