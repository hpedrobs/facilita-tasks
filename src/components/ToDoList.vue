<template>
    <ul class="to-do-list">
        <TaskItem v-for="task in tasks" :item="task" :key="task.id" />
    </ul>
</template>

<script>
import TaskItem from "./TaskItem.vue"

export default {
    name: "ToDoList",
    props: {
        tasks: {
            type: Array,
            required: true,
        },
    },
    components: {
        TaskItem,
    },
}
</script>

<style lang="stylus" scoped>
.to-do-list
  display flex
  flex-direction column
  gap 15px
  width 100%
</style>
