<template>
	<section class="achievements">
		<article v-for="(counter, i) in counterItems" :key="counter.number + i" class="achievement-item">
			<div class="number">
				{{ counter.number }}
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
			line-height: 1.2;
			color: $secondary;
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
</style>
