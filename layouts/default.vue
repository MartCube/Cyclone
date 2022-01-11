<template>
	<div class="layout">
		<!-- <Navbar /> -->
		<Sidebar />
		<Nuxt keep-alive />

		<!-- <Footer /> -->
	</div>
</template>
<style lang="scss">
.layout {
	display: grid;
	width: 100%;
	grid-template-columns: 25% 75%;
}
</style>
