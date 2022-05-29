<template>
	<picture>
		<source v-if="xlw" :data-srcset="xlSrc" :width="xlw" :h="xlh" media="(min-width:1500px)" />
		<source v-if="mw" :data-srcset="mobSrc" :width="mw" :h="mh" media="(max-width:500px)" />
		<img :data-src="src" class="lazyload" :width="w" :height="h" />
	</picture>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

export default {
	name: 'ImageItem',
	props: {
		image: {
			type: String,
			required: true,
		},
		w: {
			type: String,
			default: undefined,
		},
		h: {
			type: String,
			default: undefined,
		},
		mw: {
			type: String,
			default: undefined,
		},
		mh: {
			type: String,
			default: undefined,
		},
		xlw: {
			type: String,
			default: undefined,
		},
		xlh: {
			type: String,
			default: undefined,
		},
		fit: {
			type: String,
			default: 'crop',
		},
		crop: {
			type: String,
			default: 'center',
		},
	},
	computed: {
		src() {
			const builder = imageUrlBuilder(this.$sanity.config)
			return builder.image(this.image).width(this.w).height(this.h).auto('format').fit(this.fit).crop(this.crop)
		},
		mobSrc() {
			const builder = imageUrlBuilder(this.$sanity.config)
			return builder.image(this.image).width(this.mw).height(this.mh).auto('format').fit(this.fit).crop(this.crop)
		},
		xlSrc() {
			const builder = imageUrlBuilder(this.$sanity.config)
			return builder.image(this.image).width(this.xlw).height(this.xlh).auto('format').fit(this.fit).crop(this.crop)
		},
	},
}
</script>

<style lang="scss">
picture {
	width: 100%;
	height: 100%;
	z-index: 3;
	img {
		width: inherit;
		height: inherit;
		position: relative;
		object-fit: inherit;
		object-position: inherit;
		filter: inherit;
		display: block;
		&::before {
			display: none;
		}
		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
}
</style>
