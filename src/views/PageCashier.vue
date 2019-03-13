<template>
	<div
		id="pageCashier"
		v-responsive="{
			tiny: el => el.width < 400,
			small: el => el.width < 800 && el.width > 300,
			large: el => el.width > 800,
		}">
			<div id="cashierHeader">
				<div id="baseCountDown">
					<label>Batas Pembayaran</label>
					<div class="countdown-frame card-frame col-12">
						<div class="block">
							<p class="digit">00</p>
							<p class="text">Hours</p>
						</div>
						<div class="divid">
							<span>:</span>
						</div>
						<div class="block">
							<p class="digit">15</p>
							<p class="text">Minutes</p>
						</div>
						<div class="divid">
							<span>:</span>
						</div>
						<div class="block">
							<p class="digit">09</p>
							<p class="text">Seconds</p>
						</div>
					</div>
				</div>
				<div id="baseOrderDetails">
					<div class="order-detail-frame card-frame col-12">
						<div class="order-detail-content row">
							<div class="col-2 s-px-10 image-icon-frame">
								<img src="@/assets/images/icon/plane-icon.png"/>
							</div>
							<div class="col-4 s-px-10">
								<p class="order-detail-title">Perjalanan</p>
								<span class="type-order">Tiket Pesawat</span>
							</div>
							<div class="col-6 s-px-10">
								<p class="order-detail-title destination">
									<span>HLP</span>
									<span><img src="@/assets/images/icon/arrow-plane.png"/></span>
									<span>DPS</span>
								</p>
								<span class="date-destination">26 Maret 2019</span>
							</div>
						</div>

						<div class="order-detail-price row">
							<div class="col-6">
								<p>Rp 1,787,500</p>
							</div>
							<div class="col-6">
								<a>
									<span>Lihat Detail</span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="cashierPayment" class="col-12">
				<div class="row">
					<label>Metode Pembayaran</label>
					<template v-for="item in 6">
						<div id="baseSubPayment" class="col-12 card-frame">
							<div class="payment-method-item">
								<p>Uang Elektronik</p>
								<img src="@/assets/images/icon/gopay-icon.png" />
							</div>
							<div class="right-item-payment">
								<span class="promo-menu">
									<div id="promoFlag">
										<span>%</span>
									</div>
								</span>
								<span class="arrow-menu">
									<img src="@/assets/images/icon/arrow-menu.png" />
								</span>
							</div>
						</div>
					</template>
				</div>
			</div>
	</div>
</template>

<script>
export default {
	name: 'PageCashier',
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/modules/_variable.scss";

	#pageCashier{
		width: 100%;

		#cashierHeader{
			height: 25vh;
			background: $v-red-linear;
			padding: 0 15px;

			#baseCountDown{
				padding: 20px 0;

				label{
					color: $v-white;
					display: block;
					font-size: 80%;
				}

				.countdown-frame{
					display: flex;
					align-items: center;
					justify-content: center;
					background: $v-red-header;
					margin: 10px 0;
					padding: 10px 0;
					color: $v-white;
					border: 1px solid $v-red-border;
					box-shadow: 2px 2px 2px 0 rgba(232, 232, 232, 0.1);

					.block {
						display: flex;
						flex-direction: column;
						margin: 0 10%;

						.digit{
							text-align:center;
							font-size: 1.6rem;
						}
						.text{
							font-size: 0.7rem;
						}

						p{
							margin: 0;
						}
					}

					.divid{
						font-size: 2rem;
						color: $v-black;
					}
				}
			}

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
								}
							}
						}
					}
				}
			}
		}

		#cashierPayment{
			margin-top: 2.5rem;

			label{
				color: $v-black;
				display: block;
				font-size: 90%;
				margin-bottom: 5px;
			}

			#baseSubPayment{
				padding: 20px 15px;
				margin: 10px 0;

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
							max-width: 1rem;
						}
					}
				}
			}
		}
	}

	#promoFlag{
		padding: 5px 12px;
	  background: $v-red-linear;
	  color: $v-white;
	  font-weight: bold;
	  position: relative;
	  display: inline-block;
	  margin-right: 15px;
	  border-radius: 5px;

	  &:before{
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

	  &:after{
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
