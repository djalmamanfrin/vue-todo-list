import Vue from 'vue'
import Vuex from 'vuex'

import Localbase from 'localbase'
let db = new Localbase('db')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      // { id: 1, title: 'Ir ao Mercado', active: false },
      // { id: 2, title: 'Comprar Ração', active: false }
    ]
  },
  getters: {
  },
  mutations: {
    getTasks (state) {
      db.collection('tasks').get().then(tasksDB => {
        state.tasks = tasksDB
      })
    },
    addTask (state, title) {
      db.collection('tasks').add({
        id: new Date().getTime(),
        title,
        active: false
      })
    }
    
  },
  actions: {
    async addTask ({ commit }, title) {
      await commit('addTask', title)
      await commit('getTasks')
    },
    editTask ({ commit }, task) {
      db.collection('tasks').doc({ id: task.id })
        .update({
          title: task.title
        })
        .then(() => {
          commit('getTasks')
        })
    },
    deleteTask ({ commit }, id) {
      db.collection('tasks').doc({ id })
        .delete()
        .then(() => {
          commit('getTasks')
        })
    }
  },
  modules: {
  }
})
