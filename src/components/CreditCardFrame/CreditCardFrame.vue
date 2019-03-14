<template src="./index.html"></template>

<script>
export default {
	name: 'CreditCardFrame',
	props: {
	},
}
</script>

<style lang="scss" scoped>
	@import '@/assets/styles/modules/_variable.scss';

	#creditCardFrame{
		background: $v-red-linear;
		padding: 20px 10px;
		color: $v-white;
		border-radius: 5px;
		margin: 20px 0;
		box-shadow: 12px 10px 10px 1px rgba($v-red, 0.5);

		.cc-logo{
			width: 100%;
			height: 100%;
			max-width: 4rem;
			vertical-align: middle;
		}
		p{
			font-size: 85%;
			font-weight: bold;

			.divider{
				font-size: 150%;
				margin: 0 10px;
			}
		}

		h4{
			margin: 0;
			margin-top: 15px;
			font-size: 150%;
			font-weight: 500;

			span{
				margin-right: 20px;
				position: relative;
				top: 0.3rem;

				&.last-number{
					top: 0;
				}
			}
		}
	}
</style>