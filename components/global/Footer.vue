<template>
	<footer>
		<div class="contacts">
			<h4>Контакты</h4>
			<n-link to="/"> <Icon name="phone" /> 044 492 05 30</n-link>
			<n-link to="/"> <Icon name="phone" /> 067 193 42 50</n-link>
			<n-link to="/"> <Icon name="phone" /> 050 785 04 05</n-link>
			<n-link to="/"> <Icon name="phone" /> 073 267 58 44</n-link>
		</div>
		<div class="smedias">
			<h4>Мы в соц сетях</h4>
			<n-link to="/"> <Icon name="youtube" /> Youtube</n-link>
			<n-link to="/"> <Icon name="facebook" /> Facebook</n-link>
			<n-link to="/"> <Icon name="instagram" /> Instagram</n-link>
		</div>
		<div class="mail">
			<h4>Напишите нам</h4>
			<n-link to="/"><Icon name="mail" /> info@cyclone.kiev.ua</n-link>
		</div>
		<div class="map">
			<h4>Карта</h4>
			<n-link to="/">
				<ImageItem :src="map" />
			</n-link>
		</div>
		<div class="policy">
			<p><Icon name="copyright" /> Cyclone <span /> All rights reserved</p>
			<n-link to="/">Privacy Policy <span /> Terms and Conditions</n-link>
		</div>
	</footer>
</template>

<script>
export default {
	data: () => ({
		map: null,
	}),
	async fetch() {
		const fetch = await this.$prismic.api.getSingle('footer')
		this.map = fetch.data.map.url
	},
}
</script>

<style lang="scss" scoped>
footer {
	background: $primary-dark;
	width: 100%;
	height: 100%;
	padding: 50px 100px 0 100px;

	display: flex;
	flex-wrap: wrap;
	& > * {
		flex: 1;
		h4 {
			font-size: 1.5rem;
			margin-bottom: 50px;
		}
		a,
		p {
			font-size: 1.2rem;
			text-decoration: none;
			color: $white;
			margin-bottom: 25px;

			display: flex;
			svg {
				margin-right: 1rem;
			}
		}

		&.map picture {
			width: 100%;
		}

		&.policy {
			flex-basis: 100%;
			margin-top: 25px;

			display: flex;
			justify-content: space-between;
			justify-items: center;

			span {
				width: 2px;
				height: inherit;
				background: $secondary;
				margin: 0 25px;
			}
		}
	}
}
</style>
