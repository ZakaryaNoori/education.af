
// initial state
const state = () => ({
    user: null,
    token: null
})

// getters
const getters = {
    user: (state) => state.user,
    token: (state) => state.token
}

// actions
const actions = {
    setUser({ commit }, user) {
        commit('setUser', user)
    },

    setToken({ commit }, token) {
        commit('setToken', token)
    },
}

// mutations
const mutations = {
    setUser(state, user) {
        state.user = user
    },

    setToken(state, token) {
        state.token = token
    }
}

export default {
    namespaced: true,
    state,
    getters,
    actions,
    mutations
}