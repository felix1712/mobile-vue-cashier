export default {
	// namespaced: true, // not required yet
	state: {
		dummyPaymentMethod: [
			{
				title: 'Uang Elektronik',
				payCode: 'gopay',
				logo: ['gopay-icon'],
				promo: true,
			}, 
			{
				title: 'Kartu Kredit & Debit',
				payCode: 'cc',
				logo: ['mastercard-color', 'visa-color', 'jcb-color'],
				promo: true,
			},
			{
				title: 'Transfer Virtual Account',
				payCode: 'va',
				logo: ['bca-icon', 'mandiri-icon', 'permata-icon'],
				promo: true,
			},
			{
				title: 'Bank Transfer',
				payCode: 'bt',
				logo: ['bca-icon', 'bni-icon', 'bri-icon'],
				promo: true,
			},
			{
				title: 'Cicilan Tanpa Kartu',
				payCode: 'mf',
				logo: ['kredivo-icon', 'kreditplus-icon', 'al-icon'],
				promo: true,
			},
			{
				title: 'Toko Ritel',
				payCode: 'cs',
				logo: ['alfamart-icon'],
				promo: true,
			},
			{
				title: 'Clickpay',
				payCode: 'cp',
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
