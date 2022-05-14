import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      { id: 1, title: 'Ir ao Mercado', active: false },
      { id: 2, title: 'Comprar Ração', active: false }
    ]
  },
  getters: {
  },
  mutations: {
    addTask (state, title) {
      if (title) {
        state.tasks.push({
          id: new Date().getTime(),
          title,
          active: false
        })
      }
    },
    delTask (state, id) {
      state.tasks = state.tasks.filter(task => task.id !== id)
    },
  },
  actions: {
  },
  modules: {
  }
})
