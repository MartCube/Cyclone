<template>
	<picture>
		<!-- <source v-if="data.mobile" :data-srcset="data.mobile.url" media="(max-width: 900px)" /> -->
		<img :data-src="data.url" :src="data.url" loading="lazy" class="lazyload" :alt="data.alt" :width="data.dimensions.width" :height="data.dimensions.height" />
	</picture>
</template>

<script>
export default {
	props: {
		data: {
			type: Object,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
picture {
	z-index: 3;
	display: flex;

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
