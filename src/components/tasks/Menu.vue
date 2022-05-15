<template>
  <div>
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          v-bind="attrs"
          v-on="on"
          icon
        >
          <v-icon> mdi-dots-vertical </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
            <v-icon left> {{ item.icon }} </v-icon>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <modal-edit
        v-if="items[0].modal"
        @close="items[0].modal = false"
        :task="task"
    />
    <modal-delete
        v-if="items[1].modal"
        @close="items[1].modal = false"
        :task="task"
    />
  </div>
</template>

<script>
  import ModalEdit from '../modals/Edit.vue'
  import ModalDelete from '../modals/Delete.vue'

export default {
  components: { ModalEdit, ModalDelete},
  props: ['task'],
  data: () => ({
    items: [
        {
          icon: 'mdi-pencil',
          title: 'Editar',
          modal: false,
          click () {
            this.modal = true
          }
        },
        {
          icon: 'mdi-trash-can',
          title: 'Excluir',
          modal: false,
          click () {
            this.modal = true
          }
        },
    ]
  }),
  methods: {}
}
</script>

<style>

</style>