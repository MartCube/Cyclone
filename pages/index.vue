<template>
	<div class="page">
		<SanityContent :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { index } from '@/plugins/queries'
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
		return $sanity.fetch(index)
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
	methods: {},
}
</script>
