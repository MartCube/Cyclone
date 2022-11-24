<template>
	<div class="page">
		<template v-if="$fetchState.error && gridProjects !== [] && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<div class="projects">
				<Crumbs :links="breadCrumbs" />
				<Title :value="$t('words.objects')" />

				<div class="filter">
					<span
						:class="{ active: active_filter === 'all' }"
						@click="
							$router.push({ path: localePath('projects'), query: { filter: 'all' } })
							filterUpdate('all')
						">
						{{ $t('words.all') }}
					</span>
					<span
						v-for="(filter, i) in filters"
						:key="i"
						:class="{ active: active_filter === filter.key }"
						@click="
							$router.push({ path: localePath('projects'), query: { filter: filter.key } })
							filterUpdate(filter.key)
						">
						{{ filter.name }}
					</span>
				</div>

				<div ref="grid" class="grid">
					<ProjectCard v-for="project in gridProjects" :key="project.uid" :project="project" />
				</div>
			</div>
		</template>
	</div>
</template>
<script>
import { projectsList, page } from '@/plugins/queries'
// import { postAnim } from '~/assets/anime'

export default {
	name: 'ProjectsPage',
	data: () => ({
		currentProjects: [],
		gridProjects: [],
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
		await this.$sanity
			.fetch(page, { uid: this.$route.fullPath.split('/').at(-2) })
			.then((fetch) => {
				// console.log(fetch)
				this.$store.dispatch('metaTags', { fetch, type: 'projects' })
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('Projects not found', error)
			})

		await this.$sanity
			.fetch(projectsList, { lang: this.$i18n.localeProperties.code })
			.then((data) => {
				// console.log(data)
				this.currentProjects = data.sort((a, b) => b.order - a.order)
				this.gridProjects = this.currentProjects
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('Projects not found', error)
			})
		// console.log(data)
		// move this to vuex store
	},
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		filters() {
			return [
				{
					name: 'Composite',
					key: 'composite',
				},
				{
					name: 'Kerama',
					key: 'kerama',
				},
				{
					name: 'Cassete',
					key: 'cassete',
				},
				{
					name: 'Hpl',
					key: 'hpl',
				},
				{
					name: 'Kerama-large',
					key: 'kerama_large',
				},
				{
					name: 'Ventarock',
					key: 'ventarock',
				},
				{
					name: 'Proflist',
					key: 'proflist',
				},
			]
		},
		breadCrumbs() {
			return [{ title: this.$t('words.objects') }]
		},
	},
	// watch(){
	// 	$route(newQuery, oldQuery) {
	// 		// console.log('new: ' + newQuery.filter, 'old: ' + oldQuery.filter)
	// 		// if (newQuery !== undefined) {
	// 		// 	console.log(newQuery.filter)
	// 		// 	// this.filterUpdate(newQuery.filter)
	// 		// } else {
	// 		// 	this.filterUpdate('all')
	// 		// }
	// 	},
	// },
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
				this.gridProjects = this.currentProjects
			} else {
				this.gridProjects = this.currentProjects.filter((project) => project.tags && project.tags.includes(filterItem))
			}

			// wait for rerender
			this.$nextTick()
			// postAnim(this.$refs.grid.children, true)
		},
		ScrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		},
	},
	fetchOnServer: false,
}
</script>

<style lang="scss" scoped>
.projects {
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
@media (min-width: 1750px) {
	.projects {
		padding: 0 17%;
	}
}
@media (max-width: 1200px) {
	.projects {
		.filter {
			width: auto;
			padding-right: 40px;
		}
	}
}
@media (max-width: 900px) {
	.projects {
		// margin-left: 30px;
		padding: 0px 1rem 3rem 1rem;
		.filter {
			width: 100%;
			padding-right: 40px;
			flex-direction: row;
			flex-wrap: wrap;
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
			padding-left: 0;
			border-left: none;
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
// 1525px mobile version
</style>
