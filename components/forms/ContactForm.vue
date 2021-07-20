<template>
	<div class="contact_form">
		<ValidationObserver v-if="!message" ref="contact" tag="form" autocomplete="off" @submit.prevent="Submit()">
			<h4 class="title">Нам правда важно ваше мнение</h4>
			<InputItem name="name" label="Имя" rules="required" @getValue="getName" />
			<InputItem name="number" label="Телефон" rules="min:9|required" @getValue="getNumber" />
			<InputItem name="email" label="Email" rules="email|required" @getValue="getEmail" />
			<InputItem name="message" label="Сообщение" rules="required" @getValue="getMessage" />
			<ButtonItem> Отправить <Icon name="mail" /> </ButtonItem>
		</ValidationObserver>

		<div v-else class="message">
			<span>response like thank you</span>
			<ButtonItem @click.native="$router.push('/')"> go back</ButtonItem>
		</div>
	</div>
</template>

<script>
import { ValidationObserver } from 'vee-validate'
export default {
	components: {
		ValidationObserver,
	},
	data: () => ({
		message: false,
		loading: false,
		form: {
			name: '',
			number: '',
			email: '',
			message: '',
			action: 'contact',
		},
	}),
	methods: {
		getName(value) {
			this.form.name = value
		},
		getNumber(value) {
			this.form.number = value
		},
		getEmail(value) {
			this.form.email = value
		},
		getMessage(value) {
			this.form.message = value
		},
		async Submit() {
			const isValid = await this.$refs.contact.validate()
			// validation
			if (!isValid) return
			this.loading = true
			console.log('loading')
			// compose email template
			this.form.emailTemplate = `
				<h4>Name</h4>
				<p>${this.form.name}</p>
				<h4>Number</h4>
				<p>${this.form.number}</p>
				<h4>Email</h4>
				<p>${this.form.email}</p>
				<h4>Message</h4>
				<p>${this.form.message}</p>
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
.contact_form {
	width: 500px;
	height: 100%;
	display: flex;
	justify-content: center;

	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.title {
		width: max-content;
		border-bottom: 2px solid $primary;
		margin-bottom: 1rem;

		font-size: 2rem;
		color: $grey;
		&::selection {
			color: $white;
		}
	}
	.message {
		display: flex;
		flex-direction: column;
		justify-content: center;

		color: $grey;
		font-size: 1.2rem;

		button {
			margin-top: 2rem;
		}
	}
}
</style>
