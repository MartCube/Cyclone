<template>
	<div>
		<IntroPanel :data="intro" />
		<!-- <div v-for="(slice, i) in panel.data.body" :key="slice.slice_type + i">
		</div> -->
	</div>
</template>

<script>
export default {
	computed: {
		intro() {
			const fetch = this.$store.getters.panels.filter((el) => {
				return el.node._meta.uid === this.$route.params.panel_page ? el.node : false
			})
			return {
				title: fetch[0].node.title,
				image: fetch[0].node.main_image.url,
			}
		},
	},
}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	picture {
		max-width: 50%;
		min-height: 500px;
		margin: 100px 0;
	}
}
</style>
