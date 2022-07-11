<template>
	<section class="colors_gallery_section">
		<h3>{{ title }}</h3>
		<div class="colors_gallery">
			<CoolLightBox :effect="'fade'" :items="galleryImages(colorsGallery)" :index="galleryIndex" @close="galleryIndex = null"></CoolLightBox>
			<div class="colors_gallery_wrapper">
				<figure v-for="(image, y) in colorsGallery" :key="y" @click="galleryIndex = y">
					<ImageItem :image="image.image" w="100" h="100" />
					<div class="title">
						{{ image.name }}
					</div>
				</figure>
			</div>
		</div>
	</section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	name: 'ColorsGallery',
	components: {
		CoolLightBox,
	},
	props: {
		colorsGallery: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
	data: () => ({
		galleryIndex: null,
	}),
	methods: {
		galleryImages(gallery) {
			const imagesUrls = gallery.map((el) => {
				return {
					src: `https://cdn.sanity.io/images/wv1u3p06/production/${el.image.slice(6, el.image.length - 4)}.jpg`,
					title: el.name,
				}
			})
			return imagesUrls
		},
	},
}
</script>

<style lang="scss" scooped>
.colors_gallery_section {
	padding: 50px 10%;
	.colors_gallery_wrapper {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
		justify-self: space-between;
		// grid-template-columns: repeat(10, 1fr);
		// grid-auto-rows: auto;
		// grid-gap: 20px;
		figure {
			overflow: hidden;
			position: relative;
			cursor: pointer;
			margin: 5px;
			picture {
				border-radius: 0.6rem;
				overflow: hidden;
				display: block;
			}
			&:hover {
				.title {
					opacity: 1;
				}
			}
			.title {
				position: absolute;
				width: 102%;
				height: 102%;
				font-weight: bold;
				background-color: hsl(0, 0%, 16%);
				top: -1px;
				left: -1px;
				bottom: -1px;
				right: -1px;
				display: flex;
				justify-content: center;
				align-items: center;
				z-index: 2;
				opacity: 0;
				transition: opacity 0.5s cubic-bezier(0.075, 0.82, 0.165, 1);
			}
			picture {
				height: 5rem;
			}
		}
	}
}

@media (min-width: 1550px) {
	.colors_gallery_section {
		padding: 50px 17%;
		.colors_gallery_wrapper {
			grid-template-columns: repeat(14, 1fr);
			grid-gap: 10px;
		}
	}
}
@media (max-width: 950px) {
	.colors_gallery_section {
		.colors_gallery_wrapper {
			grid-template-columns: repeat(4, 1fr);
			grid-gap: 10px;
			figure {
				margin-bottom: 1rem;
				.title {
					position: initial;
					opacity: 1;
					width: initial;
					height: initial;
					margin-top: 0.5rem;
				}
			}
		}
	}
}
</style>
