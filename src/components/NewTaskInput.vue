<template>
  <div>
    <v-col
      cols="12"
    >
      <v-text-field
        v-model="inputTask"
        label="Qual sua tarefa?"
        outlined
        clearable
        @keyup.enter="handleAddTask"
      ></v-text-field>
    </v-col>
  </div>
</template>

<script>
export default {
    name: 'NewTaskInput',
    components: {},
    data() {
      return {
        inputTask: null
      }
    },
    methods: {
      handleAddTask () {
        this.$store.dispatch('addTask', this.inputTask)
        this.inputTask = null
      }
    }

}
</script>

<style>

</style>