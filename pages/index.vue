<template>
	<div class="page">
		test
		<!-- <SanityContent :blocks="content" :serializers="serializers" /> -->
	</div>
</template>

<script>
import { panelList } from '@/plugins/queries'
// import YouTube from '@/components/YouTube'

export default {
	asyncData({ $sanity, payload }) {
		if (payload) {
			console.log(payload)
		}
		return $sanity.fetch(panelList)
	},
	data: () => ({
		blocks: null,
	}),
	async fetch() {
		// const fetch = await request({
		// 	query: index,
		// })
		// this.blocks = fetch.index.content
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
