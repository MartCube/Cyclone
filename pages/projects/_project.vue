<template>
	<div class="page project">
		<Crumbs />

		<template v-if="!$fetchState.pending">
			<div class="intro">
				<div class="text">
					<h2 class="title">{{ project.data.title }}</h2>
					<prismic-rich-text class="description" :field="project.data.description" />
				</div>
				<div class="image">
					<ImageItem :src="project.data.main_image.url" :alt="project.data.title" />
				</div>
			</div>
			<Gallery :data="project.data.gallery" />
		</template>
	</div>
</template>

<script>
export default {
	name: 'Project',
	data: () => ({
		project: {},
	}),
	async fetch() {
		const project = await this.$prismic.api.getByUID('project_post', this.$route.params.project)
		this.project = project
	},
}
</script>

<style lang="scss" scoped>
.project {
	display: flex;
	flex-direction: column;
	padding: 80px 0 80px 40px;
	margin-left: 100px;
	border-left: 1px solid $secondary;
	width: calc(100vw - 200px);
	overflow-x: hidden;
	.intro {
		display: flex;
		width: 100%;
		.text {
			width: 40%;
			padding-right: 2rem;
			display: flex;
			flex-direction: column;

			.title {
				border-left: 5px solid $secondary;
				padding-left: 1rem;
				margin-bottom: 3rem;
				font-size: 2rem;
			}
		}
		.image {
			width: 60%;
			picture {
				width: 100%;
				height: auto;
			}
		}
	}
}
</style>
