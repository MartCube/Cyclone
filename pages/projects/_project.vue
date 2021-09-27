<template>
	<div class="page project">
		<Crumbs />

		<template v-if="!$fetchState.pending">
			<div class="intro">
				<div class="text">
					<h2 class="title">{{ project.data.title }}</h2>
					<prismic-rich-text class="description" :field="project.data.description" />
				</div>
				<div class="video">
					<div class="play" @click="OpenModal">
						<Icon name="play" fill="white" />
					</div>
					<ImageItem :data="project.data.main_image" />
					<ModalVideo :data="project.data.video_link" />
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
	methods: {
		OpenModal() {
			this.$store.dispatch('bindModalVideo', true)
		},
	},
}
</script>

<style lang="scss" scoped>
.project {
	display: flex;
	flex-direction: column;
	padding: 80px 0 0 40px;
	margin-left: 100px;
	border-left: 1px solid $secondary;
	width: calc(100vw - 200px);
	overflow-x: hidden;
	.intro {
		display: flex;
		width: 100%;
		justify-content: space-between;
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
		.video {
			width: 50%;
			max-height: 450px;
			position: relative;
			.play {
				z-index: 4;
				display: flex;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);

				height: min-content;
				border-radius: 50%;
				padding: 20px;
				background: $secondary;
				cursor: pointer;
			}

			.image {
				width: 50%;
				max-height: 450px;
				picture {
					width: 100%;
					height: 100%;
					object-fit: cover;
					img {
						object-position: top;
					}
				}
			}
		}
	}
}
@media (max-width: 900px) {
	.project {
		margin-left: 50px;
		padding: 0px 25px;
		width: calc(100% - 50px);
		.intro {
			.text {
				width: 60%;
			}
			.image {
				width: 40%;
			}
		}
	}
}
@media (max-width: 700px) {
	.project {
		padding: 0;
		.crumbs {
			margin-left: 2rem;
		}
		.intro {
			flex-direction: column;
			.text {
				width: 100%;
				order: 2;
				padding: 2rem;
			}
			.image {
				order: 1;
				width: 100%;
			}
		}
	}
}
@media (max-width: 600px) {
	.project {
		margin-left: 30px;
		width: calc(100% - 30px);
	}
}
</style>
