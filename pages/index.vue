<template>
	<div class="page">
		<template v-if="!$fetchState.pending">
			<div v-for="(slice, i) in slices" :key="slice.slice_type + i">
				<HomeIntro v-if="slice.slice_type == 'homeintro'" :data="slice" />
				<Stages v-else-if="slice.slice_type == 'stages'" :data="slice" />
				<TitleText v-else-if="slice.slice_type == 'title_text'" :data="slice" />
				<PanelSlider v-else-if="slice.slice_type == 'panelslider'" :data="slice" />
				<Partners v-else-if="slice.slice_type == 'partners'" :data="slice" />
				<Cta v-else-if="slice.slice_type == 'cta'" :data="slice" />
				<Achievements v-else-if="slice.slice_type == 'achievements'" :data="slice" />
				<Faq v-else-if="slice.slice_type == 'faq'" :data="slice" />
				<section v-else-if="slice.slice_type == 'text'" class="plain-text">
					<div class="content rich_text">
						<prismic-rich-text :field="slice.primary.plain_text" />
					</div>
				</section>
			</div>
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
		// console.log(fetch.data.body)
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
