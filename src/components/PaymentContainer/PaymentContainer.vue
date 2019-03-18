<template src="./index.html"></template>

<script>
import ContainerCreditCard from '@/components/ContainerCreditCard/ContainerCreditCard.vue';
import ContainerGopay from '@/components/ContainerGopay/ContainerGopay.vue';

export default{
	name: 'PaymentContainer',
	data() {
		return {
		}
	},
	props: {

	},
	methods: {
		choosePeriod() {
			this.showModal = false;
		}
	},
	components: {
		ContainerCreditCard,
		ContainerGopay
	},
};
</script>

<style lang="scss" scoped>
	#paymentContainer{

	}
</style>