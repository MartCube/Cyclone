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
import { page } from '@/plugins/queries'

export default {
	beforeRouteLeave(to, from, next) {
		this.$store.dispatch('bindFooter', true)
		next()
	},
	layout: 'contact',
	middleware({ store }) {
		store.dispatch('bindFooter', false)
	},
	asyncData({ $sanity }) {
		return $sanity.fetch(page, { uid: 'contact' })
	},
	head() {
		console.log(this.$route.params)
		return {
			title: 'Contact',
			link: [
				{
					hid: 'canonical',
					rel: 'canonical',
					href: `https://cyclone.kiev.ua/contact/`,
				},
			],
			meta: [
				{
					hid: 'title',
					name: 'title',
					content: this.metaTags.title,
				},
				{
					hid: 'description',
					name: 'description',
					content: this.metaTags.description,
				},
				{
					hid: 'og:title',
					name: 'og:title',
					content: this.metaTags.title,
				},
				{
					hid: 'og:image',
					property: 'og:image',
					content: `https://cdn.sanity.io/images/wv1u3p06/production/${this.metaTags.image.slice(6)}?auto=format`,
				},
				{
					hid: 'og:description',
					property: 'og:description',
					content: this.metaTags.description,
				},
				{
					hid: 'og:url',
					property: 'og:url',
					content: `http://cyclone.kiev.ua/contact/`,
				},
			],
		}
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
