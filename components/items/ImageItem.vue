<template>
	<div class="image">
		<!-- <source v-if="data.mobile" :data-srcset="data.mobile.url" media="(max-width: 900px)" /> -->
		<SanityImage :asset-id="asset._ref" fit="fillmax" />
	</div>
</template>

<script>
export default {
	props: {
		asset: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.image {
	z-index: 3;
	display: flex;
	width: 100%;
	object-fit: cover;
	object-position: revert;
	margin-bottom: 20px;

	img {
		width: inherit;
		height: inherit;
		object-fit: inherit;
		object-position: center;
		&::before {
			display: none;
		}
		&.lazyload,
		&.lazyloading {
			opacity: 0;
		}
		&.lazyloaded {
			opacity: 1;
			transition: all 2s cubic-bezier(0.215, 0.61, 0.355, 1);
		}
	}
}
</style>
