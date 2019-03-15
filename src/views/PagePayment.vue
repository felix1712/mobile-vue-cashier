<template>
	<transition name="slide-left" mode="out-in">
		<div id="pagePayment">
			<BaseCountdown 
				:scrolled="false"
				:showFixedOnly="true"
			/>
			<div class="payment-container">
				<!-- component implement here -->
				<router-link :to="{name: 'PageCashier'}"> Mundur </router-link>
				<router-link :to="{name: 'CreditCard'}"> CC </router-link>
					<template v-for="(item, index) in 5">
						<BaseCustomRadio :radioId="'uangElektronik'+index" :radioName="'method_uang_elektronik'" :radioLabel="'GO-PAY'" :radioValue="index" class="card-frame s-py-7">
							<template v-slot:icon_payment>
								<img src="@/assets/images/icon/gopay-icon.png" />
							</template>
							<template v-slot:form_payment>
								<BaseFormGroup 
								:labelTitle="'Nama Pemilik Rekening'"
								:inputId="'holderName'"
								:infoInputMessage="'Mohon masukkan Nama pemilik rekening bank yang akan anda gunakan untuk melakukan transfer.'"
								>
									<input type="text" name="" class="s-form-control">
								</BaseFormGroup>
							</template>
						</BaseCustomRadio>
					</template>
			</div>
		</div>

		<div id="pagePayment" v-if="DetailOrder === 'payment_detail'">
			<router-link :to="{name: 'PageCashier'}">back</router-link>
			<OrderDetails />
		</div>
	</transition>
</template>




<script>
import BaseCustomRadio from '@/components/BaseCustomRadio/BaseCustomRadio.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';
import BaseCountdown from '@/components/BaseCountdown/BaseCountdown.vue';

export default{
	name: 'PagePayment',
	components: {
		BaseCustomRadio,
		BaseFormGroup,
		BaseCountdown,
	},
	data() {
		return {
			paymentMethod: null,
			DetailOrder: null,
		};
	},
	created(){
		this.paymentMethod = this.$route.params.payment_method;
		this.DetailOrder = this.$route.params.detail_order
		console.log(this.DetailOrder)
		console.log(	this.paymentMethod)
	}
}
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/modules/_variable.scss";
	
	#pagePayment{
		.payment-container{
			padding:15px;
			margin-top: 10px;
		}
	}
</style>