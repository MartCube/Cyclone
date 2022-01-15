<template>
	<main class="page panel">
		<PanelIntro :poster="poster" :title="title" />
		<section class="content">
			<Crumbs :links="breadCrumbs" />
			<SanityContent :blocks="content" :serializers="serializers" />
		</section>
	</main>
</template>

<script>
import { panel } from '@/plugins/queries'
import VideoSection from '@/components/sections/VideoSection'
import ImageItem from '@/components/items/ImageItem'
export default {
	name: 'Panel',
	asyncData({ $sanity, params }) {
		return $sanity.fetch(panel, {
			uid: params.panel,
		})
	},
	data: () => ({
		serializers: {
			types: {
				youtube: VideoSection,
				image: ImageItem,
				// 	slider_projects: ProjectSlider,
				// 	counter: Achievements,
				// 	benefits: Benefits,
				// 	gallery: Partners,
				// 	richText: RichText,
				// 	faq: Faq,
			},
		},
	}),
	computed: {
		breadCrumbs() {
			return [{ title: this.title }]
		},
	},
}
</script>

<style lang="scss" scoped>
.page {
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
	}
	.crumbs {
		margin-left: 50px;
	}
}
</style>
