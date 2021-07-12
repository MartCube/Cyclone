<template>
	<section class="partners">
		<div class="content">
			<h2 class="title">{{ data.primary.title }}</h2>
			<div class="partners-grid">
				<ImageItem v-for="img in data.items" :key="img.partner_image.alt + i" :src="img.partner_image.url" />
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'Partners',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.partners {
	padding-top: 50px;
	padding-bottom: 50px;
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
