<template>
	<footer>
		<ContactInfo />
		<Policy />
	</footer>
</template>

<script>
export default {
	name: 'Footer',
	data: () => ({}),
}
</script>

<style lang="scss" scoped>
footer {
	background: $primary-dark;
	width: 100%;
	height: fit-content;
	padding: 50px 4rem 0 4rem;
	display: flex;
	flex-wrap: wrap;
}
@media (max-width: 900px) {
	footer {
		padding: 0 30px 0 50px;
	}
}
@media (max-width: 600px) {
	footer {
		padding: 0 0 0 50px;
	}
}
</style>
