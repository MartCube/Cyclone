import { createClient } from '@nuxtjs/sanity'
import fetch from 'node-fetch'
import { sitemapData } from './plugins/queries'

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
				sitemaproute.push({
					url: `/${doc.uid}/`,
					changefreq: 'monthly',
					priority: 1,
					lastmod: doc.updated,
				})
				break
			case 'project':
				sitemaproute.push({
					url: `/projects/${doc.uid}/`,
					changefreq: 'monthly',
					priority: 1,
					lastmod: doc.updated,
				})
				break
			case 'colors':
				sitemaproute.push({
					url: `/colors/${doc.uid}/`,
					changefreq: 'monthly',
					priority: 1,
					lastmod: doc.updated,
				})
				break
			case 'panel':
				sitemaproute.push({
					url: `/${doc.uid}/`,
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
		switch (doc.type) {
			case 'page':
				route.push(`/${doc.uid}/`)
				break
			case 'project':
				route.push(`/projects/${doc.uid}/`)
				break
			case 'colors':
				route.push(`/colors/${doc.uid}/`)
				break
			case 'panel':
				route.push(`/${doc.uid}/`)
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

	head: {
		title: 'cyclone',
		htmlAttrs: {
			lang: 'ua',
		},
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { name: 'format-detection', content: 'telephone=no' }, { hid: 'robots', name: 'robots', content: 'follow' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	plugins: [{ src: '@/plugins/vee-validate.js' }, { src: `~/plugins/lazysizes.client.js` }, { src: `~/plugins/masonry.js` }, { src: '~/plugins/responsive-video', mode: 'client' }],

	modules: ['@nuxtjs/sanity/module', '@nuxtjs/sitemap'],

	styleResources: {
		scss: ['./assets/colors.scss', './assets/mixins.scss'],
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
		// routes: routes.map(route => route.url)
		fallback: '404.html',
		crawler: false,
		// routes: routes.map((route) => route.url),
		routes() {
			return routeGenerator()
		},
	},
	sitemap: {
		// pass the sitemap objects as is to the sitemap module
		hostname: 'https://cyclone-dev.vercel.app/',
		// exclude: ['sitemap'],
		trailingSlash: true,
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
