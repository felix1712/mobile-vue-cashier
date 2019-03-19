<template>
<transition name="slide-right" mode="out-in">
  <div
    id="pageCashier"
    v-responsive="{
      tiny: el => el.width < 400,
      small: el => el.width < 800 && el.width > 400,
      large: el => el.width > 800,
    }"
  >
    <div id="cashierHeader">
      <BaseCountDown/>
      <BaseOrderDetails/>
    </div>
    <CashierPayment/>
  </div>
</transition>
</template>

<script>
import BaseCountDown from '@/components/BaseCountdown/BaseCountdown.vue';
import BaseOrderDetails from '@/components/BaseOrderDetails/BaseOrderDetails.vue';
import CashierPayment from '@/components/CashierPayment/CashierPayment.vue';

export default {
	name: 'PageCashier',
	components: {
		BaseCountDown,
		BaseOrderDetails,
		CashierPayment,
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/modules/_variable.scss";

#pageCashier {
  width: 100%;

  #cashierHeader {
    // background: $v-red-linear;
    padding: 15px;
  }

  // custom style for iphone 5
  &.tiny{
  	#cashierHeader{
  		// height: 35vh;
	  }
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
