<template src="./index.html"></template>

<script>
export default {
	name: 'BaseCashierPayment',
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/modules/_variable.scss";
		#cashierPayment{
			margin-top: 2.5rem;

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
						img{
							width: 100%;
							height: auto;
							vertical-align: middle;
							max-width: 3.5rem;
						}
					}

					.right-item-payment{
						float: right;
						display: inline-block;
						padding: 10px 0;

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

#promoFlag {
  padding: 5px 12px;
  background: $v-red-linear;
  color: $v-white;
  font-weight: bold;
  position: relative;
  display: inline-block;
  margin-right: 15px;
  border-radius: 5px;

  &:before {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute !important;
    z-index: 100;
    top: 8px;
    left: -10px;
    border: 7px solid #fff;
    border-radius: 8px;
  }

  &:after {
    content: "";
    width: 0px;
    height: 0px;
    position: absolute !important;
    z-index: 100;
    top: 8px;
    right: -10px;
    border: 7px solid #fff;
    border-radius: 8px;
  }
}
</style>
