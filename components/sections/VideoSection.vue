<template>
	<section class="video_container">
		<div class="video_default_preview" :class="{ playing: playVideo }">
			<ImageItem v-if="!playVideo && preview !== ''" :image="preview" w="1300" mobile />
			<img v-else :src="`https://i.ytimg.com/vi/${imagePreview}/maxresdefault.jpg`" />
			<div v-if="!playVideo" class="play" @click="video">
				<Icon name="play" />
			</div>
			<div v-if="playVideo" class="video">
				<!-- <LazyModalVideo :video="url" /> -->
				<VideoItem :url="url" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'VideoSection',
	props: {
		preview: {
			type: String,
			default: '',
		},
		url: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		playVideo: false,
	}),
	computed: {
		imagePreview() {
			return this.url.slice(this.url.length - 11, this.url.length)
		},
	},
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
	padding: $section-padding;
	.video_default_preview {
		width: 100%;
		height: 100%;
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
@media (min-width: 1650px) {
	.video_container {
		padding: 50px 17%;
	}
}
</style>
