<template>
	<div v-if="modalVideo" ref="modal" class="video_modal">
		<VideoItem :data="$attrs.data" />
		<div class="close" @click="closeModal">
			<Icon name="close" size="35px" />
		</div>
	</div>
</template>

<script>
export default {
	computed: {
		modalVideo() {
			return this.$store.getters.modalVideo
		},
	},
	methods: {
		closeModal() {
			this.$store.dispatch('bindModalVideo', false)
		},
	},
}
</script>

<style lang="scss" scoped>
.video_modal {
	will-change: opacity;
	will-change: transform;

	width: 100%;
	height: 100vh;
	opacity: 1;
	z-index: 31;
	position: fixed;
	top: 0;
	left: 0;

	display: flex;
	align-items: center;
	justify-content: center;
	background: $primary;

	.close {
		position: fixed;
		top: 25px;
		right: 25px;
		fill: $white;
		transition: all 0.2s ease;
		cursor: pointer;
		&:hover {
			opacity: 0.5;
		}
	}
}
</style>
