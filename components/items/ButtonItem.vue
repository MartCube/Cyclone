<template>
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
	margin: 1rem 0;
	padding: 1rem 2rem;
	border: none;

	background-color: $secondary;
	color: $white;
	cursor: pointer;
	// z-index: 1;
	// overflow: hidden;
	// position: relative;

	display: flex;
	justify-content: center;
	align-items: center;

	// text

	&::first-letter {
		text-transform: uppercase;
	}
	font-size: 1.1rem;
	font-weight: 500;
	line-height: 2rem;
	transition: all 0.2s ease;
	svg {
		fill: $grey;
		margin-left: 15px;
		transition: all 0.2s ease;
	}
	transition: all 0.2s ease;

	&:hover {
		background-color: hsl(1, 84%, 40%);
		box-shadow: 0 0 10px 0 #000;
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
