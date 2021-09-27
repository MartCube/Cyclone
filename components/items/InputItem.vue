<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="input_item">
		<div v-if="errors.length" class="error" :class="classes">
			{{ errors[0] }}
		</div>

		<input :id="name" v-model="input_value" :type="type" :placeholder="name" :name="name" @change="emitValue" />

		<label :for="name" class="input_label">{{ label }}</label>
		<div class="border"></div>
	</ValidationProvider>
</template>

<script>
import { ValidationProvider } from 'vee-validate'
export default {
	components: {
		ValidationProvider,
	},
	props: {
		name: {
			type: String,
			required: true,
		},
		type: {
			type: String,
			default: 'input',
		},
		label: {
			type: String,
			default: '',
		},
		rules: {
			type: [Object, String],
			required: true,
		},
		mode: {
			type: String,
			default: 'eager',
		},
	},
	data: () => ({
		input_value: '',
	}),
	methods: {
		emitValue() {
			this.$emit('getValue', this.input_value)
		},
	},
}
</script>

<style lang="scss" scoped>
.input_item {
	position: relative;
	padding: inherit;
	width: 100%;
	height: 100%;

	font-weight: 500;
	input {
		width: 100%;
		border: 0;
		border-bottom: 2px solid $grey;
		outline: 0;
		padding: 7px 0;
		background: transparent;

		font-family: inherit;
		font-size: 0.9rem;
		color: $white;

		transition: border-color 0.2s;
		&:-webkit-autofill,
		&:-webkit-autofill:hover,
		&:-webkit-autofill:focus {
			-webkit-text-fill-color: #fff;
			box-shadow: 0 0 0px 1000px rgba(0, 0, 0, 0) inset;
			transition: background-color 5000s ease-in-out 0s;
		}
		&::placeholder {
			color: transparent;
		}
		&:placeholder-shown ~ label {
			font-size: 1rem;
			cursor: text;
			top: 20px;
		}
		&:focus {
			~ label {
				position: absolute;
				top: 0;
				display: block;
				transition: 0.2s;
				font-size: 0.8rem;
				color: $grey;
			}
		}
		/* reset input */
		&:required,
		&:invalid {
			box-shadow: none;
		}
	}
	.border {
		display: none;
	}
	label {
		position: absolute;
		top: 0;
		display: block;

		font-size: 0.8rem;
		color: white;

		&::first-letter {
			text-transform: uppercase;
		}
		transition: 0.2s;
	}
	.error {
		position: absolute;
		top: 0;
		right: 0;
		font-size: 0.8em;
		color: #ff1461;
		@include d-flex(row, center, center, initial);
		&.invalid {
			display: flex;
		}
	}
}
.cta_form {
	.input_item {
		input {
			height: 100%;
			border-bottom: none;
			padding-top: 45px;
			font-size: 20px;
			&:focus {
				~ .border {
					background-image: linear-gradient(to right, $gradient-red, $gradient-red);
				}
			}
			&:placeholder-shown ~ label {
				top: 2rem;
				font-size: 1.6rem;
				font-weight: bold;
			}
			&:focus ~ label {
				top: 0;
				font-size: 1rem;
				font-weight: 400;
			}
		}
		.border {
			position: absolute;
			bottom: 0;
			display: block;
			right: 0;
			width: 100%;
			height: 3px;
			background-image: linear-gradient(to right, $gradient-gray, $gradient-red);
			transition: background-image 0.3s ease-in;
		}
	}
}
// @media (min-width: 1700px) {
// }
// @media (max-width: 1200px) {
// }
</style>
