<template>
	<div class="page contacts">
		<Crumbs />
		<Title value="Контакты" />
		<ContactForm />
	</div>
</template>

<script>
export default {
	beforeRouteLeave(to, from, next) {
		this.$store.dispatch('bindFooter', true)
		next()
	},
	middleware({ store }) {
		store.dispatch('bindFooter', false)
	},
}
</script>

<style lang="scss" scoped>
.contacts {
	border-left: 1px solid $secondary;
	margin-left: 100px;
	padding: 100px 0 0 40px;
}
</style>
