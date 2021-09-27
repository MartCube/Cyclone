<template>
	<section class="faq">
		<div class="content">
			<h2 class="title">FAQ</h2>
			<div class="accordeon_wrapper">
				<Accordeon v-for="(item, i) in data.items" :key="i" :number="i + 1" :question="item.question" :answer="item.answer" />
			</div>
			<div class="question-icon">
				<svg width="270" height="382" viewBox="0 0 270 382" fill="none" xmlns="http://www.w3.org/2000/svg">
					<g filter="url(#filter0_d)">
						<path d="M109.091 295.12H160.485V346H109.091V295.12Z" stroke="url(#paint0_linear)" stroke-width="10" />
						<path d="M160.485 256.96H109.091C109.091 174.28 186.182 180.64 186.182 129.76C186.182 101.776 163.055 78.88 134.788 78.88C106.521 78.88 83.3939 101.776 83.3939 129.76H32C32 73.5376 77.9976 28 134.788 28C191.578 28 237.576 73.5376 237.576 129.76C237.576 193.36 160.485 199.72 160.485 256.96Z" stroke="url(#paint1_linear)" stroke-width="10" />
					</g>
					<defs>
						<filter id="filter0_d" x="0" y="0" width="269.576" height="382" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
							<feFlood flood-opacity="0" result="BackgroundImageFix" />
							<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
							<feOffset dy="4" />
							<feGaussianBlur stdDeviation="13.5" />
							<feColorMatrix type="matrix" values="0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 0 0.141176 0 0 0 1 0" />
							<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow" />
							<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape" />
						</filter>
						<linearGradient id="paint0_linear" x1="134.788" y1="320.303" x2="335.966" y2="237.06" gradientUnits="userSpaceOnUse">
							<stop stop-color="#2E2E2E" />
							<stop offset="1" stop-color="#E80B08" />
						</linearGradient>
						<linearGradient id="paint1_linear" x1="134.788" y1="142.566" x2="449.846" y2="94.1769" gradientUnits="userSpaceOnUse">
							<stop offset="0.136119" stop-color="#2E2E2E" />
							<stop offset="1" stop-color="#E80B08" />
						</linearGradient>
					</defs>
				</svg>
			</div>
		</div>
	</section>
</template>

<script>
export default {
	name: 'Faq',
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.faq {
	padding-top: 50px;
	padding-bottom: 50px;
	.question-icon {
		position: absolute;
		bottom: 2rem;
		right: 100px;
		z-index: 0;
	}
	.accordeon_wrapper {
		// padding-left: 1.5rem;
		margin-left: 50px;
	}
}
@media (max-width: 800px) {
	.faq {
		padding-right: 0;
		.accordeon_wrapper {
			// padding-left: 30px;
			margin-left: 0;
		}
	}
}
</style>
