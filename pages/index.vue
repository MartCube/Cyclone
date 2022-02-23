<template>
	<main class="page">
		<template v-if="$fetchState.error && pageData !== null && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<HomeIntro />
			<SanityContent :blocks="pageData.content" :serializers="serializers" />
		</template>
	</main>
</template>

<script>
import { page } from '@/plugins/queries'
import Cta from '@/components/sections/Cta'
import PanelSlider from '@/components/sections/PanelSlider'
import ProjectSlider from '@/components/sections/ProjectSlider'
import Achievements from '@/components/sections/Achievements'
import Benefits from '@/components/sections/Benefits'
import Partners from '@/components/sections/Partners'
import RichText from '@/components/sections/RichText'
import Faq from '@/components/sections/Faq'

export default {
	data: () => ({
		pageData: {},
		serializers: {
			types: {
				cta: Cta,
				slider_panel: PanelSlider,
				slider_projects: ProjectSlider,
				counter: Achievements,
				benefits: Benefits,
				gallery: Partners,
				richText: RichText,
				faq: Faq,
			},
		},
	}),
	async fetch() {
		await this.$sanity
			.fetch(page, { uid: 'index' })
			.then((fetch) => {
				console.log(fetch)
				this.pageData = {
					content: fetch.content,
				}
				this.$store.dispatch('metaTags', { fetch })
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
	fetchOnServer: false,
	head() {
		return this.$store.getters.metaHead
	},
}
</script>
