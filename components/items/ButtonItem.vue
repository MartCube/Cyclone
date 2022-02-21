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
	padding: 0.5rem 2rem;
	border: none;
	max-height: 3rem;
	background-color: $secondary;
	color: $white;
	cursor: pointer;

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
		fill: $white;
		margin-left: 15px;
		transition: all 0.2s ease;
	}
	transition: all 0.2s ease;

	&:hover {
		background-color: hsl(1, 84%, 40%);
		box-shadow: 0 0 10px 0 $primary-dark;
		.overlay {
			width: 100%;
		}
		svg {
			opacity: 0.8;
		}
	}
}

.cta_form {
	button {
		width: 8rem;
		margin: 0 0 0 1rem;
		height: 40px;
		width: fit-content;

		&:hover,
		&:focus,
		&:active {
			background-color: $gradient-red;
		}
	}
}
@media (max-width: 950px) {
	button {
		font-size: 1.2rem;
	}
	.cta_form {
		button {
			width: 100%;
			margin: 1rem 0 0 0;
			height: 40px;

			&:hover,
			&:focus,
			&:active {
				background-color: $gradient-red;
			}
		}
	}
}
</style>
