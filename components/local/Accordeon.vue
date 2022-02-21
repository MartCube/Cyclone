<template>
	<div class="accordeon" :class="{ active: isOpen }" @click="toggleAccordion">
		<div class="question">
			<span class="number">{{ number }}</span>
			<p>{{ question }}</p>
			<button class="collapse_button">
				<span></span>
				<span></span>
			</button>
		</div>
		<div ref="elemHeight" class="answer">
			<SanityContent :blocks="answer.richTextContent" />
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
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			height: 0,
			isOpen: false,
		}
	},
	mounted() {
		this.height = this.$refs.elemHeight.offsetHeight
		this.$refs.elemHeight.style.height = '0px'
	},
	methods: {
		toggleAccordion() {
			if (!this.isOpen) {
				this.$refs.elemHeight.style.height = `${this.height}px`
			} else {
				this.$refs.elemHeight.style.height = '0px'
			}
			this.isOpen = !this.isOpen
		},
	},
}
</script>

<style lang="scss" scoped>
.accordeon {
	&:not(:last-child) .question {
		border-bottom-color: $primary;
	}
	.question {
		position: relative;
		z-index: 2;
		cursor: pointer;
		color: white;
		display: flex;
		min-height: 80px;
		align-items: center;
		border: 1px solid $secondary;
		.number {
			min-height: 80px;
			display: flex;
			flex-basis: 5rem;
			justify-content: center;
			align-items: center;
			position: relative;
			font-size: 2rem;
			font-weight: bold;
			&::before,
			&::after {
				content: '';
				display: flex;
				width: 1px;
				height: 1.5rem;
				background-color: $secondary;
				position: absolute;
				right: 0;
			}
			&::before {
				top: -1px;
			}
			&::after {
				bottom: -1px;
			}
		}
		p {
			display: inline-block;
			flex: 1;
			padding: 0 2rem;
			margin: 0;
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
		overflow: hidden;
		opacity: 0;
		transform: translateY(-20px);
		transition: all 0.3s ease-in-out;
		p {
			padding: 20px 10px;
		}
	}
	&.active {
		.question {
			.collapse_button {
				transform: rotate(180deg);
			}
			border-bottom-color: $secondary;
		}
		.answer {
			transform: translateY(0);
			opacity: 1;
		}
	}
}
@media (max-width: 950px) {
	.accordeon {
		width: 100%;
		.question {
			align-items: stretch;
			.number {
				flex-basis: 3rem;
				&::before,
				&::after {
					height: 52%;
				}
			}
			.collapse_button {
				margin: 1rem;
				align-self: center;
			}
			h3 {
				padding: 10px 0 10px 20px;
			}
			p {
				padding: 0.5rem 0 1rem 1rem;
			}
		}
	}
}
</style>
