import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    USER_SESSION:{}
  },
  mutations: {
    LOGIN(state, payload){
      state.USER_SESSION = payload
    },
    LOGOUT(state, payload){
      state.USER_SESSION = payload
    }
  },
  actions: {

  }
})