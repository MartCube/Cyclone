<template>
	<section class="partners">
		<div class="content">
			<h2 class="title">title</h2>
			<div class="partners-grid">
				<DatocmsImage v-for="image in data" :key="image.responsiveImage.src" :data="image.responsiveImage" />
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Partners',
	props: {
		data: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.partners {
	padding-top: 50px;
	padding-bottom: 50px;
	background-color: $primary-light;
	&::after {
		display: none;
	}
	.partners-grid {
		display: flex;
		width: 100%;
		align-items: center;
		flex-wrap: wrap;
		picture {
			margin: 2rem;
			width: initial;
			height: initial;
		}
	}
}

@media (max-width: 600px) {
	.partners {
		.partners-grid {
			picture {
				margin: 1rem;
				width: 5rem;
				height: auto;
			}
		}
	}
}
</style>
