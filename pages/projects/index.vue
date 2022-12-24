<template>
	<div class="page">
		<template v-if="$fetchState.error && gridProjects !== [] && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<div class="projects">
				<Crumbs :links="breadCrumbs" />
				<Title :value="$t('words.objects')" />
				<ProjectsGrid />
			</div>
		</template>
	</div>
</template>
<script>
import { page } from '~/assets/queries'

export default {
	name: 'ProjectsPage',
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
	},
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		breadCrumbs() {
			return [{ title: this.$t('words.objects') }]
		},
	},
	methods: {
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
