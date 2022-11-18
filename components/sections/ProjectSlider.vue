<template>
	<section class="project-slider">
		<div class="slider">
			<div class="slider-wrapper">
				<div class="content">
					<h2>{{ title }}</h2>
					<SanityContent :blocks="text.richTextContent" />
				</div>
				<template v-for="(project, i) in projectItems">
					<template v-if="i === projectItems.length - 1">
						<div :key="project._id" class="project">
							<ImageItem :image="project.projectItem.poster" w="700" h="600" mobile />
							<n-link v-if="filter === ''" exact :to="localePath({ name: 'projects' })">{{ $t('words.watchAll') }} <Icon name="arrow" size="60px" fill="#B93937" /></n-link>
							<n-link v-else exact :to="localePath({ name: 'projects', query: { filter: `${filter}` } })">{{ $t('words.watchAll') }} <Icon name="arrow" size="60px" fill="#B93937" /></n-link>
						</div>
					</template>
					<template v-else>
						<n-link :key="project._id" exact :to="`${localePath('projects')}${project.projectItem.uid}/`" class="project">
							<h3 class="title">{{ project.projectItem.title }}</h3>
							<ImageItem :image="project.projectItem.poster" w="700" h="600" mobile />
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
		filter: {
			type: String,
			default: '',
		},
		text: {
			type: Object,
			required: true,
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
		height: auto;
		.slider-wrapper {
			display: inline-flex;
			justify-content: flex-start;
			flex-wrap: wrap;
			.project,
			.content {
				width: 32%;
				margin: 0.5%;
			}
			.project {
				margin: 0.5%;
				display: flex;
				flex-direction: column;
				justify-content: flex-end;
				align-items: flex-end;
				overflow: hidden;
				transition: $transition;
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
				picture {
					width: 100%;
					position: relative;
					z-index: 1;
					transition: $transition;
					height: 100%;
					object-fit: cover;
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
@media (min-width: 1650px) {
	.project-slider {
		padding: 50px 17%;
	}
}
@media (max-width: 1250px) {
	.project-slider .slider {
		.slider-wrapper {
			.project,
			.content {
				width: 47%;
			}
		}
	}
}
@media (max-width: 950px) {
	.project-slider .slider {
		.slider-wrapper {
			.project {
				.title,
				&:last-child a {
					font-size: 1.5rem;
				}
			}
		}
	}
}
@media (max-width: 600px) {
	.project-slider .slider {
		.slider-wrapper {
			.project,
			.content {
				width: 100%;
			}
			.project {
				margin-bottom: 2rem;
			}
		}
	}
}
</style>
