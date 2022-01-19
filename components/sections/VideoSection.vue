<template>
	<div class="video_container">
		<div class="video_default_preview" :class="{ playing: playVideo }">
			<SanityImage :asset-id="`${preview.asset._ref}?w=1300`" />
			<div class="play" @click="video">
				<Icon name="play" />
			</div>
			<div v-if="playVideo" class="video">
				<!-- <LazyModalVideo :video="url" /> -->
				<VideoItem :url="url" />
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'VideoSection',
	props: {
		preview: {
			type: Object,
			required: true,
		},
		url: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		playVideo: false,
	}),
	methods: {
		video() {
			this.playVideo = true
		},
	},
}
</script>
<style lang="scss" scoped>
.video_container {
	position: relative;
	width: 100%;
	padding: 2rem 0;
	.video_default_preview {
		width: 100%;
		max-height: 100vh;
		display: flex;
		justify-content: center;
		align-items: center;
		position: relative;
		z-index: 1;
		overflow: hidden;
		&.playing {
			img,
			.play {
				display: none;
			}
		}
		.video {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: center;
			align-items: center;
		}
	}
	img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		object-position: center;
		display: block;
		filter: grayscale(10%) brightness(130%);
		opacity: 0.8;
	}
	.play {
		background: $secondary;
		height: 60px;
		width: 60px;
		display: flex;
		justify-content: center;
		align-items: center;
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		border-radius: 50%;
		cursor: pointer;
		z-index: 3;
		svg {
			fill: $white;
			margin-left: 3px;
			margin-top: -2px;
		}
	}
}
</style>
