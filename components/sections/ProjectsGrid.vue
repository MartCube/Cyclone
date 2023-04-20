<template>
	<div class="projects-grid">
		<div class="filter">
			<span :class="{ active: $route.query.filter === 'all' }" @click="$router.push({ path: localePath('projects'), query: { filter: 'all' } })">
				{{ $t('words.all') }}
			</span>
			<span v-for="(filter, i) in filters" :key="i" :class="{ active: $route.query.filter === filter.key }" @click="$router.push({ path: localePath('projects'), query: { filter: filter.key } })">
				{{ filter.name }}
			</span>
		</div>

		<div ref="grid" class="grid">
			<ProjectCard v-for="project in gridProjects" :key="project.uid" :project="project" />
		</div>
	</div>
</template>

<script>
import { projectsList, projectsFilteredList } from '~/assets/queries'

export default {
	name: 'ProjectsGrid',
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
		const query = this.$route.query.filter && this.$route.query.filter !== 'all' ? projectsFilteredList : projectsList
		// console.log(query)
		await this.$sanity
			.fetch(query, { lang: this.$i18n.localeProperties.code, activeTag: this.$route.query.filter ?? '' })
			.then((data) => {
				// console.log(data)
				this.gridProjects = data.sort((a, b) => b.order - a.order)
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
					key: 'cassette',
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
	},
	watch: {
		$route(to, from) {
			this.$fetch()
		},
	},
}
</script>

<style lang="scss" scoped>
.projects-grid {
	display: flex;
	flex-wrap: wrap;
	width: 100%;
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

@media (max-width: 1200px) {
	.projects-grid {
		.filter {
			width: auto;
			padding-right: 40px;
		}
	}
}
@media (max-width: 900px) {
	.projects-grid {
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
	}
}
// 1525px mobile version
</style>
