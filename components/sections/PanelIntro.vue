<template>
	<section class="intro-panel">
		<div class="main-image">
			<ImageItem :image="poster" w="300" mobile />
		</div>
		<div class="title-wrapper">
			<h1>{{ title }}</h1>
		</div>
	</section>
</template>
<script>
export default {
	name: 'PanelIntro',
	props: {
		poster: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
}
</script>
<style lang="scss" scoped>
.intro-panel {
	height: 100vh;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	.main-image {
		width: 20vw;
		margin-top: 2rem;
		height: auto;
		position: relative;
		z-index: 3;
		img {
			width: 100%;
			height: 100%;
		}
	}
	.title-wrapper {
		text-transform: uppercase;
		h1 {
			font-size: 9vw;
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

@media (min-width: 1400px) {
	.intro-panel {
		.title-wrapper {
			font-size: 9rem;
		}
		.main-image {
			width: 15rem;
		}
	}
}
@media (max-width: 900px) {
	.intro-panel {
		padding: 0;
		height: 60vh;
		.content {
			ul {
				padding: 0 0 0 10px;
			}
		}
	}
}
@media (max-width: 600px) {
	.intro-panel {
		.main-image {
			margin-bottom: 2rem;
			width: 40vw;
		}
		.title-wrapper {
			h1 {
				width: 100vw;
				font-size: 3rem;
			}
		}
	}
}
</style>
