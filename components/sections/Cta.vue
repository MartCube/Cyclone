<template>
	<section class="cta">
		<div class="content">
			<div class="text">
				<h2 class="cta-title">{{ title }}</h2>
				<p class="cta-description">{{ subtitle }}</p>
			</div>
			<div class="form">
				<CtaForm :label="label" />
			</div>
		</div>
	</section>
</template>
<script>
export default {
	name: 'Cta',
	props: {
		label: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		subtitle: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.cta {
	padding: $section-padding;
	padding-top: 10rem;
	padding-bottom: 10rem;
	background-color: $primary-light;
	&::after {
		display: none;
	}
	.content {
		display: flex;
		justify-content: center;
		.text,
		.form {
			width: 45%;
		}
		.form {
			display: flex;
			align-items: center;
			padding-left: 3rem;
		}
		.text {
			padding-right: 3vw;
			.cta-title {
				text-align: center;
				font-size: 5vw;
				line-height: 1;
				margin: 0;
				padding: 0;
				border: none;
				width: 100%;
				display: inline-block;
				&::first-letter {
					color: $secondary;
				}
			}
			.cta-description {
				text-align: center;
				font-size: 1.5vw;
				line-height: 1;
			}
		}
	}
}

@media (min-width: 1600px) {
	.cta {
		.content {
			.text {
				.cta-title {
					font-size: 5rem;
				}
				.cta-description {
					font-size: 2rem;
				}
			}
		}
	}
}
@media (max-width: 800px) {
	.cta {
		padding-top: 7rem;
		padding-bottom: 7rem;
		.content {
			flex-direction: column;
			.text {
				padding-right: 0;
				margin-bottom: 5rem;
				.cta-title {
					margin-bottom: 1rem;
					font-size: 3rem;
				}
				.cta-description {
					font-size: 1.5rem;
					font-weight: 200;
				}
			}
			.form {
				padding-left: 0;
				&::before {
					content: '';
					height: 3px;
					width: 4rem;
					background-color: $gradient-gray;
					display: block;
					position: absolute;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			.text,
			.form {
				width: 100%;
			}
		}
	}
}
</style>
