<template>
	<section class="achievements">
		<article v-for="(counter, i) in counterItems" :key="counter.number + i" class="achievement-item">
			<div class="number">
				<!-- <span v-if="counter.prefix" class="extra_text mr-1 left">{{ counter.prefix }}</span> -->
				<span>
					{{ counter.number }}
				</span>
				<!-- <span v-if="counter.postfix" class="extra_text ml-1 right">{{ counter.postfix }}</span> -->
			</div>
			<div class="description">
				{{ counter.title }}
			</div>
		</article>
	</section>
</template>

<script>
export default {
	name: 'Achievements',
	props: {
		counterItems: {
			type: Array,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.achievements {
	padding-top: 50px;
	padding-bottom: 50px;
	display: flex;
	justify-content: space-evenly;
	.achievement-item {
		width: 20%;
		padding: 4rem 1rem;
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		&::before,
		&::after {
			content: '';
			position: absolute;
			width: 3rem;
			height: 3px;
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
			min-height: 4rem;
		}
		.number {
			font-size: 5vw;
			font-family: 'Nexa replica';
			display: flex;
			justify-content: center;
			line-height: 1;
			color: $secondary;
			align-items: center;
			position: relative;
			.extra_text {
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				color: white;
				font-weight: bold;
				font-size: 2rem;
			}
			.left {
				left: -3rem;
			}
			.right {
				right: -2rem;
			}
			// .mr-1 {
			// 	margin-right: 1rem;
			// }
			// .ml-1 {
			// 	margin-left: 1rem;
			// }
		}
	}
}
@media (max-width: 800px) {
	.achievements {
		padding: 0 2rem 3rem 2rem;
		flex-direction: column;
		.achievement-item {
			margin: 0;
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
@media (min-width: 1750px) {
	.achievements {
		padding: 50px 17%;
		justify-content: space-between;
	}
}
</style>
