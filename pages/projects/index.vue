<template>
	<div class="page">
		<div class="projects">
			<Crumbs />

			<Title value="Объекты" />

			<div class="filter">
				<span :class="{ active: active_filter[0] == null }" @click="filterUpdate('all')">all</span>
				<span v-for="filter in filters" :key="filter" :class="{ active: active_filter[0] == filter }" @click="filterUpdate(filter)">
					{{ filter }}
				</span>
			</div>

			<div class="grid">
				<template v-if="$fetchState.error">error</template>
				<template v-else-if="!$fetchState.pending">
					<ProjectCard v-for="(project, i) in projects" :key="i" :project="project" />
					<div class="wrapper">
						<ButtonItem v-if="total_pages !== current_page">Показать больше</ButtonItem>
					</div>
				</template>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Projects',
	data: () => ({
		projects: [],
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
		const projects = await this.$prismic.api.query([this.$prismic.predicates.at('document.type', 'project_post'), this.$prismic.predicates.at('document.tags', this.active_filter)], {
			orderings: '[document.first_publication_date desc]',
			pageSize: this.page_size,
			page: this.current_page,
		})

		// move this to vuex store
		this.projects = projects.results
		this.total_pages = projects.total_pages
		this.prev_page = projects.prev_page
		this.next_page = projects.next_page
	},
	computed: {
		filters() {
			return ['composite', 'kerama-alum', 'cassete', 'hpl', 'kerama-large', 'kerama-steel', 'ventarock', 'proflist']
		},
	},
	methods: {
		// filters
		filterUpdate(filter) {
			this.active_filter = [filter]
			if (filter === 'all') this.active_filter = []
			// restart results
			this.current_page = 1
			this.next_page = 6
			this.$fetch()
		},
		// pagination
		fetchNext() {
			if (this.next_page) {
				this.current_page++
				this.ScrollToTop()
				this.$fetch()
			}
		},
		fetchBack() {
			if (this.prev_page) {
				this.current_page--
				this.ScrollToTop()
				this.$fetch()
			}
		},
		fetchPage(value) {
			this.current_page = value
			this.ScrollToTop()
			this.$fetch()
		},
		fetchFirst() {
			this.fetchPage(1)
		},
		fetchLast() {
			this.fetchPage(this.total_pages)
		},
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

	border-left: 1px solid $secondary;
	margin-left: 100px;
	padding: 80px 0 0 40px;
	button {
		width: initial;
		padding: 1rem 2rem;
		margin: 80px 0;
	}

	.filter {
		width: 20%;

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
			font-size: 1.3rem;
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
		height: 100%;
		padding-left: 40px;

		display: flex;
		align-items: flex-start;
		flex-wrap: wrap;
		.wrapper {
			width: 100%;
			display: flex;
			justify-content: center;
			padding-right: 20%;
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
		margin-left: 50px;
		padding: 0px 0 0 25px;
		.filter {
			width: 100%;
			padding-right: 40px;
			flex-direction: row;
			flex-wrap: wrap;
			padding-bottom: 40px;
			margin: 2rem 0;
			// border-bottom: 1px solid red;
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
			height: 110px;
			font-size: 3rem;
		}
	}
}
@media (max-width: 600px) {
	.projects {
		margin-left: 30px;
		.grid {
			.wrapper {
				padding-right: 25px;
				justify-content: center;
				button {
					width: auto;
					// padding: 0 1.5rem 1rem 1.5rem;
				}
			}
		}
	}
}
// 1525px mobile version
</style>
