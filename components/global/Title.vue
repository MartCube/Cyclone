<template>
	<h1 class="title">
		{{ value }}
	</h1>
</template>

<script>
export default {
	name: 'Title',
	props: {
		value: {
			type: String,
			required: true,
		},
	},
}
</script>

<style lang="scss" scoped>
.title {
	width: 100%;
	height: 240px;
	display: flex;
	align-items: center;
	font-size: 4rem;
	color: $white;
}
</style>
