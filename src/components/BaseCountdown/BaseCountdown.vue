<template src="./index.html"></template>

<script>
export default {
	name: 'BaseCountDown',
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
			} else if (this.lastPosition < this.limitHeader) {
      	this.scrolled = true;
			}

			this.lastPosition = window.scrollY;
		},
	},
	created() {
		window.addEventListener('scroll', this.handleScroll);
	},
	destroyed() {
		window.removeEventListener('scroll', this.handleScroll);
	},
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/modules/_variable.scss";
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
</style>
