<template>
	<section class="home-intro">
		<div class="main-image">
			<video-background src="/cyclone_video_horizonal.mp4" :sources="[{ src: '/cyclone_video_vertical.mp4', res: 950, autoplay: true }]" style="max-height: 100%; height: 100vh" overlay="linear-gradient(to bottom,hsla(0, 0%, 18%, 0.2),hsla(0, 0%, 24%, 0.2))"> </video-background>
		</div>
		<div class="cyclone">
			<svg width="951" height="199" viewBox="0 0 951 199" fill="none" xmlns="http://www.w3.org/2000/svg">
				<path d="M134.463 146.691L148.283 174.617C143.267 180.154 135.866 184.67 126.08 188.167C116.45 191.51 106.145 193.147 95.1638 193.079C69.9536 192.922 49.5519 185.14 33.9586 169.731C18.369 154.012 10.7234 133.626 11.0219 108.572C11.3131 84.1364 18.9764 64.0772 34.0121 48.3946C49.0478 32.7119 70.0213 24.9542 96.9328 25.1214C107.141 25.1848 116.634 26.7904 125.413 29.9383C134.192 33.0861 141.18 37.2282 146.378 42.3645L129.575 70.1002C118.828 63.3828 107.809 59.989 96.5182 59.9189C83.3718 59.8372 72.4164 64.0998 63.6521 72.7068C55.0442 81.16 50.6473 93.1967 50.4612 108.817C50.2917 123.045 54.7133 134.905 63.726 144.395C72.7425 153.577 84.5199 158.213 99.0583 158.303C112.05 158.384 123.851 154.513 134.463 146.691Z" fill="white" fill-opacity="0.1" />
				<path d="M239.862 28.0132L279.997 28.2625L221.315 124.178L220.528 190.294L183.408 190.063L184.196 123.948L128.272 27.3201L170.727 27.5838L204.794 89.2756L239.862 28.0132Z" fill="white" fill-opacity="0.1" />
				<path d="M380.179 146.691L393.999 174.617C388.983 180.154 381.582 184.67 371.796 188.167C362.166 191.51 351.861 193.147 340.88 193.079C315.67 192.922 295.268 185.14 279.675 169.731C264.085 154.012 256.439 133.626 256.738 108.572C257.029 84.1364 264.692 64.0772 279.728 48.3946C294.764 32.7119 315.737 24.9542 342.649 25.1213C352.857 25.1847 362.35 26.7904 371.129 29.9383C379.908 33.0861 386.896 37.2282 392.094 42.3645L375.291 70.1002C364.544 63.3828 353.525 59.989 342.234 59.9189C329.088 59.8372 318.132 64.0998 309.368 72.7068C300.76 81.16 296.363 93.1967 296.177 108.817C296.008 123.045 300.429 134.905 309.442 144.395C318.459 153.577 330.236 158.213 344.774 158.303C357.766 158.384 369.567 154.513 380.179 146.691Z" fill="white" fill-opacity="0.1" />
				<path d="M496.944 190.48L393.706 189.838L395.641 27.4498L432.76 27.6803L431.24 155.271L497.359 155.682L496.944 190.48Z" fill="white" fill-opacity="0.1" />
				<path d="M481.588 107.85C481.874 83.8789 490.077 63.9778 506.197 48.1472C522.474 32.1629 543.372 24.25 568.891 24.4085C594.256 24.5661 614.812 32.3498 630.56 47.7596C646.618 63.1714 654.495 83.5591 654.193 108.923C653.902 133.358 645.465 153.413 628.883 169.086C612.455 184.76 591.791 192.519 566.89 192.365C541.68 192.208 521.046 184.424 504.989 169.012C489.086 153.601 481.286 133.214 481.588 107.85ZM521.028 108.095C520.864 121.86 525.287 133.565 534.298 143.21C543.156 152.7 554.158 157.485 567.305 157.567C582.152 157.659 593.729 153.169 602.035 144.095C610.345 134.712 614.584 122.906 614.754 108.678C614.929 93.9854 610.585 82.1263 601.721 73.1006C592.704 63.9192 581.623 59.2877 568.477 59.206C554.866 59.1215 543.599 63.6142 534.674 72.6841C525.75 81.7541 521.201 93.5578 521.028 108.095Z" fill="white" fill-opacity="0.1" />
				<path d="M804.513 27.6073L802.578 189.996L772.882 189.811L697.021 91.8999L695.86 189.333L661.061 189.117L662.995 26.7283L692.691 26.9128L768.547 125.288L769.713 27.3912L804.513 27.6073Z" fill="white" fill-opacity="0.1" />
				<path d="M922.316 190.451L823.718 189.838L825.653 27.4498L921.931 28.0478L921.516 62.8453L862.357 62.4779L862.017 91.0118L914.216 91.3361L913.802 126.134L861.603 125.809L861.252 155.271L922.73 155.653L922.316 190.451Z" fill="white" fill-opacity="0.1" />
			</svg>
		</div>
		<div class="title-wrapper">
			<h1>
				{{ $t('pages.index.first_title') }} <br />
				{{ $t('pages.index.second_title') }}
			</h1>
		</div>
	</section>
</template>

<script>
export default {
	name: 'HomeIntro',
	// props: {
	// 	data: {
	// 		type: Object,
	// 		required: true,
	// 	},
	// },
}
</script>

<style lang="scss" scoped>
.home-intro {
	min-height: 100vh;
	max-height: -webkit-fill-available;
	position: relative;
	.vue-responsive-videobg {
		padding: 0;
	}
	.main-image {
		position: absolute;
		width: 100%;
		height: 100vh;
		left: 0;
		top: 0;
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
			object-position: center;
		}
	}
	.cyclone {
		position: absolute;
		bottom: 2rem;
		right: 4rem;
		z-index: 1;
	}
	.title-wrapper {
		position: absolute;
		bottom: 3.1rem;
		right: 6rem;
		border-right: 10px solid $secondary;
		padding-right: 2rem;
		text-align: right;
		text-transform: lowercase;
		h1 {
			font-size: 5rem;
			line-height: 1;
			margin: 0;
		}
		h2 {
			font-size: 4rem;
			line-height: 1;
		}
	}
}

@media (min-width: 1750px) {
	.home-intro {
		.cyclone {
			right: 11rem;
		}
		.title-wrapper {
			right: 13rem;
			bottom: 3rem;
			h1 {
				font-size: 5rem;
				margin-bottom: 0;
			}
		}
	}
}
@media (max-width: 950px) {
	.home-intro {
		.title-wrapper {
			right: 5rem;
			h1 {
				font-size: 3rem;
				margin: 0;
			}
			h2 {
				font-size: 2rem;
			}
		}
		.cyclone {
			bottom: 0;
			right: 3rem;
			svg {
				width: 70vw;
			}
		}
	}
}
@media (max-width: 600px) {
	.home-intro {
		.title-wrapper {
			right: 0.5rem;
			bottom: 4rem;
			h1 {
				font-size: 2.4rem;
				margin: 0;
			}
		}
		.cyclone {
			bottom: 0;
			right: 0;
			svg {
				width: 95vw;
			}
		}
	}
}
</style>
