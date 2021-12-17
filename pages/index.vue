<template>
	<div class="page">
		<div v-for="block in blocks" :key="block.__typename">
			<HomeIntro v-if="block.__typename === 'IntroRecord'" :data="block" />
			<Partners v-else-if="block.__typename === 'GalleryRecord'" :data="block.gallery" />
			<Faq v-else-if="block.__typename === 'FaqRecord'" :data="block" />
			<datocms-structured-text v-else-if="block.__typename === 'RichtextRecord'" :data="block.text.value" />
		</div>
	</div>
</template>

<script>
import { request } from '~/plugins/datocms'
import { index } from '~/plugins/dato-query'

export default {
	data: () => ({
		blocks: null,
	}),
	async fetch() {
		const fetch = await request({
			query: index,
		})
		this.blocks = fetch.index.content
	},
	methods: {},
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
}
</style>
