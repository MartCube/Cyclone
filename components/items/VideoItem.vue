<template>
	<div class="video_wrapper">
		<client-only>
			<!-- <LazyYoutube :src="url" autoplay="true" /> -->
			<iframe :src="url" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
		</client-only>
	</div>
</template>

<script>
export default {
	name: 'VideoItem',

	props: {
		url: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss">
.video_wrapper {
	width: 100%;
	height: 100%;
}

iframe {
	max-width: 100% !important;
	width: 100%;
	height: 100%;
}

@media (max-width: 900px) {
	.video_wrapper {
		width: 100%;
	}
}
</style>
