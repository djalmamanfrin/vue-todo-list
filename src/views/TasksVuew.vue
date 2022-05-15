<template>
  <div>
    <list />
    <div
      v-if="!$store.state.tasks.length"
      class="mt-16 animate__animated animate__tada"
    >
      <center>
        <v-icon
          size="100"
          color="primary"
        >
          mdi-check
        </v-icon>
        <div class="text-h5 primary--text">
          Nenhuma tarefa
        </div>
      </center>
    </div>
  </div>
</template>

<script>
  import List from '../components/tasks/List.vue'

  export default {
    name: 'Tasks',
    components: {
      List
    },
    created () {
      this.$store.commit('getTasks')
    }
  }
</script>
