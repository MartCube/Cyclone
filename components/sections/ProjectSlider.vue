<template>
	<section class="project-slider">
		<div class="slider">
			<div class="slider-wrapper">
				<div class="content">
					<h2>{{ title }}</h2>
					<SanityContent :blocks="text.richTextContent" />
				</div>
				<template v-for="(project, i) in projects">
					<template v-if="i === projects.length - 1">
						<div :key="project._id" class="project">
							<SanityImage :asset-id="`${project.poster}?w=700&h=600`" />
							<n-link exact :to="'/projects'">Смореть все <Icon name="arrow" size="60px" fill="#B93937" /></n-link>
						</div>
					</template>
					<template v-else>
						<n-link :key="project._id" exact :to="`/projects/${project.uid}`" class="project">
							<h3 class="title">{{ project.title }}</h3>
							<SanityImage :asset-id="`${project.poster}?w=700&h=600`" />
						</n-link>
					</template>
				</template>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'ProjectSlider',
	props: {
		projectItems: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		text: {
			type: Object,
			required: true,
		},
	},
	data: () => ({
		projects: null,
	}),
	mounted() {
		this.getprojects()
	},
	methods: {
		async getprojects() {
			const projectData = this.projectItems.map((el) => {
				return el.projectItem._ref
			})
			// console.log(projectData)
			const query = '*[_id in $ids][0..4]{"uid": uid.current, _id, title, "poster": poster.asset._ref}'
			const params = { ids: projectData }

			await this.$sanity.fetch(query, params).then((data) => {
				// console.log(data)
				this.projects = data
			})
		},
	},
}
</script>

<style lang="scss" scooped>
$article-width: 49%;
$transition: all 0.3s cubic-bezier(0.83, 0, 0.17, 1);

.project-slider {
	padding: $section-padding;
	overflow-x: hidden;
	.button {
		margin-left: 50px;
		margin-top: 3rem;
		display: inline-block;
		color: $white;
		font-size: 1.5rem;
		text-decoration: none;
		padding: 10px 30px;
		border: 2px solid $secondary;
		&:hover {
			color: $secondary;
			text-decoration: none;
		}
	}
	.slider {
		width: 100%;
		// overflow-x: auto;
		// scrollbar-color: $secondary $primary-dark;
		// scrollbar-width: thin;
		// margin-left: 50px;
		// padding-bottom: 1rem;
		// overflow-y: hidden;
		height: auto;
		// &::-webkit-scrollbar {
		// 	width: 5px;
		// 	height: 5px;
		// }
		// &::-webkit-scrollbar-button {
		// 	width: 0px;
		// 	height: 0px;
		// }
		// &::-webkit-scrollbar-thumb {
		// 	background: $secondary;
		// 	border: 5px none $secondary;
		// 	border-radius: 50px;
		// }
		// &::-webkit-scrollbar-thumb:hover {
		// 	background: $gradient-red;
		// }
		// &::-webkit-scrollbar-thumb:active {
		// 	background: $secondary;
		// }
		// &::-webkit-scrollbar-track {
		// 	background: $primary-dark;
		// 	border: 5px none $primary-dark;
		// 	border-radius: 50px;
		// }
		// &::-webkit-scrollbar-track:hover {
		// 	background: $gradient-gray;
		// }
		// &::-webkit-scrollbar-track:active {
		// 	background: $gradient-gray;
		// }
		// &::-webkit-scrollbar-corner {
		// 	background: $gradient-gray;
		// }
		.slider-wrapper {
			display: inline-flex;
			// width: auto;
			justify-content: flex-start;
			flex-wrap: wrap;
			// .project:nth-child(3),
			// .project:nth-child(4),
			// .project:nth-child(5) {
			// 	}
			.project,
			.content {
				// width: $article-width;
				width: 32%;
				margin: 0.5rem;
			}
			.project {
				margin: 0.5rem;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-end;
				overflow: hidden;
				transition: $transition;
				// height: 20vw;
				position: relative;
				.title {
					margin: 0;
					font-size: 2rem;
					position: absolute;
					bottom: 0;
					color: $white;
					left: 0;
					z-index: 2;
					padding: 2px 10px;
					background-color: rgb($primary, 40%);
					&::first-letter {
						color: $secondary;
					}
				}
				img {
					width: 100%;
					transition: $transition;
					height: 100%;
					object-fit: cover;
					filter: drop-shadow(0px 4px 11px rgba(26, 26, 26, 1));
				}
				&:hover {
					box-shadow: 0 0 30px 0px $primary-dark;
					background-color: hsl(0deg 0% 19%);
					img {
						transform: scale(1.03);
					}
				}
				&:last-child {
					img {
						position: relative;
						z-index: 0;
						opacity: 0.5;
					}
					a {
						position: absolute;
						z-index: 2;
						font-weight: bold;
						font-size: 2rem;
						justify-content: center;
						margin-bottom: 0;
						width: 100%;
						height: 100%;
						background-color: rgb($primary-dark, 50%);
						backdrop-filter: blur(50px);
						display: flex;
						align-items: center;
						color: $white;
						&::first-letter {
							text-transform: uppercase;
						}
						svg {
							margin-left: 2rem;
						}
						&:hover {
							background-color: rgb($primary-dark, 50%);
						}
					}
				}
			}
			.content {
				padding-right: 1rem;
				h2 {
					margin-top: 0;
					margin-left: 0;
				}
				p {
					padding: 0;
				}
			}
		}
	}
}
@media (max-width: 600px) {
	.project-slider .content .slider {
		margin-left: 0;
	}
}
</style>