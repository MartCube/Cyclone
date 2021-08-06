<template>
	<n-link :to="link" class="project_card">
		<div class="image">
			<ImageItem :src="image" :alt="title" />
		</div>
		<h2>{{ title }}</h2>
	</n-link>
</template>

<script>
export default {
	props: {
		project: {
			type: Object,
			required: true,
		},
	},
	computed: {
		image() {
			return this.project.data.main_image.url
		},
		title() {
			return this.project.data.title
		},
		link() {
			return this.$prismic.linkResolver(this.project)
		},
	},
}
</script>

<style lang="scss" scoped>
.project_card {
	width: 300px;
	cursor: pointer;

	display: flex;
	flex-direction: column;

	.image {
		width: inherit;
		height: 300px;

		user-select: none;
		position: relative;
		overflow: hidden;

		.overlay {
			position: absolute;
			top: 0;
			right: 0;
			width: 100%;
			height: 100%;
			z-index: -1;
			background: primary-dark;
			opacity: 0.2;
		}
		picture {
			width: 100%;
			height: 100%;
			z-index: 1;
			position: relative;
			object-fit: cover;
			object-position: center;
			transition: all 0.75s ease;
			&.lazyload,
			&.lazyloading {
				opacity: 0;
			}
			&.lazyloaded {
				opacity: 1;
				transition: all 0.75s ease;
			}
		}
	}
	h2 {
		margin: 20px 40px;
		padding-top: 20px;
		position: relative;
		font-size: 1.8rem;
		// text-transform: capitalize;
		&::first-letter {
			text-transform: capitalize;
		}
		&::after {
			content: '';
			position: absolute;
			width: 10%;
			background-color: primary-dark;
			height: 3px;
			top: 0;
			left: 0;
		}
	}

	&:hover {
		.image {
			img {
				transform: scale(1.1);
			}
			.link {
				opacity: 1;
			}
		}
	}
}

// @media (min-width: 1700px) {
// 	.project_card h2{
// 		font-size: 2rem;
// 	}
// }

@media (max-width: 900px) {
	.project_card {
		width: 40vw;
		.image {
			height: auto;
			.link {
				width: 100%;
				height: 100%;
				padding: 0;

				display: flex;
				justify-content: center;
				align-items: center;
				svg {
					width: 2rem;
					height: 2rem;
				}
			}
		}
		h2 {
			margin: 20px;
			font-size: 1.4rem;
		}
	}
}
@media (max-width: 500px) {
	.projects .grid {
		width: 90%;
	}
	.project_card {
		width: 37vw;
		h2 {
			margin: 20px;
			font-size: 1.1rem;
		}
	}
}
</style>
