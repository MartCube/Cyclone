<template>
	<div class="page">
		<div class="projects">
			<Crumbs :links="breadCrumbs" />
			<Title value="Объекты" />

			<div class="filter">
				<span :class="{ active: active_filter[0] == null }" @click="filterUpdate('all')"> Все </span>
				<span v-for="(filter, i) in filters" :key="i" :class="{ active: active_filter == filter.key }" @click="filterUpdate(filter.key)">
					{{ filter.name }}
				</span>
			</div>

			<div ref="grid" class="grid">
				<ProjectCard v-for="project in gridProjects" :key="project.uid" :project="project" />
			</div>
		</div>
	</div>
</template>
<script>
import { projectsList, page } from '@/plugins/queries'
import { postAnim } from '~/assets/anime'

export default {
	name: 'Projects',
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'projects' })
	},
	data: () => ({
		currentProjects: [],
		gridProjects: [],
		// filters
		active_filter: [],
		// pagination
		current_page: 1,
		page_size: 6,
		total_pages: null,
		prev_page: null,
		next_page: null,
	}),
	async fetch() {
		const data = await this.$sanity.fetch(projectsList)
		// console.log(data)
		// move this to vuex store
		this.currentProjects = data
		this.gridProjects = data
	},
	head() {
		return {
			title: this.metaTags.title,
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://cyclone.kiev.ua/projects/`,
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
		filters() {
			return [
				{
					name: 'Composite',
					key: 'composite',
				},
				{
					name: 'Kerama-alum',
					key: 'kerama_alum',
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
					name: 'Kerama-steel',
					key: 'kerama_steel',
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
			return [{ title: 'Объекты' }]
		},
	},
	watch: {
		async gridProjects(newValue, oldValue) {
			await this.$nextTick()
			postAnim(this.$refs.grid.children, true)
		},
	},
	methods: {
		// filters
		filterUpdate(filterItem) {
			console.log(filterItem)
			this.active_filter = filterItem
			const filteredProjects = this.currentProjects.filter((project) => {
				if (project.tags.includes(filterItem)) {
					return project
				}
				return false
			})
			this.gridProjects = filteredProjects
			if (filterItem === 'all') {
				this.active_filter = []
				this.gridProjects = this.currentProjects
			}
			postAnim(this.$refs.grid.children, true)
		},
		// pagination
		// fetchNext() {
		// 	if (this.next_page) {
		// 		this.current_page++
		// 		this.ScrollToTop()
		// 		this.$fetch()
		// 	}
		// },
		// fetchBack() {
		// 	if (this.prev_page) {
		// 		this.current_page--
		// 		this.ScrollToTop()
		// 		this.$fetch()
		// 	}
		// },
		// fetchPage(value) {
		// 	this.current_page = value
		// 	this.ScrollToTop()
		// 	this.$fetch()
		// },
		// fetchFirst() {
		// 	this.fetchPage(1)
		// },
		// fetchLast() {
		// 	this.fetchPage(this.total_pages)
		// },
		ScrollToTop() {
			window.scrollTo({ top: 0, behavior: 'smooth' })
		},
	},
}
</script>

<style lang="scss" scoped>
.page {
	min-height: initial;
}
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
			.wrapper {
				justify-content: flex-start;
			}
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
