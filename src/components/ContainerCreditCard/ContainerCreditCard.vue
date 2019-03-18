<template src="./index.html"></template>

<script>
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
import BaseCustomRadio from '@/components/BaseCustomRadio/BaseCustomRadio.vue';
import BaseModal from '@/components/BaseModal/BaseModal.vue';

export default{
	name: 'ContainerCreditCard',
	data() {
		return {
			cardNoModel: null,
			holderNameModel: null,
			cvvModel: null,
			expiredDateModel: null,
			showModal: false,
			periodsModel: null,
			dummyPeriods: [
				{
					id: 1,
					periodName: 'Full Payment',
					periodPrice: 150000,
					disabled: false,
				},
				{
					id: 2,
					periodName: '3',
					periodPrice: 50000,
					disabled: false,
				},
				{
					id: 3,
					periodName: '6',
					periodPrice: 25000,
					disabled: true,
				},
				{
					id: 4,
					periodName: '12',
					periodPrice: 12500,
					disabled: false,
				},
				{
					id: 5,
					periodName: '18',
					periodPrice: 8400,
					disabled: false,
				},
				{
					id: 6,
					periodName: '24',
					periodPrice: 6250,
					disabled: true,
				},
			],
			periods: null,
		};
	},
	props: {

	},
	methods: {
		changeFormat(event) {
			this.$root.formatDate(event);
		},
		showPeriodModal() {
			this.showModal = true;
		},

		choosePeriod() {
			this.periodsModel = this.periods;
			this.showModal = false;
		}
	},
	components: {
		BaseFormGroup,
		BaseModal,
		BaseCustomRadio,
	}
};
</script>
