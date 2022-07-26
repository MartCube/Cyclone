<template>
	<section class="benefits">
		<div class="content">
			<SanityContent :blocks="benefitcontent" />
		</div>
		<div class="list">
			<div v-for="(benefit, i) in benefitItems" :key="benefit._key" class="benefit">
				<div v-if="i < 9" class="number">
					<span>0</span>
					<span>{{ i + 1 }}</span>
				</div>
				<div class="info">
					<h3>{{ benefit.title }}</h3>
					<p>{{ benefit.description }}</p>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Benefits',
	props: {
		benefitItems: {
			type: Array,
			required: true,
		},
		benefitcontent: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.benefits {
	padding: $section-padding;
	.list {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		// padding: 0 50px;

		.benefit {
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
					// filter: drop-shadow(0px 4px 11px rgba(26, 26, 26, 1));
				}
			}
			.info {
				flex: 1;
				h3 {
					margin-top: 1rem;
					margin-bottom: 2rem;
					line-height: 1;
				}
				p {
					padding: 0;
				}
			}
		}
	}
}
@media (min-width: 1550px) {
	.benefits {
		padding: 50px 17%;
		.list .benefit .number {
			font-size: 8rem;
		}
	}
}
@media (max-width: 1200px) {
	.benefits {
		.list {
			.benefit {
				.number {
					font-size: 6vw;
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
@media (max-width: 950px) {
	.benefits {
		.list {
			padding: 0 15px;
			.benefit {
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
@media (max-width: 600px) {
	.benefits {
		.list {
			padding: 0;
			.benefit {
				width: 100%;
				&:nth-child(odd) {
					margin-right: 0;
				}
				.number {
					width: 100px;
					font-size: 3.5rem;
				}
				.info {
					h3 {
						margin-bottom: 1rem;
						font-size: 1.7rem;
						line-height: 1.2;
					}
				}
			}
		}
	}
}
</style>
