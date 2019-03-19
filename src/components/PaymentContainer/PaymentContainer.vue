<template src="./index.html"></template>

<script>
import ContainerCreditCard from '@/components/ContainerCreditCard/ContainerCreditCard.vue';
import ContainerGopay from '@/components/ContainerGopay/ContainerGopay.vue';
import ContainerVa from '@/components/ContainerVa/ContainerVa.vue';
import ContainerBt from '@/components/ContainerBt/ContainerBt.vue';

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
		ContainerGopay,
		ContainerVa,
		ContainerBt,
	},
	mounted() {
		console.log(this.$route.params);
	},
	computed: {
		labelTitle() {
			return this.$route.params.method_label
		}
	}
};
</script>

<style lang="scss" scoped>
	#paymentContainer{

	}
</style>