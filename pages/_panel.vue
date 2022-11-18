<template>
	<main class="page panel">
		<template v-if="$fetchState.error && !data.title && !$fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending && data.title">
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
import Partners from '@/components/sections/Partners'
import RichText from '@/components/sections/RichText'
import Faq from '@/components/sections/Faq'
import ColorsContent from '@/components/sections/ColorsContent'
import ImageText from '@/components/sections/ImageText'
export default {
	name: 'Panel',
	data: () => ({
		data: {},
		serializers: {
			types: {
				youtube: VideoSection,
				image: PanelImage,
				cta: Cta,
				slider_panel: PanelSlider,
				image_text: ImageText,
				slider_projects: ProjectSlider,
				counter: Achievements,
				benefits: Benefits,
				panelImages: Partners,
				richText: RichText,
				faq: Faq,
				colors_section: ColorsContent,
			},
		},
	}),
	async fetch() {
		await this.$sanity
			.fetch(panel, { uid: this.$route.params.panel })
			.then((fetch) => {
				if (fetch.content) {
					this.data = fetch
					this.$store.dispatch('metaTags', { fetch, type: 'panel' })
				} else {
					throw new Error('panel not found no data')
				}
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('Projects not found', error)
			})
	},
	head() {
		return this.$store.getters.metaHead
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
@media (min-width: 1650px) {
	.panel {
		.crumbs {
			padding: 0 1%;
			max-width: 68%;
			margin: 0 auto;
		}
		// .content {
		// 	max-width: 60%;
		// 	margin: 0 auto;
		// }
	}
}
@media (max-width: 950px) {
	.page {
		.content {
			width: 100%;
			h1 {
				margin-left: 0;
				font-size: 2rem;
			}
			ul {
				padding: 0 0 0 10px;
			}
		}
	}
}
</style>
