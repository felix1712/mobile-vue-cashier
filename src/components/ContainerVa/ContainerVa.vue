<template src="./index.html"></template>

<script>
import BaseCustomRadio from '@/components/BaseCustomRadio/BaseCustomRadio.vue';

export default {
	name: 'ContainerVa',
	data() {
		return {
			va_choose: null,
			dummyVaBank: [
				{
					name: 'Bank Central Asia',
					value: 'va_bca',
					logo: ['bca-icon'],
				},
				{
					name: 'Bank Mandiri Virtual Account',
					value: 'va_mandiri',
					logo: ['mandiri-icon'],
				},
				{
					name: 'Bank Permata Virtual Account',
					value: 'va_permata',
					logo: ['permata-icon'],
				},
				{
					name: 'Bersama Virtual Account',
					value: 'va_bersama',
					logo: ['bersama-icon'],
				}
			]
		};
	},
	components: {
		BaseCustomRadio,
	},
};
</script>