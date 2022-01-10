<template>
	<div class="page">
		<SanityContent :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { index } from '@/plugins/queries'
import Cta from '@/components/sections/Cta'

export default {
	asyncData({ $sanity }) {
		return $sanity.fetch(index)
	},
	data: () => ({
		serializers: {
			types: {
				cta: Cta,
			},
		},
	}),
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
