export default {
	// namespaced: true, // not required yet
	state: {
		dummyPaymentMethod: [
			{
				title: 'Uang Elektronik',
				logo: ['gopay-icon'],
				promo: true,
			}, 
			{
				title: 'Kartu Kredit & Debit',
				logo: ['mastercard-color', 'visa-color', 'jcb-color'],
				promo: true,
			},
			{
				title: 'Transfer Virtual Account',
				logo: ['bca-icon', 'mandiri-icon', 'permata-icon'],
				promo: true,
			},
			{
				title: 'Bank Transfer',
				logo: ['bca-icon', 'bni-icon', 'bri-icon'],
				promo: true,
			},
			{
				title: 'Cicilan Tanpa Kartu',
				logo: ['kredivo-icon', 'kreditplus-icon', 'al-icon'],
				promo: true,
			},
			{
				title: 'Toko Ritel',
				logo: ['alfamart-icon'],
				promo: true,
			},
			{
				title: 'Clickpay',
				logo: ['mandiri-icon'],
				promo: true,
			},
		],
	},
	getters: {
	},
	mutations: {
	},
	actions: {
	},
};
