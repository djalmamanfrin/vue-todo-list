<template>
  <div>
      <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-text-field
          v-model="title"
          lable="Título"
          placeholder="Informe o novo título"
          outlined
          class="px-3"
        ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="grey"
            text
            @click="$emit('close')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary"
            text
            @click="handleEdit"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  name: 'ModalEdit',
  props: ['task'],
  components: {},
  data() {
    return {
      dialog: true,
      title: null
    }
  },
  created () {
    this.title = this.task.title
  },
  methods: {
    handleEdit () {
      this.$store.commit('editTask', {title: this.title, id: this.task.id})
      this.$emit('close')
    }
  }
}
</script>

<style>

</style>