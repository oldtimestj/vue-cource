import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './action'
import mutations from './mutation'
import user from './moudle/user'

export default new Vuex.Store({
  state,
  mutations,
  actions,
  moudles: {
    user
  }
})
