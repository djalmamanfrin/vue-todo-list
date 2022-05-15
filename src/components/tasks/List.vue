<template>
  <div>
        <drop-list
            :items="tasks"
            @reorder="$event.apply(tasks)"
        >
            <template v-slot:item="{item, reorder}">
                <drag
                    :key="item.id"
                    :data="item"
                >
                    <task
                        style="background-color: white"
                        :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"
                        :task="item"
                    />
                    <v-divider/>
                </drag>
            </template>
        </drop-list>
  </div>
</template>

<script>
    import { Drag, Drop, DropList } from "vue-easy-dnd"
    import Task from './Task.vue'
    export default {
        name: 'List',
        components: {
            Drag,
            DropList,
            Drop,
            Task
        },
        computed: {
            tasks () {
                return this.$store.state.tasks
            }
        }

    }
</script>

<style>

</style>