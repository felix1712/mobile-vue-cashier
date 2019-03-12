<template>
	<div
		id="pageCashier"
		v-responsive="{
	    tiny: el => el.width < 400,
	    small: el => el.width < 800 && el.width > 300,
	    large: el => el.width > 800,
  	}">
			<div id="cashierHeader">
				<div id="countDown">
					<label>Batas Pembayaran</label>
					<div class="countdown-frame col-12">
						<div class="block">
				      <p class="digit">00</p>
				      <p class="text">Hours</p>
				    </div>
				    <div class="divid">
				    	:
				    </div>
				    <div class="block">
				      <p class="digit">15</p>
				      <p class="text">Minutes</p>
				    </div>
				    <div class="divid">
				    	:
				    </div>
				    <div class="block">
				      <p class="digit">09</p>
				      <p class="text">Seconds</p>
				    </div>
					</div>
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

			#countDown{
				padding: 20px 15px;

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
					border-radius: 5px;
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
		}
	}
</style>
