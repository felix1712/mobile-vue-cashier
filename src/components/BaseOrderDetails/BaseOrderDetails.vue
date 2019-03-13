<template src="./index.html"></template>

<script>
export default {
	name: 'BaseOrderDetails',
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/modules/_variable.scss";
#baseOrderDetails{
				.order-detail-frame{
					background: $v-white;
					top: 3vh;
					padding: 0;

					.order-detail-content{
						padding: 10px 15px;

						.image-icon-frame{
							img{
								width: 120%;
								height: auto;
								vertical-align: middle;
								display: inline-block;
							}
						}

						.order-detail-title{
							font-weight: bold;
							margin-bottom: 0.2rem;

							&.destination{
								span{
									img{
										width: 35%;
										height: auto;
										vertical-align: middle;
										margin: 0 5%;
									}
								}
							}
						}

						.date-destination{
							color: $v-grey;
							font-size: 80%;
						}

						.type-order{
							color: $v-red;
							opacity: 0.7;
							font-size: 80%;
						}
					}

					.order-detail-price{
						padding: 15px 0;
						border-top: $border-normal;
						color: $v-red;

						p{
							font-size: 120%;
							margin: 0;
							font-weight: bold;
							vertical-align: middle;
						}

						.col-6{
							&:last-of-type{
								text-align: right;

								a{
									color: $v-red;
									font-size: 90%;

									span{
										img{
											width: 100%;
											height: auto;
											max-width: 0.5rem;
											margin-left: 7px;
											vertical-align: middle;
										}
									}
								}
							}
						}
					}
				}
			}
</style>
