<template>
	<div>
		<Navbar />
		<Sidebar />
		<Nuxt />

		<Footer />
	</div>
</template>

<script>
import { gql } from 'graphql-tag'
import client from '@/plugins/qraphql'

export default {
	data: () => ({}),
	async fetch() {
		await client
			.query({
				query: gql`
					{
						allPanel_posts {
							edges {
								node {
									title
									main_image
									description
									_meta {
										uid
										tags
									}
								}
							}
						}
					}
				`,
			})
			.then((data) => {
				this.data = data
				// console.log(this.data)
				this.$store.dispatch('bindPanelPages', this.data.data.allPanel_posts.edges)
				// const meta = {
				// 	htmlAttrs: { lang: this.$i18n.localeProperties.code },
				// 	title: this.data.data.policy.meta_title,
				// 	link: [
				// 		{ hid: 'alternate', rel: 'alternate',
				// 			href: this.$i18n.localeProperties.code === 'ru' ?
				// 			`${this.$store.getters.domain}${this.$route.fullPath}` :
				// 			`${this.$store.getters.domain}/${this.getRoutePart}/`,
				// 			hreflang: 'x-default' },
				// 		{ hid: 'alternate', rel: 'alternate',
				// 			href: this.data.data.policy._meta.alternateLanguages[0].lang.slice(0, 2) === 'ru' ?
				// 			`${this.$store.getters.domain}/${this.data.data.policy._meta.alternateLanguages[0].uid}/` :
				// 			`${this.$store.getters.domain}/${this.data.data.policy._meta.alternateLanguages[0].lang.slice(0, 2)}/${this.data.data.policy._meta.alternateLanguages[0].uid}/`,
				// 			hreflang: this.data.data.policy._meta.alternateLanguages[0].lang.slice(0, 2)
				// 		},
				// 		{ hid: 'alternate', rel: 'alternate',
				// 			href: this.data.data.policy._meta.alternateLanguages[1].lang.slice(0, 2) === 'ru' ?
				// 			`${this.$store.getters.domain}/${this.data.data.policy._meta.alternateLanguages[1].uid}/` :
				// 			`${this.$store.getters.domain}/${this.data.data.policy._meta.alternateLanguages[1].lang.slice(0, 2)}/${this.data.data.policy._meta.alternateLanguages[1].uid}/`
				// 			,
				// 			hreflang: this.data.data.policy._meta.alternateLanguages[1].lang.slice(0, 2) },
				// 	],
				// 	meta: [
				// 		{ hid: '', rel: 'canonical', href: `${this.$store.getters.domain}${this.$route.fullPath}` },
				// 		{ hid: 'description', name: 'description', content: this.data.data.policy.meta_description },
				// 		// facebook
				// 		{ hid: 'og:type', property: 'og:type', content: '' },
				// 		{ hid: 'og:url', property: 'og:url', content: `${this.$store.getters.domain}${this.$route.fullPath}` },
				// 		{ hid: 'og:title', property: 'og:title', content: this.data.data.policy.meta_title },
				// 		{ hid: 'og:description', property: 'og:description', content: this.data.data.policy.meta_description },
				// 		{ hid: 'og:image', property: 'og:image', content: this.data.data.policy.meta_image === null ? '' : this.data.data.policy.meta_image.url },
				// 		// twitter
				// 		{ hid: 'twitter:card', name: 'twitter:card', content: this.data.data.policy.meta_image === null ? '' : this.data.data.policy.meta_image.url },
				// 	],
				// }
				// this.$store.dispatch('bindMeta', meta)
			})
			.catch((e) => {
				console.log(e)
			})
	},
}
</script>
