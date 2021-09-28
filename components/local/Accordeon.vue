<template>
	<div class="accordeon" :class="{ active: isOpen }" @click="toggleAccordion">
		<div class="question">
			<span class="number">{{ number }}</span>
			<h3>{{ question }}</h3>
			<!-- <Icon name="close" /> -->
			<button class="collapse_button">
				<span></span>
				<span></span>
			</button>
		</div>
		<div class="answer">
			<p>{{ answer }}</p>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		number: {
			type: Number,
			required: true,
			default: 1,
		},
		question: {
			type: String,
			required: true,
		},
		answer: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpen: false,
		}
	},
	methods: {
		toggleAccordion() {
			this.isOpen = !this.isOpen
		},
	},
}
</script>

<style lang="scss" scoped>
.accordeon {
	// margin-bottom: 1rem;
	&:not(:last-child) .question {
		border-bottom-color: $primary;
	}
	.question {
		position: relative;
		z-index: 2;
		cursor: pointer;
		color: white;
		display: flex;
		min-height: 70px;
		align-items: center;
		border: 1px solid $secondary;
		.number {
			min-height: 70px;
			display: flex;
			width: 5rem;
			justify-content: center;
			align-items: center;
			position: relative;
			font-size: 2rem;
			font-weight: bold;
			&::before,
			&::after {
				content: '';
				// transform: rotate(90deg);
				display: flex;
				width: 1px;
				height: 1.5rem;
				background-color: $secondary;
				position: absolute;
				right: 0;
			}
			&::before {
				top: 0;
			}
			&::after {
				bottom: 0;
			}
		}
		h3 {
			display: inline-block;
			flex: 1;
			padding-left: 2rem;
		}
		.collapse_button {
			width: 25px;
			height: 25px;
			border: none;
			display: flex;
			justify-content: center;
			position: relative;
			align-items: center;
			background-color: transparent;
			margin-right: 2rem;
			transform: rotate(45deg);
			transition: transform 0.5s ease-in-out;
			span {
				display: flex;
				position: absolute;
				z-index: 1;
				width: 100%;
				height: 4px;
				background-color: $secondary;
				&:first-child {
					transform: rotate(45deg);
				}
				&:last-child {
					transform: rotate(-45deg);
				}
			}
		}
		&:hover {
			opacity: 0.9;
		}
	}
	.answer {
		// background-color: white;
		max-height: 30em;
		height: 0;
		overflow: hidden;
		opacity: 0;
		transform: translateY(-20px);
		transition: all 0.1s ease-in-out;
		p {
			padding: 20px 10px;
		}
	}
	&.active {
		.question {
			.collapse_button {
				transform: rotate(405deg);
			}
			border-bottom-color: $secondary;
		}
		.answer {
			height: 100%;
			transform: translateY(0);
			opacity: 1;
		}
	}
}
@media (max-width: 750px) {
	.accordeon {
		width: 90%;
		.question {
			align-items: stretch;
			.collapse_button {
				margin: 1rem;
			}
			h3 {
				padding: 10px 0 10px 20px;
			}
		}
	}
}
</style>
