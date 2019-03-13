<template>
	<div
		id="pageCashier"
		v-responsive="{
			tiny: el => el.width < 400,
			small: el => el.width < 800 && el.width > 300,
			large: el => el.width > 800,
		}">
			<div id="cashierHeader">
				<div id="baseCountDown" :scroll="handleScroll">
					<div class="count-down-standard" :class="{'unpinned': scrolled}">
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
					<div class="count-down-fixed" :class="{'is-show': !scrolled}">
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
									<span>Lihat Detail <img src="@/assets/images/icon/arrow-menu.png" /></span>
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div id="cashierPayment" class="col-12">
				<div class="row">
					<label>Metode Pembayaran</label>
					<template v-for="item in 7">
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
	data() {
		return {
			limitHeader: 90,
			scrolled: true,
			lastPosition: 0,
		};
	},
	methods: {
		handleScroll() {
			if (this.lastPosition > this.limitHeader) {
        this.scrolled = false;
      } else if (this.lastPosition < this.limitHeader){
      	this.scrolled = true;
      }
      
      this.lastPosition = window.scrollY;
		},
	},
	created() {
    window.addEventListener("scroll", this.handleScroll);
  },
  destroyed() {
    window.removeEventListener("scroll", this.handleScroll);
  },
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

				.count-down-standard{
					transition: 0.25s;
				  transition-timing-function: ease-out;
				  transform: translateY(0);
				  opacity: 1;

					&.unpinned{
						transform: translateY(-100%);
						transition-timing-function: ease-in;
				  	transition: 0.2s;
					}

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
