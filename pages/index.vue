<template>
	<div>
		<h2>hello from linux</h2>
		<VideoItem />
	</div>
</template>

<script>
export default {
	async fetch() {
		const headerData = await this.$prismic.api.getSingle('index')
		console.log(headerData)
	},
}
</script>
