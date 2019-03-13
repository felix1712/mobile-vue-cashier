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

	.slide-left-enter-active {
  transition: all .2s ease;
	}
	.slide-left-enter, .slide-left-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	  transform: translateX(100%);
	  opacity: 0;
	}

	#pagePayment{
		.payment-container{
			padding:15px;
			margin-top: 30px;
		}
	}

	// will deleted
	.count-down-fixed{
		color: $v-white;
		font-size: 80%;
		background: $v-red;
		padding: 7px 15px;
		position: fixed;
		top: 0;
		right: 0;
		width: 100%;
		z-index: 9;
		//animation
		transform: translateY(-100%);
	  transition-timing-function: ease-in;
	  transition: 0.2s;

	  &.is-show{
	  	transition: 0.25s;
		  transition-timing-function: ease-out;
		  
		  transform: translateY(0);
		  opacity: 1;
	  }

		.countdown-mini-frame{
			margin: 0 15px;
		}

		.countdown-mini-icon{
			img{
				width: 100%;
				height: auto;
				vertical-align: top;
				max-width: 1rem;
			}
		}
	}
</style>