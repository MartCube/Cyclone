<template>
	<main class="page project">
		<!-- <projectIntro :poster="poster" :title="title" /> -->
		<Crumbs :links="breadCrumbs" />
		<div class="content">
			<div class="text">
				<h1>{{ title }}</h1>
				<SanityContent :blocks="description" />
			</div>
			<div v-if="!youtube" class="image">
				<SanityImage :asset-id="`${poster}?w=700`" />
			</div>
			<VideoSection v-if="youtube" :preview="youtube.preview" :url="youtube.url" />
		</div>
	</main>
</template>

<script>
import { project } from '@/plugins/queries'
// import VideoSection from '@/components/sections/VideoSection'
// import ImageItem from '@/components/items/ImageItem'
export default {
	name: 'Project',
	asyncData({ $sanity, params }) {
		return $sanity.fetch(project, {
			uid: params.project,
		})
	},
	data: () => ({}),
	computed: {
		breadCrumbs() {
			return [{ path: '/projects', title: 'Проекты' }, { title: this.title }]
		},
	},
}
</script>

<style lang="scss" scoped>
.page {
	width: 100%;
	display: flex;
	padding: 0 4rem;
	flex-direction: column;
	align-items: flex-start;
	justify-content: flex-start;
	h1 {
		border-left: 5px solid $secondary;
		font-size: $h2;
		line-height: 1;
		display: inline-flex;
		padding-left: 1.5rem;
		margin: 3rem 0 3rem 50px;
	}
	.content {
		// padding: 0 10%;
		display: flex;

		p {
			padding: 0;
		}
		h1 {
			margin-left: 0;
		}
		.text,
		.video_container {
			flex: 0 0 50%;
		}

		// ul {

		// }
	}
}
</style>
