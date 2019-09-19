
function initialState() {
    return {
       details:{
           application_fee: '2,500.00',
           insurance:'1,800.00',
           convenience_fee: '50.00',
            total:'4,350.00'
       }
    }
}

const state = initialState()

const mutations = {
    SET_PAYMENT(state, payload){
        state.details = payload
    }
}

const actions = {
}

export default {
    state,
    mutations,
    actions
}


