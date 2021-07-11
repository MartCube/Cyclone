<template>
	<div class="container">
		<ImageItem src="https://media.comicbook.com/2021/06/dragon-ball-z-goku-1273631-1280x0.jpeg" />
		<VideoItem video="IBcB_dYtGUg" />
	</div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	picture {
		max-width: 50%;
		min-height: 500px;
		margin: 100px 0;
	}
}
</style>
