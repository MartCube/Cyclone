<template>
	<div>
		<template v-if="!$fetchState.pending">
			<div v-for="(slice, i) in slices" :key="slice.slice_type + i">
				<HomeIntro v-if="slice.slice_type == 'homeintro'" :key="slice.slice_type + i" :data="slice" />
				<Stages v-if="slice.slice_type == 'stages'" :data="slice" />
				<TitleText v-if="slice.slice_type == 'title_text'" :data="slice" />
				<Partners v-if="slice.slice_type == 'partners'" :data="slice" />
				<section v-else-if="slice.slice_type == 'text'">
					<div class="content rich_text">
						<prismic-rich-text :field="slice.primary.plain_text" />
					</div>
				</section>
			</div>
		</template>
		<template v-else>
			<h2>Loading...</h2>
		</template>
	</div>
</template>

<script>
import Partners from '~/components/sections/Partners.vue'
export default {
	components: { Partners },
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
