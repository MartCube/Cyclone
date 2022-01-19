<template>
	<div class="cta_form">
		<ValidationObserver v-if="!message" ref="contact" tag="form" autocomplete="off" @submit.prevent="Submit()">
			<InputItem name="number" :label="label" rules="min:9|required" @getValue="getNumber" />
			<ButtonItem>Send</ButtonItem>
		</ValidationObserver>

		<div v-else class="message">
			<span>response like thank you</span>
			<ButtonItem @click.native="$router.push('/')"></ButtonItem>
		</div>
	</div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
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
			this.form.number = value
		},
		async Submit() {
			const isValid = await this.$refs.contact.validate()
			// validation
			if (!isValid) return
			this.loading = true
			console.log('loading')
			// compose email template
			this.form.emailTemplate = `
				<h4>Number</h4>
				<p>${this.form.number}</p>
			`
			// trigger netlify function
			try {
				await this.$axios.$post('.netlify/functions/sendmail', this.form)
			} catch (error) {
				console.log(error)
			}
			this.loading = false
			console.log('submited')
			this.message = !this.message
		},
	},
}
</script>

<style lang="scss">
.cta_form {
	form {
		width: 25rem;
		display: flex;
		align-items: flex-end;
	}
	button {
		width: 8rem;
		margin: 0 0 0 1rem;
		height: 40px;
		width: fit-content;
	}
	.message {
		display: flex;
		flex-direction: column;
		justify-content: center;
		color: $grey;
	}
}
@media (max-width: 800px) {
	.cta_form {
		width: 100%;
		// margin-top: 4rem;
		justify-content: flex-end;
		// padding-right: 1.5rem;
		form {
			flex-direction: column;
			margin: 0;
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
</style>
