import Vue from 'vue';
import Vuex from 'vuex';
// import onlinePay from './modules/onlinePay';
// import multiFinance from './modules/multiFinance';
// import convStore from './modules/convStore';
import global from './modules/global.js'

Vue.use(Vuex);

export default new Vuex.Store({
	modules: { // modules must be included in import
		// onlinePay,
		// multiFinance,
		// convStore,
		global,
	},

	state: { // data
		isLoading: false,
	},
	getters: { // computed property
	},
	mutations: { // change data state
		actionLoader(state, value) {
			state.isLoading = value;
		},
	},
	actions: { // methods property
		// make the call
		// call mutations
	},
});
