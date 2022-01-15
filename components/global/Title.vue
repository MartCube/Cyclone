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
	display: flex;
	align-items: center;
	border-left: 5px solid $secondary;
	padding-left: 1.5rem;
	font-size: 4rem;
	color: $white;
	line-height: 1;
}
</style>
