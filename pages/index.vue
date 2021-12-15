<template>
	<div class="page">
		<div v-for="block in blocks" :key="block.__typename">
			<template v-if="block.__typename === 'IntroRecord'">
				<span>IntroRecord</span>
			</template>
			<template v-else-if="block.__typename === 'GalleryRecord'">
				<Partners :data="block.gallery" />
			</template>
			<template v-else-if="block.__typename === 'FaqRecord'">
				<span>FaqRecord</span>
			</template>
			<template v-else-if="block.__typename === 'RichtextRecord'">
				<datocms-structured-text :data="block.text.value" />
			</template>
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
