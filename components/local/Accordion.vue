<template>
	<div class="message" @click="toggleAccordion">
		<div class="header">
			<span class="number">{{ number }}</span>
			<h3>{{ header }}</h3>
			<!-- <Icon name="close" /> -->
			<button class="collapse_button" :class="{ active: isOpen }">
				<span></span>
				<span></span>
			</button>
		</div>
		<div class="body" :class="{ colapseAnim: isOpen }">
			<p>{{ body }}</p>
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
		header: {
			type: String,
			required: true,
		},
		body: {
			type: String,
			required: true,
		},
	},
	data() {
		return {
			isOpen: true,
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
.message {
	// margin-bottom: 1rem;
	.header {
		position: relative;
		z-index: 2;
		cursor: pointer;
		color: white;
		display: flex;
		min-height: 70px;
		align-items: center;
		border: 2px solid $secondary;
		border-bottom-color: transparent;
		.number {
			height: 100%;
			display: flex;
			width: 4rem;
			justify-content: center;
			align-items: center;
			position: relative;
			&::before,
			&::after {
				content: '';
				transform: rotate(90deg);
				display: flex;
				width: 1rem;
				height: 2px;
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
		}
		.collapse_button {
			width: 30px;
			height: 30px;
			border: none;
			display: flex;
			justify-content: center;
			align-items: center;
			span {
				display: flex;
				width: 100%;
				height: 2px;
				background-color: $secondary;
				&:first-child {
					transform: rotate(90deg);
				}
			}
		}
		&:hover {
			opacity: 0.9;
		}
	}
	.body {
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
	.message {
		width: 95%;
	}
}
</style>
