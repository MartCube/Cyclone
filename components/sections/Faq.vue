<template>
	<section class="faq">
		<div class="content">
			<h2 class="title">{{ title }}</h2>
			<div class="accordeon_wrapper">
				<Accordeon v-for="(item, i) in faqItems" :key="item._key" :number="i + 1" :question="item.question" :answer="item.answer" />
			</div>
			<div class="question-icon">
				<svg width="660" height="1040" viewBox="0 0 660 1040" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path fill-rule="evenodd" clip-rule="evenodd" d="M156.084 320H40.6319C50.5835 163.06 176.815 40 330 40C489.636 40 620 173.642 620 340C620 430.383 568.585 480.053 510.344 532.658C509.023 533.852 507.696 535.048 506.365 536.247C505.666 536.877 504.965 537.509 504.263 538.141C452.803 584.499 396.193 635.495 388.406 720H273.001C275.64 668.532 288.465 630.483 306.083 600.426C326.069 566.327 352.935 541.253 381.406 517.986C387.802 512.759 394.413 507.531 401.086 502.255L401.086 502.255C423.125 484.827 445.832 466.872 463.664 446.674C488.043 419.063 505 385.769 505 340C505 241.557 426.889 160 330 160C239.757 160 165.805 230.752 156.084 320ZM330 0C147.086 0 0 152.758 0 340V360H20H175H195V340C195 262.442 256.389 200 330 200C403.611 200 465 262.442 465 340C465 374.231 452.895 398.436 433.679 420.2C418.435 437.466 399.684 452.31 378.38 469.175C371.227 474.837 363.787 480.727 356.094 487.013C326.44 511.247 295.181 539.922 271.574 580.199C247.806 620.748 232.5 671.802 232.5 740V760H252.5H407.5H427.5V740C427.5 661.356 476.377 617.222 534.641 564.613C535.477 563.857 536.316 563.101 537.156 562.342C595.165 509.947 660 449.616 660 340C660 152.758 512.914 0 330 0ZM252.499 840H232.499V860V1020V1040H252.499H407.499H427.499V1020V860V840H407.499H252.499ZM272.499 1000V880H387.499V1000H272.499Z" fill="url(#question)" />
					<defs>
						<linearGradient id="question" x1="330" y1="520.389" x2="1353.29" y2="409.305" gradientUnits="userSpaceOnUse">
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
		faqItems: {
			type: Array,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scooped>
.faq {
	padding-top: 50px;
	padding-bottom: 50px;
	position: relative;
	.question-icon {
		position: absolute;
		bottom: 10vh;
		right: 90px;
		z-index: -1;
		width: auto;
		height: 40vh;
		picture {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
		svg {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
	.accordeon_wrapper {
		// padding-left: 1.5rem;
		margin: 0 50px;
	}
}
@media (max-width: 800px) {
	.faq {
		padding-right: 0;
		.accordeon_wrapper {
			// padding-left: 30px;
			display: flex;
			flex-direction: column;
			align-items: center;
			margin-left: 0;
		}
		.question-icon {
			right: 55px;
		}
	}
}
</style>
