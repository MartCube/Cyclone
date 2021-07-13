<template>
	<section class="cta">
		<div class="content">
			<div class="text">
				<h2 class="title">{{ data.primary.title }}</h2>
				<p class="description">{{ data.primary.description }}</p>
			</div>
			<div class="form">
				<CtaForm />
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
.cta {
	padding-top: 50px;
	padding-bottom: 50px;
	background-color: $primary-light;
	&::after {
		display: none;
	}
	.content {
		display: flex;
		justify-content: center;
	}
}

@media (max-width: 600px) {
	.cta {
	}
}
</style>
