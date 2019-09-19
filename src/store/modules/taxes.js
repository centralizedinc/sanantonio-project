
function initialState() {
    return {
        records:[{
            tax_type:'Real Estate Tax',
            title_no:'068-2015000320',
            amount:'5,000.00',
            status: 'PAID',
            date: '07-02-2018'
          }]
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


