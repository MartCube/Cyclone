import { createClient } from '@nuxtjs/sanity'
import fetch from 'node-fetch'
import { sitemapData } from './assets/queries'

if (!globalThis.fetch) {
	globalThis.fetch = fetch
}

const configSanity = {
	projectId: 'wv1u3p06',
	useCdn: false,
	minimal: true,
	dataset: 'production',
	apiVersion: '2021-04-04',
}

const client = createClient(configSanity)

const sitemapGenerator = async function () {
	let data
	await client
		.fetch(sitemapData)
		.then((results) => {
			data = results
		})
		.catch((error) => {
			console.log('log error', error)
		})
	const sitemaproute = []
	data.forEach((doc) => {
		switch (doc.type) {
			case 'page':
				// console.log(doc)

				if (doc.uid === 'index' || doc.uid === 'index-ru') {
					sitemaproute.push({
						url: `${doc.lang === 'ua' ? '/' : '/ru/'}`,
						changefreq: 'monthly',
						priority: 1,
						lastmod: doc.updated,
					})
				} else {
					sitemaproute.push({
						url: `${doc.lang === 'ua' ? '/' : '/ru/'}${doc.uid}/`,
						changefreq: 'monthly',
						priority: 1,
						lastmod: doc.updated,
					})
				}
				break
			case 'project':
				sitemaproute.push({
					url: `${doc.lang === 'ua' ? '/' : '/ru/'}${doc.lang === 'ua' ? 'proectu' : 'proekty'}/${doc.uid}/`,
					changefreq: 'monthly',
					priority: 1,
					lastmod: doc.updated,
				})
				break
			case 'article':
				sitemaproute.push({
					url: `${doc.lang === 'ua' ? '/' : '/ru/'}${doc.lang === 'ua' ? 'novunu' : 'novosti'}/${doc.uid}/`,
					changefreq: 'monthly',
					priority: 1,
					lastmod: doc.updated,
				})
				break
			case 'colors':
				sitemaproute.push({
					url: `${doc.lang === 'ua' ? '/' : '/ru/'}colors/${doc.uid}/`,
					changefreq: 'monthly',
					priority: 1,
					lastmod: doc.updated,
				})
				break
			case 'panel':
				sitemaproute.push({
					url: `${doc.lang === 'ua' ? '/' : '/ru/'}${doc.uid}/`,
					changefreq: 'monthly',
					priority: 1,
					lastmod: doc.updated,
				})
				break

			default:
				break
		}
	})

	return sitemaproute
}
const routeGenerator = async function () {
	const route = []
	let data
	await client
		.fetch(sitemapData)
		.then((results) => {
			data = results
		})
		.catch((error) => {
			console.log('log error', error)
		})
	data.forEach((doc) => {
		// console.log(doc)
		switch (doc.type) {
			case 'page':
				if (doc.uid === 'index' || doc.uid === 'index-ru') {
					route.push(`${doc.lang === 'ua' ? '/' : '/ru/'}`)
				} else {
					route.push(`${doc.lang === 'ua' ? '/' : '/ru/'}${doc.uid}/`)
				}
				break
			case 'project':
				route.push(`${doc.lang === 'ua' ? '/proectu/' : '/ru/proekty/'}${doc.uid}/`)
				break
			case 'article':
				route.push(`${doc.lang === 'ua' ? '/novunu/' : '/ru/novosti/'}${doc.uid}/`)
				break
			case 'colors':
				route.push(`${doc.lang === 'ua' ? '/' : '/ru/'}colors/${doc.uid}/`)
				break
			case 'panel':
				route.push(`${doc.lang === 'ua' ? '/' : '/ru/'}${doc.uid}/`)
				break

			default:
				break
		}
	})
	// console.log('route', route)
	return route
}
// const routes = routeGenerator()

export default {
	target: 'static',
	components: ['~/components/forms', '~/components/global', '~/components/items', '~/components/local', '~/components/sections'],
	css: ['~/assets/main.scss'],
	vue: {
		config: {
			// productionTip: true,
			devtools: true,
		},
	},
	head: {
		title: 'cyclone',
		htmlAttrs: {
			lang: 'ua',
		},
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'format-detection', content: 'telephone=no' }, { hid: 'robots', name: 'robots', content: 'follow' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	plugins: [{ src: '@/plugins/vee-validate.js' }, { src: `~/plugins/lazysizes.client.js` }, { src: `~/plugins/masonry.js` }, { src: '~/plugins/responsive-video', mode: 'client' }],

	modules: ['@nuxtjs/sanity/module', '@nuxtjs/i18n', '@nuxtjs/sitemap'],

	styleResources: {
		scss: ['./assets/colors.scss', './assets/mixins.scss'],
	},

	i18n: {
		defaultLocale: 'ua',
		baseUrl: 'https://cyclone-dev.vercel.app/',
		lazy: true,
		langDir: 'i18n/',
		detectBrowserLanguage: false,
		strategy: 'prefix_except_default',
		seo: false,
		parsePages: false, // Disable babel parsing
		locales: [
			{
				code: 'ru',
				name: 'рус',
				file: 'ru.js',
				iso: 'ru-RU',
			},
			{
				isCatchallLocale: true,
				code: 'ua',
				name: 'укр',
				file: 'ua.js',
				iso: 'uk-UA',
			},
		],
		pages: {
			'blog/index': {
				ru: '/novosti',
				ua: '/novunu',
			},
			'blog/_article': {
				ru: '/novosti/:article?',
				ua: '/novunu/:article?',
			},
			'panel/': {
				ru: '/:panel?',
				ua: '/:panel?',
			},
			'colors/_color/': {
				ru: '/:color?',
				ua: '/:color?',
			},
			'projects/index': {
				ru: '/proekty',
				ua: '/proectu',
			},
			'projects/_building': {
				ru: '/proekty/:building?',
				ua: '/proectu/:building?',
			},
			ContactPage: {
				ru: '/kontakty',
				ua: '/kontaktu',
			},
		},
	},

	sanity: {
		projectId: process.env.projectId,
		minimal: true,
		contentHepler: true,
	},

	buildModules: [
		// https://go.nuxtjs.dev/eslint
		'@nuxtjs/eslint-module',
		'@nuxtjs/style-resources',
	],
	router: {
		trailingSlash: true,
	},

	generate: {
		// only pass the urls to the generate function
		fallback: '404.html',
		crawler: false,
		// routes: routes.map((route) => route.url),
		routes() {
			return routeGenerator()
		},
	},
	sitemap: {
		// 	// pass the sitemap objects as is to the sitemap module
		hostname: 'https://cyclone-dev.vercel.app/',
		i18n: false,
		routes() {
			return sitemapGenerator()
		},
	},

	build: {
		// vee validate
		transpile: ['vee-validate/dist/rules'],
		// lazysizes
		extend(config, { isClient, loaders: { vue } }) {
			vue.transformAssetUrls.img = ['data-src', 'src']
			vue.transformAssetUrls.source = ['data-srcset', 'srcset']
		},
	},

	// generate: {
	// 	fallback: true,
	// },
}
