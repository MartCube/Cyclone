<template>
	<div class="VideoText">
		<VideoItem :data="video" />
		<DatocmsStructuredText :data="data.text.value" />
	</div>
</template>

<script>
export default {
	name: 'VideoText',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
	computed: {
		video() {
			return this.data.video.url.split('=').pop()
		},
	},
}
</script>
