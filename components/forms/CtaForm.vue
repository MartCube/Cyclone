<template>
	<div class="cta_form">
		<form ref="cta_form" autocomplete="off" @submit.prevent="sendEmail()">
			<ValidationObserver v-if="!message" ref="contact" tag="div">
				<InputItem ref="phone" name="contact_number" type="number" :label="label" rules="min:10|required" @getValue="Submit" />
				<ButtonItem>Send</ButtonItem>
			</ValidationObserver>

			<div v-else class="message">
				<h5>Мы уже звоним !</h5>
				<!-- <n-link :to="'/'">На главную</n-link> -->
			</div>
		</form>
	</div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
import * as emailjs from '@emailjs/browser'
export default {
	components: {
		ValidationObserver,
	},
	props: {
		label: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		message: false,
		loading: false,
		form: {
			number: '',
			action: 'cta',
		},
	}),
	methods: {
		getNumber(value) {
			this.form.contact_number = value
		},
		async Submit() {
			const isValid = await this.$refs.contact.validate()
			// validation
			if (!isValid) return
			this.loading = true
			emailjs.sendForm('default_service', 'gmail_cyclone', this.$refs.cta_form, 'user_vgxo7Nole0QeHb4nsY5SS').then(
				(result) => {
					console.log('SUCCESS!', result.text)
					this.loading = false
					this.message = !this.message
				},
				(error) => {
					console.log('FAILED...', error.text)
					// this.message = !this.message
				},
			)
			// console.log('submited')
		},
	},
}
</script>

<style lang="scss">
.cta_form {
	form {
		width: 25rem;
		div {
			display: flex;
			align-items: flex-end;
			width: 100%;
		}
	}
	.message {
		display: flex;
		background-color: rgb(0 219 17 / 5%);
		padding: 1rem;
		flex-direction: column;
		justify-content: center;
		color: $white;
		align-items: center;
		border: 1px solid rgb(255, 255, 255, 10%);
		a {
			font-weight: bold;
		}
	}
}
@media (max-width: 950px) {
	.cta_form {
		width: 100%;
		// margin-top: 4rem;
		justify-content: flex-end;
		// padding-right: 1.5rem;

		form {
			width: 100%;
			div {
				flex-direction: column;
				margin: 0;
				align-items: flex-start;
				width: 100%;
				button {
					align-items: center;
					margin-left: 0;
					margin-top: 2rem;
					height: 40px;
					width: 100%;
					// margin: 0 0 0 2rem;
					border-radius: 2px;

					&:hover,
					&:focus,
					&:active {
						background-color: $gradient-red;
					}
				}
			}
		}
	}
}
</style>
