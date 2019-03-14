<template>
	<transition name="slide-left" mode="out-in">
		<div id="pageCreditCard">
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
			<div class="credit-card-container">
				<label class="label-container">Kartu Kredit</label>
				<div class="card-frame">
					<template v-for="item in 7">
						<CreditCardFrame />
					</template>
				</div>
			</div>
		</div>
	</transition>
</template>

<script>
import CreditCardFrame from '@/components/CreditCardFrame/CreditCardFrame.vue'
export default {
	name: 'PageCreditCard',
	components: {
		CreditCardFrame,
	}
};
</script>

<style lang="scss" scoped>
	#pageCreditCard{
		.credit-card-container{
			padding: 15px;
			margin-top: 30px;
		}
	}
</style>
