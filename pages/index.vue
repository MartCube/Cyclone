<template>
	<div class="page">
		<SanityContent :blocks="content" :serializers="serializers" />
	</div>
</template>

<script>
import { index } from '@/plugins/queries'
import Cta from '@/components/sections/Cta'
import PanelSlider from '@/components/sections/PanelSlider'

export default {
	asyncData({ $sanity }) {
		return $sanity.fetch(index)
	},
	data: () => ({
		serializers: {
			types: {
				cta: Cta,
				slider_panel: PanelSlider,
			},
		},
	}),
	methods: {},
}
</script>
