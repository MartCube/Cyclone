<template>
	<section class="single-image">
		<div class="image">
			<picture>
				<source v-if="mobile" :data-srcset="src + `&dpr=0.75`" media="(max-width:500px)" />
				<img :data-src="src" class="lazyload" />
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
			default: undefined,
		},
		h: {
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
