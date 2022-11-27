<template>
	<div class="page contacts">
		<template v-if="$fetchState.error && pageData !== null && !$fetchState.pending && $fetchState.pending">
			<Error />
		</template>
		<template v-if="!$fetchState.pending">
			<Crumbs :links="breadCrumbs" />
			<Title :value="$t('pages.contact.title')" />
			<ContactInfo />
			<ContactForm />
			<Policy />
		</template>
	</div>
</template>

<script>
import { page } from '~/assets/queries'

export default {
	beforeRouteLeave(to, from, next) {
		this.$store.dispatch('bindFooter', true)
		next()
	},
	layout: 'contact',
	middleware({ store }) {
		store.dispatch('bindFooter', false)
	},
	data: () => ({
		pageData: null,
	}),
	async fetch() {
		await this.$sanity
			.fetch(page, { uid: this.localePath('contact') })
			.then((fetch) => {
				this.pageData = fetch
				this.$store.dispatch('metaTags', { fetch, type: 'page' })
			})
			.catch((error) => {
				console.log(error)
				// set status code on server and
				if (process.server) {
					this.$nuxt.context.res.statusCode = 404
				}
				// use throw new Error()
				throw new Error('Projects not found', error)
			})
	},
	head() {
		return this.$store.getters.metaHead
	},
	computed: {
		breadCrumbs() {
			return [{ title: this.$t('pages.contact.title') }]
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
@media (min-width: 1750px) {
	.contacts {
		padding: 0 17%;
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
