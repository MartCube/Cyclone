<template>
	<section class="partners">
		<h2>{{ title }}</h2>
		<div class="partners-grid">
			<figure v-for="image in imageItem" :key="image._key">
				<SanityImage :asset-id="image.asset._ref" />
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
	padding: 50px 0;
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
			padding: 5px;
			border: 1px solid hsl(0deg, 0%, 22%);
			filter: drop-shadow(0px 4px 20px hsl(0deg 0% 6%));
			display: flex;
			justify-content: center;
			align-items: center;
			margin-right: 10px;
			img {
				margin: 2rem;
				width: initial;
				height: initial;
			}
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
