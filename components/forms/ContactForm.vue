<template>
	<div class="contact_form">
		<h6 class="title">Нам правда важно ваше мнение</h6>
		<ValidationObserver v-if="!message" ref="contact" tag="form" autocomplete="off" @submit.prevent="Submit()">
			<InputItem name="name" label="Имя" rules="required" @getValue="storeValue" />
			<InputItem name="number" label="Телефон" rules="min:9|required" @getValue="storeValue" />
			<InputItem name="email" label="Email" rules="email|required" @getValue="storeValue" />
			<InputItem name="message" label="Сообщение" rules="required" @getValue="storeValue" />
			<ButtonItem> Отправить <Icon name="mail" /> </ButtonItem>
		</ValidationObserver>

		<div v-else class="message">
			<span>Thanks for being awesome!</span>
			<ButtonItem @click.native="message = false">write us more</ButtonItem>
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
		storeValue(input) {
			if (input.name === 'name') this.form.name = input.value
			else if (input.name === 'number') this.form.number = input.value
			else if (input.name === 'email') this.form.email = input.value
			else if (input.name === 'message') this.form.message = input.value
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
			// try {
			// 	await this.$axios.$post('.netlify/functions/sendmail', this.form)
			// } catch (error) {
			// 	console.log(error)
			// }

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
	flex-direction: column;
	form {
		width: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.title {
		color: $grey;
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
	p {
		padding: 0;
	}
	.input_item {
		margin: 1rem 0;
	}
}
</style>
