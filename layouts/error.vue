<template>
	<main class="error page">
		<h1 v-if="error.statusCode === 404">
			{{ error.message }}
		</h1>
		<NuxtLink to="/">Home page</NuxtLink>
	</main>
</template>

<script>
export default {
	name: 'Error',
	layout: 'error',
	props: {
		error: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.error {
	min-height: calc(100vh - 100px);
}
</style>
