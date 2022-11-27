<template>
	<section class="partners">
		<h2>{{ title }}</h2>
		<template v-if="galleryProperty && (galleryProperty[0].value || galleryProperty) === 'partners'">
			<div class="partners-grid">
				<figure v-for="image in imageItem" :key="image._key">
					<ImageItem :image="image.image" h="150" mobile />
				</figure>
			</div>
		</template>
		<template v-else>
			<div class="panel-gallery">
				<CoolLightBox :items="galleryImages(imageItem)" :index="galleryIndex" @close="galleryIndex = null"></CoolLightBox>
				<masonry :cols="{ default: 3, 600: 1 }" :gutter="{ default: '10px' }">
					<figure v-for="(image, y) in imageItem" :key="y" @click="galleryIndex = y">
						<ImageItem :image="image.image" w="500" xlw="800" />
					</figure>
				</masonry>
			</div>
		</template>
	</section>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	name: 'Partners',
	components: {
		CoolLightBox,
	},
	props: {
		imageItem: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		galleryProperty: {
			type: String,
			default: 'partners',
			required: true,
		},
	},
	data: () => ({
		galleryIndex: null,
	}),
	methods: {
		galleryImages(gallery) {
			const imagesUrls = gallery.map((el) => {
				return `https://cdn.sanity.io/images/wv1u3p06/production/${el.image.slice(6, el.image.length - 4)}.jpg`
			})
			return imagesUrls
		},
	},
}
</script>

<style lang="scss" scooped>
.partners {
	margin-top: 2rem;
	padding: $section-padding;
	background-color: $primary-light;
	&::after {
		display: none;
	}
	.partners-grid {
		display: flex;
		width: -webkit-fill-available;
		align-items: center;
		flex-wrap: wrap;
		// margin-left: 50px;
		figure {
			height: 10vw;
			width: auto;
			border: 1px solid hsl(0deg, 0%, 22%);
			display: flex;
			justify-content: center;
			align-items: center;
			margin: 0 10px 10px 0;
			padding: 2rem;
			picture {
				// display: contents;
				width: 100%;
				height: 100%;
			}
		}
	}
	.panel-gallery {
		margin-bottom: 3rem;
		figure {
			width: 25.9vw;
			margin-bottom: 10px;
			overflow: hidden;
			img {
				width: 100%;
				height: 100%;
				object-fit: cover;
				display: flex;
				transition: transform 0.3s linear;
			}
			&:hover {
				cursor: pointer;
				img {
					transform: scale(1.02);
				}
			}
		}
	}
}
@media (min-width: 1750px) {
	.partners {
		padding: 50px 17%;
		.partners-grid {
			margin-left: 0;
			figure {
				height: 150px;
				picture {
					width: 100%;
					height: 100%;
				}
			}
		}
		.panel-gallery .wrapper figure {
			width: 21.5vw;
		}
	}
}
@media (max-width: 950px) {
	.partners {
		padding: 50px 10%;
		.partners-grid {
			margin-left: 0;
			figure {
				width: auto;
				height: 90px;
				padding: 1rem;
				picture {
					width: 100%;
					height: 100%;
					object-fit: contain;
				}
			}
		}
		.panel-gallery {
			.wrapper {
				column-count: 1;
				figure {
					width: 80vw;
				}
			}
		}
	}
}
@media (max-width: 450px) {
	.partners {
		.partners-grid {
			margin-left: 0;
			figure {
				width: auto;
				height: 70px;
			}
		}
	}
}
</style>
