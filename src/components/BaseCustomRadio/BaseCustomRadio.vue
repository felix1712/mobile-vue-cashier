<template src="./index.html"></template>

<script>
export default {
	name: 'BaseCustomRadio',
	data() {
		return {
			picked: null,
		};
	},
	props: {
		radioId:{
			required: true,
		},
		radioName: {
			required: true,
		},
		radioDisabled: {
			required: false,
		},
		radioValue: {
			required: false,
		},
		radioLabel: {
			required: false,
		}
	},
	methods: {
		radioChange(value){
			this.picked = value;
		},
	}
};
</script>

<style lang="scss" scoped>
	@import "@/assets/styles/modules/_variable.scss";

	.base-custom-radio{
		display: inline-block;
		width: 100%;
		margin: 10px 0;

		label{
			.radio-frame{
				display: inline-block;
				width: 10%;

				input[type="radio"]{
					position: absolute;
					visibility: hidden;

					&:checked + .custom-radio{
						border: $border-red !important;

						&:before{
							background: $v-red;
						}
					}
				}
			}

			.label-frame{
				padding:10px 15px;
				display: inline-block;
				width: 90%;
				transition: border .10s linear;
				-webkit-transition: border .10s linear;

				span{
					margin-bottom: 0;
					font-size: 90%;
					font-weight: bold;
				}
				img{
					width: 100%;
					height: auto;
					max-width: 3.5rem;
					margin-left: 15px;
				}
			}
		}
		.form-payment-frame{
			border-top: $border-normal;
			padding: 15px 0;
			margin: 15px 0;
		}
	}
</style>
