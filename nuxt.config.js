export default {
	target: 'static',
	components: ['~/components/forms', '~/components/global', '~/components/items', '~/components/local', '~/components/sections'],
	css: ['~/assets/main.scss'],

	head: {
		title: 'cyclone',
		htmlAttrs: {
			lang: 'en',
		},
		meta: [{ charset: 'utf-8' }, { name: 'viewport', content: 'width=device-width, initial-scale=1' }, { hid: 'description', name: 'description', content: '' }, { name: 'format-detection', content: 'telephone=no' }],
		link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
	},

	plugins: [{ src: '@/plugins/vee-validate.js' }, { src: '@/plugins/image.js' }, { src: `~/plugins/lazysizes.client.js` }],

	modules: ['@nuxtjs/sanity/module', '@nuxtjs/style-resources'],

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
	],

	build: {
		// vee validate
		transpile: ['vee-validate/dist/rules'],
		// lazysizes
		extend(config, { isClient, loaders: { vue } }) {
			vue.transformAssetUrls.img = ['data-src', 'src']
			vue.transformAssetUrls.source = ['data-srcset', 'srcset']
		},
	},
}
