<template>
  <div
    id="pageCashier"
    v-responsive="{
      tiny: el => el.width < 400,
      small: el => el.width < 800 && el.width > 300,
      large: el => el.width > 800,
    }"
  >
    <div id="cashierHeader">
      <BaseCountDown/>
      <BaseOrderDetails/>
    </div>
    <BaseCashierPayment/>
  </div>
</template>

<script>
import BaseCountDown from '@/components/BaseCountdown/BaseCountdown.vue';
import BaseOrderDetails from '@/components/BaseOrderDetails/BaseOrderDetails.vue';
import BaseCashierPayment from '@/components/BaseCashierPayment/BaseCashierPayment.vue';

export default {
	name: 'PageCashier',
	components: {
		BaseCountDown,
		BaseOrderDetails,
		BaseCashierPayment,
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/modules/_variable.scss";

#pageCashier {
  width: 100%;

  #cashierHeader {
    height: 25vh;
    background: $v-red-linear;
    padding: 0 15px;
  }
}
	.slide-right-enter-active {
  	transition: all .5s ease;
	}
	.slide-right-enter, .slide-right-leave-to
	/* .slide-fade-leave-active below version 2.1.8 */ {
	  transform: translateX(-100%);
	  opacity: 0;
	}
</style>
