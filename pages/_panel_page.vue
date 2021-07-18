<template>
	<div>
		<!-- <template v-if="!panel"> -->
		<div v-for="(slice, i) in panel.data.body" :key="slice.slice_type + i">
			<IntroPanel v-if="slice.slice_type == 'panelintro'" :data="slice" />
		</div>
		<!-- </template> -->
		<!-- <template v-else>
			<h2>Loading...</h2>
		</template> -->
	</div>
</template>

<script>
export default {
	computed: {
		panel() {
			const fetch = this.$store.getters.panels.filter((el) => {
				let page
				if (el.uid === this.$route.params.panel_page) {
					page = el
				}
				return page
			})
			// console.log(fetch[0])
			return fetch[0]
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
