import db from '../services/localbase.js'

export default {    
    async addTask ({ commit }, title) {
        await commit('addTask', title)
        await commit('getTasks')
    },
    editTask ({ commit }, task) {
        db.collection('tasks').doc({ id: task.id })
        .update({ title: task.title })
        .then(() => { commit('getTasks') })
    },
    desactivateTask ({ commit }, task) {
        db.collection('tasks').doc({ id: task.id })
        .update({ active: !task.active })
        .then(() => { commit('getTasks') })
    },
    deleteTask ({ commit }, id) {
        db.collection('tasks').doc({ id })
        .delete()
        .then(() => { commit('getTasks') })
    }
}
