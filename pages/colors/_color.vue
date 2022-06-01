<template>
	<main class="page color">
		<template v-if="$fetchState.error && !data.title && !$fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending && data.title">
			<Crumbs :links="breadCrumbs" />
			<div class="title_wrapper">
				<h1 class="title">{{ data.title }}</h1>
			</div>
			<SanityContent :blocks="data.content" class="content" :serializers="serializers" />
		</template>
	</main>
</template>
<script>
import { colorPage } from '@/plugins/queries'
import RichText from '@/components/sections/RichText'
import ColorsGallery from '@/components/sections/ColorsGallery'

export default {
	name: 'Color',
	data: () => ({
		data: {},
		serializers: {
			types: {
				richText: RichText,
				colors_gallery: ColorsGallery,
			},
		},
	}),
	async fetch() {
		await this.$sanity
			.fetch(colorPage, { uid: this.$route.params.color })
			.then((fetch) => {
				if (fetch.title) {
					this.data = fetch
					// this.$store.dispatch('metaTags', { fetch, type: 'colors' })
				} else {
					throw new Error('Colors not found no data')
				}
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('Colors not found', error)
			})
	},
	fetchOnServer: false,
	computed: {
		breadCrumbs() {
			return [{ title: this.data.title }]
		},
	},
}
</script>
<style lang="scss">
.color {
	.crumbs {
		padding: 50px 10%;
	}
	.title_wrapper {
		padding: 50px 10% 0;
	}
}
</style>
