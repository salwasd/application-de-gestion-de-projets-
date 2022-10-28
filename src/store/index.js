import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    counter: 0
  },
  getters: {
    cntsq(state){
      return state.counter * state.counter
    },
    cntm(state){
      return state.counter / 2
    }
  },
  mutations: {
    addd(state){
      state.counter++
    },
    minus(state){
      state.counter--
    }
  },
  actions: {
  },
  modules: {
  }
})
