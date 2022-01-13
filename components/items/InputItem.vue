<template>
	<ValidationProvider v-slot="{ errors, classes }" :rules="rules" :mode="mode" tag="div" class="input_item">
		<div v-if="errors.length" class="error" :class="classes">
			{{ errors[0] }}
		</div>

		<input :id="name" v-model="inputValue" :type="type" :placeholder="name" :name="name" @change="emitValue" />

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
		inputValue: '',
	}),
	methods: {
		emitValue() {
			this.$emit('getValue', { name: this.name, value: this.inputValue })
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
		height: 50px;
		border: 0;
		border-bottom: 2px solid $grey;
		outline: 0;
		padding-top: 20px;
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
			height: 60px;
			border-bottom: none;
			// font-size: 20px;
			&:focus {
				~ .border {
					background-color: $gradient-red;
				}
			}
			&:placeholder-shown ~ label {
				top: 1rem;
				font-size: 1.5rem;
				// font-weight: bold;
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
			background-color: $secondary;
			transition: background-image 0.3s ease-in;
		}
	}
}
// @media (min-width: 1700px) {
// }
// @media (max-width: 900px) {
// 	.cta_form {

// 	}
// }
</style>
