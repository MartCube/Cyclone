<template>
	<main class="page panel">
		<template v-if="$fetchState.error && data !== null && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<PanelIntro :poster="data.poster" :title="data.title" />
			<Crumbs :links="breadCrumbs" />
			<SanityContent :blocks="data.content" class="content" :serializers="serializers" />
		</template>
	</main>
</template>

<script>
import { panel } from '@/plugins/queries'
import VideoSection from '@/components/sections/VideoSection'
import PanelImage from '@/components/items/PanelImage'
import Cta from '@/components/sections/Cta'
import PanelSlider from '@/components/sections/PanelSlider'
import ProjectSlider from '@/components/sections/ProjectSlider'
import Achievements from '@/components/sections/Achievements'
import Benefits from '@/components/sections/Benefits'
// import Partners from '@/components/sections/Partners'
import RichText from '@/components/sections/RichText'
import Faq from '@/components/sections/Faq'
export default {
	name: 'Panel',
	data: () => ({
		data: {
			title: '',
			metaTags: {
				title: '',
				description: '',
				image: '',
			},
		},
		serializers: {
			types: {
				youtube: VideoSection,
				image: PanelImage,
				cta: Cta,
				slider_panel: PanelSlider,
				slider_projects: ProjectSlider,
				counter: Achievements,
				benefits: Benefits,
				// panelImages: Partners,
				richText: RichText,
				faq: Faq,
			},
		},
	}),
	async fetch() {
		this.data = await this.$sanity.fetch(panel, { uid: this.$route.params.panel })
	},
	head() {
		return {
			title: this.data.title,
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
					content: this.data.metaTags.title,
				},
				{
					hid: 'description',
					name: 'description',
					content: this.data.metaTags.description,
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.data.metaTags.title,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: `https://cdn.sanity.io/images/wv1u3p06/production/${this.data.metaTags.image.slice(6)}?auto=format`,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.data.metaTags.description,
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
			return [{ title: this.data.title }]
		},
	},
	fetchOnServer: false,
}
</script>

<style lang="scss">
.panel {
	width: 100%;
	.rich_text {
		h1 {
			border-left: 5px solid $secondary;
			font-size: $h2;
			line-height: 1;
			display: inline-flex;
			padding-left: 1.5rem;
		}
	}
	.content {
		width: 100%;
	}
	.crumbs {
		margin-left: 10%;
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
