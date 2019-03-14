<template>
	<transition name="slide-left" mode="out-in">
		<div id="pagePayment">
			<div class="count-down-fixed is-show">
				<div class="col-12 s-p-0">
					<span class="countdown-mini-label">Batas Pembayaran</span>
					<span class="countdown-mini-frame">
						12 <span>h</span>
					</span>
					<span class="countdown-mini-divid">
						<span>:</span>
					</span>
					<span class="countdown-mini-frame">
						23 <span>m</span>
					</span>
					<span class="countdown-mini-divid">
						<span>:</span>
					</span>
					<span class="countdown-mini-frame">
						15 <span>s</span>
					</span>
					<span class="countdown-mini-icon">
						<img src="@/assets/images/icon/time-remain-icon.png" />
					</span>
				</div>
			</div>
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
	</transition>
</template>

<script>
import BaseCustomRadio from '@/components/BaseCustomRadio/BaseCustomRadio.vue';
import BaseFormGroup from '@/components/BaseFormGroup/BaseFormGroup.vue';

export default{
	name: 'PagePayment',
	components: {
		BaseCustomRadio,
		BaseFormGroup
	},
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
	@import "@/assets/styles/modules/_variable.scss";

	#pagePayment{
		.payment-container{
			padding:15px;
			margin-top: 30px;
		}
	}
</style>