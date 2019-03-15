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
					<template v-for="(item, index) in dummyCard">
						<CreditCardFrame 
							:cardNumber="item.nomorKartu"
							:cardHolder="item.namaPemegang"
							:cardExpired="item.expiredCard"
							:cardType="item.typeCard"
							:cardPromo="item.promo"
						/>
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
	data() {
		return {
			dummyCard: [
				{
					id: 1,
					nomorKartu: '4556330069036953',
					namaPemegang: 'Felix Andrean',
					expiredCard: '12/24',
					typeCard: 'visa',
					promo: true,
				},
				{
					id: 2,
					nomorKartu: '4556330069036933',
					namaPemegang: 'Ilham Raenaldi',
					expiredCard: '05/23',
					typeCard: 'mastercard',
					promo: false,
				},
				{
					id: 3,
					nomorKartu: '4556330069036913',
					namaPemegang: 'Wahyu Kadal',
					expiredCard: '01/19',
					typeCard: 'visa',
					promo: false,
				},
				{
					id: 4,
					nomorKartu: '4556330069036993',
					namaPemegang: 'Wahyu Kadal Buntung',
					expiredCard: '03/19',
					typeCard: 'visa',
					promo: true,
				},
				{
					id: 5,
					nomorKartu: '4556330069036983',
					namaPemegang: 'Radiyan Abi Priyanda',
					expiredCard: '06/20',
					typeCard: 'mastercard',
					promo: false,
				},
			],
		}
	},
	components: {
		CreditCardFrame,
	},
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
