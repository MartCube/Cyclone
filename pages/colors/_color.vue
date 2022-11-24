<template>
	<main class="page color">
		<template v-if="$fetchState.error && !data.title && !$fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending && data.title">
			<div class="go_back" @click="$router.back()">
				<div class="arrow">
					<svg width="58" height="24" viewBox="0 0 58 24" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M57.0607 13.0607C57.6464 12.4749 57.6464 11.5251 57.0607 10.9393L47.5147 1.3934C46.9289 0.807611 45.9792 0.807611 45.3934 1.3934C44.8076 1.97919 44.8076 2.92893 45.3934 3.51472L53.8787 12L45.3934 20.4853C44.8076 21.0711 44.8076 22.0208 45.3934 22.6066C45.9792 23.1924 46.9289 23.1924 47.5147 22.6066L57.0607 13.0607ZM0 13.5H56V10.5H0V13.5Z" fill="#B93937" />
					</svg>
				</div>
				<span>Назад</span>
			</div>
			<Crumbs :links="breadCrumbs" />
			<div class="title_wrapper">
				<h1 class="title">{{ data.title }}</h1>
			</div>
			<SanityContent :blocks="data.content" class="content" :serializers="serializers" />
		</template>
	</main>
</template>
<script>
import { colorPage } from '@/plugins/queries'
import RichText from '@/components/sections/RichText'
import ColorsGallery from '@/components/sections/ColorsGallery'

export default {
	name: 'Color',
	data: () => ({
		data: {},
		serializers: {
			types: {
				richText: RichText,
				colors_gallery: ColorsGallery,
			},
		},
	}),
	async fetch() {
		await this.$sanity
			.fetch(colorPage, { uid: this.$route.params.color })
			.then((fetch) => {
				if (fetch.title) {
					console.log(fetch)
					this.data = fetch
					this.$store.dispatch('metaTags', { fetch, type: 'color' })
				} else {
					throw new Error('Colors not found no data')
				}
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('Colors not found', error)
			})
	},
	fetchOnServer: false,
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		breadCrumbs() {
			return [{ title: this.data.title }]
		},
	},
}
</script>
<style lang="scss">
.color {
	.crumbs {
		padding: 50px 10%;
	}
	.title_wrapper {
		padding: 50px 10% 0;
	}
	.go_back {
		padding: 50px 10% 0;
		display: flex;
		.arrow {
			margin-right: 3rem;
			svg {
				transform: scaleX(-1);
			}
		}
		&:hover {
			cursor: pointer;
		}
	}
}

@media (min-width: 1750px) {
	.color {
		.title_wrapper {
			padding: 50px 17% 0;
		}
		.crumbs,
		.go_back {
			padding: 50px 17%;
		}
	}
}
</style>
