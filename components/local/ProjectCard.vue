<template>
	<n-link class="project_card" :to="`/projects/${project.uid}/`">
		<div class="image">
			<ImageItem :image="project.poster" w="450" h="450" />
			<span class="link">Смотреть</span>
		</div>
		<h2 class="title">
			{{ project.title }}
			<Icon name="arrow" size="40px" fill="#F7F7F7" />
		</h2>
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
}
</script>

<style lang="scss" scoped>
$card-size: 300px;
.project_card {
	width: $card-size;
	cursor: pointer;

	display: flex;
	flex-direction: column;

	text-decoration: none;
	color: $white;
	margin: 0 1.5rem 1.5rem 0;

	.image {
		width: inherit;
		height: $card-size;

		user-select: none;
		position: relative;
		overflow: hidden;

		.link {
			position: absolute;
			top: 0;
			right: -40px;
			width: 40px;
			height: 100%;
			background: $secondary;
			z-index: 4;

			display: flex;
			justify-content: center;
			align-items: center;
			transition: all 0.35s ease;

			font-size: 1.5rem;
			transform: rotate(180deg);
			writing-mode: vertical-rl;
			text-orientation: mixed;
		}
		img {
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
	.title {
		margin: 20px 0;
		display: flex;
		justify-content: space-between;
		align-items: center;

		font-weight: 400;
		font-size: 1.5rem;
		&::first-letter {
			text-transform: capitalize;
		}
	}

	&:hover {
		h2 svg {
			fill: $secondary;
		}
		.image .link {
			right: 0;
		}
	}
}
@media (max-width: 1200px) {
	.project_card {
		width: 15rem;
		.image {
			height: 15rem;
		}
	}
}
@media (max-width: 900px) {
	.project_card {
		margin: 1rem 1vw;
		width: 45vw;
		.image {
			height: 45vw;
		}
		.title {
			font-size: 1.8rem;
		}
	}
}
@media (max-width: 600px) {
	.project_card {
		width: 100%;
		.image {
			height: 80vw;
		}
	}
}
</style>
