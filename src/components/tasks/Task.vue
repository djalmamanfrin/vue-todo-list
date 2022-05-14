<template>
  <div>
    <v-list-item
        :class="{ 'blue lighten-4':task.active }"
        @click="task.active = !task.active"
    >
        <template v-slot:default="{}">
            <v-list-item-action>
                <v-checkbox :input-value="task.active"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
                <v-list-item-title
                    :class="{ 'text-decoration-line-through':task.active }"
                >
                    {{ task.title }}
                </v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
                <v-btn
                    icon
                    @click.stop="handleDelTask(task.id)"
                >
                    <v-icon color="red lighten-3">mdi-trash-can</v-icon>
                </v-btn>
            </v-list-item-action>
        </template>
    </v-list-item>
    <v-divider />
  </div>
</template>

<script>
export default {
    name: 'Task',
    components: {},
    props: ['task'],
    methods: {
        handleDelTask (id) {
            this.$store.commit('delTask', id)
        }
    }
}
</script>

<style>

</style>