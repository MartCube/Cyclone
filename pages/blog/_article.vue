<template>
	<main class="page article">
		<template v-if="$fetchState.error && !$fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending && pageData.title">
			<Crumbs :links="breadCrumbs" />
			<div class="intro">
				<h1>{{ pageData.title }}</h1>
				<p class="author">{{ pageData.author }}</p>
				<p class="date">{{ pageData.articleDate }}</p>
				<div class="image">
					<ImageItem :image="pageData.poster" w="700" />
				</div>
			</div>
			<div class="content">
				<SanityContent :blocks="pageData.content" class="content" :serializers="serializers" />
			</div>
		</template>
	</main>
</template>
<script>
import { article } from '@/plugins/queries'
import VideoSection from '@/components/sections/VideoSection'
import PanelImage from '@/components/items/PanelImage'
import Cta from '@/components/sections/Cta'
import PanelSlider from '@/components/sections/PanelSlider'
import ProjectSlider from '@/components/sections/ProjectSlider'
import Achievements from '@/components/sections/Achievements'
import Benefits from '@/components/sections/Benefits'
import Partners from '@/components/sections/Partners'
import RichText from '@/components/sections/RichText'
import Faq from '@/components/sections/Faq'
import ColorsContent from '@/components/sections/ColorsContent'
import ImageText from '@/components/sections/ImageText'
export default {
	name: 'Article',
	data: () => ({
		galleryIndex: null,
		pageData: {},
		serializers: {
			types: {
				youtube: VideoSection,
				image: PanelImage,
				cta: Cta,
				slider_panel: PanelSlider,
				image_text: ImageText,
				slider_projects: ProjectSlider,
				counter: Achievements,
				benefits: Benefits,
				articleImages: Partners,
				richText: RichText,
				faq: Faq,
				colors_section: ColorsContent,
			},
		},
	}),
	async fetch() {
		console.log(this.$route.params.article)
		await this.$sanity
			.fetch(article, { uid: this.$route.params.article })
			.then((fetch) => {
				if (fetch.title) {
					console.log(fetch)
					this.pageData = fetch
					this.$store.dispatch('metaTags', { fetch, type: 'article' })
				} else {
					throw new Error('Article not found no data')
				}
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('Article not found', error)
			})
	},
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		breadCrumbs() {
			return [{ path: `${this.localePath('blog')}`, title: this.$t('words.blog') }, { title: this.pageData.title }]
		},
		date() {
			const date = new Date()
			const options = {
				era: 'long',
				year: 'numeric',
				month: 'long',
				day: 'numeric',
				weekday: 'long',
				timezone: 'UTC',
				hour: 'numeric',
				minute: 'numeric',
				second: 'numeric',
			}
			return date.toLocaleString('ru', options)
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
	fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
.article {
	width: 100%;
	display: flex;
	// padding: 0 4rem;
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
		// display: flex;
		width: 100%;
		// justify-content: space-between;
		// margin-bottom: 10px;
		p {
			padding: 0;
		}
		h1 {
			margin-left: 0;
		}
		.image {
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
			flex: 0 0 50%;
		}
	}
	.gallery {
		margin-bottom: 3rem;
		width: 100%;
		figure {
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
	.video_container {
		padding: 0;
	}
	.crumbs {
		margin: 3rem 10%;
	}
}
@media (min-width: 1750px) {
	.article {
		// padding: 0 17%;
		.content {
			.text,
			.image {
				flex: 0 0 50%;
			}
		}
	}
}

@media (max-width: 950px) {
	.article {
		// padding: 0 2rem;
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
