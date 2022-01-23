<template>
	<main class="page panel">
		<PanelIntro :poster="data.poster" :title="data.title" />
		<section class="content">
			<Crumbs :links="breadCrumbs" />
			<SanityContent :blocks="data.content" :serializers="serializers" />
		</section>
	</main>
</template>

<script>
import { panel } from '@/plugins/queries'
import VideoSection from '@/components/sections/VideoSection'
import ImageItem from '@/components/items/ImageItem'
export default {
	name: 'Panel',
	data: () => ({
		data: null,
		serializers: null,
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(panel, { uid: this.$route.params.panel })
	},
	head() {
		return {
			title: this.title,
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://cyclone.kiev.ua/${this.$route.params.panel}/`,
				},
			],
			meta: [
				{
					hid: 'title',
					name: 'title',
					content: this.metaTags.title,
				},
				{
					hid: 'description',
					name: 'description',
					content: this.metaTags.description,
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.metaTags.title,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: `https://cdn.sanity.io/images/wv1u3p06/production/${this.metaTags.image.slice(6)}?auto=format`,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.metaTags.description,
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: `http://cyclone.kiev.ua/${this.$route.params.panel}/`,
				},
			],
		}
	},
	computed: {
		breadCrumbs() {
			return [{ title: this.title }]
		},
	},
	mounted() {
		this.serializers = {
			types: {
				youtube: VideoSection,
				image: ImageItem,
			},
		}
	},
}
</script>

<style lang="scss" scoped>
.panel {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	h1 {
		border-left: 5px solid $secondary;
		font-size: $h2;
		line-height: 1;
		display: inline-flex;
		padding-left: 1.5rem;
		margin: 3rem 0 3rem 50px;
	}
	.content {
		padding: 0 10% 3rem 10%;
		ul {
			padding: 0 50px 10px;
		}
		picture {
			margin-bottom: 10px;
			display: block;
		}
	}
	.crumbs {
		margin-left: 50px;
	}
}
@media (max-width: 950px) {
	.page {
		.content {
			padding: 0 2rem 3rem 2rem;
			width: 100%;
			h1 {
				margin-left: 0;
				font-size: 2rem;
			}
			ul {
				padding: 0 0 0 10px;
			}
		}
		.crumbs {
			margin-left: 0;
		}
	}
}
</style>
