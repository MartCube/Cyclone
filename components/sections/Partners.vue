<template>
	<section class="partners">
		<h2>{{ title }}</h2>
		<div class="partners-grid">
			<figure v-for="image in imageItem" :key="image._key">
				<ImageItem :image="image.image" mobile />
			</figure>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Partners',
	props: {
		imageItem: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.partners {
	margin-top: 2rem;
	padding: $section-padding;
	background-color: $primary-light;
	&::after {
		display: none;
	}
	.partners-grid {
		display: flex;
		width: -webkit-fill-available;
		align-items: center;
		flex-wrap: wrap;
		margin-left: 50px;
		figure {
			height: 200px;
			width: auto;
			border: 1px solid hsl(0deg, 0%, 22%);
			filter: drop-shadow(0px 4px 20px hsl(0deg 0% 6%));
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 10px;
			padding: 2rem;
			img {
				width: initial;
				height: initial;
			}
		}
	}
}

@media (max-width: 950px) {
	.partners {
		padding: 50px 10%;
		.partners-grid {
			margin-left: 0;
			figure {
				width: auto;
				height: 150px;
				padding: 1rem;
				picture {
					width: 100%;
					height: auto;
					object-fit: contain;
				}
			}
		}
	}
}
@media (max-width: 450px) {
	.partners {
		.partners-grid {
			margin-left: 0;
			figure {
				width: auto;
				height: 70px;
				picture {
					width: 100%;
					// height: 100%;
					object-fit: contain;
				}
			}
		}
	}
}
</style>
