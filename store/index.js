export const state = (context) => ({
	panels: {},
})

export const getters = {
	panels: (state) => state.panels,
}

export const mutations = {
	setPanelPages(state, payload) {
		state.panels = payload
	},
}

export const actions = {
	bindPanelPages(context, payload) {
		context.commit('setPanelPages', payload)
	},
}
