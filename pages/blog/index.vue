<template>
	<div class="page">
		<template v-if="$fetchState.error && gridArticles !== [] && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<div class="articles">
				<!-- <Crumbs :links="breadCrumbs" /> -->
				<Title :value="$t('words.blog')" />

				<div ref="grid" class="grid">
					<ArticleCard v-for="article in gridArticles" :key="article.uid" :article="article" />
				</div>
				<div class="filter">
					<span
						:class="{ active: active_filter === 'all' }"
						@click="
							$router.push({ path: localePath('blog'), query: { filter: 'all' } })
							filterUpdate('all')
						">
						{{ $t('words.all') }}
					</span>
					<span
						v-for="(filter, i) in filters"
						:key="i"
						:class="{ active: active_filter === filter.key }"
						@click="
							$router.push({ path: localePath('blog'), query: { filter: filter.key } })
							filterUpdate(filter.key)
						">
						{{ filter.name }}
					</span>
				</div>
			</div>
		</template>
	</div>
</template>
<script>
// import { articleList } from '@/plugins/queries'
import { articleList, page } from '~/assets/queries'

export default {
	name: 'Blog',
	data: () => ({
		currentArticles: [],
		gridArticles: [],
		// filters
		active_filter: 'all',
		// pagination
		current_page: 1,
		page_size: 100,
		total_pages: null,
		prev_page: null,
		next_page: null,
	}),
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

		await this.$sanity
			.fetch(articleList, { lang: this.$i18n.localeProperties.code })
			.then((data) => {
				// console.log(data)
				this.currentArticles = data.sort((a, b) => b.articleDate - a.articleDate)
				this.gridArticles = this.currentArticles
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
		// console.log(data)
		// move this to vuex store
	},
	fetchOnServer: false,
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		filters() {
			return [
				{
					name: 'Теплоизоляция',
					key: 'termal_inslulation',
				},
				{
					name: 'Фасад',
					key: 'facade',
				},
				{
					name: 'Кровля',
					key: 'roof',
				},
				{
					name: 'Каркасное строительство',
					key: 'frame_construction',
				},
			]
		},
		breadCrumbs() {
			return [{ title: this.$t('words.blog') }]
		},
	},
	mounted() {
		if (this.$route.query.filter) {
			this.filterUpdate(this.$route.query.filter)
		} else {
			this.filterUpdate('all')
		}
	},
	methods: {
		// filters
		filterUpdate(filterItem) {
			console.log(filterItem)
			this.active_filter = filterItem

			// route update
			// this.$router.push({
			// 	// preserve existing query and hash if any
			// 	path: '/projects/',
			// 	query: { filter: filterItem },
			// })

			// filter projects

			// default scenario
			if (filterItem === 'all') {
				// this.active_filter = 'all'
				this.gridArticles = this.currentArticles
			} else {
				this.gridArticles = this.currentArticles.filter((article) => article.tags && article.tags.includes(filterItem))
			}

			// wait for rerender
			this.$nextTick()
			// postAnim(this.$refs.grid.children, true)
		},
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
	.filter {
		width: 350px;
		padding-left: 40px;
		height: fit-content;
		position: relative;
		z-index: 6;
		display: flex;
		flex-direction: column;
		span {
			margin: 10px 0;
			color: $white;
			text-transform: capitalize;
			white-space: nowrap;
			font-weight: 500;
			font-size: 1.5rem;
			display: flex;
			align-items: center;
			cursor: pointer;
			transition: all 0.1s ease;
			&.active,
			&:hover {
				color: $secondary;
			}
		}
	}
	.title {
		margin: 5rem 0;
	}
	.crumbs {
		margin-top: 2rem;
	}
	.grid {
		flex: 1;
		padding-right: 40px;
		border-right: 1px solid $secondary;
		display: flex;
		// justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		.wrapper {
			width: 100%;
			display: flex;
			justify-content: center;
			.project_card {
				opacity: 0;
			}
		}
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
