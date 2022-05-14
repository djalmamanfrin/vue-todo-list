<template>
  <div>
    <v-col
      cols="12"
      sm="6"
    >
      <v-text-field
        v-model="inputTask"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
    <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class=""
      >
        <div
          v-for="task, index in $store.state.tasks"
          :key="index"
        >
          <task :task="task"/>
        </div>
      </v-list-item-group>
    </v-list>
  </div>
</template>

<script>
  import Task from '../components/tasks/Task.vue'
  export default {
    name: 'Tasks',
    components: {
      Task
    },
    data() {
      return {
        inputTask: null
      }
    },
    methods: {
      handleAddTask () {
        this.$store.commit('addTask', this.inputTask)
        this.inputTask = null
      }
    }
  }
</script>
