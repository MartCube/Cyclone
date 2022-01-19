<template>
	<div class="policy">
		<p><Icon name="copyright" /> Cyclone {{ year }} All rights reserved</p>
		<n-link to="/">Privacy Policy Terms and Conditions</n-link>
	</div>
</template>
<script>
export default {
	name: 'Policy',
	data: () => ({}),
	computed: {
		year() {
			return new Date().getFullYear()
		},
	},
}
</script>
<style lang="scss" scooped>
.policy {
	flex-basis: 100%;
	margin-top: 25px;

	display: flex;
	justify-content: space-between;
	a,
	p {
		font-size: 1.2rem;
		padding: 0;
		text-decoration: none;
		color: $white;
		margin-bottom: 25px;

		display: flex;
		svg {
			margin-right: 1rem;
		}
	}
	span.line {
		width: 2px;
		height: inherit;
		background: $secondary;
		margin: 0 25px;
	}
}
@media (max-width: 600px) {
	.policy {
		flex-direction: column;
		margin-top: 3rem;
		// padding-right: 30px;
		a {
			justify-content: center;
			align-items: flex-end;
			// flex-direction: column;
			margin-bottom: 0;
		}
		p {
			justify-content: center;
			align-items: flex-start;
			// flex-direction: column;
			margin-bottom: 0;
		}
		.text {
			display: flex;
			margin-bottom: 10px;
		}
		span.line {
			display: none;
		}
		svg {
			margin-right: 10px;
		}
	}
}
</style>
