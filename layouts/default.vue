<template>
	<div class="layout">
		<Navbar />
		<!-- <Sidebar /> -->
		<Nuxt />
		<Footer />
	</div>
</template>

<script>
export default {
	mounted() {
		this.initGA()
	},
	methods: {
		initGA() {
			window.dataLayer = window.dataLayer || []
			function gtag() {
				// eslint-disable-next-line no-undef
				dataLayer.push(arguments)
			}
			gtag('js', new Date())
			gtag('config', 'G-9CVZM7JWD6')
		},
	},
}
</script>
