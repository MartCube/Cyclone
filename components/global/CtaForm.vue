<template>
	<div class="contact_form">
		<ValidationObserver v-if="!message" ref="contact" tag="form" autocomplete="off" @submit.prevent="Submit()">
			<!-- <h4 class="title">Нам правда важно ваше мнение</h4> -->
			<!-- <InputItem name="name" label="Имя" rules="required" @getValue="getName" /> -->
			<InputItem name="number" label="Телефон" rules="min:9|required" @getValue="getNumber" />
			<!-- <InputItem name="email" label="Email" rules="email|required" @getValue="getEmail" /> -->
			<!-- <InputItem name="message" label="Сообщение" rules="required" @getValue="getMessage" /> -->
			<button type="submit">
				<svg width="90" height="87" viewBox="0 0 90 87" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g>
						<path d="M29.7097 49.3074L30.2463 50.7081L30.2047 50.7241L30.1622 50.7375L29.7097 49.3074ZM33.2161 50.0975L34.2255 48.988L34.2397 49.0009L34.2535 49.0142L33.2161 50.0975ZM40.7787 57.3401L41.4395 58.6867L40.4984 59.1485L39.7413 58.4234L40.7787 57.3401ZM63.4324 35.6453L64.4699 34.5619L65.2895 35.3469L64.757 36.3491L63.4324 35.6453ZM55.8697 28.4027L54.8322 29.4861L55.8697 28.4027ZM55.0103 25.0448L53.5851 24.5771L53.5886 24.5663L53.5923 24.5556L55.0103 25.0448ZM62.166 25.0985L61.1285 26.1819L60.4642 25.5456L60.73 24.665L62.166 25.0985ZM63.7129 16.572L62.2166 16.4667L62.3148 15.072H63.7129V16.572ZM66.2911 29.049L67.7039 29.5531L66.9259 31.7339L65.2536 30.1324L66.2911 29.049ZM68.9037 16.572V15.072H70.5142L70.3999 16.6785L68.9037 16.572ZM29.8094 56.1512L29.4179 54.7032L30.2314 54.4832L30.8424 55.0636L29.8094 56.1512ZM20.8717 57.6327H19.3717V56.2275L20.774 56.1359L20.8717 57.6327ZM33.9346 60.069L34.9675 58.9813L36.8106 60.7318L34.3873 61.499L33.9346 60.069ZM20.8717 62.5382L20.9695 64.035L19.3717 64.1393V62.5382H20.8717ZM72.4389 11.5H60.4073V8.5H72.4389V11.5ZM74.3765 13.2921C74.3765 12.3703 73.5629 11.5 72.4389 11.5V8.5C75.0962 8.5 77.3765 10.5925 77.3765 13.2921H74.3765ZM17.4375 67.7574C48.9498 67.7574 74.3765 43.3158 74.3765 13.2921H77.3765C77.3765 45.0936 50.4831 70.7574 17.4375 70.7574V67.7574ZM15.5 65.9653C15.5 66.8871 16.3135 67.7574 17.4375 67.7574V70.7574C14.7802 70.7574 12.5 68.6649 12.5 65.9653H15.5ZM15.5 54.476V65.9653H12.5V54.476H15.5ZM17.4375 52.6839C16.3135 52.6839 15.5 53.5542 15.5 54.476H12.5C12.5 51.7764 14.7803 49.6839 17.4375 49.6839V52.6839ZM30.1622 50.7375C26.1655 52.002 21.8534 52.6839 17.4375 52.6839V49.6839C21.5469 49.6839 25.5538 49.0489 29.2573 47.8773L30.1622 50.7375ZM30.7754 50.6428C30.5075 50.6428 30.3409 50.6719 30.2463 50.7081L29.1732 47.9067C29.766 47.6796 30.3558 47.6428 30.7754 47.6428V50.6428ZM32.2066 51.207C31.7922 50.83 31.2917 50.6428 30.7754 50.6428V47.6428C32.0466 47.6428 33.2649 48.114 34.2255 48.988L32.2066 51.207ZM39.7413 58.4234L32.1786 51.1808L34.2535 49.0142L41.8162 56.2567L39.7413 58.4234ZM64.757 36.3491C59.6529 45.9556 51.4397 53.7798 41.4395 58.6867L40.118 55.9935C49.5745 51.3533 57.3117 43.9681 62.1078 34.9415L64.757 36.3491ZM56.9072 27.3194L64.4699 34.5619L62.3949 36.7286L54.8322 29.4861L56.9072 27.3194ZM56.4355 25.5125C56.2335 26.1281 56.3706 26.8055 56.9072 27.3194L54.8322 29.4861C53.4438 28.1564 53.0309 26.266 53.5851 24.5771L56.4355 25.5125ZM58.4698 13.2921C58.4698 17.5755 57.7539 21.6912 56.4283 25.5339L53.5923 24.5556C54.8105 21.0242 55.4698 17.2389 55.4698 13.2921H58.4698ZM60.4073 11.5C59.2833 11.5 58.4698 12.3703 58.4698 13.2921H55.4698C55.4698 10.5925 57.75 8.5 60.4073 8.5V11.5ZM60.73 24.665C61.5213 22.0443 62.0178 19.2906 62.2166 16.4667L65.2092 16.6773C64.9955 19.7133 64.4608 22.6878 63.602 25.5321L60.73 24.665ZM65.2536 30.1324L61.1285 26.1819L63.2035 24.0152L67.3286 27.9657L65.2536 30.1324ZM70.3999 16.6785C70.0807 21.1609 69.1586 25.4755 67.7039 29.5531L64.8783 28.545C66.2424 24.7215 67.1078 20.6742 67.4074 16.4655L70.3999 16.6785ZM63.7129 15.072H68.9037V18.072H63.7129V15.072ZM30.201 57.5992C27.1819 58.4156 24.0928 58.9256 20.9695 59.1295L20.774 56.1359C23.7008 55.9448 26.5931 55.4671 29.4179 54.7032L30.201 57.5992ZM32.9016 61.1566L28.7765 57.2388L30.8424 55.0636L34.9675 58.9813L32.9016 61.1566ZM20.774 61.0414C25.1858 60.7533 29.4325 59.921 33.4818 58.6389L34.3873 61.499C30.1177 62.8508 25.6329 63.7305 20.9695 64.035L20.774 61.0414ZM22.3717 57.6327V62.5382H19.3717V57.6327H22.3717Z" fill="url(#paint0_linear)" />
					</g>
					<defs>
						<filter id="filter0_d" x="0.499939" y="0.5" width="88.8765" height="86.2574" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" />
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="6" />
							<feColorMatrix type="matrix" values="0 0 0 0 0.14902 0 0 0 0 0.14902 0 0 0 0 0.14902 0 0 0 1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
						</filter>
						<linearGradient id="paint0_linear" x1="82" y1="55.5" x2="45" y2="17.5" gradientUnits="userSpaceOnUse">
							<stop stop-color="#595959" />
							<stop offset="1" stop-color="#E80B08" />
						</linearGradient>
					</defs>
				</svg>
			</button>
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
	data: () => ({
		message: false,
		loading: false,
		form: {
			// name: '',
			number: '',
			// email: '',
			// message: '',
			action: 'cta',
		},
	}),
	methods: {
		// getName(value) {
		// 	this.form.name = value
		// },
		getNumber(value) {
			this.form.number = value
		},
		// getEmail(value) {
		// 	this.form.email = value
		// },
		// getMessage(value) {
		// 	this.form.message = value
		// },
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
	button {
		background-color: transparent;
		border: none;
		transition: transform 0.3s linear;
		svg {
			fill: url(#gradient-horizontal);
		}
		&:focus {
			outline: none;
		}
		&:hover {
			cursor: pointer;
			transform: scale(1.2);
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
#gradient-horizontal {
	--color-stop-1: #595959;
	--color-stop-2: #e80b08;
}
// #gradient-vertical {
//   --color-stop-1: #00c3ff;
//   --color-stop-2: #77e190;
//   --color-stop-3: #ffff1c;
// }
.icon-hgradient {
	fill: url(#gradient-horizontal);
	/* We could use it as a stroke fill too:
  stroke: url(#gradient-horizontal) gray; */
}
.icon-vgradient {
	fill: url(#gradient-vertical) gray;
}
</style>
