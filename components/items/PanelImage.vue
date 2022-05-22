<template>
	<section class="single-image">
		<div class="image">
			<picture>
				<source v-if="mobile" :data-srcset="mobSrc + `&dpr=0.75`" mw="500" media="(max-width:500px)" />
				<img :data-src="src" class="lazyload" :w="w" />
			</picture>
		</div>
	</section>
</template>

<script>
import imageUrlBuilder from '@sanity/image-url'

export default {
	name: 'PanelImage',
	props: {
		image: {
			type: String,
			required: true,
		},
		mobile: {
			type: Boolean,
			default: false,
		},
		w: {
			type: String,
			default: '2000',
		},
		h: {
			type: String,
			default: undefined,
		},
		mw: {
			type: String,
			default: '500',
		},
		mh: {
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
			return builder.image(this.image).width('2000').height(this.h).auto('format').fit(this.fit).crop(this.crop)
		},
		mobSrc() {
			const builder = imageUrlBuilder(this.$sanity.config)
			return builder.image(this.image).width(this.mw).height(this.mh).auto('format').fit(this.fit).crop(this.crop)
		},
	},
}
</script>

<style lang="scss">
.single-image {
	position: relative;
	width: 100%;
	padding: $section-padding;
	margin-bottom: 10px;
}
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
