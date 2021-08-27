<template>
	<section class="intro-panel">
		<div class="main-image">
			<ImageItem :src="data.image" :alt="data.title" />
		</div>
		<div class="title-wrapper">
			<h1>{{ data.title }}</h1>
		</div>
	</section>
</template>
<script>
export default {
	name: 'IntroPanel',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.intro-panel {
	height: 100vh;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	padding: 0 0px 0 100px;
	.main-image {
		width: 15rem;
		margin-top: 2rem;
		height: auto;
		filter: drop-shadow(30px 40px 100px hsl(0, 0%, 5%));
		position: relative;
		z-index: 3;
		picture {
			width: 100%;
			height: 100%;
		}
	}
	.title-wrapper {
		text-transform: uppercase;
		h1 {
			font-size: 9rem;
			line-height: 1;
			text-align: center;
			font-weight: 800;
			background: radial-gradient(61.61% 67.28% at 57.31% -12.39%, rgba(0, 0, 0, 0) 0%, rgba(31, 23, 23, 0.0236328) 30.73%, rgba(252, 182, 181, 0.22) 49.52%, rgba(252, 182, 181, 0.5) 63.74%, rgba(255, 255, 255, 0.6) 90.63%, rgba(255, 255, 255, 0.89) 100%);
			-webkit-background-clip: text;
			background-clip: text;
			-webkit-text-fill-color: transparent;
			color: $white;
		}
	}
}

@media (max-width: 800px) {
	.intro-panel {
		.main-image {
			width: 12rem;
		}
		.title-wrapper {
			bottom: 6rem;
			h1 {
				font-size: 7rem;
			}
		}
	}
}
@media (max-width: 600px) {
	.intro-panel {
		.main-image {
			width: 10rem;
			margin-left: 30px;
		}
		.title-wrapper {
			h1 {
				width: calc(100vw - 30px);
				font-size: 4rem;
			}
		}
	}
}
@media (max-width: 400px) {
	.intro-panel {
		.main-image {
			width: 7rem;
		}
		.title-wrapper {
			bottom: 11rem;
			h1 {
				font-size: 5rem;
			}
		}
	}
}
</style>
