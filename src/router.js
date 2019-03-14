import Vue from 'vue';
import Router from 'vue-router';
import PageCashier from './views/PageCashier';
import PagePayment from './views/PagePayment';
import PageCreditCard from './views/PageCreditCard';

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
    	path: '/h5/credit-card-list',
    	name: 'CreditCard',
    	component: PageCreditCard,
    },
    {
      path: '/h5/:payment_method',
      name: 'PaymentContainer',
      component: PagePayment,
    },
  ],
});
