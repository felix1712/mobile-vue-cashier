<template src="./index.html"></template>

<script>
import BaseCustomRadio from '@/components/BaseCustomRadio/BaseCustomRadio.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

export default {
	name: 'ContainerCs',
	data() {
		return {
			cs_choose: null,
			dummyCs: [
				{
					name: 'Alfamart',
					value: 'cs_alfamart',
					logo: ['alfamart-icon'],
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
