<template>
	<section class="stages">
		<div class="content">
			<h2 class="title">{{ data.primary.title }}</h2>
			<template v-if="data.primary.description">
				<prismic-rich-text class="rich_text" :field="data.primary.description" />
			</template>
			<div class="list">
				<div v-for="(stage, i) in data.items" :key="i" class="stage">
					<h2 v-if="i < 9" class="number">
						<span>0</span>
						<span>{{ i + 1 }}</span>
					</h2>
					<!-- <h2 v-else class="number">{{ i + 1 }}</h2> -->
					<div class="info">
						<h3>{{ stage.stage_title }}</h3>
						<p>{{ stage.stage_description }}</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Stages',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.stages {
	padding-top: 50px;
	padding-bottom: 50px;
	.content {
		// h2.title {
		// 	border-left: 5px solid $secondary;
		// 	font-size: 3rem;
		// 	line-height: 1;
		// 	margin-left: 50px;
		// 	display: flex;
		// 	padding-left: 1.5rem;
		// 	margin-bottom: 3rem;
		// 	margin-top: 1rem;
		// }
		.list {
			display: flex;
			flex-wrap: wrap;
			justify-content: flex-start;
			padding: 0 50px;

			.stage {
				width: 48%;
				display: flex;
				align-items: flex-start;
				margin-top: 2rem;
				&:nth-child(odd) {
					margin-right: 4%;
				}
				.number {
					width: 35%;
					font-size: 8vw;
					font-family: 'Nexa Replica';
					display: flex;
					justify-content: flex-end;
					padding-right: 1rem;
					color: $secondary;
					span:nth-child(1) {
						color: $primary;
						text-shadow: 1px 1px $secondary, -1px -1px $secondary, -1px 1px $secondary, 1px -1px $secondary;
					}
					span {
						filter: drop-shadow(0px 4px 11px rgba(26, 26, 26, 1));
					}
				}
				.info {
					flex: 1;
					h3 {
						margin-top: 1rem;
						font-size: 2rem;
						margin-bottom: 2rem;
					}
				}
			}
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
			// h2.title {
			// 	font-size: 2rem;
			// 	margin-left: 25px;
			// }
			.list {
				padding: 0 10px;
				.stage {
					width: 100%;
					.number {
						width: 17vw;
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
