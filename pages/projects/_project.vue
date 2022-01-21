<template>
	<main class="page project">
		<Crumbs :links="breadCrumbs" />
		<div class="content">
			<div class="text">
				<h1>{{ title }}</h1>
				<SanityContent :blocks="description" />
			</div>
			<VideoSection v-if="youtube" :preview="youtube.preview" :url="youtube.url" />
			<div v-else class="image">
				<!-- <SanityImage :asset-id="`${poster}?w=700`" /> -->
				<ImageItem :image="poster" w="700" />
			</div>
		</div>
		<div class="gallery">
			<CoolLightBox :items="galleryImages(gallery)" :index="galleryIndex" @close="galleryIndex = null"></CoolLightBox>
			<div class="wrapper">
				<figure v-for="(image, y) in gallery" :key="y" @click="galleryIndex = y">
					<ImageItem :image="image" w="500" />
				</figure>
			</div>
		</div>
	</main>
</template>

<script>
import CoolLightBox from 'vue-cool-lightbox'
import { project } from '@/plugins/queries'
import 'vue-cool-lightbox/dist/vue-cool-lightbox.min.css'

export default {
	name: 'Project',
	components: {
		CoolLightBox,
	},
	asyncData({ $sanity, params, error }) {
		try {
			return $sanity.fetch(project, {
				uid: params.project,
			})
		} catch {
			error({ statusCode: 404, message: 'Post not found' })
		}
	},
	data: () => ({
		galleryIndex: null,
		youtube: undefined,
		description: undefined,
	}),
	head() {
		if (this.metaTags)
			return {
				title: this.title,
				link: [
					{
						hid: 'canonical',
						rel: 'canonical',
						href: `https://cyclone.kiev.ua/${this.$route.params.project}/`,
					},
				],
				meta: [
					{
						hid: 'title',
						name: 'title',
						content: this.metaTags.title,
					},
					{
						hid: 'description',
						name: 'description',
						content: this.metaTags.description,
					},
					{
						hid: 'og:title',
						name: 'og:title',
						content: this.metaTags.title,
					},
					{
						hid: 'og:image',
						property: 'og:image',
						content: `https://cdn.sanity.io/images/wv1u3p06/production/${this.metaTags.image.slice(6)}?auto=format`,
					},
					{
						hid: 'og:description',
						property: 'og:description',
						content: this.metaTags.description,
					},
					{
						hid: 'og:url',
						property: 'og:url',
						content: `http://cyclone.kiev.ua/${this.$route.params.panel}/`,
					},
				],
			}
	},
	computed: {
		breadCrumbs() {
			return [{ path: '/projects/', title: 'Проекты' }, { title: this.title }]
		},
	},
	methods: {
		galleryImages(gallery) {
			const imagesUrls = gallery.map((el) => {
				return `https://cdn.sanity.io/images/wv1u3p06/production/${el.slice(6, el.length - 4)}.jpg`
			})
			return imagesUrls
		},
	},
}
</script>

<style lang="scss" scoped>
.project {
	width: 100%;
	display: flex;
	padding: 0 4rem;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	h1 {
		border-left: 5px solid $secondary;
		font-size: $h2;
		line-height: 1;
		display: inline-flex;
		padding-left: 1.5rem;
		margin: 3rem 0 3rem 50px;
	}
	.content {
		display: flex;
		width: 100%;
		p {
			padding: 0;
		}
		h1 {
			margin-left: 0;
		}
		.image {
			// width: 100%;
			picture {
				height: 100%;
				width: 100%;
			}
		}
		.text {
			padding-right: 2rem;
		}
		.text,
		.image,
		.video_container {
			flex: 0 0 45vw;
		}
	}
	.gallery {
		margin-bottom: 3rem;
		.wrapper {
			margin-top: 10px;
			column-count: 3;
			column-gap: 10px;
			width: 100%;
			figure {
				width: 29.75vw;
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
	.video_container {
		padding: 0;
	}
	.crumbs {
		margin: 3rem 0;
	}
}
@media (max-width: 950px) {
	.project {
		padding: 0 2rem;
		.wrapper {
			width: 100%;
		}
		.content {
			flex: 0 0 100%;
			flex-wrap: wrap;
			.text {
				padding-right: 0;
				margin-bottom: 3rem;
				order: 2;
			}
			.image,
			.video_container {
				order: 1;
			}
			.text,
			.image,
			.video_container {
				flex: 0 0 100%;
			}
		}
		.gallery {
			.wrapper {
				column-count: 1;
				figure {
					width: 90vw;
				}
			}
		}
	}
}
</style>
