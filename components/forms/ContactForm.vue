<template>
	<div class="contact_form">
		<h6 class="title">Нам правда важно ваше мнение</h6>
		<form ref="contact_form" autocomplete="off" @submit.prevent="Submit()">
			<ValidationObserver v-if="!message" ref="contact" tag="div">
				<InputItem name="name" label="Имя" rules="required" @getValue="storeValue" />
				<InputItem name="number" type="number" label="Телефон" rules="min:9|required" @getValue="storeValue" />
				<InputItem name="email" label="Email" rules="email|required" @getValue="storeValue" />
				<InputItem name="message" label="Сообщение" rules="required" @getValue="storeValue" />
				<ButtonItem> Отправить <Icon name="mail" /> </ButtonItem>
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
			switch (input.name) {
				case 'name': {
					this.form.name = input.value
					break
				}
				case 'number': {
					this.form.number = input.value
					break
				}
				case 'email': {
					this.form.email = input.value
					break
				}
				case 'message': {
					this.form.message = input.value
					break
				}
			}
			// if (input.name === 'name') this.form.name = input.value
			// else if (input.name === 'number') this.form.number = input.value
			// else if (input.name === 'email') this.form.email = input.value
			// else if (input.name === 'message') this.form.message = input.value
		},

		async Submit() {
			const isValid = await this.$refs.contact.validate()
			// validation
			if (!isValid) return
			this.loading = true
			console.log('loading')
			// compose email template
			// this.form.emailTemplate = `
			// 	<h4>Name</h4>
			// 	<p>${this.form.name}</p>
			// 	<h4>Number</h4>
			// 	<p>${this.form.number}</p>
			// 	<h4>Email</h4>
			// 	<p>${this.form.email}</p>
			// 	<h4>Message</h4>
			// 	<p>${this.form.message}</p>
			// `
			emailjs.sendForm('default_service', 'cyclone_contact', this.$refs.contact_form, 'user_vgxo7Nole0QeHb4nsY5SS').then(
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

			this.loading = false
			// console.log('submited')
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
	p {
		padding: 0;
	}
	.input_item {
		margin: 1rem 0;
		height: 4rem;
	}
}
</style>
