<template>
	<div class="page">
		<template v-if="$fetchState.error && gridArticles !== [] && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<div class="articles">
				<!-- <Crumbs :links="breadCrumbs" /> -->
				<Title :value="$t('words.blog')" />

				<ArticleGrid />
			</div>
		</template>
	</div>
</template>
<script>
// import { articleList } from '@/plugins/queries'
import { page } from '~/assets/queries'

export default {
	name: 'Blog',
	async fetch() {
		if (this.$route) {
			await this.$sanity
				.fetch(page, { uid: this.$route.fullPath.split('/').at(-2) })
				.then((fetch) => {
					// console.log(fetch)
					this.$store.dispatch('metaTags', { fetch, type: 'blog' })
				})
				.catch((error) => {
					console.log(error)
					// set status code on server and
					if (process.server) {
						this.$nuxt.context.res.statusCode = 404
					}
					// use throw new Error()
					throw new Error('Articles not found', error)
				})
		}
	},
	fetchOnServer: false,
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		breadCrumbs() {
			return [{ title: this.$t('words.blog') }]
		},
	},
	methods: {
		ScrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		},
	},
}
</script>
<style lang="scss" scoped>
.articles {
	display: flex;
	flex-wrap: wrap;
	padding: 0 4rem;

	.title {
		margin: 5rem 0;
	}
	.crumbs {
		margin-top: 2rem;
	}
}
@media (min-width: 1750px) {
	.articles {
		padding: 0 17%;
	}
}
@media (max-width: 1200px) {
	.articles {
		.filter {
			width: auto;
			padding-right: 40px;
		}
	}
}
@media (max-width: 900px) {
	.articles {
		// margin-left: 30px;
		padding: 0px 1rem 3rem 1rem;
		.filter {
			width: 100%;
			padding: 0;
			flex-direction: row;
			flex-wrap: wrap;
			order: 1;
			padding-bottom: 40px;
			margin-bottom: 4rem;
			border-bottom: 1px solid red;
			span {
				margin: 0px 20px 5px 0;
			}
		}
		.grid {
			flex: initial;
			width: 100%;
			order: 2;
			padding-right: 0;
			border-right: none;
			justify-content: space-between;
		}
		.title {
			// height: 110px;
			font-size: 3rem;
		}
		button {
			width: auto;
			padding: 0 1.5rem 1rem 1.5rem;
		}
	}
}
</style>
