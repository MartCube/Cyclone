<template>
	<section class="title-text">
		<div class="content">
			<h2 class="title">{{ $prismic.asText(data.primary.title) }}</h2>
			<template v-if="data.primary.content">
				<prismic-rich-text class="rich_text" :field="data.primary.content" />
			</template>
		</div>
	</section>
</template>

<script>
export default {
	name: 'TitleText',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.title-text {
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

@media (max-width: 950px) {
	.stages {
		.content {
			.list {
				padding: 0 15px;
				.stage {
					width: 100%;
					.number {
						width: 25%;
					}
					.info {
						h3 {
							margin-top: 0;
						}
					}
				}
			}
		}
	}
}
@media (max-width: 600px) {
	.stages {
		.content {
			h2.title {
				font-size: 2rem;
				margin-left: 25px;
			}
			.list {
				padding: 0 10px;
				.stage {
					width: 100%;
					.number {
						width: 20%;
						font-size: 7vw;
					}
					.info {
						h3 {
							margin-bottom: 1rem;
							font-size: 1.7rem;
						}
					}
				}
			}
		}
	}
}
</style>
