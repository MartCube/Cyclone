<template>
	<section class="achievements">
		<div class="content">
			<div class="achievement-item">
				<div class="number">
					{{ data.items[0].number }}
				</div>
				<div class="description">
					{{ data.items[0].description }}
				</div>
			</div>
			<div class="achievement-image">
				<ImageItem :data="data.primary.image" />
			</div>
			<div class="achievement-item">
				<div class="number">
					{{ data.items[1].number }}
				</div>
				<div class="description">
					{{ data.items[1].description }}
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Achievements',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.achievements {
	padding-top: 50px;
	padding-bottom: 50px;
	.content {
		display: flex;
		.achievement-image {
			width: 40%;
			border: 2px solid $secondary;
			picture {
				width: 100%;
				height: 100%;
				object-fit: cover;
			}
		}
		.achievement-item {
			width: 30%;
			padding: 2rem 1rem;
			position: relative;
			display: flex;
			flex-direction: column;
			justify-content: center;
			align-items: center;
			&::before,
			&::after {
				content: '';
				position: absolute;
				width: 2rem;
				height: 2px;
				background-color: $secondary;
				left: 50%;
				transform: translateX(-50%);
			}
			&::before {
				top: 0;
			}
			&::after {
				bottom: 0;
			}
			.description {
				text-align: center;
				font-size: 2vw;
				font-weight: bold;
				max-width: 20vw;
				line-height: 1;
				margin-top: 2rem;
			}
			.number {
				font-size: 5vw;
				font-family: 'Nexa replica';
				display: flex;
				justify-content: center;
				line-height: 1.2;
				color: $secondary;
				filter: drop-shadow(1px 1px 20px $primary-dark);
			}
		}
	}
}
@media (max-width: 800px) {
	.achievements {
		padding-right: 0;
		.content {
			flex-direction: column;
			.achievement-item {
				margin-right: 30px;
				.number {
					font-size: 5rem;
				}
				.description {
					font-size: 2rem;
					max-width: 100%;
				}
			}
			.achievement-image {
				margin: 4rem 0;
			}
			.achievement-item,
			.achievement-image {
				width: 100%;
				max-width: 100%;
			}
		}
	}
}
</style>
