<template src="./index.html"></template>

<script>
export default {
	name: 'BaseModal',
	props: {
		typeModal: {
			required: false,
		}
	}
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/modules/_variable.scss";

	.modal-mask {
		position: fixed;
		z-index: 9998;
		top: 0;
		left:0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, .2);
		display: table;
		transition: opacity .3s ease;

		.modal-wrapper {
			display: table-cell;
			vertical-align: middle;

			.modal-container {
				min-width: 300px;
				width: 300px;
				margin: 0px auto;
				padding: 20px 30px;
				background-color: #fff;
				border-radius: 2px;
				box-shadow: 0 2px 8px rgba(0, 0, 0, .33);
				transition: all .3s ease;

				&.transparent{
					background: transparent;
					box-shadow: none;
				}

				.modal-header{
					margin-top: 5px;
					color: $v-black;
					font-weight: bold;
					padding: 0 10px;
				}

				.modal-body {
					margin: 20px 0;
				}
				.modal-footer{
					padding: 0 10px;
				}
			}

			&.modal-period{
				bottom: 0;
				position: fixed;
				width: 100%;

				.modal-container{
					width: auto;
					padding: 5px;

					.close-button{
						display: none;
					}
				}
			}
		}
	}

	// modal transition style with vue
	.modal-enter {
		opacity: 0;
	}

	.modal-leave-active {
		opacity: 0;
	}

	.modal-enter .modal-container,
	.modal-leave-active .modal-container {
		-webkit-transform: scale(1.1);
		transform: scale(1.1);
	}

	.modal-periods-enter-active {
  	transition: all .2s ease;
	}

	.modal-periods-leave-active {
		transition: all .5s ease;
	}

	.modal-periods-enter, .modal-periods-leave-to{
	  transform: translateY(200%);
	  opacity: 0;
	}
</style>