<template>
	<div>
		<Navbar />
		<Sidebar />
		<Nuxt />
		<!-- <Footer /> -->
	</div>
</template>

<script>
export default {
	data: () => ({}),
	async fetch() {
		const panelPages = await this.$prismic.api.query([this.$prismic.predicates.at('document.type', 'panel_page')])
		// console.log(panelPages)
		await this.$store.dispatch('bindPanelPages', panelPages.results)
	},
}
</script>
