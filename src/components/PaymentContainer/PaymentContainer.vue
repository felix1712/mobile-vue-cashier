<template src="./index.html"></template>

<script>
import ContainerCreditCard from '@/components/ContainerCreditCard/ContainerCreditCard.vue';

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
	},
};
</script>

<style lang="scss" scoped>
	#paymentContainer{

	}
</style>