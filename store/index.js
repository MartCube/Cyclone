export const state = (context) => ({
	panels: {},

	// toggle footer visibility
	footer: true,
})

export const getters = {
	panels: (state) => state.panels,
	footer: (state) => state.footer,
}

export const mutations = {
	setPanelPages(state, payload) {
		state.panels = payload
	},
	setFooter(state, payload) {
		state.footer = payload
	},
}

export const actions = {
	bindPanelPages(context, payload) {
		context.commit('setPanelPages', payload)
	},
	bindFooter(context, payload) {
		context.commit('setFooter', payload)
	},
}
