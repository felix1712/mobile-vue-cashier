<template src="./index.html"></template>

<script>
// import vuex
import { mapState, mapActions } from 'vuex';

export default {
	name: 'CashierPayment',
	computed: {
		...mapState({
			dummyPaymentMethod: state => state.global.dummyPaymentMethod,
		})
	}
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/modules/_variable.scss";
		#cashierPayment{
			margin-top: 1rem;

			a{
				color: $v-black;

				label{
					color: $v-black;
					display: block;
					font-size: 90%;
					margin-bottom: 5px;
				}

				#baseSubPayment{
					padding: 20px 15px;
					margin: 10px 0;
					transform: translateX(0);
				  transition-timing-function: ease-in;
				  transition: 0.4s;

					.payment-method-item{
						float: left;
						p{
							font-weight: bold;
							margin-bottom: 5px;
						}
						.logo-payment-frame{
							width: 2.5rem;
							height: 1.5rem;
							margin: 0 5px;
							padding: 0 5px;
							display: inline-block;
							text-align: center;
							border: $border-normal;

							&:first-of-type{
								margin-left: 0;
							}

							img{
								max-width: 100%;
								max-height: 100%;
								height: auto;
								vertical-align: middle;
							}
						}
					}

					.right-item-payment{
						float: right;
						display: inline-block;
						padding: 10px 0;

						.promo-menu{
							margin: 0 1rem;
						}

						.arrow-menu{
							img{
								width: 100%;
								height: auto;
								vertical-align: middle;
								max-width: 0.5rem;
							}
						}
					}
				}
			}
		}
</style>
