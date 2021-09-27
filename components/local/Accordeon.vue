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
	.question {
		position: relative;
		z-index: 2;
		cursor: pointer;
		color: white;
		display: flex;
		min-height: 70px;
		align-items: center;
		border: 2px solid $secondary;
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
				width: 2px;
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
			width: 30px;
			height: 30px;
			border: none;
			display: flex;
			justify-content: center;
			position: relative;
			align-items: center;
			background-color: $primary;
			margin-right: 2rem;
			span {
				display: flex;
				position: absolute;
				z-index: 1;
				width: 100%;
				height: 2px;
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
		overflow: hidden;
		opacity: 1;
		transition: 0.5s ease all;
		p {
			padding: 20px 10px;
		}
	}
	.colapseAnim {
		transform: translateY(-20px);
		opacity: 0;
		max-height: 0;
	}
	.iconAnim {
		transform: rotate(135deg);
		color: #4a88c8;
	}
}
@media (max-width: 750px) {
	.accordeon {
		width: 95%;
	}
}
</style>
