<template src="./index.html"></template>

<script>
import BaseModal from '@/components/BaseModal/BaseModal.vue';

export default {
	name: 'BaseFormGroup',
	data() {
		return {
			openedModal: false,
		};
	},

	props: {
		labelTitle: {
			type: String,
			default: '',
		},
		inputId: {
			required: false,
		},
		withInfo: {
			required: false,
		},
		idModal: {
			required: false,
		},
		errorMessage: {
			required: false,
		},
		infoInputMessage: {
			required: false,
		},
	},

	components: {
		BaseModal,
	},

	methods: {
		showModal() {
			this.openedModal = true;
		},
		closeModal() {
			this.openedModal = false;
		},
	},
};
</script>

<style lang="scss" scoped>
@import "@/assets/styles/modules/_variable.scss";

.form-group {
  margin-bottom: 15px;

  label {
    display: inline-block;
    max-width: 100%;
    margin-bottom: 10px;
    font-weight: 700;
    color: $v-label-input;
    font-size: 80%;

    .info-label {
      border: .5px solid rgba($v-blue, 0.5);
      border-radius: 100%;
      padding: 0px 4px;
      font-size: 80%;
      color: rgba($v-blue, 0.5);
      cursor: pointer;
      margin-left: 10px;
    }
  }

  .s-form-control {
    display: block;
    width: 100%;
    height: 50px;
    padding: 10px 15px;
    font-size: 80%;
    line-height: 1.5;
    color: $v-black;
    background-color: transparent;
    background-image: none;
    border: none;
    border-bottom: 2px solid $v-border-input;
    letter-spacing: 1px;
    margin-bottom: 7px;

    &.has-error {
      border-bottom: 2px solid red;
    }

    &:focus{
    	border-bottom: 2px solid $v-grey;
    }

    &.has-select{
      background: url("~@/assets/images/icon/arrow-down.png") no-repeat right center;
      background-size: 1.5rem .65rem;
    }
  }

  .field-text-error {
    color: red;
    display: block;
  }

  .info-input-message {
    color: $v-label-input;
    margin-top: 7px;
  }

  &-input-text {
    font-size: 12px;
    color: #9e9c9c;
  }
}
</style>
