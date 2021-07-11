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
