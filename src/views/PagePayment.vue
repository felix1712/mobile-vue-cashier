<template>
	<transition name="slide-left" mode="out-in">
		<div id="pagePayment">
			<router-link :to="{name: 'PageCashier'}">back</router-link>
			<span>{{paymentMethod}}</span>
		</div>
	</transition>
</template>

<script>
export default{
	name: 'PagePayment',
	data() {
		return {
			paymentMethod: null,
		};
	},
	created(){
		this.paymentMethod = this.$route.params.payment_method;
	}
}
</script>

<style lang="scss" scoped>
	.slide-left-enter-active {
  transition: all 0.5s ease;
	}
	.slide-left-leave-active {
	  transition: all 0.5s cubic-bezier(1.0, 0.5, 0.8, 1.0);
	}
	.slide-left-enter, .slide-left-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	  transform: translateX(100%);
	  opacity: 0;
	}
</style>