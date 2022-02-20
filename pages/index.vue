<template>
	<main class="page">
		<HomeIntro />
		<SanityContent :blocks="content" :serializers="serializers" />
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
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'index' })
	},
	data: () => ({
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
	head() {
		return {
			title: 'Cyclone',
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://cyclone.kiev.ua/`,
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
					content: `http://cyclone.kiev.ua/`,
				},
			],
		}
	},
}
</script>
