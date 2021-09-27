export const state = (context) => ({
	panels: {},
	modalVideo: false,

	// toggle footer visibility
	footer: true,
})

export const getters = {
	panels: (state) => state.panels,
	footer: (state) => state.footer,
	modalVideo: (state) => state.modalVideo,
}

export const mutations = {
	setPanelPages(state, payload) {
		state.panels = payload
	},
	setFooter(state, payload) {
		state.footer = payload
	},
	setModalVideo(state, payload) {
		state.modalVideo = payload
	},
}

export const actions = {
	bindPanels(context, payload) {
		context.commit('setPanelPages', payload)
	},
	bindFooter(context, payload) {
		context.commit('setFooter', payload)
	},
	bindModalVideo(context, payload) {
		context.commit('setModalVideo', payload)
	},
}
