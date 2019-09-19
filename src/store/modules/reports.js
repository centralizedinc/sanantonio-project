
function initialState() {
    return {
        reports: []
    }
}

const state = initialState()

const mutations = {
    SEND_REPORTS(state, payload) {
        state.reports.push(payload)
    }
}

const actions = {
}

export default {
    state,
    mutations,
    actions
}


