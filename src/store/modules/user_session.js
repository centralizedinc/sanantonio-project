function initialState() {
    return {
        user:{
            fname:'',
            lname:'',
            avatar:'',
            email:''
        }
    }
}

const state = initialState()

const mutations = {
    LOGIN(state, payload){
        state.user = payload
    },
    FB_LOGIN(state, payload){
        state.user.fname = payload.profile.name.givenName
        state.user.lname = payload.profile.name.familyName
        state.user.email = payload.profile.emails[0].value
        state.user.avatar = payload.profile.photos[0].value
    },
    GOOGLE_LOGIN(state, payload){
        state.user.fname = payload.profile.name.givenName
        state.user.lname = payload.profile.name.familyName
        state.user.email = payload.profile.emails[0].value
        state.user.avatar = payload.profile.photos[0].value
    }
}

const actions = {
}

export default {
    state,
    mutations,
    actions
}