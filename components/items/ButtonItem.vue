<template functional>
	<button>
		<slot />
	</button>
</template>

<script>
export default {
	props: {
		submit: {
			type: Boolean,
			default: true,
		},
	},
}
</script>

<style lang="scss" scoped>
button {
	width: 100%;
	height: 100%;
	margin-top: 1rem;
	padding-bottom: 1rem;
	border: 2px solid $secondary;
	border-top: none;

	background: $primary;
	color: $grey;
	cursor: pointer;
	z-index: 1;
	overflow: hidden;
	position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	// text

	&::first-letter {
		text-transform: uppercase;
	}
	font-size: 1.5rem;
	font-weight: 700;
	font-size: inherit;
	line-height: 2rem;
	transition: all 0.2s ease;
	svg {
		fill: $grey;
		margin-left: 15px;
		transition: all 0.2s ease;
	}
	transition: all 0.2s ease;

	&:hover {
		color: $white;
		.overlay {
			width: 100%;
		}
		svg {
			opacity: 1;
			fill: $secondary;
		}
	}
}
@media (max-width: 900px) {
	button {
		font-size: 1.2rem;
	}
}
</style>
