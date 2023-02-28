<template>
	<div class="article-grid">
		<div ref="grid" class="grid">
			<ArticleCard v-for="article in currentArticles" :key="article.uid" :article="article" />
		</div>
		<div class="filter">
			<span :class="{ active: $route.query.filter === 'all' }" @click="$router.push({ path: localePath('blog'), query: { filter: 'all' } })">
				{{ $t('words.all') }}
			</span>
			<span v-for="(filter, i) in filters" :key="i" :class="{ active: $route.query.filter === filter.key }" @click="$router.push({ path: localePath('blog'), query: { filter: filter.key } })">
				{{ filter.name }}
			</span>
		</div>
	</div>
</template>

<script>
import { articleList, articleFilteredList } from '~/assets/queries'

export default {
	name: 'ArticleGrid',
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
		const query = this.$route.query.filter && this.$route.query.filter !== 'all' ? articleFilteredList : articleList
		// console.log(query)
		await this.$sanity
			.fetch(query, { lang: this.$i18n.localeProperties.code, activeTag: this.$route.query.filter ?? '' })
			.then((data) => {
				// console.log(data)
				this.currentArticles = data
				// this.gridArticles = this.currentArticles
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
				// {
				// 	name: 'Кровля',
				// 	key: 'roof',
				// },
				// {
				// 	name: 'Каркасное строительство',
				// 	key: 'frame_construction',
				// },
			]
		},
	},
	watch: {
		$route(to, from) {
			this.$fetch()
		},
	},
}
</script>

<style lang="scss" scoped>
.article-grid {
	display: flex;
	width: 100%;
	.grid {
		flex: 1;
		padding-right: 40px;
		border-right: 1px solid $secondary;
		display: flex;
		// justify-content: space-between;
		align-items: flex-start;
		flex-wrap: wrap;
		width: calc(100% - 350px);
		.wrapper {
			width: 100%;
			display: flex;
			justify-content: center;
			.project_card {
				opacity: 0;
			}
		}
	}
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
}

@media (max-width: 1200px) {
	.article-grid {
		.filter {
			width: 30%;
			padding-right: 40px;
			span {
				white-space: initial;
			}
		}
	}
}
@media (max-width: 900px) {
	.article-grid {
		flex-direction: column;
		// margin-left: 30px;
		padding: 0 0 3rem 0;
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
	}
}
</style>
