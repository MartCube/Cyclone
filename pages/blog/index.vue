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
			</div>
		</template>
	</div>
</template>
<script>
// import { articleList } from '@/plugins/queries'
import { articleList, page } from '@/plugins/queries'

export default {
	name: 'Blog',
	data: () => ({
		gridArticles: [],
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
				this.gridArticles = data
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
}
</script>
<style lang="scss" scoped>
.articles {
	display: flex;
	flex-wrap: wrap;
	padding: 0 4rem;
	.filter {
		width: 250px;
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
		padding-left: 40px;
		border-left: 1px solid $secondary;
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
</style>