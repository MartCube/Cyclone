export const state = (context) => ({
	panels: {},

	footer: true, // toggle visibility
})

export const getters = {
	panels: (state) => state.panels,
	footer: (state) => state.footer,
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
}

export const actions = {
	bindPanels(context, payload) {
		context.commit('setPanelPages', payload)
	},
	bindModalVideo(context, payload) {
		context.commit('setModalVideo', payload)
	},
	bindFooter(context, payload) {
		context.commit('setFooter', payload)
	},
}
