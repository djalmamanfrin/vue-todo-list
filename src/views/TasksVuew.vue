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
    <list />
  </div>
</template>

<script>
  import List from '../components/tasks/List.vue'

  export default {
    name: 'Tasks',
    components: {
      List
    },
    data() {
      return {
        inputTask: null
      }
    },
    created () {
      this.$store.commit('getTasks')
    },
    methods: {
      handleAddTask () {
        this.$store.dispatch('addTask', this.inputTask)
        this.inputTask = null
      }
    }
  }
</script>
