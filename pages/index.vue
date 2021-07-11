<template>
	<div>
		<template v-if="!$fetchState.pending">
			<div v-for="(slice, i) in slices" :key="slice.slice_type + i">
				<HomeIntro v-if="slice.slice_type == 'homeintro'" :key="slice.slice_type + i" :data="slice" />
				<Stages v-if="slice.slice_type == 'stages'" :data="slice" />
			</div>
		</template>
		<template v-else>
			<h2>Loading...</h2>
		</template>
	</div>
</template>

<script>
export default {
	data: () => ({
		slices: [],
	}),
	async fetch() {
		const fetch = await this.$prismic.api.getSingle('index')
		console.log(fetch.data.body)
		this.slices = fetch.data.body
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
