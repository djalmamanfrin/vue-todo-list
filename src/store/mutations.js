import db from '../services/localbase.js'

export default {    
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
}
