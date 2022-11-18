export const state = (context) => ({
	panels: {},
	domain: 'https://cyclone-dev.vercel.app',
	footer: true, // toggle visibility
	metaHead: {},
	aciveFilter: '',
})

export const getters = {
	domain: (state) => state.domain,
	panels: (state) => state.panels,
	footer: (state) => state.footer,
	metaHead: (state) => state.metaHead,
	getAciveFilter: (state) => state.aciveFilter,
}

export const mutations = {
	setPanelPages(state, payload) {
		state.panels = payload
	},
	setModalVideo(state, payload) {
		state.modalVideo = payload
	},
	setFooter(state, payload) {
		state.footer = payload
	},
	setMeta(state, value) {
		state.metaHead = value
	},
	setAciveFilter(state, value) {
		state.aciveFilter = value
	},
}

export const actions = {
	bindPanels(context, payload) {
		context.commit('setPanelPages', payload)
	},
	bindAciveFilter(context, payload) {
		context.commit('setAciveFilter', payload)
	},
	bindModalVideo(context, payload) {
		context.commit('setModalVideo', payload)
	},
	bindFooter(context, payload) {
		context.commit('setFooter', payload)
	},
	async metaTags({ commit, state, dispatch }, { fetch, type }) {
		// console.log(this.$router.app._route.fullPath, fetch, type)
		const metaData = await fetch.metaTags
		// console.log(fetch)
		const image = `https://cdn.sanity.io/images/wv1u3p06/production/${metaData.image === undefined ? '' : metaData.image.slice(6, metaData.image.length - 4)}.jpg`
		const head = {
			htmlAttrs: { lang: fetch.lang },
			title: metaData.title,
			link: [],
			meta: [],
		}
		// canonical link
		// const canonical = `${this.state.domain}${type === 'projects' ? '/projects' + this.$router.app._route.fullPath : this.$router.app._route.fullPath}`
		let canonical
		if (type === 'index') {
			canonical = `${state.domain}/`
			head.link.push(
				...[
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/ru/`, hreflang: 'ru' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/`, hreflang: 'x-default' },
				],
			)
		} else if (type === 'page' || type === 'panel' || type === 'projects' || type === 'blog') {
			canonical = `${state.domain}/${fetch.languages.filter((el) => el.lang === 'ua')[0].uid}/`
			head.link.push(
				...[
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/ru/${fetch.languages.filter((el) => el.lang === 'ru')[0].uid}/`, hreflang: 'ru' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/${fetch.languages.filter((el) => el.lang === 'ua')[0].uid}/`, hreflang: 'x-default' },
				],
			)

			await dispatch('i18n/setRouteParams', {
				ru: { [type]: fetch.languages.filter((el) => el.lang === 'ru')[0].uid },
				ua: { [type]: fetch.languages.filter((el) => el.lang === 'ua')[0].uid },
			})
		} else if (type === 'color') {
			canonical = `${state.domain}${this.localePath(type, 'ua')}colors/${fetch.languages.filter((el) => el.lang === 'ua')[0].uid}/`
			head.link.push(
				...[
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/ru/colors/${fetch.languages.filter((el) => el.lang === 'ru')[0].uid}/`, hreflang: 'ru' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}/colors/${fetch.languages.filter((el) => el.lang === 'ua')[0].uid}/`, hreflang: 'x-default' },
				],
			)

			await dispatch('i18n/setRouteParams', {
				ru: { [type]: fetch.languages.filter((el) => el.lang === 'ru')[0].uid },
				ua: { [type]: fetch.languages.filter((el) => el.lang === 'ua')[0].uid },
			})
		} else if (type === 'building') {
			canonical = `${state.domain}${this.localePath('projects', 'ua')}${fetch.languages.filter((el) => el.lang === 'ua')[0].uid}/`
			head.link.push(
				...[
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}${this.localePath('projects', 'ru')}${fetch.languages.filter((el) => el.lang === 'ru')[0].uid}/`, hreflang: 'ru' },
					{ hid: 'alternate', rel: 'alternate', href: `${state.domain}${this.localePath('projects', 'ua')}${fetch.languages.filter((el) => el.lang === 'ua')[0].uid}/`, hreflang: 'x-default' },
				],
			)

			await dispatch('i18n/setRouteParams', {
				ru: { [type]: fetch.languages.filter((el) => el.lang === 'ru')[0].uid },
				ua: { [type]: fetch.languages.filter((el) => el.lang === 'ua')[0].uid },
			})
		}

		head.link.push({ hid: 'canonical', rel: 'canonical', href: canonical })
		head.meta.push({ hid: 'og:url', name: 'og:url', content: canonical })
		head.meta.push(
			...[
				{ hid: 'robots', name: 'robots', content: 'follow' },
				{ hid: 'description', name: 'description', content: metaData.description },
				// facebook
				{ hid: 'og:type', property: 'og:type', content: '' },
				{ hid: 'og:url', property: 'og:url', content: canonical },
				{ hid: 'og:title', property: 'og:title', content: metaData.title },
				{ hid: 'og:description', property: 'og:description', content: metaData.description },
				{ hid: 'og:image', property: 'og:image', content: image },
				// twitter
				{ hid: 'twitter:card', name: 'twitter:card', content: image },
			],
		)
		await commit('setMeta', head)
	},
}
