<template src="./index.html"></template>

<script>
import BaseCustomRadio from '@/components/BaseCustomRadio/BaseCustomRadio.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

export default{
	name: 'ContainerBt',
	data() {
		return {
			bt_choose: null,
			dummyBtBank: [
				{
					name: 'Bank Central Asia',
					value: 'bt_bca',
					logo: ['bca-icon'],
				},
				{
					name: 'Bank Negara Indonesia',
					value: 'bt_bni',
					logo: ['bni-icon'],
				},
				{
					name: 'Bank Rakyat Indonesia',
					value: 'bt_bri',
					logo: ['bri-icon'],
				},
				{
					name: 'Bank Cimb Niaga',
					value: 'bt_cimb',
					logo: ['cimb-icon'],
				},
				{
					name: 'Bank Danamon',
					value: 'bt_danamon',
					logo: ['danamon-icon'],
				},
				{
					name: 'Bank Mandiri',
					value: 'bt_mandiri',
					logo: ['mandiri-icon'],
				},
				{
					name: 'Bank Permata',
					value: 'bt_permata',
					logo: ['permata-icon'],
				},
			]
		};
	},
	components: {
		BaseCustomRadio,
		BaseFormGroup,
	},
};
</script>