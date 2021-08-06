<template>
	<div class="page project">
		<template v-if="!$fetchState.pending">
			<div class="intro">
				<div class="text">
					<h2 class="title">{{ project.data.title }}</h2>
					<prismic-rich-text class="description" :field="project.data.description" />
				</div>
				<ImageItem :src="project.data.main_image.url" :alt="project.data.title" />
			</div>
			<div class="gallery"></div>
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
	padding: 180px 40px;
	margin-left: 100px;
	.intro {
		display: flex;

		.text {
			min-width: 50%;

			display: flex;
			flex-direction: column;

			.title {
				border-left: 1px solid red;
			}
		}
	}
}
</style>
