<template>
	<section class="image_text_section">
		<h2>{{ title }}</h2>
		<div class="image">
			<ImageItem :image="imageItem" w="500" xlw="800" />
		</div>
		<div class="content_wrapper">
			<p class="description">{{ description }}</p>
			<a class="button" :href="url" target="_blank">{{ urlText }}</a>
		</div>
	</section>
</template>
<script>
export default {
	name: 'ImageText',
	props: {
		title: {
			type: String,
			required: true,
		},
		imageItem: {
			type: String,
			required: true,
		},
		url: {
			type: String,
			default: undefined,
		},
		urlText: {
			type: String,
			default: undefined,
		},
		description: {
			type: String,
			required: true,
		},
	},
}
</script>
<style lang="scss" scooped>
.image_text_section {
	padding: 50px 10%;
	display: flex;
	flex-wrap: wrap;
	h2 {
		width: 100%;
	}
	.image {
		width: 65%;
		picture {
			width: 100%;
			height: 100%;
		}
	}
	.content_wrapper {
		width: 35%;
		padding: 1rem 2rem;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		a {
			font-weight: bold;
		}
	}
}
@media (min-width: 1550px) {
	.image_text_section {
		padding: 50px 17%;
	}
}
@media (max-width: 950px) {
	.image_text_section {
		.image {
			width: 100%;
		}
		.content_wrapper {
			width: 100%;
			margin-top: 3rem;
			padding: 0;
		}
	}
}
</style>
