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
	padding-top: 50px;
	padding-bottom: 50px;
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
</style>
