<template>
	<div class="page panel">test panel page</div>
</template>

<script>
import { panel } from '@/plugins/queries'

export default {
	name: 'Panel',
	asyncData({ $sanity, params }) {
		return $sanity.fetch(panel, {
			uid: params.panel,
		})
	},
	data: () => ({}),
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
