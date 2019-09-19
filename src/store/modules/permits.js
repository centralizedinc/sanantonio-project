
function initialState() {
    return {
        records:[]
    }
}

const state = initialState()

const mutations = {
    ADD_TAXES(state, payload){
        state.records.push(payload)
    }
}

const actions = {
}

export default {
    state,
    mutations,
    actions
}


