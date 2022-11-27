<template>
	<section class="colors_content_section">
		<h2>{{ title }}</h2>
		<div class="colors_gallery_wrapper">
			<figure v-for="(image, y) in colorsGallery" :key="y" @click="galleryIndex = y">
				<ImageItem :image="image.image" w="500" xlw="800" />
			</figure>
		</div>
		<div class="colors_gallery_content">
			<p class="description">{{ description }}</p>
			<nuxt-link :to="`/colors/${colorsPage.uid}/`">{{ $t('words.more') }}</nuxt-link>
		</div>
	</section>
</template>
<script>
export default {
	name: 'ColorsContent',
	props: {
		colorsPage: {
			type: Object,
			required: true,
		},
		colorsGallery: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>
<style lang="scss" scooped>
.colors_content_section {
	padding: 50px 10%;
	display: flex;
	flex-wrap: wrap;
	h2 {
		width: 100%;
	}
	.colors_gallery_wrapper {
		display: grid;
		grid-gap: 10px;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(2, 15vh);
		width: 70%;
		figure {
			overflow: hidden;
			picture {
				object-fit: cover;
				object-position: center;
			}
			&:nth-child(1) {
				grid-column: 1 / 3;
				grid-row: 1 / 3;
			}
			&:nth-child(2) {
				grid-column: 3;
				grid-row: 1/2;
			}
			&:nth-child(3) {
				grid-column: 4;
				grid-row: 1/2;
			}
			&:nth-child(4) {
				grid-column: 3;
				grid-row: 2/3;
			}
			&:nth-child(5) {
				grid-column: 4;
				grid-row: 2/3;
			}
			// &:nth-child(6) {
			// 	grid-column: 2;
			// 	grid-row: 4;
			// }
		}
	}
	.colors_gallery_content {
		width: 30%;
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		a {
			font-weight: bold;
		}
	}
}
@media (min-width: 1750px) {
	.colors_content_section {
		padding: 50px 17%;
		.colors_gallery_content {
			justify-content: flex-start;
			a {
				margin-top: 2rem;
			}
		}
	}
}
@media (max-width: 950px) {
	.colors_content_section {
		.colors_gallery_wrapper {
			width: 100%;
		}
		.colors_gallery_content {
			width: 100%;
			margin-top: 3rem;
			padding: 0;
		}
	}
}
</style>
