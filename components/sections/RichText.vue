<template>
	<section class="rich_text">
		<div class="content">
			<SanityContent :blocks="richTextContent" />
		</div>
	</section>
</template>

<script>
export default {
	name: 'RichText',
	props: {
		richTextContent: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.rich_text {
	padding: $section-padding;
	.content {
		h2.title {
			border-left: 5px solid $secondary;
			font-size: 3rem;
			line-height: 1;
			margin-left: 50px;
			display: flex;
			padding-left: 1.5rem;
			margin-bottom: 3rem;
			margin-top: 1rem;
		}
	}
}

@media (min-width: 1750px) {
	.rich_text {
		padding: 50px 17%;
		.content {
			// max-width: 60%;
			// margin: 0 auto;
		}
	}
}
</style>
