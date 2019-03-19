<template>
	<transition name="slide-left" mode="out-in">
		<div 
			id="pagePayment"
			v-responsive="{
	      tiny: el => el.width <= 320 ,
	      small: el => el.width < 800 && el.width > 320,
	      large: el => el.width > 800,
	    }"
		>
			<BaseCountdown
				:showFixedOnly="true"
			/>
			<div class="payment-container">
				<PaymentContainer />
			</div>
		</div>
	</transition>
</template>




<script>
import BaseCountdown from '@/components/BaseCountdown/BaseCountdown.vue';
import PaymentContainer from '@/components/PaymentContainer/PaymentContainer.vue';

export default{
	name: 'PagePayment',
	components: {
		BaseCountdown,
		PaymentContainer,
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/modules/_variable.scss";
	
	#pagePayment{
		.payment-container{
			padding:15px;
			// margin-top: 10px;
		}

		&.tiny{
			font-size: 80%;
		}
	}
</style>