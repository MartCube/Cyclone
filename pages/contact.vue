<template>
	<div class="page contacts">
		<Crumbs :links="breadCrumbs" />
		<Title value="Контакты" />
		<ContactInfo />
		<ContactForm />
		<Policy />
	</div>
</template>

<script>
export default {
	beforeRouteLeave(to, from, next) {
		this.$store.dispatch('bindFooter', true)
		next()
	},
	layout: 'contact',
	middleware({ store }) {
		store.dispatch('bindFooter', false)
	},
	computed: {
		breadCrumbs() {
			return [{ title: 'Контакты' }]
		},
	},
}
</script>

<style lang="scss" scoped>
.contacts {
	// border-left: 1px solid $secondary;
	// margin-left: 100px;
	padding: 0 4rem;
	display: flex;
	flex-wrap: wrap;
	.title {
		margin-bottom: 4rem;
	}
	.crumbs {
		margin: 3rem 0;
	}
	.contact_info {
		flex: 1;
		flex-wrap: wrap;
		padding-right: 5rem;
	}
	.policy {
		margin-top: 5rem;
	}
}
@media (max-width: 950px) {
	.contacts {
		.contact_info {
			padding-right: 0;
		}
		.policy {
			margin: 3rem;
		}
	}
}
</style>
