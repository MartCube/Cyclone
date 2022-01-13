<template>
	<div class="layout">
		<!-- <Navbar /> -->
		<Sidebar />
		<div class="content">
			<Nuxt keep-alive />
			<Footer />
		</div>
	</div>
</template>
<style lang="scss">
.layout {
	display: grid;
	width: 100%;
	grid-template-columns: 20% 80%;
}
</style>
